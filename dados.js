// Gerado a partir de doencas.py e do modelo treinado
const CLASSES = ["milho_cercosporiose", "milho_ferrugem_comum", "milho_helmintosporiose", "milho_mancha_branca", "milho_saudavel", "soja_cercospora", "soja_ferrugem_asiatica", "soja_mancha_alvo", "soja_saudavel"];
const DOENCAS = {
 "milho_cercosporiose": {
  "nome": "Cercosporiose (mancha-de-cercospora)",
  "cultura": "Milho",
  "agente": "Cercospora zeae-maydis (fungo)",
  "sintomas": "Lesões retangulares, cinza a cor de palha, limitadas pelas nervuras da folha. Começam nas folhas de baixo e sobem pela planta.",
  "recomendacao": "Usar híbridos resistentes, fazer rotação de culturas e monitorar a lavoura. Se a doença avançar antes do pendoamento, avaliar aplicação de fungicida.",
  "doente": true
 },
 "milho_ferrugem_comum": {
  "nome": "Ferrugem comum",
  "cultura": "Milho",
  "agente": "Puccinia sorghi (fungo)",
  "sintomas": "Pústulas pequenas, salientes, marrom-avermelhadas, espalhadas nas duas faces da folha. Ao passar o dedo, sai um pó cor de ferrugem.",
  "recomendacao": "Preferir híbridos resistentes. Em ataques fortes no início do ciclo, avaliar aplicação de fungicida.",
  "doente": true
 },
 "milho_helmintosporiose": {
  "nome": "Helmintosporiose (mancha de turcicum)",
  "cultura": "Milho",
  "agente": "Exserohilum turcicum (fungo)",
  "sintomas": "Lesões grandes e alongadas, em formato de charuto, cinza-esverdeadas a cor de palha, com vários centímetros de comprimento.",
  "recomendacao": "Usar híbridos resistentes, rotação de culturas e manejo dos restos da lavoura anterior. Avaliar fungicida conforme a severidade.",
  "doente": true
 },
 "milho_mancha_branca": {
  "nome": "Mancha-branca",
  "cultura": "Milho",
  "agente": "Pantoea ananatis (bactéria), associada a fungos",
  "sintomas": "Manchas arredondadas, de início verde-claras e encharcadas, que secam e ficam branco-palha. Costumam aparecer perto do pendoamento.",
  "recomendacao": "Usar híbridos resistentes e ajustar a época de semeadura. Aplicações preventivas podem ser indicadas em regiões com histórico da doença.",
  "doente": true
 },
 "milho_saudavel": {
  "nome": "Folha saudável",
  "cultura": "Milho",
  "agente": null,
  "sintomas": "Nenhum sintoma de doença foi identificado nesta folha.",
  "recomendacao": "Continue monitorando a lavoura regularmente, principalmente as folhas de baixo.",
  "doente": false
 },
 "soja_ferrugem_asiatica": {
  "nome": "Ferrugem asiática",
  "cultura": "Soja",
  "agente": "Phakopsora pachyrhizi (fungo)",
  "sintomas": "Pontinhos castanhos a bronzeados, principalmente na face de baixo da folha, com pequenas pústulas (vistas com lupa). A folha amarela e cai antes do tempo.",
  "recomendacao": "É a doença mais grave da soja no Brasil e se espalha rápido pelo vento. Procure um agrônomo o quanto antes para definir o controle com fungicidas. Prevenção: respeitar o vazio sanitário e semear no início da janela.",
  "doente": true
 },
 "soja_mancha_alvo": {
  "nome": "Mancha-alvo",
  "cultura": "Soja",
  "agente": "Corynespora cassiicola (fungo)",
  "sintomas": "Manchas castanhas arredondadas, com halo amarelado e anéis concêntricos (como um alvo) quando maiores. Pode causar queda de folhas.",
  "recomendacao": "Preferir cultivares menos suscetíveis, fazer rotação com gramíneas (ex.: milho) e avaliar fungicidas com um agrônomo, pois há fungicidas com baixa eficiência.",
  "doente": true
 },
 "soja_cercospora": {
  "nome": "Crestamento foliar de cercospora (mancha-púrpura)",
  "cultura": "Soja",
  "agente": "Cercospora kikuchii (fungo)",
  "sintomas": "Folhas de cima com cor arroxeada a bronzeada, aspecto de couro e pontuações escuras. Também mancha de roxo as sementes.",
  "recomendacao": "Usar sementes sadias e tratadas, fazer rotação de culturas e incluir o controle das doenças de final de ciclo no programa de fungicidas.",
  "doente": true
 },
 "soja_saudavel": {
  "nome": "Folha saudável",
  "cultura": "Soja",
  "agente": null,
  "sintomas": "Nenhum sintoma de doença foi identificado nesta folha.",
  "recomendacao": "Continue monitorando, principalmente na época de chuva, quando a ferrugem asiática aparece.",
  "doente": false
 }
};
