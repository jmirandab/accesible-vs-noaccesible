import React from 'react';
import { monthNames } from '../../utils/constants';

const DatePicker = ({ 
    selectedDate, 
    currentMonth, 
    currentYear, 
    onDateSelect, 
    onNextMonth, 
    onPrevMonth,
    hasError 
}) => {
    const renderCalendar = () => {
        const firstDay = new Date(currentYear, currentMonth, 1);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());

        const days = [];

        // Add day headers first
        const dayHeaders = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
        dayHeaders.forEach(day => {
            days.push(
                <div key={`header-${day}`} className="date-day-header">{day}</div>
            );
        });

        // Add 42 days (6 weeks)
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
                    key={`day-${i}`}
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
        <div className={`date-picker ${hasError ? 'error' : ''}`} id="datePicker">
            <div className="date-header">
                <div className="date-nav" id="prevMonth" tabIndex="0" onClick={onPrevMonth}>◀</div>
                <span className="date-title" id="monthYear">
                    {monthNames[currentMonth]} {currentYear}
                </span>
                <div className="date-nav" id="nextMonth" tabIndex="0" onClick={onNextMonth}>▶</div>
            </div>
            <div className="date-grid" id="dateGrid">
                {renderCalendar()}
            </div>
        </div>
    );
};

export default DatePicker;
