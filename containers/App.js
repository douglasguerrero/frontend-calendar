import React, {Component} from 'react';
import MonthCalendar from '../components/MonthCalendar';

class App extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            date: [new Date()],
        };

        const startDate = new Date();
        const endDate = new Date();

        endDate.setDate(startDate.getDate() + 10);
    };

    render () {
        return (
        	<div style={styles.container}>
                <h1> Calendario </h1>
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