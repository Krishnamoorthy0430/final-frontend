// src/Dropdown.js
import React, { useState } from 'react';

const RoleDropDown = () => {
    const [selectedOption, setSelectedOption] = useState('Manager');

    const handleChange = (event) => {
    setSelectedOption(event.target.value);
    };

    return (
        <div>
            <label htmlFor="role">Select Role:</label>
                <select
                    id="role"
                    value={selectedOption}
                    onChange={handleChange}
                    style={{ marginLeft: '10px' }}
                >
                    <option value="Manager">Manager</option>
                    <option value="Resident">Resident</option>
                </select>
            <p>Selected Role: {selectedOption}</p>
        </div>
);
};

export default RoleDropDown;
