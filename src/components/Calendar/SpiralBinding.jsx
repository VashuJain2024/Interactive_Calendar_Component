export default function SpiralBinding() {
    return (
        <div className="absolute top-[-18px] left-0 w-full flex justify-center gap-1.5 pt-2 z-40">
            {[...Array(55)].map((_, i) => (
                <div key={i} className={`w-1 sm:w-1.5 h-4 sm:h-6 bg-gradient-to-b from-gray-400 to-gray-600 rounded-sm shadow-sm ring-1 ring-black/10 ${i > 25 ? 'hidden sm:block' : 'block'} rotate-[0.4rad]`}></div>
            ))}
        </div>
    );
}
