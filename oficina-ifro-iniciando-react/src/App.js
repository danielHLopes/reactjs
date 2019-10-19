import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row, Col, Navbar, NavbarBrand, FormGroup, Input, Button} from 'reactstrap'
const App = prop => {
  const [nome, setNome] = React.useState("")
  const [idade, setIdade] = React.useState(0)
  const [email, setEmail] = React.useState("")
  
  const submit = async e => {
    e.preventDefault();
    const headers = new Headers
    headers.append("Content-Type", "application/json");

    const response = await fetch("http://localhost:3001/alunos",{
      method: "Post",
      body: JSON.stringify({nome, idade, email}),
      headers
    }) 
    if(response.ok){
      alert("deu certo")
      return
    }
    alert("erro ao enviar"+response.status)
  }
  return(
    <React.Fragment>
    <Navbar color = "primary" light>
      <NavbarBrand>
        FAZENDO O BAGULHO
      </NavbarBrand>
    </Navbar>
    <Container>
      <Row>
        <form onSubmit={submit}> 
        <Col>
          <FormGroup>
            <label>Nome</label>
            <Input name="nome" value={nome} onChange={e => setNome(e.target.value)}/>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <label>Idade</label>
            <Input name="idade" type="number" value={idade} onChange={e => setIdade(e.target.value)}/>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <label>Email</label>
            <Input name="email" value={email} onChange={e => setEmail(e.target.value)}/>
          </FormGroup>
        </Col>
        <Col>
          <Button type="submit">
            enviar
          </Button>
        </Col>
        </form>
      </Row>
      
    </Container>
  </React.Fragment>
  )
}

export default App;
