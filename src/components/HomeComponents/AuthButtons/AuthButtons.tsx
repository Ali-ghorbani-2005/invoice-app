import {  Link } from 'react-router-dom';

function AuthButtons() {
    return (
        <>

            <div className="flex gap-4  ml-5">
              <Link to="/signUp">
              
               <button className="border-2 border-blue-700 w-32 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
                    ثبت نام
                </button> 

                </Link> 
               
               <Link to="/login">
                <button className="border-2 border-blue-700 w-32 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
                    ورود
                </button> 
                </Link>
            </div>

        </>
    )
}

export default AuthButtons

