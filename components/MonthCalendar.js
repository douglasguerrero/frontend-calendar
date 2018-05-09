import React from 'react';
import Calendar from 'react-calendar';
import '../styles/Calendar.scss';
import {customTileStyle} from '../util';

export default class MonthCalendar extends React.Component {
	render () {
		return (
			<div>
				<Calendar 
                    calendarType='US' view='month'
                    tileClassName={({ date, view }) => customTileStyle(date, view, 4)}
                    selectRange
					value={new Date()
					}
                />
			</div>
		)
	}
}