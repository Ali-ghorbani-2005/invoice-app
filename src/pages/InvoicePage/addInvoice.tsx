import { useState } from 'react';
import { InvoiceRow } from '../../types/type';
import { submitInvoice } from '../../services/invoiceService'; // اضافه کردن تابع ارسال

const AddInvoice = () => {
  const [rows, setRows] = useState<InvoiceRow[]>([{ description: '', quantity: '', unitPrice: '', total: '' }]);
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [error, setError] = useState<string | null>(null); // برای مدیریت خطا

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

  // تابع ارسال فاکتور
  const handleSubmit = async () => {
    // بررسی اینکه آیا ورودی‌ها خالی هستند
    if (!date || !phone || !sellerName || rows.some(row => !row.description || !row.quantity || !row.unitPrice)) {
      setError('لطفا تمام فیلدها را پر کنید.');
      return;
    }

    const invoiceData = {
      rows,
      date,
      phone,
      sellerName,
    };

    try {
      const result = await submitInvoice(invoiceData);
      alert('فاکتور با موفقیت ثبت شد!');
      // پاک کردن ورودی‌ها
      setRows([{ description: '', quantity: '', unitPrice: '', total: '' }]);
      setDate('');
      setPhone('');
      setSellerName('');
    } catch (error) {
      setError('خطا در ثبت فاکتور. لطفا دوباره تلاش کنید.');
    }
  };

  return (

    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-4xl font-extrabold text-gray-800">ثبت فاکتور</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="flex flex-col">
          <label className="mb-1 text-gray-600">تاریخ</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-600">تلفن</label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-600">نام فروشنده</label>
          <input
            type="text"
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <table className="min-w-full border-collapse border border-gray-300 mt-5">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2 text-center">مبلغ کل</th>
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
                  className="border border-gray-300 p-1 w-full text-right rounded-lg"
                  placeholder="مبلغ کل"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="number"
                  name="unitPrice"
                  value={row.unitPrice}
                  onChange={(event) => handleInputChange(index, event)}
                  className="border border-gray-300 p-1 w-full text-center rounded-lg"
                  placeholder="قیمت واحد"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="number"
                  name="quantity"
                  value={row.quantity}
                  onChange={(event) => handleInputChange(index, event)}
                  className="border border-gray-300 p-1 w-full text-center rounded-lg"
                  placeholder="تعداد"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  name="description"
                  value={row.description}
                  onChange={(event) => handleInputChange(index, event)}
                  className="border border-gray-300 p-1 w-full rounded-lg"
                  placeholder="شرح کالا"
                />
              </td>
              <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <strong className="text-lg">جمع کل: {calculateTotal()} تومان</strong>
      </div>

      <div className="mt-4 flex space-x-2">
        <button
          onClick={addRow}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          + افزودن ردیف
        </button>
        <button
          onClick={removeRow}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
        >
          - حذف آخرین ردیف
        </button>
        <button
          onClick={handleSubmit} // دکمه ثبت
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
        >
          ثبت فاکتور
        </button>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>} {/* نمایش خطا */}
    </div>
  );
};

export default AddInvoice;
