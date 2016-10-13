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

class DailyWeather extends React.Component {
render() {
  return (
    <section className="daily-weather">
      <article className="today">
      debugger
        <h2 className="high">{this.props.state}</h2>
        <h2 className="low">{this.props.state}</h2>
      </article>
    </section>
  )
}
}



ReactDOM.render(<App source='https://weatherly-api.herokuapp.com/api/weather/' />, document.getElementById('application'))

module.exports = App;
