/* 
   ATIVIDADE PRÁTICA - FUNDAMENTOS DA PROGRAMAÇÃO WEB
   DESENVOLVEDOR: Kaic de Paula Duda
*/

document.addEventListener("DOMContentLoaded", function() {

    // --- 1. FUNCIONALIDADE DE ALTERNÂNCIA DE TEMA (CLARO/ESCURO) ---
    const themeBtn = document.getElementById("theme-btn");
    const body = document.body;

    themeBtn.addEventListener("click", () => {
        // Alterna a classe dark-mode no elemento body
        body.classList.toggle("dark-mode");

        // Altera o texto do botão para feedback do usuário
        if (body.classList.contains("dark-mode")) {
            themeBtn.textContent = "Modo Claro";
        } else {
            themeBtn.textContent = "Modo Escuro";
        }
    });

    // --- 2. FUNCIONALIDADE DE VALIDAÇÃO DO FORMULÁRIO ---
    const form = document.getElementById("contato-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio real do formulário

        // Captura dos valores dos inputs
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Verificação se há campos vazios
        if (nome === "" || email === "" || mensagem === "") {
            alert("Erro: Preencha todos os campos obrigatórios.");
            return;
        }

        // Validação de formato de e-mail usando Expressão Regular
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Erro: Insira um endereço de e-mail válido.");
            return;
        }

        // --- 3. SIMULAÇÃO DE ENVIO COM SUCESSO ---
        alert("Olá " + nome + "! Sua mensagem foi processada com sucesso. (Simulação de envio)");
        
        // Limpa o formulário após o sucesso
        form.reset();
    });
});