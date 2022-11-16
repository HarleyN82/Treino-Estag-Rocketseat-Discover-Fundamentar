## Background

- Define um fundo para o nosso elemento 
- Sua área de atuação é a caixa toda
- Por padrão, é transparente

### Exemplos

- Usar cores sólidas
- Usar imagens
- Controlar 
    - a posição das imagens,
    - se elas se repetem ou não
    - o tamanho delas na caixa
- Usar cor e imagem juntas
- Usar cor gradiente

### Background Repeat

/*Values*/
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/*Podemos usar 2 valores: horizontal | vertical*/
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

### Background Position

/*Pricipais valores*/
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

### Background Size

/*Values*/
background-size: cover; - Pega todo o conteúdo.
background-size: contain; - Estica no bloco.

/*Podemos usar 2 valores, o primeiro é para a largura da imagem e o segundo é para a altura*/
background-size: 40% auto;
background-size: 2em 25%;
background-size: auto 8px;
background-size: auto auto;

### Background Origin-clip

A propriedade background-origin é quem define o ponto de origem de uma imagem específica.

/*Principais valores*/
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;

O background-clip define se a cor ou imagem do background iniciam debaixo de sua área de borda, preenchimento ou conteúdo.

/*Principais valores*/
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;

### Background Attachment

A propriedade background-attachment determina se a posição da imagem vai ser fixa ou se vai rolar junto com o conteúdo.

/*Principais valores*/
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

### Shorthand

É só juntar todas as características juntas, dando espaço.

Ex: background: rgb(71, 171, 159) right top / 50px border-box;

Quando for colocar o "size" coloca-se uma barra.

### Gradient






### Múltiplos Valores






### Experimentar