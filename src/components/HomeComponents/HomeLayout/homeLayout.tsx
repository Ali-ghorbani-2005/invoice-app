import { Outlet, NavLink } from 'react-router-dom'; 
import "./homeLayout.css"
import { boolean, string } from 'yup';

export default function HomeLayout() {
  return (
    <div>
      <nav>
        <NavLink to='/'>
          <button>خانه</button>
        </NavLink>

        <NavLink to='/allInvoice'>
          <button>فاکتور ها</button>
        </NavLink>

        <NavLink to='/addInvoice'>
          <button>ثبت فاکتور جدید</button>
        </NavLink>

        <NavLink to='/aboutUs'>
          <button>درباره ما</button>
        </NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
