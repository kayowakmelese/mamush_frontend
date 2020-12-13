import React from 'react'
import Cards from '../cards'
class ShoperProfileCard extends React.Component{


        render(){
            return <center>
                    <div className="providerhero">
                        <div className="heroContainer lilcurve">
                        <center>
                            <div className="avatarcontainer">
                                <div className="circlebig" style={{backgroundImage:`url(${this.props.imageurl})`}}>

                                </div>
                            </div>
                        </center>
                        <h1>{this.props.shopname}</h1>
                        <name style={{Color:"#bbb"}}>{this.props.shoptype}</name>
                    </div></div>
                    <div className="heroContainer  herocontainer2">
                    
                    <ul>
                   
                        {
                            this.props.items.map((detail)=>{
                              let imageurl="http://192.168.1.4:300/orders/"+detail.id+"order"+detail.providerId+".jpeg"
                            return <Cards imageurl={imageurl} likes={detail.like} comments={detail.commentss} money={detail.money} header={detail.order_name} clicker={detail.id}/>
         
                            })
                        }
                        </ul>
                    </div>
                </center>
        }
}
export default ShoperProfileCard;