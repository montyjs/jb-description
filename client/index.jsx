import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Overview from './Components/Overview';
import Description from './Components/Description';
import SizeChart from './Components/SizeChart';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.getDesciption();
  }

  getDesciption() {
    $.ajax({
      method: 'GET',
      url: '/descriptions',
      success: (data) => {
        this.setState({
          data: data
        });
      },
    });
  }

  render() {
    return (
      <div>
        <Overview props={this.state.data} />
        <Description props={this.state.data} />
        <SizeChart />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('Description'));
