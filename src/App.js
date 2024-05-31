import { Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import DashboardPage from './components/Dashboard/DashboardPage';
import LeetcodingPage from './components/Leetcoding/LeetcodingPage';
import JobApplications from './components/JobApplications/JobApplicationsPage';
import NetworkingPage from './components/Networking/NetworkingPage';
function App() {
  return (
    <div className="App bg-darkbg">
      <Routes>
        <Route path='/' element = {<DashboardPage/>}/>
        <Route path='/problemsolving' element = {<LeetcodingPage/>}/>
        <Route path='/jobapplications' element={<JobApplications/>}/>
        <Route path='/networking' element={<NetworkingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
