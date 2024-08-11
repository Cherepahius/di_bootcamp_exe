import React, { useState } from 'react';

const DatePicker = ({ onDateSelect }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (e) => {
        const newDate = new Date(e.target.value);
        setSelectedDate(newDate);
        onDateSelect(newDate.toISOString().split('T')[0]);
    };

    return (
        <input
            type="date"
            value={selectedDate.toISOString().split('T')[0]}
            onChange={handleDateChange}
        />
    );
};

export default DatePicker;
