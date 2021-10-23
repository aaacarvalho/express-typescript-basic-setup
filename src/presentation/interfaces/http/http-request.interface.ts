type HttpRequestMethod = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'

export interface HttpRequest {
  body: Record<string, any>
  method?: HttpRequestMethod
}
