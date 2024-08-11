import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ selectedDay, onDaySelect }) => {
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (date) => {
        setStartDate(date);
        onDaySelect(date);
    };

    return (
        <DatePicker
            selected={startDate}
            onChange={handleChange}
            inline
        />
    );
};

export default Calendar;
