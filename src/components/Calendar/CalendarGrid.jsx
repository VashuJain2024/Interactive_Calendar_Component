import { format, isSameDay } from "date-fns";
import { holidays, themes } from "../../constants/calendarData";

export default function CalendarGrid({ days, startDate, endDate, currentDateState, currImage, animKey, isInRange, handleDateClick }) {
    return (
        <>
            <div key={`grid-${animKey}`} className="grid grid-cols-7 gap-y-2 gap-x-1 sm:gap-x-2 w-full pt-4">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, col) => (
                    <div key={`header-${d}`} className={`flex items-center justify-center font-bold text-[12px] sm:text-[14px] md:text-[15px] pb-2 mb-2 border-b-2 border-gray-200 tracking-wider transition-colors duration-500 ${(col >= 5) ? themes[currImage].text : "text-gray-600"}`}>
                        {d}
                    </div>
                ))}

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
                        <div key={idx} className="flex flex-col items-center justify-start h-12 sm:h-14 relative group">
                            <div
                                onClick={() => handleDateClick(day)}
                                className={`
                                    flex justify-center items-center h-10 w-10 sm:h-12 sm:w-12 cursor-pointer rounded-full text-base sm:text-lg
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
