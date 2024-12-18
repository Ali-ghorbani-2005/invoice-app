// import { useNavigate, Link } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { loginUser } from '../../services/authServices';

// function Login() {
//   const { handleSubmit, setError } = useForm();
//   const navigate = useNavigate();

//   const onSubmit = async (data: any) => {
//     const result = await loginUser(data.email, data.password);

//     if (result.success) {

//       navigate('/'); // هدایت به صفحه خانه 
//       alert(result.message);
//     } else {
//       setError('email', { type: 'manual', message: result.message });
//       setError('password', { type: 'manual', message: result.message });
//     }
//   };
//   return (
//     <>
//       <div className="bg-slate-100 w-full h-full flex flex-col justify-center items-center">
//         <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
//           <div className="bg-red-500 rounded-lg shadow-lg w-full p-6 mt-10">
//             <div className="text-center">
//               <p className="text-3xl font-bold text-white">ورود</p>
//             </div>

//             <div className="mt-6">
//               <input
//                 type="text"
//                 className="w-full h-12 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 p-2 transition duration-200"
//                 placeholder="نام کاربری"
//               />
//             </div>

//             <div className="mt-4">
//               <input
//                 type="password"
//                 className="w-full h-12 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 p-2 transition duration-200"
//                 placeholder="رمز عبور"
//               />
//             </div>

//             <div className="flex justify-center items-center mt-6">
//               <button type='submit' className="bg-green-600 w-full h-12 rounded-lg hover:bg-green-700 transition duration-300 text-white font-semibold">
//                 ورود
//               </button>
//             </div>

//             <div className="mt-4 text-center">
//               <Link to="/signUp" className="text-blue-600 hover:underline">ثبت نام نکرده‌اید؟ ثبت نام کنید</Link>
//             </div>

//             <div className='text-center mt-2'>
//               <Link to="/" className="text-blue-600 hover:underline">بازگشت؟</Link>
//             </div>
//           </div>
//         </form>

//         <img src="imgs/icons/login-p.png" className="w-full max-w-lg mt-6" alt="Login Illustration" />
//       </div>


//     </>
//   )
// }

// export default Login 



import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../services/authServices';

function Login() {
  const { handleSubmit, register, setError } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data:any) => {
    const result = await loginUser(data.email, data.password);

    if (result.success) {
      alert(result.message);
      navigate('/'); // هدایت به صفحه خانه 
    } else {
      setError('email', { type: 'manual', message: result.message });
      setError('password', { type: 'manual', message: result.message });
    }
  };

  return (
    <div className="bg-slate-100 w-full h-full flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <div className="bg-red-500 rounded-lg shadow-lg w-full p-6 mt-10">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">ورود</p>
          </div>

          <div className="mt-6">
            <input
              type="email"
              {...register('email', { required: 'لطفا نام کاربری را وارد کنید' })}
              className="w-full h-12 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 p-2 transition duration-200"
              placeholder="نام کاربری"
            />
          </div>

          <div className="mt-4">
            <input
              type="password"
              {...register('password', { required: 'لطفا رمز عبور را وارد کنید' })}
              className="w-full h-12 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 p-2 transition duration-200"
              placeholder="رمز عبور"
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button type='submit' className="bg-green-600 w-full h-12 rounded-lg hover:bg-green-700 transition duration-300 text-white font-semibold">
              ورود
            </button>
          </div>

          <div className="mt-4 text-center">
            <Link to="/signUp" className="text-blue-600 hover:underline">ثبت نام نکرده‌اید؟ ثبت نام کنید</Link>
          </div>

          <div className='text-center mt-2'>
            <Link to="/" className="text-blue-600 hover:underline">بازگشت؟</Link>
          </div>
        </div>
      </form>

      <img src="imgs/icons/login-p.png" className="w-full max-w-lg mt-6" alt="Login Illustration" />
    </div>
  );
}

export default Login;









// import { useNavigate, Link } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { loginUser } from '../../services/authServices';
// import './auth.css'

// export default function Login() {
//     const { handleSubmit, setError, register } = useForm();
//     const navigate = useNavigate();

//     const onSubmit = async (data) => {
//         const result = await loginUser(data.email, data.password);

//         if (result.success) {

//             navigate('/home'); // هدایت به صفحه خانه
//             alert(result.message);
//         } else {
//             setError('email', { type: 'manual', message: result.message });
//             setError('password', { type: 'manual', message: result.message });
//         }
//     };

//     return (
//         <>
//             <div className='background-div'>
//                 <div className='flex justify-center items-center ml-32 '>

//                     <div className="mt-20 mr-[800px] relative  h-96" >
//                         <form onSubmit={handleSubmit(onSubmit)} className=''>
//                             <div className='-mt-28 ml-40' >
//                                 <div className=' '>
//                                     <p className='ml-10 text-3xl font-semibold'>Welcome</p>
//                                     <p className='font-semibold mt-5 ml-8 flex'>Do you not have an account? <Link to='/signup'> <p className='hover:text-yellow-400'>Sign Up</p> </Link></p>
//                                     <div className=' border-2 border-gray-400 w-[390px] mt-10 rounded-lg ml-10' >
//                                         <input
//                                             type="email"
//                                             placeholder="Email"
//                                             className=' w-96 h-10 rounded-lg'
//                                             {...register('email', { required: 'ایمیل الزامی است.' })}
//                                         />
//                                     </div>
//                                     <div className=' border-2 border-gray-400 w-[390px] mt-10 rounded-lg ml-10'>
//                                         <input
//                                             type="password"
//                                             placeholder="Password"
//                                             className=' w-96 h-10 rounded-lg'
//                                             {...register('password', { required: 'رمز عبور الزامی است.' })}
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className='ml-20 mt-10'>
//                                     <button type='submit' className='bg-yellow-300 w-72 h-8 text-xl font-semibold rounded-lg hover:bg-yellow-400 hover:text-white'>ورود</button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
