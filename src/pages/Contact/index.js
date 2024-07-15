import React, { useState } from 'react'
import './index.scss'

const Contact = () => {

    return (
        <>
            <p className="prd_heading">CONTACT BAG X TEAM</p>
            <div className='contact'>
                <div>
                    <img src={require("../../assets/about.png")} alt="about"  />
                </div>
                <div className='contact_info'>
                    <p>Corporate Office: Bag X Building, 6 - A Waris Road Lahore Pakistan</p>
                    <p>Factory: 18km Ferozpur Road Lahore Pakistan</p>
                    <p>Contact:     +92 302 486 9999</p>
                    <p>WhatsApp: +92 333 4766 356</p>
                    <p>Email:</p>
                    <p>CEO: ceo@bagx.pk</p>
                    <p>Customer Support: cs@bagx.pk</p>
                    <p>Sales: bagx.pk@gmail.com</p>
                    <p>Web: www.bagx.pk</p>
                    <p>Instagram: www.instagram.com/bag.x.official</p>
                </div>
            </div>

        </>
    )
}
export default Contact;