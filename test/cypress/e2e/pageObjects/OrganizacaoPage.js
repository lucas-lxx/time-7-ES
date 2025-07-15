import OrganizacaoElements from "../elements/OrganizacaoElements"

const organizacaoElements = new OrganizacaoElements;

class OrganizacaoPage{
    organizacaoValida(){
        cy.wait(2000);
        cy.contains('Criar Organização').click();
        cy.get(organizacaoElements.Name()).type('Teste');
        cy.get(organizacaoElements.Descricao()).type('Finança teste');
        cy.get(organizacaoElements.Email()).type("teste@test.com");
        cy.get(organizacaoElements.BtnADD()).click();
        cy.get(organizacaoElements.BtnCriar()).click();
    }

    organizacaoValidar(){
        cy.contains("Grupo criado").should('contain', "Grupo criado");
    }

    organizacaoInvalida(){
        cy.wait(2000);
        cy.contains('Criar Organização').click();
        cy.get(organizacaoElements.BtnCriar()).click();
    }

    organizacaoValidarInvalida(){
        cy.get('#radix-«r0» > .h-full > :nth-child(1) > .flex').should('contain', 'Nome da Organização é obrigatório');
    }

    organizacaoExcluir(){
        cy.wait(2000);
        cy.get('.flex-wrap').children().eq(0).find('.lucide-trash').click()
        cy.get(organizacaoElements.BtnExcluir()).click();
    }

    organizacaoExcluirValidar(){
        cy.contains("Organização foi deletada").should('contain', "Organização foi deletada");
    }
}

export default OrganizacaoPage;