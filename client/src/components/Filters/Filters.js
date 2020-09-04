import React, { useState } from 'react'

const Filters = ({onChange}) => {
    const [plans, setPlans] = useState('');
    const [games, setGames] = useState('');
    const [pros, setPros] = useState('');
    
    return (
        <div className='container mx-auto'>
            <div className='flex flex-wrap'>
                <select 
                    className='border border-gray-300 rounded m-1 p-2 lg:w-1/5 md:w-1/3 w-2/3 focus:outline-none focus:shadow-outline' name='plans' value={plans} onChange={(e) => setPlans(e.target.value)} >
                    <option value='plans'>All Plans</option>
                    <option value='free_plans'>Esencial</option>
                    <option value='pro_plans'>Pro</option>
                    <option value='elite_plans'>Elite</option>
                </select>
                <select 
                    className='border border-gray-300 rounded m-1 p-2 lg:w-1/5 md:w-1/3 w-2/3 focus:outline-none focus:shadow-outline' name='games' value={games} onChange={(e) => setGames(e.target.value)} >
                    <option value='games'>All Games</option>
                    <option value='nlhe'>NL Holdem</option>
                    <option value='plo'>Pot Limit Omaha</option>
                </select>
                <select 
                    className='border border-gray-300 rounded m-1 p-2 lg:w-1/5 w-2/3 md:w-1/3 w-2/3 focus:outline-none focus:shadow-outline' name='pros' value={pros} onChange={(e) => setPros(e.target.value)} >
                    <option value='players'>All Players</option>
                    <option value='jaacsin'>Jaacsin</option>
                    <option value='pippen'>Pippen</option>
                    <option value='carlic'>Carlic</option>
                </select>
            </div>
        </div>
    )
}

export default Filters;
