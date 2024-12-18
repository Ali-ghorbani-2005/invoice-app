// import { NUMBER, STRING } from '../types/type';

// const ApiUrl = ' http://localhost:3000/User';

// export const loginUser = async (email: STRING, password: NUMBER) => {
//     try {
//         const response = await fetch(ApiUrl)
//         const data = await response.json();

//         // const user = data.find(user => user.email === email && user.password === password); 
//         const user = (data as Array<{ email: STRING; password: NUMBER }>).find(user => user.email === email && user.password === password);
//         if (user) {
//             return { success: true, message: 'ورود موفق' }
//         } else {
//             return { success: false, message: 'ورود ناموفق' }
//         }
//     }

//     catch (error) {
//         console.error('Error:', error);
//         return { success: false, message: 'خطا در برقراری ارتباط با سرور.' };
//     }

// }; 




import { STRING } from '../types/type';

const ApiUrl = 'http://localhost:3000/User';

export const loginUser = async (email: STRING, password: STRING) => {
    try {
        const response = await fetch(ApiUrl);
        const data = await response.json();

        const user = (data as Array<{ email: STRING; password: STRING }>).find(user => user.email === email && user.password === password);
        if (user) {
            return { success: true, message: 'ورود موفق' };
        } else {
            return { success: false, message: 'ورود ناموفق' };
        }
    } catch (error) {
        console.error('Error:', error);
        return { success: false, message: 'خطا در برقراری ارتباط با سرور.' };
    }
};




// useSignUp.ts
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';


export const useSignUp = () => {
    const navigate = useNavigate();

    const Validation = yup.object().shape({
        name: yup.string().required("وارد کردن اسم الزامی است"),
        lastName: yup.string().required("وارد کردن فامیلی الزامی است"),
        email: yup.string().required("وارد کردن ایمیل الزامی است"),
        password: yup.string().required("وارد کردن رمز الزامی است"), // تغییر به string
        phone: yup.string().required("وارد کردن شماره تلفن الزامی است") // تغییر به string
    });

    const addUser = async (data: any) => {
        try {
            const response = await fetch('http://localhost:3000/User', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                console.log("موفق");
                navigate('/');
            } else {
                console.error('خطا در ارسال درخواست:', response.statusText);
            }
        } catch (error) {
            console.error('خطا:', error);
        }
    };

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(Validation) });

    return { register, handleSubmit, errors, addUser };
};


