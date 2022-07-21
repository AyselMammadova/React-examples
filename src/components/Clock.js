import React from 'react';

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h5 className='myClock'>{this.props.isPrecise ? this.state.date.toISOString() : this.state.date.toLocaleTimeString()}</h5>
            </div> 
        );
    }

    startInterval() {
        let delay;
        if(this.props.isPrecise) {
            delay = 100
        } else {
            delay = 1000
        }
        this.intervalID = setInterval(() => {
            this.setState({ date: new Date() });
        }, delay);
    }

    componentDidMount() {
        this.startInterval();
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    componentDidUpdate(prevProps) {
        if (this.props.isPrecise === prevProps.isPrecise) {
          return;
        } else {
          clearInterval(this.intervalID);
          this.startInterval();
        }
    }
}

export default <Clock />;