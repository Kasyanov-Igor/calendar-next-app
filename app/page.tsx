"use client";

import { useState } from "react";
import Calendar from "../components/Calendar";
import styles from '../styles/Calendar.module.css';


export default function Page() {
    const [date, setDate] = useState(null);

    return   <div className={styles.container}>
    <label htmlFor="monthInput" className={styles.formLabel}>
      Select Month:
    </label>
    <input 
      id="monthInput" 
      type="month" 
      className={styles.formControl} 
      onChange={(e) => {
        if (e.target.value) {
          const [year, month] = e.target.value.split('-').map(Number);
          setDate(new Date(year, month - 1, 1));
        } else {
          setDate(null);
        }
      }}
    />
    <div className={styles.calendarWrapper}>
      <Calendar date={date} />
    </div>
  </div>
}