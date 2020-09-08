import React, { useState, useEffect } from 'react'

const Filters = ({filterBy}) => {
    const [plan, setPlan] = useState('all');
    const [game, setGame] = useState('all');
    const [pro, setPro] = useState('all');

    useEffect(() => {
        const handleChange = () => {
            filterBy({
                plan,
                game,
                by: pro
            })
        }
        handleChange();
    }, [pro, game, plan, filterBy])
    
    return (
        <div className='container w-full shadow'>
            <div className='flex flex-wrap'>
                <select 
                    className='border border-gray-300 rounded m-1 p-2 lg:w-1/5 md:w-1/3 w-2/3 focus:outline-none focus:shadow-outline' name='plan' value={plan} onChange={(e) => setPlan(e.target.value)} >
                    <option value='all'>All Plans</option>
                    <option value='essencial'>Esencial</option>
                    <option value='pro'>Pro</option>
                    <option value='elite'>Elite</option>
                </select>
                <select 
                    className='border border-gray-300 rounded m-1 p-2 lg:w-1/5 md:w-1/3 w-2/3 focus:outline-none focus:shadow-outline' name='games' value={game} onChange={(e) => setGame(e.target.value)} >
                    <option value='all'>All Games</option>
                    <option value='nlhe'>NL Holdem</option>
                    <option value='plo'>Pot Limit Omaha</option>
                </select>
                <select 
                    className='border border-gray-300 rounded m-1 p-2 lg:w-1/5 w-2/3 md:w-1/3 w-2/3 focus:outline-none focus:shadow-outline' name='pro' value={pro} onChange={(e) => setPro(e.target.value)} >
                    <option value='all'>All Players</option>
                    <option value='jaacsin'>Jaacsin</option>
                    <option value='pippen'>Pippen</option>
                    <option value='carlic'>Carlic</option>
                </select>
            </div>
        </div>
    )
}

export default Filters;
