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
                <Link className='bg-green-500 rounded-md p-2 text-bold font-bold text-white' to={`../quize/${id}`}>Start quize<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </Link>
            </div>


        </div>
    );
};

export default Quize;