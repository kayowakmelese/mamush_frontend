import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faDollarSign,faCommentAlt,faCartPlus } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import React from 'react'
class Cards extends React.Component{
    
     
    
    async componentDidMount(){
            
        }

    render(){
        const uri="/detail/"+this.props.clicker;
        return <li className="cardItems">

        <Link exact to={uri}  >
        <div className="cards" >
            <div className="hero-item" style={{backgroundImage:`url(${this.props.imageurl})`}}  >
                <button ><FontAwesomeIcon icon={faCartPlus}/> Purchase</button>
               
            </div>
            <p className="name">
                {this.props.header}
            </p>
            <div className="containers">
                <ul>
                
                    <li><FontAwesomeIcon icon={faHeart} color="orangered"/> {this.props.likes}<lil>likes</lil></li>
                    <li><FontAwesomeIcon icon={faDollarSign} color=" gray"/> {this.props.money}<lil>etb</lil></li>
                    <li><FontAwesomeIcon icon={faCommentAlt} color=" gray"/> {this.props.comments}<lil>comments</lil></li>
                </ul>
            </div>
            
        </div>
        </Link>
        </li>
    }
}
export default Cards;