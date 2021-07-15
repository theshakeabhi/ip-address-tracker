import React from 'react';
import '../../styles/typography/typography.css';
import './Dashboard.css';

function Dashboard() {
	return (
		<div>
			<h3 className='heading'>IP Address Tracker</h3>
			<input
				className='search search-bar'
				placeholder='Search for any IP address or domain'
			></input>
			<div style={{ display: 'flex' }}>
				<div>
					<p className='ip-details-title'>IP Address</p>
					<p className='ip-details'>192.123.123.123</p>
				</div>
				<div>
					<p className='ip-details-title'>Location</p>
					<p className='ip-details'>brokyline</p>
				</div>
				<div>
					<p className='ip-details-title'>Timezone</p>
					<p className='ip-details'>UTC</p>
				</div>
				<div>
					<p className='ip-details-title'>ISP</p>
					<p className='ip-details'>starlink</p>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
