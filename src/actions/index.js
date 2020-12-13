import {connector} from 'react-redux'

const mapStateToProps=(state)=>{
    return {
        name:state.payload
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        buyCake()=>dispatch(buyCake())
    }
}