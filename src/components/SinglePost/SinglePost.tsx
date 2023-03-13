import{ FC, useState, useEffect } from 'react'
import apiClient from '../../common/api';
import { IComment, IPost, IPostData, IUser } from '../../types';
import CommentsItem from '../CommentsItem/CommentsItem';




const SinglePost: FC<IPostData> = ({id,  userId}) => {
  const [postData, setPostData] = useState<IPost>()
  const [postUser, setPostUser] = useState<IUser>()
  const [postComment, setPostComment] = useState<IComment[]>([])

  const getSinglePost = async () => {
    try {
      const res = await apiClient.get<IPost>(`/posts/${id}`);
      setPostData(res.data);
    } catch (error) {
      console.log({ error });
    } 
  };

  const getUserData = async () => {
    try {
      const res = await apiClient.get<IUser>(`/users/${userId}`);
      setPostUser(res.data);
    } catch (error) {
      console.log({ error });
    } 
  };

  const getComments = async () => {
    try {
      const res = await apiClient.get<IComment[]>(`/comments?postId=${id}`);
      setPostComment(res.data);
    } catch (error) {
      console.log({ error });
    } 
  };

  const fetchData = async () => {
    await getSinglePost();
    await getComments();
    await getUserData()
  }

  useEffect(() => {
    fetchData()
  }, [id]);

  if(id === 0){
    return (
      <div>
        Choose post
      </div>
    )
  }

  return (
    <div>
      <h4>{postUser?.name}</h4>
      <h4>{postData?.title}</h4>
      <p>{postData?.body}</p>
      <div>
        {postComment.map((comment) => <CommentsItem key={comment.id} {...comment}/>)}
      </div>
    </div>
  )
}

export default SinglePost