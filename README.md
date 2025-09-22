# Proyecto E-commerce - Arquitectura End-to-End

Plataforma de e-commerce empresarial con microservicios en GCP + integración On-Prem, priorizando tiempos de respuesta, resiliencia y continuidad del negocio.

## 🚀 Tecnologías Principales

- **Cloud Platform**: Google Cloud Platform (GCP)
- **Orquestación**: Kubernetes (GKE) + Istio Service Mesh
- **Mensajería**: Apache Kafka con Schema Registry
- **Bases de Datos**: PostgreSQL, MongoDB, Redis, Oracle
- **Seguridad**: OAuth 2.0/OIDC, CyberArk, mTLS
- **IA**: OpenAI Agents para recomendaciones y asistencia
- **Observabilidad**: Dynatrace + OpenTelemetry
- **Procesos**: Camunda BPMN para orquestación
- **Despliegue**: Blue/Green + Canary deployments

## 📁 Estructura del Proyecto
```
├─ app/                                 # tu código de aplicación
│  ├─ backend/                           # microservicios Java 21 + Spring Boot
│  │  ├─ pom.xml                         # parent (Spring Boot, Java 21, plugins, BOMs)
│  │  ├─ common/                         # librería compartida (DTOs, errores, tracing)
│  │  │  ├─ pom.xml
│  │  │  └─ src/
│  │  │     ├─ main/java/com/acme/common/
│  │  │     │  ├─ dto/                   # contratos cross-service
│  │  │     │  ├─ errors/                # excepciones, mapeo a HTTP
│  │  │     │  └─ tracing/               # helpers OpenTelemetry
│  │  │     └─ main/resources/
│  │  ├─ api-gateway/                    # gateway (si no usás solo Ingress/Istio)
│  │  │  ├─ pom.xml
│  │  │  └─ src/
│  │  │     ├─ main/java/com/acme/gateway/
│  │  │     │  ├─ GatewayApplication.java
│  │  │     │  └─ security/              # validación JWT (JWKs), scopes/roles
│  │  │     └─ main/resources/application.yml
│  │  ├─ bff/                            # BFF/GraphQL para front web/mobile
│  │  │  ├─ pom.xml
│  │  │  └─ src/
│  │  │     ├─ main/java/com/acme/bff/
│  │  │     │  ├─ resolver/              # resolvers GraphQL / controllers REST
│  │  │     │  ├─ service/               # orquestación a MS
│  │  │     │  └─ config/                # CORS, OIDC resource server, OTel
│  │  │     └─ main/resources/
│  │  │        ├─ application.yml        # Redis cache, OIDC issuer-uri, OTel exporter
│  │  │        └─ schema.graphqls        # (si usás GraphQL)
│  │  ├─ order-service/                  # órdenes → PostgreSQL + Kafka
│  │  │  ├─ pom.xml
│  │  │  └─ src/
│  │  │     ├─ main/java/com/acme/order/
│  │  │     │  ├─ OrderApplication.java
│  │  │     │  ├─ api/                   # REST controllers
│  │  │     │  ├─ domain/                # entidades JPA, agregados
│  │  │     │  ├─ repo/                  # Spring Data JPA (PostgreSQL)
│  │  │     │  ├─ events/                # productores/consumidores Kafka
│  │  │     │  └─ config/                # OIDC resource server, OTel, Kafka props
│  │  │     └─ main/resources/application.yml
│  │  ├─ payment-service/                # pagos → PostgreSQL + Kafka
│  │  │  ├─ pom.xml
│  │  │  └─ src/main/java/com/acme/payment/...
│  │  ├─ catalog-service/                # catálogo → MongoDB
│  │  │  ├─ pom.xml
│  │  │  └─ src/main/java/com/acme/catalog/...
│  │  ├─ user-service/                   # usuarios → PostgreSQL
│  │  │  ├─ pom.xml
│  │  │  └─ src/main/java/com/acme/user/...
│  │  ├─ inventory-service/              # stock → MongoDB (+ eventos stock.reserved)
│  │  │  ├─ pom.xml
│  │  │  └─ src/main/java/com/acme/inventory/...
│  │  ├─ integration-oracle/             # integración ERP on-prem Oracle
│  │  │  ├─ pom.xml
│  │  │  └─ src/
│  │  │     ├─ main/java/com/acme/oracle/   # DAOs/JPA, jobs idempotentes, mapeos
│  │  │     └─ main/resources/application-oracle.yml
│  │  ├─ camunda-checkout/               # proceso BPMN de checkout + delegates
│  │  │  ├─ pom.xml
│  │  │  └─ src/
│  │  │     ├─ main/java/com/acme/checkout/  # ReleaseStockDelegate, AuthorizePaymentDelegate
│  │  │     └─ main/resources/processes/checkout.bpmn
│  │  └─ docker/                         # Dockerfiles por servicio
│  │     ├─ Dockerfile.order
│  │     ├─ Dockerfile.payment
│  │     └─ ...
│  │
│  ├─ frontend/                          # Angular (SPA)
│  │  ├─ angular.json
│  │  ├─ package.json
│  │  └─ src/
│  │     ├─ index.html
│  │     ├─ main.ts
│  │     ├─ app/
│  │     │  ├─ app.module.ts
│  │     │  ├─ core/
│  │     │  │  ├─ interceptors/auth.interceptor.ts   # agrega Bearer del OIDC
│  │     │  │  └─ guards/auth.guard.ts               # protege rutas por scope/role
│  │     │  ├─ services/
│  │     │  │  ├─ orders.service.ts                  # REST órdenes
│  │     │  │  └─ ws.service.ts                      # WebSocket tracking
│  │     │  └─ pages/                                # catálogo, carrito, checkout
│  │     └─ environments/
│  │        ├─ environment.ts
│  │        └─ environment.prod.ts
│  │
│  └─ mobile/                                        # Flutter (iOS/Android)
│     ├─ pubspec.yaml
│     └─ lib/
│        ├─ main.dart
│        ├─ core/auth_interceptor.dart                # Dio + Bearer token
│        └─ api/orders_api.dart                       # cliente REST

```
## 🎯 Objetivos del Proyecto
- **Disponibilidad**: 99.9% SLA
- **Performance**: < 50ms latencia p95
- **Escalabilidad**: 100k+ eventos/segundo
- **Seguridad**: Zero Trust Architecture
- **ROI**: 240% en 18 meses

## 🔧 Instalación y Uso
1. Descargar o clonar el repositorio
2. Abrir `index.html` en un navegador moderno
3. Navegar por las diferentes secciones

## 📊 Métricas Clave (objetivos)
- **Throughput**: 10,000 QPS (PostgreSQL)
- **Latencia**: 1ms (Redis), 8ms (MongoDB), 15ms (PostgreSQL)
- **Disponibilidad**: 99.95% (cloud), 99.8% (on-prem)
- **Conversión**: +23% con recomendaciones de IA
