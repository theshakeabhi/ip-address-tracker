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
	}, [loginStatus]);

	return (
		<div className='App'>
			<header className='App-header'>
				{!loginStatus && <SawoLogin setLoginStatus={setLoginStatus} />}
				{loginStatus && <Dashboard />}
			</header>
		</div>
	);
}

export default App;
