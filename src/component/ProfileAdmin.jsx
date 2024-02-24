import { useRouter } from 'next/router';
import { _adminProfile } from '../network/auth';
import React, { useContext, useEffect, useState } from 'react'
import { ApplicationCtx } from '@/context/ApplicatonCtx';

const ProfileAdmin = () => {
   const [profile, setProfile] = useState({});
    const routes = useRouter();
    const { isUserLoggedIn, setIsUserLoggedIn } = useContext(ApplicationCtx);


   useEffect(()=>{
    _adminProfile().then((res)=> {
        setProfile(res.data);
        console.log("hellookjnfijn isjfh iuhfiuh iueshrfiu iurfh", res)
    })
   },[])

   const handleLogOut=(e)=>{
    localStorage.removeItem("token");
    setIsUserLoggedIn(false);
    routes.push("/");

   }

    return (
        <div className='container--responsive flex flex--justify-content-center flex--align-items-center mt--100'>
            <div className="delete bg--shadow bg--radius font--center pd--20 font--center">
                <div className='mt--30 font--center'>
                        <span className="flex flex--justify-content-between flex--align-items-center">
                            <span className='font--bold'>Name :- </span>
                            <span>{profile.username}</span>
                        </span>
                        <span className="flex flex--justify-content-between flex--align-items-center mt--20">
                            <span className='font--bold'>Email :-</span>
                            <span>{profile.email}</span>
                        </span>
                        <span className="flex flex--justify-content-between flex--align-items-center mt--20">
                            <span className='font--bold'>Moble No :--</span>
                            <span>{profile.phone}</span>
                        </span>
                        
             </div>
                <button className='bg--maroon bg--radius pd--5 fs--20 color--white width--column-90 mt--30' onClick={handleLogOut}>Logout</button>
            </div>
        </div>
    )
}

export default ProfileAdmin