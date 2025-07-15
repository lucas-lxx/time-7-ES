import LoginElements from "../elements/LoginElements";
import { users } from "../Inventory Test/Mock";

const loginElements = new LoginElements;

class LoginPage{
    loginValid(){
        cy.contains('Entrar').click();
        cy.get(loginElements.User()).type(users.standard_user.username);
        cy.get(loginElements.Password()).type(users.standard_user.password);
        cy.contains('Entrar').click();
    }

    loginInvalid(){
        cy.contains('Entrar').click();
        cy.wait(1000);
        cy.get(loginElements.User()).type(users.error_user.username);
        cy.get(loginElements.Password()).type(users.standard_user.password);
        cy.contains('Entrar').click();
    }

    checkPageInvalid() {
        cy.wait(2000);
        cy.get(".text-cor-principal").should('contain', 'Acesse sua Conta');
    }

    checkPageValid() {
        cy.wait(2000);
        cy.get(".text-center").should('contain', 'Supimpas');
    }
}
export default LoginPage;