import React from 'react';
import Calendar from 'react-calendar';
import '../styles/Calendar.scss';
import {customTileStyle} from '../util';

export default class MonthCalendar extends React.Component {
	constructor(props) {
		super(props);

		const currentYear = props.dateRange.startDate.getFullYear();
    
        this.state = {
            startDate: props.dateRange.startDate,
			endDate: props.dateRange.endDate,
			currentDate: new Date(currentYear, props.currentMonth),
		};
    }
	render () {
		return (
			<div>
				<Calendar 
                    calendarType='US' view='month'
                    tileClassName={({ date, view }) => customTileStyle(date, view, this.state.currentDate, this.state.startDate, this.state.endDate)}
                    selectRange
					value={this.state.currentDate}
                />
			</div>
		)
	}
}