# Nuit MMI 2027 — version simplifiée

React + Vite + Tailwind CSS v4 + Motion.

## Démarrage

```bash
npm install
npm run dev
```

## Organisation

- `src/App.jsx` : structure générale de la page.
- `src/components/` : un composant par grande section.
- `src/data/event.js` : date et lien Twitch à personnaliser.
- `src/index.css` : identité graphique, mosaïque SVG et quelques animations CSS.
- `public/eyes/` : illustrations SVG d'origine.

## Choix techniques

- React : composants, tableau de données, compte à rebours avec `useState` et `useEffect`.
- Motion : uniquement pour le programme synchronisé avec le défilement.
- CSS : les yeux suivent la souris via des variables CSS, sans état React ni manipulation complexe des nœuds SVG.
- Tailwind v4 : installé et exposé via `@theme inline`. Les styles spécifiques à la mosaïque restent en CSS pour préserver le rendu original.

Le programme est indicatif et le lien Twitch doit être remplacé.


## Photos polaroid
La photo reçue est incluse en public/archives/nuit-mmi-2025.png. Aucune deuxième photo n’était jointe au message : la carte 2026 affiche un emplacement temporaire. Pour ajouter la vraie photo 2026, place-la dans public/archives/nuit-mmi-2026.jpg et renseigne photo: "/archives/nuit-mmi-2026.jpg" dans src/components/Experience.jsx. La carte 2027 reste blanche volontairement.
