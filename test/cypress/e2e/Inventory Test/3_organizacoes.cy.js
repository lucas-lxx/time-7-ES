import { url } from "./Mock";
import LoginPage from "../pageObjects/LoginPage"
import OrganizacaoPage from "../pageObjects/OrganizacaoPage";

const loginPage = new LoginPage;
const organizacaoPage = new OrganizacaoPage;


describe('Organização', () => {
    beforeEach(() => {
        cy.visit(url);
    })

    it('#1 Criar Organização valida', () => {
        loginPage.loginValid();
        organizacaoPage.organizacaoValida();
        organizacaoPage.organizacaoValidar();
        
    });

    it('#2 Criar Organização invalida', () => {
        loginPage.loginValid();
        organizacaoPage.organizacaoInvalida();
        organizacaoPage.organizacaoValidarInvalida();
    });

    it('#3 Excluir Organização', () => {
        loginPage.loginValid();
        organizacaoPage.organizacaoExcluir();
        organizacaoPage.organizacaoExcluirValidar(); 
    });
    
    
})