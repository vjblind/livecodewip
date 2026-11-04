// ============================================================
// DNB / BREAKBEAT — RECONSTRUCTION DES CAPTURES SWITCH ANGEL
// Commentaires en français
//
// Organisation :
// 1. Configuration et banques de samples
// 2. Motifs de lecture de la nappe
// 3. Kick et caisse claire
// 4. Bruit blanc percussif
// 5. Rimshots génératifs
// 6. Basse échantillonnée
// 7. Nappe échantillonnée
//
// Les variantes des autres captures sont données séparément.
// ============================================================


// ------------------------------------------------------------
// 1. CONFIGURATION
// ------------------------------------------------------------

// Courbe de gain utilisée dans les captures.
// La valeur de gain est transformée par x².
setGainCurve(x => Math.pow(x, 2))

// Banque de breaks.
samples('github:switchangel/breaks')

// Banque de nappes, dont "swpad".
samples('github:switchangel/pad')

// Banque de batterie utilisée dans le live.
samples('github:tidalcycles/uzu-drumkit')

// 170 BPM, avec quatre temps par cycle.
// setCps attend un nombre de cycles par seconde.
setCps(170 / 60 / 4)


// ------------------------------------------------------------
// 2. MOTIFS DE POSITION POUR LA NAPPE
// ------------------------------------------------------------

// Ces motifs ne sont pas des mélodies :
// ils décrivent où lire dans le sample.
//
// scrub reçoit des positions normalisées :
// 0 = début du fichier ; 0.5 = milieu.
//
// Les couleurs servent au repérage visuel.

const chops = [

  // Deux événements à la position 0,
// auxquels on ajoute 0.5 : lecture autour du milieu du sample.
// Les poids 5 et 3 répartissent leur durée.
  "0@5 0@3"
    .add(0.5)
    .color("teal"),

  // Plusieurs positions dans le fichier.
// La dernière occupe cinq parts de durée.
  ".16 .3 .11 .5@5"
    .color("yellow"),

  // Positions aléatoires échantillonnées huit fois par cycle.
// On répète une fenêtre d'un demi-cycle du motif obtenu.
  rand
    .seg(8)
    .rib(36, 0.5)

]


// ------------------------------------------------------------
// 3. KICK ET CAISSE CLAIRE
// ------------------------------------------------------------

// Kick : grille de 16 pas.
// Frappes fixes aux pas 0 et 10.
// Le point d'interrogation rend la frappe au pas 7 optionnelle.

$: s("bd:4")
  .beat("0,7?,10", 16)


// Caisse claire aux pas 4 et 12.
// Sur une mesure de quatre temps : temps 2 et 4.

$: s("sd:2")
  .beat("4,12", 16)


// ------------------------------------------------------------
// 4. BRUIT BLANC PERCUSSIF
// ------------------------------------------------------------

// Huit événements de bruit blanc par cycle.
// Une enveloppe courte transforme le bruit en percussion.
//
// tri fait varier la durée de décroissance.
// fast(2) accélère cette modulation.
//
// Très rarement, ply double les événements.

$: s("white!8")
  .decay(
    tri.range(0.03, 0.1).fast(2)
  )
  .gain(0.6)
  .almostNever(ply("2"))


// ------------------------------------------------------------
// 5. RIMSHOTS GÉNÉRATIFS
// ------------------------------------------------------------

// Le motif aléatoire devient un masque de 0 et de 1 :
//
// rand.mul(0.65) : valeurs entre 0 et environ 0.65.
// round()       : arrondi vers 0 ou 1.
// seg(16)       : seize valeurs par cycle.
// rib(3, 2)     : répétition d'une fenêtre de deux cycles.
//
// struct utilise ce masque pour placer les rimshots.

$: s("rim:1")
  .struct(
    rand
      .mul(0.65)
      .round()
      .seg(16)
      .rib(3, 2)
  )
  .gain(0.5)
  ._punchcard()


// ------------------------------------------------------------
// 6. BASSE ÉCHANTILLONNÉE
// ------------------------------------------------------------

// Ici, la matière vient du sample "bass".
// Ce n'est pas une ligne de notes écrite avec note().
//
// Perlin fournit des positions qui évoluent progressivement.
// La lecture explore la zone 0.17 à 0.30 du fichier.
//
// fast(4) accélère le mouvement des positions.
// seg choisit leur résolution temporelle.
// rib fige et répète une fenêtre de deux cycles.

$: s("bass")
  .scrub(
    perlin
      .range(0.17, 0.3)
      .fast(4)
      .seg("8 4 4 8")
      .rib(22, 2)
  )

  // Une partie des événements est lue à l'envers.
  .sometimesBy(
    0.15,
    x => x.speed("-1")
  )

  // Traitements visibles dans la capture.
  .phaser(0.8)
  .distort("2.5:.45")

  // Quantité de delay modulée rapidement.
  .delay(
    rand.fast(3)
  )

  // Temps du delay également variable.
  .delaytime(rand)

  // Niveau réduit pour cet assemblage de plusieurs couches.
  .gain(0.45)
  ._scope()


// ------------------------------------------------------------
// 7. NAPPE ÉCHANTILLONNÉE
// ------------------------------------------------------------

// pick choisit un des trois motifs de positions.
//
// "<0>"       : premier motif uniquement.
// "<1>"       : deuxième motif uniquement.
// "<2>"       : troisième motif uniquement.
// "<0 1 2>"   : changement de motif à chaque cycle.
//
// On conserve ici le premier motif de la capture.

$: s("swpad")
  .scrub(
    pick(chops, "<0>")
  )

  // Attaque de 0.3 seconde.
  .att(0.3)

  // Sélection du sample d'indice 4 dans "swpad".
  .n(4)

  // Do2 pendant trois cycles, puis Do3 pendant un cycle.
  .note("<c2@3 c3>")

  // Réverbération et phaser.
  .room(1)
  .roomsize(4)
  .phaser(0.4)

  // Niveau réduit pour cette version combinée.
  .gain(0.5)
  ._punchcard()


// ------------------------------------------------------------
// 8. FILTRE GLOBAL — OPTIONNEL
// ------------------------------------------------------------

// La première capture montre un filtre global à 100 Hz.
// Il assombrit fortement toutes les couches.
//
// Décommente pour retrouver ce geste de performance :
//
// all(x => x.lpf(100))
