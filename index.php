<?php include("hf/header.php"); ?>
    <div class="bar-space">
        <div id="welcome-screen">
            <h1>Welcome</h1>
        </div>

        <!-- Sections -->
        <section id="welcome-section">
            <video autoplay muted loop playsinline id="background-video">
                <source src="Images/video/home-video.mp4" type="video/mp4">
                Votre navigateur ne supporte pas les vidéos HTML5.
            </video>
            <div class="welcome-text-box">
                <h1>Bienvenue sur mon Portfolio</h1>
                <p>Découvrez mes projets, compétences et expériences.</p>
            </div>
        </section>

        <!-- Profil -->
        <section id="profil">
            <h2 class="section-title">Profil</h2>
            <div class="content-box left-align">
                <p>Je suis un développeur passionné par la technologie et l'innovation. En dehors du développement, j'aime pratiquer [vos hobbies ici].</p>
                <p>Compétences : [Listez vos compétences techniques ici].</p>
            </div>
        </section>

        <!-- Parcours Scolaire -->
        <section id="parcours-scolaire">
            <h2 class="section-title">Parcours Scolaire</h2>
            <div class="content-box right-align">
                <ul>
                    <li>BTS SIO option SLAM - Lycée Lamartine (Actuellement en cours)</li>
                    <li>[Autre école et formation précédente]</li>
                </ul>
                <a href="images/CV ESTEBAN (6).pdf" download class="button">Télécharger mon CV</a>
                <button onclick="window.location.href='https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers'">En savoir plus sur le BTS SIO</button>
            </div>
        </section>

        <!-- Projets -->
        <section id="projets">
            <h2 class="section-title">Projets</h2>
            <div class="content-box left-align">
                <ul>
                    <li><strong>Projet en entreprise 1</strong> : Description du projet.</li>
                    <li><strong>Projet personnel 1</strong> : Description du projet.</li>
                    <li><strong>Projet en entreprise 2</strong> : Description du projet.</li>
                </ul>
            </div>
        </section>

        <!-- Présentation du BTS SIO -->
        <section id="bts-sio">
            <h2 class="section-title">Le BTS SIO</h2>
            <div class="content-box right-align">
                <p>Le BTS SIO option SLAM (Solutions Logicielles et Applications Métiers) est une formation spécialisée dans le développement d’applications. En savoir plus sur cette formation <a href="bts-sio-details.html">ici</a>.</p>
            </div>
        </section>

        <!-- Expérience Professionnelle -->
        <section id="experience-professionnelle">
            <h2 class="section-title">Expérience Professionnelle</h2>
            <div class="content-box left-align">
                <ul>
                    <li><strong>MÂCON HABITAT</strong> : 
                    <br /><u>Technicien d'assistance informatique</u>
                    <br />14 Juin 2021 - 2 Juillet 2021
                    <br />- Intervention sur des infrastructures réseaux 
                    <br />- Automatisation de l'installation des postes sur le réseau</li>
                    <li><strong>Stage 2 (Bac Pro SN)</strong> : Description du stage.</li>
                    <li><strong>Job d'été 1</strong> : Description du job.</li>
                    <li><strong>Job d'été 2</strong> : Description du job.</li>
                </ul>
            </div>
        </section>

        <!-- Veille Technologique -->
        <section id="veille-technologique">
            <h2 class="section-title">Veille Technologique</h2>
            <div class="content-box right-align">
                <p>Section vide pour l'instant. À venir bientôt !</p>
            </div>
        </section>

        <!-- Formulaire de Contact -->
        <section id="contact">
            <h2 class="section-title">Contactez-moi</h2>
            <div class="content-box left-align">
                <form action="contact-form.php" method="POST">
                    <label for="name">Nom :</label>
                    <input type="text" id="name" name="name" required><br><br>

                    <label for="email">Email :</label>
                    <input type="email" id="email" name="email" required><br><br>

                    <label for="message">Message :</label><br>
                    <textarea id="message" name="message" required></textarea><br><br>

                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </section>
    </div>    

    <script src="js/main.js"></script>
    <script src="js/script.js"></script>
<?php include("hf/footer.php"); ?>