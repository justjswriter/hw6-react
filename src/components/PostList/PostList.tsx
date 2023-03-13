import { useState, useEffect, FC } from "react";
import apiClient from "../../common/api";
import { IPost } from "../../types";
import './PostList.css'

interface IPostListProps{
  onChangeId: (id: number, userId: number) =>void
}

const PostList: FC<IPostListProps> = ({onChangeId}) => {
  const [posts, setPost] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  const getPost = async () => {
    try {
      const res = await apiClient.get<IPost[]>("/posts");
      setPost(res.data);
    } catch (error) {
      console.log({ error });
    } finally{
        setIsLoading(false)
    }
  };

  useEffect(() => {
    getPost();
    return () =>{
      console.log('Unmounted')
    }
  }, []);

  if(isLoading){
    return(
        <div>Loading</div>
    )
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <button onClick={() => onChangeId(post.id, post.userId)}>view</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
