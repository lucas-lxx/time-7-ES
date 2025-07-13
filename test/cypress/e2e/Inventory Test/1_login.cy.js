import { url } from "./Mock";
import LoginPage from "../pageObjects/LoginPage"

const loginPage = new LoginPage;

describe('Login', () => {
    beforeEach(() => {
        cy.visit(url);
    })

    it('Should log in successfully', () => {
        loginPage.loginValid();
        //loginPage.CheckPage();
    });
    
})