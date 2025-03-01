import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;

const getNotes = async () => {
    try {
        const response = await axios.get(`${baseUrl}/notes`);
        return response.data;
    } catch (error) {
        console.error('Error fetching notes:', error);
        throw error;
    }
};

const createNote = async (data) => {
    try {
        const response = await axios.post(`${baseUrl}/note`, data);
        return response.data;
    } catch (error) {
        console.error('Error creating note:', error);
        throw error;
    }
};

const updateNote = async (id, data) => {
    try {
        const response = await axios.patch(`${baseUrl}/note/${id}`, data);
        return response.data;
    } catch (error) {
        console.error(`Error updating note with id ${id}:`, error);
        throw error;
    }
};

const deleteNote = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/note/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting note with id ${id}:`, error);
        throw error;
    }
};

export { getNotes, updateNote, deleteNote, createNote };