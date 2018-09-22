import React, { Component } from 'react';
import './App.css';
import {NotificationDropDowns} from './components/notification/NotificationDropdown';
import Header from './components/Header';
// const company = CompaniesData.companyList;
class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			openNotification: false,
			selectedCompany: '',
		};
	}

	render() {
		return (
			<div className="App">
				<Header>
					<NotificationDropDowns />
				</Header>
			</div>
		);
	}
}

export default App;
