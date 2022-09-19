import Menu from "./Menu"
import Playlist from "./Sidebar/Playlist"

export default function Sidebar() {
  return (
    <aside className='w-60 bg-black flex flex-col '>
      <Menu/>
      <Playlist/>
      <nav className="mt-6"/>
    </aside>
  )
}
