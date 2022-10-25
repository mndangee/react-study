import { useState } from 'react';
import Counter from '../component/hooks/Counter';
import Info from '../component/hooks/Info';
import ReducerCounter from '../component/hooks/ReducerCounter';
import ReducerInfo from '../component/hooks/ReducerInfo';

const HookIndex = () => {
  const [visible, setVisible] = useState(false); // info 컴포넌트의 가시성을 바꿈
  return (
    <>
      <h2 style={{ marginBottom: '30px' }}>Hooks 튜토리얼</h2>
      <div
        style={{
          borderBottom: '1px solid #000',
          marginBottom: '30px',
          paddingBottom: '30px',
        }}
      >
        <h3 style={{ marginBottom: '20px' }}>Counter : useState</h3>
        <Counter />
      </div>

      <div
        style={{
          borderBottom: '1px solid #000',
          marginBottom: '30px',
          paddingBottom: '30px',
        }}
      >
        <h3 style={{ marginBottom: '20px' }}>Info : useState , useEffect</h3>
        <div style={{ marginBottom: '10px' }}>
          <button
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {visible ? '숨기기' : '보이기'}
          </button>
        </div>
        {visible && <Info />}
        {/* 컴포넌트가 나타날때 effect가 나타나고, 사라질 때 cleanup이 나타남 */}
      </div>

      <div
        style={{
          borderBottom: '1px solid #000',
          marginBottom: '30px',
          paddingBottom: '30px',
        }}
      >
        <h3 style={{ marginBottom: '20px' }}>Counter : useReducer</h3>
        <ReducerCounter />
      </div>

      <div
        style={{
          borderBottom: '1px solid #000',
          marginBottom: '30px',
          paddingBottom: '30px',
        }}
      >
        <h3 style={{ marginBottom: '20px' }}>Info : useReducer</h3>
        <ReducerInfo />
      </div>
    </>
  );
};

export default HookIndex;
