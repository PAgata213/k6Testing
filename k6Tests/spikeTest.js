/*
A spike test is a type of load testing that verifies whether the system survives and performs under sudden and massive rushes of utilization.

Spike tests are useful when the system may experience events of sudden and massive traffic.
*/

import http from 'k6/http'

export let options = {
	insecureSkipTLSVerify: true,
	noConnectionReuse: false,
	stages: [
		{ duration: '10s', target: 100 },
		{ duration: '20s', target: 100 },
		{ duration: '10s', target: 1500 },
		{ duration: '30s', target: 1500 },
		{ duration: '10s', target: 100 },
		{ duration: '20s', target: 100 },
		{ duration: '10s', target: 0 },
	]
}

const BASE_URL = 'http://localhost:54388';

export default () => {
	http.batch([
		['GET', `${BASE_URL}/todos/30`],
		['GET', `${BASE_URL}/todos/50`],
		['GET', `${BASE_URL}/todos/70`]
	])
}