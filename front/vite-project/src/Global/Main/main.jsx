import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import App from '../App/App'
import {Provider} from "react-redux"
import store from '../../redux/store'
import "./reset.css"
import "./index.css"

// Esta funcion selecciona al elemento root del index.html y renderiza ahi adentro toda nuestra aplicacion
// En este caso lo que renderiza es el componente App que representa la aplicacion 
// .render es un metodo que indica que va a estar renderizando a APP
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter> 
  </React.StrictMode>,
)
