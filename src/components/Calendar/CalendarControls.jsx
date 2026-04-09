export default function CalendarControls({ changeMonth }) {
    return (
        <div className="flex justify-between items-center mb-4 sm:mb-6 px-2 sm:px-6">
            <button 
                onClick={() => changeMonth(-1)} 
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200 hover:text-black font-bold text-lg sm:text-xl active:scale-95 transition-all shadow-sm"
                aria-label="Previous Month"
            >
                ←
            </button>
            <button 
                onClick={() => changeMonth(1)} 
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200 hover:text-black font-bold text-lg sm:text-xl active:scale-95 transition-all shadow-sm"
                aria-label="Next Month"
            >
                →
            </button>
        </div>
    );
}
