import './Header.css'

function Header({name, subname}) {
    return ( 
        <>
            <header className='auctionHeader'>
                <h2>{name}</h2>
                <span>{subname}</span>
                <h1>ROBÔ DE LEILÕES</h1>
            </header>
        </>
        
     );
}

export default Header;