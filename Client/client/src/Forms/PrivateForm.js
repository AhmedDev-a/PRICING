import React, { useState } from 'react';
import axios from 'axios';

function PrivateForm() {
    const [formData, setFormData] = useState({
        clientName: '',
        numberOfPeople: '',
        travelDate: '',
        // Add other fields as needed
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/submit', formData)
            .then(response => {
                console.log('Data submitted:', response.data);
            })
            .catch(error => {
                console.error('There was an error submitting the form!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Client Name:</label>
                <input
                    type="text"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Number of People:</label>
                <input
                    type="text"
                    name="numberOfPeople"
                    value={formData.numberOfPeople}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Travel Date:</label>
                <input
                    type="text"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                />
            </div>
            {/* Add other form fields as needed */}
            <button type="submit">Submit</button>
        </form>
    );
}

export default PrivateForm;