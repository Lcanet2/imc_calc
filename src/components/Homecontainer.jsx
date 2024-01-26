import React, { useState } from 'react';

const Homecontainer = () => {
    const [taille, setTaille] = useState(null);
    const [poids, setPoids] = useState(null);
    const [isVisible, setIsVisible] = useState(true);

    const InputChange = (e) => {
        setTaille(e.target.value);
    }

    const weight = (e) => {
        setPoids(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(taille);
        setIsVisible(!isVisible);
    }

    const results = (e) => {
        e.preventDefault();
        console.log(poids);
    }

    return (
        <div className='bg-green-500 h-screen font-custom text-white text-5xl'>
            <div className='flex justify-center items-center h-screen'>
                <div className={`text-center ${isVisible ? '' : 'invisible'}`}>
                    {isVisible && (
                        <div>
                            <p>Entrez votre taille en mètres exemple : 1.62</p>
                            <input type="number" className='w-full appearance-none outline-none rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-gray-300 text-black' id='taille' onChange={InputChange}/>
                            <input type="submit" className='cursor-pointer' onClick={submit} />
                        </div>
                    )}
                </div>
                <div className={`text-center ${isVisible ? 'invisible' : ''}`}>
                    {!isVisible && (
                        <div>
                            <p>Entrez votre poids en Kg :</p>
                            <input type="number" className='w-full appearance-none outline-none rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-gray-300 text-black' id='poids' onChange={weight} />
                            <input type="submit" className='cursor-pointer' onClick={results}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Homecontainer;
