import React from 'react'
import fetchData from '../../controller/loaders'
import ShoperProfileCard from './shoperProfileCard'
class ShoperProfile extends React.Component{
    constructor(props){
        super(props)
        this.state=({response:[]})
    }

    async componentDidMount(){
        let param=this.props.match.params.id
        const response=await fetchData("loadOtherItems","id="+param);
        this.setState({response})
    }
    render(){
        return this.state.response.map((detail)=>{
            let imageurl="http://192.168.1.4:300/profiles/providerprofile"+this.props.match.params.id+".jpeg";
            return <ShoperProfileCard shopname={detail.shopName} shoptype={detail.shopType} imageurl={imageurl} items={detail.items}/>
        })
    }
}
export default ShoperProfile;