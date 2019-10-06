import React from 'react'

export default function Environment(props) {
    return (
        <div className="environment-card">
           <h2>{props.name}</h2> 
           <h2>{props.metric}</h2>

        </div>
    )
}
