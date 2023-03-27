import { useState, React } from "react";
import Comment from "../../components/Comment/Comment.js";
import "./../../styles/post.scss"
//87줄 댓글
//post2 반영??

function Post2(props){
    const [comment, setComment] = useState("");
    const [cmt_api, setCmt_api] = useState("")
    const token = localStorage.getItem('accessToken');
    let idx = 1;
    function getIdx(){
        console.log("함수 getIdx: ", props.content.content.length);
        const length = props.content.content.length;
        console.log("변수 length: ", length )
        const data = props.content.content
        let dIdx=1;
        for(let i=0; i < length; i++){
            console.log("postId:",data[i].postId)
            if (data[i].postId == props.id){
                console.log("t")
                dIdx = i;
            }
        }
        console.log("id와 match 되는 idx:",dIdx);

        return dIdx;
    }

    idx = getIdx();
    console.log("변수 idx값:", idx);

    const onChange = (event) => {
        setComment(event.target.value);
        console.log("댓글쓰는중:", comment);
      };

      function post_comment() {
        fetch(`http://54.180.210.232:8080/api/v1/comments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
          },
    
          body: JSON.stringify({
            postId: props.id,
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

      function get_comment() {
        fetch(`http://54.180.210.232:8080/api/v1/comments/${props.id}`, {
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

    return(
        <div>
            <div className="post_wrapper">

        <div className="post_header_box">
          <img className="userImg" src="/userImg.png"></img>
          <span className="name_date_box">
            <div className="name_date">
              {/* {content.content[mIdx].writer} */}

            </div>
            <div className="name_date">{props.content.content[idx].createdAt}</div>
          </span>
        </div>
        <div className="post_content_box">
          
          <div className="post_title">{props.content.content[idx].title}</div>
          {props.content.content[idx].imgUrl == null ? ("") : (<img className="post_img" src={props.content.content[idx].imgUrl}></img>
          )}
          <div className="post_content">{props.content.content[idx].content}</div>
        </div>
        <div className="cmt_wrapper">
            
          {/* <ul>
            {props.comment_cnt == 0 ? <h1>댓글 0개, 댓글 {props.comment_cnt}개</h1> : props.cmt_api.map((cmt, index) => (<li key={index}><div><Comment content={cmt.parent.content} createdAt={cmt.parent.createdAt} /></div></li>))
            }
          </ul> */}
        </div>
        {/* cmt_api.map((cmt, index) => (<li key={index}><Comment content={cmt.parent.content} /></li> */}
        <div className="cmt_input_wrapper">
          <input className="cmt_input" placeholder="댓글을 입력하세요." onChange={onChange} value={props.comment}></input>
          <div className="submit_btn" onClick={post_comment}>전송</div>
        </div>
      </div>
           
        </div>
    );
}


export default Post2;