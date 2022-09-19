import {MdOutlineFileDownload} from "react-icons/md";
import { NavLink } from "react-router-dom";

 function Playlist() {
  return (
    <div className="mx-6 mt-4 flex flex-auto  flex-col py-2  border-white border-opacity-20 h-auto border-t">
        <ul className="text-sm font-semibold ">
            {new Array(10).fill(
                <li>
                    <a href="#" className="h-8 opacity-70 hover:opacity-100 flex item-center">
                        22.Çalma Listesi
                    </a>
                </li>
            )}    
        </ul>
        <NavLink to={'/ttt'} href="#" className='flex items-center opacity-70 p-3 rounded-lg gap-x-2 hover:opacity-100 ' >
        <MdOutlineFileDownload className="border rounded-full w-6 h-6"/>
        Uygulamayı Yükle
        </NavLink>
    </div>
  )
}

export default Playlist