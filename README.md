# node_db
Teste conexão Node_PostgreSQL

```mermaid
sequenceDiagram
    participant BancoDados as Banco de Dados (PostgreSQL)
    participant Servidor as Servidor (Node.js/Express)
    participant Navegador as Navegador (Cliente)

    Note over Servidor: Inicialização
    Servidor->>BancoDados: 1. Conexão PG Client (conectar())
    activate BancoDados
    BancoDados-->>Servidor: Conexão estabelecida
    deactivate BancoDados

    Note over Navegador: Carregamento da página
    Navegador->>Servidor: 2. GET / (HTML)
    Servidor->>Navegador: 3. Envia lista_veiculos.html

    Note over Navegador: Execução do JavaScript
    Navegador->>Servidor: 4. GET /veiculos (JSON)
    Servidor->>BancoDados: 5. Query SELECT * FROM veiculos
    activate BancoDados
    BancoDados->>Servidor: 6. Retorna dados dos veículos
    deactivate BancoDados
    Servidor->>Navegador: 7. Envia JSON

    Note over Servidor: Log no terminal
    Servidor->>Servidor: 8. Exibe no console (listarVeiculos())

    Note over Navegador: Renderização
    Navegador->>Navegador: 9. Preenche tabela (carregarVeiculos())
```

# Diagrama de Fluxo - Sistema de Veículos

Este diagrama mostra a comunicação entre os componentes do sistema:

```mermaid
sequenceDiagram
    participant BancoDados as Banco de Dados
    participant Servidor as Servidor
    participant Navegador as Navegador
    
    Servidor->>BancoDados: Conexão
    Navegador->>Servidor: Requisição HTML
    Servidor->>Navegador: Resposta HTML
    Navegador->>Servidor: Requisição JSON
    Servidor->>BancoDados: Query SQL
    BancoDados->>Servidor: Dados
    Servidor->>Navegador: JSON
```
