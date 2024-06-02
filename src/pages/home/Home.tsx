import "./home.scss"
const Home = () => {
  return (
    <main>
      <section className="hero-section" id="hero">
        <div className="container">
          <div className="hero-flex flex-class">
            <img src="./hero-line.svg" className="smallLine" alt="Eror" />
            <div className="hero-left">
              <h1>посреди <span>леса</span> далеко от шума</h1>
              <p>Равным образом реализация намеченных плановых заданий широкому кругу (специалистов) участие в формировании</p>
              <button>Связаться с нами</button>
            </div>
            <div className="hero-right">
              <img src="./pause.svg" className="pause" alt="Eror" />
            </div>
          </div>
          <div className="hero-bottom flex-class">
            <img src="./hero-number.svg" alt="Eror" />
            <img src="./hero-small-img.svg" alt="Eror" />
          </div>
        </div>
      </section>
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-top">
            <h1>о нас</h1>
            <div className="flex-class">
              <img src="./about-line.svg" alt="Error" />
              <h2><span>принципы</span> которых
                мы придерживаемся</h2>
            </div>
          </div>
          <div className="about-flex flex-class">
            <div className="about-left">
              <div className="about0">
                <div className="flex-class">
                  <h3>01</h3>
                  <h4>Качества</h4>
                </div>
                <p>Равным образом реализация намеченных плановых заданий широкому кругу (специалистов) участие в формировании вилла в лесу </p>
              </div>
              <div className="about0">
                <div className="flex-class">
                  <h3>02</h3>
                  <h4>Креативность</h4>
                </div>
                <p>Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий</p>
              </div>
              <div className="about0">
                <div className="flex-class">
                  <h3>03</h3>
                  <h4>Современность</h4>
                </div>
                <p>Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий играет важную роль в формировании позиций</p>
              </div>

            </div>
            <div className="about-right">
              <img src="./about-img.svg" alt="Error" />
              <img src="./pause.svg" className="pause" alt="Error" />
            </div>
          </div>
        </div>
      </section>
      <section className="whatWeDo-section" id="whatWeDo">
        <div className="container">
          <h1>Что мы можем?</h1>
          <div className="whatWeDo-flex flex-class">
            <div className="whatWeDo-left">
              <div className="flex-class">
                <img src="./about-line.svg" alt="Error" />
                <h2><span>Индивидуальное</span>
                  проектирование вашех домов</h2>
              </div>
              <p>На выбор подходяший раззмер и конфигурация дома для разных
                земельных участок и разного состава семьи ( молодая пара. семья с
                маленьким ребенком, дом для большой семьи).Мы сможем установить дом где угодно - на участке перед вышем домом, в лесной зоне, на береге реки. Доставку осуществляет наша компания
              </p>
              <button>Подробнее об услугах</button>
            </div>
            <div className="whatWeDo-right">
              <img src="./whatWeDo-img.svg" alt="Error" />
              <img src="./pause.svg" className="pause" alt="Error" />
            </div>
          </div>
        </div>
      </section>
      <section className="statistics-section" id="statistics">
        <div className="container">
          {/* <div className="statistics-grid grid-class">
            <div className="statistics-grid1">
              <h1>9</h1>
              <p>лет опыта
                работы
              </p>
            </div>
            <div className="statistics-grid2">
              <h1>13</h1>
              <p>крутых  дизайнеров и
                архитекторов
              </p>
            </div>
            <div className="statistics-grid3">
              <h1>103</h1>
              <p>проектов во всех
                регионах страны
              </p>
            </div>
          </div> */}
        </div>
      </section>
      <section className="project-section" id="project">
        <div className="container">
          <h1>Проекты</h1>
          <div className="flex-class">
            <img src="./about-line.svg" className="project-line" alt="Error" />
            <h2>Проекты компании</h2>
          </div>
          <div className="projects-grid grid-class">
            <div className="projects-grid1">
              <img src="./project-img1.svg" className="partnerImg1" alt="Error" />
              <div className="flex-class project-flex">
                <p>Лесный дом в Новосибирске</p>
                <div className="flex-class flex-class1">
                  <img src="./project-small-line.svg" alt="Error" />
                  <img src="./project-small-arrow-left.svg" alt="Error" />
                </div>
              </div>
            </div>
            <div className="projects-grid1">
              <img src="./project-img2.svg" className="project-img2 partnerImg1" alt="Error" />
              <div className="flex-class project-flex">
                <p>Коттедж в Краснодаре</p>
                <div className="flex-class flex-class2">
                  <img src="./project-small-line.svg" alt="Error" />
                  <img src="./project-small-arrow-left.svg" alt="Error" />
                </div>
              </div>
            </div>
            <div className="projects-grid1">
              <img src="./project-img3.svg" className="partnerImg1" alt="Error" />
              <div className="flex-class project-flex">
                <p>Коттедж в Новгороде</p>
                <div className="flex-class flex-class3">
                  <img src="./project-small-line.svg" alt="Error" />
                  <img src="./project-small-arrow-left.svg" alt="Error" />
                </div>
              </div>
            </div>
          </div>
          <img src="./project-arrows.svg" className="project-arrows" alt="Error" />
        </div>
      </section>
      <section className="partner-section" id="partner">
        <div className="container">
          <h1>ПАРТНЕРЫ</h1>
          <div className="flex-class">
            <img src="./about-line.svg" className="smallLine" alt="Error" />
            <h2>наши партнеры</h2>
          </div>
          <div className="partner-grid grid-class">
            <img src="./partner-img1.svg" alt="Error" />
            <img src="./partner-img2.svg" alt="Error" />
            <img src="./partner-img3.svg" alt="Error" />
            <img src="./partner-img4.svg" alt="Error" />
            <img src="./partner-img5.svg" alt="Error" />
            <img src="./partner-img6.svg" alt="Error" />
            <img src="./partner-img7.svg" alt="Error" />
            <img src="./partner-img8.svg" alt="Error" />
          </div>
        </div>
      </section>
      <section className="konsulContact-section" id="konsulContact">
        <div className="container">
          <div className="konsulContact-flex flex-class">
            <div className="konsulContact-left konsulContact-left-right">
              <div className="flex-class">
                <img src="./about-line.svg" className="smallLine" alt="Error" />
                <h1>КОНСУЛЬТАЦИЯ</h1>
              </div>
              <p>
                Персональный менеджер свяжется с вами
                в течение 15 минут
              </p>
              <form>
                <input type="text" placeholder="Рахматов Самандар" />
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="телефон" />
                <div className="checkBox flex-class">
                  <input type="checkbox" name="check" id="check" />
                  <label htmlFor="check">Согласен(на) с обработкой персональных данных</label>
                </div>
                <button>ОСТАВИТЬ ЗАЯВКУ</button>
              </form>
            </div>
            <div className="konsulContact-right konsulContact-left-right">
              <div className="flex-class">
                <img src="./about-line.svg" alt="Error" />
                <h1>КОНТАКТЫ</h1>
              </div>
              <h3>Наш офис:</h3>
              <p>
                г.Москва ул. Ломоносова д. 16
                9:00-21:00 Без выходных
              </p>
              <br />
              <b>+8 800 800 80 80</b>
              <br />
              <h3>Электронная почта:</h3>
              <p>ForestINVERONMENTAL@mail.ru</p>
              <div className="flex-class">
                <img src="./facebook.svg" alt="Error" />
                <img src="./youtube.svg" alt="Error" />
                <img src="./instagram.svg" alt="Error" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home