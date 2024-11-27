



function Login() {
  return (
   <>
   
  <div>
    <p>login</p>
  </div>

   </>
  )
}

export default Login







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
