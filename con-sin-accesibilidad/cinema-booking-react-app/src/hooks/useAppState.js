import { useState } from 'react';
import { movies } from '../data/movies';

export const useAppState = () => {
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(movies[0]?.id || null); // Default to the first movie
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const selectMovie = (movieId) => {
        setSelectedMovie(movieId);
    };

    const toggleSidebar = () => {
        setSidebarCollapsed(prevState => !prevState);
    };

    const updateSelectedDate = (date) => {
        setSelectedDate(date);
    };

    const updateSelectedProvince = (province) => {
        setSelectedProvince(province);
    };

    const nextMonth = () => {
        setCurrentMonth(prevMonth => {
            if (prevMonth === 11) {
                setCurrentYear(prevYear => prevYear + 1);
                return 0;
            }
            return prevMonth + 1;
        });
    };

    const prevMonth = () => {
        setCurrentMonth(prevMonth => {
            if (prevMonth === 0) {
                setCurrentYear(prevYear => prevYear - 1);
                return 11;
            }
            return prevMonth - 1;
        });
    };

    return {
        selectedProvince,
        selectedDate,
        selectedMovie,
        currentMonth,
        currentYear,
        sidebarCollapsed,
        selectMovie,
        toggleSidebar,
        updateSelectedDate,
        updateSelectedProvince,
        nextMonth,
        prevMonth,
    };
};

export default useAppState;