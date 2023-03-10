import Location from '../components/Location'
import {useRef} from "react";
import Select from "react-select";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function Contact() {

  const options = [
    { value: "Cotizacion de Muro Verde", label: "Cotizacion de Muro Verde" },
    { value: "Cotizacion de Pasto Artificial", label: "Cotizacion de Pasto Artificial" },
    { value: "Cotizacion e instalacion de Muro Verde", label: "Cotizacion e instalacion de Muro Verde" },
    { value: "Cotizacion e instalacion de Pasto Artificial", label: "Cotizacion e instalacion de Pasto Artificial" },
    { value: "Diseño integral de área verde", label: "Diseño integral de área verde" },
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o0avjfu', 'template_ttupxl6', form.current, `${process.env.NEXT_PUBLIC_EMAIL_JS_KEY}`)
      .then((result) => {
          toast.success('El correo fue enviado con exito', {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "light",
          });
      }, (error) => {
          console.log(error.text);
      });
  };


  return (

    <div className='contact-container' id= 'contact'>

      <div className="contact-map">

        <div className='direccion-container'>
          <h2 className='pageSubHeader'>Visitanos</h2>
          <Location></Location>
        </div>

        <div className="contactDiv" id="contact">
          <h2 className='pageSubHeader'>Ventas e Informes</h2>
          <form ref={form} className='messageForm'>
            <div className="infoDiv" >

              <div className="formInputDiv">
                <label htmlFor='name' className='inputLabel'>Nombre *</label>
                <input
                  type="text"
                  className="formInput"
                  name="name"/>
              </div>

              <div className="formInputDiv">
                <label htmlFor='email' className='inputLabel'>Email *</label>
                <input
                  type="email"
                  className="formInput"
                  name= 'email'/>
              </div>

              <div className="formInputDiv">
                <Select
                  name="servicio"
                  defaultValue={{label:'Selecciona un servicio', value:'Selecciona un servicio' }}
                  options = {options}
                />
              </div>

            </div>
            <div className='messageDiv'>
              <label htmlFor='message' className='inputLabel'>Medidas y mas informacion </label>
              <textarea
                name='message'
                className='textarea'
              ></textarea>
            </div>

            <button type='button' className='btn-yellow' onClick={sendEmail}>
              Enviar
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
