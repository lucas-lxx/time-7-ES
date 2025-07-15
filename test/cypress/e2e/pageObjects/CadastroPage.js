import CadastroElements from "../elements/CadastroELements";
import { users } from "../Inventory Test/Mock";

const cadastroElements = new CadastroElements;

class CadastroPage{
    cadastroValid(){
        cy.get(cadastroElements.Nome()).type("MatheusMMN");
        cy.get(cadastroElements.Email()).type("MatheusMMN@teste.com");
        cy.get(cadastroElements.Senha()).type("12345678");
        cy.get(cadastroElements.Btn()).click();
    }

    cadastroInvalid(){
        cy.get(cadastroElements.Nome()).type("Teste erro");
        cy.get(cadastroElements.Email()).type("Teste");
        cy.get(cadastroElements.Senha()).type("1234");
        cy.get(cadastroElements.Btn()).click();
    }

    checkPageInvalid() {
        cy.get(".text-cor-principal").should('contain', 'Crie sua Conta');
    }

    checkPageValid() {
        cy.wait(2000);
        cy.get(".text-center").should('contain', 'Supimpas');
    }
}
export default CadastroPage;