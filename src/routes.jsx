import {Routes, Route, BrowserRouter} from'react-router-dom'

import { Home } from  './pages/home'
import { Details } from './pages/details'

export function Router(){
    return(
        <BrowserRouter>
           <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/details' element={<Details/>}/>
           </Routes>
        </BrowserRouter>
     

    )
}