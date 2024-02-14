document.addEventListener('DOMContentLoaded', function() {
  // Simulated data
  let initialProjects = 0;
  let finalProjects = 500;
  let initialHours = 0;
  let finalHours = 17140;
  let initialClients = 0;
  let finalClients = 1500;

  // Update statistics
  function updateStatistics() {
    let projectsSpan = document.getElementById('projectsCount');
    let hoursSpan = document.getElementById('hoursCount');
    let clientsSpan = document.getElementById('clientsCount');

    if (initialProjects < finalProjects) {
      initialProjects += Math.ceil((finalProjects - initialProjects) / 20); // Incremento mayor
      projectsSpan.textContent = initialProjects + ' +';
    }
    if (initialHours < finalHours) {
      initialHours += Math.ceil((finalHours - initialHours) / 20); // Incremento mayor
      hoursSpan.textContent = initialHours + ' +';
    }
    if (initialClients < finalClients) {
      initialClients += Math.ceil((finalClients - initialClients) / 20); // Incremento mayor
      clientsSpan.textContent = initialClients + ' +';
    }
  }

  // Update statistics every 100 milliseconds
  setInterval(updateStatistics, 23); // Intervalo más rápido
});