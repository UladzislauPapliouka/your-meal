import React from 'react'
import ReactDOM from 'react-dom/client'
import {MainPage} from "./pages/mainPage.tsx";
import './index.scss'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
)
