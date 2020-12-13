const storer=(state={id:0,currentstate:0,payload:[]},action)=>{
    switch (action.type){
        case 'provider':
            return  {
                id:state.id,
                payload:action.payload,
                currentstate:action.current
            }
        case 'bae':
            return {
                id:state.id,
                payload:action.payload
            }
            default:
                return state
    }
   
}

export default storer