import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Login = () => {
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

        // login(email, password)
    }

    return (
        <form className="box">
            <h1 className="title">Sign In</h1>
            <p className="subtitle">Sign In to your account</p>

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
                        <button className="button is-primary">
                            Send message
                            </button>
                    </div>
                </div>
            </div>
            <p className="subtitle">New here? <Link to="/register">Signup</Link></p>
            <p className="subtitle">Forgot password? <Link to="/reset-password">Reset</Link></p>

        </form>
    )
}

// const mapStateToProps = state =>({

// })

export default connect(null, { }) (Login)
