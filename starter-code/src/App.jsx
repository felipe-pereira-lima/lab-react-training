import React, { Component } from 'react';

import IdCards from './Components/IdCards';

const idCards = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date('1992-07-14').toLocaleString(),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg'
  },
  {
    lastName: 'Delores ',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date('1988-05-11').toLocaleString(),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {/* TODO: Use the IdCard component */}
        {idCards.map(singleCard => {
          return <IdCards {...singleCard} />;
        })}
      </div>
    );
  }
}

export default App;
