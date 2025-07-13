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
}
export default LoginPage;