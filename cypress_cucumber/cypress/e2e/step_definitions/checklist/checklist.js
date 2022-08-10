/// <reference types="Cypress" />
import{Given, When, Then, And, Example} from "@badeball/cypress-cucumber-preprocessor";

When("I visit cypag", () => {
    cy.visit('http://localhost:8080/cypage/');
});

Given("'Todos' is checked", ()=>{
    cy.get('[name="call"]').check();
});
Then("Everyone is checked", ()=>{
    cy.get('[name="call"]').should("be.checked");
    cy.get('[name="cone"]').should("be.checked");
    cy.get('[name="ctwo"]').should("be.checked");
});

Given("'Todos' is checked and others is unchecked", ()=>{
    cy.get('[name="call"]').check();
    cy.get('[name="cone"]').uncheck();
});
Then("'Todos' change to not checked", () =>{
    cy.get('[name="call"]').should("not.be.checked");
    cy.get('[name="cone"]').should('not.be.checked');
    cy.get('[name="ctwo"]').should('be.checked');
});

Given("'Todos' is not checked, and checked the others", ()=>{
    cy.get('[name="cone"]').check();
    cy.get('[name="ctwo"]').check();
});
Then("'Todos' change to checked", () =>{
    cy.get('[name="call"]').should('be.checked');
});