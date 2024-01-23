import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Layout from './component/layout/Layout';
import LayoutDashboard from './component/layout/LayoutDashboard';


import CartDashoard from './page-dashboard/cart/CartDashoard';
import HomePage from './page/home/HomePage';
import LayoutDashboardLogin from './component/layout/LayoutDashboardLogin';
import LoginDashboard from './page-dashboard/login/LoginDashboard';
import ResgisterDashboard from './page-dashboard/resgister/ResgisterDashboard';

// Dashboard
import CustomerDashboard from './page-dashboard/customer/CustomerDashboard';
import HomeDashboard from './page-dashboard/home/HomeDashboard';
import EmployeeDashboard from './page-dashboard/employee/EmployeeDashboard';
import OrderDashboard from './page-dashboard/order/OrderDashboard'

// Product
import ProductDashboard from './page-dashboard/product/ProductDashboard';
import CategoryDashboard from './page-dashboard/category/CategoryDashboard';

// User
import RoleDashboard from './page-dashboard/role/RoleDashboard';
import UserRoleDashboard from './page-dashboard/user/UserRoleDashboard';

// System
import OrderStatusDash from './page-dashboard/system/OrderStatusDash';
import OrderPaymentDash from './page-dashboard/system/OrderPaymentDash';
import ProvinceDash from './page-dashboard/system/ProvinceDash';

// Report
import TopSaleDash from './page-dashboard/report/TopSaleDash';
import SaleSummaryDash from './page-dashboard/report/SaleSummaryDash';
import SoldByCategoryDash from './page-dashboard/report/SoldByCategoryDash';
import SoldByProductDash from './page-dashboard/report/SoldByProductDash';
import ProfileEmployeeDashboard from './page-dashboard/profile/ProfileEmployeeDashboard';
import OrderDetailDash from './page-dashboard/order/OrderDetailDash';


function App() {
  return (
      <BrowserRouter>
        {/* Route website and backend */}
        <Routes>
          {/* Web-FrontEnd */}
          <Route path="/" element={<Layout />}>
              <Route path="" element={<HomePage/>} />
          </Route>

          {/* Web-Backend */}
          <Route path='/dashboard' element={<LayoutDashboard/>}>
                <Route path='' element={<HomeDashboard />}/>
                <Route path='customer' element={<CustomerDashboard/>}/>
                <Route path='employee' element={<EmployeeDashboard/>}/>
                <Route path='order' element={<OrderDashboard/>}/>
                <Route path='order_detail' element={<OrderDetailDash/>}/>
                <Route path='add_to_cart' element={<CartDashoard/>}/>
                <Route path='profile' element={<ProfileEmployeeDashboard/>}/>
                
                {/* Product */}
                <Route path='product/category' element={<CategoryDashboard/>}/>
                <Route path='product/productlist' element={<ProductDashboard/>}/>
                
                {/* User */}
                <Route path='user/role' element={<RoleDashboard/>}/>
                <Route path='user/user_role' element={<UserRoleDashboard/>}/>
                
                {/* System */}
                <Route path='system/order_status' element={<OrderStatusDash/>}/>
                <Route path='system/order_payment' element={<OrderPaymentDash/>}/>
                <Route path='system/province' element={<ProvinceDash/>}/>
                
                {/* Report */}
                <Route path='report/top_sale' element={<TopSaleDash/>}/>
                <Route path='report/sale_summary' element={<SaleSummaryDash/>}/>
                <Route path='report/sold_by_category' element={<SoldByCategoryDash/>}/>
                <Route path='report/sold_by_product' element={<SoldByProductDash/>}/>


                {/* <Route path='user' element={<UserDashboard/>}/>
                <Route path='cart' element={<CartDashoard/>}/> */}
                
          </Route>

           {/* Web-Backend Login and Register */}
           <Route path='/dashboard/' element={<LayoutDashboardLogin/>}>
                <Route path='login' element={<LoginDashboard />}/>
                <Route path='register' element={<ResgisterDashboard />}/>
          </Route>
        </Routes>
      </BrowserRouter>
     
  );
}

export default App;
