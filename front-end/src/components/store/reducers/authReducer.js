const initState = {user:null}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGN_UP':
            return (
                {
                    ...state,
                    user:action.payload
                }
            )
    
        default:
            
            return state
    }
};

export default authReducer; 
