import React, { useState } from 'react';
import axios from 'axios';

function UmrahForm() {
    const [formData, setFormData] = useState({
        clientName: '',
        numberOfPeople: '',
        travelDate: '',
        flightTickets: 15500,
        visaTransport: 850,
        qatarTickets: 225,
        meccaAccommodation: 150,
        medinaAccommodation: 400,
        internalTransport: 1000,
        tours: 250,
        administrativeSupervision: 100,
        religiousSupervision: 2000,
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
        const totalCost = calculateTotalCost(formData);
        const totalProfit = calculateTotalProfit(totalCost);
        const dataToSubmit = { ...formData, totalCost, totalProfit };
        axios.post('http://localhost:5000/submit', dataToSubmit)
            .then(response => {
                console.log('Data submitted:', response.data);
            })
            .catch(error => {
                console.error('There was an error submitting the form!', error);
            });
    };

    const calculateTotalCost = (data) => {
        const { flightTickets, visaTransport, qatarTickets, meccaAccommodation, medinaAccommodation, internalTransport, tours, administrativeSupervision, religiousSupervision, numberOfPeople } = data;
        return (flightTickets + visaTransport + qatarTickets + (meccaAccommodation * 9) + (medinaAccommodation * 3) + internalTransport + tours + administrativeSupervision + religiousSupervision) * numberOfPeople;
    };

    const calculateTotalProfit = (totalCost) => {
        return totalCost * 1.15;
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
                    type="number"
                    name="numberOfPeople"
                    value={formData.numberOfPeople}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Travel Date:</label>
                <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Flight Tickets:</label>
                <input
                    type="number"
                    name="flightTickets"
                    value={formData.flightTickets}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Visa + Transport:</label>
                <input
                    type="number"
                    name="visaTransport"
                    value={formData.visaTransport}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Qatar Tickets:</label>
                <input
                    type="number"
                    name="qatarTickets"
                    value={formData.qatarTickets}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Mecca Accommodation (9 nights): ▋