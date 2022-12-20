import { Route, Routes } from 'react-router-dom';
import About from '../component/RouterTutorial/About';
import Home from '../component/RouterTutorial/Home';
import Profiles from '../component/RouterTutorial/Profiles';
import Articles from './Articles';
import Nav from '../component/RouterTutorial/Nav';
import Article from '../component/RouterTutorial/Article';

const RouterIndex = () => {
  //React Router ~ v5
  // return (
  //   <div>
  //     <Nav />
  //     <Route path='/' component={Home} exact={true} />
  //     <Route path={['/about','info']} component={About} />
  //     <Route path="/profiles" component={Profiles} />
  //   </div>
  // );

  //React Router v6

  return (
    <div style={{ padding: '0px 15px' }}>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        {['/about', '/info'].map(path => (
          <Route key={path} path={path} element={<About />} />
        ))}
        {/* 서브 라우트 */}
        <Route path='/profiles/*' element={<Profiles />} />
        {/* 중첩된 라우트 */}
        <Route path='/articles/*' element={<Articles />}>
          <Route path=':id' element={<Article />} />
        </Route>
      </Routes>
    </div>
  );
};

export default RouterIndex;
