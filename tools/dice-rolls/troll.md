# Test de probabilités par Troll

Adresse de Troll Dice Roller : http://topps.diku.dk/torbenm/troll.msp

Exemple de code permettant d'obtenir les probabilités :


    function attention(x) =
      if x=1 then -1
      else if x=6 then 2
      else if x >= 4 then 1
      else 0

    sum 4 # call attention(d6)
