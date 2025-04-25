export const setUser=(payload)=>{
    
    return{
        type:"SET_USER",
        payload
    }
}



export const setAllUsers=(payload)=>{
    
    return{
        type:"SET_All_USERS",
        payload
    }
}

export const updateUser=()=>{
    return{
        type:"UPDATE_USER",payload
    }

}

export const addUser=()=>{
    return{
        type:"ADD_TICKET",payload
    }

}