import React, { useMemo, useState } from 'react';

const getAverage = number => {
  console.log('평균값 계산 중...');

  if (number.length === 0) return 0;
  const sum = number.reduce((a, b) => a + b);
  return sum / number.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value);
  };

  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  const avg = useMemo(() => getAverage(list), [list]); // 인풋 내용이 수정될 때도 getAverage 함수가 호출 되기 때문에 작성

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>입력 값 : {value}</li>
        ))}
      </ul>
      <div>
        <strong>평균 값 : </strong> {avg}
      </div>
    </div>
  );
};

export default Average;
