import { format, isSameDay } from "date-fns";

const Calendar = () => {
    return (
        <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden">

            <div className="md:w-1/2 h-60 md:h-auto relative">
                <img
                    src="/hero.jpg"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 text-white text-xl font-bold">
                    {format(currentDate, "yyyy MMMM")}
                </div>
            </div>

            <div className="md:w-1/2 p-4">
                <div className="grid grid-cols-7 gap-2">
                    {days.map((day, index) => {
                        const isStart = startDate && isSameDay(day, startDate);
                        const isEnd = endDate && isSameDay(day, endDate);

                        return (
                            <div
                                key={index}
                                onClick={() => handleDateClick(day)}
                                className={`p-2 text-center cursor-pointer rounded-lg
                  ${isStart ? "bg-blue-500 text-white" : ""}
                  ${isEnd ? "bg-blue-700 text-white" : ""}
                  ${isInRange(day) ? "bg-blue-200" : ""}
                  hover:bg-blue-100`}
                            >
                                {format(day, "d")}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Calendar;
