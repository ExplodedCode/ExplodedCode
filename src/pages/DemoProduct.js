import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
// import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';
import { Link } from 'react-router-dom';

const DemoProduct = (props) => {

    useDocTitle('Exploded Code - Demo our products')

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [demoProducts, setDemoProducts] = useState([])
    const [errors, setErrors] = useState([])


    const handleChange = (e) => {
        const value = e.target.value
        const checked = e.target.checked
        errors.products = []
        if (checked) {
            setDemoProducts([
                ...demoProducts, value
            ])
        } else {
            setDemoProducts(demoProducts.filter((e) => (e !== value)))
        }

    }
    const clearErrors = () => {
        setErrors([])
    }

    const clearInput = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
    }

    function sendEmail(e) {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';
        let fData = new FormData();
        fData.append('first_name', firstName)
        fData.append('last_name', lastName)
        fData.append('email', email)
        fData.append('phone_number', phone)
        fData.append('message', message)
        fData.append('products', demoProducts)

        // emailjs.sendForm('service_7uy4ojg', 'template_et9wvdg', e.target, 'user_uE0bSPGbhRTmAF3I2fd3s')
        //   .then((result) => {
        //       console.log(result.text);
        //       Notiflix.Report.success(
        //         'Success',
        //         '"Thanks for sending a message, we\'ll be in touch soon."',
        //         'Okay',
        //         );
        //   }, (error) => {
        //       console.log(error.text);
        //       Notiflix.Report.failure(
        //         'An error occured',
        //         'Please try sending the message again.',
        //         'Okay',
        //         );
        //   });

        axios({
            method: "post",
            url: process.env.REACT_APP_DEMO_REQUEST_API,
            data: fData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'send message';
                clearInput()
                //handle success
                Notiflix.Report.success(
                    'Success',
                    response.data.message,
                    'Okay',
                );
            })
            .catch(function (error) {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'send message';
                //handle error
                const { response } = error;
                if (response.status === 500) {
                    Notiflix.Report.failure(
                        'An error occurred',
                        response.data.message,
                        'Okay',
                    );
                }
                if (response.data.errors !== null) {
                    setErrors(response.data.errors)
                }

            });
    }
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 h-screen">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <div className="my-4 py-4" id='portfolio'>
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Products</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                        </div>

                        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
                                <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                                    <div className="m-2 text-justify text-sm">
                                        <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Giftamizer</h4>
                                        <p className="text-md font-medium leading-5 h-auto md:h-48">
                                            Want to receive gifts that you know you will love? Giftamizer is the perfect answer. It’s your very own personal gift registry. Whether you’re online or in-store, you can add anything you’d like to receive – from your favourite bottle of wine or perfect pair of shoes to a new mountain bike or weekend away. Share with your friends or family and invite them to share with you!
                                        </p>
                                        <div className="flex justify-center my-4">
                                            <Link to="/giftamizer" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                                View Live Site
                                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                                    <div className="m-2 text-justify text-sm">
                                        <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">PuppyClock</h4>
                                        <p className="text-md font-medium leading-5 h-auto md:h-48">
                                            Want to know when the last time the dog was taken on walk? Or maybe went #2? PuppyClock is the ultimate app to track your pet's activities. Stay informed and organized with real-time updates on when your furry friend last used the restroom. Share the app with your family and friends, and invite them to stay connected and updated on your pet's needs.
                                        </p>
                                        <div className="flex justify-center my-4">
                                            <Link to="/puppyclock" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                                View Beta Site
                                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                                    <div className="m-2 text-justify text-sm">
                                        <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Fitness Management</h4>
                                        <p className="text-md font-medium leading-5 h-auto md:h-48">
                                            Track, log, and optimize your workouts with the upcoming fitness managing app. Easily monitor your sets, reps, and weights used across multiple gyms, ensuring you stay organized and motivated. Share your progress and achieve your fitness goals with the all-in-one companion.
                                        </p>
                                        <div className="flex justify-center my-4">
                                            <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                                Coming Soon!
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>


    )
}

export default DemoProduct;