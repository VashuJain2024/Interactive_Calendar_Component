import { useState, useEffect } from "react";

export default function NotesPanel() {
    const [notes, setNotes] = useState("");

    useEffect(() => {
        const saved = localStorage.getItem("calendar-notes");
        if (saved) setNotes(saved);
    }, []);

    const handleChange = (e) => {
        setNotes(e.target.value);
        localStorage.setItem("calendar-notes", e.target.value);
    };

    return (
        <div className="w-full">
            <h3 className="font-bold text-gray-700 text-sm mb-4 uppercase tracking-wider">Notes</h3>
            <textarea
                value={notes}
                onChange={handleChange}
                className="w-full h-64 bg-transparent outline-none resize-none text-gray-700 font-medium whitespace-pre-wrap"
                style={{
                    lineHeight: '2.5rem',
                    backgroundImage: 'linear-gradient(transparent, transparent calc(2.5rem - 1px), #d1d5db 0px)',
                    backgroundSize: '100% 2.5rem'
                }}
            />
        </div>
    );
}