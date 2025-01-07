import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Pencil, Trash2, Calendar, ArrowLeft } from 'lucide-react';
import { supabase } from '../lib/supabase';
import Button from '../components/ui/Button';
import { formatDate } from '../lib/utils';
import type { Post } from '../types/blog';

export default function PostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = React.useState<Post | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
  }, []);

  React.useEffect(() => {
    async function fetchPost() {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
        navigate('/');
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchPost();
  }, [id, navigate]);

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    try {
      const { error } = await supabase.from('posts').delete().eq('id', id);
      if (error) throw error;
      navigate('/');
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/4" />
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!post) return null;

  const isAuthor = user?.id === post.user_id;

  return (
    <article className="max-w-3xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to posts
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {post.title}
        </h1>
        
        <div className="flex items-center justify-between text-gray-500 border-b border-gray-200 pb-4">
          <div className="flex items-center space-x-2">
            <Calendar size={20} />
            <time dateTime={post.created_at}>
              {formatDate(post.created_at)}
            </time>
          </div>
          
          {isAuthor && (
            <div className="flex space-x-3">
              <Button
                variant="secondary"
                onClick={() => navigate(`/posts/${post.id}/edit`)}
              >
                <Pencil size={18} className="mr-2" />
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={handleDelete}
              >
                <Trash2 size={18} className="mr-2" />
                Delete
              </Button>
            </div>
          )}
        </div>
      </header>

      <div className="prose max-w-none">
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {post.summary}
        </p>
        <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </div>
    </article>
  );
}