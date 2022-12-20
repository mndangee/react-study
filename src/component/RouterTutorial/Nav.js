import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div style={{ marginLeft: '-15px' }}>
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/about?detail=true&mode=1'>소개</Link>
        </li>
        <li>
          <Link to='/profiles'>프로필</Link>
        </li>
        <li>
          <Link to='/articles'>게시글 목록</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Nav;
