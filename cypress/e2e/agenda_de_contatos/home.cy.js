/// <reference types="cypress" />

describe("Agenda de Contatos - Inclusão, Alteração e Remoção", () => {
  beforeEach(() => {
    cy.visit("https://lista-de-contatos-ten-rust.vercel.app/");
  });

  it("Inclusão de um contato", () => {
    cy.get('input[placeholder="Nome"]').type("Henrique Silva");
    cy.get('input[placeholder="Telefone"]').type("11999999999");

    cy.contains("Informar email").click();
    cy.get('input[placeholder="Email"]').type("henrique@teste.com");

    cy.screenshot("01-preenchendo-formulario");

    cy.contains("button", "Adicionar").click();

    cy.contains(/^Henrique Silva$/).should("exist");
    cy.contains("(11) 99999-9999").should("exist");
    cy.contains("henrique@teste.com").should("exist");

    cy.screenshot("02-contato-adicionado");
  });

  it("Alteração de um contato (nome e email)", () => {
    // garante que João Santos existe
    cy.contains(/^João Santos$/).should("exist");

    cy.screenshot("03-contato-antes-edicao");

    // clica em Editar
    cy.contains(/^João Santos$/)
      .closest("li")
      .within(() => {
        cy.contains("Editar").click();
      });

    cy.contains("Editar contato").should("exist");

    // altera o nome
    cy.get('input[placeholder="Nome"]').clear().type("Maria Santos");

    // abre email se necessário
    cy.get("body").then(($body) => {
      if ($body.find('input[placeholder="Email"]').length === 0) {
        cy.contains("Informar email").click();
      }
    });

    cy.get('input[placeholder="Email"]').clear().type("maria@teste.com");

    cy.screenshot("04-formulario-editado");

    cy.contains("button", "Salvar").click();

    cy.contains(/^Maria Santos$/).should("exist");
    cy.contains("maria@teste.com").should("exist");
    cy.contains(/^João Santos$/).should("not.exist");

    cy.screenshot("05-contato-editado");
  });

  it("Remoção de um contato", () => {
    // cria o contato
    cy.get('input[placeholder="Nome"]').type("Henrique Silva");
    cy.get('input[placeholder="Telefone"]').type("11999999999");
    cy.contains("button", "Adicionar").click();

    cy.screenshot("06-contato-antes-exclusao");

    // remove
    cy.contains(/^Henrique Silva$/)
      .closest("li")
      .within(() => {
        cy.contains("Excluir").click();
      });

    cy.contains(/^Henrique Silva$/).should("not.exist");

    cy.screenshot("07-contato-excluido");
  });
});
