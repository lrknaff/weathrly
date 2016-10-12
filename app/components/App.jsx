const React = require('react')
const ReactDOM = require('react-dom')
// const LikesCounter = require('./LikesCounter')

// class App extends React.Component {
//   render () {
//     return (
//   // <LikesCounter initialCount={0}/>
//     );
//   }
// }
//
//

// module.exports = App;


class App extends React.Component {

  render () {
    return <div> Text </div>

  }
}
ReactDOM.render( <App/>, document.getElementById('application'))

module.exports = App
