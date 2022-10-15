
(function () {
  function enviarForm() {
    const campo = document.getElementById('sugestao');

    alert("Voce inseriu o livro " + campo.value + "! Obrigado pela sugestão")

  }

  function getLivros() {
    fetch("http://localhost:3333/livros")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.livros)
        const ul = document.getElementsByClassName("games-list")

        ul[0].innerHTML = data.livros.map((item, index) => {
          return (
            `
            <li>
              <a 
                target="_blank"
                href="${data.livros[index].url}">
                <img src="${data.livros[index].urlImage}"
                alt="${data.livros[index].name}"/>
              </a>
            </li> 
            `)
        }).join('')

      })

  }
  getLivros()









})();