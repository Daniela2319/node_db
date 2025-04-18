const { Client } = require("pg");

const client = new Client({
  host: "3.137.182.83",
  port: 5434,
  database: "postgres",
  user: "postgres",
  password: "123456",
  options: "-c search_path=daniela",
});

async function listar_veiculos() {
  try {
    await client.connect();
    console.log("Conectado ao PostgreSQL da AWS");
    const resultado = await client.query("SELECT * FROM veiculos");
    console.log("Lista de veiculos");
    console.table(resultado.rows);
  } catch (err) {
    console.error("Erro ao conectar ao db:", err.message);
  } finally {
    await client.end();
  }
}

async function criar_veiculo() {
  try {
    await client.connect();
    console.log("Conectado ao PostgreSQL da AWS");

    const query = `
      INSERT INTO veiculos
      (marca, modelo, placa, chassi, renavam, cor, ano_fabricacao, capacidade_carga)
      VALUES
      ('Mercedes', 'M200', 'WRT2T79', 'YS2R6X20001', '66778899006', 'Azul', '1985', '21000')
      RETURNING id;
      `;

    const resultado = await client.query(query);
    const id_inserido = resultado.rows[0].id;
    console.log("Veiculo inserido com ID:", id_inserido);
  } catch (err) {
    console.error("Erro ao conectar ao db:", err.message);
  } finally {
    await client.end();
  }
}

// Call the function to ensure it is used
listar_veiculos();
// criar_veiculo();
