import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { SparklesIcon } from "@heroicons/react/outline";
import React from 'react';

const Header = () => {

  return (
    <div className=" flex justify-between items-center py-3 px-4">
      <img
        className=" rounded-full"
        src="https://picsum.photos/31/31"
        alt="zdjęcie profilowe zalogowanego użytkownika"
      />
      <TwitterIcon className="fill-twitter-blue" />
      <SparklesIcon className=" w-8 text-white" />
    </div>
  );
};

export default Header;
