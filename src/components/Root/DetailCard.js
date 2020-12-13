import React from 'react'
import { faHeart,faDollarSign,faCommentAlt,faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Comments from './Comments'
import ProfileCard from './ProfileCard'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
class DetailCard extends React.Component{
    constructor(props){
        super(props)
        this.state=({commentRevealed:false})
    }

    render(){
        const url="/provider/"+this.props.id;
        return <div className="detailCard flex">
        <img className="detailImage" src={this.props.imageurl} alt="item"/>
         
                    <div className="detailText" >
                   <Link exact to={url}> <ProfileCard id={this.props.id} current={this.props.current}/></Link>
                        <h1>
                        
                            {this.props.name}
                        </h1>
                        <name>
                            {this.props.desc}
                        </name>
                        <div className="lilcurve">
                            <button>
                            <FontAwesomeIcon icon={faHeart} width="100"/> 
                                    {this.props.heart} likes
                            </button>
                            <button>
                            <FontAwesomeIcon icon={faDollarSign}/>
                                    {this.props.money}etb
                            </button>
                            <button>
                            <FontAwesomeIcon icon={faCommentAlt}/>
                                    {this.props.comment} comments
                            </button>
                        </div>
                        <div className="lilcurve btn"> PURCHASE NOW</div>
                        <div className="comments">
                            <div className="lilcurve btn btn-secondary" onClick={()=>{
                                if(this.state.commentRevealed){
                                    this.setState({
                                        commentRevealed:false
                                    })
                                    ReactDOM.render(<div/>, document.getElementById('comment'))
                                }else{
                                    this.setState({commentRevealed:true})
                                ReactDOM.render(<Comments id={this.props.current}/>, document.getElementById('comment'))
                                }
                               
                               }}>Load Comments <FontAwesomeIcon icon={faArrowDown}/></div>
                            <div id="comment"></div>
                            
                        </div>
                    </div>
                    
        </div>
    }
}
export default DetailCard;