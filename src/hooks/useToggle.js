import useLocalStorage from './useLocalStorage';
const useToggle = (key, initValue) => {
  const [val, setVal] = useLocalStorage(key, initValue);

  const toggle = () => {
    setVal((prev) => !prev);
  };

  return [val, toggle];
};

export default useToggle;
