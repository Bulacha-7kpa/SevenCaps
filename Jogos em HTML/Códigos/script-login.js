function logar() {
    const usuario = document.getElementById("usuario").value
    const senha = document.getElementById("senha").value

    if (usuario.length <= 0 || senha.length <= 0) {
        alert("Preencha os campos!")
    } else if (usuario == "b7k" && senha == "b7k") {
        window.location.href = "index.html"
    } else {
        alert("Falha no login!")
    }
}