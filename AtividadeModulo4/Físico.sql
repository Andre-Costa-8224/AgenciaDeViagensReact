/* Lógico: */

CREATE TABLE cliente (
    CPF char(11) not null PRIMARY KEY,
    Nome varchar(50) not null,
    Data_de_nascimento date not null,
    Email varchar(100) not null UNIQUE,
    Senha varchar(12) not null
);

CREATE TABLE destino (
    Lugar varchar(100) not null,
    Data_embarque date not null,
    Valorprimeiraclasse float not null,
    Valoreconomica float not null,
    ID_destinos bigint not null PRIMARY KEY auto_increment
);

CREATE TABLE passagem (
    Destino varchar(100) not null,
    Codigo char(12) not null PRIMARY KEY,
    Data_embarque datetime not null,
    Valor float not null,
    ID_PassagemCliente char(11) not null
);
 
ALTER TABLE passagem ADD CONSTRAINT FK_passagem_2
    FOREIGN KEY (ID_PassagemCliente)
    REFERENCES cliente (CPF)
    ON DELETE CASCADE;
