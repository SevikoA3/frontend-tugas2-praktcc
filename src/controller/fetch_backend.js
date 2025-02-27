import axios from 'axios';

const getNotes = async () => {
    const response = await axios.get('http://localhost:8080/notes');
    return response.data;
};

const createNote = async (data) => {
    const response = await axios.post('http://localhost:8080/note', data);
    return response.data;
}

const updateNote = async (id, data) => {
    const response = await axios.patch(`http://localhost:8080/note/${id}`, data);
    return response.data;
}

const deleteNote = async (id) => {
    const response = await axios.delete(`http://localhost:8080/note/${id}`);
    return response.data;
}

export { getNotes, updateNote, deleteNote, createNote };