import React from "react";
import Project from "../Project.js";

export default function Projects() {
    const projects = [
        {
            title: 'Bites-N-Booze',
            link: 'https://cashew1337.github.io/Bites-N-Booze/homepage.html',
            imagesrc: './images/b_n_b_logo.png',
            description: 'Find an easy dinner and drink combo.'
        },
        {
            title: 'Art Dealer',
            link: 'https://nameless-springs-87426-ab7084b2cd1d.herokuapp.com/',
            imagesrc: './images/art-dealer.png',
            description: 'Find your next trendy art purchase.'
        },
    ]

        return (
            <div>
                <section className="about-portfolio">
                    <h3 id="my-portfolio">My Projects</h3>
                    <p>Find below some projects that I believe showcase my coding abilities. You can find further projects I have worked on at my GitHub page.
                    </p>
    
                </section>
    
                <section className="projects">
    
                {
                    projects.map((project) => <Project data={project}/>)
                }
    
                </section>
            </div>
        );
}