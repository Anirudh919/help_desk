export const setTickets=(payload)=>{
    return{
        type:'SET_TICKET',payload
    }

}


export const addTicket=(payload)=>{
    return{
        type:'ADD_TICKET',payload
    }

}


export const updateTicket=(payload)=>{
    return{type:"UPDATE_TICKET",payload}

}

export const deleteTicket=(payload)=>{
    return{type:"DELETE_TICKET",payload}

}

