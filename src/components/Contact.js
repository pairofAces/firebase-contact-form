import React, { useState } from 'react'
import '../App.css';
import { db } from '../components/Firebase'

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        db.collection('contacts').add({
            name: name,
            email: email,
            message: message,
        })
        .then(() => {
            alert("Your Message has been sent")
        })
        .catch((error) => {
            alert(error.message);
        });

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <h1>Contact Form</h1>
            <label>
                Name
            </label>
            <input  
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>
                Email
            </label>
            <input  
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}    
            />

            <label>
                Message
            </label>
            <textarea 
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Contact
