import { useParams } from "react-router-dom";
import { useState, useEffect, React } from "react";
import Header from "./../../components/Header/Header.js";
import Comment from "../../components/Comment/Comment.js";
import "./../../styles/post.scss"
import Post2 from "./Post2";
function Post(props) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const { id } = useParams()
  const { categoryId } = useParams()
  const token = localStorage.getItem('accessToken');
  const [cmt_api, setCmt_api] = useState("")
  const [comment_cnt, setComment_cnt] = useState(10000);
  let mIdx = 0;
  let i=0;
  console.log("[post.js]postid:", id);
  console.log("[post.js]categoryId:", categoryId);
  function get() {
    fetch(`http://54.180.210.232:8080/api/v1/posts?role=FREE&category=${categoryId}&page=0`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    }) //method get 은 생략 가능
      .then((res) => res.json())
      .then((res) => setContent(res.result))
      .then((res) => setLoading(false))
    
  }

  

  function get_comment() {
    fetch(`http://54.180.210.232:8080/api/v1/comments/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    })
      .then((res) => res.json())
      .then((res) => setCmt_api(res.result.commentList))

    console.log("댓글:", cmt_api)
    //console.log("댓글:", cmt_api, "postid:", id, "댓글 갯수:", cmt_api.result.commentList.length)


    //.then((res) => console.log("댓글:", res, "postid:", id, "댓글 갯수:", res.result.commentList.length))
    //.then((res) => console.log("댓글:", res), setComment_cnt(res.result.commentList.length))
    //.then((res) => setComment_cnt(res.result.commentList.length))
    //.then((res) => console.log("적용됬는지.....:", comment_cnt))
  }

  

  

  function post_comment() {
    fetch(`http://54.180.210.232:8080/api/v1/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },

      body: JSON.stringify({
        postId: id,
        parentId: null,
        content: comment,
        hierarchy: "PARENT"


      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response, "댓글 post햇다"))
      .then((response) => get_comment())


    setComment("")


  }


  useEffect(() => {
    
    get();
    get_comment();
    
  }, []);

  useEffect(() => {
    if (content && Object.keys(content).length > 0) {
      console.log("content :", content[0])
    }
  }, [content])




  const onChange = (event) => {
    setComment(event.target.value);
    console.log("댓글쓰는중:", comment);
  };

  console.log("나오나???????????",content);
  //console.log("해체중:", content.content[0].writer);
  // for(let i=0; i <= 99999; i++)
  //   {
  //     if (id == content[i].postId){
  //       mIdx=i;
  //     }
  //   }
  //   console.log("함수 matchIdx:",mIdx);

//   function matchIdx(length){
//     //get();
    // for(let i=0; i <= 99999; i++)
    // {
    //   if (id == content[i].postId){
    //     mIdx=i;
    //   }
    // }
    // console.log("함수 matchIdx:",mIdx);

//  }





async function getResponse() {
	const response = await fetch(
		`http://54.180.210.232:8080/api/v1/posts?role=FREE&category=${categoryId}&page=0`,
		{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
			}
		}
	);
	let data = await response.json(); // Extracting data as a JSON Object from the response
  data=data.result.content;
  console.log("~~~~~~~~~~~~~~~~~~~~",data)
  for(let i=0; i < data.length; i++)
    {
      console.log(data[i].postId);
      if (data[i].postId == id){
        
        mIdx = i
       
      }
    }
   // console.log("함수 matchIdx:",mIdx);
    
  
   return mIdx;
}

function testt(){
  fetch(`http://54.180.210.232:8080/api/v1/posts?role=FREE&category=${categoryId}&page=0`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    }) //method get 은 생략 가능
      .then((res) => res.json())
      .then((res) => setContent(res.result))
      .then((res) => setLoading(false))

      const t1t1=content;
  return t1t1;
}

function testt2(){
  return testt();
}



  console.log("cmt_api 객체?:", content === Object(content));
  console.log("댓글222:", cmt_api)
  console.log("lengh이용:", content.contentsCount)
  //console.log("숫자 맞는지?:", content[id].postId)
  //console.log("숫자 맞는지?:", content.contentsCount - content.content[id].postId)
  //console.log("해체중:", content.content[0].postId);

  //const post_id = content.contentsCount - content.content[id].postId
  return (
    <div>
      <Header title={props.header_title} />
      
      {loading ? ("") : (

<Post2 content={content} id={id} />

      )}


    </div>

  );
}

export default Post;
