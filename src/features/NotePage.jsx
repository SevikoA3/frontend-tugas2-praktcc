import { use, useEffect, useState } from 'react';
import { deleteNote, getNotes, updateNote } from "../controller/fetch_backend.js";
import { useNavigate, useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import Sidebar from '../components/Sidebar';

function NotePage() {
  let { id } = useParams();
  let [title, setTitle] = useState('');
  let [content, setContent] = useState('');
  let [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  const updateNoteOnPage = async () => {
    const data = {
      id: id,
      title: title,
      content: content
    }

    document.getElementById(id).innerText = title;
    await updateNote(id, data);
  }

  const deleteNoteOnPage = async () => {
    await deleteNote(id);
    navigate('/frontend-tugas2-praktcc/');
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNotes();
      const note = data.notes.find(note => note.id == id);
      if (note) {
        setTitle(note.title);
        setContent(note.content);
      }
    }
    fetchData();
  }, [id]);

  return (
    <>
      <div className="flex w-full h-screen">
        <Sidebar currentID={id} />
        <div className="bg-[var(--color-primary)] w-full min-w-52 flex flex-col items-center h-full pt-10 pb-20 px-20">
          { editMode ?
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='text-[var(--color-text)] text-4xl mb-15 p-2 text-center outline-none' maxLength={20}/>
            :
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='text-[var(--color-text)] text-4xl mb-15 p-2 text-center outline-none' disabled/>
          }
          <div className='md-container w-full h-full resize-none bg-[var(--color-tertiary)] rounded-2xl p-10 text-[var(--color-text)] outline-none overflow-y-auto'>
            {editMode ? 
              <textarea name="note" value={content} onChange={(e) => setContent(e.target.value)} id="note" className='w-full h-[98%] resize-none bg-[var(--color-tertiary)] text-[var(--color-text)] outline-none'></textarea> :
              <Markdown>{content}</Markdown>
            }
          </div>
          {editMode ? 
            <div className='flex flex-row justify-center gap-10 w-full'>
              <button className='bg-[var(--color-accent)] rounded-xl p-2 mt-8 w-30 text-[var(--color-primary)]' onClick={() => {
                updateNoteOnPage();
                setEditMode(false);
              }}>Save</button>
              <button className='bg-red-500 rounded-xl p-2 mt-8 w-30 text-[var(--color-text)]' onClick={() => deleteNoteOnPage()}>Delete</button>
            </div> : 
            <button className='bg-[var(--color-accent)] rounded-xl p-2 mt-8 w-30' onClick={() => setEditMode(true)}>Edit</button>
          }
        </div>
      </div>
    </>
  )
}

export default NotePage;