import React, { useState } from 'react';
import image from "./img/big-project-image.png";

function Card(args) {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt="big-project-image" />
            <div className="card-body text-center p-0">
                <h5 className="card-title ps-3 pe-3 pt-3 fw-bold">Project Name</h5>
                <p className="card-text ps-3 pe-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div class="card-footer">
                    <a href="#" className="btn btn-primary text-centre p-2">Find Out More!</a>
                </div>
            </div>
        </div>
    );
}

export default Card;