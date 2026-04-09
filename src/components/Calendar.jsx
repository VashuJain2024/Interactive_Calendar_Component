import { useState } from "react";
import { isWithinInterval, addMonths, format } from "date-fns";
import { generateCalendar } from "../utils/dateUtils";
import { images } from "../constants/calendarData";

import SpiralBinding from "./Calendar/SpiralBinding";
import CalendarHeader from "./Calendar/CalendarHeader";
import CalendarControls from "./Calendar/CalendarControls";
import CalendarGrid from "./Calendar/CalendarGrid";
import NotesPanel from "./Calendar/NotesPanel";

export default function Calendar() {
    const [currentDateState, setCurrentDate] = useState(new Date());
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [currImage, setCurrImage] = useState(0);
    const [animKey, setAnimKey] = useState(Date.now());

    const days = generateCalendar(currentDateState);

    const handleDateClick = (day) => {
        if (!startDate || (startDate && endDate)) {
            setStartDate(day);
            setEndDate(null);
        } else {
            if (day < startDate) {
                setEndDate(startDate);
                setStartDate(day);
            } else {
                setEndDate(day);
            }
        }
    };

    const isInRange = (day) => {
        if (startDate && endDate) {
            return isWithinInterval(day, { start: startDate, end: endDate });
        }
        return false;
    };

    const changeMonth = (offset) => {
        setCurrentDate(addMonths(currentDateState, offset));
        setCurrImage((prev) => (prev + 1) % images.length);
        setAnimKey(Date.now());
    };

    return (
        <div 
            className="w-full sm:w-[95%] md:max-w-[800px] relative mx-auto transform"
            style={{ filter: "drop-shadow(15px 25px 25px rgba(0,0,0,0.30))" }}
        >
            <SpiralBinding />

            <div 
                key={animKey} 
                className="w-full h-full relative pb-8 rounded-md sm:rounded-xl overflow-hidden transition-colors duration-500 animate-page-flip origin-top bg-white/30 backdrop-blur-3xl border border-white/60"
            >
                <CalendarHeader 
                    currentDateState={currentDateState}
                    currImage={currImage}
                    animKey={animKey} 
                />

                <div
                    className="relative z-20 mt-[230px] sm:mt-[340px] md:mt-[590px] bg-white/60 backdrop-blur-xl border-t border-white/70 shadow-[0_-10px_25px_-5px_rgba(255,255,255,0.3)] flex flex-col md:flex-row pt-16 sm:pt-20 px-6 sm:px-12 min-h-[300px]"
                    style={{
                        clipPath: "polygon(0px 50px, 20% 0px, 65% 100px, 100% 50px, 120% 0px, 110% 101%, 0px 100%)"
                    }}
                >
                    <div className="w-full md:w-2/5 pr-0 md:pr-12 mb-10 md:mb-0">
                        <NotesPanel monthKey={format(currentDateState, 'yyyy-MM')} />
                    </div>

                    <div className="w-full md:w-3/5 flex flex-col pt-2 md:pt-0 md:mt-[-15px]">
                        <CalendarControls changeMonth={changeMonth} />
                        
                        <CalendarGrid 
                            days={days} 
                            startDate={startDate} 
                            endDate={endDate} 
                            currentDateState={currentDateState} 
                            currImage={currImage} 
                            animKey={animKey} 
                            isInRange={isInRange} 
                            handleDateClick={handleDateClick} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}