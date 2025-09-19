import styles from '../styles/Calendar.module.css';

interface CalendarGridPropsi {
    weeks: (number | null)[][];
    monthName: string;
    year: number;
}


export default function CalendarGrid({ weeks, monthName, year }: CalendarGridPropsi) {
    const dayNames = ['Пон', 'Вт', 'Ср', 'Чт', 'Пят', 'Суб', 'Вскр'];

    return (
        <div className={styles.calendar}>
            <h2 className={styles.textCenter}>
                {monthName} {year}
            </h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {dayNames.map(day => (
                            <th key={day} className={styles.textCenter}> {day} </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {weeks.map((week, weekIndex) => (
                        <tr key={weekIndex}>
                            {week.map((day, dayIndex) => (
                                <td
                                  key={dayIndex}
                                  className={`${styles.textCenter} ${day ? '' : styles.bgLight}`}
                                >
                                  {day}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}