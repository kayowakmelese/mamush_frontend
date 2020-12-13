import React from 'react'
import '../index.css'
import {Link} from 'react-router-dom'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { new: "yes", username: "",clicked:'' }
    }
    shouldComponentUpdate() {
        return true;
    }
    changeState = () => {
        this.setState({ new: "no way changed" })

    }
    changingValue = (event) => {
        if (!Number(event.target.value)) {
            alert("not number")
        } else {
            this.setState({ username: event.target.value })
        }

    }
    makeActive=(id)=>{
        
       if(this.componentDidMount){
           if(id==="one"){

           }
        document.getElementById(this.state.clicked).classList.remove("active")
        document.getElementById(id).classList.add("active")
        this.setState({clicked:id})
       } 
        
    }
    componentDidMount(){
        if(!this.state.clicked){
            this.setState({clicked:"zero"})
            document.getElementById('zero').classList.add("active")
        }
    }
    render() {
        return <div className="navbar">
            <ul>
            <Link to="/"><li id="zero" onClick={() => this.makeActive("zero")}>Homepage</li></Link>
            <Link to="/search"><li id="one"  onClick={() => this.makeActive("one")}>Search</li></Link> 
                <li id="two"  onClick={() => this.makeActive("two")}>Notifications <FontAwesomeIcon icon={faBell} color="orangered"/></li>
                <li id="three"  onClick={() => this.makeActive("three")} >Cart</li>
                <li id="four" onClick={() => this.makeActive("four")}  >Profile</li>
                <li id="five" onClick={() => this.makeActive("five")} >Settings</li>
            </ul>
        </div>
    }
}
export default NavBar;


