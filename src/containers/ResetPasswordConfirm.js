import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { reset_password_confirm } from "../management/actions/auth"

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false)
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_passwod: ''
    })

    const {  new_password, re_new_passwod } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = e => {
        e.preventDefault();
        const uid = match.params.uid
        const token = match.params.token
        reset_password_confirm(uid, token, new_password, re_new_passwod)
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
                <label className="label">New Password</label>
                <div className="control has-icons-left has-icons-right">
                    <input
                        className="input is-success"
                        type="password"
                        placeholder="New Password"
                        name='new_password'
                        value={new_password}
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
                <label className="label">Confirm New Password</label>
                <div className="control has-icons-left has-icons-right">
                    <input
                        className="input is-success"
                        type="password"
                        placeholder="Confirm New-Passwod"
                        name='re_new_passwod'
                        value={re_new_passwod}
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
                            Reset Password
                            </button>
                    </div>
                </div>
            </div>
            
        </form>
    )
}



export default connect(null, {reset_password_confirm})(ResetPasswordConfirm)
