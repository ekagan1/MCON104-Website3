const password = document.getElementById('password')
const background = document.getElementById('background')
const verify = document.getElementById('verify');

password.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length
  const blurValue = 20 - length * 2
  background.style.filter = `blur(${blurValue}px)`
})

function removeBox() {
    document.getElementById("SUBox").style.display = "none";
    verify.removeAttribute('id');
}