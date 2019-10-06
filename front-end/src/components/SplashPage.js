import React from 'react'

export default function SplashPage() {
    return (
        <div className="SplashPage">
            <h1>Dry Baby</h1>
            <form className="login-form">
                <label htmlFor="username">Username</label>
                <input type="text" for="unsername"/>
                <label htmlFor="password">Password</label>
                <input type="text" for="password"/>
            </form>
        </div>
    )
}
