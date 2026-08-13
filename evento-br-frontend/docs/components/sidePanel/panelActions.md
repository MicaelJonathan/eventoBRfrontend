# Descrição

A ideia do componente é simplesmente ter uma barra de ações. O interessante aqui é separar a lógica do que vai acontecer com cada um desses botões da parte visual do componente. Perceba que é esse o motivo pelo qual a interface recebe o que ainda vai acontecer quando isso ou aquilo for aberto.

# Props

```
interface PanelActionsProps {
  onCreateEvent: () => void;
  onOpenCalendar: () => void;
  onOpenProfile: () => void;
  onOpenSettigns: () => void;
}
```

Essa é a interface das ações do painel. Perceba que todos recebem métodos para tentar separar a lógica de ação da lógica de disposição visual.

- **onCreateEvent**: Quando for clicado o botão de criar evento, o que vai acontecer?
- **onOpenCalendar**: Quando for clicado o botão de abrir o calendário, o que vai acontecer?
- **onOpenProfile** : Quando for clicado o botão de abrir o perfil, o que vai acontecer?
- **onOpenSettigns** : Quando for clicado o botão de abrir as configurações, o que vai acontecer?

# Exemplos de uso

```
import PanelActions from './panelActions';

<PanelActions
          onCreateEvent={() => requireAuth(() => setCreateEventOpen(true))}
          onOpenCalendar={() => requireAuth(() => setCalendarOpen(true))}
          onOpenProfile={() =>
            requireAuth(() => {
              router.push('/perfil');
            })
          }
          onOpenSettigns={() => requireAuth(() => setSettingsOpen(true))}
        />
```

# Como aumentar o componente

Basta criar mais um atributo na interface declarando que o objeto vai receber uma nova função e implementar a lógica visual de uma nova ação.

# Observações

- Não se sabe ao certo o momento de utilizar type ou interface. Caso seja necessário, é possível trocar.
