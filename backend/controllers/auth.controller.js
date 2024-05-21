import bcrypt from "bcryptjs";
import User from "../models/user.models.js";
import generateTokenAndSetCookies from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        console.log(`username is ${username}`);
        const user = await User.findOne({ username });

        if (user) {
            console.log("Error in signup controller: Username already exists");
            return res.status(400).json({ error: "Username already exists" });
        }

        // Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        });

        if (newUser) {
            // Generate JWT token here
            generateTokenAndSetCookies(newUser._id, res);
            await newUser.save();
            return res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        } else {
            return res.status(400).json({ error: "Invalid user data" });
        }
    } catch (error) {
        console.log("Error in signup controller: ", error.message);
        return res.status(500).json({ error: "Server error" });
    }
}

export const login = async(req, res) => {
    try{
        const {username, password}= req.body;
        const user= await User.findOne({username});  //checks user is present or not
        const isPasswordCorrect= await bcrypt.compare(password, user?.password || "") //checks password is present or not 

        //if password is not present log invalid crediantials 
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or password"});
        }
        generateTokenAndSetCookies(user._id, res);

        res.status(200).json({
            _id: user._id, 
            fullName: user.fullName,
            username: user.username, 
            profilePic: user.profilePic,
        })
    } catch(error){
        console.log("Error in login controller ", error.message);
        res.status(500).json({error: "Internal Server Error "});
    }
}

export const logout =(req, res) => {
    try{
        res.cookie= ("jwt", "", {maxAge: 0})
        res.status(200).json({message: "Logged out successfully"})
    }
    catch(error){
        console.log("Error in logout controller ", error.message);
        res.status(500).json({error: "Internal Server Error "});
    }
    
}
