import express from 'express';
// import { bookRoom, cancelRoom, checkoutRoom, createTicket, deleteRoomById, getAllRooms, getBookings, getRoomById, updateRoom } from '../Controllers/ticket.controller.js';
import { isAuthenticated,validateUser } from '../Middlewares/protectedRoutes.js';


export const ticketRouter = express.Router();

import {
  createTicket,
  deleteTicketById,
  getAllTickets,
  getMyTickets,
  getTicketById,
  updateTicket
} from '../Controllers/ticket.controller.js'


ticketRouter.get('/', validateUser, getAllTickets); // all for admin, only own for user
ticketRouter.get('/my-tickets',validateUser, getMyTickets);



ticketRouter.get('/:id', validateUser, getTicketById);

ticketRouter.delete("/:id",validateUser,deleteTicketById)


ticketRouter.post("/create",validateUser,createTicket)

ticketRouter.put("/update/:id",validateUser,updateTicket)

// module.exports = {ticketRouter};
