import { BellIcon, MailIcon, SearchIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import React from "react";

const Navigation = () => {
  return (
    <nav className=" w-full border-t-darkGray border-t-[1px] sticky bottom-0 bg-navy text-white flex justify-around pt-3 pb-7">
      <div>
          <HomeIcon className="navIcon"/>
      </div>
      <div>
          <SearchIcon className="navIcon" />
      </div>
      <div>
          <BellIcon className="navIcon" />
      </div>
      <div>
          <MailIcon className="navIcon" />
      </div>
    </nav>
  );
};

export default Navigation;
