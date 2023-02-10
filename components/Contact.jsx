import Location from './Location'
import {useState, useRef} from "react";
import Select from "react-select";
import emailjs from '@emailjs/browser';

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

    emailjs.sendForm('service_1kh6sc2', 'template_vb7d3lv', form.current, 'Q3RuhRi5QdSgrpPen')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (

    <div className='contact-container' id= 'contact'>
      <p className='pageHeader'>Contactanos</p>
        <div className="contact-map">

          <div className="contactDiv" id="contact">

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
          <div className='direccion-container'>
            <Location></Location>

          </div>
        </div>
    </div>
  );
}

export default Contact;
