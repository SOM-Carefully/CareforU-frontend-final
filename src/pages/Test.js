// import "../../../../Downloads/frontend-chaehyun 2/src/components/Header/Header.js";
// import Header from "../../../../Downloads/frontend-chaehyun 2/src/components/Header/Header.js";
// import Input_box from "../../../../Downloads/frontend-chaehyun 2/src/components/Input_box/Input_box";
// import Category_btn from "../../../../Downloads/frontend-chaehyun 2/src/components/Category_btn/Category_btn";
// import Category_tab from "../../../../Downloads/frontend-chaehyun 2/src/components/Category_tab/Category_tab";
//
//
// // function Test() {
// //   return (
// //     <div>
// //       <div className="display">
// //         <Header title="답변 작성" />
// //         <div className="display_container">
// //           <Input_box
// //             input_title="답변 작성하기"
// //             height="200px"
// //             place_holder="답변을 작성해주세요."
// //           />
// //           <Input_box
// //             input_title="답변 작성하기"
// //             height="100px"
// //             place_holder="답변을 작성해주세요."
// //           />
// //           <Category_btn />
// //           <Category_tab />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
//
// // export default Test;
// import { useState } from "react";
// import { Uploader } from "uploader";
// import { UploadButton } from "react-uploader";
//
// const uploader = Uploader({
//   apiKey: "free"
// });
//
//
//
//
// function Test() {
//   const [img, setImg] = useState("")
//   const MyButtonComponent = () =>
//     <UploadButton uploader={uploader}         // Required.
//       //options={options}           // Optional.
//       onComplete={files => {      // Optional.
//         if (files.length === 0) {
//           console.log('No files selected.')
//         } else {
//           console.log('Files uploaded:');
//           console.log("1.img:", files.map(f => f.fileUrl));
//           setImg(files.map(f => f.fileUrl));
//
//         }
//       }}>
//       {({ onClick }) =>
//         <button onClick={onClick}>
//           Upload ...
//         </button>
//       }
//     </UploadButton>
//   //console 옮기기!!!!!!!!!!!!!!!!!
//
//   function testGet() {
//     console.log("함수 정상");
//     console.log("2.img:", img);
//     fetch("http://54.180.210.232:80/api/v1/posts?category=FREE", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         title: "제목이다 11월 24일",
//         content: "내용",
//         imgUrl: img[0]
//       }),
//     })
//       .then((response) => response.json())
//       .then((result) => alert("결과: ", result));
//   }
//
//   return (
//     <div>
//       <Header title="내가 작성한 글" />
//       <MyButtonComponent></MyButtonComponent>
//       <button onClick={testGet}>사진 전송</button>
//
//     </div>
//   );
// }
//
// export default Test;