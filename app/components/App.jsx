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
    this.state = {location: '', info: [], locationTitle: ''};
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
    this.setState({locationTitle: this.state.location, location: ''});
  }

 getDay (date) {
   var currentDate = date.split("-");
   var date = new Date(currentDate[2], currentDate[0], currentDate[1]);
   return daysMap[date.getDay()];
  }

  dailyWeather() {
    return (
      <section className={this.state.locationTitle}>
        {this.state.info.map(function(weather) {
          return <article key={weather.date}>
            <h2 className= 'day'>{this.getDay(weather.date)}</h2>
            <div className={weather.weatherType.type}></div>
            <h4 className='high-temp'>{weather.temp.high}&deg;</h4>
            <h4 className='low-temp'>{weather.temp.low}&deg;</h4>
            <p className={weather.weatherType.type}>There is a {Math.floor(weather.weatherType.chance *100)}% chance it will be {weather.weatherType.type}</p>
            <span className='extreme-weather'> {this.showExtremeWeather(weather)}</span></article>
        }.bind(this))}
      </section>
    )
  }

  showExtremeWeather(weather) {

    if (weather.weatherType.scale === 3) {
      if (weather.weatherType.type === "sunny") {
        return(<div className="warning">
          <p className="extreme-weather-text1">extreme heat alert!</p>
        </div>);
      }
      else if (weather.weatherType.type === "rain") {
        return(<div className='warning'>
          <p className="extreme-weather-text1">flash flood warning!</p>
        </div>);
      }
      else if (weather.weatherType.type === "windy") {
        return(<div className='warning'>
          <p className="extreme-weather-text1">High wind warning!</p>
        </div>);
      }
      else if (weather.weatherType.type === "snow") {
        return(<div className='warning'>
          <p className="extreme-weather-text1">Heavy snow expected!
          </p>
        </div>);
      }

    }
  }

enterKeySubmit(e) {
  if(e.key === 'Enter') {
    this.locationAccepted(e);
  }
}

  render() {
    return (
      <div className={this.state.locationTitle}>
        <section id='location-title'>
          <h1>{this.state.locationTitle}</h1>
        </section>
        <div>
          <input className='location-input' type='text' placeholder='location'
            value={this.state.location}
            onChange={(e) => {
              this.setState({location: (e.target.value).replace(/\s+/g, '-').toLowerCase(e)});
            }}
            onKeyPress={(e) => {
              this.enterKeySubmit(e);
            }}/>
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
