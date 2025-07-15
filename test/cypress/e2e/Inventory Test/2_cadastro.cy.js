import CadastroPage from "../pageObjects/CadastroPage";
import { url } from "./Mock";

const cadastroPage = new CadastroPage;

describe('Cadastro', () => {
    beforeEach(() => {
        cy.visit(url);
    })

    it('#1 Cadastro Invalido', () => {
        cadastroPage.cadastroInvalid();
        cadastroPage.checkPageInvalid();
    });

    it('#2 Cadastro Valido', () => {
        cadastroPage.cadastroValid();
        //cadastroPage.checkPageValid();
    });
    
})