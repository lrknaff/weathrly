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

  componentDidMount() {
    const recentInputLocation = JSON.parse(localStorage.getItem('location'));
    this.setState({location: recentInputLocation ? recentInputLocation : ''})
  }

  locationAccepted(e) {
    e.preventDefault();
    this.serverRequest = $.get(this.props.source + this.state.location, function (result) {
      this.setState({
        info: result
      });
      localStorage.setItem("location", JSON.stringify(this.state.location));
    }.bind(this));
  }

 getDay (date) {
   var currentDate = date.split("-");
   var date = new Date(currentDate[2], currentDate[0], currentDate[1]);
   return daysMap[date.getDay()];
  }

  dailyWeather() {
    return (
      <section className={this.state.location}>
        {this.state.info.map(function(weather) {
          return <ul id={this.location} className='daily-weather' key={weather.date}>
            <p className= 'day'>{this.getDay(weather.date)}</p>
            <p className={weather.weatherType.type}>There is a {Math.floor(weather.weatherType.chance *100)}% chance it will be {weather.weatherType.type}</p>
            <p className='high-temp'>High:{weather.temp.high}&deg;</p>
            <p className='low-temp'>Low:{weather.temp.low}&deg;</p>
            <span className='extreme-weather'> {this.showExtremeWeather(weather)}</span></ul>
        }.bind(this))}
      </section>
    )
  }

  showExtremeWeather(weather) {

    if (weather.weatherType.scale === 3) {
      if (weather.weatherType.type === "sunny") {
        return(<div className="warning sun">
          <p className="extreme-weather-text1">On {this.getDay(weather.date)}, there will be extreme sun. </p>
          <p className="extreme-weather-text2">Stay inside if possible, and use sunscreen when going outdoors!
          </p>
        </div>);
      }
      else if (weather.weatherType.type === "rain") {
        return(<div className='warning rain'>
          <p className="extreme-weather-text1">On {this.getDay(weather.date)}, there will be a high chance of flooding and extreme rain. </p>
          <p className="extreme-weather-text2">Flash flooding is likely. Limit driving as much as possible.
          </p>
        </div>);
      }
      else if (weather.weatherType.type === "windy") {
        return(<div className='warning windy'>
          <p className="extreme-weather-text1">On {this.getDay(weather.date)}, there will be very high winds.</p>
          <p className="extreme-weather-text2">These winds can cause significant damage to trees and property. Be prepared for power outages.</p>
        </div>);
      }
      else if (weather.weatherType.type === "snow") {
        return(<div className='warning snow'>
          <p className="extreme-weather-text1">On {this.getDay(weather.date)}, there will be heavy snow!
          </p>
          <p className="extreme-weather-text2">Heavy snow is expected. Travel may become hazardous. Stay indoors if possible.
          </p>
        </div>);
      }

    }
  }

enterKeySubmit(e) {
  if(e.keyCode === 13) {
    $('.submit-button').click();
  }
}

  render() {
    return (
      <div className={this.state.location}>
        <div>
          <input className='location-input' type='text' placeholder='location'
            value={this.state.location}
            onChange={(e) => {
              this.setState({location: (e.target.value).replace(/\s+/g, '-').toLowerCase()});
              this.enterKeySubmit(e);
            }} />
          <input className='submit-button' type='submit'
            onClick={(e) =>
              this.locationAccepted(e)} />
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
