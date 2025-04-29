import { combineReducers } from "redux"




// auth user
function UserReducer(state=JSON.parse(localStorage.getItem("authInfo")) || null,action){
    const {type,payload}=action

    switch(type){
        case "SET_USER":{
            return state=payload
        }
        case "ADD_USER":{
            return [...state,payload]
        }
        case "UPDATE_USER":{
            return {
                ...state,
                users: state.users.map(user =>
                  user._id === payload._id
                    ? { ...user, ...user.data }
                    : user
                ),
              };
        }

        
        default:{
            return state
        }
    }

}





// all customsers GET/users
function AllUsersReducer(state=[],action){
    const {type,payload}=action

    switch(type){
        case "SET_All_USERS":{
            return state=payload
        }
        case "UPDATE_USER":{

            const oldUsers=state
            const newUsers=oldUsers.filter(user=>user?._id !=payload?._id)
            state=[...newUsers,payload]
            return state

            }
        default:{
            return state
        }
    }
}



// all my-tickets GET/tickets
function TicketReducer(state= [],action){
    const {type,payload}=action

    switch(type){
        case "SET_TICKET":{
            return state=payload
        }
        case "ADD_TICKET":{
            return [...state,payload]
        }
        case "UPDATE_TICKET":{

            const oldTickets=state
            const newTickets=oldTickets.filter(ticket=>ticket?._id !=payload?._id)
            state=[...newTickets,payload]
            return state

            }
        case 'DELETE_TICKET':
            return {
              ...state,
              tickets: state.tickets.filter(ticket => ticket._id !== payload._id),
            };
        default:{
            return state
        }
    }

}




// selected menu
function SelectedMenu(state="dashboard",action){
    const {type,payload}=action

    switch(type){
        case "SET_MENU":{
            return state=payload
        }
        default:{
            return state
        }
    }

}

    


//all  notes GET/notes
function NotesReducer(state=JSON.parse(localStorage.getItem("my-notes")) || [],action){
    const {type,payload}=action

    switch(type){
        case "SET_NOTES":{
            return state=payload
        }
        case "ADD_NOTES":{
            return [...state,payload]
        }
       case "UPDATE_NOTE":{
        const oldNotes=state
        const newNotes=oldNotes.filter(note=>note?._id !=payload?._id)
        state=[...newNotes,payload]
        return state

        }
        case 'DELETE_NOTE':



      return state=[]
        
        default:{
            return state    
        }
    }

}





// particular ticket
function ticketDetails(state=[],action){
    const {type,payload}=action
    switch(type){
        case "SET_TICKET_DETAILS":{
            return state=payload

        }
        case "REMOVE_TICKET_DETAILS":{
            return state=[];

        }
        default: {
            return state
        }
    }
}




// particular notes

function notesDetail(state=[],action){
const {type,payload}=action
switch(type){
    case "SET_NOTE_DETAILS":{
        return state=payload

    }
    case "REMOVE_NOTE_DETAILS":{
        return state=[];

    }
    default: {
        return state
    }
}
}
// particular user(customer/agent)

function userDetail(state=[],action){
    const {type,payload}=action
    switch(type){
        case "SET_USER_DETAILS":{
            return state=payload
    
        }
        case "REMOVE_USER_DETAILS":{
            return state=[];
    
        }
        default: {
            return state
        }
    }
    }






export const allReducers=combineReducers({
    SelectedMenu,
    TicketReducer,UserReducer,
    NotesReducer,
    AllUsersReducer,

    ticketDetails,
    notesDetail,
    userDetail
})