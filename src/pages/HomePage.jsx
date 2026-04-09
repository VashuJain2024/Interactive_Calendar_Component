import Calendar from "../components/Calendar";

export default function HomePage() {
    return (
        <main className="min-h-screen py-8 sm:py-16 flex items-center justify-center font-sans px-2 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-rose-50 -z-10"></div>
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-300/30 rounded-full blur-[120px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-300/40 rounded-full blur-[140px] pointer-events-none -z-10"></div>

            <Calendar />
        </main>
    );
}
