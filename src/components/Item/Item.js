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
            <p>Quize Topic: {name}</p>
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
            <button onClick={rightAnswer}>Right Answer</button>
            <p>{correctAnswer}</p>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Item;