export default function CalendarControls({ changeMonth }) {
    return (
        <div className="flex justify-between items-center mb-4 sm:mb-4 px-1 sm:px-2 opacity-100 hover:opacity-100 transition-opacity">
            <button onClick={() => changeMonth(-1)} className="text-gray-600 hover:text-black font-bold text-xl sm:text-2xl sm:px-4 py-2 active:scale-95 transition-transform">←</button>
            <button onClick={() => changeMonth(1)} className="text-gray-600 hover:text-black font-bold text-xl sm:text-2xl sm:px-4 py-2 active:scale-95 transition-transform">→</button>
        </div>
    );
}
