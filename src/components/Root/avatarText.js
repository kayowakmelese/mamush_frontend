import React from 'react'

class avatarText extends React.Component{

    render(){
        return <div className="providerComponent flex">
        <div className="circle" style={{backgroundImage:`url(${this.props.imageurl})`}} />
        <div className="shopertext">
            <h3>{this.props.head}</h3>
            <name>{this.props.body}</name>
        </div>
    </div>
    }
}

export default avatarText;