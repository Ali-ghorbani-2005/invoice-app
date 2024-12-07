import { useState } from 'react';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full bg-gray-800 text-white transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4">
                    <h2 className="text-lg font-bold">Sidebar</h2>
                    <ul>
                        <li className="py-2">Item 1</li>
                        <li className="py-2">Item 2</li>
                        <li className="py-2">Item 3</li>
                    </ul>
                    <button
                        onClick={toggleSidebar}
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                    >
                        بستن ساید بار
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow p-4  s ">
                {!isOpen && (
                    <button
                        onClick={toggleSidebar}
                        className=" right-4 flex -mt-4 px-4 py-2 rounded"
                    >
                        <p className='text-lg font-semibold text-gray-400'>باز کردن ساید بار</p>  <img src="imgs/site-icons/menu.png" className='w-7 mt-1' alt="" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SideBar;
