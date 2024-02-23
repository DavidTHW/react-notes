import {Routes, Route} from 'react-router-dom' 
import PrivateRoutes from "./PrivateRoutes"
import Notes from './Container/Notes/Notes'
import NotFound from './Container/NotFound'
import Login from './Container/Login/Login'

const PageRouter = () => {
return (
    <Routes>
        <Route element={<PrivateRoutes/>}>
        <Route path='/notes' element={<Notes/>}/>
        </Route>
        <Route path='/react-notes' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
)}

export default PageRouter