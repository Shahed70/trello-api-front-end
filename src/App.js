import { Route, Routes } from 'react-router';
import './App.css';
import AllBoard from './components/AllBoard';
import UpdateBoard from './components/UpdateBoard';
import ViewBoard from './components/ViewBoard';
import ViewList from './components/ViewList';
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<AllBoard />} />
        <Route path="/update/:id" element={<UpdateBoard />} />
        <Route path="/viewboard/:id" element={<ViewBoard />} />
        <Route path="viewboard/:id/viewlist/:id" element={<ViewList />} />
      </Routes>
    </div>
  );
}

export default App;
