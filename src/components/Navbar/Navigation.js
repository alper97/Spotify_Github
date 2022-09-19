import {MdOutlineArrowBackIos} from 'react-icons/md';
import {useNavigate} from "react-router-dom";

 function Navigation() {

    const navigate = useNavigate();

  return (
    <div className='flex gap-x-5'>
        <button onClick={() => navigate(-1)} className='bg-black p-1 rounded-full hover:bg-primarygray'>
            <MdOutlineArrowBackIos size={23}/>
        </button>
        <button onClick={() => navigate(+1)} className='bg-black rotate-180 p-1 rounded-full hover:bg-primarygray'>
            <MdOutlineArrowBackIos size={23}/>
        </button>
    </div>
  )
}
export default Navigation