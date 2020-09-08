import React, { useState, useEffect } from 'react'
import LoginForm from '../Login/LoginForm';
import { CgCloseR } from 'react-icons/cg'

const Modal = ({handleModal}) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        handleModal ? setShowModal(true) : setShowModal(false)
    },[handleModal]) 

    return (
        <div>
            {
                showModal ? (
                    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none modal' >
                        <div className='relative w-auto my-6 mx-auto max-w-lg bg-gray-900 rounded px-5 pt-1 pb-5'>
                            <div className='w-full text-right'>
                                <button className='focus:outline-none text-white'
                                    onClick={() => setShowModal(false)}
                                >
                                    <CgCloseR />
                                </button>
                            </div>
                            <div>
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

export default Modal;
