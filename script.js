const solutionDiv = document.querySelector('.solution');
function generateNumber() {
    
    const minInput = Math.ceil(document.getElementById('min').value);
    const maxInput = Math.floor(document.getElementById('max').value);
    const solution = Math.floor(Math.random() * (maxInput - minInput)) + minInput;
    solutionDiv.textContent = `${solution}`;
}