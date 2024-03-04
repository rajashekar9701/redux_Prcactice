

import { useDispatch,useSelector } from 'react-redux';
import classes from './Auth.module.css';
import { login } from './AuthirizationConfig';

const Auth = () => {


 var dispatch=  useDispatch()

 var isUSerLoggedIn = useSelector(state=>state.isUserLoggedIn)

if(!isUSerLoggedIn)
  return (
    <main className={classes.auth}>
      <section>
        <form >
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={()=>dispatch(login())}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;