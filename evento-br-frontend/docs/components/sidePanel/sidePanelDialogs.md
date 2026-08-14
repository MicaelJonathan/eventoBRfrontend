# Descrição

Componente com o propósito de guardar os dialogs que aparecem no painel lateral. É mais fácil de modificar a estrutura para não poluir o código principal.

# Props

```
interface SidePanelDialogsProps {
  createEventOpen: boolean;
  setCreateEventOpen: (open: boolean) => void;
  calendarOpen: boolean;
  setCalendarOpen: (open: boolean) => void;
  settingsOpen: boolean;
  setSettingsOpen: (open: boolean) => void;
}
```

Essa é a interface do componente. Perceba que é meramente uma forma de buscar diferentes "useState" no componente pai.

- **createEventOpen**: Atributo que determina se o modal de criação de eventos está ou não aberto.
- **setCreateEventOpen**: Método que determina quando o atributo acima será modificado.
- **calendarOpen** : Atributo que determina se o modal de calendário está ou não aberto.
- **setCalendarOpen** : Método que determina quando o atributo acima será modificado.
- **settingsOpen** : Atributo que determina se o modal de configurações está ou não aberto.
- **setSettingsOpen** : Método que determina quando o atributo acima será modificado.

# Exemplos de uso

```
      <SidePanelDialogs
        createEventOpen={createEventOpen}
        setCreateEventOpen={setCreateEventOpen}
        calendarOpen={calendarOpen}
        setCalendarOpen={setCalendarOpen}
        settingsOpen={settingsOpen}
        setSettingsOpen={setSettingsOpen}
      />
```
