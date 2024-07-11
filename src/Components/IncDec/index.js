import './index.scss';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';
import React from 'react';

const IncDec = ({ count, onClickAdd, onClickRemove }) => {
    return (
        <>
            <div className='add-remove-container'>
                <IoIosRemove onClick={onClickRemove} style={{cursor: 'pointer'}}/>
                <div>{count}</div>
                <IoIosAdd onClick={onClickAdd} style={{cursor: 'pointer'}}/>
            </div>
        </>
    );
};

export default IncDec;
