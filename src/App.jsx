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
                    <Route path="/:id" element={<NotePage />} />
                    <Route path="/" element={<MainPage />} />
                    <Route path="/newNote" element={<NewNotePage />} />
                </Routes>
            </div>
        </Router>
    );
}