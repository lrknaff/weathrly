const React = require('react');
const ReactDOM = require('react-dom');
var $ = require('jquery');

class App extends React.Component {
  constructor() {
    super();
    this.state = {location: ''};
  }

  locationAccepted(e) {

    e.preventDefault();
    debugger
    this.serverRequest = $.get(this.props.source + this.state.location, function (result) {
      this.setState({
        info: result
      });
    }.bind(this));
  }

  render() {

    return (
      <div>
        <div>
          <input placeholder='Location'
            value={this.state.location}
            onChange={(e) => this.setState({location: e.target.value}) } />
          <input type='submit'
            onClick={(e) => this.locationAccepted(e)} />
        </div>
      </div>
    )
  }
}

//Weather react component
class Weather extends React.Component {
  constructor() {
    super();
    this.state = {highTemp: ''}
  }
}


const Weather = ({highTemp}) => {
  return (
    <section>
      <h3 className='WeatherListItem-highTemp'>{highTemp}</h3>
    </section>
  )
}




ReactDOM.render(<App source='https://weatherly-api.herokuapp.com/api/weather/' />, document.getElementById('application'))

module.exports = App;
