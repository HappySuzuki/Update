/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: SocialLinks.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";

const SocialLinks = () => {
  return (
    <div className="w-full h-[100px] bg-grayscale-950 flex justify-center items-center gap-3 p-6">
      <a href="https://github.com/HappySuzuki" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faGithub}
        />
      </a>
      <a href="mailto:kaisuzuki915@gmail.com" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faEnvelope}
        />
      </a>
      <a href="https://t.me/Happy_Suzuki" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faTelegram}
        />
      </a>
    </div>
  );
};

export default SocialLinks;