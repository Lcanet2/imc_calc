import React from 'react';
import { useState, useEffect } from 'react';

const Homecontainer = () => {

    const [taille, setTaille] = useState(null);

    const InputChange = (e) => {
        setTaille(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(taille);
    }


    return (
        <div className='bg-green-500 h-screen font-custom text-white text-5xl'>
            <div  className='flex justify-center items-center  h-screen' >
                <div className='text-center'>
                    <p>Entrez votre taille en mètres exemple : 1.62</p>
                    <input type="number" className='w-full appearance-none outline-none rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-gray-300 text-black' id='taille' onChange={InputChange}/>
                    <input type="submit" className='cursor-pointer' onClick={submit} />
                </div>
            </div>
            <div className='flex justify-center items-center  h-screen invisible'>

            </div>
        </div>
        
    );
};

export default Homecontainer;