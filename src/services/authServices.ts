import { NUMBER, STRING } from "../types/type";

const ApiUrl = ' http://localhost:3000/login';

export const loginUser = async (email: STRING, password: NUMBER) => {
    try {
        const response = await fetch(ApiUrl)
        const data = await response.json();

        // const user = data.find(user => user.email === email && user.password === password); 
        const user = (data as Array<{ email: STRING; password: NUMBER }>).find(user => user.email === email && user.password === password);
        if (user) {
            return { success: true, message: 'ورود موفق' }
        } else {
            return { success: false, message: 'ورود ناموفق' }
        }
    }

    catch (error) {
        console.error('Error:', error);
        return { success: false, message: 'خطا در برقراری ارتباط با سرور.' };
    }

};