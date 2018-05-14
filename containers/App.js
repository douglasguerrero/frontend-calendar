import React, {Component} from 'react';
import moment from 'moment';
import DateForm from '../components/DateForm';
import MonthCalendar from '../components/MonthCalendar';
import { Noofmonths, checkIfDateIsValid, checkIfNumberIsValid } from '../util';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            numberOfDays: null,
            countryCode: null,
        };
    };

    handleChildClick(formObject) {
        const startDate = moment(formObject.startDate, "MM/DD/YYYY");
        if (checkIfDateIsValid(startDate) && checkIfNumberIsValid(formObject.numberOfDays)) { 
            this.setState({startDate});
            this.setState({numberOfDays: Number(formObject.numberOfDays)});
            this.setState({countryCode: formObject.countryCode});
        } else {
            alert('date format or week number is invalid');
        }
     }

    renderCalendar = () => {
        const calendarArray = [];
        if(this.state.startDate !== null) {
            const startDate = this.state.startDate.toDate();
            const endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + this.state.numberOfDays);

            const numberOfMonths = Noofmonths(startDate, endDate);
            const startMonth = startDate.getMonth();

            const dateRange = {
                startDate,
                endDate,
            }

            for (let i = 0; i < numberOfMonths; i++) { 
                calendarArray.push(<MonthCalendar key={`m${i}`} dateRange={dateRange} currentMonth={ startMonth + i }/>);
                calendarArray.push(<br key={`b${i}`} />);
            }
        }

        return calendarArray.length > 0 ? calendarArray : null;
    }

    render () {
        const calendar = this.renderCalendar();
        return (
        	<div style={styles.container}>
                <h1> Calendario </h1>
                <DateForm onClick={this.handleChildClick.bind(this)}/>
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