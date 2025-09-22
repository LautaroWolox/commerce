import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  scenarios: {
    browse: { executor: 'constant-vus', vus: 30, duration: '1m' },
  },
  thresholds: {
    http_req_duration: ['p(95)<150', 'p(99)<300'],
    http_req_failed: ['rate<0.01'],
  },
};

const BASE = __ENV.BASE_URL || 'https://api.example.com';

export default function () {
  const res = http.get(`${BASE}/api/catalog?query=notebook`);
  check(res, { 'status 200': (r) => r.status === 200 });
  sleep(0.5);
}
