import React from 'react';
import  './AdminLogin.css';
import Navbar from '../LandingPage/Navbar.js'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import logo from "../LandingPage/Images/logo2.png";
import {verifyUser} from '../UserList/UserAPI';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [id, setId] = useState(0);
  const [password, setPassword] = useState("")
  const [respuesta, setRespuesta] = useState("")

  const navigate = useNavigate()

  async function handleSubmit(event){
    event.preventDefault();
    var ans = await verifyUser(id, password);
    var res = await ans.json();
    console.log(res)
    setRespuesta(res.message)
  }
  return (

    <MDBContainer className="my-5 gradient-form">
      <Navbar />
      <form onSubmit={handleSubmit}>
      <MDBRow >
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center" >
            <h2 className="mt-1 mb-5 pb-1"
                style={{
                marginTop:'15px',
                fontSize: 35,
                fontWeight: 800,
                color: "#124265",
                textAlign: "center",
                fontFamily: "sans-serif",}}>
                  <img src={logo}
                style={{width: '100px', marginTop:'35px'}} alt="logo" />
             </h2>

             
              <h2 className="mt-1 mb-5 pb-1"
                style={{
                fontSize: 30,
                fontWeight: 800,
                color:  "#124265",
                textAlign: "center",
                fontFamily: "Montserrat",}}>
                  Login
              </h2>
            </div>

            <p>Please login to your account</p>
            <div>
            {respuesta && respuesta!=="Success" ? (<div className="alert alert-danger" role="alert">
                Los datos que ingresó no son correctos, sapo
                </div>) : (respuesta==="Success" ? navigate('/UserList') : <div></div>)}
                
              </div>
              
            <MDBInput wrapperClass='mb-4' label='ID' id='form1' onChange={ event => setId(event.target.value)}/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={ event => {setPassword(event.target.value)}}/>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" type= "submit">Sign in</MDBBtn>
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn outline className='mx-2' color='primary' href="/Register">
                Register 
              </MDBBtn>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a company</h4>
              <p className="small mb-0">Una empresa de energía eléctrica que desarrolla un sistema para gestionar la información
                de sus clientes ya sean corporativos o personas naturales, su consumo y la facturación.
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>
      </form>
    </MDBContainer>

  );
}

export default AdminLogin;