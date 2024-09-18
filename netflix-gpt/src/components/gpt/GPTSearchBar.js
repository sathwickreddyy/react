import React from "react";
import { lang } from "../../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
    const languageKey = useSelector((store) => store.config?.lang);

    return (
        <div className='pt-[10%] flex justify-center'>
            <form className=' w-1/2 grid grid-cols-12'>
                <input type='text' className='p-4 m-4 col-span-9 rounded-xl' placeholder={lang[languageKey].gptSearchPlaceHolder} />
                <button className='py-2 px-4 m-4 bg-red-500 text-white rounded-xl  col-span-3'>{lang[languageKey].search}</button>
            </form>
        </div>
    );
};

export default GPTSearchBar;
