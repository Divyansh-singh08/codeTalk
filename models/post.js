//how to established a relationship in dataBase
// user and post

const mongoose = require("mongoose");

//creating the schema
const postSchema = new mongoose.Schema(
	{
		content: {
			type: String,
			required: true,
		},
		//this will be prePopulating through the userSchema there data..
		//In mongoose, the ObjectId type is used not to create a new uuid,
		//rather it is mostly used to reference other documents(user.js models Schema)
		//This is a powerful feature of Mongoose that allows you to create
		// relationships between documents in different collections,making it easier to model complex MdB
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

const Post = mongoose.model("Post", postSchema);
// console.log(Post);
module.exports = Post;
