import React, {Component} from 'react';
import DateForm from '../components/DateForm';
import MonthCalendar from '../components/MonthCalendar';

class App extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            date: [new Date()],
            value: '',
        };

        const startDate = new Date();
        const endDate = new Date();

        endDate.setDate(startDate.getDate() + 10);
    };

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    render () {
        return (
        	<div style={styles.container}>
                <h1> Calendario </h1>
                <DateForm />
                <br/>
                <MonthCalendar />
                <br/>
                <MonthCalendar />
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default App;