import React, { useState } from "react";

function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav>
            <a href="#about" onClick={() => handlePageChange('About')}>About Me</a>
            <a href="#work" onClick={() => handlePageChange('Projects')}>My Work</a>
            <a href="#contact" onClick={() => handlePageChange('Contact')}>Contact Me</a>
            <a href="#resume" onClick={() => handlePageChange('Resume')}>Resume</a>
        </nav>
    )
}

export default Navigation;