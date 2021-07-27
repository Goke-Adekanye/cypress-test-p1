/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/elements");
  });

  it("locating elements with get", () => {
    //get all elements by tag name
    cy.get("h2");
    cy.get("button");

    //get element by className
    cy.get(".btn-with-class");

    //get all elements by specific classes
    cy.get("[class='Elements-btn btn-with-class']");
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']");

    //get all elements by id
    cy.get("#btn-with-id");

    //get all elements by specific attribute
    cy.get("[type='submit']");

    //get all elements by tag name && className
    cy.get("button.Elements-btn");

    //get all elements by tag name && className && id
    cy.get("button.Elements-btn#btn-with-id");

    //get all elements by tag name && className && type attribute
    cy.get("button.Elements-btn[type='submit']");

    //get all elements with specific data-cy-id
    cy.get("[data-cy='btn-id-1']");
    cy.getByTestId("btn-id-1");
  });

  it("locating element with contains", () => {
    //get element by text
    cy.contains("Unique Text");

    //get element by text
    cy.contains("Not Unique Text");

    //with Selectors
    cy.contains("[type='submit']", "Not Unique Text");
    cy.contains("form", "Not Unique Text");

    cy.get("[type='submit']").contains("Not Unique Text");
  });

  it("locating elements with find", () => {
    cy.get("#form-1").find("button");
    cy.get("#form-1").find(".btn-2");
  });
});
