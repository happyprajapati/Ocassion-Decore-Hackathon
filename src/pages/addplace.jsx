// import react from "react";

// export default function addplace() {
//     return (
//         <div classNameName='mx-10 my-40'>

//         </div>
//     )
// }

import { State, City }  from 'country-state-city';
import React, { useEffect, useState } from 'react';
import Header from '../components/header';
// import './App.css'; // assuming you have a CSS file for styling

const addplace = () => {
      const [formData, setFormData] = useState({
        name: '',
        state: '',
        city: '',
        location: '',
        capacity: '',
        decoration: false,
        catering: false,
        aadharCard: null,
        photos: [],
        property: null
      });

      const [state, setState] = useState([])
      const [city, setCity] = useState([])

      const handleChange = (e) => {
        // const { name, value, type, checked, files } = e.target;
        // setFormData(prevState => ({
        //   ...prevState,
        //   [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        // }));
        setFormData({...formData, [e.target.name]: e.target.value})
        // console.log(formData)
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // you can do something with the form data here, like sending it to a server
      };

useEffect(()=>{
    setState(State.getStatesOfCountry("IN"));
    // console.log(getState)
    setCity(City.getCitiesOfState("IN", formData.state));
},[formData.state])

    return (
        <>
            <Header />
            <form className="max-w-sm mx-auto mx-10 my-24">
            <h1 className='pb-5 text-4xl font-extrabold flex justify-center'>Add Place</h1>
                <div className="mb-5">
                    <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" onChange={handleChange} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter your Name" required />
                </div>
                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                    <select id="countries" name='state' value={formData.state}  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Select State</option>
                        {state.map((state,key) => (
                            <option key={key} value={state.isoCode}>{state.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                    <select id="cities" name='city' value={formData.city}  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Select City</option>
                        {city.map((city,key) => (
                            <option key={key} value={city.name}>{city.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-5">
                    <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                    <input type="text"  onChange={handleChange} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Location" required />
                </div>

                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Capacity</label>
                    <input type="email"  onChange={handleChange} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="No. of people" required />
                </div>

                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Decoration</label>

                    <div className="flex items-center mb-4">
                        <input id="default-radio-1"  onChange={handleChange} type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                        <input checked id="default-radio-2"  onChange={handleChange} type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-2" />
                        <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                    </div>
                </div>

                <div classNameName='pb-5'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Adhaar Card</label>
                    <input  onChange={handleChange} className="block w-full text-sm text-gray-900 cursor-pointer bg-gray-50 p-2 rounded dark:text-gray-400 dark:placeholder-gray-400" id="file_input" type="file" />
                </div>

                <div classNameName='pb-5'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Property</label>
                    <input  onChange={handleChange} className="block w-full text-sm text-gray-900 cursor-pointer bg-gray-50 p-2 rounded dark:text-gray-400 dark:placeholder-gray-400" id="file_input" type="file" />
                </div>
                <div classNameName='pb-5'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Bank</label>
                    <input  onChange={handleChange} className="block w-full text-sm text-gray-900 cursor-pointer bg-gray-50 p-2 rounded dark:text-gray-400 dark:placeholder-gray-400" id="file_input" type="file" />
                    </div>


                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        {/* <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required /> */}
                    </div>
                    {/* <label for="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label> */}
                </div>
                <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Place</button>
            </form>

        </>
    );
};

export default addplace;