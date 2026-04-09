import { useState, useEffect } from "react";

export default function NotesPanel({ monthKey }) {
    const [notes, setNotes] = useState("");

    const storageKey = `calendar-notes-${monthKey}`;

    useEffect(() => {
        const saved = localStorage.getItem(storageKey);
        setNotes(saved || "");
    }, [storageKey]);

    const handleChange = (e) => {
        setNotes(e.target.value);
        localStorage.setItem(storageKey, e.target.value);
    };

    return (
        <div className="w-full">
            <h3 className="font-bold text-gray-700 text-sm mb-4 uppercase tracking-wider">Notes</h3>
            <textarea
                value={notes}
                onChange={handleChange}
                className="w-full h-32 md:h-48 bg-transparent outline-none resize-none text-gray-700 font-medium whitespace-pre-wrap"
                style={{
                    lineHeight: '2rem',
                    backgroundImage: 'linear-gradient(transparent, transparent calc(2rem - 1px), #d1d5db 0px)',
                    backgroundSize: '100% 2rem'
                }}
            />
        </div>
    );
}