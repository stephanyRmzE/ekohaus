import React from 'react'
import VideoFrame from '../components/VideoFrame'

const Instalacion = () => {
  return (
    <div className='instalacion-container'>

      <h1>Como instalar muro verde artificial</h1>

      <VideoFrame embedId="xTYWJgUkoNQ" />

      <h3>Pasos a seguir</h3>
      <div className='list-div'>
        <ol>
          <li>Medir con la cinta métrica el ancho y el largo de las paredes. Al multiplicar el ancho y el largo nos darán los metros cuadrados que necesitaremos de Follaje artificial.</li>
          <li>La pared o muro sobre el que se va a instalar debe fondearse con un color verde oscuro o negro. Si se tiene un diseño predeterminado deberá dibujarse con pintura que haga fácil distinguirlo después. </li>
          <li>Fijemos el follaje en una de las esquinas superio con la grapa telefonica y en seguida, martille hasta que el clavo quede totalmente enterrado.</li>
          <li>Se unen distintos modulos de follaje usando el sistema machihembrado que tiene cada modulo </li>
          <li>Fijemos todos los puntos de ensamblaje, colocando grapas cada 20cm y martillandolo hasta que este fijo. Para las orillas separa los modulos o recortalos como sea necesario.</li>
        </ol>
      </div>
    </div>
  )
}

export default Instalacion
