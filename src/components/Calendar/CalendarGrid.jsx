import { format, isSameDay } from "date-fns";
import { holidays, themes } from "../../constants/calendarData";

export default function CalendarGrid({ days, startDate, endDate, currentDateState, currImage, animKey, isInRange, handleDateClick }) {
    return (
        <>
            <div className="grid grid-cols-7 text-center text-xs sm:text-sm font-bold mb-4 sm:mb-6 tracking-wide">
                {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d, col) => (
                    <div key={d} className={`transition-colors duration-500 ${(col >= 5) ? themes[currImage].text : "text-gray-600"}`}>{d}</div>
                ))}
            </div>

            <div key={`grid-${animKey}`} className="grid grid-cols-7 gap-y-4 sm:gap-y-6 gap-x-1 sm:gap-x-2">
                {days.map((day, idx) => {
                    const isStart = startDate && isSameDay(day, startDate);
                    const isEnd = endDate && isSameDay(day, endDate);
                    const isCurrentMonth = format(day, "M") === format(currentDateState, "M");
                    const isWeekend = day.getDay() === 0 || day.getDay() === 6;
                    const holidayName = holidays[format(day, "MM-dd")];

                    let textColorClass = "text-gray-300 font-medium";

                    if (isCurrentMonth) {
                        textColorClass = isWeekend ? `${themes[currImage].text} font-bold` : "text-gray-700 font-bold";
                    }

                    let bgClass = "";
                    if (isStart || isEnd) {
                        bgClass = `${themes[currImage].bg} text-white font-bold`;
                        textColorClass = "text-white";
                    }
                    else if (isInRange(day)) {
                        bgClass = `${themes[currImage].lightBg}`;
                        textColorClass = "text-gray-900";
                    }
                    else if (isCurrentMonth) {
                        bgClass = "hover:bg-gray-100";
                    }

                    return (
                        <div key={idx} className="flex flex-col items-center justify-start h-10 sm:h-12 relative group">
                            <div
                                onClick={() => handleDateClick(day)}
                                className={`
                                    flex justify-center items-center h-8 w-8 sm:h-10 sm:w-10 cursor-pointer rounded-full text-sm sm:text-base
                                    transition-all duration-300 ease-in-out
                                    ${bgClass}
                                    ${textColorClass}
                                `}
                            >
                                {format(day, "d")}
                            </div>
                            {holidayName && isCurrentMonth && (
                                <>
                                    <div className={`mt-0.5 sm:mt-1 h-1.5 w-1.5 rounded-full shadow-sm transition-colors duration-500 ${themes[currImage].bg}`}></div>
                                    <div className="absolute top-10 sm:top-12 whitespace-nowrap bg-gray-800 text-white text-[10px] sm:text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                                        {holidayName}
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
