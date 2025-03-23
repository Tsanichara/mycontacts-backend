const mongoose =  require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add a username"],
        unique: [true, "Username already taken"]
    },
    email: {
        type: String,
        required: [true, "Please add an email address"],
        unique: [true, "Email address already taken"]
    },
    username: {
        type: String,
        required: [true, "Please add a password"],
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema);