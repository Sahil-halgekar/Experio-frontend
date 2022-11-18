import axios from "axios";
import { useContext, useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";
import Parser from "html-react-parser"
import "react-quill/dist/quill.snow.css";
import ReactQuill,{ Quill } from "react-quill"
import ImageResize from 'quill-image-resize-module-react';
import { useHistory } from "react-router";
export default function SinglePost() { 
  Quill.register('modules/imageResize', ImageResize);
  const history=useHistory()
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const path1=location.pathname
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [comment, setComment] = useState([]);
  const [content,setContent]=useState("");
  const [cat, setCat] = useState("");
  const [like, setLike] = useState(0);
  const [updateMode, setUpdateMode] = useState(false);
  useEffect(() => {
    console.log(path1)
    const getPost = async () => {
      const res = await axios.get("https://experio-backend-sahil-halgekar.onrender.com/api/posts/" + path);
      setComment(res.data.comments);
      setLike(res.data.like.length);
      setPost(res.data);
      setTitle(res.data.title);
      setContent(res.data.desc);
      setDesc(Parser(res.data.desc));
      setCat(res.data.category)
    };
    getPost();
  }, [path]);
  const modules={
    toolbar: [
      [{ 'header': [] }, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [
        { 'indent': '-1' },
        { 'indent': '+1' },
      ],
      ['image'],
      [{ 'color': [] }, { 'background': [] }],
      [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
    ],
    
    imageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize']
    },
  }
  const formats = [ 'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'align' ]
  const handleDelete = async () => {
    try {
      await axios.delete(`https://experio-backend-sahil-halgekar.onrender.com/api/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };
  const handleUpdate = async () => {
    
    try {
      await axios.put(`https://experio-backend-sahil-halgekar.onrender.com/api/posts/${post._id}`, {
        username: user.username,
        title,
        desc:content,
      });
      history.push(path1)
      setUpdateMode(false);
    } catch (err) {}
  };
  const handleLike = async () => {
    if(!user)
    {
      history.push(`/register`)
    }
    let flag = 0;
    const res = await axios.get("https://experio-backend-sahil-halgekar.onrender.com/api/posts/" + path);
    console.log(res.data);
    for (let i = 0; i < res.data.like.length; i++) {
      if (user._id === res.data.like[i].likedby) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      try {
        await axios.put(`https://experio-backend-sahil-halgekar.onrender.com/api/posts/like/${post._id}`, {
          likedby: user._id,
        });
        const res = await axios.get("https://experio-backend-sahil-halgekar.onrender.com/api/posts/" + path);
        setLike(res.data.like.length);
      } catch (err) {}
    }
  };

  const handleComment = async () => {
    try {
      await axios.put(`https://experio-backend-sahil-halgekar.onrender.com/api/posts/comment/${post._id}`, {
        username: user.username,
        text,
      });
    } catch (err) {}
    history.push(path1)
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostAuthor">
            Category:
            <Link to={`/?category=${cat}`} className="link">
              <b> {cat}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
         <ReactQuill  modules={modules}  theme="snow" value={content} onChange={setContent} />
          /*<textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />*/
        ) : (
          <p  className="singlePostDesc">{desc}</p>
        )}
        {!updateMode && (
          <button className="likeButton" onClick={handleLike}>
            <i className="fa fa-heart like" aria-hidden="true">
              <span className="likes">{like} Likes</span>
            </i>
          </button>
        )}
        {!updateMode && user && (
          <>
            <p className="cTitle">Add a Comment</p>
            <input
              className="addComment"
              placeholder="Add your comment"
              type="text"
              onChange={(e) => setText(e.target.value)}
            />
            <button className="commentbtn" onClick={handleComment}>
              Post
            </button>
          </>
        )}
        {!updateMode && <p className="cTitle">Comments</p>}
        {!updateMode && comment.map((item) => {
          return (
            <>
              <div className="comments">
                <p className="commentUser">
                  <span className="profileImg">{item.username.charAt(0)}</span>
                  {item.username}
                  <span className="comment-text">: {item.text}</span>
                </p>
              </div>
            </>
          );
        })}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
