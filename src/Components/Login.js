import React from "react"
import { Container } from "react-bootstrap";

const url = process.env.REACT_APP_SERVER_URL + "/login";

console.log(url);


export default function Login() {


 
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-lg" href={url} >
        Login With Spotify
      </a>
    </Container>
  )
}