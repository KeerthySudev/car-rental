"use client";

// Import useState and useRef hooks from React
import { useState, useRef } from 'react';

// Import styles from Search.module.css
import styles from './Search.module.css';

// Define DateProps interface
interface DateProps {
  placeholder: string;
}

// Define DateTimeInput component
const DateTimeInput: React.FC<DateProps> = ({ placeholder }) => {
  // Define constants and states
  const Dateplaceholder = placeholder;
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [formattedDateTime, setFormattedDateTime] = useState('');
  const textInputRef = useRef<HTMLInputElement>(null);

  // Define handleDateChange function
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
    updateFormattedDateTime(event.target.value, time);
  };

  // Define handleTimeChange function
  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let [hour, minute] = event.target.value.split(':');
    let ampm = 'AM';
    if (parseInt(hour) >= 12) {
      ampm = 'PM';
      if (parseInt(hour) > 12) {
        hour = (parseInt(hour) - 12).toString().padStart(2, '0');
      }
    } else if (parseInt(hour) === 0) {
      hour = '12';
    }
    const formattedTime = `${hour}:${minute} ${ampm}`;
    setTime(formattedTime);
    updateFormattedDateTime(date, formattedTime);
  };

  // Define updateFormattedDateTime function
  const updateFormattedDateTime = (date: string, time: string) => {
    if (!date) return;
    const [year, month, day] = date.split('-');
    const formattedDate = `${day}/${month}/${year}`;
    setFormattedDateTime(`${formattedDate} ${time}`);
  };

  // Define handleTextInputClick function
  const handleTextInputClick = () => {
    setIsPickerVisible(true);
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  // Define handleBlur function
  const handleBlur = () => {
    setIsPickerVisible(false);
  };

  // Return DateTimeInput component
  return (
    <div>
      {/* Read-only input field */}
      <input
        type="text"
        value={formattedDateTime}
        readOnly
        onClick={handleTextInputClick}
        placeholder={Dateplaceholder}
        ref={textInputRef}
      />

      {/* Conditionally render date and time inputs */}
      {isPickerVisible && (
        <div className={styles.dateInputs} onMouseLeave={handleBlur}>
          {/* Date input */}
          <input type="date" value={date} onChange={handleDateChange} />

          {/* Time input */}
          <input
            type="time"
            value={time.replace(/ [AP]M$/, '')}
            onChange={handleTimeChange}
          />
        </div>
      )}
    </div>
  );
};

export default DateTimeInput;