

import  {Notes} from '../Models/notes.models.js'


export async function createNotes(req, res) {    
    try {
        const { title, description, status } = req.body;
        const user=req.user
        
        if (!title || !description ) {
            return res.status(400).json({ message: "Please provide all required fields." });
        }

        const newNote = await Notes.create( { title, description, status,createdBy:user?._id.toString() });

        res.status(201).json({
            success: true,
            message: "Note created successfully",
            newNote,
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



export const getMyNotes = async (req, res) => {
  try {
    const myNotes = await Notes.find({ createdBy: req.user._id.toString() }).populate()
    res.status(200).json({
      success: true,
      message: "Notes fetched successfully",
      myNotes,
  })
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching tickets' });
  }
};



export async function getNoteById(req, res) {
    try {
        const { id } = req.params;
        
        const note = await Notes.findOne({_id: id});

        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Note fetched successfully",
            note,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}   


export async function updateNote(req,res){


  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedNote = await Notes.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json({ message: 'Note updated successfully',
        updatedNote,
       success:true });
  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({ message: 'Something went wrong', error });
  }
};



export const deleteNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedNote = await Notes.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ success: false, message: "Note not found" });
    }

    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
      deletedNote,
    });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};