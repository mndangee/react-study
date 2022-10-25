import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  //배열 값 자체를 받지 않으면 컴포넌트가 렌더링 될 때 마다 호출
  // useEffect(() => {
  //   console.log('렌더링이 완료되었습니다!');
  //   console.log({ name, nickname });
  // });

  // // 컴포넌트가 화면에 맨 처음 렌더링 될 때만 호츌되고, 업데이트될 때는 호출되지 않음
  // useEffect(() => {
  //   console.log('마운트 될 때만 실행됩니다.');
  // }, []);

  // // name의 상태값이 변경 될 때 마다 호출
  // useEffect(() => {
  //   console.log(name);
  // }, [name]);

  //뒷정리 함수
  // useEffect(() => {
  //   console.log('effect');
  //   console.log(name);

  //   return () => {
  //     console.log('cleanup');
  //     console.log(name);
  //   };
  // }, [name]);

  //언마운트될 때만 뒷정리 함수를 호출
  useEffect(() => {
    console.log('effect');

    return () => {
      console.log('unmout');
    };
  }, []);

  return (
    <>
      <div>
        <input value={name} onChange={onChangeName} placeholder='이름' />
        <input
          value={nickname}
          onChange={onChangeNickname}
          placeholder='닉네임'
        />
      </div>
      <div>
        <strong>이름 : </strong> {name}
      </div>
      <div>
        <strong>닉네임 : </strong> {nickname}
      </div>
    </>
  );
};

export default Info;
