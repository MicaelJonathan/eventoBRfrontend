# Componente

A search bar é uma pequena barra de pesquisa que fica fixa no canto superior esquerdo da tela. É uma combobox com um estilo já definido por padrão que permite a mudança apenas de algumas poucas propriedades. Ela recebe um input (ou não) e mostra todos os resultados referentes àquele input. Assim, ela salva aquele valor.

# Props

```
interface searchBarProps {
  placeholder?: string;
  emptyMessage?: string;
  data?: string[];
}
```

Essa é a interface da barra de pesquisa.

- **placeholder**: É a frase que aparece antes de o usuário digitar alguma coisa.
- **emptyMessage**: Quando o usuário pesquisar algo que não existe dentro da lista de dados, o que irá aparecer é essa mensagem.
- **data** : Uma lista contendo todos os nomes possíveis de serem pesquisados.

# Exemplos de uso

```
import SearchBar from '@/components/ui/searchBar';

export default function ExamplePage({}) {
  return (
    <div>
      <SearchBar
        placeholder="Aqui será o texto antes de digitar"
        data={['Opção 1', 'Opção 2']}
        emptyMessage="Não há esse item..."
      />
    </div>
  );
}
```

# Observações de Acessibilidade

O contraste é bom para o texto digitado mas pode ser pequeno para o placeholder.

# Possíveis problemas futuros

- O tamanho da barra é fixo
- Não há responsividade
- Não há centralização da barra
- Não há implementação do ZOD para ser realmente funcional

# Perguntas Frequentes

- Qual é o papel do componente?
  - Filtrar uma única opção dentro de uma lista de string.

- Quais props ele expõe?
  - placeholder: para a frase que aparece antes de digitar algo;
  - data: a lista a ser filtrada;
  - emptyMessage: output caso o item digitado no input não exista.

- Quais defaults ele assume?
  - Tudo está opcional sem default, de fato, algum. Então ele assume que é nulo para todos os casos.

- De onde vêm os itens?
  - O placeholder pode vir da implementação prática do componente;
  - A emptyMessage, também;
  - Agora, o data precisa vir do banco de dados dos eventos.

- Quais classes/estilos ele pressupõe?
  - Só tem o estilo padrão do site

- Em quais casos ele não deve ser usado?
  - Ou quando a filtragem for feita server side ou quando não é necessária a seleção de um ou mais itens.
