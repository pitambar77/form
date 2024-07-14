import './App.css';
import Attachment from './components/Attachment';
import Form from './components/Form';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SubHeader from './components/SubHeader';

function App() {



  return (
    
    <div className=" bg-zinc-50 mt-4 p-2 flex">
      <div className=' w-16'>
        <Sidebar/>
      </div>
      <div className=' w-full'>
        <Header/>
        <SubHeader/>
        <div className=' flex'>
          <div className=' w-full'>
            <Form/>
          </div>
          <div className=' w-60'>
            <Attachment/>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;
