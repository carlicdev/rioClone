import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Cover from './Cover';
import Modal from '../Modal/Modal';
import Section from './Section'
import SectionTwo from './SectionTwo'

const Home = () => {
    const [handleModal, setHandleModal] = useState(false);
    return (
        <div>
            <div className='cover-cover h-screen'>
                <Navbar />
                <Cover handleModal={() => setHandleModal(!handleModal)} />
                <Modal handleModal={handleModal} />
            </div>
                <Section />
                <SectionTwo />
        </div>
    )
}

export default Home
