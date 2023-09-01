import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import About from './components/pages/About.js';
import Contact from './components/pages/Contact.js';
import Projects from './components/pages/Projects.js';
// import Resume from './components/pages/Resume.js';


function App() {

    const [currentPage, setCurrentPage] = useState('About');

    //render page function for selected nav link
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        // if (currentPage === 'Resume') {
        //     return <Resume />;
        // }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer />
        </div>
    );
}

export default App;
