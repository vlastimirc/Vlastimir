# Vlastimir Černoš - Mašinski inženjer | CAD & Proizvodni Portfolio

Izvorni kod portfolio sajta dizajniranog u stilu tehničke dokumentacije (ISO 7200 sastavnica, milimetarska CAD mreža, čelično-plava i industrijska narandžasta paleta).

## Kako dodati slike rendera i radova iz proizvodnje?
1. Ubaci fotografiju ili render u folder `images/` (npr. `creo-deo.jpg`).
2. U fajlu `index.html` pronađi blok `project-image-placeholder` i zameni unutrašnji `<div class="placeholder-inner">...</div>` sa:
   `<img src="images/creo-deo.jpg" alt="Opis mašinskog dela">`
