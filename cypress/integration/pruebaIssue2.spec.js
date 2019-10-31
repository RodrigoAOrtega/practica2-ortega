describe('Pruebas de existencia del campo teléfono y funcionalidad en todas las interfaces ', function() {
  it('Ingreso al sitio web', function() {
    cy.visit('http://educ.ddns.net:88/pruebas-cypress/');
  });
  it('Búsqueda del campo teléfono', function() {
    cy.get('.col-md-9').contains('Teléfono');
  });
  it('Búsqueda del campo teléfono en el form', function() {
    cy.get('#btnAddPerson').click();
    cy.get('.modal-body').contains('Teléfono');
  });
  it('Nuevo registro', function() {
    cy.get('.col-md-7 > .form-control').type('John Doe');
    cy.get(':nth-child(2) > .col-md-11 > .form-control').type('Elm Street 302');
    cy.get(':nth-child(3) > .col-md-11 > .form-control').type('6664201025');
    cy.get('#btnSavePerson').click();
  });
  it('Búsqueda del registro', function() {
    cy.get('.col-md-9').contains('John Doe');
    cy.get('.col-md-9').contains('Elm Street 302');
    cy.get('.col-md-9').contains('6664201025');
  });
});
