import React, { useState } from 'react';

function Footer() {
    // Contact me section cards for the footer of portfolio
    return (

        <div className="contact">

            <section className="card">

                <div className="card-header">
                    <a href="https://www.linkedin.com/in/matthew-caschetto-35b956108/" target="_blank">
                        <img src="./images/linkedin.png" alt="Linkedin Graphic" />
                    </a>

                </div>

            </section>


            <section className="card">

                <div className="card-header">
                    <a href="https://github.com/cashew1337" target="_blank">
                        <img src="./images/github-icon.jpg" alt="Email Graphic" />
                    </a>

                </div>

            </section>

        </div>

    );
}

export default Footer; 
