import React, {useContext,useState,useRef,useMemo} from 'react';
import "./write.css";
import axios from "axios";
import Select from "react-select"
import "react-quill/dist/quill.snow.css";
import { Context } from "../../context/Context";
import FileBase64 from "react-file-base64"
import JoditEditor from 'jodit-react';
 

export default function Write() {
  
  const [title, setTitle] = useState("");
  // const [value, setValue] = useState("");
  const [photo, setphoto] = useState("");
  const [desc, setDesc] = useState("");
  const { user } = useContext(Context);
  const editor = useRef(null);
  const config = useMemo(
    () => ({
        readonly: false, 
        "uploader": {
          "insertImageAsBase64URI": true
        }
    }),
    []
);

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
    const newPost = {
      username: user.username,
      title,
      desc,
      photo,
      category:result
    };
    try {
      const res = await axios.post("https://experio-backend-sahil-halgekar.onrender.com/api/posts", newPost);
      window.location.replace("/");
    } catch (err) {}
  };
  return (
    <div className="write">
      <p className="requiredText">Please fill all the fields**</p>
      {photo && (
        <img className="writeImg" src={photo} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="description">
          <div className="writeIcon">
          <FileBase64
            type="file"
            id="fileInput"
            required={true}
            multiple={false}
            onDone={({base64})=>setphoto(base64)}
                    />
          </div>
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
        <JoditEditor
                  ref={editor}
                  value={desc}
                  config={config}
                  
                  onChange={setDesc}
                />

            {/*<textarea
              placeholder="Write your Experience..."
              type="text"
              className="writeInputt writeText"
              onChange={e=>setDesc(e.target.value)}
              required={true}
          ></textarea>*/}
        </div>
      </form>
        <button onClick={handleSubmit} className="writeSubmit" type="submit">
          Publish
        </button>
    </div>
  );
}