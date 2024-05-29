import { Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import DashboardPage from './components/Dashboard/DashboardPage';
import LeetcodingPage from './components/Leetcoding/LeetcodingPage';
function App() {
  return (
    <div className="App bg-darkbg">
      <Routes>
        <Route path='/' element = {<DashboardPage/>}/>
        <Route path='/problemsolving' element = {<LeetcodingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
