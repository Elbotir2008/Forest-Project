import "./header.scss"
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [changeColor1, setChangeColor1] = useState(false);
  const [changeColor2, setChangeColor2] = useState(false);
  const [changeColor3, setChangeColor3] = useState(false);
  const [changeColor4, setChangeColor4] = useState(false);
  const [changeColor5, setChangeColor5] = useState(false);
  // const [isShrunk, setShrunk] = useState(false);


  return (
    <header>
      <div className="container">
        <nav className="flex-class">
          <div className="nav-left flex-class">
            <img src="./logo.svg" className="logo" onClick={() => location.reload()} alt="Eror" />
            <ul className="flex-class">
              <li><Link to={"/"}
                onClick={() => {
                  setChangeColor1(true);
                  setChangeColor2(false);
                  setChangeColor3(false);
                  setChangeColor4(false);
                  setChangeColor5(false);
                }}
                style={
                  changeColor1
                    ? { color: "#86DA44", textDecoration: "underline" }
                    : {}
                }
              >О нас</Link></li>
              <li><Link to={"/projects"} onClick={() => {
                setChangeColor1(false);
                setChangeColor2(true);
                setChangeColor3(false);
                setChangeColor4(false);
                setChangeColor5(false);
              }}
                style={
                  changeColor2
                    ? { color: "#86DA44", textDecoration: "underline" }
                    : {}
                }>Проекты</Link></li>
              <li><Link to={"/uslugi"} onClick={() => {
                setChangeColor1(false);
                setChangeColor2(false);
                setChangeColor3(true);
                setChangeColor4(false);
                setChangeColor5(false);
              }}
                style={
                  changeColor3
                    ? { color: "#86DA44", textDecoration: "underline" }
                    : {}
                }>Услуги</Link></li>
              <li><Link to={"/"} onClick={() => {
                setChangeColor1(false);
                setChangeColor2(false);
                setChangeColor3(false);
                setChangeColor4(true);
                setChangeColor5(false);
              }}
                style={
                  changeColor4
                    ? { color: "#86DA44", textDecoration: "underline" }
                    : {}
                }>Консультация</Link></li>
              <li><Link to={"/contacts"} onClick={() => {
                setChangeColor1(false);
                setChangeColor2(false);
                setChangeColor3(false);
                setChangeColor4(false);
                setChangeColor5(true);
              }}
                style={
                  changeColor5
                    ? { color: "#86DA44", textDecoration: "underline" }
                    : {}
                }>Контакты</Link></li>
            </ul>
          </div>
          <div className="nav-right flex-class">
            <img src="./facebook.svg" alt="Eror" />
            <img src="./instagram.svg" alt="Eror" />
            <img src="./youtube.svg" alt="Eror" />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;