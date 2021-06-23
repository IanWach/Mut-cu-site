import React from 'react';
import './Stats.css'

function Stats (){
    return(
        <div className="Stats-Container">
            <h1>Stats & Facts</h1>
            <div className="Facts-Container">
                <div className="Stats-1">
                    <h2>Our Members</h2>
                    <p>1200</p>
                </div>
                <div className="Stats-2">
                    <h2>Our ALUMNI</h2>
                    <p>400</p>
                </div>
                <div className="Stats-3">
                    <h2>Ministries</h2>
                    <p>20</p>
                </div>
                <div className="Stats-4">
                    <h2>Fellowships</h2>
                    <p>4</p>
                </div>
            </div>
        </div>
    )
}
export default Stats