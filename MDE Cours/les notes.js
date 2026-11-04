/*Du rythme à la mélodie
Les notes anglaises

do ré mi fa sol la si = C D E F G A B
Les premières gammes

    C majeur : C D E F G A B — joyeux, simple

    A mineur : A B C D E F G — les mêmes notes, mais plus triste

    C mineur pentatonique : C Eb F G Bb — 5 notes, sonne techno, impossible de rater

La méthode : écrire le rythme, puis bouger les lettres

    Écris toute ta rythmique avec une seule lettre, par exemple g : ça donne g g gg ggg g g

    Ensuite tu bouges les lettres : g e ff c d e — même rythme, mais les notes changent

    Tu montes et tu descends dans la gamme → c'est une mélodie

Le truc important : t'as le droit à toutes les notes de la gamme, pas juste 3. C'est ça qui rend le truc gérable pour faire tout un son.
Le code dans Strudel

javascript*/
// étape 1 : le rythme, une seule note
// "gg" et "ggg" = notes rapides → [g g] et [g g g]
s("sawtooth")
.note("g g [g g] [g g g] g g")
.scale("C major")

// étape 2 : on bouge les lettres, même rythme
s("sawtooth")
.note("g e [f f] [c d e] g e")
.scale("C major")

// étape 3 : la mélodie monte et descend dans la gamme
s("pluck")
.note("<c4 d4 e4 g4 a4 b4 a4 g4 e4 d4>")
.scale("C major")
