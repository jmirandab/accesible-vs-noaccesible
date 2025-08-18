import React, { useState, useEffect } from 'react';
import './DatePicker.css';

const DatePicker = ({ selectedDate, onDateChange }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    useEffect(() => {
        renderCalendar();
    }, [currentMonth, currentYear]);

    const renderCalendar = () => {
        const dateGrid = document.getElementById('dateGrid');
        dateGrid.innerHTML = '';

        const monthYear = document.getElementById('monthYear');
        monthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;

        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());

        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);

            const dayElement = document.createElement('div');
            dayElement.className = 'date-day';
            dayElement.textContent = date.getDate();

            if (date.getMonth() !== currentMonth) {
                dayElement.classList.add('other-month');
            }

            if (selectedDate && 
                date.getDate() === selectedDate.getDate() &&
                date.getMonth() === selectedDate.getMonth() &&
                date.getFullYear() === selectedDate.getFullYear()) {
                dayElement.classList.add('selected');
            }

            if (date.getMonth() === currentMonth) {
                dayElement.addEventListener('click', () => {
                    onDateChange(new Date(date));
                });
            }

            dateGrid.appendChild(dayElement);
        }
    };

    const changeMonth = (direction) => {
        if (direction === 'prev') {
            setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1));
            if (currentMonth === 0) {
                setCurrentYear(prev => prev - 1);
            }
        } else {
            setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1));
            if (currentMonth === 11) {
                setCurrentYear(prev => prev + 1);
            }
        }
    };

    return (
        <div className="date-picker">
            <div className="calendar-header">
                <button onClick={() => changeMonth('prev')}>Prev</button>
                <div id="monthYear">{monthNames[currentMonth]} {currentYear}</div>
                <button onClick={() => changeMonth('next')}>Next</button>
            </div>
            <div id="dateGrid" className="date-grid"></div>
        </div>
    );
};

export default DatePicker;