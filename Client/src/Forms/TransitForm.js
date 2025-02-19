import React, { useState } from 'react';
import axios from 'axios';
import './TransitForm.css'; // استيراد ملف CSS الخاص بتنسيق النموذج

function TransitForm() {
    const [formData, setFormData] = useState({
        clientName: '',
        numberOfPeople: '',
        travelDate: '',
        child: 12000,
        individual: 12000,
        couple: 12000,
        triple: 12000,
        quadruple: 12000,
        flightTickets: 4000,
        thirdDestinationVisa: 3150,
        qatarTickets: 225,
        meccaAccommodation: 5670,
        medinaAccommodation: 4900,
        commissions: 1000,
        administrativeSupervision: 1400,
        religiousSupervision: 0,
        tours: 1400,
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
        const { 
            child, individual, couple, triple, quadruple, 
            flightTickets, thirdDestinationVisa, qatarTickets, 
            meccaAccommodation, medinaAccommodation, commissions, 
            administrativeSupervision, religiousSupervision, tours, 
            numberOfPeople 
        } = data;

        const accommodationCost = (meccaAccommodation * 3) + medinaAccommodation;
        const totalPerPerson = flightTickets + thirdDestinationVisa + qatarTickets + accommodationCost + commissions + administrativeSupervision + religiousSupervision + tours;

        return totalPerPerson * numberOfPeople;
    };

    const calculateTotalProfit = (totalCost) => {
        return totalCost * 1.1;
    };

    return (
        <form onSubmit={handleSubmit} className="transit-form">
            <div className="form-field">
                <label>اسم العميل:</label>
                <input
                    type="text"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleChange}
                    className="input-field"
                />
            </div>
            <div className="form-field">
                <label>عدد الأشخاص:</label>
                <input
                    type="number"
                    name="numberOfPeople"
                    value={formData.numberOfPeople}
                    onChange={handleChange}
                    className="input-field"
                />
            </div>
            <div className="form-field">
                <label>تاريخ السفر:</label>
                <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    className="input-field"
                />
            </div>
            <div className="form-field">
                <label>طفل:</label>
                <input
                    type="number"
                    name="child"
                    value={formData.child}
                    onChange={handleChange}
                    className="input-field"
                />
            </div>
            <div className="form-field">
                <label>فرد:</label>
                <input
                    type="number"
                    name="individual"
                    value={formData.individual}
                    onChange={handleChange}
                    className="input-field"
                />
            </div>
            <div className="form-field">
                <label>زوجين:</label>
                <input
                    type="number"
                    name="couple"
                    value={formData.couple}
                    onChange={handleChange}
                    className="input-field"
                />
            </div>
            <div className="form-field">
                <label>ثلاثة أشخاص:</label>
                <input
                    type="number"
                    name="triple"
                    value={formData.triple}
                    onChange={handleChange}
                    className="input-field"
                />
            </div>
            <div className="form-field">
                <label>أربعة أشخاص:</label>
                <input
                    type="number"
                    name="quadruple"
                    value={formData.quadruple}
                    onChange={handleChange}
                    className="input-field"
                />
            </div>
            <div className="form-field">
                <label>تذاكر الطيران:</label>
                <input
                    type="number"
                    name="flightTickets"
                    value={formData.flightTickets}
                    onChange={handleChange}
                    className="input-field"
                />
            </div>
            <div className="form-field">
                <label>الوجهة الثالثة + تأشيرة:</label>
                <input
                    type="number"
                    name="thirdDestinationVisa"
                    value={formData.thirdDestinationVisa}
                    onChange={handleChange}
                    className="input-field"
                />
            </div>
            <div className="form-field">
                <label>تذاكر قطر:</label>
                <input
                    type="number"
                    name="qatarTickets"
                    value={formData.qatarTickets}
                    onChange={handleChange}
                    className="input-field"
                />
            </div>
            <div className="form-field">
                <label>إقامة مكة (3 ليالٍ):</label>
                <input
                    type="number"
                    name="meccaAccommodation"
                    value={formData.meccaAccommodation}
                    onChange={handleChange}
                    className="input-field"
                />
            </div>
            <div className="form-field">
                <label>إقامة المدينة (ليلة واحدة):</label>
                <input
                    type="number"
                    name="medinaAccommodation"
                    value={formData.medinaAccommodation}
                    onChange={handleChange}
                    className="input-field"
                />
            </div>
            <div className="form-field">
                <label>العمولات:</label>
                <input
                    type="number"
                    name="commissions"
                    value={formData.commissions}
                    onChange={handleChange}
                    className="input-field"
                />
            </div>
            <div className="form-field">
                <label>الإشراف الإداري:</label>
                <input
                    type="number"
                    name="administrativeSupervision"
                    value={formData.administrativeSupervision}
                    onChange={handleChange}
                    className="input-field"
                />
            </div>
            <div className="form-field">
                <label>الإشراف الديني:</label>
                <input
                    type="number"
                    name="religiousSupervision"
                    value={formData.religiousSupervision}
                    onChange={handleChange}
                    className="input-field"
                />
            </div>
            <div className="form-field">
                <label>الجولات:</label>
                <input
                    type="number"
                    name="tours"
                    value={formData.tours}
                    onChange={handleChange}
                    className="input-field"
                />
            </div>
            <div className="form-field">
                <label>التكلفة الإجمالية:</label>
                <input
                    type="number"
                    value={calculateTotalCost(formData)}
                    readOnly
                    className="input-field"
                />
            </div>
            <div className="form-field">
                <label>الربح الإجمالي:</label>
                <input
                    type="number"
                    value={calculateTotalProfit(calculateTotalCost(formData))}
                    readOnly
                    className="input-field"
                />
            </div>
            <button type="submit" className="submit-btn">إرسال</button>
        </form>
    );
}

export default TransitForm;
