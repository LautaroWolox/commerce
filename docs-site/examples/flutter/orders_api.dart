import 'package:dio/dio.dart';

class OrdersApi {
  final Dio dio;
  OrdersApi(this.dio);

  Future<Response> create(Map<String, dynamic> payload) {
    return dio.post('/api/orders', data: payload);
  }

  // Ejemplo de SSE simple (server-sent events)
  // Para producción usar paquete específico de SSE.
}