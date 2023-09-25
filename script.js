function scrollToDiv() {
    var targetDiv = document.getElementById("service-section");
    targetDiv.scrollIntoView({ behavior: "smooth" }); // This scrolls to the div smoothly
}

document.addEventListener("DOMContentLoaded", function () {
    // Your typewriter code here
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

    const text = "This is a typewriter effect example.";
    const delay = 100;
    const container = document.getElementById("typewriter-text");
    let index = 0;
    let i = text.length-1;

    function type() {
        if (index < text.length) {
            container.textContent += text.charAt(index);
            index++;
            setTimeout(type, delay);
        }
        else if(index === text.length){
            i = text.length-1;
            unType(); 
        }
    }
    function unType() {
        if (i > 0) {
            container.textContent = text.slice(0,i);
            i--;
            console.log(text);
            setTimeout(unType, delay);
            
        }
        else if(i == 0){
            index = 0;
            type();
        }

    }

    // Start the typing animation
    type();
    
});
