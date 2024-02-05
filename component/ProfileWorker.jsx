import React from 'react'

const ProfileWorker = () => {
    return (
        <div className='container--responsive flex flex--justify-content-center flex--align-items-center mt--100'>
            <div className="delete bg--shadow bg--radius font--center pd--20 font--center">
            <div className='mt--30 font--center'>
                        <span className="flex flex--justify-content-between flex--align-items-center">
                            <span className='font--bold'>Name :- </span>
                            <span>RaM Gopal Varma</span>
                        </span>
                        <span className="flex flex--justify-content-between flex--align-items-center mt--20">
                            <span className='font--bold'>Email :-</span>
                            <span>ram@gmial.com</span>
                        </span>
                        <span className="flex flex--justify-content-between flex--align-items-center mt--20">
                            <span className='font--bold'>Moble No :--</span>
                            <span>9852852748</span>
                        </span>
                        
                    </div>
                <button className='bg--maroon bg--radius pd--5 fs--20 color--white width--column-90 mt--30'>Logout</button>
            </div>
        </div>
    )
}

export default ProfileWorker