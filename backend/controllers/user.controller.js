import User from "../models/user.models.js";

export const getUsersForSidebars= async(req, res)=>{
    try{
        const loggedInUserId= req.user._id
        const filterUsers= await User.find({id:{$ne: loggedInUserId}}).select("-password")
        
        res.status(200).json(filterUsers);
    }catch(error){
        console.log("Error is ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}