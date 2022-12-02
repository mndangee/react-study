import { Route, Routes, Link } from 'react-router-dom';
import About from '../component/RouterTutorial/About';
import Home from '../component/RouterTutorial/Home';
import Profiles from '../component/RouterTutorial/Profiles';

const RouterIndex = () => {
  //React Router ~ v5
  // return (
  //   <div>
  //     <Route path='/' component={Home} exact={true} />
  //     <Route path={['/about','info']} component={About} />
  //     <Route path="/profiles" component={Profiles} />
  //   </div>
  // );

  //React Router v6
  return (
    <div style={{ padding: '0px 15px' }}>
      <ul style={{ marginLeft: '-15px' }}>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/about?detail=true&mode=1'>소개</Link>
        </li>
        <li>
          <Link to='/profiles'>프로필</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        {['/about', '/info'].map(path => (
          <Route key={path} path={path} element={<About />} />
        ))}
        {/* 서브 라우트 */}
        <Route path='/profiles/*' element={<Profiles />} />
      </Routes>
    </div>
  );
};

export default RouterIndex;
