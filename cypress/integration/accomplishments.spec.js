/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Accomplishments Dashoard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });

  it("show error if form information is missing", () => {
    cy.get("[data-cy='accomplishment-title-input']").type("First Input");
    cy.get("[data-cy='accomplishment-input']").type(
      "Textarea Input for messages"
    );
    cy.contains("Submit Accomplishment").click();
    cy.contains("Complete the items above to continue").should("be.visible");
  });

  it("display success component if all fields are inputed", () => {
    cy.get("[data-cy='accomplishment-title-input']").type("First Input");
    cy.get("[data-cy='accomplishment-input']").type(
      "Textarea Input for messages"
    );
    cy.get("[type='checkbox']").click();
    cy.contains("Submit Accomplishment").click();
    cy.contains("This Accomplisment was Successfully Submitted").should(
      "be.visible"
    );
  });

  it("when 'Go Back' btn is clicked, return to accomplishment dashboard and input state should be empty", () => {
    cy.get("[data-cy='accomplishment-title-input']").type("First Input");
    cy.get("[data-cy='accomplishment-input']").type(
      "Textarea Input for messages"
    );
    cy.get("[type='checkbox']").click();
    cy.contains("Submit Accomplishment").click();
    cy.contains("Go Back").click();
    cy.contains("h2", "Accomplishment");
    cy.get("[data-cy='accomplishment-title-input']").should("have.value", "");
    cy.get("[data-cy='accomplishment-input']").should("have.value", "");
    cy.get("[type='checkbox']").should("not.be.checked");
  });
});
