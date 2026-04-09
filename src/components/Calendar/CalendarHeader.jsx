import { format } from "date-fns";
import { themes, images } from "../../constants/calendarData";

export default function CalendarHeader({ currentDateState, currImage, animKey, changeMonth }) {
    return (
        <>
            <div className={`absolute top-0 left-0 w-full h-[250px] sm:h-[300px] md:h-[300px] transition-colors duration-700 ${themes[currImage].bg}`}></div>
            
            <div
                key={`img-${currImage}`}
                className="absolute top-0 left-0 w-full h-[250px] sm:h-[300px] md:h-[300px] transition-all duration-700 opacity-90 hover:opacity-100 animate-fade"
                style={{
                    backgroundImage: `url('${images[currImage]}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: '70% 70%',
                    clipPath: "polygon(0px 0px, 100% 0px, 100% 55%, 33% 100%, 0% 60%)"
                }}
            ></div>

            <div className="absolute right-4 sm:right-10 top-[5%] sm:top-[8%] z-40 flex gap-2 sm:gap-3">
                <button 
                    onClick={() => changeMonth(-1)} 
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md border border-white/30 text-white hover:bg-black/50 font-bold text-lg sm:text-xl active:scale-95 transition-all shadow-md"
                >
                    ←
                </button>
                <button 
                    onClick={() => changeMonth(1)} 
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md border border-white/30 text-white hover:bg-black/50 font-bold text-lg sm:text-xl active:scale-95 transition-all shadow-md"
                >
                    →
                </button>
            </div>

            <div key={`header-${animKey}`} className="absolute right-4 sm:right-10 top-[18%] sm:top-[20%] z-30 text-right animate-fade pointer-events-none">
                <h2 className="text-2xl sm:text-3xl font-normal text-white drop-shadow-md">{format(currentDateState, "yyyy")}</h2>
                <h1 className="text-3xl sm:text-4xl font-bold text-white uppercase mt-1 tracking-wider drop-shadow-md">{format(currentDateState, "MMMM")}</h1>
            </div>
        </>
    );
}
