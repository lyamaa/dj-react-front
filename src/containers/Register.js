import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from "../management/actions/auth"
import axios from "axios"

const Register = ({ register, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        first_name:'',
        last_name:'',
        password: '',
        re_password: ''
    })

    const { email, username, first_name, last_name,  password, re_password } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            register(email, username, first_name, last_name,  password, re_password)
            setAccountCreated(true)
        }
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
    if (accountCreated) {
        return <Redirect to="/message" />
    }

    return (
        <form className="box" onSubmit={onSubmit}>
            <h1 className="title">Sign Up</h1>
            <p className="subtitle">Create a new account here.</p>
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
                <label className="label">Username</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input is-success"
                        type="text"
                        placeholder="Username"
                        name='username'
                        value={username}
                        onChange={e => onChange(e)}
                        required
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label">First Name</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input is-success"
                        type="text"
                        placeholder="First Name"
                        name='first_name'
                        value={first_name}
                        onChange={e => onChange(e)}
                        required
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label">Last Name</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input is-success"
                        type="text"
                        placeholder="Last Name"
                        name='last_name'
                        value={last_name}
                        onChange={e => onChange(e)}
                        required
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
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

            <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control has-icons-left has-icons-right">
                    <input
                        className="input is-success"
                        type="password"
                        placeholder="Confirm Password"
                        name='re_password'
                        value={re_password}
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
                        <br />
                        <button class="button is-danger mt-3" onClick={googleLogin} >
                            <span class="icon">
                                <i class="fab fa-google"></i>
                            </span>
                            <span>Continue with Google</span>
                        </button>
                        &nbsp;  &nbsp;
                        <button class="button is-info  mt-3" >
                            <span class="icon">
                                <i class="fab fa-facebook"></i>
                            </span>
                            <span>Continue with Facebook</span>
                        </button>
                    </div>
                </div>
            </div>
            <p className="subtitle mt-1" >Got Account? <Link to="/login">Sign In</Link></p>

        </form>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register })(Register)
