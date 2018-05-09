import React from 'react';
import { Button, Checkbox, Form, Card, Input } from 'semantic-ui-react'

export default class DateForm extends React.Component {
    state = {
        startDate: '',
        numberOfDays: '',
        countryCode: '',
    };

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    onSubmit() {

        console.log('submit', this.state.startDate, this.state.numberOfDays);
    }
	render () {
		return (
			<div>
                <Card>
                    <Card.Content header='Opciones' />
                    <Card.Content>
                        <Form onSubmit={() => this.onSubmit()}>
                            <Form.Field>
                                <label> Start date </label>
                                <Input name="startDate" onChange={this.handleChange}/>
                            </Form.Field>
                            <Form.Field>
                                <label> Number of days </label>
                                <Input name="numberOfDays" onChange={this.handleChange}/>
                            </Form.Field>
                            <Form.Field>
                                <label> Country code </label>
                                <Input name="countryCode" onChange={this.handleChange}/>
                            </Form.Field>
                            <Button primary floated='right' type='submit'>Submit</Button>
                        </Form>
                    </Card.Content>
                </Card>
			</div>
		)
	}
}