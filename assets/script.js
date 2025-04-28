document.getElementById('chanceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const score = parseInt(document.getElementById('score').value, 10);
    let message = '';
    let btnClass = '';
  
    if (score >= 0 && score <= 50) {
      message = 'Very likely will get called';
      btnClass = 'btn-success';
    } else if (score <= 100) {
      message = 'High chance to get called';
      btnClass = 'btn-primary';
    } else if (score <= 120) {
      message = 'Moderately high';
      btnClass = 'btn-info';
    } else if (score <= 150) {
      message = 'Some chance';
      btnClass = 'btn-warning';
    } else if (score <= 175) {
      message = 'Slight chance';
      btnClass = 'btn-warning';
    } else if (score <= 200) {
      message = 'If lucky';
      btnClass = 'btn-danger';
    } else if (score <= 250) {
      message = 'Negligible';
      btnClass = 'btn-danger';
    } else {
      message = "No chance unless there's a miracle.";
      btnClass = 'btn-dark';
    }
  
    document.getElementById('result').innerHTML = `<button class="btn ${btnClass}" disabled>${message}</button>`;
  });
  