import React from 'react'
import img1 from '../../images/jaacsin2.png';
import img2 from '../../images/pippen2.png';
import img3 from '../../images/huerta2.png';
import img4 from '../../images/baal2.png';

const Section = () => {
    return (
        <div className='container mx-auto text-center my-10 w-full'>
            <div className='text-6xl text-orange-900'>Aprende</div>
            <div className='text-3xl font-semibold text-gray-900 mb-5'>de los Mejores de Latinoamérica</div>
            <hr/>
            <div className='font-thin italic text-gray-900'>Desde No Limit Holdem hasta Pot Limit Omaha, torneos o mesas de Cash. Estas entre los mejores.</div>
            <div className='flex flex-wrap justify-around my-5'>
                <div className='w-48 h-56 pro-image shadow' style={{backgroundImage: `url(${img1})`}} />
                <div className='w-48 h-56 pro-image shadow' style={{backgroundImage: `url(${img2})`}} />
                <div className='w-48 h-56 pro-image shadow' style={{backgroundImage: `url(${img3})`}} />
                <div className='w-48 h-56 pro-image shadow' style={{backgroundImage: `url(${img4})`}} />
            </div>
        </div>
    )
}

export default Section
