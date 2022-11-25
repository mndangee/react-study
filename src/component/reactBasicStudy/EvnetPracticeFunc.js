import React, { useState } from 'react';

export default function EvnetPractice() {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  const { username, message } = form;

  const handleChange = e => {
    const nextFrom = {
      ...form, // 기존 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    };
    setForm(nextFrom);
  };

  const handleClick = () => {
    alert(`${username} : ${message}`);
    setForm({
      username: '',
      message: '',
    });
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type='text'
        name='username'
        placeholder='사용자명'
        value={username}
        onChange={handleChange}
      />
      <input
        type='text'
        name='message'
        placeholder='아무거나 입력해 보세요'
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>초기화</button>
    </>
  );
}
