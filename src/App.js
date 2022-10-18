// // import MyComponent from './MyComponent';
// // import Counter from './Counter';
// // import Say from './Say';
// // import EventPractice from './EvnetPracticeFunc';
// import ValidationSample from './ValidationSample';

// const App = () => {
//   return (
//     <>
//       {/* <MyComponent>리액트</MyComponent>
//       <br />
//       <Counter />
//       <br />
//       <Say /> */}
//       {/* <EventPractice /> */}
//       <ValidationSample />
//     </>
//   );
// };

// export default App;

import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
// import ScrollBox from './ScrollBox';
// import ValidationSample from './ValidationSample';

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export default class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    // return <ValidationSample />;
    // return (
    //   <>
    //     <ScrollBox ref={ref => (this.scrollBox = ref)} />
    //     <button onClick={() => this.scrollBox.scrollToBottom()}>
    //       맨 밑으로
    //     </button>
    //   </>
    // );

    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}
