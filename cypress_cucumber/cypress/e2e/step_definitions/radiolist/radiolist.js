/// <reference types="Cypress" />
import{Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";

When("I visit cypage", () => {
    cy.visit('http://localhost:8080/cypage/');
});

Then("I should see three radiobuttons", ()=>{
    cy.get('[data-cy="radiolist"] input').each(($radio)=>{
        cy.wrap($radio).invoke('attr', 'name').should('eq', 'radio')
    });
    /*
    cy.get('[data-cy="call"]').invoke('attr', 'type').should('eq', 'checkbox');
    cy.get('[data-cy="call"]').should('not.be.checked');
    */
});
 