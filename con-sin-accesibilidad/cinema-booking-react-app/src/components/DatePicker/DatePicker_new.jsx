import React from 'react';
import { monthNames } from '../../utils/constants';
import './DatePicker.css';

const DatePicker = ({ 
    selectedDate, 
    currentMonth, 
    currentYear, 
    onDateSelect, 
    onNextMonth, 
    onPrevMonth 
}) => {
    const renderCalendar = () => {
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());

        const days = [];
        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);

            const isCurrentMonth = date.getMonth() === currentMonth;
            const isSelected = selectedDate && 
                date.getDate() === selectedDate.getDate() &&
                date.getMonth() === selectedDate.getMonth() &&
                date.getFullYear() === selectedDate.getFullYear();

            days.push(
                <div 
                    key={i}
                    className={`date-day ${!isCurrentMonth ? 'other-month' : ''} ${isSelected ? 'selected' : ''}`}
                    onClick={() => isCurrentMonth && onDateSelect(new Date(date))}
                >
                    {date.getDate()}
                </div>
            );
        }
        return days;
    };

    return (
        <div className="date-picker">
            <div className="date-picker-header">
                <button type="button" onClick={onPrevMonth} className="nav-button">‹</button>
                <span id="monthYear" className="month-year">
                    {monthNames[currentMonth]} {currentYear}
                </span>
                <button type="button" onClick={onNextMonth} className="nav-button">›</button>
            </div>
            <div className="date-grid" id="dateGrid">
                <div className="weekdays">
                    {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
                        <div key={day} className="weekday">{day}</div>
                    ))}
                </div>
                <div className="days-grid">
                    {renderCalendar()}
                </div>
            </div>
        </div>
    );
};

export default DatePicker;
