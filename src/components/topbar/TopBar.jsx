import { useContext,useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Typography, Avatar } from "@material-ui/core";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://experio-backend-sahil-halgekar.onrender.com/images/";
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <>
    <div className="main-cont">
      <div ref={navRef} className="top">
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link onClick={showNavbar} className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link onClick={showNavbar} className="link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link onClick={showNavbar} className="link" to="/contact">
                CONTACT
              </Link>
            </li>
            <li className="topListItem">
              <Link onClick={showNavbar} className="link" to="/write">
                WRITE
              </Link>
            </li>
            <li className="topListItem" onClick={handleLogout}>
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <>
              <Avatar
                alt={user?.username}
                style={{
                  fontFamily: "monospace",
                  color: "white",
                  backgroundColor: "rgb(247, 67, 97)",
                  marginRight: "15px",
                }}
              >
                {user?.username.charAt(0)}
              </Avatar>
              <Typography
                className="userName"
                variant="h5"
                style={{
                  fontFamily: "monospace",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  fontWeight: "bold",
                  marginRight: "25px",
                }}
              >
                {user?.username}
              </Typography>{" "}
            </>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link onClick={showNavbar} className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link onClick={showNavbar} className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
        </div>
        <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
      </div>
    </>
  );
}
