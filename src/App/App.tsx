import { useState } from "react"
import { PostList } from "../components"
import SinglePost from "../components/SinglePost/SinglePost"
import { IPostData } from "../types"
import './style.css'


const App = () => {

  const [postId, setPostId] = useState<IPostData>({id: 0,userId:0})


  const changeId = (id:number, userId: number) =>{
    setPostId({id, userId: userId})
    console.log(postId)
  }



  return(
    <div className="App">
      <div className="column" ><PostList onChangeId={changeId}/></div>
      <div className="container">
      <SinglePost {...postId}/>
      </div>
    </div>
  )
}

export default App