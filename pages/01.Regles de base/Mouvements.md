# Le Mouvement

Le **Mouvement** est une action disponible pour tous les personnages dont la valeur de _Déplacement_ n'est pas nulle. Cela permet au personnage d'évoluer dans l'environnement, de se déplacer. Il existe deux types de mouvement possibles.

Les personnages qui disposent de plusieurs points de **Déplacement** peuvent réaliser cette action autant de fois qu'ils ont de points pour le coût d'une Action de Mouvement. Il est ainsi possible de cumuler des _Mouvements classiques_ avec des _Pas de placement_. Chaque mouvement doit être réalisé complètement avant de procéder au suivant.

## Mouvement classique

Le premier est le **Mouvement** classique. Il permet de se déplacer vers une autre zone du Donjon. Les conditions suivantes doivent être respectées pour que le mouvement puisse avoir lieu :

* La case d'arrivée doit être dans une zone adjacente à la zone dans laquelle se trouve le personnage.
* Il doit exister une case vide dans la zone d'arrivée, qui soit également adjacente à la zone dans laquelle se trouve le personnage.
* Il doit être possible de tracer un chemin de cases vides entre cette case vide à la frontière et la case ciblée.

Ce genre de déplacement peut entraîner une **Esquive** si des ennemis sont présents.

TODO : Schémas explicatifs

## Pas de placement

Le _Pas de placement_ est un déplacement court et généralement sans risques. Il permet de mieux se positionner au sein du Donjon.

Un personnage qui effectue un pas de placement peut librement se replacer dans n'importe quelle case vide de la zone dans laquelle il se trouve. Ce déplacement ne provoque pas d'_Esquive_.

Un _Pas de placement_ peut également être utilisé pour se déplacer vers une case adjacente à celle actuellement occupée par le personnage, et qui se trouverait dans une autre zone. Cela peut permettre d'éviter une _Esquive_. Si des ennemis sont _au contact_ et dans la même zone au départ, et _au contact_ et dans la même zone à l'arrivée, l'_Esquive_ reste nécessaire.

## Repousser une figurine

<TODO : des schémas ?>

Un personnage repoussé est déplacé automatiquement (et sans Esquive) dans une case adjacente, qui n'est pas adjacente à la case de son agresseur. La case doit être, si possible, libre. Si aucune case n'est libre, le joueur qui repousse peut choisir la case dans laquelle est repoussé son adversaire. Cette case ne peut en aucun cas être occupée par un élément statique et plein (statue, arbre, ...). La figurine dans la case est elle-aussi repoussée, en suivant les mêmes règles (la figurine qui arrive dans sa case est considérée comme étant celle qui la repousse). Cela peut entraîner une succession de déplacements.

Une figurine peut être repoussée sur une case provoquant des effets (lave, précipices, piège, interrupteur, ...). On résout ces effets en commençant par la dernière figurine repoussée, et en remontant jusqu'à la première figurine repoussée. Puis l'action du tour se poursuit.
