import React from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const Item = ({ item, need }) => {
    const { question, options, correctAnswer, } = item;
    const { name, } = need;


    function rightAnswer() {
        toast(item.correctAnswer);
    }


    const clickHandle = (ans) => {
        if (item.correctAnswer === ans) {
            toast('Wright')
        }
        else {
            toast('wrong')
        }
    }


    return (
        <div className='bg-slate-200 border-2 shadow-md rounded-lg text-2xl py-1.5 px-6 m-16 items-center'>
            <p className='bg-pink-200 rounded-md p-2 text-bold font-bold text-white'>Quize Topic: {name}</p>
            <h>Queistion:{question.slice(3, - 4)}</h>
            <div>
                <p>Choice Your Answer</p>
                <div><button onClick={() => clickHandle(options[0])}>1. {options[0]}</button></div>
                <div><button onClick={() => clickHandle(options[1])}>2. {options[1]}</button></div>
                <div><button onClick={() => clickHandle(options[2])}>3. {options[2]}</button></div>
                <div><button onClick={() => clickHandle(options[3])}>4. {options[3]}</button></div>

                {/* {
                    options.map(option => <p><button><input type="radio" id="html" name="fav-language" value="HTML" onClick={() => clickHandle(option)}>{option}</input></button></p>)
                } */}

            </div>
            <button className='bg-green-500 rounded-md p-2 text-bold font-bold text-white' onClick={rightAnswer}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>Right Answer</button>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Item;