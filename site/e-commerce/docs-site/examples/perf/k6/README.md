# k6 – Performance smoke

## Ejecutar
```bash
# Escenario: checkout (crear orden)
BASE_URL=https://api.tu-dominio.com TOKEN=JWT k6 run order_checkout_smoke.js

# Escenario: navegación catálogo
BASE_URL=https://api.tu-dominio.com k6 run catalog_browse_smoke.js
```

## Metas (umbrales)
- `http_req_duration`: p95 < 200ms ; p99 < 350ms (orden) / p95 < 150ms ; p99 < 300ms (catálogo)
- `http_req_failed`: rate < 1%
