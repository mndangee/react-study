import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  //React Router v5
  // return (
  //   <>
  //     <h3>사용자 목록</h3>
  //     <ul>
  //       <li>
  //         <Link to='/profile/minhye'>김민혜</Link>
  //       </li>
  //       <li>
  //         <Link to='/profile/effie'>김에피</Link>
  //       </li>
  //     </ul>
  //     <Route
  //       path='/profiles'
  //       exact
  //       render={() => <div>사용자를 선택헤 주세요.</div>}
  //     ></Route>
  //     <Route path='/profiles/:username' component={Profile}></Route>
  //   </>
  // );

  //React Router v6
  return (
    <>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to='/profiles/minhye'>김민혜</Link>
        </li>
        <li>
          <Link to='/profiles/effie'>김에피</Link>
        </li>
        <li>
          <Link to='/profiles/none'>없는 사용자</Link>
        </li>
      </ul>
      <Routes>
        <Route path='*' element={<div>사용자를 선택해 주세요.</div>}></Route>
        <Route path=':username' element={<Profile />}></Route>
      </Routes>
    </>
  );
};

export default Profiles;
