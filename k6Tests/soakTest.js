/*
Soak testing is another variation of load testing that is similar to the average-load test. It focuses on extended periods, analyzing the following:

The system’s degradation of performance and resource consumption over extended periods.
The system’s availability and stability during extended periods.
*/

import http from 'k6/http'

export let options = {
	insecureSkipTLSVerify: true,
	noConnectionReuse: false,
	stages: [
		{ duration: '1m', target: 500 },
		{ duration: '4h5m', target: 500 },
		{ duration: '1m', target: 0 },
	],
	thresholds: {
		http_req_duration: ['p(99)<150'] // 99% of requests must complete below 150ms
	}

}

const BASE_URL = 'http://localhost:54388';

export default () => {

	http.batch([
		['GET', `${BASE_URL}/todos/30`],
		['GET', `${BASE_URL}/todos/50`],
		['GET', `${BASE_URL}/todos/70`]
	])
}