

import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { logout } from './AuthirizationConfig';


const HeaderAuth = () => {



   var isUSerLoggedIn = useSelector(state=>state.isUserLoggedIn)
  var dispatch=  useDispatch()

   if(isUSerLoggedIn)

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
    
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={()=>dispatch(logout())} >Logout</button>
            </li>
          </ul>
        </nav>
    
    </header>
  );
};

export default HeaderAuth;