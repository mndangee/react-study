import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({ detail: detail === 'true' ? false : true, mode });
  };

  const onIncreaseMode = () => {
    //parseInt()는 문자열로 된 부분에서 숫자(정수)만 뽑아서 변환
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ detail, mode: nextMode });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>
        이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트 입니다.
      </p>
      <p>쿼리 스트링 : {location.search}</p>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>onToggleDetail</button>
      <button onClick={onIncreaseMode}>onIncreaseMode</button>
    </div>
  );
};

export default About;
