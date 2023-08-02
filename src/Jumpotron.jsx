import React, { useState } from 'react';

function Jumpotron(args) {
    return (
        <div className="jumbotron bg-light ps-3 pe-3 pb-5 pt-3">
            <h1 className="display-4">A Warm Welcome</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p className="lead">
                <a className="btn btn-primary" href="#" role="button">Call to action!</a>
            </p>
        </div>
    );
}

export default Jumpotron;