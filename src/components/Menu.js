import { Icon } from './img/Icons';
import { NavLink } from 'react-router-dom';
import { AiFillPlusSquare } from "react-icons/ai";
import { RiHeartFill } from "react-icons/ri";

export default function Menu() {
  return (
    <nav className='px-6 mt-8' >
        <a href='/' >
            <Icon name="logo" />
        </a>
        <ul className='grid gap-1 pt-7 text-sm font-semibold'>
            <li>
                <NavLink to={'/'} className='flex gap-x-3 items-center opacity-70 p-2 rounded-sm hover:opacity-100'>
                    <Icon name="home" />
                    Ana Sayfa
                </NavLink>
            </li>
            <li>
                <NavLink to={'/search'} className='flex gap-x-3 items-center opacity-70  p-2 rounded-sm hover:opacity-100'>
                <Icon name="search" />
                    Ara
                </NavLink>
            </li>
            <li>
                <NavLink to={'/collection'} className='flex gap-x-3 items-center opacity-70 p-2 rounded-sm hover:opacity-100'>
                <Icon name="collection" />
                    Kitaplığın
                </NavLink>
            </li>
        </ul>

        <nav className='my-6 text-sm font-semibold'>
            <ul>
                <li>
                    <NavLink to={'/mylist'} className='flex gap-x-3 opacity-70 p-2 rounded-sm hover:opacity-100 items-center'>
                        <AiFillPlusSquare size={28}/>
                        Çalma Listesi Oluştur
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/mylike'} className='flex gap-x-3 opacity-70 p-2 rounded-sm hover:opacity-100 items-center' >
                        <div className='p-[6px] ml-[2px] bg-gradient-to-br from-purple-700 to-blue-400'>
                            <RiHeartFill size={12} width={28} />
                        </div>
                        Beğenilen Şarkılar
                    </NavLink>
                </li>
            </ul>
        </nav>
    </nav>
  )
}
