import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import GlobalStyle from './css/GlobalStyle.jsx'

//criando a função createBrowserRouter

const router =createBrowserRouter([
  {
    //Elemento Pai
    path:'/',element:<App/>,
    errorElement:<Error/>,

    //Elemento Filho
     children:[
      {path:'/', element:<Home/>},
      {path:'/login', element:<Login/>},
     ]


    }
]) 




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    {/*Renderizando o router provider para chamar as rotas  */}
    <RouterProvider router={router} />
  </StrictMode>,
)
