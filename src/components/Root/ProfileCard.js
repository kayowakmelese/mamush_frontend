import React from 'react'
import {connect} from 'react-redux'
import fetchData from '../../controller/loaders.js';
import AvatarText from './avatarText'
class ProfileCard extends React.Component{
    constructor(props){
        super(props)
        this.state=({response:[],loaded:false})
        
    }
    store(data){
        return {
            type:'DETAIL',
            payload:data
        }
    }
     


    async componentDidMount(){
        let param=this.props.id
        const response=await fetchData("loadOtherItems","id="+param);
        this.props.dispatch({type:"provider",id:param,current:this.props.current,payload:response[0].items})
        this.setState({response:response})
        
    }
  
    render(){
        
        return this.state.response.map((response)=>{
            let imageurl="http://192.168.1.4:300/profiles/providerprofile"+this.props.id+".jpeg";
            return  <AvatarText imageurl={imageurl} head={response.shopName} body={response.shopType}/>
           
        }) 
        
        
        
    }
}
const mapStateToProps=state=>{
    return {
        items:state.id,
        payload:state.payload
    }
}
export default connect(mapStateToProps)(ProfileCard);