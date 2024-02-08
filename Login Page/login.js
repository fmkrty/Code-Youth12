const loginButton = document.getElementById('loginButton');
const signupButton = document.getElementById('signupButton');
const loginPopup1 = document.getElementById('loginPopup1');
const close1Button = document.getElementById('close1Button');
const signupPopup2 = document.getElementById('signupPopup2');
const close2Button = document.getElementById('close2Button');

loginButton.addEventListener('click', () => {
  loginPopup1.style.display = 'block';
});

signupButton.addEventListener('click', () => {
    signupPopup2.style.display = 'block';
  });

close1Button.addEventListener('click', () => {
  loginPopup1.style.display = 'none';
});

close2Button.addEventListener('click', () => {
    signupPopup2.style.display = 'none';
  });

window.addEventListener('click', (e) => {
  if (e.target === loginPopup) {
    loginPopup.style.display = 'none';
  }
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  console.log('Login:', email, password);
});