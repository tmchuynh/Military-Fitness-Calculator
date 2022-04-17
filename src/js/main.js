VanillaTilt.init(document.querySelector(".glassmorphic-card"), {
    max: 15,
    speed: 200,
    glare: true,
    "max-glare": 1,
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);

    instances.getSelectedValues();
  });

  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });