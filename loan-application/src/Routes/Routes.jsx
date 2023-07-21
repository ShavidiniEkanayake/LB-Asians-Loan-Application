import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Loan from '../Pages/loan.jsx'

function PageRoutes(){
    return(
       <Router>
        <Routes>
            <Route path='/loan' element={<Loan/>}></Route>
        </Routes>
       </Router>
    )
}

export default PageRoutes