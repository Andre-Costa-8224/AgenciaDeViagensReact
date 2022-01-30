-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE clientes (
CPF CHAR(11) PRIMARY KEY,
Nome VARCHAR(50),
email VARCHAR(100),
Data_de_nascimento DATETIME,
Senha VARCHAR(12)
)

CREATE TABLE passagem (
data_embarque DATETIME,
destino VARCHAR(100),
ID_PassagemCliente CHAR(11),
ID_passagem INTEGER PRIMARY KEY,
codigo CHAR(12),
CPF CHAR(11),
lugar VARCHAR(100),
FOREIGN KEY(CPF) REFERENCES clientes (CPF)
)

CREATE TABLE destinos (
lugar VARCHAR(100) PRIMARY KEY,
valorprimeiraclasse DECIMAL((5,2)),
valoreconomica DECIMAL((5,2))
)

ALTER TABLE passagem ADD FOREIGN KEY(lugar) REFERENCES destinos (lugar)
