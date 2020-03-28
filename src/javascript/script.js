import Post from "./post"
import "../styles/style.css"

const post = new Post("Webpack post title");

console.log("Post to String: ", post.toString());