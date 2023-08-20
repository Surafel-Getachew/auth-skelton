import axios from '../api/axios';
import useAuth from './useAuth';
const useRefreshToken = () => {
  const { setAuth } = useAuth();
  // This function setAuth to a new accessToken
  // And returns the newly fetched accessToken
  const refresh = async () => {
    const response = await axios.get(
      '/refresh',
      { withCredentials: true } // This line is important because it's the one that sends cookie in the request
    );
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response?.data?.accessToken);
      return {
        ...prev,
        accessToken: response.data.accessToken,
        roles: response.data.roles,
      };
    });
    return response?.data?.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
