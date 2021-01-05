import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from "../management/actions/auth"
import axios from 'axios'

import Avatar from '../assets/src/img/profile.svg'

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = e => {
        e.preventDefault();

        login(email, password)
    }

    const googleLogin = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

            window.location.replace(res.data.authorization_url);

        } catch (err) {

        }
    }

    const facenbookLogin = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/facebook`)

            window.location.replace(res.data.authorization_url);

        } catch (err) {

        }
    }


    if (isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <div className="box">
             <figure class="image is-3by1">
                  <img src={Avatar} alt="Image" />
                </figure>
            <form onSubmit={onSubmit}>
                <h1 className="title" style={{marginLeft: "18.5rem", padding:"1rem"}}>Sign In</h1>
                <p className="subtitle" style={{marginLeft: "16.5rem"}}>Sign In to your account</p>
                <hr className="divider" />

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-success"
                            type="email"
                            placeholder="Email"
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                            required
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left has-icons-right">
                        <input
                            className="input is-success"
                            type="password"
                            placeholder="Password"
                            name='password'
                            value={password}
                            onChange={e => onChange(e)}
                            minLength='6'
                            required
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </div>
                </div>


                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <button className="button is-primary" type="submit">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </form>

            <hr className="divider" />
            <div className="field-body">
                <div className="field">
                    <div className="control">
                        <button class="button is-danger" onClick={googleLogin} >
                            <span class="icon">
                                <i class="fab fa-google"></i>
                            </span>
                            <span>Continue with Google</span>
                        </button>
                        &nbsp;  &nbsp;
                        <button class="button is-info" onClick={facenbookLogin } >
                            <span class="icon">
                                <i class="fab fa-facebook"></i>
                            </span>
                            <span>Continue with Facebook</span>
                        </button>
                    </div>
                </div>
            </div>
            <p className="subtitle mt-1" >New here? <Link to="/register">Signup</Link></p>
            <p className="subtitle" style={{ lineHeight: "0.1px" }}>Forgot password? <Link to="/reset-password">Reset</Link></p>

        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
