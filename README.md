# 🛒 E-Commerce E2E · Arquitectura Enterprise

Este proyecto reúne la **documentación, ejemplos y arquitectura completa de un e-commerce enterprise end-to-end (E2E)**.  
Combina **plataforma cloud-native (GCP/GKE/Istio)** con **on-prem (OCP4/Oracle)** para lograr resiliencia, escalabilidad y continuidad sin fricción con el legado.

👉 Deploy directo en **Netlify** como sitio estático.

---

## 🚀 Características principales

### 🔹 Frontend
- **Angular (Web):** SPA con routing, lazy loading e interceptores JWT.  
- **Flutter (Mobile):** aplicación híbrida (iOS/Android) con autenticación Bearer y smoke tests de compra/checkout.

### 🔹 Backoffice y Datos
- **Oracle ERP/WMS/Billing:** integra procesos financieros/logísticos en bounded contexts.  
- **PostgreSQL:** operaciones transaccionales (órdenes, usuarios, pagos) con consistencia ACID.  
- **MongoDB:** catálogo flexible, variantes, escalabilidad horizontal.  
- **Redis:** caché de lecturas y sesiones de baja latencia.

### 🔹 Integración y Procesos
- **Kafka + Schema Registry:** backbone de eventos versionados.  
- **Camunda BPMN:** orquestación del checkout (`reserveStock → authorizePayment → createOrder`).  
- **OAuth2/OIDC:** autenticación estándar, API-Gateway válida JWT y propaga identidades, roles y políticas.

### 🔹 Observabilidad y SLOs
- **OpenTelemetry + Dynatrace:** métricas, trazas y dashboards de negocio, con SLOs p95/p99.  

### 🔹 Entrega Continua
- **Tekton + quality gates (SAST/DAST/E2E):** pipelines automatizados.  
- **Blue/Green & Canary:** despliegues controlados por métricas de negocio.

---

## 📂 Estructura del proyecto

.
├── index.html # Página principal (landing oscura con menú de navegación)
├── arquitectura.html # Ejemplo de sección técnica
├── checkout.html
├── kafka.html
├── openai.html
├── observability.html
├── databases.html
├── deploy.html
├── diagrams.html
├── animations.html
├── docs.html
├── code.html
├── README.md
└── assets/... # Archivos estáticos (CSS, JS, imágenes, etc.)


---

## 🌐 Deploy en Netlify

### Opción A · Drag & Drop
1. Comprimir la carpeta del proyecto (sin subcarpetas innecesarias).  
2. Ir a Netlify → **Deploys** → **Drag & Drop**.  
3. Arrastrar el `.zip` o carpeta.  

### Opción B · GitHub
1. Subir este repo a GitHub.  
2. Conectarlo a Netlify.  
3. Configuración de proyecto en Netlify:
   - **Build command:** *(vacío)*  
   - **Publish directory:** `.` (raíz del repo)  

El sitio quedará disponible en:  
`https://<nombre-del-sitio>.netlify.app/`
