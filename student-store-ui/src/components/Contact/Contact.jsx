import * as React from "react"
import "./Contact.css"

export default function Contact() {
  return (
    <section className="contact" id="Contact">
      <div className="content">
        <div className="summary">
        <div className="gif-column">
              <img className="contact-media" src="https://media3.giphy.com/media/MuOGhW5GtDazUSJcL3/giphy.gif" height="400px" width="400px" alt="logo"></img>
          </div>
          <div className="info-column">
          <ul className="info">
            <li>
              <p> Email: code@path.org</p>
              <p> Phone: 1-800-CODEPATH</p>
              <p>Address: 123 Fake Street, San Francisco, CA</p>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  )
}