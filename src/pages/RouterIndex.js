import { Route, Routes, Link } from 'react-router-dom';
import About from '../component/RouterTutorial/About';
import Home from '../component/RouterTutorial/Home';
import Profile from '../component/RouterTutorial/Profile';

const RouterIndex = () => {
  //React Router ~ v5
  // return (
  //   <div>
  //     <Route path='/' component={Home} exact={true} />
  //     <Route path={['/about','info']} component={About} />
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
          <Link to='/profile/minhye'>김민혜</Link>
        </li>
        <li>
          <Link to='/profile/effie'>김에피</Link>
        </li>
        <li>
          {/* 해당 프로필이 없기 때문에 ;존재하지 않는 사용자입니다.'가 노출 */}
          <Link to='/profile/a'>에이</Link>{' '}
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        {['/about', '/info'].map(path => (
          <Route key={path} path={path} element={<About />} />
        ))}
        <Route path='/profile/:username' element={<Profile />} />
      </Routes>
    </div>
  );
};

export default RouterIndex;
