import { useAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
const Auth0 = () => {
  const {
    isLoading,
    error,
    loginWithPopup,
    logout,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();
  const getToken = async () => {
    const token = await getAccessTokenSilently();
    console.log('token', token);
  };
  getToken();
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>Authentication Failed</p>;
  }
  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={() => loginWithPopup()}>Sign In</button>
      ) : (
        <button onClick={() => logout()}>Sign Out</button>
      )}
      <Profile />
    </div>
  );
};

export default Auth0;
