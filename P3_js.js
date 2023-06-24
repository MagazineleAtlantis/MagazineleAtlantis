const xValues = [2015, 2016, 2017, 2018, 2019, 2020, 2021];
const yValues = [21854743, 24528220, 27565077, 26505926, 33686208, 39706240, 41579349];

let myChart;

function createChart() {
  const chartCanvas = document.getElementById("myChart");

  if (myChart) {
    myChart.destroy(); // Destroy existing chart instance if it exists
  }

  myChart = new Chart(chartCanvas, {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Cifra de afaceri (RON)",
        fontSize:18,
      },
      legend: { display: false },
      scales: {
        yAxes: [{ ticks: { min: 20000000, max: 45000000 } }]
      }
    }
  });
}

createChart(); // Create initial chart

// Recreate the chart when the window is resized
window.addEventListener("resize", createChart);

var slideIndex = 0;
showSlides();
var slides,dots;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides-evolutie");
    dots = document.getElementsByClassName("dot");
    body=document.getElementsByClassName("body");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(position) {
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function currentSlide(index) {
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";  
    dots[index-1].className += " active";
}
