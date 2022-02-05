package com.br.AgenciaViagensGB.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.br.AgenciaViagensGB.model.Cliente;

public class ClienteDAO{
	
	private Connection conexao = null;
	
	public ClienteDAO(Connection conexao) {
		this.conexao = conexao;
	}
	
	public void cadastrar(Cliente cliente) {
		try {
			PreparedStatement ps = this.conexao.prepareStatement("insert into clientes(nome, CPF, Data_de_nascimento, email, Senha) values(?,?,?,?,?)");
			
			ps.setString(1, cliente.getNome());
			ps.setString(2, cliente.getCpf());
			ps.setString(3, ""+cliente.getDatadenascimento());
			ps.setString(4, cliente.getEmail());
			ps.setString(5, cliente.getSenha());
			
			ps.execute();
			ps.close();
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	
	public List<String> verdados(String cpf, String senha) {
		
		try {
			
			List<String> clientes = new ArrayList<String>();
			
			PreparedStatement ps = this.conexao.prepareStatement("select * from clientes where CPF = ? and Senha = ?");
			
			ps.setString(1, cpf);
			ps.setString(2, senha);
			
			ResultSet rs = ps.executeQuery();
			
			while (rs.next()) {
				
				clientes.add(rs.getString("nome").toString());
				clientes.add(rs.getString("CPF").toString());
				clientes.add(rs.getString("Data_de_nascimento").toString());
				clientes.add(rs.getString("email").toString());
				clientes.add(rs.getString("Senha").toString());
				
			}
			
			ps.close();
			
			return clientes;
			
		} catch (Exception e) {
			System.out.println("Erro: "+e.getMessage());
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
	
	
	public void atualizar(Cliente cliente) {
		try {
			
			PreparedStatement ps = this.conexao.prepareStatement("update clientes set email = ?, Senha = ? where CPF = ?");
			ps.setString(1, cliente.getEmail());
			ps.setString(2, cliente.getSenha());
			ps.setString(3, cliente.getCpf());
			
			ps.execute();
			
		} catch (Exception e) {
			System.out.println("Erro: "+e.getMessage());
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
	
	public void deletar(Cliente cliente) {
		PreparedStatement ps = null;
		try {
			ps = this.conexao.prepareStatement("delete from clientes where CPF = ? and Senha = ?");
			ps.setString(1, cliente.getCpf());
			ps.setString(2, cliente.getSenha());
			ps.execute();
		} catch (Exception e) {
			System.out.println("Erro: "+e.getMessage());
			e.printStackTrace();
		}finally {
			try {
				if (ps != null) {
					ps.close();
				}
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
	}
	
}
