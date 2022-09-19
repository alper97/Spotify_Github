import Navigation from "./Navbar/Navigation";
import Auth from "./Navbar/Auth";

 function Navbar() {

  

  return (
    <div className='h-14 flex items-center justify-between px-8'>
        <Navigation/>
        
        <Auth/>
    </div>
  )
}
export default Navbar