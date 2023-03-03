import React, {useState, useRef} from 'react';
import { Controller, useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input'
import CurrencyInput from 'react-currency-input-field';
import dynamic from 'next/dynamic';

const DatePicker = dynamic(() => import('react-rainbow-components/components/DatePicker'), {
    ssr: false
});

const Select = dynamic(() => import('react-select'), {
    ssr: false
});

function Factura() {
  const optUso = [
    { value: "G01 Adquisición de mercancias", label: "G01 Adquisición de mercancias" },
    { value: "G03 Gastos en General", label: "G03 Gastos en General" },
    { value: "P01 Por Definir", label: "P01 Por Definir" },
    { value: "Otros", label: "Otros" },
  ];

  const optPago = [
    { value: "Efectivo", label: "Efectivo" },
    { value: "Cheque", label: "Cheque" },
    { value: "Transferencia bancaria", label: "Transferencia bancaria" },
    { value: "Tarjeta de debito", label: "Tarjeta de debito" },
    { value: "Tarjeta de crédito", label: "Tarjeta de crédito" },
  ];

  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      tel: ""
    }
  });

  const enviar = (data) => {
    console.log(data)
    alert(JSON.stringify(data));
  };

  const [value, setValue] = useState('123');
  const [rawValue, setRawValue] = useState(' ');
  const handleOnValueChange = (value) => {
    setRawValue(value === undefined ? 'undefined' : value || ' ');
    setValue(value);
  };

  const maxDate = new Date();

  const formFactura = useRef();

  const sendEmail = (e) => {
    emailjs.sendForm('service_i1ec7hk', 'template_qswvwly', formFactura.current, `${process.env.NEXT_PUBLIC_EMAIL_JS_KEY}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <div className='factura-container' id= 'factura' >
      <p className='factura-header'>Facturación Electrónica</p>
      <p className='factura-info'>Para solicitar su factura ingrese en el siguiente vinculo y rellene el formulario con su información fiscal. Para mayor control interno, favor de subir sus datos dentro de los 3 días posteriores a su compra. Favor de llenar todos los campos obligatorios adecuadamente para la correcta realización de su factura. Si no recibe su factura en un plazo de 2 a 3  días hábiles, contáctenos  al teléfono +52 (228) 1 06 50 03</p>

          <div className="factura-div" id= 'factura' >

            <form ref={formFactura} className='messageForm' onSubmit={handleSubmit(sendEmail)}>

              <div className="formInputDiv">
                <label className="inputLabel">Nombre o razón social</label>
                <input className="formInput"
                  {...register("name", {
                    required: true,
                  })}
                />
                {errors?.name?.type === "required" && <p>Este campo es obligatorio</p>}
              </div>

              <div className="formInputDiv">
                <label className="inputLabel" >Email</label>
                <input className="formInput"
                {...register("email", { pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i })} />
                {errors?.email?.type === "required" && <p>Este campo es obligatorio</p>}
                {errors?.email?.type === "pattern" && (
                  <p>Su correo electronico tiene un error</p>
                )}
              </div>

              <div className="formInputDiv">
                <label className="inputLabel" >Telefono</label>
                <Controller
                  name="tel"
                  control={control}
                  rules={{ validate: matchIsValidTel }}
                  render={({ field, fieldState }) => (
                    <MuiTelInput
                      {...field}
                      defaultCountry="MX"
                      preferredCountries={['MX', 'US']}
                      helperText={fieldState.invalid ? "Tel is invalid" : ""}
                      error={fieldState.invalid}/>
                    )}
                />
              </div>

              <div className="formNumDiv">
                <label className="inputLabel">RFC</label>
                <input className="formInput"
                  {...register("rfc", {
                    required: true,
                    pattern: /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/
                  })}
                />
                {errors?.rfc?.type === "required" && <p>Este campo es obligatorio</p>}
                {errors?.rfc?.type === "pattern" && (
                  <p>El rfc es incorrecto</p>
                )}
              </div>

              <div className="formNumDiv">
                <label className="inputLabel">Numero de ticket</label>
                <input className="formInput"
                {...register("numTicket", {
                  required: true,
                  pattern: /^[0-9]+$/
                  })} />
                {errors?.numTicket?.type === "required" && <p>Este campo es obligatorio</p>}

              </div>

               <div className="formNumDiv">
                <label className="inputLabel">Codigo Postal</label>
                <input className="formInput"
                {...register("cp", {
                  pattern: /^\d{5}$/,
                  required: true })} />
                {errors?.cp?.type === "required" && <p>Este campo es obligatorio</p>}
                {errors?.cp?.type === "pattern" && <p>Codigo postal incorrecto</p>}
              </div>

              <div className="formNumDiv">
                <label className="inputLabel" >Monto del ticket</label>
                  <Controller
                  name="montoTicket"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <CurrencyInput
                      {...field}
                      placeholder=''
                      className="formInput"
                      prefix='$'
                      onValueChange={handleOnValueChange}
                      decimalScale={2}
                      value={value}
                    />)}/>
                  {errors?.montoTicket?.type === "required" && <p>Este campo es obligatorio</p>}
              </div>

              <div className="formInputDiv">
                <label className="inputLabel">Fecha de compra</label>
                  <Controller
                    control={control}
                    name='date'
                    rules={{ required: true }}
                    render={({ field }) => (
                      <DatePicker
                        name = {field.name}
                        maxDate={maxDate}
                        onChange={(date) => field.onChange(date)}
                        value= {field.value}
                      />
                      )}
                  />

                  {errors?.date?.type === "required" && <p>Este campo es obligatorio</p>}
              </div>


              <div className="formInputDiv">
                <label className="inputLabel">Uso del CDFI</label>
                  <Controller
                  control={control}
                  name={"cdfi"}
                  rules={{ required: true }}
                  render={({ field}) => (
                    <Select
                      name = {field.name}
                      placeholder={''}
                      value={optUso.find((c) => c.value === field.value)}
                      options={optUso}
                      onChange={(selectedOption) => {field.onChange(selectedOption.value);
                      }}
                    />
                  )}
                  />
                  {errors?.cdfi?.type === "required" && <p>Este campo es obligatorio</p>}
              </div>

              <div className="formInputDiv">
                <label className="inputLabel">Metodo de pago</label>
                  <Controller
                  control={control}
                  name={"metodoPago"}
                  rules={{ required: true }}
                  render={({ field}) => (
                    <Select
                      name = {field.name}
                      placeholder={''}
                      value={optPago.find((c) => c.value === field.value)}
                      options={optPago}
                      onChange={(selectedOption) => {field.onChange(selectedOption.value);
                      }}
                    />
                  )}
                  />
                  {errors?.metodoPago?.type === "required" && <p>Este campo es obligatorio</p>}
              </div>


              <button type='submit' className='btn-yellow' >
                Enviar
              </button>
            </form>

          </div>

        </div>

  );
}

export default Factura
