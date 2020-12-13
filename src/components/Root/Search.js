import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Cards from '../cards.js'
import CardBuffer from '../Cardbuffer.js'
import fetchData from '../../controller/loaders.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
class Search extends React.Component{
    constructor(props){
        super(props);
        this.state=({response:[],loaded:false,sample:[1,2,3,4,5,6]})

    }
    componentDidMount(){
       
    }

    searchItem=async (event)=>{
        
        const response=await fetchData("searchItem","value="+event.target.value);
        console.log(response)
        let bools=false;
        if(response.length>0){
            bools=true;
        }else{
            bools=false;
        }
        this.setState({response:response,loaded:bools})
    }
    render(){
        return <center>
                <div className="searchContainer">
                    <div className="searchBar">
                    
                    <input type="text" className="searchinput" placeholder="search items" onChange={this.searchItem} />
                    <FontAwesomeIcon icon={faSearch} color="black"/>

                    </div>
                    {!this.state.loaded ? (
                        this.state.sample.map((detail)=>{
                            return <CardBuffer/>
                        })):(
                        this.state.response.map((resp,index)=>{
                                    let imageurl="http://192.168.1.4:300/orders/"+resp.id+"order"+resp.providerId+".jpeg"
                                    return  <Cards imageurl={imageurl} likes={resp.like} comments={resp.commentss} money={resp.money} header={resp.order_name} clicker={resp.id} />
                
                                })
            )
                      
                    }
                </div>
               </center>
        
    }
}
export default Search;