O marker do mapa é desenhado pelo mapComponent.tsx em components/ui.
O handler do click é feito no mapa e o estado é guardado na home, que em si passa as informações
para o sidePainel e o mesmo para os botões. 

O painel não pode clickar no create event a não ser que um marcador seja previamente selecionado no mapa.