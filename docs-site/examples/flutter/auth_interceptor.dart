import 'package:dio/dio.dart';

class AuthInterceptor extends Interceptor {
  @override
  void onRequest(RequestOptions options, RequestInterceptorHandler handler) {
    final token = ''; // TODO: load JWT from secure storage
    if (token.isNotEmpty) {
      options.headers['Authorization'] = 'Bearer $token';
    }
    super.onRequest(options, handler);
  }
}

Dio buildDio() {
  final dio = Dio(BaseOptions(baseUrl: 'https://api.example.com'));
  dio.interceptors.add(AuthInterceptor());
  return dio;
}