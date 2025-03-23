const asyncHandler = require("express-async-handler");

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    res.json({message: "User registered"});
});


//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    res.json({message: "Login user"});
});



//@desc Get current user info
//@route POST /api/users/current
//@access private
const getCurrentUserInfo = asyncHandler(async (req, res) => {
    res.json({message: "Get current user info"});
});




module.exports = {registerUser, loginUser, getCurrentUserInfo};