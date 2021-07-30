/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("habit dashboard", () => {
  beforeEach(() => {
    cy.visit("/habits");
  });

  it("open modal when add button is clicked", () => {
    cy.contains("button", "Add").click();
    cy.contains("Add a new habit").should("be.visible");
  });

  it("should display Habit card when new Habit is added", () => {
    cy.get("#habit-add-btn").click();
    cy.get("input[placeholder='Habit']").type("My First Test");
    cy.contains("Save Changes").click();
    cy.contains("My First Test")
      .should("be.visible")
      .and("have.class", "HabitCard__habit-container");
  });

  it("should exit modal when close button is clicked", () => {
    cy.get("#habit-add-btn").click();
    cy.contains("Add a new habit").should("be.visible");
    cy.contains("button", "Close").click();
    cy.contains("Add a new habit").should("not.exist");
  });

  it("modal remain when input field is empty and save-changes button is clicked", () => {
    cy.get("#habit-add-btn").click();
    cy.contains("button", "Save Changes").click();
    cy.contains("Add a new habit").should("be.visible");
  });

  it("toggle icon when habit card is clicked", () => {
    cy.get("#habit-add-btn").click();
    cy.get("input[placeholder='Habit']").type("My First Test");
    cy.contains("Save Changes").click();
    cy.get("[src='/static/media/close.fa7e5ead.svg']").should("be.visible");
    cy.contains("My First Test").click();
    cy.get("[src='/static/media/check.9e8832df.svg']").should("be.visible");
  });
});
