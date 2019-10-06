import React from 'react'
import './SplashPage.css'
import {Link} from 'react-router-dom'
export default function SplashPage() {
    return (
        <div role="main" className="LoginPage-Container flexed">
        <div className="LoginPage padded">
          <h2>DryFi</h2>
          <p>
              DryFi is an application that utilizes IOT technology, to help you be more environmentally conscience and save energy and money by drying your clothes less.
          </p>

          <form className="LoginForm" onSubmit={e => this.handleLoginSubmit(e)}>
            <label htmlFor="email"> Email:</label>
            <input
              type="text"
              id="email"
             
            />
  
            <label htmlFor="password"> Password:</label>
            <input
              name="password"
              type="password"
              id="password"
              
            />
  <Link to={'/main'}>
            <button type="submit">Login!</button>
            </Link>
          </form>
   
        </div>
      </div>
    )
}
