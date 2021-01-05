import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { activate } from "../management/actions/auth"

const Activate = ({ match, activate }) => {
    
    const [activates, setActivates] = useState(false)
    const verify = e => {
        const uid = match.params.uid
        const token = match.params.token

        activate(uid, token)
        setActivates(true)
    }

    if (activates){
        return <Redirect to="/" />
    }

    return (
        <div className="box">
            <h1 className="title"> Activate Your Account</h1>
            <button onClick={verify} type="submit" className="button">Activate</button>
        </div>
    )
}

// const mapStateToProps = state =>({
//  isAuthenticated: state.auth.isAuthenticated
// })

export default connect(null, { activate })(Activate)
