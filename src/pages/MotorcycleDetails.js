import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import NavBar from '../side_navbar/Navbar';

const MotorcycleDetail = () => {
  const [bike, setbike] = useState({});
  const { motorcycleId } = useParams();
  const fetchMotorcycle = async () => {
    const Url = await fetch(`${API_BASE_URL}/motorcycles/${motorcycleId}/`);
    const data = await Url.json();
    setbike(data.data);
  };

  useEffect(() => {
    fetchMotorcycle();
  }, []);

  return (
    <>
      <div className="lg:flex lg:flex-shrink-0">
        <NavBar />
      </div>
      <div className="main-container w-full h-full flex items-center p-4">
        <div className=" full-image w-3/6">
          <img src={bike?.image} alt="motorcycleImage" className="image pl-16" />
        </div>
        <div className=" content w-1/3 pl-28">
          <h2 className="font-bold text-3xl">{bike?.name}</h2>
          <div className="my-3">
            <p className="bg-slate-300 my-2 p-2">
              <span className="font-medium">
                Total amount: $
                {bike?.price}
              </span>
            </p>
            <p className="font-medium my-2 p-2">Fuel: Petrol</p>
            <p className="font-medium bg-slate-300 my-2 p-2">Location: Jhapa,Nepal</p>
            <p className="font-medium p-2">Contact: +9779824955067</p>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-2">Reservation</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MotorcycleDetail;
