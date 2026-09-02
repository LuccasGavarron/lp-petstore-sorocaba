# Pet Store Sorocaba — Direção de landing (prospecção, 2 versões)

Cliente real prospectado em Sorocaba/SP. Sem site no Google Maps.
Objetivo: 2 versões de landing fiéis à identidade real, para apresentar aos donos.

## Dados reais (fonte: Google Maps + Instagram @petstoresorocaba — NÃO inventar nada além)

- Nome: **Pet Store Sorocaba**
- Endereço: **Av. Edward Fru Fru Marciano da Silva, 880 — Jardim São Guilherme, Sorocaba/SP, 18074-621**
- WhatsApp: **(15) 99731-5119** → `https://wa.me/5515997315119` (mensagens pré-preenchidas por serviço)
- Telefone fixo: **(15) 3342-1295**
- Instagram: **@petstoresorocaba** (https://www.instagram.com/petstoresorocaba/) — 1.900+ seguidores, 1.000+ posts
- Horário: **Seg a Sex 09:00–18:00 · Sáb 08:00–16:00 · Dom fechado**
- Google: **4,6 ★ · 53 avaliações**
- Bio: "Tudo o que seu pet precisa em um só lugar. 🐾 Loja, banho e tosa, clínica e muito mais!"
- Serviços PINTADOS NA VAN da casa (foto real): **Clínica Veterinária · Banho e Tosa · Sistema Leva e Traz · Delivery de Ração**
- Destaques do Instagram: remoção de subpelo, penteados, gatos, vacinas, e o mascote **Alfredo** (série "Alfredo Informa" de dicas)
- Ensaios temáticos de banho e tosa (Páscoa, Natal, Halloween…) são marca registrada da casa.
- PROIBIDO: preços, promessas médicas, depoimentos inventados, números inventados.

## Identidade visual real

- Logo: `assets/img/logo.jpg` (oval verde com cão laranja + gato cinza, "Pet Store" em letras verdes cartoon, faixa preta "sorocaba", fundo creme com patinhas).
- Paleta: **verde-folha #55A03C** e **verde-escuro #3E7D2C** (dominantes), **laranja #E8863C** (cão/acentos), **creme-amarelado #FBF6E3** (fundo, como a logo), **preto-faixa #1C1B18**, **cinza-gato #9AA0A6** (detalhe). WhatsApp #1FA855 só em botões de conversa.
- Tipografia (Google Fonts): display **"Fredoka"** (600/700 — cartoon arredondada como a logo) + corpo **"Nunito Sans"** (400/600/700/800).
- Motivos: **patinhas em marca d'água** no fundo creme (como o fundo da logo, SVG repetido opacity ~.06), moldura oval, faixa preta fina como elemento gráfico (ex.: sob títulos, no rodapé), cantos arredondados médios.
- Fotos reais em `assets/img/` (todas do Instagram deles):
  - `post-01.jpg` → **A VAN do leva-e-traz na frente da loja** (fachada verde nº 880) — usar no hero ou na seção leva-e-traz/delivery; é a foto mais "real" da casa.
  - `post-07.jpg` → yorkie coroado em ensaio temático de Páscoa — seção banho e tosa/ensaios.
  - `post-09.jpg` → yorkie na mochilinha de transporte — foto fofa de apoio.
  - `post-02.jpg` e `post-03.jpg` → produtos da loja (toalhas umedecidas; petiscos) — seção loja/delivery de ração.
  - `post-05.jpg` e `post-08.jpg` → cards educativos verdes ("Alfredo Informa") — grade de dicas linkando o Instagram.
  - NÃO usar post-04, post-06, post-10 (não catalogadas).

## Estrutura (as duas versões; single page + termos/ e privacidade/ simples)

1. Header: logo + nav (Serviços · Banho & Tosa · Leva e Traz · Alfredo Informa · Onde estamos) + botão WhatsApp.
2. Hero: H1 na linha da bio ("Tudo o que seu pet precisa **em um só lugar**"), sub citando loja + banho e tosa + clínica + leva e traz; CTA WhatsApp + fixo; linha 4,6 ★ · 53 avaliações; horário + bairro.
3. Serviços (4 blocos): Clínica Veterinária · Banho & Tosa (com ensaios temáticos e remoção de subpelo) · Loja & Delivery de Ração · Sistema Leva e Traz — CTAs wa específicos.
4. **Leva e Traz / Delivery** em destaque com a foto real da van (post-01): "a van da Pet Store busca e leva" + delivery de ração.
5. Banho & Tosa + ensaios: fotos post-07 e post-09, citar penteados/ensaios temáticos e remoção de subpelo.
6. Alfredo Informa: grade com os 2 cards educativos + "mais dicas no @petstoresorocaba".
7. Avaliações: 4,6 ★ · 53 no Google + link Maps (https://www.google.com/maps/search/Pet+Store+Sorocaba).
8. Onde estamos: mapa embed (q=Pet Store Sorocaba Av. Edward Fru Fru Marciano da Silva 880) + endereço + horários + contatos (WhatsApp, fixo, IG).
9. Footer com logo, links, Termos/Privacidade.
10. WhatsApp flutuante; seletor "Versão 1/2" fixo canto superior esquerdo (index.html ↔ v2.html).

## As duas versões

- **index.html (Versão 1 — "Quintal Verde")**: fundo creme #FBF6E3 com patinhas d'água, cards brancos de borda verde suave, títulos verde-escuro com sublinhado laranja, faixa preta fina como divisor de seções, molduras ovais nas fotos (eco da logo); acolhedora e familiar.
- **v2.html (Versão 2 — "Verde Vitrine")**: hero em verde-escuro #3E7D2C (texto creme) com a van em destaque recortada em moldura arredondada grande, seções alternando creme/verde, laranja como acento de CTA secundário, layout split assimétrico, tipografia maior; mais comercial/moderna. CSS próprio (v2.css).

## Qualidade (obrigatório)

Responsivo 375/768/1440 sem overflow; headings semânticos; alt text descritivo real; foco visível; contraste AA (laranja nunca texto pequeno sobre creme — usar verde-escuro); `prefers-reduced-motion`; reveals via IntersectionObserver apenas; sem console errors; anti-vibecoded (ícones SVG próprios arredondados, sem emoji na UI, sem gradiente berrante).

> **02/09/2026:** as versões clássicas (v2.html/v3.html) e o seletor de versões foram removidos a pedido do cliente; o site publicado é só a Experiência (index.html).
