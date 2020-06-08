import React from 'react';
import logo from './PakFlag.png';
import './App.css';
import Hello from './Hello.js';

function App({name, country}) {
    return (
      <div>
         My name is: <strong>{name}</strong>
         
         <h1>I am from: {country} </h1>
         <br></br>
         <img src={logo} className="App-logo" alt="logo" />
         <br></br>
         <p>Ordered List is</p>
         <ol>
           <p>Pakistan has four Provinces</p>
           <li>Punjab</li>
           <li>Sindh</li>
           <li>Baluchistan</li>
           <li>KP</li>
         </ol>

         <p>UnOrdered List is</p>
         <ul>
         <p>Pakistan has four Provinces</p>
           <li>Punjab</li>
           <li>Sindh</li>
           <li>Baluchistan</li>
           <li>KP</li>
         </ul>
         <p>let result = "90 + 20"</p>
         let result = {90 + 20}
    <Hello firstname={name}></Hello>
         
      </div>
  );
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
