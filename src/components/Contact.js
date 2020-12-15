import React from 'react'
import '../App.css';


function Contact() {
    return (
        <form className="form">
            <h1>Contact Form</h1>
            <label>
                Name
            </label>
            <input  placeholder="name"/>

            <label>
                Email
            </label>
            <input  placeholder="Email"/>

            <label>
                Message
            </label>
            <textarea placeholder="Message"></textarea>
        </form>
    )
}

export default Contact
