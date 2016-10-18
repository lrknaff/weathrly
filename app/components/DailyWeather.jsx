const React = require('react');

class DailyWeather extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>hello</div> {this.props.info}
    )
  }
}

module.exports = DailyWeather;
