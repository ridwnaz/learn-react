import { BrowserRouter as Router,Routes,Route, Form } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about';
import Coba from './pages/usestate';
import NotFound from './pages/notfound';
import Header4 from './Components/header4';
import Latihan from './pages/latihan';
import LoginSSO from './pages/loginss0';
import WanMart from './pages/wanmart';
import LifeCycleCom from './pages/lifecyclecom';
import Blogpost from './pages/blogpost';
import WanBlog from './pages/wanblog';
import UseStateDua from './pages/usestatedua';
import UseRef from './pages/useref';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/useState' element={<Coba/>}/>
        <Route path='/hook' element={<Header4/>} />
        <Route path='/latihan' element={<Latihan/>} />
        <Route path='/loginSSO' element={<LoginSSO/>} />
        <Route path='/wanmart' element={<WanMart/>} />
        <Route path='/lifecyclecom' element={<LifeCycleCom/>} />
        <Route path='/fakeapi' element={<Blogpost/>}/>
        <Route path='/wanBlog' element={<WanBlog/>} />
        <Route path='/useStateDua' element={<UseStateDua/>} />
        <Route path='/useref' element={<UseRef/>}/>
        {/* <Route path='/*' element={<NotFound/>}/> */}
      </Routes>
    </Router>
    </>

  );
}

export default App;
