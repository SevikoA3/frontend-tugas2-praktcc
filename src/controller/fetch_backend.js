import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;

const getNotes = async () => {
    const response = await axios.get(`${baseUrl}/notes`);
    return response.data;
};

const createNote = async (data) => {
    const response = await axios.post(`${baseUrl}/note`, data);
    return response.data;
}

const updateNote = async (id, data) => {
    const response = await axios.patch(`${baseUrl}/note/${id}`, data);
    return response.data;
}

const deleteNote = async (id) => {
    const response = await axios.delete(`${baseUrl}/note/${id}`);
    return response.data;
}

export { getNotes, updateNote, deleteNote, createNote };