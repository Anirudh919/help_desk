import  mongoose from 'mongoose'

const ticketSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    
      category: {
        type: String,
        required: true,
        trim: true,
      },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['open', 'in-progress', 'closed'],
      default: 'open',
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    attachments: [{
      type: String // file paths or URLs
    }]
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields
  }
);

export const Ticket = mongoose.model('Ticket', ticketSchema);
