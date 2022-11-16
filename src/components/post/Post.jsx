//  import "./post.css";
// import { Link } from "react-router-dom";

// export default function Post({ post }) {
//   const PF = "http://localhost:5000/images/";
//   return (
//     <Link to={`/post/${post._id}`} className="link">
//     <div className="card">
//       <div className="leftpane">
//         {post.photo && <img className="cardImage" src={PF + post.photo} alt="" />}
//       </div>
//       <div className="rightPane">
//           <div className="categoryBox">
//           <h2 className="cardCategory">{post.category}</h2>
//           </div>
//           <h2 className="cardTitle">{post.title}</h2>
//           <div className="cardDetails">
//             <h3 className="cardAuthor">{post.username}</h3>
//             <h4 className="cardDate">{new Date(post.createdAt).toDateString()}</h4>
//           </div>
//       </div>
//     </div>
//     </Link>
//   );
// }
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
  const PF="https://experio-backend-sahil-halgekar.onrender.com/images/";
  return (
    <div className="post">
      {post.photo &&(
      <img
        className="postImg"
        src={post.photo}
      />)}
      <div className="postInfo">
        <div className="categoryBox">
          {
            <span className="catBoxStyle">{post.category}</span>
          }
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <h3 className="cardAuthor">Author: {post.username}</h3>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
  </div>
  );
}

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Link } from "react-router-dom";

// export default function Post({ post }) {
//   const PF = "http://localhost:5000/images/";
//   return (
//     <Link to={`/post/${post._id}`} className="link">
//     <Card className="card1" sx={{width: "40%"}}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="400"
//         image = {PF + post.photo}
//         className= "image"
//       />
//       <CardContent>
//       <div className="categoryBox" >
//         <Typography variant="body2" color="text.secondary">
//         {post.category}
//         </Typography>
//       </div>
//         <Typography gutterBottom variant="h3" className="title" component="div">
//         {post.title}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">{post.username}</Button>
//         <Button className="date-button" size="small">{new Date(post.createdAt).toDateString()}</Button>
//       </CardActions>
//     </Card>
//     </Link>
//   );
// }