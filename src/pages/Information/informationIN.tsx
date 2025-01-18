// import { useParams } from 'react-router-dom';
// import UseFetch from '../../Hooks/useFetch';

// interface Row {
//   description: string;
//   quantity: string;
//   unitPrice: string;
//   total: string;
// }

// interface Invoice {
//   rows: Row[]; 
//   isLoading:boolean;
//   date: string;
//   phone: string;
//   sellerName: string;
//   id: number;
// } 

// export default function InformationIN() {
//   const { id } = useParams<{ id: string }>(); // نوع id را مشخص کنید
//   const url = "http://localhost:3000/invoice/" + id;
//   const { data, isLoading, error } = UseFetch<Invoice>(url); // نوع داده را مشخص کنید

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
//     <div className="p-6 bg-gray-50 rounded-lg shadow-md "> 
//     <div className='text-center bg-green-400 h-10 rounded-lg'>
//       <h1 className="text-2xl font-bold mb-4">ابزار نووین</h1> 
//       </div> 
//       <div className='mt-4'>
//       <p className='text-right'><strong>نام فروشنده:</strong> {data.sellerName}</p>
//       <p className='text-right'><strong>تاریخ:</strong> {data.date}</p>
//       <p className='text-right'><strong>تلفن:</strong> {data.phone}</p> 
//       </div>

//       <table className="min-w-full border-collapse border border-gray-300 mt-4">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-300 p-2">مبلغ کل</th>  
//             <th className="border border-gray-300 p-2">قیمت واحد</th> 
//             <th className="border border-gray-300 p-2">تعداد</th>
//             <th className="border border-gray-300 p-2">شرح کالا</th>
//           </tr>
//         </thead>
//         <tbody>
//            {data.rows.map((row, index) => (
//             <tr key={index} className="hover:bg-gray-100 transition duration-200">
//               <td className="border border-gray-300 p-2 text-center font-extrabold">{row.total}</td> 
//               <td className="border border-gray-300 p-2 text-center font-extrabold">{row.unitPrice}</td>  
//               <td className="border border-gray-300 p-2 text-center font-extrabold">{row.quantity}</td>
//               <td className="border border-gray-300 p-2 text-center text-xl font-extrabold">{row.description}</td>
//             </tr>
//           ))} 

//         </tbody>
//       </table>
//     </div>
//   );
// }  



// import { useParams } from 'react-router-dom';
// import UseFetch from '../../Hooks/useFetch';

// interface Row {
//   description: string;
//   quantity: string;
//   unitPrice: string;
//   total: string;
// }

// interface Invoice {
//   rows: Row[];
//   isLoading: boolean;
//   date: string;
//   phone: string;
//   sellerName: string;
//   id: number;
// }

// export default function InformationIN() {
//   const { id } = useParams<{ id: string }>();
//   const url = "http://localhost:3000/invoice/" + id;
//   const { data, isLoading, error } = UseFetch<Invoice>(url);

//   if (isLoading) {
//     return <p>در حال بارگذاری...</p>;
//   }

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   if (!data) {
//     return <p>داده‌ای وجود ندارد.</p>;
//   }

//   const handlePrint = () => {
//     const printContents = document.getElementById('invoice-section')?.innerHTML;
//     const newWindow = window.open('', '', 'width=800,height=600');
//     newWindow!.document.write(`
//       <html>
//         <head>
//           <title>پرینت فاکتور</title>
//           <style>
//             body { font-family: Arial, sans-serif; }
//             table { width: 100%; border-collapse: collapse; }
//             th, td { border: 1px solid black; padding: 8px; text-align: center; }
//           </style>
//         </head>
//         <body onload="window.print(); window.close();">
//           <div>${printContents}</div>
//         </body>
//       </html>
//     `);
//     newWindow!.document.close();
//   };

//   return (
//     <div className="p-6 bg-gray-50 rounded-lg shadow-md">
//       <div className='text-center bg-green-400 h-10 rounded-lg'>
//         <h1 className="text-2xl font-bold mb-4">ابزار نووین</h1>
//       </div>
//       <div className='mt-4' id="invoice-section">
//         <p className='text-right'><strong>نام فروشنده:</strong> {data.sellerName}</p>
//         <p className='text-right'><strong>تاریخ:</strong> {data.date}</p>
//         <p className='text-right'><strong>تلفن:</strong> {data.phone}</p>
//       </div>

//       <table className="min-w-full border-collapse border border-gray-300 mt-4">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-300 p-2">مبلغ کل</th>
//             <th className="border border-gray-300 p-2">قیمت واحد</th>
//             <th className="border border-gray-300 p-2">تعداد</th>
//             <th className="border border-gray-300 p-2">شرح کالا</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.rows.map((row, index) => (
//             <tr key={index} className="hover:bg-gray-100 transition duration-200">
//               <td className="border border-gray-300 p-2 text-center font-extrabold">{row.total}</td>
//               <td className="border border-gray-300 p-2 text-center font-extrabold">{row.unitPrice}</td>
//               <td className="border border-gray-300 p-2 text-center font-extrabold">{row.quantity}</td>
//               <td className="border border-gray-300 p-2 text-center text-xl font-extrabold">{row.description}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <button onClick={handlePrint} className="mt-4 bg-blue-500 text-white p-2 rounded">
//         پرینت فاکتور
//       </button>
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
  isLoading: boolean;
  date: string;
  phone: string;
  sellerName: string;
  id: number;
}

export default function InformationIN() {
  const { id } = useParams<{ id: string }>();
  const url = "http://localhost:3000/invoice/" + id;
  const { data, isLoading, error } = UseFetch<Invoice>(url);

  if (isLoading) {
    return <p>در حال بارگذاری...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!data) {
    return <p>داده‌ای وجود ندارد.</p>;
  }

  const handlePrint = () => {
    const printContents = document.getElementById('invoice-section')?.innerHTML;
    const newWindow = window.open('', '', 'width=800,height=600');
    newWindow!.document.write(`
      <html>
        <head>
          <title>پرینت فاکتور</title>
          <style>
            body { font-family: Arial, sans-serif; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid black; padding: 8px; text-align: center; }
          </style>
        </head>
        <body onload="window.print(); window.close();">
          <div>${printContents}</div>
        </body>
      </html>
    `);
    newWindow!.document.close();
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
      <div className='text-center bg-green-400 h-10 rounded-lg'>
        <h1 className="text-2xl font-bold mb-4">ابزار نووین</h1>
      </div>
      <div className='mt-4' id="invoice-section">
        <p className='text-right'><strong>نام فروشنده:</strong> {data.sellerName}</p>
        <p className='text-right'><strong>تاریخ:</strong> {data.date}</p>
        <p className='text-right'><strong>تلفن:</strong> {data.phone}</p>

        <table className="min-w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">مبلغ کل</th>
              <th className="border border-gray-300 p-2">قیمت واحد</th>
              <th className="border border-gray-300 p-2">تعداد</th>
              <th className="border border-gray-300 p-2">شرح کالا</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100 transition duration-200">
                <td className="border border-gray-300 p-2 text-center font-extrabold">{row.total}</td>
                <td className="border border-gray-300 p-2 text-center font-extrabold">{row.unitPrice}</td>
                <td className="border border-gray-300 p-2 text-center font-extrabold">{row.quantity}</td>
                <td className="border border-gray-300 p-2 text-center text-xl font-extrabold">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={handlePrint} className="mt-4 bg-blue-500 text-white p-2 rounded">
        پرینت فاکتور
      </button>
    </div>
  );
}



