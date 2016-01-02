# Esquive

Lors d'un _Mouvement_, quand un personnage est entouré d'ennemis, il peut être amené à devoir faire une Esquive pour éviter d'être frappé alors qu'il se déplace.

Si la zone de départ du personnage ne contient aucun ennemi, il n'a pas d'_Esquive_ à faire.

Si des ennemis sont présents dans la zone de départ du personnage, une _Esquive_ est nécessaire.

Si des ennemis sont également présents dans la zone d'arrivée du personnage, l'_Esquive_ devient **difficile**.

Un **Pas de placement** ne nécessite jamais d'Esquive.

TODO : Schéma

## Jet d'esquive

L'_Equive_ est un jet de Trait utilisant l'Attribut _Agilité_. Le personnage qui tente son Esquive fait son jet avec une Cible de 4. Dans le cas d'une _Esquive difficile_, la Cible passe à 6. Des capacités ou de l'équipement peuvent modifier ce jet.

Si le personnage atteint la Cible, il se déplace dans sa case d'arrivée sans encombre, et termine son tour normalement.

Si la Cible n'est pas atteinte, tous les ennemis adjacents dans la case de départ réalisent une _Attaque de Mêlée_ gratuite, sauf s'ils ne sont pas en mesure d'attaquer, ou s'ils ont déjà utilisé leur **Réaction** du Round. Cette attaque utilise leur _Réaction_ du Round. On résout chaque attaque séparément, dans l'ordre souhaité par le joueur dirigeant le personnage qui réalise l'Esquive. Si une des attaques provoque l'état Secoué ou Blessé, le Mouvement s'arrête dans la case de départ. Le joueur a dépensé une Action de Mouvement, mais peut continuer à jouer son Tour.

Si la Cible n'est pas atteinte, et que le personnage réussit à atteindre la case d'arrivée, tous les ennemis adjacents à cette case réalisent également une _Attaque de Mêlée_ gratuite, avec les mêmes limites que les ennemis adjacents à la case de départ. Un ennemi adjacent à la case de départ et d'arrivée ne peut réaliser l'attaque que sur la case de départ (même s'il dispose de plusieurs Réactions). Dans tous les cas, si le personnage arrive à la case d'arrivée, il peut agir normalement ensuite (s'il est encore actif).

Un personnage contrôlé par un joueur n'est jamais obligé d'utiliser sa _Réaction_ pour réaliser une attaque gratuite suite à une Esquive ratée d'un ennemi. Il peut conserver sa _Réaction_ pour un autre usage.

## Talents d'esquive

### Esquive

Un personnage avec ce talent peut sacrifier son _Action standard_ du tour pour réussir automatiquement une Esquive. Si cette Esquive est _difficile_, ce talent permet de la rendre normale (Cible à 4), toujours contre le sacrifice d'une action standard. Il est possible de sacrifier son action standard après avoir tenté son esquive (si elle échoue).

### Maîtrise de l'esquive

Le personnage réussit toujours ses Esquives. Une Esquive difficile devient normale pour lui (Cible à 4). Un personnage avec ce talent est considéré comme ayant le talent _Esquive_. Il peut ainsi sacrifier son Action Standard pour réussir une Esquive difficle (qui est devenue une Esquive normale).

### Insaisissable

Le personnage réussit toujours ses Esquives, qu'elles soient normales ou difficiles. Il n'a plus de jet d'esquive à faire.
