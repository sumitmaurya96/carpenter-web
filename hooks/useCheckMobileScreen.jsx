import { useContext } from 'react';
import { MyAppContext } from './MyAppProvider';



function useCheckMobileScreen() {
  const isMobile = useContext(MyAppContext);
  return isMobile;
}

export default useCheckMobileScreen;