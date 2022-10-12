import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';

const QuizeDetails = () => {
    const quizeData = useLoaderData()
    // console.log(quizeData)
    const need = quizeData.data;
    const loadData = quizeData.data.questions;
    // const { question } = loadData;
    // console.log(loadData)
    return (
        <div className='grid grid-cols-1 gap-3 '>
            {
                loadData.map(item => <Item
                    key={item.id}
                    item={item}
                    need={need}
                ></Item>)
            }

        </div>
    );
};

export default QuizeDetails;