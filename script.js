
(function () {
  function enviarForm() {
    const campo = document.getElementById('sugestao');

    alert("Voce inseriu o livro " + campo.value + "! Obrigado pela sugestão")

  }

  function getLivros() {
    fetch("http://localhost:3000/livros")
      .then((response) => response.json())
      .then((data) => {

      const ul = document.getElementsByClassName("games-list")

        ul[0].innerHTML = data.map((item,index) => {
            return(`
            <li>
              <a 
                target="_blank"
                href="${data[index].url}">
                <img src="${data[index].urlImage}"
                alt="${data[index].name}">
              </a>
            </li>           
            
            `)   
        })

      })

  }
  getLivros()









})();