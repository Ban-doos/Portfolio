const projets = [
    {
        titre: "Projet 1",
        description: "Voici une description servant simplement d'exemple, qui viendra être remplacé par un projet concret que j'aurais développé moi même avec ses fonctionalités principales."
    },
    {
        titre: "Projet 2",
        description: "Voici une description servant simplement d'exemple, qui viendra être remplacé par un projet concret que j'aurais développé moi même avec ses fonctionalités principales."
    }
];

/*function openModal(index) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-title').textContent = projets[index].titre;
    document.getElementById('modal-description').textContent = projets[index].description;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}*/

function openPage(index) {
    let pages = ['element.html?id=1', 'element.html?id=2', 'element.html?id=3'];
    window.open(pages[index], '_blank');
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}

// Récupère l'ID depuis l'URL
function getIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}

document.addEventListener("DOMContentLoaded", () => {
    const projetId = getIdFromURL();

    fetch("data/projets.json")
        .then(response => response.json())
        .then(projets => {
            const projet = projets.find(p => p.id === projetId);
            if (!projet) {
                document.body.innerHTML = "<p>Projet non trouvé.</p>";
                return;
            }

            document.getElementById("page-title").textContent = projet.titre;
            document.getElementById("projet-titre").textContent = projet.titre;
            document.getElementById("projet-contexte").textContent = projet.contexte;

            const techList = document.getElementById("projet-techs");
            projet.techs.forEach(tech => {
                const li = document.createElement("li");
                li.textContent = tech;
                techList.appendChild(li);
            });

            const tacheList = document.getElementById("projet-taches");
            projet.taches.forEach(tache => {
                const li = document.createElement("li");
                li.textContent = tache;
                tacheList.appendChild(li);
            });
        })
        .catch(err => {
            console.error("Erreur chargement projet :", err);
        });
});

/*document.addEventListener('DOMContentLoaded', () => {
    fetch("DATA/projets.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('projets-container');
            data.forEach(projet => {
                const projetDiv = document.createElement('div');
                projetDiv.classList.add('projet');

                const titre = document.createElement('h3');
                titre.textContent = projet.titre;

                const contexte = document.createElement('p');
                contexte.innerHTML = '<strong>Contexte :</strong> ${projet.contexte}';

                const techs = document.createElement('ul');
                techs.innerHTML = projet.techs.map(tech => '<li>${tech}</li>').join("");
                const techsWrapper = document.createElement('div');
                techsWrapper.innerHTML = "<h4>Techs utilisés :</h4>";
                techsWrapper.appendChild(techs);

                const taches = document.createElement('ul');
                techs.innerHTML = projet.techs.map(tech => '<li>${t}</li>').join("");
                const tachesWrapper = document.createElement('div');
                techsWrapper.innerHTML = "<h4>Tâches effectuées :</h4>";
                techsWrapper.appendChild(taches);

                projetDiv.appendChild(titre);
                projetDiv.appendChild(contexte);
                projetDiv.appendChild(techsWrapper);
                projetDiv.appendChild(tachesWrapper);

                container.appendChild(projetDiv);

            });
        })
        .catch(err => {
            console.error("Erreur lors du chargement des projets :", err);
        });
});*/