import React from 'react';
import s from './Counter.module.css';

export type ButtonTypeProps = {
    title: string
    callBack: ()=> void
    disabled: boolean
}

export const Button = (props:ButtonTypeProps) => {
    const onclickButtonHandler = () => {
        props.callBack()
    }
    return (
        <button disabled={props.disabled} className={s.counter__button} onClick={onclickButtonHandler}>{props.title}</button>
    )
}