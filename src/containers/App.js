import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import SawoLogin from './sawo-login/SawoLogin';

function App() {
	const [loginStatus, setLoginStatus] = useState(false);

	useEffect(() => {
		const userId = localStorage.getItem('user_id');
		if (userId) {
			setLoginStatus(true);
		}
		//write sawo api to compare between local storage userid
		//and sawo payload
	}, [loginStatus]);

	return (
		<div className='App'>
			{!loginStatus && <SawoLogin setLoginStatus={setLoginStatus} />}
			{loginStatus && <Dashboard />}
		</div>
	);
}

export default App;
