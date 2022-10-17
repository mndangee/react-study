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
import ScrollBox from './ScrollBox';
// import ValidationSample from './ValidationSample';

export default class App extends Component {
  render() {
    // return <ValidationSample />;
    return (
      <>
        <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </>
    );
  }
}
