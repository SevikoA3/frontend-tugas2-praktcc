import { useState } from 'react';
import { createNote } from "../controller/fetch_backend.js";
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

function NotePage() {
  let [title, setTitle] = useState('');
  let [content, setContent] = useState('');
  const navigate = useNavigate();

  const createNoteOnPage = async () => {
    const data = {
      title: title,
      content: content
    }

    await createNote(data);
    navigate('/frontend-tugas2-praktcc/');
  }

  return (
    <>
      <div className="flex w-full h-screen">
       <Sidebar />
        <div className="bg-[var(--color-primary)] w-full min-w-52 flex flex-col items-center h-full pt-10 pb-20 px-20">
          <input type="text" value={title} placeholder='Input your title here.' onChange={(e) => setTitle(e.target.value)} className='text-[var(--color-text)] text-4xl mb-15 text-center border-1 rounded-2xl outline-none p-2' maxLength={20}/>
          
          <div className='md-container w-full h-full resize-none bg-[var(--color-tertiary)] rounded-2xl p-10 text-[var(--color-text)] outline-none overflow-y-auto'>
            <textarea name="note" value={content} placeholder='Input your note here.' onChange={(e) => setContent(e.target.value)} id="note" className='w-full h-[98%] resize-none bg-[var(--color-tertiary)] text-[var(--color-text)] outline-none'></textarea>
          </div>
          <button className='bg-[var(--color-accent)] rounded-xl p-2 mt-8 w-30' onClick={() => createNoteOnPage()}>Save</button>
        </div>
      </div>
    </>
  )
}

export default NotePage;