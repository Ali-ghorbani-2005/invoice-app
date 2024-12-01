import { Outlet, NavLink } from 'react-router-dom';
import "./homeLayout.css"
// import { boolean, string } from 'yup';

export default function HomeLayout() {
  return (
    <div>
      <nav className='flex justify-center items-center gap-10 mt-5'>

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
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
