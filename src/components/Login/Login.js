
import React from 'react'
import loginImg from '../../assets/login.png';
import LoginForm from './LoginForm';
import { Route, Link, Routes } from 'react-router-dom';
import SignupForm from './SignupForm';



function Login() {
    return (
        <div className='login-page'>
            <div className='login-img'>
                <img src={loginImg} alt="loginimage" />
            </div>
            <div className='login-form'>
                <div className='login-header'>
                    <Link to='/login' style={{ textDecoration: 'none' }}><button>Log In</button></Link>
                    <Link to='/signup' style={{ textDecoration: 'none' }} ><button>Sign up</button></Link>

                </div>

                <div className='form-container'>
                    <Routes>
                        <Route exact path="/login" element={<LoginForm />} />
                        <Route path="/signup" element={<SignupForm />} />
                    </Routes>
                </div>
            </div>

        </div>
    )
}

export default Login
