import React from 'react'
import DataCard from './DataCard.js'
import './CardContainer.css'

export default function CardContainer(props) {
  
   console.log(props)
        const cardInfo=[...props.info]
    const cardList = cardInfo.map((card, i) => <DataCard key={i} name={card.name} metric={card.metric}/>)
    return (
        <section className="card-container">
           {cardList}
        </section>
    )
}


