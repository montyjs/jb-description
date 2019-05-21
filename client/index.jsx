import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import style from './main.scss';

import Overview from './Components/Overview.jsx';
import Description from './Components/Description.jsx';
import SizeChart from './Components/SizeChart.jsx';

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
          data,
        });
      },
      error: () => {
        console.error('err');
      },
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="descriptionWrapper">
        <Overview {...data} />
        <Description {...data} />
        <SizeChart />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('Description'));
