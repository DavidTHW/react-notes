import {Routes, Route, createBrowserRouter, BrowserRouter } from 'react-router-dom' 
import PrivateRoutes from "./PrivateRoutes"
import Notes from './Container/Notes'
import NotFound from './Container/NotFound'
import Login from './Container/Login'

const PageRouter = () => {
return (
    <Routes>
        <Route element={<PrivateRoutes/>}>
        <Route path='/notes' element={<Notes/>}/>
        </Route>
        <Route path='/' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
)}

export default PageRouter