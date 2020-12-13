import React from 'react'
import fetchData from '../../controller/loaders.js';
import DetailCard from './DetailCard'
import {connect} from 'react-redux'
import Cards from '../cards'

class Detail extends React.Component{
    
    constructor(props){
        super(props)
        this.state=({id:'',response:[],others:[]})
        
    }

    loadDetail=async (param)=>{
        const response=await fetchData("itemDetail","orderID="+param);
        console.log(response)
        this.setState({response:response})
        this.forceUpdate()
        

        
    }
   componentDidUpdate(){
      console.log("i am updating")
      
   }

    componentDidMount(){
        
        let id=this.props.match.params.id;
        this.loadDetail(id)
        this.setState({id,others:this.props.payload})
        
    }

    render(){
        return this.state.response.map((response)=>{
            let imageurl="http://192.168.1.4:300/orders/"+response.id+"order"+response.providerId+".jpeg";
         return <center>
         <DetailCard id={response.providerId} comments={response.comment} current={response.id} imageurl={imageurl} name={response.order_name} desc={response.order_description} heart={response.like} money={response.money} comment={response.comment}/>
         <div>
         <h1>Other items from Provider</h1>
         {
            this.props.payload.map((detail)=>{
            let imageurl="http://192.168.1.4:300/orders/"+detail.id+"order"+detail.providerId+".jpeg"
             return   <Cards imageurl={imageurl} likes={detail.like} comments={detail.commentss} money={detail.money} header={detail.order_name} clicker={detail.id}/>
          
         })
         }</div>
         </center>  
         })
    }

   
}
const mapStateToProps = state =>{
    return{
        id:state.id,
        payload:state.payload,
        current:state.currentstate
    }
}
export default connect(mapStateToProps)(Detail);