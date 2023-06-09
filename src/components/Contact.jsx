import React, { useState } from 'react';
const service_id = import.meta.env.VITE_SERVICE_ID
const template_id = import.meta.env.VITE_TEMPLATE_ID
const user_id = import.meta.env.VITE_USER_ID

import '../assets/css/contacto.css'
import { fetchEmailJs } from '../helper/fetch';
import Swal from 'sweetalert2';
import { SyncLoader } from 'react-spinners';
import contacto from '../assets/img/contacto.png';
const initialForm = {
  user_name: "",
  user_email: "",
  message: "",
  user_phone: "",
}

const override = {
  display: "block",
  margin: "0 auto",
};

const Contact = () => {

  const [form, setForm] = useState(initialForm)
  const [isLoading, setLoading] = useState(false)

  const {
    user_name, user_email, message, user_phone
  } = form

  const validationsForm = () => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexPhone = /^\d{9}$/;
    let regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!user_name.trim()) {
      errors.user_name = "El campo 'Nombre' es requerido";
    } else if (!regexName.test(user_name.trim())) {
      errors.user_name =
        "El campo 'Nombre' sólo acepta letras y espacios en blanco";
    }

    if (!user_phone.trim()) {
      errors.user_phone = "El campo 'Telefono' es requerido";
    } else if (!regexPhone.test(user_phone.trim())) {
      errors.user_phone = "El campo 'Telefono' solo permite 9 digitos";
    }

    if (!user_email.trim()) {
      errors.user_email = "El campo 'Email' es requerido";
    } else if (!regexEmail.test(user_email.trim())) {
      errors.user_email = "El campo 'Email' no es correcto";
    }
    return errors;
  };
  const sendEmail = async (e) => {
    e.preventDefault();

    let data = {
      service_id,
      template_id,
      user_id,
      template_params: form
    };
    let errorValidations = validationsForm()
    if (Object.values(errorValidations)[0]) {
      return Swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        text: Object.values(errorValidations)[0],
      });

    }

    try {
      setLoading(true)
      const resp = await fetchEmailJs(`email/send`, data, 'POST');
      const body = await resp.text();
      if (body === "OK") {
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'La operación se completó correctamente.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Se produjo un error en la operación.',
        });
      }
      setLoading(false)

    } catch (error) {
      console.log(error)
    }


  };


  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })

  }
  return (
    <section id="contact" className='contacto'>
      <div className="section-contacto container full-lg-screem">
        <div className="container-form">
          <div className="column-form">
            <img className="img-contact" src={contacto} />
          </div>
          <div className="column-form">
            <form onSubmit={sendEmail} className="form">
              <h2 className='h2-contacto'>CONTACTA A MISIRA</h2>
              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" name="user_name" value={user_name} placeholder="Ingresa tu nombre" onChange={onChangeForm} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="user_email" value={user_email} placeholder="Ingresa tu email" onChange={onChangeForm} />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Telefono:</label>
                <input type="text" name="user_phone" value={user_phone} placeholder="Ingresa tu telefono" onChange={onChangeForm} />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="message" value={message} placeholder="Escribe tu mensaje" onChange={onChangeForm}></textarea>
              </div>
              {!isLoading ? <div className='btn btn-hover' onClick={sendEmail}>Enviar</div> :
                <div className='spinner'>
                  <SyncLoader
                    color={'#36d7b7'}
                    loading={isLoading}
                    cssOverride={override}
                    size={25}
                  />
                </div>}
            </form>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Contact


