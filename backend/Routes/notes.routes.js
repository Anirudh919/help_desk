import express from 'express';
// import { bookRoom, cancelRoom, checkoutRoom, createTicket, deleteRoomById, getAllRooms, getBookings, getRoomById, updateRoom } from '../Controllers/ticket.controller.js';
import { isAuthenticated,validateUser } from '../Middlewares/protectedRoutes.js';
import { createNotes, deleteNoteById, getMyNotes, getNoteById, updateNote } from '../Controllers/notes.controllers.js';


// export const roomRoutes = express.Router();



// roomRoutes.get("/",getAllRooms)
// roomRoutes.get("/getrooms/:id",getRoomById)
// roomRoutes.put("/book/:id",validateUser, bookRoom)

// roomRoutes.put("/cancel/:id",validateUser,cancelRoom)


// roomRoutes.put("/checkout/:id",validateUser,checkoutRoom)
// roomRoutes.get("/getbookings/:userId",validateUser,getBookings)




// roomRoutes.delete("/delete/:id", validateUser,deleteRoomById);


export const notesRouter = express.Router();

notesRouter.post('/create-notes', validateUser, createNotes); // all for admin, only own for user
notesRouter.get('/my-notes',validateUser, getMyNotes);

notesRouter.get('/:id', validateUser, getNoteById);

notesRouter.put("/update/:id",validateUser,updateNote)


notesRouter.delete("/:id",validateUser,deleteNoteById)



// module.exports = {ticketRouter};
