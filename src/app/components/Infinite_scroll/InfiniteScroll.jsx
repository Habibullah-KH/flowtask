import './infiniteScroll.css'
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";

export default function InfiniteScroll (){
    return(
        <>
<ul class="wrapper">
  <li class="item item1"><IoLogoHtml5 /> HTML</li>
  <li class="item item2"><FaCss3Alt /> CSS</li>
  <li class="item item3"><SiJavascript /> JavaScript</li>
  <li class="item item4"><span className='font-xl'><RiTailwindCssFill /></span> TailwindCSS</li>
  <li class="item item5"><IoLogoFirebase /> Firebase</li>
  <li class="item item6"><FaReact /> React.js</li>
  <li class="item item7"><SiNextdotjs /> Next.js</li>
  <li class="item item8"><SiExpress /> Express.js</li>
</ul>
        </>
    );
}