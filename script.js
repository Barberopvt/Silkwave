function scrollToDiv() {
    var targetDiv = document.getElementById("service-section");
    targetDiv.scrollIntoView({ behavior: "smooth" }); // This scrolls to the div smoothly
}

document.addEventListener("DOMContentLoaded", function () {
    // Your typewriter code here
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var book = document.getElementById("bookbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  window.open("https://wa.me/+919142004623?text=Hello SilkWave I have an enquiry!")
}

book.onclick = function() {
    window.open("https://wa.me/+919142004623?text=Hello SilkWave I have an enquiry!")
  }


    const textArr = ["Social media management", "Digital Marketing and Branding", "Website Designing and Development"];
    const delay = 2000;
    const container = document.getElementById("typewriter-text");
    let index = 0;

    let next = 0;
    function type() {
            container.textContent = textArr[index%3];
            index +=1;
            setTimeout(type, delay);
        }




    type();
    
});



