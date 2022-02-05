/* Lógico: */

CREATE TABLE clientes (
    CPF char(11) not null PRIMARY KEY,
    nome varchar(50) not null,
    Data_de_nascimento date not null,
    email varchar(100) not null UNIQUE,
    Senha varchar(12) not null
);

CREATE TABLE destinos (
    lugar varchar(100) not null,
    data_embarque datetime not null,
    valorprimeiraclasse float not null,
    valoreconomica float not null,
    ID_destinos int not null PRIMARY KEY
);

CREATE TABLE passagem (
    destino varchar(100) not null,
    codigo char(12) not null PRIMARY KEY,
    data_embarque datetime not null,
    valor float not null,
    ID_PassagemCliente char(11) not null
);
 
ALTER TABLE passagem ADD CONSTRAINT FK_passagem_2
    FOREIGN KEY (ID_PassagemCliente)
    REFERENCES clientes (CPF)
    ON DELETE CASCADE;

create view dadospassagemcliente as select passagem.destino, passagem.valor, passagem.codigo, passagem.ID_PassagemCliente,
 passagem.data_embarque from passagem;