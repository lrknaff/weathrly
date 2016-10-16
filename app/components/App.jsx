const React = require('react');
const ReactDOM = require('react-dom');
var $ = require('jquery');

var daysMap = {
  '0':'Sunday',
  '1':'Monday',
  '2':'Tuesday',
  '3':'Wednesday',
  '4':'Thursday',
  '5':'Friday',
  '6':'Saturday',
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {location: '', info: []};
  }

  locationAccepted(e) {
    e.preventDefault();
    this.serverRequest = $.get(this.props.source + this.state.location, function (result) {
      this.setState({
        info: result
      });
    }.bind(this));
  }

 getDay (date) {
   var currentDate = date.split("-");
   var date = new Date(currentDate[2], currentDate[0], currentDate[1]);
   return daysMap[date.getDay()];
  }

  dailyWeather() {
    return (
      <section>
        {this.state.info.map(function(weather) {

          return <ul id={this.getDay(weather.date)} className='daily-weather' key={weather.date}>
            <li className= 'day'>{this.getDay(weather.date)}</li>
            <li className='weather-type'>There is a {Math.floor(weather.weatherType.chance *100)}% chance it will be {weather.weatherType.type}</li>
            <li className='high-temp'>High:{weather.temp.high}&deg;</li>
            <li className='low-temp'>Low:{weather.temp.low}&deg;</li></ul>
        }.bind(this))}
      </section>
    )
  }

  render() {
    return (
      <div className={this.state.location}>
        <div>
          <input className='location-input' placeholder='Location'
            value={this.state.location}
            onChange={(e) => this.setState({location: e.target.value}) } />
          <input className='submit-button' type='submit'
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
