// src/Form.js
import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Form submitted successfully!');
            } else {
                alert('Failed to submit form.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting form');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" onChange={handleChange} required />
            </div>
            <div>
                <label>Message:</label>
                <textarea name="message" onChange={handleChange} required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
