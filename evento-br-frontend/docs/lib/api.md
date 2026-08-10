# Descrição

A constante "api" é uma forma de puxar a URL base do ambiente da aplicação. Não é nada mais, nada menos, que uma forma de já definir propriedades padrão para o uso do Axios.

# Exemplos de uso

```
import { api } from '@/lib/api.ts';

[...]
await api
    .post('/User/login', Data.data)
    .then((response) => localStorage.setItem('token', response.data.token));
```

# Como usar a api?

Como que tu usa a api, afinal de contas?

## Tipos

A primeira parte são os tipos. Exemplo ".../User/...". Esse exemplo indica que vamos mexer com alguma propriedade do usuário.

- /User: Usuário comum da aplicação.

## Métodos

Para mais detalhes, acessar o Swagger do backend.

- /register: Para criar uma nova instância no banco de dados;
- /login: Para gerar um token de acesso.
