
import Cards from '../cards.js'
import CardBuffer from '../Cardbuffer.js'
import fetchData from '../../controller/loaders.js';
import React from 'react'
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={response:[],loaded:false,sample:[1,2,3,4,5,6,7,8,9,10,11,12,13,14]}
    }


    async componentDidMount(){
            const response=await fetchData("getOrders","app");
            this.setState({response:response,loaded:true})
    }

    render(){
        return <center>
        <ul className="cardContainer">
        <h1>Nearby Items</h1>
        <p>this are items from providers near you</p>
        {
            !this.state.loaded ? (this.state.sample.map((detail)=>{
                return <CardBuffer/>
            })):( this.state.response.map((detail,index)=>{
                let imageurl="http://192.168.1.4:300/orders/"+detail.id+"order"+detail.providerId+".jpeg"
                return <Cards imageurl={imageurl} likes={detail.like} comments={detail.commentss} money={detail.money} header={detail.order_name} clicker={detail.id}/>
            }))
           
        }
        </ul>
        </center>
    }
}
export default Home;