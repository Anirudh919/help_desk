import { Ticket } from '../Models/ticket.model.js';
import { User } from '../Models/user.model.js';

// const Ticket = require('../Models/ticket.model');
// const User = require('../Models/user.model');

export const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalTickets = await Ticket.countDocuments();
    const openTickets = await Ticket.countDocuments({ status: 'open' });
    const closedTickets = await Ticket.countDocuments({ status: 'closed' });

    res.json({
      totalUsers,
      totalTickets,
      openTickets,
      closedTickets
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
