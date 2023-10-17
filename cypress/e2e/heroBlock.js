/// <reference types="cypress" />

describe("main page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=cvPdf]").as("cvPdf");
    cy.get("[data-cy=cvDocx]").as("cvDocx");
  });

  it("contains the correct title", () => {
    cy.title().should("contain", "Aleksandr Efimenko");
  });

  it("displays the header", () => {
    cy.get("h1").should("contain", "Nice to meet you!");
  });

  it("checks if favicon is available", () => {
    cy.request("/favicon.ico").then((response) => {
      expect(response.status).to.eq(200); // Assert that the file exists
    });
  });

  it("checks if pdf CV file is available", () => {
    // link to pdf file contains .PDF
    cy.get("@cvPdf").contains(".PDF");
    // check if the link has proper href
    cy.get("@cvPdf").should("have.attr", "href", "/CV_Aleksandr_Efimenko.pdf");

    cy.get("@cvPdf")
      .should("have.attr", "href")
      .then((href) => {
        cy.request(href).then((response) => {
          expect(response.status).to.eq(200); // Assert that the file exists
        });
      });
  });

  it("checks if docx CV file is available", () => {
    // link to docx file contains .DOCX
    cy.get("@cvDocx").contains(".DOCX");
    // check if the link has proper href
    cy.get("@cvDocx").should(
      "have.attr",
      "href",
      "/CV_Aleksandr_Efimenko.docx"
    );

    cy.get("@cvDocx")
      .should("have.attr", "href")
      .then((href) => {
        cy.request(href).then((response) => {
          expect(response.status).to.eq(200); // Assert that the file exists
        });
      });
  });
});
