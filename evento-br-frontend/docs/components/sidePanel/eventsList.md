# Descrição

EventsList é um componente visual que tem a responsabilidade de mostrar uma lista de eventos existentes no banco de dados. Ele recebe uma lista de eventos e mostra vários cards, cada um com um evento específico.

# Props

```
interface EventsListProps {
  events: EventType[];
}
```

Essa é a interface do componente.

- **events**: Array de vários eventos diferentes. Recomenda-se ver o código do EvetType.

# Exemplos de uso

```
<EventsList
          events={[
            {
              id: '0',
              title: 'Evento Patoense',
              imageUrl: '/forro.png',
              spot: 'Praça Edvaldo Motta',
              date: '24 de maio',
              hour: '20:00',
              participantsQuantity: 250,
              saved: false,
            },
            {
              id: '0',
              title: 'Evento Patoense',
              imageUrl: '/forro.png',
              spot: 'Praça Edvaldo Motta',
              date: '24 de maio',
              hour: '20:00',
              participantsQuantity: 250,
              saved: false,
            },
          ]}
        />
      </div>
```

Não será utilizado dessa maneira, deixando os eventos estáticos e explícitos desse jeito. Ainda assim, é uma boa forma para entender o funcionamento do componente.
