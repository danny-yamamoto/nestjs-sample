## Installation
https://docs.nestjs.com/recipes/prisma

## Request
### POST
- Create user
```bash
curl -X POST -H 'Content-Type: application/json' -d '{"name" : "佐藤" , "email" : "sato@example.com"}' localhost:3000/users
```

### GET
- Get user
```bash
curl -i -X POST localhost:3000/users/2
```
