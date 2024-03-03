import {useState, useEffect} from "react";
import {
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import { State, City }  from 'country-state-city';
 
export default function selectDialog({open, handleOpen}) {

    const [formData, setFormData] = useState({state: "", city: ""})

    const [state, setState] = useState([])
    const [city, setCity] = useState([])

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
      };

    useEffect(()=>{
        setState(State.getStatesOfCountry("IN"));
        // console.log(getState)
        setCity(City.getCitiesOfState("IN", formData.state));
    },[formData.state])

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
          <div>
          <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                    <select id="countries" name='state' value={formData.state}  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Select State</option>
                        {state.map((state,key) => (
                            <option key={key} value={state.isoCode}>{state.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                    <select id="cities" name='city' value={formData.city}  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Select City</option>
                        {city.map((city,key) => (
                            <option key={key} value={city.name}>{city.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}