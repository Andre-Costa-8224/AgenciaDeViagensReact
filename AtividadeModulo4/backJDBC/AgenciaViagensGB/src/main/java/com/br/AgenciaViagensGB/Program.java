package com.br.AgenciaViagensGB;

import java.sql.SQLException;
import java.util.Scanner;

import com.br.AgenciaViagensGB.dao.ClienteDAO;
import com.br.AgenciaViagensGB.dao.ViagensDAO;
import com.br.AgenciaViagensGB.model.Cliente;

public class Program {
	
	public static void main(String[] args) throws SQLException, InterruptedException {
		Cliente cliente = new Cliente();
		ConnectionFactory conn = new ConnectionFactory();
		ClienteDAO crud = new ClienteDAO(conn.getConnection());
		ViagensDAO destinos = new ViagensDAO(conn.getConnection());
		
		boolean cond = true;
		
		System.out.println("Conexão estabelecida. Abrindo menu...");
		Thread.currentThread();
		Thread.sleep(2000);
		
		Scanner input = new Scanner(System.in);
		
		while (cond) {
			
			System.out.println("--------------------LOGIN--------------------");
			System.out.println("1-LOGIN \n2-CADASTRE-SE\n0-SAIR");
			
			String opc = input.next();
			
			if (opc.equals("1")) {
				
				boolean condlogin = true;
				
				while (condlogin) {
					
					
					System.out.println("Digite seu CPF:");
					cliente.setCpf(input.next());
					System.out.println("Digite sua senha:");
					cliente.setSenha(input.next());
					if (crud.verdados(cliente.getCpf(),cliente.getSenha()).size() < 1) {
						System.out.println("Dados incorretos! tente novamente.");
					} else {
						try {
							System.out.println("Olá "+crud.verdados(cliente.getCpf(),cliente.getSenha()).get(0));
							System.out.println("Seus dados:");
							System.out.println(crud.verdados(cliente.getCpf(),cliente.getSenha()));
							boolean logado = true;
							while(logado) {
								System.out.println("1-Atualizar dados \n2-Ver destinos disponíveis\n3-Ver passagens em meu CPF\n4-Deletar conta\n0-SAIR");
								String opc2 = input.next();
								if (opc2.equals("1")) {
									System.out.println("Novo email:");
									cliente.setEmail(input.next());
									System.out.println("Nova senha:");
									cliente.setSenha(input.next());
									try {
										crud.atualizar(cliente);
										System.out.println("Atualizado com sucesso!");
									} catch (Exception e) {
										System.out.println("Erro: "+e.getMessage());
									}
									
								} else if(opc2.equals("2")) {
									
									for (int i = 0; i < destinos.verdestinos().size(); i++) {
										System.out.println("----------------------------------------");
										System.out.println(destinos.verdestinos().get(i));
										System.out.println("----------------------------------------");
									}
									
									while(true) {
										System.out.println("Deseja comprar passagem?\nS|N");
										String conf = input.next();
										if (conf.toLowerCase().equals("s")) {
											
											System.out.println("Digite o número da opção que deseja comprar:");
											int compra = input.nextInt();
											System.out.println("Escolha o tipo:\n1-passagem econômica\n2-primeira classe");
											String tipo = input.next();
											String pass = "";
											if (tipo.equals("1")) {
												pass = "valoreconomica";
											}else if(tipo.equals("2")) {
												pass = "valorprimeiraclasse";
											}
											destinos.comprarpassagem(compra, pass, cliente.getCpf());
											System.out.println("Passagem comprada com sucesso! dados da sua passagem: ");
											for (int i = 0; i < destinos.verpassagem(cliente.getCpf()).size(); i++) {
												if (destinos.verpassagem(cliente.getCpf()).size() > 0) {
													System.out.println(destinos.verpassagem(cliente.getCpf()).get(destinos.verpassagem(cliente.getCpf()).size()));
												}else {
													System.out.println(destinos.verpassagem(cliente.getCpf()).get(0));
												}
												
											}
											
											break;
											
										}else if(conf.toLowerCase().equals("n")) {
											break;
										}
									}
								}else if(opc2.equals("3")) {
									
									System.out.println("Suas passagens:");
									System.out.println("");
									if (destinos.verpassagem(cliente.getCpf()).size() < 1) {
										System.out.println("Você não tem passagens");
									}else {
										for (String passagem : destinos.verpassagem(cliente.getCpf())) {
											System.out.println("-------------------------");
											System.out.println(passagem);
											System.out.println("-------------------------");
											System.out.println("");
										}
									}
									
								}else if(opc2.equals("4")) {
									
									while(true) {
									
										System.out.println("Tem certeza?\nS|N");
										
										String sn = input.next();
										
										if (sn.toLowerCase().equals("s")) {
											
											try {
												crud.deletar(cliente);
												logado = false;
												break;
											} catch (Exception e) {
												System.out.println("Erro: "+e.getMessage());
												e.printStackTrace();
											}
											
										}else if(sn.toLowerCase().equals("n")){
											break;
										}else {
											System.out.println("Opção inválida");
										}
									}
									
								} else if(opc2.equals("0")) {
									logado=false;
									condlogin=false;
								}else{
									System.out.println("Opção inválida");
								}
							}
						} catch (Exception e) {
							System.out.println("Erro ao tentar fazer login: ("+e.getMessage()+")");
						}
					}
					
					
				}
				
				
				
			}else if(opc.equals("2")) {
				
				
				try {
					boolean condcad = true;
					while (condcad) {
						
						System.out.println("Nome:");
						cliente.setNome(input.next());
						System.out.println("Email:");
						cliente.setEmail(input.next());
						
						System.out.println("Data de nascimento:");
						System.out.println("Dia:");
						String dia = input.next();
						System.out.println("Mês:");
						String mes = input.next();
						System.out.println("Ano:");
						String ano = input.next();
						
						cliente.setDatadenascimento(ano+"-"+mes+"-"+dia);
						System.out.println("CPF:");
						cliente.setCpf(input.next());
						System.out.println("Senha:");
						cliente.setSenha(input.next());
						
						
						try {
							crud.cadastrar(cliente);
							System.out.println("Cadastrado com sucesso!");
							condcad = false;
						} catch (Exception e) {
							System.out.println("Erro: "+e.getMessage());
						}
						
					}
					
					
				} catch (Exception e) {
					System.out.println("Erro ao tentar cadastro: "+e.getMessage());
				}
				
			}else if(opc.equals("0")) {
				
				System.out.println("Finalizando...");
				Thread.currentThread();
				Thread.sleep(1500);
				cond = false;
				
			}else {
				System.out.println("Opção inválida");
			}
		
			input.close();
		}
		
	}

}

