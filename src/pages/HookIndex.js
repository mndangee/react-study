import { useState } from 'react';
import Counter from '../component/hooks/Counter';
import Info from '../component/hooks/Info';

const HookIndex = () => {
  const [visible, setVisible] = useState(false); // info 컴포넌트의 가시성을 바꿈
  return (
    <>
      <Counter /> <br />
      <div>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? '숨기기' : '보이기'}
        </button>
      </div>
      {visible && <Info />}{' '}
      {/* 컴포넌트가 나타날때 effect가 나타나고, 사라질 때 cleanup이 나타남 */}
    </>
  );
};

export default HookIndex;
