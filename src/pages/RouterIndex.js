import { Route, Routes, Link } from 'react-router-dom';
import About from '../component/RouterTutorial/About';
import Home from '../component/RouterTutorial/Home';

const RouterIndex = () => {
  //React Router ~ v5
  // return (
  //   <div>
  //     <Route path='/' component={Home} exact=[true} />
  //     <Route path='/about' component={About} />
  //   </div>
  // );

  //React Router v6
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/about'>소개</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
};

export default RouterIndex;
