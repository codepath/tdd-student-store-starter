import * as React from "react"
import "./NotFound.css"

export default function NotFound() {
  return (
    <div class="not-found">
      <div className="not-found-container">
        <img className="not-found-img" src="https://cdn.dribbble.com/users/1285274/screenshots/3162565/robot_movie.gif"></img>
        <h2 className="not-found-h2">404</h2>
        <h3 className="not-found-h3">Oops, nothing here...</h3>
        <p className="not-found-p">Please Check the URL</p>
        <p className="not-found-p">Otherwise, <a href="#Home">Click here</a> to redirect to homepage.</p>
      </div>
    </div>
  )
}
