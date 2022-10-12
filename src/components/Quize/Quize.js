import React from 'react';
import { Link } from 'react-router-dom';

const Quize = ({ quize }) => {
    const { name, logo, total, id } = quize;


    return (
        <div >
            <img className='bg-yellow-300' src={logo} alt=""></img>
            <div className='flex justify-between'>
                <p>{name}</p>
                <p>Total Quize:{total}</p>
                <Link to={`../quize/${id}`}>Start</Link>
            </div>


        </div>
    );
};

export default Quize;