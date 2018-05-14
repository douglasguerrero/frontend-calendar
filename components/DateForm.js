import React from 'react';
import { Button, Checkbox, Form, Card, Input } from 'semantic-ui-react'

export default class DateForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            numberOfDays: '',
            countryCode: '',
        };
    };

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

	render () {
		return (
			<div>
                <Card>
                    <Card.Content header='Opciones' />
                    <Card.Content>
                        <Form onSubmit={() => this.props.onClick(this.state)}>
                            <Form.Field>
                                <label> Start date </label>
                                <Input name="startDate" onChange={this.handleChange} placeholder="MM/DD/YYYY"/>
                            </Form.Field>
                            <Form.Field>
                                <label> Number of days </label>
                                <Input name="numberOfDays" onChange={this.handleChange} placeholder="20"/>
                            </Form.Field>
                            <Form.Field>
                                <label> Country code </label>
                                <Input name="countryCode" onChange={this.handleChange} placeholder="US"/>
                            </Form.Field>
                            <Button primary floated='right' type='submit'>Submit</Button>
                        </Form>
                    </Card.Content>
                </Card>
			</div>
		)
	}
}