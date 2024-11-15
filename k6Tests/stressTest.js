/*
Stress tests: Test app stability when running under extreme conditions, often for a long period of time. 
The tests place high user load, either spikes or gradually increasing load on the app, or they limit the app's computing resources.
*/

import http from 'k6/http'

export let options = {
	insecureSkipTLSVerify: true,
	noConnectionReuse: false,
	stages: [
		{ duration: '10s', target: 100 },
		{ duration: '10s', target: 100 },
		{ duration: '10s', target: 300 },
		{ duration: '10s', target: 300 },
		{ duration: '10s', target: 500 },
		{ duration: '10s', target: 500 },
		{ duration: '10s', target: 800 },
		{ duration: '30s', target: 800 },
		{ duration: '30s', target: 0 },
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