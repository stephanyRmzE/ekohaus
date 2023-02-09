import Location from './Location'
import {useState} from "react";



function Contact() {

  const [formData, SetFormData ] =useState({
      name: '',
      email: '',
      password: ''
  })
  const {name, email, message} = formData



  const onChange = (e) => {
    SetFormData((prevState) => ({...prevState,
      [e.target.id]: e.target.value,

    }))}



  return (
    <div className='contact-container' id= 'contact'>
      <p className='pageHeader'>Contactanos</p>
        <div className="contact-map">

          <div className="contactDiv" id="contact">

            <form className='messageForm'>
              <div className="infoDiv" >
                <div className="formInputDiv">
                  <label htmlFor='name' className='inputLabel'>Nombre *</label>
                  <input
                    type="text"
                    className="formInput"
                    id= 'name'
                    value={name}
                    onChange={onChange} />
                </div>
                <div className="formInputDiv">
                  <label htmlFor='email' className='inputLabel'>Email *</label>
                  <input
                    type="email"
                    className="formInput"
                    id= 'email'
                    value={email}
                    onChange={onChange} />
                </div>
              </div>
              <div className='messageDiv'>
                <label htmlFor='message' className='inputLabel'>Mensaje *</label>
                <textarea
                  name='message'
                  id='message'
                  className='textarea'
                  value={message}
                  onChange={onChange}
                ></textarea>
              </div>
              <a
                href={`mailto:stephany.ramireze@gmail.com?Subject=&body=${message}`}
              >
                <button type='button' className='btn-yellow'>
                  Enviar
                </button>
              </a>
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
