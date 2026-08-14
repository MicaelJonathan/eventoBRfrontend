# Descrição

Card de evento. Aqui é onde estarão as informações dos eventos no painel lateral.

# Props

```
interface EventCardProps {
  event: EventType;
}
```

Essa é a interface do componente. É redundante? Sim. De fato é mais uma camada para chamar o mesmo tipo. Ainda assim, não estava funcionando quando tentei colocar o tipo do parâmetro diretamente como EventType. No final das contas eu deixei desse jeito aí mesmo.

- **event**: Uma unidade de evento que será exibido no card.

# Exemplos de uso

```
<ul className="flex flex-col gap-2">
        {events.map((event) => (
          <li key={event.id}>
            <EventCard event={event} />
          </li>
        ))}
      </ul>
```
