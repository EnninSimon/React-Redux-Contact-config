import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Contacts from './components/Contacts';
import AddContactForm from './components/AddContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [
				{
					name: "Ennin Simon",
					email: "simon@gmail.com",
					address: "Asamankese",
					phone_number: "0244212481",
					type: "Single",
					id: "34629"
				},
				{
					name: "Adwoa Sega",
					email: "adwoa@gmail.com",
					address: "Suhum",
					phone_number: "0558292950",
					type: "Married",
					id: "3469494"
				},

			]
		}
	}

	addNewUser = (user) => {
		user.id = Math.random().toString()
		this.setState({
			users: [...this.state.users, user]
		})
	}

	deleteUser = (id) => {
		let undeletedUser = this.state.users.filter(user => user.id !== id);
		this.setState({
			users: undeletedUser
		})
	}

	editUser = (id, updatedUser) => {
		this.setState({
			users: this.state.users.map(user => user.id === id ? updatedUser : user)
		})
	}

	render() {
		return (
			<>
				<Container fluid style={{ marginTop: "2rem" }}>
					<Row>
						<Col md="4">
							<h4 className="text-center">Add New Contact</h4>
							<AddContactForm addUser={this.addNewUser} />
						</Col>
						<Col>
							<h4 className="text-center" style={{ paddingBottom: "15px" }}>All Contacts</h4>
							<Contacts usersData={this.state.users}
								deleteUser={this.deleteUser}
								editUser={this.editUser} />
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default App;




