import React, { useState, useEffect } from "react";
export const MyAppContext = React.createContext();

const MyAppProvider = props => {
    const [checkDevice, setCheckDevice] = useState({
        isMobile: false,
        isIpad: false,
    });
   
    useEffect(() => {
        function handleResize() {
            if(window.innerWidth <= 640){
                setCheckDevice({
                    isMobile: true,
                    isIpad: false,
                })
            }else if (window.innerWidth >= 641 && window.innerWidth <=1024){
                setCheckDevice({
                    isMobile: false,
                    isIpad: true,
                })
            }else{
                setCheckDevice({
                    isMobile: false,
                    isIpad: false,
                })
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [])
    return <MyAppContext.Provider value={checkDevice}>
        {props.children}
    </MyAppContext.Provider>
};
export default MyAppProvider;
