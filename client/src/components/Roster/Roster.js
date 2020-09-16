import React from 'react'
import img1 from '../../images/jaacsin2.png';
import img2 from '../../images/pippen2.png'
import img3 from '../../images/huerta2.png'
import img4 from '../../images/baal2.png'

const Roster = () => {
    return (
        <div className='p-5 mb-10'>
            <div className='flex flex-wrap p-5 justify-around'>
                <div className='shadow mx-5 my-3'>
                    <img src={img1} alt='player1' className='w-56 h-56 object-fit'/>
                    <div className='bg-gray-900 p-2'>
                    <div className='text-gray-100 text-center'>
                        Jose Angulo <span className='text-orange-700 italic ml-2'> NLHE Cash</span>
                    </div>
                        <div className='text-orange-700 italic'>jaacsin</div>
                    </div>
                </div>
                <div className='shadow mx-5 my-3'>
                    <img src={img2} alt='player1' className='w-56 h-56 object-fit'/>
                    <div className='bg-gray-900 p-2'>
                    <div className='text-gray-100 text-center'>
                        Luis Renoud <span className='text-orange-700 italic ml-2'> PLO Cash</span>
                    </div>
                        <div className='text-orange-700 italic'>pippen183</div>
                    </div>
                </div>
                <div className='shadow mx-5 my-3'>
                    <img src={img3} alt='player1' className='w-56 h-56 object-fit'/>
                    <div className='bg-gray-900 p-2'>
                    <div className='text-gray-100 text-center'>
                        Edgar Huerta <span className='text-orange-700 italic ml-2'> MixedGames</span>
                    </div>
                        <div className='text-orange-700 italic'>frosty123</div>
                    </div>
                </div>
                <div className='shadow mx-5 my-3'>
                    <img src={img4} alt='player1' className='w-56 h-56 object-fit'/>
                    <div className='bg-gray-900 p-2'>
                    <div className='text-gray-100 text-center'>
                        Jorge Limon <span className='text-orange-700 italic ml-2'> NLHE Cash</span>
                    </div>
                        <div className='text-orange-700 italic'>baalim</div>
                    </div>
                </div>
                <div className='shadow mx-5 my-3'>
                    <img src={img1} alt='player1' className='w-56 h-56 object-fit'/>
                    <div className='bg-gray-900 p-2'>
                    <div className='text-gray-100 text-center'>
                        Jose Angulo <span className='text-orange-700 italic ml-2'> NLHE Cash</span>
                    </div>
                        <div className='text-orange-700 italic'>jaacsin</div>
                    </div>
                </div>
                <div className='shadow mx-5 my-3'>
                    <img src={img2} alt='player1' className='w-56 h-56 object-fit'/>
                    <div className='bg-gray-900 p-2'>
                    <div className='text-gray-100 text-center'>
                        Luis Renoud <span className='text-orange-700 italic ml-2'> PLO Cash</span>
                    </div>
                        <div className='text-orange-700 italic'>pippen183</div>
                    </div>
                </div>
                <div className='shadow mx-5 my-3'>
                    <img src={img3} alt='player1' className='w-56 h-56 object-fit'/>
                    <div className='bg-gray-900 p-2'>
                    <div className='text-gray-100 text-center'>
                        Edgar Huerta <span className='text-orange-700 italic ml-2'> MixedGames</span>
                    </div>
                        <div className='text-orange-700 italic'>frosty123</div>
                    </div>
                </div>
                <div className='shadow mx-5 my-3'>
                    <img src={img4} alt='player1' className='w-56 h-56 object-fit'/>
                    <div className='bg-gray-900 p-2'>
                    <div className='text-gray-100 text-center'>
                        Jorge Limon <span className='text-orange-700 italic ml-2'> NLHE Cash</span>
                    </div>
                        <div className='text-orange-700 italic'>baalim</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roster
