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
                <label>Mecca Accommodation (9 nights):</label>
                <input
                    type="number"
                    name="meccaAccommodation"
                    value={formData.meccaAccommodation}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Medina Accommodation (3 nights):</label>
                <input
                    type="number"
                    name="medinaAccommodation"
                    value={formData.medinaAccommodation}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Internal Transport:</label>
                <input
                    type="number"
                    name="internalTransport"
                    value={formData.internalTransport}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Tours:</label>
                <input
                    type="number"
                    name="tours"
                    value={formData.tours}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Administrative Supervision:</label>
                <input
                    type="number"
                    name="administrativeSupervision"
                    value={formData.administrativeSupervision}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Religious Supervision:</label>
                <input
                    type="number"
                    name="religiousSupervision"
                    value={formData.religiousSupervision}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Total Cost:</label>
                <input
                    type="number"
                    value={calculateTotalCost(formData)}
                    readOnly
                />
            </div>
            <div>
                <label>Total Profit:</label>
                <input
                    type="number"
                    value={calculateTotalProfit(calculateTotalCost(formData))}
                    readOnly
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default UmrahForm;
