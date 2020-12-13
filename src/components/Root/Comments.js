import React from 'react'
import fetchData from '../../controller/loaders';
import AvatarText from './avatarText'

class Comments extends React.Component{
    constructor(props){
        super(props)
        this.state=({response:[]})
        
    }
    async loadDetail(param){
        const response=await fetchData("loadComments","orderid="+param)
        this.setState({response:response})

    }
    componentDidMount(){
        this.loadDetail(this.props.id);
    }

    render(){
        return this.state.response.map((resp,index)=>{
            
            let imageurl="http://192.168.1.4:300/profiles/userprofile"+resp.userId+".jpeg";
            return <AvatarText imageurl={imageurl} head={resp.user.firstname+" "+resp.user.lastname} body={resp.comment}/>
        })

    }

}

export default Comments;