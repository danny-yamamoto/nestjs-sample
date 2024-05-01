## Installation
https://docs.nestjs.com/recipes/prisma

## Request
### POST
```bash
curl -i -X POST -H 'Content-Type: application/json' -d '{"name" : "田中" , "email" : "tanaka@example.com"}' localhost:3000/users
```

```bash
node ➜ /workspaces/nestjs-sample (main) $ curl -i -X POST -H 'Content-Type: application/json' -d '{"name" : "田中" , "email" : "tanaka@example.com"}' localhost:3000/users
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 53
ETag: W/"35-ehdQQ2Af1o3GTjA+0ljhQJ2hy3A"
Date: Wed, 01 May 2024 09:53:24 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"id":6,"email":"tanaka@example.com","name":"田中"}
node ➜ /workspaces/nestjs-sample (main) $ 
```

### GET
```bash
curl -i -X GET localhost:3000/users/6
```

```bash
node ➜ /workspaces/nestjs-sample (main) $ curl -i -X GET localhost:3000/users/6
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 53
ETag: W/"35-ehdQQ2Af1o3GTjA+0ljhQJ2hy3A"
Date: Wed, 01 May 2024 09:54:22 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"id":6,"email":"tanaka@example.com","name":"田中"}
node ➜ /workspaces/nestjs-sample (main) $
```
