export const signInAction = ({email,password}) => ({
    type: 'SIGN_UP',
    payload : {
        email,
        password
    }
})

export const signOutAction = () => ({
    type: 'SIGN_OUT',
    payload : null
})