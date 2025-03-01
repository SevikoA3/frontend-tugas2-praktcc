import { useEffect, useState } from 'react';
import { getNotes } from "../controller/fetch_backend";
import History from "./History";
import { useNavigate } from 'react-router-dom';

function Sidebar({ currentID }) {
    const [historyRows, setHistoryRows] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getNotes();
            const rows = data.notes.map((note, index) => (
                <History currentID={currentID} id={note.id} title={note.title} content={note.content} />
            ));
            setHistoryRows(rows);
        }
        fetchData();
    }, [currentID]);

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=note_stack" />
            
            <div className="bg-[var(--color-secondary)] min-w-64 flex flex-col h-full">
                <div className="cotainer mt-10 mx-5">
                    <h1 className='text-[var(--color-text)] text-3xl'>SeviNotes</h1>
                    <button className='bg-[var(--color-accent)] rounded-xl p-2 mt-8 flex flex-row' onClick={() => navigate('/frontend-tugas2-praktcc/new-note')}>
                        <h1 className='text-[var(--color-secondary)] text-lg mr-3'>New Note </h1>
                        <span className="material-symbols-outlined">
                            note_stack
                        </span>
                    </button>
                </div>
                <div id="history-container" className='cotainer mt-5 mx-5 flex flex-col gap-1 w-[80%]'>
                    {historyRows}
                </div>
            </div>
        </>
    );
}

export default Sidebar;