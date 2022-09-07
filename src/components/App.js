import video from "../data/video.js";
import Video from "./Video"
import Header from "./Header.js";
import CommentButtons from "./CommentButtons.js";
import {useState} from "react"
import CommentList from "./CommentList.js";
/* List of component:
App
|
|--Video frame
|--Info - header plus views and date
|--Like/dislike buttons
|--Comment Button + Comment List
    |
    |--Comment

*/
function App() {
  //console.log("Here's your data:", video);
  let upvoteCount = video.upvotes
  const [upvote, setUpvote] = useState({upvotes: video.upvotes})
  const [downvote, setDownvote] = useState({downvotes: video.downvotes})
  function handleUpvote(obj){
    setUpvote({
      upvotes: obj
    })
  }

  function handleDownvotes(obj){
    setDownvote({
      downvotes: obj
    })
  }

  return (
    <>
      <Video source={video.embedUrl}/>
      <Header data={video}/>
      <CommentButtons upvoteIn={upvote} downvoteIn={downvote} handleUpVote={handleUpvote} handleDownvotes={handleDownvotes}/>
      <CommentList data={video.comments}/>
    </>
  );
}

export default App;
