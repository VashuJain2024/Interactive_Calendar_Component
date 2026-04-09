import { format } from "date-fns";
import { themes, images } from "../../constants/calendarData";

export default function CalendarHeader({ currentDateState, currImage, animKey }) {
    return (
        <>
            <div className={`absolute top-0 left-0 w-full h-[350px] sm:h-[500px] md:h-[700px] transition-colors duration-700 ${themes[currImage].bg}`}></div>
            
            <div
                key={`img-${currImage}`}
                className="absolute top-0 left-0 w-full h-[350px] sm:h-[500px] md:h-[700px] transition-all duration-700 opacity-90 hover:opacity-100 animate-fade"
                style={{
                    backgroundImage: `url('${images[currImage]}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: '70% 70%',
                    clipPath: "polygon(0px 0px, 100% 0px, 100% 55%, 33% 100%, 0% 60%)"
                }}
            ></div>

            <div key={`header-${animKey}`} className="absolute right-4 sm:right-10 top-[22%] sm:top-[38%] md:top-[45%] z-30 text-right animate-fade pointer-events-none">
                <h2 className="text-3xl sm:text-4xl font-normal text-white drop-shadow-md">{format(currentDateState, "yyyy")}</h2>
                <h1 className="text-4xl sm:text-5xl font-bold text-white uppercase mt-1 tracking-wider drop-shadow-md">{format(currentDateState, "MMMM")}</h1>
            </div>
        </>
    );
}
