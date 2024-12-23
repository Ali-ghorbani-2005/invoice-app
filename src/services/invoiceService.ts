// invoiceService.ts
import { InvoiceRow } from '../types/type';

const ApiUrl = 'http://localhost:3000/invoice';

export const submitInvoice = async (invoiceData: { rows: InvoiceRow[]; date: string; phone: string; sellerName: string }) => {
    try {
        const response = await fetch(ApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(invoiceData),
        });

        if (!response.ok) {
            throw new Error('Failed to submit invoice');
        }

        const result = await response.json();
        return result; // می‌توانی اطلاعات برگشتی از سرور را بازگردانی کنی
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};