import React, { useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

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
