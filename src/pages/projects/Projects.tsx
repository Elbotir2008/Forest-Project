import "./projects.scss"
import "../home/home.scss"
const Projects = () => {
  return (
    <main>
      <section className="projectHero-section" id="projectHero">
        <div className="container">
          <h1>Главная - Проекты -  <p> Котеж в краснодаре</p></h1>
          <div className="whatWeDo-flex flex-class">
            <div className="whatWeDo-left">
              <div className="flex-class">
                <img src="./about-line.svg" alt="Error" />
                <h2>котеж в краснодаре</h2>
              </div>
              <p>Равным образом реализация намеченных плановых заданий широкому кругу (специалистов) участи
                кругу (специалистов) участи
              </p>
              <button>Связаться с нами</button>
              <div className="projectsNumber">
                <img src="./hero-number.svg" className="projects-number" alt="Error" />
              </div>
            </div>
            <div className="whatWeDo-right">
              <img src="./projectHero.svg" alt="Error" />
            </div>
          </div>
        </div>
      </section>
      <section className="projectsKotej-section" id="projectsKotej">
        <div className="container">
          <div className="whatWeDo-flex flex-class">
            <div className="whatWeDo-left">
              <div className="flex-class">
                <img src="./about-line.svg" alt="Error" />
                <h2>Описания котежа</h2>
              </div>
              <p>
                С другой стороны новая модель организационной деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.
                <br />
                <br />
                Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности.Повседневная практика показывает, что начало повседневной работы по формированию позиции требуют от нас анализа системы обучения кадров, соответствует насущным потребностям. Таким образом сложившаяся структура организации требуют определения и уточнения соответствующий условий активизации. Разнообразный и богатый опыт сложившаяся структура организации позволяет оценить значение новых предложений.. Таким образом сложившаяся структура организации требуют определения и уточнения соответствующий условий активизации.
              </p>
            </div>
            <div className="whatWeDo-right">
              <div className="ul-flex flex-class">
                <ul>
                  <li>АДРЕС</li>
                  <li>ПЛОЩАДЬ</li>
                  <li>МАТЕРИАЛЫ</li>
                  <li>СРОК</li>
                  <li>ЭТАЖНОСТЬ</li>
                </ul>
                <ul>
                  <li>г.Краснодар, Чиланзарский район, 24-7-7</li>
                  <li>49 215 М2</li>
                  <li>Битон, цимент, гипс</li>
                  <li>Построенно за 12 месяцев</li>
                  <li>24 этажей</li>
                </ul>
              </div>
              <div className="bottom flex-class">
                <button>Рассчитать подобный проек</button>
                <div className="flex-class">
                  <img src="./projectsKateg-icon.svg" alt="Error" />
                  <p>Наши эксперты рассчитают для вас
                    стоимость строительства объект 45 минут
                  </p>
                </div>
              </div>
            </div>
          </div>
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
              <img src="./project-img1.svg" alt="Error" />
              <div className="flex-class project-flex">
                <p>Лесный дом в Новосибирске</p>
                <div className="flex-class flex-class1">
                  <img src="./project-small-line.svg" alt="Error" />
                  <img src="./project-small-arrow-left.svg" alt="Error" />
                </div>
              </div>
            </div>
            <div className="projects-grid1">
              <img src="./project-img2.svg" className="project-img2" alt="Error" />
              <div className="flex-class project-flex">
                <p>Коттедж в Краснодаре</p>
                <div className="flex-class flex-class2">
                  <img src="./project-small-line.svg" alt="Error" />
                  <img src="./project-small-arrow-left.svg" alt="Error" />
                </div>
              </div>
            </div>
            <div className="projects-grid1">
              <img src="./project-img3.svg" alt="Error" />
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
            <img src="./about-line.svg" alt="Error" />
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
                <img src="./about-line.svg" alt="Error" />
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

export default Projects