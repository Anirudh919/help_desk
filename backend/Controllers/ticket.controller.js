// import {Room} from "../Models/room.model.js";


import  {Ticket} from '../Models/ticket.model.js'
export async function createTicket(req, res) {    
    try {
        const { subject, description, status,category,priority } = req.body;
        const user=req.user
        
        if (!subject || !description || !category ) {
            return res.status(400).json({ message: "Please provide all required fields." });
        }

        const newTicket = await Ticket.create( { subject, description, status,priority,createdBy:user?._id.toString(),category });

        res.status(201).json({
            success: true,
            message: "Ticket created successfully",
            newTicket,
        });
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }

}

export async function getAllTickets(req, res) {
    try {
        const tickets = await Ticket.find({});
        res.status(200).json({
            success: true,
            message: "Tickets fetched successfully",
            tickets,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}   

// export async function getBookings(req,res){
//     try {
//         const { userId } = req.params;
//         const bookings = await Room.find({ bookedBy: userId });

//         if (!bookings) {
//             return res.status(404).json({
//                 success: false,
//                 message: "No bookings found for this user",
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: "Bookings fetched successfully",
//             bookings,
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//             error: error.message,
//         });
//     }

// }






export const getMyTickets = async (req, res) => {
  try {
    const myTickets = await Ticket.find({ createdBy: req.user._id.toString() }).populate()
    res.status(200).json({
      success: true,
      message: "Tickets fetched successfully",
      myTickets,
  })
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching tickets' });
  }
};





export async function getTicketById(req, res) {
    try {
        const { id } = req.params;
        console.log(id)
        const ticket = await Ticket.findOne({_id: id}).populate('createdBy', 'name email')

        if (!ticket) {
            return res.status(404).json({
                success: false,
                message: "Ticket not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Ticket fetched successfully",
            ticket,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}           

// export async function bookRoom(req,res){
//     try {
//         const { id } = req.params;
//         const user=req.user


//         const room = await Room.findOne({ _id: id });

//         if (!room) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Room not found",
//             });
//         }

//         if (!room.roomAvailability) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Room is already booked",
//             });
//         }

//         room.roomAvailability = false;
//         room.bookedBy = user?._id; 
//         await room.save();

//         res.status(200).json({
//             success: true,
//             message: "Room booked successfully",
//             room,
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//             error: error.message,
//         });
//     }
// }


export async function updateTicket(req,res){


  const { id } = req.params;
  
  const updates = req.body;

  try {

    const updatedTicket = await Ticket.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedTicket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    res.status(200).json({ message: 'Ticket updated successfully',
       updatedTicket,
       success:true });
  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

export const deleteTicketById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTicket = await Ticket.findByIdAndDelete(id);

    if (!deletedTicket) {
      return res.status(404).json({ success: false, message: "Ticket not found" });
    }

    res.status(200).json({
      success: true,
      message: "Ticket deleted successfully",
      deletedTicket,
    });
  } catch (error) {
    console.error("Error deleting ticket:", error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};


// export async function cancelRoom(req,res){
//     try {
//         const { id } = req.params;
//         const {userId}=req.body;
//         const room = await Room.findOne({ _id: id });


//         if (!room) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Room not found",
//             });
//         }

//         if (room.roomAvailability) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Room is not booked",
//             });
//         }
//         if(room.bookedBy.toString() == userId || req.user.role == "admin"){
//             room.roomAvailability = true;
//             room.bookedBy = null; 
//             await room.save();
    
//            return res.status(200).json({
//                 success: true,
//                 message: "Room booking cancelled successfully",
//                 room,
//             });
//         }


//              res.status(403).json({
//                 success: false,
//                 message: "You are not authorized to cancel this booking",
//             });
//         }  
      

      
//     catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//             error: error.message,
//         });
//     }
    



// }

// export async function checkoutRoom(req,res){
//     try {
//         const { id } = req.params;
//         const {userId}=req.body;
//         const room = await Room.findOne({ roomNumber: id });

//         if (!room) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Room not found",
//             });
//         }

//         if (room.roomAvailability) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Room is not booked",
//             });
//         }
//         if(room.bookedBy.toString() == userId || req.user.role == "admin"){


//             room.roomAvailability = true;
//             room.bookedBy = null; 
//             await room.save();
        
    
//           return  res.status(200).json({
//                 success: true,
//                 message: "Room checked out successfully",
//                 room,
//             })}
// else{
//      res.status(403).json({
//         success: false,
//         message: "You are not authorized to cancel this booking",
//     });

// }
        
      
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//             error: error.message,
//         });
//     }
// }



// export const getAllTickets = async (req, res) => {
//   try {
//     let tickets;

//     if (req.user.role === 'admin' || req.user.role === 'agent') {
//       tickets = await Ticket.find();
//     } else {
//       tickets = await Ticket.find({ createdBy: req.user.id });
//     }

//     res.json(tickets);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const getTicketById = async (req, res) => {
//   try {
//     const ticket = await Ticket.findById(req.params.id);
//     if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

//     // Restrict user from accessing others' tickets
//     if (req.user.role === 'customer' && ticket.createdBy.toString() !== req.user.id) {
//       return res.status(403).json({ message: 'Access denied' });
//     }

//     res.json(ticket);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
