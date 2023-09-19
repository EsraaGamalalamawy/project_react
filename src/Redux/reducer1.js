const Reducer1=(state={x1:2000},action)=>{
    switch(action.type){
        case "addyear":
            return{...state, x1:state.x1 +1}
        case "delyear":
            return{...state, x1: state.x1 -1}
        case "addn":
                return{...state, x1: state.x1 + +(action.value)}
        case "deln":
            return{...state, x1: state.x1 - +(action.value)}
        default:
            return state
    }
}
export default Reducer1;