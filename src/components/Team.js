import React from 'react';
import templin from '../images/team/templin.jpg';
import trowbridge from '../images/team/trowbridge.jpg';
import phyillaier from '../images/team/phyillaier.jpg';

const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Team = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Team</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Some of our Team.</h2>
                    </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-12">    
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-75 hover:opacity-100">
                        </div>                     
                        <div className="bg-white overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-75 hover:opacity-100">
                            <div className="m-2 text-justify text-sm">
                                <div className="flex justify-center my-4">
                                    <img src={templin} alt="client" className='rounded-full'/> 
                                </div>
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Evan Templin</h4>
                                <p className="text-md text-center font-medium leading-5 h-auto md:h-25">
                                    Project Manager and Quality Control Analyst
                                </p>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-75 hover:opacity-100">
                            <div className="m-2 text-justify text-sm">
                                <div className="flex justify-center my-4">
                                    <img src={trowbridge} alt="client" className='rounded-full'/>
                                </div>
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Evan Trowbridge</h4>
                                <p className="text-md text-center font-medium leading-5 h-auto md:h-25">
                                    Principle Software Engineer
                                </p>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-75 hover:opacity-100">
                            <div className="m-2 text-justify text-sm">
                                <div className="flex justify-center my-4">
                                    <img src={phyillaier} alt="client" className='rounded-full'/>
                                </div>
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Evan Phyillaier</h4>
                                <p className="text-md text-center font-medium leading-5 h-auto md:h-25">
                                    Principle Software Engineer
                                </p>
                            </div>
                        </div>
                                           
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team;