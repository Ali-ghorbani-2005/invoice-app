import { useState } from 'react';
import { InvoiceRow } from '../../types/type';

const AddInvoice = () => {
  const [rows, setRows] = useState<InvoiceRow[]>([{ description: '', quantity: '', unitPrice: '', total: '' }]);

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newRows = [...rows];
    newRows[index][name as keyof InvoiceRow] = value;

    // محاسبه مبلغ کل
    if (name === 'quantity' || name === 'unitPrice') {
      newRows[index].total = (Number(newRows[index].quantity) * Number(newRows[index].unitPrice)).toFixed(2);
    }

    setRows(newRows);
  };

  const addRow = () => {
    setRows([...rows, { description: '', quantity: '', unitPrice: '', total: '' }]);
  };

  const removeRow = () => {
    if (rows.length > 1) {
      const newRows = [...rows];
      newRows.pop(); // حذف آخرین ردیف
      setRows(newRows);
    }
  };

  // محاسبه جمع کل
  const calculateTotal = () => {
    return rows.reduce((acc, row) => acc + (Number(row.total) || 0), 0).toFixed(2);
  };

  return (
    <div className="p-4"> 
      

       <div className="flex justify-center items-center">
         <p className="text-4xl font-extrabold">ثبت فاکتور</p>
       </div>

      <table className="min-w-full border-collapse border border-gray-300 mt-5">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2  text-center">مبلغ کل</th>
            <th className="border border-gray-300 p-2 text-center">قیمت واحد</th>
            <th className="border border-gray-300 p-2 text-center">تعداد</th>
            <th className="border border-gray-300 p-2 text-center">شرح کالا</th>
            <th className="border border-gray-300 p-2 text-center">ردیف</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100 transition duration-200">
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  name="total"
                  value={row.total}
                  readOnly
                  className="border border-gray-300 p-1 w-full text-right"
                  placeholder="مبلغ کل"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="number"
                  name="unitPrice"
                  value={row.unitPrice}
                  onChange={(event) => handleInputChange(index, event)}
                  className="border border-gray-300 p-1 w-full text-center "
                  placeholder="قیمت واحد"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="number"
                  name="quantity"
                  value={row.quantity}
                  onChange={(event) => handleInputChange(index, event)}
                  className="border border-gray-300 p-1 w-full text-center"
                  placeholder="تعداد"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  name="description"
                  value={row.description}
                  onChange={(event) => handleInputChange(index, event)}
                  className="border border-gray-300 p-1 w-full"
                  placeholder="شرح کالا"
                />
              </td>
              <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-2">
        <strong className="text-lg">جمع کل: {calculateTotal()} تومان</strong>
      </div>
      <div className="mt-4">
        <button
          onClick={addRow}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          + افزودن ردیف
        </button>
        <button
          onClick={removeRow}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200 ml-2"
        >
          - حذف آخرین ردیف
        </button>
      </div>
    </div>
  );
};

export default AddInvoice;
