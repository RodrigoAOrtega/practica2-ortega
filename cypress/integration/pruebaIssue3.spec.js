describe('Pruebas de eliminación de registro de personas ', function() {
  it('Ingreso al sitio web', function() {
    cy.visit('http://educ.ddns.net:88/pruebas-cypress/');
  });
  it('Nuevo registro', function() {
    cy.get('#btnAddPerson').click();
    cy.get('.col-md-7 > .form-control').type('Joe Coastie');
    cy.get(':nth-child(2) > .col-md-11 > .form-control').type(
      'Peaceful Hill 210'
    );
    cy.get(':nth-child(3) > .col-md-11 > .form-control').type('6664201026');
    cy.get('#btnSavePerson').click();
  });
  it('Eliminación del registro', function() {
    cy.wait(1000);
    cy.get(':nth-child(1) > :nth-child(5) > .btn-danger').click();
  });
  it('Búsqueda de no existencia del registro', function() {
    cy.get('.col-md-9').should('not.have.value', 'Joe Coastie');
    cy.get('.col-md-9').should('not.have.value', 'Peaceful Hill 210');
    cy.get('.col-md-9').should('not.have.value', '6664201026');
  });
});
