// import {Room} from "../Models/room.model.js";


import  {Ticket} from '../Models/ticket.model.js'
export async function createTicket(req, res) {    
    try {
        const { subject="", description="", status="",category="",priority="" } = req.body;
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


export async function updateTicket(req,res){


  const { id } = req.params;
  
  const updates = req.body;
  console.log( `updated== ${updates} id == ${id}`)

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

