import "./contacts.scss"
import "../uslugi/uslugi.scss"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormGroup } from "@mui/material";
import { useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 450,
  bgcolor: '#1E1E1E',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Contacts = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)
  return (
    <main>
      <section className="map-section" id="map">
        <div className="container">
          <div className="konsulContact-flex flex-class">
            <div className="konsulContact-left konsulContact-left-right">
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
              <p>Прием звонков: с 9:00 до 18:00 (Пн-Сб</p>
              <br />
              <h3>Электронная почта:</h3>
              <p>ForestINVERONMENTAL@mail.ru</p>
              <div className="flex-class">
                <img src="./facebook.svg" alt="Error" />
                <img src="./youtube.svg" alt="Error" />
                <img src="./instagram.svg" alt="Error" />
              </div>
              <button onClick={handleOpen}>Связаться с нами</button>
            </div>
            <div className="konsulContact-right konsulContact-left-right">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.25298617416!2d69.2793667!3d41.28259745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YI!5e0!3m2!1sru!2s!4v1717331663693!5m2!1sru!2s" width="600" height="450" loading="lazy"></iframe>
            </div>
          </div>
        </div>
        <Modal
          open={open}
          className="modalBox"
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex-class">
              <img src="./about-line.svg" alt="Error" />
              <Typography id="modal-modal-title" variant="h3" color={"#86da44"} component="h2">
                Связаться с нами
              </Typography>
            </div>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} color={"#fff"} fontSize={"1.6rem"}>
              Персональный менеджер свяжется с вами
              в течение 15 минут
            </Typography>
            <FormGroup className="form">
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="E-mail" />
              <input type="text" placeholder="Телефон" />
              <div className="checkBox flex-class">
                <input type="checkbox" name="check" id="check" />
                <label htmlFor="check">Согласен(на) с обработкой персональных данных</label>
              </div>
              <button onClick={handleClose}>ОСТАВИТЬ ЗАЯВКУ</button>
            </FormGroup>
          </Box>
        </Modal>
      </section>
      <section className="zayafku-section" id="zayafku">
        <div className="container">
          <h2>получите расчет сметы с учетом стоимости работ и материалов через 30 минут</h2>
          <h1>Оставьте заявку прямо сейчас</h1>
          <div className="flex-class">
            <input type="text" placeholder="имя" />
            <input type="text" placeholder="телефон" />
            <button>Отправить</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contacts