package com.br.AgenciaViagensGB.dao;

import java.nio.charset.Charset;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class ViagensDAO {
	
	private Connection conn = null;
	
	public ViagensDAO(Connection conect){
		this.conn = conect;
	}
	
	static String getRandomString(int i) { 
        
		byte[] bytearray;
        
        bytearray = new byte[256];
        String mystring;
        StringBuffer thebuffer;
        String theAlphaNumericS;

        new Random().nextBytes(bytearray); 

        mystring 
            = new String(bytearray, Charset.forName("UTF-8")); 
            
        thebuffer = new StringBuffer();
        
        theAlphaNumericS 
            = mystring 
                .replaceAll("[^A-Z0-9]", ""); 

        for (int m = 0; m < theAlphaNumericS.length(); m++) { 

            if (Character.isLetter(theAlphaNumericS.charAt(m)) 
                    && (i > 0) 
                || Character.isDigit(theAlphaNumericS.charAt(m)) 
                    && (i > 0)) { 

                thebuffer.append(theAlphaNumericS.charAt(m)); 
                i--; 
            } 
        } 

        return thebuffer.toString(); 
    }
	
	public List<String> verpassagem(String user) {
		try {
			
			PreparedStatement ps = this.conn.prepareStatement("select * from dadospassagemcliente");
			ResultSet rs = ps.executeQuery();
			
			List<String> passagens = new ArrayList<String>();
			
			while (rs.next()) {
				if (rs.getString("ID_PassagemCliente").equals(user)) {
					
					passagens.add("Destino: "+rs.getString("destino")+"\n"+"Código: "+rs.getString("codigo").toString()+"\n"+"CPF: "+rs.getString("ID_PassagemCliente")+"\n"+"Valor: "+rs.getFloat("valor")+"\n"+rs.getString("data_embarque").toString());
					
				}
			}
			
			return passagens;
			
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
	
	public void comprarpassagem(int opc, String valor, String cpf) {
		try {
			PreparedStatement ps = this.conn.prepareStatement("insert into passagem(destino,codigo,valor,ID_PassagemCliente,data_embarque) values(?,?,?,?,?);");
			
			PreparedStatement ps2 = this.conn.prepareStatement("select * from destinos");
			
			ResultSet rs = ps2.executeQuery();
			
			while(rs.next()) {
				if (opc == rs.getInt("ID_destinos")) {
					ps.setString(1, rs.getString("lugar"));
					ps.setFloat(3, rs.getFloat(valor));
					ps.setString(5, rs.getString("data_embarque"));
				}
			}
			
			ps.setString(2, getRandomString(12));
			ps.setString(4, cpf);
			
			ps.execute();
			ps.close();
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public List<String> verdestinos() {
		
		try {
			
			List<String> viagens = new ArrayList<String>();
			
			PreparedStatement ps = this.conn.prepareStatement("select * from destinos");
			
			ResultSet rs = ps.executeQuery();
			
			while (rs.next()) {
				
				viagens.add("Opção: "+rs.getInt("ID_destinos")+"\n"+"Destino: "+rs.getString("lugar").toString()+"\n"+"Valor Econômica: "+rs.getString("valoreconomica").toString()+"\n"+"Valor primeira classe: "+rs.getString("valorprimeiraclasse").toString()+"\n"+"Data e hora: "+rs.getString("data_embarque").toString());
				
			}
			
			ps.close();
			
			return viagens;
			
		} catch (Exception e) {
			System.out.println("Erro: "+e.getMessage());
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
	
}
