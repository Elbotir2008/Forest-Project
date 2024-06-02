import { Link } from "react-router-dom";
import "./footer.scss"
import Backtop from "../backtop/Backtop";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        /* you can also use 'auto' behaviour 
            in place of 'smooth' */
    });
};
  return (
    <footer>
      <div className="container">
        <div className="flex-class footer-flex">
          <div className="footer-left flex-class">
            <img src="./logo.svg" className="logo" onClick={() => location.reload()} alt="Eror" />
            <h3>© Все право защищены 2021</h3>
          </div>
          <div className="footer-middle flex-class">
            <ul className="flex-class">
              <li><Link to={"/"}>О нас</Link></li>
              <li><Link to={"/projects"}>Проекты</Link></li>
              <li><Link to={"/uslugi"}>Услуги</Link></li>
              <li><Link to={"/"}>Консультация</Link></li>
              <li><Link to={"/contacts"}>Контакты</Link></li>
            </ul>
          </div>
          <div className="footer-right flex-class">
            <Backtop />
            <img src="./arrow-up.svg" className="arrow-up" onClick={scrollToTop} alt="Eror" />
            <div className="flex-class">
              <img src="./telgramm.svg" alt="Eror" />
              <img src="./facebook.svg" alt="Eror" />
              <img src="./youtube.svg" alt="Eror" />
              <img src="./instagram.svg" alt="Eror" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer