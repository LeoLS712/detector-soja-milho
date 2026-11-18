# 🌱 Detector de doenças em soja e milho

Aplicação web que identifica doenças em folhas de **soja** e **milho** a partir de uma foto.
O modelo de IA roda **direto no navegador** (ONNX Runtime Web): a foto não sai do aparelho e não é preciso servidor.

## Classes reconhecidas
| Milho | Soja |
|---|---|
| Saudável | Saudável |
| Cercosporiose | Ferrugem asiática |
| Ferrugem comum | Mancha-alvo |
| Helmintosporiose | Crestamento de cercospora |
| Mancha-branca | |

## Como foi feito
- **Modelo:** MobileNetV3 (transfer learning do ImageNet), treinado em PyTorch no Google Colab e exportado para ONNX.
- **Imagens (7.835):** Embrapa Digipathos, Kaggle (Corn or Maize Leaf Disease), Mendeley (Multi-Class Soybean Leaf Disease) e ASDID (Auburn).
- **Resultado no teste:** 96,8% de acerto (acurácia balanceada 96,9%).
- **Hospedagem:** site estático (GitHub Pages).

## Arquivos
- `index.html`: página (interface e pré-processamento da imagem)
- `dados.js`: nomes das classes e informações de cada doença
- `modelo.onnx`: modelo treinado
- `ort.wasm.min.js`, `ort-wasm-simd-threaded.*`: ONNX Runtime Web

> Ferramenta de apoio: não substitui a avaliação de um engenheiro agrônomo.
