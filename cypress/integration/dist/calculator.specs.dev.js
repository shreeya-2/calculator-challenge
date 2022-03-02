"use strict";

//describe block for our suite of tests
describe("calculator tests", function () {
  it("should check 7 + 9 equals 16", function () {
    //1.Arrange
    cy.visit("localhost:5501/index.html"); //2. Act 

    cy.get('[value="7"]').click();
    cy.get('[value="+"]').click();
    cy.get('[value="9"]').click();
    cy.get('[value="="]').click(); //3. Assert

    cy.get(".current-display").should("contain", "16");
  });
  it("should check 9-7 equals 2", function () {
    cy.visit("localhost:5501/index.html");
    cy.get;
    cy.get('[value="9"]').click();
    cy.get('[value="-"]').click();
    cy.get('[value="7"]').click();
    cy.get('[value="="]').click();
    cy.get(".current-display").should("contain", "2");
    cy.get(".previous-display").should("contain", "9-7");
  });
  it("should check 10÷2 equals 5", function () {
    cy.visit("localhost:5501/index.html");
    cy.get;
    cy.get('[value="1"]').click();
    cy.get('[value="0"]').click();
    cy.get('[value="÷"]').click();
    cy.get('[value="2"]').click();
    cy.get('[value="="]').click();
    cy.get(".current-display").should("contain", "5");
  });
  it("should check 10 × 2 equals 20", function () {
    cy.visit("localhost:5501/index.html");
    cy.get;
    cy.get('[value="1"]').click();
    cy.get('[value="0"]').click();
    cy.get('[value="×"]').click();
    cy.get('[value="2"]').click();
    cy.get('[value="="]').click();
    cy.get(".current-display").should("contain", "20");
  }); //

  it("should check clear func works after sum", function () {
    cy.visit("localhost:5501/index.html");
    cy.get('[value="7"]').click();
    cy.get('[value="+"]').click();
    cy.get('[value="9"]').click();
    cy.get('[value="="]').click();
    cy.get('[value="C"]').click();
    cy.get(".current-display").should("contain", " ");
  });
  it("should check delete button works", function () {
    cy.visit("localhost:5501/index.html");
    cy.get('[value="7"]').click();
    cy.get('[value="9"]').click();
    cy.get('[value="3"]').click();
    cy.get('[value="2"]').click();
    cy.get('[value="DEL"]').click();
    cy.get(".current-display").should("contain", "793");
  });
  it("should check . can only be used once", function () {
    cy.visit("localhost:5501/index.html");
    cy.get('[value="."]').click();
    cy.get('[value="."]').click();
    cy.get('[value="."]').click();
    cy.get(".current-display").should("contain", ".");
  });
  it("should check rounding to 2dp - 100 ÷ 3", function () {
    cy.visit("localhost:5501/index.html");
    cy.get('[value="1"]').click();
    cy.get('[value="0"]').click();
    cy.get('[value="0"]').click();
    cy.get('[value="÷"]').click();
    cy.get('[value="3"]').click();
    cy.get('[value="="]').click();
    cy.get(".current-display").should("contain", "33.33");
  });
  it("should check rounding to . func works w/o number", function () {
    cy.visit("localhost:5501/index.html");
    cy.get('[value="."]').click();
    cy.get('[value="2"]').click();
    cy.get(".current-display").should("contain", "0.2");
  });
  it("should check rounding to . func works w/o number", function () {
    cy.visit("localhost:5501/index.html");
    cy.get('[value="."]').click();
    cy.get('[value="2"]').click();
    cy.get(".current-display").should("contain", "0.2");
  });
  it("should check rounding to . func when adding", function () {
    cy.visit("localhost:5501/index.html");
    cy.get('[value="1"]').click();
    cy.get('[value="."]').click();
    cy.get('[value="2"]').click();
    cy.get('[value="+"]').click();
    cy.get('[value="4"]').click();
    cy.get('[value="="]').click();
    cy.get(".current-display").should("contain", "5.2");
  });
  it("should check rounding to . func when multiplying", function () {
    cy.visit("localhost:5501/index.html");
    cy.get('[value="1"]').click();
    cy.get('[value="."]').click();
    cy.get('[value="2"]').click();
    cy.get('[value="×"]').click();
    cy.get('[value="3"]').click();
    cy.get('[value="="]').click();
    cy.get(".current-display").should("contain", "3.6");
  });
});