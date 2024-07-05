import './index.scss';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';
import React, { useState } from 'react'

const IncDec = (props) => {
    
    return (
        <>
            <div className='add-remove-container'>
                <IoIosRemove onClick={props.onClickRemove}/>
                <div>1</div>
                <IoIosAdd onClick={props.onClickAdd}/>
            </div>
        </>
    )
}
export default IncDec

