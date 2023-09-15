
import './App.css';
import LeftSidebar from './component/Navbar/Navbar';
  // import Table from './component/Table/Table';
import TemporaryDrawer from './component/Addsite/addsite';


function App() {
  return (
    <div className="App">
      <LeftSidebar />
      {/* <Table/>    */}
       <TemporaryDrawer/> 
      
    </div>
  );
}

export default App;
