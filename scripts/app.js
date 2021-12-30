/* Variables et constantes */

    const form = document.querySelector('form');
    const input = document.querySelector('input[type=text]');
    const affichage = document.querySelector('.affichage');
    const api = 'https://api.github.com/users';

/* Événements */

    form.addEventListener('submit', (e) =>
    {
        e.preventDefault();
        
        if(input.value.length > 0)
        {
            rechercherUtilisateur()
            input.value = "";
        }

        
    });

/* Fonctions */

    function rechercherUtilisateur()
    {
        fetch(`${api}/${input.value}`)
        .then(response => response.json())
        .then(data =>
        {
            afficherCarte(data);
        });  
    } 

    function afficherCarte(utilisateur)
    {
        affichage.classList.add('carte');

        affichage.innerHTML = `
        <header>
            <img src="${utilisateur.avatar_url}" alt="avatar">
            <h2>${utilisateur.name}</h2>
        </header>
        <main>
            <p class="followers">Followers : ${utilisateur.followers}</p>
            <p class="repos">Repos : ${utilisateur.public_repos}</p>
        </main>
        <footer>
            <p class="description">${utilisateur.bio}</p>
        </footer>
        `;

    }
        
    
    //Correction
    /*
    async function rechercherUtilisateur(utilisateur)
    {
        const reponse = await (fetch(`${api}/${utilisateur}`));
        const data = await reponse.json();

        afficherCarte(data);
    }
    */       