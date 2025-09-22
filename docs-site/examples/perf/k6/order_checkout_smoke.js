import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 20,
  duration: '1m',
  thresholds: {
    http_req_duration: ['p(95)<200', 'p(99)<350'],
    http_req_failed: ['rate<0.01'],
  },
};

const BASE = __ENV.BASE_URL || 'https://api.example.com';

export default function () {
  const payload = JSON.stringify({ items: [{ sku: 'SKU-123', qty: 1 }], address: 'AR' });
  const params = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${__ENV.TOKEN||''}` } };
  const res = http.post(`${BASE}/api/orders`, payload, params);
  check(res, { 'status 200': (r) => r.status === 200 });
  sleep(1);
}
