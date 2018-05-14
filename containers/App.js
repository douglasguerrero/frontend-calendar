import React, {Component} from 'react';
import DateForm from '../components/DateForm';
import MonthCalendar from '../components/MonthCalendar';
import {Noofmonths} from '../util';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            date: [new Date()],
            value: '',
        };
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    renderCalendar = () => {
        const startDate = new Date(2018,7,15);
        const endDate = new Date(2018,7,15);
        endDate.setDate(startDate.getDate() + 160);

        const numberOfMonths = Noofmonths(startDate, endDate);
        const startMonth = startDate.getMonth();

        const dateRange = {
            startDate,
            endDate,
        }

        const calendarArray = [];

        for (let i = 0; i < numberOfMonths; i++) { 
            calendarArray.push(<MonthCalendar key={`m${i}`} dateRange={dateRange} currentMonth={ startMonth + i }/>);
            calendarArray.push(<br key={`b${i}`} />);
        }

        return calendarArray.length > 0 ? calendarArray : null;
    }

    render () {
        const calendar = this.renderCalendar();
        return (
        	<div style={styles.container}>
                <h1> Calendario </h1>
                <DateForm />
                <br/>
                { calendar }
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