import React from 'react';
import NavBar from '../components/NavBar';
import { Button } from '@material-tailwind/react';
const Home = () => {
  return (
    <>
      <NavBar />
      {/* <div className="flex w-max gap-4">
        <Button variant="filled">filled</Button>
        <Button variant="gradient">gradient</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="text">text</Button>
      </div> */}
      {/* <button
        type="button"
        data-ripple-light="true"
        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
        Button
      </button> */}
    </>
  );
};

export default Home;
