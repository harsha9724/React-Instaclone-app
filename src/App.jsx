import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Createposts from './components/createPost/createpost';
import Landing from './components/landingpage/landingPage';
import Post from './components/postPage/post';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route  path='/post'  element={<Post/>}/>
      <Route path='/createpost' element={<Createposts/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
