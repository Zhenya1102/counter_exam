import React, {useState} from 'react';
import {Button} from './Button';
import s from './Counter.module.css'


export const Counter = () => {
    const [counter, setCounter] = useState<number>(0)
    const addNumber = () => {
        if (counter < 5) {
            setCounter(counter + 1);
        }
    }
    const getReset = () => {
        setCounter(0);
    }
    return (
        <div className={s.counter}>
            <div className={s.counter__number}>{counter}</div>
            <div className={s.counter__buttons}>
                <Button title={'INC'} callBack={addNumber} disabled={counter === 5}/>
                <Button title={'RESET'} callBack={getReset} disabled={counter === 0}/>
            </div>
        </div>
    )
}