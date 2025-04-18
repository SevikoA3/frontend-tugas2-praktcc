import React from "react";
import NotePage from "./features/NotePage.jsx";
import MainPage from "./features/MainPage.jsx";
import NewNotePage from "./features/newNotePage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="frontend-tugas2-praktcc/" element={<MainPage />} />
                    <Route path="frontend-tugas2-praktcc/:id" element={<NotePage />} />
                    <Route path="frontend-tugas2-praktcc/new-note" element={<NewNotePage />} />
                </Routes>
            </div>
        </Router>
    );
}