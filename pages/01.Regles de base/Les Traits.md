# Les Traits

Le profil de chaque personnage (héros, ennemis, alliés, créatures, ...) est constitué de _Traits_ qui le définissent. Il existe 5 _Attributs_ génériques, qui correspondent aux caractéristiques innées, et un nombre variable de _Compétences_, qui représentent le savoir acquis. Chaque _Trait_ a une valeur chiffrée qui correspond à un dé (d4, d6, d8 ou d12), ou peut être nulle. La valeur d6 représente la valeur moyenne d'un humain.

## Les Attributs

Il existe 5 Attributs communs à l'ensemble des profils. Chaque Attribut peut se voir attribuer une valeur numérique correspondant au dé à lancer quand l'Attribut est utilisé. Un Attribut peut aussi avoir une valeur nulle (le Savoir d'un zombie, par exemple). Les Attributs sont utilisés lors de certains jets de dés (la Force pour les Dommages, le Mental pour Se Reprendre, ...), ainsi que pour calculer certaines des Valeurs Dérivées. Voici une courte description de chacun de ces Attributs.

* L'**Agilité** représente l'équilibre, la rapidité et la dextérité du personnage.
* Le **Savoir** mesure ce qu'un personnage connaît à propos de son univers et de sa culture, sa capacité à réfléchir dans le feu de l'action et son habileté mentale.
* Le **Mental** est une valeur de sa sagesse et de sa volonté. C'est une valeur importante pour se reprendre quand les choses vont mal.
* La **Force** concerne la puissance et la forme physique. Elle est utilisée pour déterminer les dégâts en corps-à-corps.
* La **Vigueur** sert à déterminer l'endurance, la résistance aux poisons, aux maladies, aux toxines, ainsi que les dommages que peut endurer un héros.

## Les Compétences

Les Compétences représentent des domaines acquis par un personnage, suite à son entraînement, son éducation ou son milieu naturel. Il peut s'agir de savoir utiliser un arc, se battre à mains nues ou avec une épée, une connaissance scientifique, des compétences professionnelles, et bien d'autres choses encore. Il n'y a pas de liste exhaustive de compétences. Certaines sont uniques à un type de créature, d'autres sont procurées par des équipements spécifiques, mais il en existe des plus répandues que d'autres.

* La compétence de **Mêlée** représente la capacité à utiliser une arme de corps-à-corps en Combat. Elle est nécessaire pour réaliser des attaques.
* La compétence de **Tir** représente la capacité à utiliser une arme de tir simple (arc, arbalète, ...) pour attaquer à distance.
* La compétence de **Lancer** représente la capacité à utiliser des armes de lancer (bombes, couteau, fronde, shurikens, ...) pour attaquer à distance
* La compétence d'**Arcane** représente la capacité à utiliser et comprendre la magie des Arcanes

## Les Valeurs dérivées

Chaque personnage possède une série de valeurs fixes, pré-calculées selon d'autres _Traits_, appelées **Valeurs dérivées**. Ces valeurs évoluent avec les traits associés, mais pas avec les bonus associés. Ainsi, si la valeur de _Mêlée_ d'un personnage passe de d6 à d8, sa valeur de _Parade_ passera de 5 à 7. Par contre, si un sort lui accorde un bonus de +1 à sa _Mêlée_, sa valeur de _Parade_ n'évolue pas.

Le **Déplacement** n'est pas vraiment une _Valeur Dérivée_, mais est une valeur fixe. Elle indique le nombre de déplacement vers une Zone qu'un personnage peut effectuer au cours d'une action de Mouvement. Généralement, cette valeur est de 1. Elle peut être plus élevée pour les figurines les plus rapides, et nulle pour les figurines statiques.

La **Parade** représente la valeur à atteindre pour toucher le personnage avec une attaque de Corps-à-corps. Elle est égale à 2 + la moitié de sa valeur de _Mêlée_ (ou à 2 si le personnage n'a pas la compétence Mêlée). Les bonus des boucliers et de certaines armes ou talents s'y ajoutent ensuite, pour former la valeur de _Parade_, qui sera utilisée en combat. La _Parade instinctive_, sauf mention contraire, ne prend pas en compte ces bonus de boucliers et d'équipement.

Dans le cas où la compétence de _Mêlée_ dépasse la valeur de d12 (d12+1, d12+2, ...), on ajoute la moitié du modificateur, arrondi à l'inférieur :

* Une valeur de _Mêlée_ de d8 donnera une _Parade_ de 2 + 8/2 = 6
* Une valeur de _Mêlée_ de d12+1 donnera une _Parade_ de 2 + 12/2 + 1/2 = 8
* Une valeur de _Mêlée_ de d12+2 donnera une _Parade_ de 2 + 12/2 + 2/2 = 9

L'**Endurance** représente la résistance aux coups portés, et la valeur à atteindre pour infliger des blessures au personnage. Elle est égale à 2 + la moitié de sa valeur de _Vigueur_. Les bonus d'armure et de certains objets ou talents s'y ajoutent ensuite, pour former la valeur d'_Endurance_, qui sera utilisée en combat. L'_Endurance naturelle_, sauf mention contraire, ne prend pas en compte ces bonus d'armure et de protection.

Dans le cas où la compétence de _Vigueur_ dépasse la valeur de d12, le calcul se fait comme pour la _Parade_.

## Jet de Trait

Pour réaliser la majorité de ses actions, un personnage doit réaliser un _Jet de trait_, qu'il s'agisse d'un _Attribut_ ou d'une _Compétence_. Il pourra s'agit d'un jet de _Force_ pour soulever une grille, d'un jet de _Mêlée_ pour attaquer un ennemi, d'un jet de _Mental_ pour se reprendre, ou de toute autre chose proposée par ses talents ou l'environnement.

Le _Jet de trait_ s'effectue en lançant le dé du _Trait_ correspondant. Des talents ou des circonstances peuvent accorder des dés supplémentaires au jet. Dans ce cas, ces dés sont lancés en même temps, seul le meilleur résultat étant conservé. Ces dés sont tous **explosifs**, ce qui signifie que si le meilleur résultat du dé est obtenu (6 sur un d6, 8 sur un d8, ...), on relance le dé et on ajoute la nouvelle valeur au résultat. Sur cette relance et les suivantes, on peut continuer à faire exploser les dés pour obtenir un résultat très haut. Si plusieurs dés explosent sur un jet, il faudra tenir compte du résultat final obtenu par chacun d'eux, pour déterminer le résultat le plus élevé obtenu par un dé.

Des bonus et malus peuvent être accordés à certains types de jet par de l'équipement, un sort, une condition, ... Ces bonus peuvent être fixes (+1, -2, ...) ou variables (+d6, -d4, ...). Une fois le résultat du jet obtenu (après les éventuelles _explosions_), on ajoute le bonus / malus, en lançant si besoin le dé bonus (qui n'est pas explosif). Cela donne le résultat final du _Jet de trait_.

Par défaut, la difficulté d'une action est de 4. On appelle cette valeur la **Cible**. Sauf indication contraire, la _Cible_ est 4. Certaines actions auront d'autres _Cibles_, comme les tests de Mêlée qui sont opposés à la _Parade_ de l'adversaire, les jets de Force pour les Dommages qui ont pour Cible l'Endurance, ...

Un personnage non-entraîné, qui ne possède pas la compétence requise pour une action, peut faire un jet à D4-2 (plus ou moins les bonus et malus éventuels). Certaines compétences ne peuvent pas être utilisées sans entraînement, ce qui est indiqué dans leur descriptif. Sauf indication contraire, donc, une Compétence peut toujours être utilisée.

## Tests opposés

Il peut arriver qu'un test ait comme _Cible_ le résultat d'un jet de trait adverse. Par exemple, quand un sorcier jette en sort en utilisant Arcane contre un groupe d'orques, ceux-ci tentent de résister en effectuant un jet de Mental.

L'attaquant fait son jet en premier, suivi du défenseur. Le plus haut total l'emporte. En cas d'égalité, l'action de l'attaquant est un échec. Pour que son action réussisse, l'attaquant doit également atteindre ou dépasser la _Cible_  par défaut (qui est d'une valeur de 4).

## Réussites

Selon les actions effectuées, il peut être important de savoir à quel point une action est réussie. Pour chaque tranche de 4 points au-dessus de la _Cible_, le personnage obtient une **Réussite**. Par exemple, pour une _Cible_ de 4, on obtient une **Réussite** à partir d'un résultat de 8, puis deux à 12, ... Les effets des réussites sont décrits dans les actions.
