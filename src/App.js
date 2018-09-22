import React, { Component } from 'react';
import './App.css';
import {NotificationDropDowns} from './components/notification/NotificationDropdown';
// import Header from './components/Header';
// const company = CompaniesData.companyList;
class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			openNotification: false,
			selectedCompany: '',
		};
	}
	
	handleOpen = () => {
		this.setState({openNotification: true})
	};

	render() {
		return (
			<div className="App">
				
				<NotificationDropDowns onClick={this.handleOpen}/>
				
			</div>
		);
	}
}

export default App;
