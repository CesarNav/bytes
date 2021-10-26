// import StartPage from "../Components/StartPage";
// import Login from "../pages/login/login";
import React, {Component} from 'react';
// import { render } from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <a className="brand" href="/api/sales">Api</a>
                </div>
            </div>
        )
    }
}

// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                {/* <Login /> */}
//                 <Login />
//             </div>
//         )
//     }
// }

// function App() {
//   return (
//     <div className="App">
//       {/* <Login /> */}
//       <Login />
//     </div>
//   );
// }

export default App;

// render (<App/>, document.getElementById('app'));
