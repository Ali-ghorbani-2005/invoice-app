// import { Link, useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';

// export default function SignUp() {
//   const navigate = useNavigate()

//   const Validation = yup.object().shape({
//     // name:yup.string().required("وارد کردن اسم الزامی است") 
//     name: yup.string().required("وارد کردن اسم الزامی است"),
//     lastName: yup.string().required("وارد کردن فامیلی الزامی است"),
//     email: yup.string().required("وارد کردن ایمیل الزامی است"),
//     password: yup.number().required("وارد کردن رمز الزامی است"),
//     phone: yup.number().required("وارد کردن شماره تلفن الزامی است")
//   })

//   const addUser = async (data: any) => {
//     try {
//       const response = await fetch('  http://localhost:3000/User', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data)
//       });
//       if (response.ok) {
//         console.log("موفق")
//         navigate('/')
//       } else {
//         console.error('خطا در ارسال درخواست:', response.statusText);
//       }

//     } catch (error) {
//       console.error('خطا:', error);
//     }
//   }

//   const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(Validation) })

//   return (
//     <>


//       <div className="flex justify-center items-center min-h-screen bg-gray-100">
//         <div className="bg-yellow-200 flex flex-col justify-center items-center mt-10 w-96 h-auto p-8 rounded-lg shadow-lg">

//           <h2 className="text-2xl font-bold mb-6">ثبت نام</h2>
//           <form onSubmit={handleSubmit(addUser)}>
//             <input type="text" className="w-full h-10 mb-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="نام" {...register('name')} />
//             {errors.name && <p className='text-red-600 -mt-3'>{errors.name.message}</p>}
//             <input type="text" className="w-full h-10 mb-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="نام خانوادگی" {...register('lastName')} />
//             {errors.lastName && <p className='text-red-600 -mt-3'>{errors.lastName.message}</p>}
//             <input type="email" className="w-full h-10 mb-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="ایمیل" {...register('email')} />
//             {errors.email && <p className='text-red-600 -mt-3'>{errors.email.message}</p>}
//             <input type="password" className="w-full h-10 mb-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="رمز عبور" {...register('password')} />
//             {errors.password && <p className='text-red-600 -mt-3'>{errors.password.message}</p>}
//             <input type="number" className="w-full h-10 mb-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="سن" {...register('phone')} />
//             {errors.phone && <p className='text-red-600 -mt-3'>{errors.phone.message}</p>}

//             <button className="bg-yellow-300 mt-4 w-full h-10 rounded-lg hover:bg-yellow-400 transition duration-200">
//               <p className="text-lg font-semibold">ثبت نام</p>
//             </button>
//           </form>

//           <div className="mt-4">
//             <Link to="/login" className="text-blue-600 hover:underline">ثبت نام کرده‌اید؟ وارد شوید</Link>
//           </div>
//           <div>
//             <Link to="/" className="text-blue-600 hover:underline">بازگشت؟</Link>
//           </div>
//         </div>

//         <div className="hidden md:block">
//           <img src="imgs/icons/rb_1.png" className="w-[760px] h-[600px] ml-10" alt="" />
//         </div>
//       </div>

//     </>
//   )
// } 









// SignUp.tsx
import { Link } from 'react-router-dom';
import { useSignUp } from '../../services/authServices'; // مسیر را به درستی تنظیم کنید

export default function SignUp() {
  const { register, handleSubmit, errors, addUser } = useSignUp();

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-yellow-200 flex flex-col justify-center items-center mt-10 w-96 h-auto p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">ثبت نام</h2>
          <form onSubmit={handleSubmit(addUser)}>
            <input type="text" className="w-full h-10 mb-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="نام" {...register('name')} />
            {errors.name && <p className='text-red-600 -mt-3'>{errors.name.message}</p>}
            <input type="text" className="w-full h-10 mb-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="نام خانوادگی" {...register('lastName')} />
            {errors.lastName && <p className='text-red-600 -mt-3'>{errors.lastName.message}</p>}
            <input type="email" className="w-full h-10 mb-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="ایمیل" {...register('email')} />
            {errors.email && <p className='text-red-600 -mt-3'>{errors.email.message}</p>}
            <input type="password" className="w-full h-10 mb-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="رمز عبور" {...register('password')} />
            {errors.password && <p className='text-red-600 -mt-3'>{errors.password.message}</p>}
            <input type="number" className="w-full h-10 mb-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="شماره تلفن" {...register('phone')} />
            {errors.phone && <p className='text-red-600 -mt-3'>{errors.phone.message}</p>}

            <button className="bg-yellow-300 mt-4 w-full h-10 rounded-lg hover:bg-yellow-400 transition duration-200">
              <p className="text-lg font-semibold">ثبت نام</p>
            </button>
          </form>

          <div className="mt-4">
            <Link to="/login" className="text-blue-600 hover:underline">ثبت نام کرده‌اید؟ وارد شوید</Link>
          </div>
          <div>
            <Link to="/" className="text-blue-600 hover:underline">بازگشت؟</Link>
          </div>
        </div>

        <div className="hidden md:block">
          <img src="imgs/icons/rb_1.png" className="w-[760px] h-[600px] ml-10" alt="" />
        </div>
      </div>
    </>
  );
}

