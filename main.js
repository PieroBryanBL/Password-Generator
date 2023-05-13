const password = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");

const generatePassword = () => {
  let generatedPassword = "";
  const content =
    "ABCDEFVAOJDBFOIQB01I83H08D3Hasdasdubiqvfyuqvechqis1D13D0813HD1";

  for (let i = 0; i < 10; i++) {
    generatedPassword += content.charAt(
      Math.floor(Math.random() * content.length)
    );
  }

  password.textContent = generatedPassword;
};

generateBtn.addEventListener("click", generatePassword);
