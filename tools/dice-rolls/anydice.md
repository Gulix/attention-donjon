# Test de probabilités par Anydice

Adresse de AnyDice : http://anydice.com/

Exemple de code permettant d'obtenir les probabilités :


    function: explode ROLLEDVALUE:n {
     if ROLLEDVALUE = 2 { result: 1 + [explode d{-1, 1, 1, 2, 2, 2}] }
     result: ROLLEDVALUE
    }

    NB_DES: 1

    output NB_DESd [explode d{-1, 0, 0, 1, 1, 2}] named "avec coup de poker"
    output NB_DESd{-1, 0, 0, 1, 1, 2} named "sans coup de poker"

"Coup de poker" à bien préciser, à tester. Parce que la séquence actuelle est pas terrible, au final.

**Variante ?**

En gros, 3+ pour générer une réussite, le 6 donne 2 réussites.
Coup de Poker : Sur un 6, on a une réussite, et on lance un nouveau dé.

    function: explode ROLLEDVALUE:n {
     if ROLLEDVALUE = 2 { result: 1 + [explode d{0, 0, 1, 1, 1, 2}] }
     result: ROLLEDVALUE
    }

    function: explodebeni ROLLEDVALUE:n {
     if ROLLEDVALUE = 2 { result: 1 + [explode d{0, 1, 1, 1, 1, 2}] }
     result: ROLLEDVALUE
    }

    function: explodemaudit ROLLEDVALUE:n {
     if ROLLEDVALUE = 2 { result: 1 + [explode d{0, 0, 0, 1, 1, 2}] }
     result: ROLLEDVALUE
    }

    NB_DES: 4
    set "maximum function depth" to 3


    output NB_DESd [explode d{0, 0, 1, 1, 1, 2}] named "avec coup de poker"
    output NB_DESd{0, 0, 1, 1, 1, 2} named "sans coup de poker"

    output NB_DESd [explodebeni d{0, 1, 1, 1, 1, 2}] named "avec coup de poker (Béni)"
    output NB_DESd{0, 1, 1, 1, 1, 2} named "sans coup de poker (Béni)"

    output NB_DESd [explodemaudit d{0, 0, 0, 1, 1, 2}] named "avec coup de poker (Maudit)"
    output NB_DESd{0, 0, 0, 1, 1, 2} named "sans coup de poker (Maudit)"

## Variante

    function: calcul ATTVALUE in LANCER:s {

      VALMAX: 1@LANCER
      NBMAX: [count VALMAX in LANCER]
      result: ATTVALUE + VALMAX + NBMAX - 1
    }

    output [calcul 1 in 1d6]  named "Attribut = 1"
    output [calcul 2 in 2d6]  named "Attribut = 2"
    output [calcul 3 in 3d6]  named "Attribut = 3"
    output [calcul 4 in 4d6]  named "Attribut = 4"
