import React, { useState } from 'react';

function Card(args) {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src="assets/img/big-project-image.png" className="card-img-top" alt="big-project-image" />
            <div className="card-body">
                <h5 className="card-title">Project Name</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default Card;