import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { NavBar } from '../components'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
    return (
        <Router>
            <NavBar />
        </Router>
    )
}