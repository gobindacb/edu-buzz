import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quize from '../Quize/Quize';

const Topics = () => {
    const quizes = useLoaderData();
    return (
        <div>
            <Header></Header>
            <section className='grid lg:grid-cols-4 sm:grid-cols-1 gap-3'>
                {
                    quizes.data.map(quize => <Quize
                        key={quize.id}
                        quize={quize}
                    ></Quize>)
                }
            </section>

        </div>
    );
};

export default Topics;