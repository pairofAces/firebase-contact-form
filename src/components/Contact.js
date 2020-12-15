import React from 'react'

function Contact() {
    return (
        <form className="form">
            <h1>Contact Form</h1>
            <label>
                Name
                <input  placeholder="name"/>
            </label>

            <label>
                Email
                <input  placeholder="email"/>
            </label>

            <label>
                Message
                <textarea placeholder="message"></textarea>
            </label>
        </form>
    )
}

export default Contact
