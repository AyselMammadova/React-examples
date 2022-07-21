import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import {Clock} from './components/Clock';
import {Questions} from './components/Questions';
import {SlideshowContainer} from './components/SlideshowContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isVisible: true, isPrecise: false};
    this.toggle = this.toggle.bind(this);
    this.precise = this.precise.bind(this);
  }

  toggle() {
    if(this.state.isVisible) {
      this.setState({isVisible: false})
    } else {
      this.setState({isVisible: true})
    }
  }

  precise() {
    if(this.state.isPrecise) {
      this.setState({isPrecise: false})
    } else {
      this.setState({isPrecise: true})
    }
  }

  render() {
    const {isVisible, isPrecise} = this.state;
    return(
      <div className='text-center'>
        <div className="row justify-content-center mx-0 my-5">
          <div className="col-4"><button className="btn btn-danger p-3" onClick={this.toggle}>{isVisible ? 'Hide' : 'Show'} Clock</button></div>
          <div className="col-4"><button className="btn btn-danger p-3" onClick={this.precise}>{isPrecise ? 'Hide' : 'Show'} Precise Mood</button></div>
        </div>
        {isVisible ? <Clock isPrecise={this.state.isPrecise} /> : null}

        <div><Questions questions={5} /> </div>

        <div style={{margin: '80px 0'}}>
          <SlideshowContainer />
        </div>
        
      </div>
    )
  }
}

export default App;

