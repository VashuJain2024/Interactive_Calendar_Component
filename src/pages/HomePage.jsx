import Calendar from "../components/Calendar";

export default function HomePage() {
    return (
        <main className="min-h-screen py-4 sm:py-6 bg-gray-200 flex flex-col md:justify-center items-center font-sans px-2 overflow-hidden relative">
            <Calendar />
        </main>
    );
}
