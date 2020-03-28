import Post from "./post"
import json from "../assets/data.json"
import webpackScheme from "../assets/webpack.png"
import "../styles/style.css"

const post = new Post("Webpack post title", webpackScheme);

console.log("Post to String: ", post.toString());
console.log("JSON: ", json);
