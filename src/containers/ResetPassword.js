import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { reset_password } from "../management/actions/auth"

const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
    })

    const { email } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email)
        setRequestSent(true)
    }

    if (requestSent){
        return <Redirect to="/" />
    }

    return (
        <form className="box" onSubmit={onSubmit}>
            <h1 className="title">Reset Password</h1>
            <p className="subtitle">Reset your password</p>
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

            <div className="field-body">
                <div className="field">
                    <div className="control">
                        <button className="button is-primary" type="submit">
                            Reset Password
                            </button>
                    </div>
                </div>
            </div>
            
        </form>
    )
}



export default connect(null, {reset_password})(ResetPassword)
