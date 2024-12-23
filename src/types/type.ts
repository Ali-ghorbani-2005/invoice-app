export type STRING = string;
export type NUMBER = number;
export type BOOLEAN = boolean;
export type USER = {
    id: number,
    name: string,
    lastName?: string,
    email: string,
    password: number,
    age?: number
}


export type SlickSettings = {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    [key: string]: any; // برای اضافه کردن هر گزینه‌ی دیگر
}


// export type InvoiceRow = {
//     description: string;
//     quantity: number | string;
//     unitPrice: number | string;
//     total: string;
// }
 // types/type.ts

export interface InvoiceRow {
    description: string; // شرح کالا
    quantity: string;    // تعداد (به صورت رشته)
    unitPrice: string;   // قیمت واحد (به صورت رشته)
    total: string;       // مبلغ کل (به صورت رشته)
}