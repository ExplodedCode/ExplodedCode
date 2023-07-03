import React from 'react';
import { Link } from 'react-router-dom';

const CoreValues = () => {
    return (
        <>
            <div className="m-auto p-4 md:p-24" id='corevalues'>
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Core Values</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                    </div>

                    <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                                <div className="m-2 text-justify text-sm">
                                    <div className="flex justify-center my-4">
                                        <img width='100px' src='https://cdn-icons-png.flaticon.com/512/998/998361.png'></img>
                                    </div>
                                    <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Professional</h4>
                                    <p className="text-md font-medium leading-5 h-auto md:h-25">
                                        At Exploded Code, professionalism is at the core of everything we do. We understand that our clients' needs come first, and we are dedicated to providing them with the highest level of service. Our team members are knowledgeable experts who excel in their respective fields, ensuring that our solutions meet the highest professional standards. We are committed to open and transparent communication, keeping our clients informed and involved throughout the process.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                                <div className="m-2 text-justify text-sm">
                                    <div className="flex justify-center my-4">
                                        <img width='100px' src='https://cdn-icons-png.flaticon.com/512/3390/3390879.png'></img>
                                    </div>
                                    <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Relational</h4>
                                    <p className="text-md font-medium leading-5 h-auto md:h-25">
                                        Building strong connections and relationships is fundamental to our approach at Exploded Code. We believe that collaboration and trust are the keys to successful partnerships. Our team excels in making excellent connections with our clients, understanding their unique requirements, and working closely with them to deliver tailored solutions. We value open and honest communication, and we strive to foster long-lasting relationships based on mutual respect and understanding.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                                <div className="m-2 text-justify text-sm">
                                    <div className="flex justify-center my-4">
                                        <img width='100px' src='https://cdn-icons-png.flaticon.com/512/4046/4046965.png'></img>
                                    </div>
                                    <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Knowledgeable</h4>
                                    <p className="text-md font-medium leading-5 h-auto md:h-25">
                                        At Exploded Code, we are passionate about knowledge and continuous learning. We embrace modern and upcoming technologies to stay at the forefront of our industry. Our team members are highly skilled and possess deep expertise in their domains. We encourage a culture of curiosity, where we constantly seek to expand our knowledge and skills. By staying knowledgeable, we ensure that our solutions are innovative, cutting-edge, and address the complex challenges our clients face.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                                <div className="m-2 text-justify text-sm">
                                    <div className="flex justify-center my-4">
                                        <img width='100px' src='https://cdn-icons-png.flaticon.com/512/3886/3886885.png'></img>
                                    </div>
                                    <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Modern</h4>
                                    <p className="text-md font-medium leading-5 h-auto md:h-25">
                                        As a forward-thinking company, Exploded Code embraces the latest and upcoming technologies. We understand that technology evolves rapidly, and we proactively stay ahead of the curve. By leveraging modern tools and techniques, we deliver solutions that are efficient, scalable, and future-proof. Our commitment to using emerging technologies enables us to provide our clients with innovative solutions that meet their current needs while anticipating their future requirements.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                                <div className="m-2 text-justify text-sm">
                                    <div className="flex justify-center my-4">
                                        <img width='100px' src='https://cdn-icons-png.flaticon.com/512/3062/3062540.png'></img>
                                    </div>
                                    <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Mindful</h4>
                                    <p className="text-md font-medium leading-5 h-auto md:h-25">
                                        Mindfulness is a guiding principle at Exploded Code. We approach every aspect of our work with thoughtfulness and attention to detail. We listen carefully to our clients, understanding their goals and challenges. We take the time to fully comprehend complex problems and craft elegant solutions. Our mindful approach ensures that our solutions are tailored, efficient, and effective, bringing the most value to our clients. We believe that mindfulness leads to superior outcomes and fosters long-term success.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                                <div className="m-2 text-justify text-sm">
                                    <div className="flex justify-center my-4">
                                        <img width='100px' src='https://cdn-icons-png.flaticon.com/512/3819/3819368.png'></img>
                                    </div>
                                    <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Thinking Outside the Box</h4>
                                    <p className="text-md font-medium leading-5 h-auto md:h-25">
                                        At Exploded Code, we encourage and celebrate creative thinking and innovation. We understand that complex problems require unique solutions. Our team members possess a forward-thinking mindset and approach challenges from various angles. We consider all options and possibilities, thinking outside the box to find the most effective solutions. By embracing unconventional ideas and approaches, we create innovative software solutions that push the boundaries and deliver exceptional results for our clients.
                                    </p>    
                                </div>  
                            </div>                   
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoreValues;