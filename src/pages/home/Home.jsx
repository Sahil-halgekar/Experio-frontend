import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import { Link } from "react-router-dom";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://experio-backend-sahil-halgekar.onrender.com/api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="cat">
            <span className="categoryheader">Categories:</span>
            <Link to={`/?category=Education`} className="cats">
              <b>Education</b>
            </Link>
            <Link to={`/?category=Job`} className="cats">
              <b>Job</b>
            </Link>
            <Link to={`/?category=Travel`} className="cats">
              <b>Travel</b>
            </Link>
            <Link to={`/?category=Sports`} className="cats">
              <b>Sports</b>
            </Link>
            <Link to={`/?category=Entertainment`} className="cats">
              <b>Entertainment</b>
            </Link>
            <Link to={`/?category=Others`} className="cats">
              <b>Others</b>
            </Link>
      </div>
      <div className="home">
        <Posts posts={posts} />
      </div>
    </>
  );
}
