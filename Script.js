// script.js — simple utilities for resume page
document.addEventListener('DOMContentLoaded', function () {
  // update footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // print button
  var printBtn = document.getElementById('printBtn');
  if (printBtn) {
    printBtn.addEventListener('click', function () {
      window.print();
    });
  }
});
