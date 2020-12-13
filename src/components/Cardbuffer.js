import React from 'react'
import Shimmer from "react-shimmer-effect"


class CardBuffer extends React.Component{
    render(){
        return  <li>
        <Shimmer> 
        <div className="cardItems">
                <div className="cards">
                    
                        <div className="hero-item" >
                        </div>
                   
                </div>
                </div>
        </Shimmer>
               </li>
               
        
    }
}
export default CardBuffer;