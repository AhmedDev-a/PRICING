import React from 'react';

const Tab = ({ label, onClick, active }) => {
    return (
        <button className={`tab ${active ? 'active' : ''}`} onClick={onClick}>
            {label}
        </button>
    );
};

export default Tab;