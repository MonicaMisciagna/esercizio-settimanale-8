import React from 'react'
import SearchForm from '../components/SearchForm'
import { Container } from 'react-bootstrap'




export default function homePage() {
   
  return (
    <Container style={{minHeight: "100vh"}} className='d-flex justify-content-center align-items-center'>
     <SearchForm/>
   
    </Container>
  )
}
