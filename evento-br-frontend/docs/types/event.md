Documenta o tipo de contrato de dados que temos para com os eventos. Atualmente, segue esse modelo:

```
export interface EventType {
  id: string;
  title: string;
  imageUrl: string;
  spot: string;
  date: string;
  hour: string;
  participantsQuantity: number;
  latitude: number;
  longitude: number;
  saved?: boolean;
}
```

- id: Identificador mor do evento;
- title: O título do evento que aparece em destaque no componente;
- imageUrl: O caminho da imagem. Lembrando que a imagem deve estar na pasta "public" e deve ser colocado dessa forma " imageUrl: '/forro.png',
  "
- spot: Local onde vai acontecer o evento;
- date: Data do evento;
- hour: Hora do evento;
- participantsQuantity: Capacidade máxima de pessoas;
- latitude: numero pego pelo click do mapa e auto inserido no formulario de evento
- longitude: numero pego pelo click do mapa e auto inserido no formulario de evento
- saved: Determina se está salvo ou não no banco de dados.
