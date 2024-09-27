import {Link} from 'react-router-dom'
import {NavStyle} from '../css/NavStyle'

const Nav =()=>{
    return(
        <NavStyle>
        <header className='header'>
            <div className='container'>
            <h1 className='logo'>CityLogo</h1>
            <ul>
            <Link to="/" className='navLink'>Home</Link>
            <Link to="/login" className='navLink'>Login</Link>
            </ul>
            </div>
        </header>    
        
        </NavStyle>
    )
}
export default Nav