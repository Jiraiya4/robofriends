import React from 'react';
import s from './Scroll.module.css'

const Scroll = (props) => {
    return (
        <div className={s.scrollBox}>
            {props.children}
        </div>
    );
}

export default Scroll;