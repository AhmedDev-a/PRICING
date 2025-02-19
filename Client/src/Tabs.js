import React from 'react';
import Tab from './Tab';

const Tabs = ({ setCurrentForm, currentForm }) => {
    return (
        <div className="tabs">
            <Tab label="Transit" onClick={() => setCurrentForm('transit')} active={currentForm === 'transit'} />
            <Tab label="Umrah" onClick={() => setCurrentForm('umrah')} active={currentForm === 'umrah'} />
            <Tab label="Private" onClick={() => setCurrentForm('private')} active={currentForm === 'private'} />
        </div>
    );
};

export default Tabs;