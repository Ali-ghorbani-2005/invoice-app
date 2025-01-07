
// import { useParams } from 'react-router-dom';
// import UseFetch from '../../Hooks/useFetch';

// export default function InformationIN() {
//   const { id } = useParams();
//   const url = "http://localhost:3000/invoice/" + id;
//   const { data, isLoading, error } = UseFetch(url);

//   if (isLoading) {
//     return <p>در حال بارگذاری...</p>;
//   }

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   if (!data) {
//     return <p>داده‌ای وجود ندارد.</p>;
//   }

//   return (
//     <div>
      
//     </div>
//   );
// } 


import { useParams } from 'react-router-dom';
import UseFetch from '../../Hooks/useFetch';

interface Row {
  description: string;
  quantity: string;
  unitPrice: string;
  total: string;
}

interface Invoice {
  rows: Row[];
  date: string;
  phone: string;
  sellerName: string;
  id: number;
}

export default function InformationIN() {
  const { id } = useParams<{ id: string }>(); // نوع id را مشخص کنید
  const url = "http://localhost:3000/invoice/" + id;
  const { data, isLoading, error } = UseFetch<Invoice>(url); // نوع داده را مشخص کنید

  if (isLoading) {
    return <p>در حال بارگذاری...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!data) {
    return <p>داده‌ای وجود ندارد.</p>;
  }

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">جزئیات فاکتور</h1>
      <p><strong>نام فروشنده:</strong> {data.sellerName}</p>
      <p><strong>تاریخ:</strong> {data.date}</p>
      <p><strong>تلفن:</strong> {data.phone}</p>

      <table className="min-w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">شرح کالا</th>
            <th className="border border-gray-300 p-2">تعداد</th>
            <th className="border border-gray-300 p-2">قیمت واحد</th>
            <th className="border border-gray-300 p-2">مبلغ کل</th>
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100 transition duration-200">
              <td className="border border-gray-300 p-2">{row.description}</td>
              <td className="border border-gray-300 p-2">{row.quantity}</td>
              <td className="border border-gray-300 p-2">{row.unitPrice}</td>
              <td className="border border-gray-300 p-2">{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
