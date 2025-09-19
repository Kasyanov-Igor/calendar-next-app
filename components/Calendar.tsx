import CalendarGrid from "./CalendarGrid";

interface CalendarProps {
    date: Date | null;
}

export default function Calendar({ date }: CalendarProps) {
    if (!date) {
        return <div>Please select a month </div>;
    }

    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const weeks: (number | null)[][] = [];
    let currentWeek: (number | null)[] = [];

    for (let i = 0; i < startingDay; i++) {
        currentWeek.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        if (currentWeek.length === 7) {
            weeks.push(currentWeek);
            currentWeek = [];
        }
        currentWeek.push(i);
    }

    while (currentWeek.length < 7) {
        currentWeek.push(null);
    }
    weeks.push(currentWeek);

    const monthName = date.toLocaleDateString('en-US', { month: 'long' });

    return (
        <CalendarGrid
            weeks={weeks}
            monthName={monthName}
            year={year}
        />
    );
}