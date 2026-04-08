import { useState } from "react";
import { format, isSameDay, isWithinInterval, addMonths } from "date-fns";
import { generateCalendar } from "../utils/dateUtils";
import NotesPanel from "./NotesPanel";

const Calendar = () => {
    const [currentDateState, setCurrentDate] = useState(new Date());
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [currImage, setCurrImage] = useState(0);

    const days = generateCalendar(currentDateState);
    // console.log(days)

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

    const images = ["hero1.jpg", "hero2.jpg", "hero3.jpg"];
    const changeImage = () => {
        setCurrImage((prev) => (prev + 1) % images.length);
    }

    return (
        <div className="w-[800px] h-[1100px] relative mx-auto bg-white shadow-2xl rounded-md sm:rounded-xl pb-8 border-t-4 border-t-gray-500">
            <div className="absolute top-0 left-0 w-full h-[700px] bg-[#1a90d9] rounded-t-md"></div>
            <div
                className="absolute top-0 left-0 w-full h-[700px] rounded-t-md"
                style={{
                    backgroundImage: `url('src/assets/${images[currImage]}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: '70% 70%',
                    clipPath: "polygon(0px 0px, 100% 0px, 100% 55%, 33% 100%, 0% 60%)"
                }}
            ></div>
            <div className="absolute right-4 top-[47%] z-10 text-right">
                <h2 className="text-4xl font-normal text-white">{format(currentDateState, "yyyy")}</h2>
                <h1 className="text-5xl font-bold text-white uppercase mt-1 tracking-wider">{format(currentDateState, "MMMM")}</h1>
            </div>

            <div
                className="relative z-20 mt-[590px] bg-white flex flex-row pt-20 px-12 min-h-[300px]"
                style={{
                    clipPath: "polygon(0px 50px, 20% 0px, 65% 100px, 100% 50px, 120% 0, 110% 101%, 0 100%)"
                }}
            >
                <div className="w-2/5 pr-12">
                    <NotesPanel />
                </div>

                <div className="w-3/5 flex flex-col pt-2">
                    <div className="flex justify-between items-center mb-6 px-2 opacity-30 hover:opacity-100 transition-opacity">
                        <button onClick={() => {
                            setCurrentDate(addMonths(currentDateState, -1))
                            changeImage();
                        }} className="text-gray-600 hover:text-black font-bold text-xl px-2">←</button>
                        <button onClick={() => {
                            setCurrentDate(addMonths(currentDateState, 1))
                            changeImage();
                        }} className="text-gray-600 hover:text-black font-bold text-xl px-2">→</button>
                    </div>

                    <div className="grid grid-cols-7 text-center text-xs font-bold mb-6 tracking-wide">
                        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d, col) => (
                            <div key={d} className={(col >= 5) ? "text-[#1a90d9]" : "text-gray-600"}>{d}</div>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 gap-y-6 gap-x-2">
                        {days.map((day, idx) => {
                            const isStart = startDate && isSameDay(day, startDate);
                            const isEnd = endDate && isSameDay(day, endDate);
                            const isCurrentMonth = format(day, "M") === format(currentDateState, "M");
                            const isWeekend = day.getDay() === 0 || day.getDay() === 6;
                            let textColorClass = "text-gray-300 font-medium";
                            if (isCurrentMonth) {
                                textColorClass = isWeekend ? "text-[#1a90d9] font-bold" : "text-gray-700 font-bold";
                            }
                            return (
                                <div
                                    key={idx}
                                    onClick={() => handleDateClick(day)}
                                    className={`
                                        flex justify-center items-center h-10 w-10 mx-auto cursor-pointer rounded-full text-base
                                        transition-all duration-200
                                        ${isStart ? "bg-[#1a90d9] text-white font-bold" : ""}
                                        ${isEnd ? "bg-[#1a90d9] text-white font-bold" : ""}
                                        ${isInRange(day) && !isStart && !isEnd ? "bg-blue-100" : ""}
                                        ${!isStart && !isEnd ? "hover:bg-gray-100" : ""}
                                        ${!isStart && !isEnd ? textColorClass : ""}
                                    `}
                                >
                                    {format(day, "d")}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="absolute top-0 left-0 w-full flex justify-center gap-2 pt-2 z-30">
                {[...Array(55)].map((_, i) => (
                    <div key={i} className="w-1.5 h-6 bg-gradient-to-b from-gray-400 to-gray-600 rounded-sm shadow-sm ring-1 ring-black/10"></div>
                ))}
                <div className="w-16 h-8 border-4 border-gray-500 rounded-full absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-4"></div>
            </div>
        </div>
    );
};

export default Calendar;