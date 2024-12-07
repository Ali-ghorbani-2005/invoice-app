import { Outlet, NavLink } from 'react-router-dom';
import "./homeLayout.css"
import AuthButtons from '../AuthButtons/AuthButtons';
import SideBar from '../sideBar/sideBar';
// import { boolean, string } from 'yup'; 


export default function HomeLayout() {
  return (
    <div>
      {/* <nav className='flex justify-center items-center gap-10 mt-5'>

        <div>
          <NavLink to='/'>
            <button>خانه</button>
          </NavLink>
        </div>

        <div>

          <NavLink to='/allInvoice'>
            <button>فاکتور ها</button>
          </NavLink>

        </div>

        <div>

          <NavLink to='/addInvoice'>
            <button>ثبت فاکتور جدید</button>
          </NavLink>

        </div>

        <div>
          <NavLink to='/aboutUs'>
            <button>درباره ما</button>
          </NavLink>

        </div>
      </nav> */} 

      <div>
        
        <div>
         <AuthButtons/>
        </div> 

        <div className='flex justify-end'>
          <SideBar/>
        </div>


      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
