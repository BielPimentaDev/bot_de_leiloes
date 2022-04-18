import './Header.css'
import { MdOutlineRoofing } from 'react-icons/md'

function Header({name, subname}) {
    return ( 
        <>
            <header className='auctionHeader'>
                <h2>{name}</h2>
                <p>{subname}</p>
                <div className='logoContainer'> <MdOutlineRoofing className='logoIcon'/>  <div><span className='logo'>A</span><span className='logo U'>U</span><span className='logo'>CTION</span></div></div>
            </header>
        </>
        
     );
}

export default Header;