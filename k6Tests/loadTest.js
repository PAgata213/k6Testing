/*
Load tests: Test whether the app can handle a specified load of users for a certain scenario while still satisfying the response goal. 
The app is run under normal conditions.
*/

import http from 'k6/http'

export let options = {
	insecureSkipTLSVerify: true,
	noConnectionReuse: false,
	stages: [
		{ duration: '1m', target: 200 },
		{ duration: '5m', target: 200 },
		{ duration: '1m', target: 0 },
	],
	thresholds: {
		http_req_duration: ['p(99)<150'] // 99% of requests must complete below 150ms
	}

}

export default () => {
	let response = http.get('http://localhost:54388/todos/30');
}