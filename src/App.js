import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api/index';
import image from './images/image.png';

import Social from './components/Social/Social';
class App extends React.Component {
  state = {
    data: {},
    country: '',
  };
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <h4>Created By Sakil Khan</h4>
        <footer className={styles.footer}>
          <Social />
        </footer>
      </div>
    );
  }
}

export default App;
