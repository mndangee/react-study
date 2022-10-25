import React, { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const ReducerInfo = () => {
  const [state, dispatch] = useReducer(reducer, { name: '', nickname: '' });
  const { name, nickname } = state;

  const onChange = e => {
    dispatch(e.target);
  };

  return (
    <>
      <div>
        <input
          name='name'
          value={name}
          onChange={onChange}
          placeholder='이름'
        />
        <input
          name='nickname'
          value={nickname}
          onChange={onChange}
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

export default ReducerInfo;
