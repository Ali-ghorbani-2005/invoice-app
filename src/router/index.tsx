// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Home from '../pages/home/home';
// import Login from '../pages/authentication/login';
// import SignUp from '../pages/authentication/signUp';
// import HomeLayout from '../components/HomeComponents/HomeLayout/homeLayout';
// import AddInvoice from '../pages/InvoicePage/addInvoice';
// import AllInvoice from '../pages/InvoicePage/allInvoice';
// import AboutUs from '../pages/About-us/AboutUs';
// import Introduction from '../pages/Introduction/Introduction';

// function Index() {
//     return (
//         <>

//             <BrowserRouter>
//                 <Routes>

//                     <Route element={<HomeLayout />}>
//                         <Route path='/' element={<Introduction />} />
//                         <Route path='/home' element={<Home />} />
//                         <Route path='/addInvoice' element={<AddInvoice />} />
//                         <Route path='/allInvoice' element={<AllInvoice />} />
//                         <Route path='/aboutUs' element={<AboutUs />} />
//                     </Route>

//                     <Route path='/login' element={<Login />} />
//                     <Route path='/signUp' element={<SignUp />} />


//                 </Routes>

//             </BrowserRouter>

//         </>
//     )
// }

// export default Index 




import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from '../pages/home/home';
import Login from '../pages/authentication/login';
import SignUp from '../pages/authentication/signUp';
import HomeLayout from '../components/HomeComponents/HomeLayout/homeLayout';
import AddInvoice from '../pages/InvoicePage/addInvoice';
import AllInvoice from '../pages/InvoicePage/allInvoice';
import AboutUs from '../pages/About-us/AboutUs';
import InformationIN from '../pages/Information/informationIN';

function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<HomeLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/addInvoice' element={<AddInvoice />} />
                    <Route path='/allInvoice' element={<AllInvoice />} />
                    <Route path='/aboutUs' element={<AboutUs />} />
                    <Route path='/informationIN/:id' element={<InformationIN />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/signUp' element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Index;





// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from '../pages/home/home';
// import Login from '../pages/authentication/login';
// import SignUp from '../pages/authentication/signUp';
// import HomeLayout from '../components/HomeComponents/HomeLayout/homeLayout';
// import AddInvoice from '../pages/InvoicePage/addInvoice';
// import AllInvoice from '../pages/InvoicePage/allInvoice';
// import AboutUs from '../pages/About-us/AboutUs';

// function Index() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route element={<HomeLayout />}>
//                     <Route index element={<Home />} />
//                     <Route path='/addInvoice' element={<AddInvoice />} />
//                     <Route path='/allInvoice' element={<AllInvoice />} />
//                     <Route path='/aboutUs' element={<AboutUs />} />
//                 </Route>
//                 <Route path='/login' element={<Login />} />
//                 <Route path='/signUp' element={<SignUp />} />
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default Index;
