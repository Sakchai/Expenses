import { Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../app/authenticationSlice';

const Navbar = () => {
    const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);
    //const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const dispatch = useDispatch();

    return <Nav className='navbar' style={{ backgroundColor: '#e4fff2' }}>
        <h1 style={{ fontFamily: 'Brush Script MT, cursive' }}>My Expenses</h1>
        {isLoggedIn
            ?
            <div style={{display:'flex', alignItems:'center'}}>
                <NavLink style={{ marginLeft: '1rem' }} variant='link' to='/'>Home</NavLink>
                <NavLink style={{ marginLeft: '1rem' }} variant='link' to='/statistics'>Statistics</NavLink>
                <Button variant='link' href='/signin' onClick={() => { dispatch(logout()) }}>Log out</Button>
            </div>
            : <div style={{ display: 'flex' }}>
                <NavLink to="/signup">Sign up</NavLink>
                <NavLink to="/signin" style={{ marginLeft: '1rem' }}>Sign in</NavLink>
            </div>}
    </Nav >
};

export default Navbar;