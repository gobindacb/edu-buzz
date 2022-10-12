import React from 'react';
import { Link } from 'react-router-dom';

const Quize = ({ quize }) => {
    const { name, logo, total, id } = quize;


    return (
        <div >
            <img className='bg-yellow-300' src={logo} alt=""></img>
            <div className='flex justify-between bg-gray-300'>
                <p className='font-bold p-2'>{name}</p>
                <p className='font-bold p-2'>Total Quize:{total}</p>
                <Link className='bg-green-500 rounded-md p-2 text-bold font-bold text-white' to={`../quize/${id}`}>Start quize</Link>
            </div>


        </div>
    );
};

export default Quize;