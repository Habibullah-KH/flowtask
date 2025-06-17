import './swapButton.css'
import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function SwapButton(){
        const [click, setClick] = useState(false);

        const handleSwap = () => {
            setClick(!click);
        };
    return(
        <>
      <button
      className={`swap-button ${click ? 'active' : ''}`}
      onClick={handleSwap}
    >
      <span className="icon menu-icon">
        <IoReorderThree size={25} />
      </span>
      <span className="icon reorder-icon">
        <RxCross2 size={25} />
      </span>
    </button>  
        </>
    );
}