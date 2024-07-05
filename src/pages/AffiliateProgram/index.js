import React, { useState } from 'react'
import './index.scss'
import { Button } from 'react-bootstrap';

const AffiliateProgram = () => {

    return (
        <>
            <div className='program'>
                <img src={require("../../assets/program1.png")} alt="program1" className='program1' />
                <div className='program_info'>
                    <h6>WELCOME TO BAG X AFFILIATE PROGRAMME</h6>
                    <p>If you are active on social media you can earn by telling people about our handbags.
                        Joine our affiliate programme to start earning today.</p>
                    <Button id="button-addon2" className='msg-btn'>
                        Register Now
                    </Button>
                </div>
            </div>
            <div className='img_div'>
                <img src={require("../../assets/program2.png")} alt="program2" className='program2' />
                <img src={require("../../assets/program3.png")} alt="program3" className='program3' />
                <img src={require("../../assets/program4.png")} alt="program4" className='program4' />
            </div>
            <Button id="button-addon2" className='msg-btn'>
                Register Now
            </Button>
        </>
    )
}
export default AffiliateProgram;