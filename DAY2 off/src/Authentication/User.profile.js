import { useSelector } from 'react-redux';
import classes from './UserProfile.module.css';

const UserProfile = () => {



  var isUSerLoggedIn = useSelector(state=>state.isUserLoggedIn)


  if(isUSerLoggedIn)

  return (


    <main className={classes.profile}>
      <h2>My User Profile</h2>
    </main>
  );
 
};

export default UserProfile;