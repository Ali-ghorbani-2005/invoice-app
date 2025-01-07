

// import  { useEffect, useState } from 'react';
// import axios from 'axios';

// const AllInvoice = () => {
//   const [invoices, setInvoices] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchInvoices = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/invoice');
//         setInvoices(response.data); // فرض بر این است که داده‌ها به صورت آرایه‌ای از فاکتورها برمی‌گردند
//       } catch (err) {
//         setError('خطا در بارگذاری فاکتورها');
//         console.error(err);
//       }
//     };

//     fetchInvoices();
//   }, []); // [] به این معنی است که این اثر فقط در بارگذاری اولیه اجرا می‌شود

//   return (
//     <div className="p-6 bg-gray-50 rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-4">لیست فاکتورها</h1>
//       {error && <p className="text-red-500">{error}</p>}
//       <table className="min-w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-300 p-2">ردیف</th>
//             <th className="border border-gray-300 p-2">تاریخ</th>
//             <th className="border border-gray-300 p-2">تلفن</th>
//             <th className="border border-gray-300 p-2">نام فروشنده</th>
//             <th className="border border-gray-300 p-2">شرح کالا</th>
//             <th className="border border-gray-300 p-2">قیمت واحد</th>
//             <th className="border border-gray-300 p-2">تعداد</th>
//             <th className="border border-gray-300 p-2">مبلغ کل</th>
//           </tr>
//         </thead>
//         <tbody>
//           {invoices.map((invoice, index) => (
//             <tr key={index} className="hover:bg-gray-100 transition duration-200">
//               <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
//               <td className="border border-gray-300 p-2">{invoice.date}</td>
//               <td className="border border-gray-300 p-2">{invoice.phone}</td>
//               <td className="border border-gray-300 p-2">{invoice.sellerName}</td>
//               <td className="border border-gray-300 p-2">{invoice.rows.map(row => row.description).join(', ')}</td>
//               <td className="border border-gray-300 p-2">{invoice.rows.map(row => row.unitPrice).join(', ')}</td>
//               <td className="border border-gray-300 p-2">{invoice.rows.map(row => row.quantity).join(', ')}</td>
//               <td className="border border-gray-300 p-2">{invoice.rows.map(row => row.total).join(', ')}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AllInvoice; 


import { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllInvoice = () => {
  const [invoices, setInvoices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get('http://localhost:3000/invoice');
        setInvoices(response.data);
      } catch (err) {
        setError('خطا در بارگذاری فاکتورها');
        console.error(err);
      }
    };

    fetchInvoices();
  }, []);

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">لیست فاکتورها</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 gap-4">
        {invoices.map((invoice, index) => ( 
          <Link to={`/informationIN/${invoice.id}`}>
          <div key={index} className="border border-gray-300 p-4 rounded-lg bg-white shadow-sm">
            <h2 className="font-semibold text-lg">{invoice.sellerName}</h2>
          </div> 
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllInvoice;
