import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from './components/Sidebar'

import Home from './pages/Home';
import Team from './pages/Team';
import Tasks from './pages/Tasks';
import Chats from './pages/Chats';
import Analytics from './pages/Analytics';


const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/team'>
            <Team />
          </Route>
          <Route path='/tasks'>
            <Tasks />
          </Route>
          <Route path='/chats'>
            <Chats />
          </Route>
          <Route path='/analytics'>
            <Analytics />
          </Route>
        </Routes>
      </Router> 
    </>
  )
}

export default App
