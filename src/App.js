import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import "./App.css"
import Display from './components/Display'
import Specification from './components/Specification'
import Include from './components/Include'
import Delivery from './components/Delivery'
import Reviews from './components/Reviews'
import Question from './components/Question'
import Right from './components/Right'
import Semifooter from './components/Semifooter'
import Footer from './components/Footer'
import Form from './components/Form'


 


const App = () => {
  return (
    <>
    
     <Header />
    <Home />
  
    <Display />
  
    <Specification />
    <Include />
    <Delivery />
     <Reviews />
    <Question />
    <Right />
    <Semifooter />
    <Footer />  
    {/* <Form />  */}



      </>
  )
}

export default App