/* Body */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    overflow: hidden; /* Blochează scroll-ul inițial */
    background: #f0f0f0; /* Fundal pentru întreaga pagină */
}

/* Header */
header {
    background: #333;
    color: #fff;
    padding: 10px 20px;
    text-align: center;
    font-family: 'Apricots', serif;
    font-size: 28px;
}

/* Navigation */
nav ul {
    background: #444;
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
}

nav ul li {
    margin: 0;
}

nav ul li a {
    color: #fff;
    display: block;
    padding: 10px 20px;
    text-decoration: none;
}

nav ul li a:hover {
    background: #555;
}

/* Main Content */
main {
    padding: 20px;
}

section {
    margin-bottom: 20px;
}

/* Footer */
footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
}

/* Containerul care conține imaginea */
.container {
    display: flex;
    justify-content: center; /* Centrează pe orizontală */
    align-items: center; /* Centrează pe verticală */
    height: 45vh; /* Înălțimea containerului este 100% din înălțimea ferestrei */
}

/* Imaginea */
img {
    max-width: 100%; /* Asigură-te că imaginea se redimensionează corect */
    height: 100%; /* Păstrează proporțiile imaginii */
}

/* Starea inițială: invizibil */
#recaptcha-overlay {
    opacity: 0; /* Pornește complet invizibil */
    transition: opacity 1.5s ease; /* Tranziție pentru fade-in */
}

/* După ce începe animația */
#recaptcha-overlay.fade-in {
    opacity: 1; /* Devine complet vizibil */
}

/* Main Content */
#main-content {
    display: none; /* Inițial ascuns */
    opacity: 0;
    transition: opacity 2.5s ease; /* Animatie de fade-in */
}

#main-content.visible {
    display: block;
    opacity: 1; /* Fă-l vizibil gradual */
}

/* Overlay (Recaptcha) */
#recaptcha-overlay {
    opacity: 1; /* Inițial vizibil */
    transition: opacity 3.5s ease; /* Tranziție pentru fade-out */
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.65); /* Semi-transparent */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    color: #fff;
}

/* Când overlay-ul dispare */
#recaptcha-overlay.hidden {
    opacity: 0; /* Face overlay-ul invizibil */
    pointer-events: none; /* Dezactivează interacțiunile */
}

/* Animație de zbor pentru reCaptcha */
#recaptcha {
    background: #333;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    animation: flyAway 2.5s ease forwards, fadeIn 2s ease forwards; /* Animație de fade-in după zbor */
}

/* Keyframes pentru animația de zbor (de jos în sus) */
@keyframes flyAway {
    0% {
        transform: translateY(50vh); /* începe din partea de jos a ecranului */
    }
    100% {
        transform: translateY(0); /* Se oprește în mijlocul ecranului */
    }
}

/* Keyframes pentru fade-in */
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

/* Compliments */
#compliments {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
}

.compliment {
    background: #e0f7fa;
    color: #00796b;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.2s ease, background 0.2s ease;
}

.compliment:hover {
    transform: scale(1.1);
    background: #b2dfdb;
}

.compliment.correct {
    background: #c8e6c9;
    color: #2e7d32;
}

.compliment.wrong {
    background: #ffcdd2;
    color: #c62828;
}

/* Main Content */
#main-content {
    display: none; /* Hide content initially */
}

html {
    scroll-behavior: smooth;
}

/* Efectul de rotație pe axa Y și saritura */
@keyframes rotateJumpY {
    0% {
        transform: rotateY(0deg) scale(1); /* La început, imaginea nu este rotită */
    }
    100% {
        transform: rotateY(360deg) scale(1); /* La final, imaginea revine la poziția inițială */
    }
}

/* Aplica animația imaginii */
#logo {
    cursor: pointer; /* Arată cursorul de tip pointer pentru interactivitate */
    transition: transform 1s ease; /* Animație lină */
}

/* Stil pentru a face click-ul inactiv în timpul animației */
#logo.no-click {
    pointer-events: none; /* Dezactivează interacțiunea cu imaginea */
}
