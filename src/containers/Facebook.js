import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import queryString from 'query-string'
import { connect } from 'react-redux'
import { facebookOauth } from '../management/actions/auth'

const Facebook = ({ facebookOauth }) => {
    let location = useLocation()

    useEffect(() => {
        const values = queryString.parse(location.search);
        const state = values.state ? values.state : null;
        const code = values.code ? values.code : null;

        console.log('State:' + state)
        console.log('Code:' + code)

        if (state && code) {
            facebookOauth(state, code)
        }


    }, [location])
    return (
        <article class="message is-primary">
            <div class="message-header">
                <p>Facebook</p>

            </div>
            <div class="message-body">
            <p> Hoorah!! you are logged in with FACEBOOK...</p>
            </div>
        </article>


    )
}

export default connect(null, { facebookOauth })(Facebook);