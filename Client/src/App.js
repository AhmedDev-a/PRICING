import React, { useState } from 'react';
import Tabs from './Tabs';
import PrivateForm from './Forms/PrivateForm';
import UmrahForm from './Forms/UmrahForm';
import TransitForm from './Forms/TransitForm';

function App() {
    const [currentForm, setCurrentForm] = useState('transit');

    const renderForm = () => {
        switch (currentForm) {
            case 'private':
                return <PrivateForm />;
            case 'umrah':
                return <UmrahForm />;
            case 'transit':
                return <TransitForm />;
            default:
                return <TransitForm />;
        }
    };

    return (
        <div className="App">
            <h1>Pricing Form</h1>
            <Tabs setCurrentForm={setCurrentForm} currentForm={currentForm} />
            {renderForm()}
        </div>
    );
}

export default App;