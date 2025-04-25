import { combineReducers } from "redux"

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

function AllUsersReducer(state=[],action){
    const {type,payload}=action

    switch(type){
        case "SET_All_USERS":{
            return state=payload
        }
        default:{
            return state
        }
    }
}




function TicketReducer(state=JSON.parse(localStorage.getItem("my-tickets")) || [],action){
    const {type,payload}=action

    switch(type){
        case "SET_TICKET":{
            return state=payload
        }
        case "ADD_TICKET":{
            return [...state,payload]
        }
        case "UPDATE_TICKET":{
            console.log(state)
            return {
                ...state,
                tickets: state.map(ticket =>
                  ticket._id === payload._id ? { ...ticket, payload }
                    : ticket
                ),
              };
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

    
function NotesReducer(state=[],action){
    const {type,payload}=action

    switch(type){
        case "SET_NOTES":{
            return state=payload
        }
        case "ADD_NOTES":{
            return [...state,payload]
        }
       case "UPDATE_NOTE":{
            return {
                ...state,
                notes: state.notes.map(note =>
                  note.id === payload._id
                    ? { ...note, ...payload.data }
                    : note
                ),
              };
        }
        case 'DELETE_NOTE':



      return state=[]
        
        default:{
            return state    
        }
    }

}






export const allReducers=combineReducers({
    SelectedMenu,
    TicketReducer,UserReducer,
    NotesReducer,
    AllUsersReducer
})