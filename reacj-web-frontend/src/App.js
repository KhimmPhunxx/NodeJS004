import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutPage from './component/layout_website/LayoutPage';
import HomePageWeb from './pages/home/HomePageWeb';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<LayoutPage/>} >
        <Route path='' element={<HomePageWeb/>} />
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
