export const setNotes=(payload)=>{
    return{
        type:'SET_NOTES',payload
    }

}

export const addNotes=(payload)=>{
    return{
        type:'ADD_NOTES',payload
    }

}


export const updateNote=(payload)=>{
    return{
        type:"UPDATE_NOTE",payload
    }

}

export const deleteNote=(payload)=>{
    return{type:"DELETE_NOTE",payload}

}
