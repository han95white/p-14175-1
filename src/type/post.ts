export type PostWithContentDto = {
  id: number;
  createDate: string;
  modifyDate: string;
  title: string;
  content: string;
};

export type PostDto = Omit<PostWithContentDto, "content">;

export type PostCommentDto = {
  id: number;
  createDate: string;
  modifyDate: string;
  content: string;
};