import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import  ToastContainers  from '../src/components/common/ToastContainers.jsx'

createRoot(document.getElementById('root')).render(
    <>
    <ToastContainers />
    <App />
    </>
)
