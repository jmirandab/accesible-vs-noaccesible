import React, { useState } from 'react';

const CustomSelect = ({ options, selectedValue, onChange, hasError }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (value) => {
        onChange(value);
        setIsOpen(false);
    };

    const getDisplayValue = () => {
        if (!selectedValue) return 'Seleccione una provincia';
        const option = options.find(opt => opt.value === selectedValue);
        return option ? option.label : 'Seleccione una provincia';
    };

    return (
        <div className="custom-select" id="provinciaSelect">
            <div 
                className={`select-trigger ${hasError ? 'error' : ''}`}
                tabIndex="0"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="select-value">{getDisplayValue()}</span>
                <span className={`select-arrow ${isOpen ? 'expanded' : ''}`}>▼</span>
            </div>
            <div className={`select-options ${isOpen ? 'show' : ''}`}>
                {options.map((option) => (
                    <div
                        key={option.value}
                        className={`select-option ${selectedValue === option.value ? 'selected' : ''}`}
                        data-value={option.value}
                        onClick={() => handleSelect(option.value)}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomSelect;