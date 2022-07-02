import * as React from "react"
import "./About.css"

export default function About() {
  return (
    <section className="about" id="About">
      <div className="content">
        <div className="summary">
          <div className="description-column">
          <div className="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          </div>
          <div className="image-column">
              <img className="about-media" src="https://i.pinimg.com/originals/c8/4c/34/c84c346b3f81654f824855c5a3281dbd.gif" height="400px" width="400px" alt="logo"></img>
          </div>
        </div>
      </div>
    </section>
  )
}