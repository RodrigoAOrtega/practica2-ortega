describe('Pruebas de existencia del campo dirección y eliminación de fecha ', function() {
  it('Ingreso al sitio web', function() {
    cy.visit('http://educ.ddns.net:88/pruebas-cypress/');
  });
  it('Búsqueda del campo dirección', function() {
    cy.get('.col-md-9').contains('Dirección');
  });
  it('Búsqueda de no existencia del campo fecha', function() {
    cy.get('.page').should('not.have.value', 'Fecha');
  });
  it('Búsqueda del campo dirección en el form', function() {
    cy.get('#btnAddPerson').click();
    cy.get(':nth-child(2) > .col-md-11 > label').contains('Dirección');
  });
  it('Nuevo registro', function() {
    cy.get('.col-md-7 > .form-control').type('Tommy Atkins');
    cy.get(':nth-child(2) > .col-md-11 > .form-control').type(
      'Washington Ave. 16'
    );
    cy.get(':nth-child(3) > .col-md-11 > .form-control').type('6664201024');
    cy.get('#btnSavePerson').click();
  });
  it('Búsqueda del registro', function() {
    cy.get('.col-md-9').contains('Tommy Atkins');
    cy.get('.col-md-9').contains('Washington Ave. 16');
    cy.get('.col-md-9').contains('6664201024');
  });
});
