export interface Post {
  id: string;
  title: string;
  content: string;
  summary: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface CreatePostData {
  title: string;
  content: string;
  summary: string;
}

export interface UpdatePostData extends CreatePostData {
  id: string;
}