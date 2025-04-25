import  mongoose from 'mongoose'

const noteSchema = new mongoose.Schema(
  {
    title: {
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
      enum: ['pending', 'open', 'closed'],
      default: 'pending',
    },
  
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    attachments: [{
      type: String // file paths or URLs
    }]
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields
  }
);

export const Notes = mongoose.model('Notes', noteSchema);
