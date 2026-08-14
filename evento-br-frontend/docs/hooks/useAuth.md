# Descrição

O hook "useAuth" tem como propósito guardar os métodos que vão ser utilizados sempre que for necessário algo inerente à autenticação do usuário. Um exemplo é o método "requireAuth", que requer que o usuário esteja logado para executar outro método.

# Exemplo de uso

Desestruturação:

```
  const { requireAuth } = useAuth();

```

# Métodos

Nesse momento há apenas um método.

## requireAuth

Método que recebe outro método como parâmetro e só executa aquilo se o usuário estiver logado. Caso ele não esteja logado, o método não será executado e irá aparecer um alert.

```
<Button
            onClick={() => requireAuth(() => setSettingsOpen(true))}
            variant="outline"
            className="bg-white size-10 rounded-md border-1 border-gray-300 p-0"
          >
```

# Observações

Não é obrigatório mas é interessante conhecer useState, useEffect e useCallback, já que foram utilizados no componente.
