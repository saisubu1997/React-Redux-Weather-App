import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps_kelvin = cityData.list.map(weather => weather.main.temp);
    const temps = temps_kelvin.map(k => {
      return k - 273;
    });

    console.log(temps);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;

    return (
      <tr key={name}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Chart data={temps} color="orange" units="°C" />
        </td>
        <td>
          <Chart data={pressure} color="black" units="hpa" />
        </td>
        <td>
          <Chart data={humidity} color="green" units="%" />
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hpa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>

        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}
function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
