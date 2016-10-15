const React = require('react');
const ReactDOM = require('react-dom');
var $ = require('jquery');

var daysMap = {
  '0':'Monday',
  '1':'Tuesday',
  '2':'Wednesday',
  '3':'Thursday',
  '4':'Friday',
  '5':'Saturday',
  '6':'Sunday',
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {location: '', info: [], day: daysMap};
  }

  locationAccepted(e) {
    e.preventDefault();
    this.serverRequest = $.get(this.props.source + this.state.location, function (result) {
      this.setState({
        info: result
      });
    }.bind(this));
  }

  // getDay() {
  //   debugger
  //   return (
  //     <section>
  //       {this.state.day.map(function(day) {
  //         return <h2>{day}</h2>
  //       })}
  //     </section>
  //   )
  // }

  dailyWeather() {
    return (
      <section>
        {this.state.info.map(function(weather) {
          return <ul key={weather.date}>
            {/* <li className= 'day'>{this.getDay()}</li> */}
            <li className='high-temp'>High temp:{weather.temp.high}</li>
            <li className='low-temp'>Low temp:{weather.temp.low}</li>
            <li className='weather-type'>Weather type: {weather.weatherType.type}</li></ul>
        })}
      </section>
    )
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
        <div>
          {this.dailyWeather()}
        </div>
      </div>
    )
  }

  }





ReactDOM.render(<App source='https://weatherly-api.herokuapp.com/api/weather/' />, document.getElementById('application'))

module.exports = App;
