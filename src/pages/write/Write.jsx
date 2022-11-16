import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import Select from "react-select"
import "react-quill/dist/quill.snow.css";
import { Context } from "../../context/Context";
import FileBase64 from "react-file-base64"

export default function Write() {
  const [title, setTitle] = useState("");
  // const [value, setValue] = useState("");
  const [photo, setphoto] = useState("");
  const [desc, setDesc] = useState("");
  const { user } = useContext(Context);

  var categoryList=[
    {
      value:1,
      label:"Education"
    },
    {
      value:2,
      label:"Job" 
    },
    {
      value:3,
      label:"Sports"
    },
    {
      value:4,
      label:"Entertainment"
    },
    {
      value:5,
      label:"Travel"
    },
    {
      value:6,
      label:"Others"
    }
  ];
  const [result,setResult]=useState(categoryList.label)
  const categoryhandler=e=>{
    setResult(e.label)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(photo)
    const newPost = {
      username: user.username,
      title,
      photo,
      desc,
      category:result
    };
    // if (file) {
    //   const data =new FormData();
    //   const filename = Date.now() + file.name;
    //   data.append("name", filename);
    //   data.append("file", file);
    //   newPost.photo = filename;
    //   try {
    //     await axios.post("https://experio-backend-sahil-halgekar.onrender.com/api/upload", data);
    //   } catch (err) {}
    // }
    try {
      const res = await axios.post("https://experio-backend-sahil-halgekar.onrender.com/api/posts", newPost);
      window.location.replace("/");
    } catch (err) {}
  };
  return (
    <div className="write">
      <p className="requiredText">Please fill all the fields</p>
      {photo && (
        <img className="writeImg" src={photo} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="description">
          {/* <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label> */}
          <FileBase64
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            required={true}
            onDone={({base64})=>setphoto(base64)}
                    />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
            required={true}
          />
        </div>
        <Select placeholder="Category" className="Category" options={categoryList} required onChange={categoryhandler}/>
        <div className="editorContainer">
          {/* <ReactQuill
              className="editor"
              theme="snow"
              value={value}
              onChange={setValue}
            /> */}
            <textarea
              placeholder="Write your Experience..."
              type="text"
              className="writeInputt writeText"
              onChange={e=>setDesc(e.target.value)}
              required={true}
          ></textarea>
        </div>
      </form>
        <button onClick={handleSubmit} className="writeSubmit" type="submit">
          Publish
        </button>
    </div>
  );
}