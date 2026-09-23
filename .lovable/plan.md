# Migração do site YOUDES

## Objetivo
Transformar os 11 HTMLs e o CSS compartilhado em um site navegável dentro da estrutura atual, preservando textos, seções e identidades visuais.

## Implementação
1. Trazer apenas os arquivos-fonte do ramo remoto sincronizado para uma área temporária segura.
2. Criar uma navegação comum com Início, Portfólio, Serviços, Processos, Planos e acesso aos seis cases.
3. Converter cada HTML em uma rota própria, corrigindo todos os links antigos para URLs simples e consistentes.
4. Incorporar o `Estilo.css` ao design global da página inicial e manter os estilos particulares de cada página/case isolados.
5. Preservar os SVGs, textos, preços, etapas, chamadas de contato e identidades visuais originais.
6. Remover os HTMLs/CSS soltos da raiz depois que suas versões convertidas estiverem funcionando.
7. Conferir navegação, visual em computador e celular, erros e metadados de compartilhamento de todas as páginas.

## Rotas
- `/` — Início
- `/portfolio` — Portfólio
- `/servicos` — Serviços
- `/processos` — Processos
- `/planos` — Planos
- `/cases/bloco-studio`
- `/cases/lume-atelie`
- `/cases/nomade-coworking`
- `/cases/pulso-fitness`
- `/cases/raiz-cafe`
- `/cases/vertice-contabilidade`

## Observação
O ramo remoto contém referências a cinco fotos na pasta `img`, mas os arquivos de imagem não foram enviados. A migração manterá essas referências visualmente identificadas; as fotos reais precisarão ser adicionadas depois para reprodução completa.

## Detalhes técnicos
- As páginas serão renderizadas pelo roteamento nativo do projeto, sem arquivos HTML independentes.
- Links internos antigos como `Portifolio.html` e `Portfolio.html` serão normalizados.
- Cada página terá título e descrição próprios.
