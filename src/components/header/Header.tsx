import "./header.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [changeColor1, setChangeColor1] = useState(false);
  const [changeColor2, setChangeColor2] = useState(false);
  const [changeColor3, setChangeColor3] = useState(false);
  const [changeColor4, setChangeColor4] = useState(false);
  const [changeColor5, setChangeColor5] = useState(false);
  const [isShrunk, setShrunk] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrunk(true);
      } else {
        setShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (setColor1: boolean, setColor2: boolean, setColor3: boolean, setColor4: boolean, setColor5: boolean) => {
    setChangeColor1(setColor1);
    setChangeColor2(setColor2);
    setChangeColor3(setColor3);
    setChangeColor4(setColor4);
    setChangeColor5(setColor5);
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className={isShrunk ? "shrunk" : ""}>
      <div className="container">
        <nav className="flex-class">
          <div className="nav-left flex-class">
            <img src="./logo.svg" className="logo" onClick={() => location.reload()} alt="Error" />
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <ul className={`flex-class ${menuOpen ? 'open' : ''}`}>
              <li><Link to={"/"}
                onClick={() => handleLinkClick(true, false, false, false, false)}
                style={
                  changeColor1
                    ? { color: "#86DA44", textDecoration: "underline" }
                    : {}
                }
              >О нас</Link></li>
              <li><Link to={"/projects"} onClick={() => handleLinkClick(false, true, false, false, false)}
                style={
                  changeColor2
                    ? { color: "#86DA44", textDecoration: "underline" }
                    : {}
                }>Проекты</Link></li>
              <li><Link to={"/uslugi"} onClick={() => handleLinkClick(false, false, true, false, false)}
                style={
                  changeColor3
                    ? { color: "#86DA44", textDecoration: "underline" }
                    : {}
                }>Услуги</Link></li>
              <li><Link to={"/"} onClick={() => handleLinkClick(false, false, false, true, false)}
                style={
                  changeColor4
                    ? { color: "#86DA44", textDecoration: "underline" }
                    : {}
                }>Консультация</Link></li>
              <li><Link to={"/contacts"} onClick={() => handleLinkClick(false, false, false, false, true)}
                style={
                  changeColor5
                    ? { color: "#86DA44", textDecoration: "underline" }
                    : {}
                }>Контакты</Link></li>
            </ul>
          </div>
          <div className="nav-right flex-class">
            <img src="./facebook.svg" alt="Error" />
            <img src="./instagram.svg" alt="Error" />
            <img src="./youtube.svg" alt="Error" />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;
