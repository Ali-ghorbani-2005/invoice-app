import { Link } from 'react-router-dom';
import { useState } from 'react';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        // <div className="flex h-screen">
        //     {/* Sidebar */}
        //     <div className={`fixed top-0 right-0 h-full bg-gray-300 text-white transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        //         <div className="p-4">
        //             <h2 className="text-lg font-bold">Sidebar</h2>
        //             <ul>
        //                 <li className="py-2 text-right">ثبت فاکتور جدید</li>
        //                 <li className="py-2 text-right">مشاهده همه فاکتور ها</li>
        //                 <Link to="/aboutUs"> <li className="py-2 text-right">در باره ما</li> </Link>
        //             </ul>
        //             <button
        //                 onClick={toggleSidebar}
        //                 className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        //             >
        //                 بستن ساید بار
        //             </button>
        //         </div>
        //     </div>

        //     {/* Main Content */}
        //     <div className="flex-grow p-4  s ">
        //         {!isOpen && (
        //             <button
        //                 onClick={toggleSidebar}
        //                 className=" right-4 flex  px-4 py-2 rounded"
        //             >
        //                 <p className='text-lg font-semibold text-gray-400'>باز کردن ساید بار</p>  <img src="imgs/site-icons/menu.png" className='w-7 mt-1' alt="" />
        //             </button>
        //         )}
        //     </div>
        // </div> 

        <div className="flex h-screen">
            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full bg-gray-800 text-white transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <h2 className="text-lg font-bold">Sidebar</h2>
                    <button onClick={toggleSidebar} className="text-xl hover:text-red-500">
                        &times;
                    </button>
                </div>
                <ul className="p-4"> 
                    <Link to='/addInvoice'>
                    <li className="py-2 text-right hover:bg-gray-700 rounded cursor-pointer">ثبت فاکتور جدید</li> 
                    </Link>
                    <li className="py-2 text-right hover:bg-gray-700 rounded cursor-pointer">مشاهده همه فاکتور ها</li>
                    <Link to="/aboutUs">
                        <li className="py-2 text-right hover:bg-gray-700 rounded cursor-pointer">در باره ما</li>
                    </Link>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-grow p-4">
                {!isOpen && (
                    <button
                        onClick={toggleSidebar}
                        className="right-4 flex items-center mr-24 -mt-8 px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition duration-200"
                    >
                        <p className='text-lg font-semibold text-gray-800'>باز کردن ساید بار</p>
                        <img src="imgs/site-icons/menu.png" className='w-7 mt-1' alt="" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SideBar;
