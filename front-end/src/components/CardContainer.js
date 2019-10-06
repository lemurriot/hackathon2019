import React, {Component} from 'react'
import DataCard from './DataCard.js'
import './CardContainer.css'
import Environment from './Environment.js'
import getDryTime from './helpers'

export default class CardContainer extends Component {
  constructor(){
      super()
      this.state={
          insideTemp:null,
          insideHumidity:null,
          outsideTemp: null,
          outsideHumidity:null,
          windSpeed:null
      }
  }
    componentWillReceiveProps(nextProps){
        if(this.props!==nextProps){
console.log(';')
this.setState({
    insideTemp:Number(nextProps.insideData[0].metric),
    insideHumidity:Number(nextProps.insideData[1].metric),
    outsideTemp:Number(nextProps.outsideData[0].metric),
    outsideHumidity:Number(nextProps.outsideData[1].metric),
    windSpeed:Number(nextProps.outsideData[2].metric),
})
        }
    }
  
    getDryTime =(tempF, humidity, windspeed)=> {
        const tempC = (tempF - 32) * 5 / 9;
        const tempK = tempC + 273.15;
        const x = 21.07 - (5336 / tempK);
        const delta = Math.exp(x) * 5336 / (tempK * tempK);
        const lambda = 2.501 - (0.002361 * (tempK - 273));
        const gamma = 0.0016286 * 101.3 / lambda;
        const d = (1 - humidity) * Math.exp(x);
        const rn = 340 * 30 * 60 / 1000000;
        const e = ((delta * rn) + (6.43 * gamma * d * (1 + (0.536 * windspeed)))) / (lambda * (delta + gamma));
        const rho = 1000;
        const rhoe = e * rho / (1000 * 60 * 60 * 24);
        const mass = 0.075;
        const surfaceArea = 0.75;
        const t = mass / (rhoe * surfaceArea * 60);
        const hours=Math.floor(t/60)
        const minutes=Math.floor(t%60)
        const time=[hours, minutes]
        return time
      }
   
    render(){
        const {insideTemp, insideHumidity}= this.state
        const realInsideHumidity=insideHumidity/100
const {outsideTemp, outsideHumidity, windSpeed}= this.state
const realOutsideHumidity =outsideHumidity/100
const insideDrytime= this.getDryTime(insideTemp, realInsideHumidity, 0)
const outsideDrytime=this.getDryTime(outsideTemp, realOutsideHumidity, windSpeed)

console.log(`inside temp`, insideTemp, `inside humidity`, realInsideHumidity)
console.log(`hello drytime`, insideDrytime)
//    console.log(this.props)
   const insideInfo= this.props.insideData.map(data=>{
       return <Environment name={data.name} metric={data.metric}/>
   })
   const outsideInfo= this.props.outsideData.map(data=>{
    return <Environment name={data.name} metric={data.metric}/>
})
        return (
            <section className="card-container">
                <div>
                {insideInfo}
                <div>
                    <h3>Time to dry</h3>
                    <span>{insideDrytime[0]} Hours</span>
                    <span>{insideDrytime[1]} Minutes</span>
                </div>
                </div>
                <div>
                {outsideInfo}
                <div>
                    <h3>Time to dry</h3>
                   {outsideDrytime[0]===0? null: <span>{outsideDrytime[0]} {outsideDrytime[0]<= 1 ? "Hour" : "Hours"}</span>}
                   { outsideDrytime[1]===0? null : <span>{outsideDrytime[1]} {outsideDrytime[1]<= 1 ? "Minute" : "Minutes"}</span>}
                </div>
                </div>
               {/* {cardList} */}
            </section>
        )
    }
  
}


