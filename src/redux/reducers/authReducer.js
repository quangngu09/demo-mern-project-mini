import ACTIONS from '../actions/index'

const initalState = {
    user: [],
    isLogged:false,
    isAdmin:false,
}

const authReducer = (state=initalState,action)=>{
    switch(action.type){
        case ACTIONS.LOGIN:
            return{
                ...state,
                isLogged:true
            }
        default: return state
    }
}

export default authReducer