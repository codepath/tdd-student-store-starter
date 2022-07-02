import * as React from "react"
import "./Logo.css"
import {
  Link
} from "react-router-dom";

export default function Logo() {
  return (
        <div className="logo">
         <Link to={"/"}> 
          <a href="">
            <img className="logo-img" src="https://media3.giphy.com/media/3o7bu9i039LhWBXH1u/giphy.gif" width= "50" height="70"></img>
          </a>
          </Link>
        </div>
  )}