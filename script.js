// CONFIGURE A SENHA AQUI
const senhaCorreta = "ilha";

function verificarSenha() {
    let senha = document.getElementById("senha").value;

    if (senha === senhaCorreta) {
        document.getElementById("senha-container").style.display = "none";
        document.getElementById("carta-container").style.display = "block";

        const music = document.getElementById("music");
        music.volume = 1.0;
        music.play().catch(() => {
            console.log("Autoplay bloqueado. Inicie ao clicar no envelope.");
        });
    } else {
        document.getElementById("erro").innerText = "Senha incorreta!";
    }
}

function abrirEnvelope() {
    let env = document.querySelector(".envelope");
    env.classList.add("aberto");

    setTimeout(() => {
        document.getElementById("mensagem").style.opacity = 1;
    }, 800);
}
