import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from "../management/actions/auth"

const Register = ({isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: '',
        re_password: ''
    })

    const { email, name, password, re_password } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = e => {
        e.preventDefault();

        // login(email, name, password, re_password)
    }

    if (isAuthenticated){
        return <Redirect to="/" />
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
                <label className="label">Name</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input is-success"
                        type="text"
                        placeholder="Name"
                        name='name'
                        value={name}
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

            <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control has-icons-left has-icons-right">
                    <input
                        className="input is-success"
                        type="password"
                        placeholder="Confirm Password"
                        name='re-password'
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
                    </div>
                </div>
            </div>
            <p className="subtitle mt-1" >Got Account? <Link to="/login">Sign In</Link></p>
           
        </form>
    )
}

// const mapStateToProps = state =>({
//  isAuthenticated: state.auth.isAuthenticated
// })

export default connect(null, {  })(Register)
