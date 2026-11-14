export type Level = 1 | 2 | 3 | 4;

export interface Exercise {
  id: number;
  level: Level;
  title: string;
  objective: string;
  description: string;
  starterCode: string;
  solution: string;
  hints: string[];
  concepts: string[];
}

export const exercises: Exercise[] = [
  // ========== NIVEAU 1 - TRÈS FACILE ==========
  {
    id: 1,
    level: 1,
    title: "Afficher tous les éléments d'une liste",
    objective: "Utiliser LINQ pour parcourir et afficher une collection",
    description: `Créez une liste d'entiers et utilisez LINQ pour afficher chaque élément.
    
📌 Concept : LINQ fonctionne sur toute collection qui implémente IEnumerable<T>.
La méthode la plus basique est de simplement itérer avec foreach après une requête LINQ.`,
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

// Créez une liste de nombres : 10, 20, 30, 40, 50
// Utilisez LINQ pour afficher chaque nombre
// Astuce : vous pouvez utiliser .ToList() ou simplement itérer

List<int> nombres = new List<int> { 10, 20, 30, 40, 50 };

// TODO: Utilisez une requête LINQ pour afficher chaque nombre
// foreach (var n in ...)
// {
//     Console.WriteLine(n);
// }`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

List<int> nombres = new List<int> { 10, 20, 30, 40, 50 };

// Méthode 1 : Avec une requête LINQ (query syntax)
var resultat = from n in nombres
               select n;

foreach (var n in resultat)
{
    Console.WriteLine(n);
}

// Méthode 2 : Avec la syntaxe de méthode (method syntax)
nombres.ToList().ForEach(n => Console.WriteLine(n));

// Résultat :
// 10
// 20
// 30
// 40
// 50`,
    hints: [
      "Utilisez le mot-clé 'from' pour commencer une requête LINQ",
      "Le mot-clé 'select' permet de projeter les éléments",
      "La syntaxe de méthode utilise des extensions comme .Select()"
    ],
    concepts: ["from", "select", "IEnumerable<T>"]
  },
  {
    id: 2,
    level: 1,
    title: "Filtrer les nombres pairs avec Where",
    objective: "Utiliser Where() pour filtrer une collection selon un critère",
    description: `À partir d'une liste de nombres (1 à 20), filtrez uniquement les nombres pairs.

📌 Concept : Where() applique un prédicat (condition booléenne) et retourne 
uniquement les éléments qui satisfont cette condition.`,
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

List<int> nombres = Enumerable.Range(1, 20).ToList();

// TODO: Filtrez les nombres pairs avec Where
// var pairs = ...

// Console.WriteLine("Nombres pairs :");
// foreach (var n in pairs)
//     Console.Write(n + " ");`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

List<int> nombres = Enumerable.Range(1, 20).ToList();

// Syntaxe de requête (query syntax)
var pairsQuery = from n in nombres
                 where n % 2 == 0
                 select n;

// Syntaxe de méthode (method syntax)
var pairsMethod = nombres.Where(n => n % 2 == 0);

Console.WriteLine("Nombres pairs :");
foreach (var n in pairsQuery)
    Console.Write(n + " ");

// Résultat : 2 4 6 8 10 12 14 16 18 20`,
    hints: [
      "L'opérateur modulo % donne le reste de la division",
      "Un nombre pair : n % 2 == 0",
      "Where() accepte une expression lambda : n => condition"
    ],
    concepts: ["Where", "expression lambda", "modulo"]
  },
  {
    id: 3,
    level: 1,
    title: "Trier une liste avec OrderBy",
    objective: "Utiliser OrderBy() et OrderByDescending() pour trier",
    description: `Triez une liste de noms par ordre alphabétique, puis par ordre inverse.

📌 Concept : OrderBy() trie par ordre croissant, OrderByDescending() par ordre décroissant.`,
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

List<string> prenoms = new List<string> 
{ "Omar", "Alice", "Youssef", "Fatima", "Karim", "Sara" };

// TODO: Triez par ordre alphabétique
// var tries = ...

// TODO: Triez par ordre inverse
// var triesInverse = ...`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

List<string> prenoms = new List<string> 
{ "Omar", "Alice", "Youssef", "Fatima", "Karim", "Sara" };

// Tri alphabétique (croissant)
var tries = prenoms.OrderBy(p => p);
Console.WriteLine("Ordre alphabétique :");
foreach (var p in tries)
    Console.Write(p + " ");
// Résultat : Alice Fatima Karim Omar Sara Youssef

Console.WriteLine();

// Tri inverse (décroissant)
var triesInverse = prenoms.OrderByDescending(p => p);
Console.WriteLine("Ordre inverse :");
foreach (var p in triesInverse)
    Console.Write(p + " ");
// Résultat : Youssef Sara Omar Karim Fatima Alice

Console.WriteLine();

// Syntaxe de requête
var triesQuery = from p in prenoms
                 orderby p ascending
                 select p;`,
    hints: [
      "OrderBy(p => p) trie par ordre alphabétique par défaut",
      "Pour la syntaxe de requête : orderby p ascending / descending",
      "ThenBy() permet un tri secondaire"
    ],
    concepts: ["OrderBy", "OrderByDescending", "orderby"]
  },
  {
    id: 4,
    level: 1,
    title: "Compter les éléments avec Count",
    objective: "Utiliser Count() pour compter les éléments d'une collection",
    description: `Comptez le nombre total d'éléments, puis le nombre d'éléments qui satisfont une condition.

📌 Concept : Count() sans argument compte tout. Count(predicate) compte les éléments filtrés.`,
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

int[] notes = { 12, 8, 15, 18, 6, 14, 10, 20, 3, 16 };

// TODO: Comptez le nombre total de notes
// TODO: Comptez les notes >= 10 (admis)
// TODO: Comptez les notes < 10 (non admis)`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

int[] notes = { 12, 8, 15, 18, 6, 14, 10, 20, 3, 16 };

// Nombre total
int total = notes.Count();
Console.WriteLine($"Total de notes : {total}");  // 10

// Notes >= 10 (admis)
int admis = notes.Count(n => n >= 10);
Console.WriteLine($"Notes >= 10 : {admis}");  // 6

// Notes < 10 (non admis)
int nonAdmis = notes.Count(n => n < 10);
Console.WriteLine($"Notes < 10 : {nonAdmis}");  // 4

// Syntaxe de requête
int admisQuery = (from n in notes
                  where n >= 10
                  select n).Count();`,
    hints: [
      "Count() retourne un int",
      "Count(predicate) : Count(n => n >= 10)",
      "LongCount() retourne un long pour les très grandes collections"
    ],
    concepts: ["Count", "prédicat", "agrégation"]
  },
  {
    id: 5,
    level: 1,
    title: "Premier et dernier élément",
    objective: "Utiliser First(), Last(), FirstOrDefault()",
    description: `Trouvez le premier et le dernier élément d'une liste, avec et sans condition.

📌 Concept : First() lève une exception si vide. FirstOrDefault() retourne la valeur par défaut (0, null).`,
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

List<int> nombres = new List<int> { 5, 12, 8, 20, 3, 15, 7 };

// TODO: Obtenez le premier élément
// TODO: Obtenez le dernier élément
// TODO: Premier nombre > 10
// TODO: Premier nombre > 100 (avec FirstOrDefault)`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

List<int> nombres = new List<int> { 5, 12, 8, 20, 3, 15, 7 };

// Premier élément
int premier = nombres.First();
Console.WriteLine($"Premier : {premier}");  // 5

// Dernier élément
int dernier = nombres.Last();
Console.WriteLine($"Dernier : {dernier}");  // 7

// Premier nombre > 10
int premierGrand = nombres.First(n => n > 10);
Console.WriteLine($"Premier > 10 : {premierGrand}");  // 12

// Premier nombre > 100 (n'existe pas)
int? resultat = nombres.FirstOrDefault(n => n > 100);
Console.WriteLine($"Premier > 100 : {resultat}");  // 0 (valeur par défaut)

// Avec Single() - lève exception si 0 ou +1 résultat
// int unique = nombres.Single(n => n == 20);  // 20`,
    hints: [
      "First() = premier élément, Last() = dernier élément",
      "FirstOrDefault() est plus sûr : pas d'exception si vide",
      "Single() attend exactement UN résultat"
    ],
    concepts: ["First", "Last", "FirstOrDefault", "SingleOrDefault"]
  },

  // ========== NIVEAU 2 - FACILE ==========
  {
    id: 6,
    level: 2,
    title: "Projection avec Select",
    objective: "Transformer les éléments avec Select()",
    description: `À partir d'une liste de noms, créez une liste de noms en majuscules, 
puis une liste de longueurs de chaque nom.

📌 Concept : Select() projette/transforme chaque élément selon une fonction.`,
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

List<string> etudiants = new List<string> 
{ "ahmed", "sara", "mohamed", "leila", "yassine" };

// TODO: Mettez tous les noms en majuscules
// TODO: Obtenez la longueur de chaque nom
// TODO: Créez des phrases : "Bonjour AHMED !"`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

List<string> etudiants = new List<string> 
{ "ahmed", "sara", "mohamed", "leila", "yassine" };

// Noms en majuscules
var majuscules = etudiants.Select(n => n.ToUpper());
Console.WriteLine("Majuscules :");
foreach (var n in majuscules)
    Console.Write(n + " ");
// AHMED SARA MOHAMED LEILA YASSINE

Console.WriteLine();

// Longueur de chaque nom
var longueurs = etudiants.Select(n => n.Length);
Console.WriteLine("Longueurs :");
foreach (var l in longueurs)
    Console.Write(l + " ");
// 5 4 7 5 7

Console.WriteLine();

// Salutations
var salutations = etudiants.Select(n => $"Bonjour {n.ToUpper()} !");
foreach (var s in salutations)
    Console.WriteLine(s);

// Avec objets anonymes
var infos = etudiants.Select(n => new { 
    Nom = n, 
    Majuscule = n.ToUpper(), 
    Longueur = n.Length 
});
foreach (var info in infos)
    Console.WriteLine($"{info.Nom} -> {info.Majuscule} ({info.Longueur} lettres)");`,
    hints: [
      "Select(n => expression) transforme chaque élément",
      "Vous pouvez retourner n'importe quel type",
      "Utilisez 'new { }' pour créer des objets anonymes"
    ],
    concepts: ["Select", "projection", "objet anonyme"]
  },
  {
    id: 7,
    level: 2,
    title: "Filtrage avancé avec Where",
    objective: "Combiner plusieurs conditions dans Where()",
    description: `Filtrez une liste de produits selon plusieurs critères combinés.

📌 Concept : Combinez les conditions avec && (ET) et || (OU) dans Where().`,
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

var produits = new List<(string Nom, decimal Prix, string Categorie)>
{
    ("Stylo", 2.5m, "Bureau"),
    ("Ordinateur", 800m, "Informatique"),
    ("Cahier", 3.0m, "Bureau"),
    ("Souris", 25m, "Informatique"),
    ("Lampe", 45m, "Décoration"),
    ("Clavier", 60m, "Informatique"),
    ("Gomme", 1.0m, "Bureau")
};

// TODO: Produits de catégorie "Bureau" ET prix < 5
// TODO: Produits "Informatique" OU prix > 50
// TODO: Produits dont le nom commence par une voyelle`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

var produits = new List<(string Nom, decimal Prix, string Categorie)>
{
    ("Stylo", 2.5m, "Bureau"),
    ("Ordinateur", 800m, "Informatique"),
    ("Cahier", 3.0m, "Bureau"),
    ("Souris", 25m, "Informatique"),
    ("Lampe", 45m, "Décoration"),
    ("Clavier", 60m, "Informatique"),
    ("Gomme", 1.0m, "Bureau")
};

// Bureau ET prix < 5
var bureauPasCher = produits.Where(p => p.Categorie == "Bureau" && p.Prix < 5);
Console.WriteLine("Bureau pas cher :");
foreach (var p in bureauPasCher)
    Console.WriteLine($"  {p.Nom} - {p.Prix}€");

// Informatique OU prix > 50
var cherOuInfo = produits.Where(p => p.Categorie == "Informatique" || p.Prix > 50);
Console.WriteLine("\\nInformatique ou > 50€ :");
foreach (var p in cherOuInfo)
    Console.WriteLine($"  {p.Nom} - {p.Prix}€ ({p.Categorie})");

// Nom commence par une voyelle
var voyelle = produits.Where(p => "AEIOUaeiou".Contains(p.Nom[0]));
Console.WriteLine("\\nCommence par une voyelle :");
foreach (var p in voyelle)
    Console.WriteLine($"  {p.Nom}");`,
    hints: [
      "Utilisez && pour combiner des conditions (ET)",
      "Utilisez || pour les conditions alternatives (OU)",
      "string.Contains() peut vérifier si un caractère est dans une chaîne"
    ],
    concepts: ["Where", "conditions combinées", "tuples"]
  },
  {
    id: 8,
    level: 2,
    title: "Any() et All() - Vérifications",
    objective: "Vérifier si des éléments existent ou satisfont tous une condition",
    description: `Utilisez Any() pour vérifier l'existence et All() pour vérifier une condition sur tous les éléments.

📌 Concept : Any() retourne true si AU MOINS UN élément satisfait. All() retourne true si TOUS satisfont.`,
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

int[] notes = { 12, 15, 8, 18, 10, 14, 7, 16 };

// TODO: Y a-t-il au moins une note = 20 ?
// TODO: Y a-t-il au moins une note < 5 ?
// TODO: Toutes les notes sont-elles >= 10 ?
// TODO: Toutes les notes sont-elles entre 0 et 20 ?`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

int[] notes = { 12, 15, 8, 18, 10, 14, 7, 16 };

// Y a-t-il au moins une note = 20 ?
bool aVingt = notes.Any(n => n == 20);
Console.WriteLine($"Y a-t-il un 20 ? {aVingt}");  // False

// Y a-t-il au moins une note < 5 ?
bool aEchec = notes.Any(n => n < 5);
Console.WriteLine($"Note < 5 ? {aEchec}");  // False

// Toutes les notes >= 10 ?
bool toutesAdmis = notes.All(n => n >= 10);
Console.WriteLine($"Toutes >= 10 ? {toutesAdmis}");  // False

// Toutes entre 0 et 20 ?
bool toutesValides = notes.All(n => n >= 0 && n <= 20);
Console.WriteLine($"Toutes valides (0-20) ? {toutesValides}");  // True

// Contains() équivaut à Any(n => n == valeur)
bool contient15 = notes.Contains(15);
Console.WriteLine($"Contient 15 ? {contient15}");  // True`,
    hints: [
      "Any() sans argument vérifie si la collection n'est pas vide",
      "Any(predicate) : au moins un élément satisfait",
      "All(predicate) : tous les éléments satisfont"
    ],
    concepts: ["Any", "All", "Contains", "vérification"]
  },
  {
    id: 9,
    level: 2,
    title: "Distinct() - Éliminer les doublons",
    objective: "Supprimer les doublons d'une collection",
    description: `Trouvez les valeurs uniques dans une liste avec des doublons.

📌 Concept : Distinct() retourne uniquement les éléments uniques.`,
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

int[] notes = { 12, 15, 12, 18, 15, 10, 18, 12, 20, 10 };

// TODO: Obtenez les notes uniques
// TODO: Combien de notes différentes y a-t-il ?`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

int[] notes = { 12, 15, 12, 18, 15, 10, 18, 12, 20, 10 };

// Notes uniques
var notesUniques = notes.Distinct();
Console.WriteLine("Notes uniques :");
foreach (var n in notesUniques)
    Console.Write(n + " ");
// 12 15 18 10 20

Console.WriteLine();

// Nombre de notes différentes
int nbDifferentes = notes.Distinct().Count();
Console.WriteLine($"Nombre de notes différentes : {nbDifferentes}");  // 5

// Avec des objets : utiliser un IEqualityComparer
var etudiants = new[] { "Ahmed", "Sara", "ahmed", "SARA", "Mohamed" };
var uniques = etudiants.Distinct(StringComparer.OrdinalIgnoreCase);
Console.WriteLine("Noms uniques (ignore case) :");
foreach (var e in uniques)
    Console.Write(e + " ");
// Ahmed Sara Mohamed`,
    hints: [
      "Distinct() utilise l'égalité par défaut du type",
      "Pour les strings : Distinct(StringComparer.OrdinalIgnoreCase)",
      "Combinez avec OrderBy() pour trier les résultats uniques"
    ],
    concepts: ["Distinct", "doublons", "StringComparer"]
  },
  {
    id: 10,
    level: 2,
    title: "Take() et Skip() - Pagination",
    objective: "Sélectionner ou ignorer un nombre d'éléments",
    description: `Implémentez un système de pagination simple avec Take() et Skip().

📌 Concept : Take(n) prend les n premiers éléments. Skip(n) ignore les n premiers.`,
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

// Liste de 50 produits
var produits = Enumerable.Range(1, 50)
    .Select(i => $"Produit {i}")
    .ToList();

// TODO: Affichez la page 1 (10 premiers)
// TODO: Affichez la page 3 (éléments 21-30)
// TODO: Prenez les 5 derniers éléments`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

var produits = Enumerable.Range(1, 50)
    .Select(i => $"Produit {i}")
    .ToList();

// Page 1 : 10 premiers éléments
var page1 = produits.Take(10);
Console.WriteLine("Page 1 :");
foreach (var p in page1)
    Console.Write(p + " | ");

// Page 3 : Skip(20) puis Take(10)
int pageSize = 10;
int pageNum = 3;
var page3 = produits.Skip((pageNum - 1) * pageSize).Take(pageSize);
Console.WriteLine("\\n\\nPage 3 :");
foreach (var p in page3)
    Console.Write(p + " | ");

// 5 derniers éléments
var derniers = produits.TakeLast(5);
Console.WriteLine("\\n\\n5 derniers :");
foreach (var p in derniers)
    Console.Write(p + " | ");

// SkipWhile et TakeWhile
var nombres = new[] { 1, 3, 5, 8, 2, 4, 6, 9 };
var apresPremierPair = nombres.SkipWhile(n => n % 2 != 0);
Console.WriteLine("\\n\\nAprès premier pair :");
foreach (var n in apresPremierPair)
    Console.Write(n + " ");  // 8 2 4 6 9`,
    hints: [
      "Take(n) = les n premiers, Skip(n) = on saute les n premiers",
      "Pour la page N : Skip((N-1) * taillePage).Take(taillePage)",
      "TakeLast(n) prend les n derniers éléments"
    ],
    concepts: ["Take", "Skip", "pagination", "TakeLast", "SkipWhile"]
  },

  // ========== NIVEAU 3 - INTERMÉDIAIRE ==========
  {
    id: 11,
    level: 3,
    title: "GroupBy() - Regrouper des données",
    objective: "Grouper des éléments selon une clé",
    description: `Regroupez des étudiants par filière et calculez la moyenne de chaque groupe.

📌 Concept : GroupBy() crée des groupes basés sur une clé. Chaque groupe a une Key et des éléments.`,
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

var etudiants = new List<(string Nom, string Filiere, int Note)>
{
    ("Ahmed", "Info", 15), ("Sara", "Math", 18),
    ("Karim", "Info", 12), ("Leila", "Physique", 14),
    ("Omar", "Math", 16), ("Fatima", "Info", 17),
    ("Yassine", "Physique", 11), ("Nadia", "Math", 13),
    ("Hassan", "Info", 9), ("Amina", "Physique", 19)
};

// TODO: Groupez par filière
// TODO: Pour chaque groupe, affichez la filière et la moyenne
// TODO: Trouvez la filière avec la meilleure moyenne`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

var etudiants = new List<(string Nom, string Filiere, int Note)>
{
    ("Ahmed", "Info", 15), ("Sara", "Math", 18),
    ("Karim", "Info", 12), ("Leila", "Physique", 14),
    ("Omar", "Math", 16), ("Fatima", "Info", 17),
    ("Yassine", "Physique", 11), ("Nadia", "Math", 13),
    ("Hassan", "Info", 9), ("Amina", "Physique", 19)
};

// Grouper par filière
var groupes = etudiants.GroupBy(e => e.Filiere);

Console.WriteLine("=== Moyennes par filière ===");
foreach (var groupe in groupes)
{
    double moyenne = groupe.Average(e => e.Note);
    Console.WriteLine($"\\n{groupe.Key} (Moyenne: {moyenne:F1}) :");
    foreach (var e in groupe)
        Console.WriteLine($"  - {e.Nom} : {e.Note}/20");
}

// Filière avec la meilleure moyenne
var meilleureFiliere = groupes
    .Select(g => new { Filiere = g.Key, Moyenne = g.Average(e => e.Note) })
    .OrderByDescending(g => g.Moyenne)
    .First();

Console.WriteLine($"\\n🏆 Meilleure filière : {meilleureFiliere.Filiere} " +
                  $"avec {meilleureFiliere.Moyenne:F1}/20");

// Syntaxe de requête
var groupesQuery = from e in etudiants
                   group e by e.Filiere into g
                   select new 
                   { 
                       Filiere = g.Key, 
                       Moyenne = g.Average(e => e.Note),
                       NbEtudiants = g.Count()
                   };`,
    hints: [
      "GroupBy(keySelector) crée des IGrouping<Key, Element>",
      "Chaque groupe a .Key et peut utiliser .Average(), .Count(), etc.",
      "Combinez avec Select() pour projeter les résultats"
    ],
    concepts: ["GroupBy", "IGrouping", "Average", "agrégation par groupe"]
  },
  {
    id: 12,
    level: 3,
    title: "Join() - Relier des collections",
    objective: "Joindre deux collections comme en SQL",
    description: `Reliez une liste de commandes avec une liste de clients, comme une jointure SQL.

📌 Concept : Join() combine deux séquences selon une clé commune (équivalent SQL JOIN).`,
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

var clients = new List<(int Id, string Nom, string Ville)>
{
    (1, "Ahmed", "Casablanca"),
    (2, "Sara", "Rabat"),
    (3, "Karim", "Marrakech"),
    (4, "Leila", "Fès")
};

var commandes = new List<(int Id, int ClientId, string Produit, decimal Montant)>
{
    (101, 1, "Laptop", 5000m),
    (102, 2, "Tablette", 3000m),
    (103, 1, "Souris", 200m),
    (104, 3, "Écran", 2500m),
    (105, 2, "Clavier", 400m)
};

// TODO: Jointure clients-commandes
// TODO: Affichez : "Client Nom a commandé Produit pour Montant DH"
// TODO: Total dépensé par client`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

var clients = new List<(int Id, string Nom, string Ville)>
{
    (1, "Ahmed", "Casablanca"),
    (2, "Sara", "Rabat"),
    (3, "Karim", "Marrakech"),
    (4, "Leila", "Fès")
};

var commandes = new List<(int Id, int ClientId, string Produit, decimal Montant)>
{
    (101, 1, "Laptop", 5000m),
    (102, 2, "Tablette", 3000m),
    (103, 1, "Souris", 200m),
    (104, 3, "Écran", 2500m),
    (105, 2, "Clavier", 400m)
};

// Jointure avec syntaxe de méthode
var jointure = commandes.Join(
    clients,
    cmd => cmd.ClientId,     // clé externe
    cli => cli.Id,           // clé primaire
    (cmd, cli) => new { cmd.Produit, cmd.Montant, cli.Nom, cli.Ville }
);

Console.WriteLine("=== Commandes ===");
foreach (var j in jointure)
    Console.WriteLine($"{j.Nom} ({j.Ville}) a commandé {j.Produit} pour {j.Montant} DH");

// Total par client
var totalParClient = commandes
    .Join(clients, cmd => cmd.ClientId, cli => cli.Id, 
          (cmd, cli) => new { cli.Nom, cmd.Montant })
    .GroupBy(x => x.Nom)
    .Select(g => new { Client = g.Key, Total = g.Sum(x => x.Montant) })
    .OrderByDescending(x => x.Total);

Console.WriteLine("\\n=== Total par client ===");
foreach (var t in totalParClient)
    Console.WriteLine($"{t.Client} : {t.Total} DH");

// Syntaxe de requête (équivalent SQL)
var jointureQuery = from cmd in commandes
                    join cli in clients on cmd.ClientId equals cli.Id
                    select new { cli.Nom, cmd.Produit, cmd.Montant };`,
    hints: [
      "Join(outer, inner, outerKey, innerKey, resultSelector)",
      "En syntaxe de requête : join ... on ... equals ...",
      "Combinez avec GroupBy pour les totaux"
    ],
    concepts: ["Join", "jointure interne", "equals", "combinaison"]
  },
  {
    id: 13,
    level: 3,
    title: "Agrégations : Sum, Average, Min, Max",
    objective: "Calculer des statistiques sur une collection",
    description: `Calculez diverses statistiques sur les ventes d'un magasin.

📌 Concept : Les méthodes d'agrégation calculent une valeur unique à partir d'une collection.`,
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

var ventes = new List<(string Produit, string Mois, int Quantite, decimal PrixUnitaire)>
{
    ("Laptop", "Jan", 5, 6000m), ("Souris", "Jan", 50, 150m),
    ("Laptop", "Fev", 8, 6000m), ("Clavier", "Fev", 30, 300m),
    ("Laptop", "Mar", 3, 6000m), ("Souris", "Mar", 40, 150m),
    ("Écran", "Jan", 10, 2000m), ("Écran", "Fev", 7, 2000m),
    ("Clavier", "Mar", 25, 300m), ("Écran", "Mar", 12, 2000m)
};

// TODO: Chiffre d'affaires total
// TODO: Quantité totale vendue
// TODO: Produit le plus vendu (en quantité)
// TODO: Mois avec le plus gros CA`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

var ventes = new List<(string Produit, string Mois, int Quantite, decimal PrixUnitaire)>
{
    ("Laptop", "Jan", 5, 6000m), ("Souris", "Jan", 50, 150m),
    ("Laptop", "Fev", 8, 6000m), ("Clavier", "Fev", 30, 300m),
    ("Laptop", "Mar", 3, 6000m), ("Souris", "Mar", 40, 150m),
    ("Écran", "Jan", 10, 2000m), ("Écran", "Fev", 7, 2000m),
    ("Clavier", "Mar", 25, 300m), ("Écran", "Mar", 12, 2000m)
};

// Ajouter le CA à chaque vente
var ventesAvecCA = ventes.Select(v => new { 
    v.Produit, v.Mois, v.Quantite, 
    CA = v.Quantite * v.PrixUnitaire 
});

// Chiffre d'affaires total
decimal caTotal = ventesAvecCA.Sum(v => v.CA);
Console.WriteLine($"Chiffre d'affaires total : {caTotal:N0} DH");

// Quantité totale vendue
int qteTotale = ventes.Sum(v => v.Quantite);
Console.WriteLine($"Quantité totale : {qteTotale} unités");

// Produit le plus vendu (en quantité)
var topProduit = ventes
    .GroupBy(v => v.Produit)
    .Select(g => new { Produit = g.Key, QteTotale = g.Sum(v => v.Quantite) })
    .OrderByDescending(g => g.QteTotale)
    .First();
Console.WriteLine($"Produit le + vendu : {topProduit.Produit} ({topProduit.QteTotale} unités)");

// Mois avec le plus gros CA
var caParMois = ventesAvecCA
    .GroupBy(v => v.Mois)
    .Select(g => new { Mois = g.Key, CA = g.Sum(v => v.CA) })
    .OrderByDescending(g => g.CA)
    .First();
Console.WriteLine($"Meilleur mois : {caParMois.Mois} ({caParMois.CA:N0} DH)");

// Prix min/max
decimal prixMin = ventes.Min(v => v.PrixUnitaire);
decimal prixMax = ventes.Max(v => v.PrixUnitaire);
Console.WriteLine($"Prix : de {prixMin} à {prixMax} DH");`,
    hints: [
      "Sum(selector), Average(selector), Min(selector), Max(selector)",
      "Combinez GroupBy + Sum pour les totaux par catégorie",
      "OrderByDescending + First pour trouver le maximum"
    ],
    concepts: ["Sum", "Average", "Min", "Max", "agrégation"]
  },
  {
    id: 14,
    level: 3,
    title: "SelectMany() - Aplatir des collections",
    objective: "Transformer des collections imbriquées en une seule liste plate",
    description: `À partir d'une liste de classes contenant des élèves, obtenez une liste plate de tous les élèves.

📌 Concept : SelectMany() projette chaque élément vers une séquence et aplatit le résultat.`,
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

var classes = new List<(string NomClasse, List<string> Eleves)>
{
    ("3A", new List<string> { "Ahmed", "Sara", "Karim" }),
    ("3B", new List<string> { "Leila", "Omar" }),
    ("3C", new List<string> { "Fatima", "Yassine", "Nadia", "Hassan" })
};

// TODO: Obtenez la liste plate de tous les élèves
// TODO: Combien d'élèves au total ?
// TODO: Trouvez tous les élèves dont le nom commence par 'A'`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

var classes = new List<(string NomClasse, List<string> Eleves)>
{
    ("3A", new List<string> { "Ahmed", "Sara", "Karim" }),
    ("3B", new List<string> { "Leila", "Omar" }),
    ("3C", new List<string> { "Fatima", "Yassine", "Nadia", "Hassan" })
};

// Liste plate de tous les élèves
var tousEleves = classes.SelectMany(c => c.Eleves);
Console.WriteLine("Tous les élèves :");
foreach (var e in tousEleves)
    Console.Write(e + " ");
// Ahmed Sara Karim Leila Omar Fatima Yassine Nadia Hassan

// Total
Console.WriteLine($"\\nTotal : {classes.SelectMany(c => c.Eleves).Count()} élèves");

// Filtrer après SelectMany
var elevesA = classes
    .SelectMany(c => c.Eleves)
    .Where(e => e.StartsWith("A"));
Console.WriteLine("\\nCommence par A :");
foreach (var e in elevesA)
    Console.Write(e + " ");

// Avec projection : inclure la classe
var elevesAvecClasse = classes
    .SelectMany(c => c.Eleves.Select(e => new { Eleve = e, Classe = c.NomClasse }));
Console.WriteLine("\\n\\nÉlèves avec leur classe :");
foreach (var e in elevesAvecClasse)
    Console.WriteLine($"  {e.Eleve} -> {e.Classe}");

// Syntaxe de requête (double from)
var query = from c in classes
            from e in c.Eleves
            select new { Eleve = e, Classe = c.NomClasse };`,
    hints: [
      "SelectMany(collection => collection.SousElements) aplatit",
      "Équivalent de double 'from' en syntaxe de requête",
      "Utile pour les relations un-à-plusieurs"
    ],
    concepts: ["SelectMany", "aplatir", "collections imbriquées"]
  },
  {
    id: 15,
    level: 3,
    title: "Zip() - Combiner deux séquences",
    objective: "Combiner élément par élément deux séquences",
    description: `Combinez une liste de noms avec une liste de notes pour créer des tuples.

📌 Concept : Zip() combine les éléments de deux séquences un par un (comme une fermeture éclair).`,
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

string[] etudiants = { "Ahmed", "Sara", "Karim", "Leila", "Omar" };
int[] notes = { 15, 18, 12, 16, 14 };

// TODO: Combinez nom + note
// TODO: Affichez "Ahmed a obtenu 15/20"
// TODO: Calculez la moyenne générale`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

string[] etudiants = { "Ahmed", "Sara", "Karim", "Leila", "Omar" };
int[] notes = { 15, 18, 12, 16, 14 };

// Zip combine élément par élément
var resultats = etudiants.Zip(notes, (nom, note) => new { Nom = nom, Note = note });

Console.WriteLine("=== Résultats ===");
foreach (var r in resultats)
    Console.WriteLine($"{r.Nom} a obtenu {r.Note}/20");

// Moyenne générale
double moyenne = etudiants.Zip(notes, (n, note) => note).Average();
Console.WriteLine($"\\nMoyenne générale : {moyenne:F1}/20");

// Avec tuples C#
var tuples = etudiants.Zip(notes);
foreach (var (nom, note) in tuples)
    Console.WriteLine($"{nom} : {note}");

// Trouver le meilleur étudiant
var meilleur = etudiants.Zip(notes, (n, note) => new { n, note })
    .OrderByDescending(x => x.note)
    .First();
Console.WriteLine($"\\n🏆 Meilleur : {meilleur.n} avec {meilleur.note}/20");

// Zip avec 3 séquences (chaîner)
string[] villes = { "Casa", "Rabat", "Marrakech", "Fès", "Tanger" };
var complet = etudiants
    .Zip(notes, (nom, note) => new { Nom = nom, Note = note })
    .Zip(villes, (x, ville) => new { x.Nom, x.Note, Ville = ville });

foreach (var c in complet)
    Console.WriteLine($"{c.Nom} ({c.Ville}) : {c.Note}/20");`,
    hints: [
      "Zip(seq1, seq2, (a, b) => result) combine un par un",
      "Si les tailles diffèrent, Zip s'arrête à la plus courte",
      "Disponible depuis .NET Core 3.0 / .NET 5+"
    ],
    concepts: ["Zip", "combinaison", "tuples"]
  },

  // ========== NIVEAU 4 - AVANCÉ ==========
  {
    id: 16,
    level: 4,
    title: "Requête complexe multi-opérateurs",
    objective: "Combiner plusieurs opérateurs LINQ dans une seule requête",
    description: `Réalisez une analyse complète de ventes combinant filtrage, groupement, tri et projection.

📌 Concept : LINQ permet d'enchaîner les opérateurs pour des requêtes complexes.`,
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

var ventes = new List<(int Id, string Produit, string Region, decimal Montant, DateTime Date)>
{
    (1, "Laptop", "Nord", 8000m, new DateTime(2024,1,15)),
    (2, "Souris", "Sud", 200m, new DateTime(2024,1,20)),
    (3, "Laptop", "Nord", 8000m, new DateTime(2024,2,10)),
    (4, "Écran", "Est", 3000m, new DateTime(2024,2,15)),
    (5, "Laptop", "Sud", 8000m, new DateTime(2024,3,5)),
    (6, "Clavier", "Nord", 500m, new DateTime(2024,3,12)),
    (7, "Écran", "Nord", 3000m, new DateTime(2024,1,25)),
    (8, "Souris", "Est", 200m, new DateTime(2024,2,28)),
    (9, "Laptop", "Est", 8000m, new DateTime(2024,3,20)),
    (10, "Écran", "Sud", 3000m, new DateTime(2024,3,25))
};

// TODO: Top 3 régions par CA total
// TODO: Produit le + vendu par région
// TODO: Évolution mensuelle du CA`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

var ventes = new List<(int Id, string Produit, string Region, decimal Montant, DateTime Date)>
{
    (1, "Laptop", "Nord", 8000m, new DateTime(2024,1,15)),
    (2, "Souris", "Sud", 200m, new DateTime(2024,1,20)),
    (3, "Laptop", "Nord", 8000m, new DateTime(2024,2,10)),
    (4, "Écran", "Est", 3000m, new DateTime(2024,2,15)),
    (5, "Laptop", "Sud", 8000m, new DateTime(2024,3,5)),
    (6, "Clavier", "Nord", 500m, new DateTime(2024,3,12)),
    (7, "Écran", "Nord", 3000m, new DateTime(2024,1,25)),
    (8, "Souris", "Est", 200m, new DateTime(2024,2,28)),
    (9, "Laptop", "Est", 8000m, new DateTime(2024,3,20)),
    (10, "Écran", "Sud", 3000m, new DateTime(2024,3,25))
};

// 1. Top 3 régions par CA total
var topRegions = ventes
    .GroupBy(v => v.Region)
    .Select(g => new {
        Region = g.Key,
        CATotal = g.Sum(v => v.Montant),
        NbVentes = g.Count(),
        Moyenne = g.Average(v => v.Montant)
    })
    .OrderByDescending(r => r.CATotal)
    .Take(3);

Console.WriteLine("=== Top 3 Régions ===");
int rang = 1;
foreach (var r in topRegions)
    Console.WriteLine($"#{rang++} {r.Region}: {r.CATotal:N0} DH " +
                      $"({r.NbVentes} ventes, moy: {r.Moyenne:N0} DH)");

// 2. Produit le + vendu par région
var topProduitParRegion = ventes
    .GroupBy(v => new { v.Region, v.Produit })
    .Select(g => new {
        g.Key.Region,
        g.Key.Produit,
        CA = g.Sum(v => v.Montant)
    })
    .GroupBy(x => x.Region)
    .Select(g => g.OrderByDescending(x => x.CA).First());

Console.WriteLine("\\n=== Meilleur produit par région ===");
foreach (var p in topProduitParRegion)
    Console.WriteLine($"{p.Region} : {p.Produit} ({p.CA:N0} DH)");

// 3. Évolution mensuelle
var evolution = ventes
    .GroupBy(v => new { v.Date.Year, v.Date.Month })
    .Select(g => new {
        Periode = $"{g.Key.Year}-{g.Key.Month:D2}",
        CA = g.Sum(v => v.Montant),
        NbVentes = g.Count()
    })
    .OrderBy(x => x.Periode);

Console.WriteLine("\\n=== Évolution mensuelle ===");
foreach (var e in evolution)
    Console.WriteLine($"{e.Periode} : {e.CA:N0} DH ({e.NbVentes} ventes)");`,
    hints: [
      "Enchaînez les opérateurs : Where → GroupBy → Select → OrderBy → Take",
      "Utilisez des clés anonymes dans GroupBy : new { A, B }",
      "Décomposez en sous-requêtes si c'est trop complexe"
    ],
    concepts: ["chaînage", "GroupBy composé", "analyse", "requêtes complexes"]
  },
  {
    id: 17,
    level: 4,
    title: "LINQ avec 'into' (continuation)",
    objective: "Utiliser 'into' pour continuer une requête après un groupement",
    description: `Utilisez le mot-clé 'into' en syntaxe de requête pour filtrer après un groupement.

📌 Concept : 'into' permet de continuer une requête après group/join/select (query continuation).`,
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

var employes = new List<(string Nom, string Departement, decimal Salaire)>
{
    ("Ahmed", "Dev", 12000m), ("Sara", "Dev", 15000m),
    ("Karim", "RH", 10000m), ("Leila", "Dev", 13000m),
    ("Omar", "RH", 11000m), ("Fatima", "Marketing", 14000m),
    ("Yassine", "Marketing", 12500m), ("Nadia", "RH", 9500m)
};

// TODO: Départements avec salaire moyen > 11000
// TODO: Pour ces départements, lister les employés au-dessus de la moyenne du département`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

var employes = new List<(string Nom, string Departement, decimal Salaire)>
{
    ("Ahmed", "Dev", 12000m), ("Sara", "Dev", 15000m),
    ("Karim", "RH", 10000m), ("Leila", "Dev", 13000m),
    ("Omar", "RH", 11000m), ("Fatima", "Marketing", 14000m),
    ("Yassine", "Marketing", 12500m), ("Nadia", "RH", 9500m)
};

// Syntaxe de requête avec 'into'
var departementsRentables = 
    from e in employes
    group e by e.Departement into g
    where g.Average(e => e.Salaire) > 11000m
    select new {
        Departement = g.Key,
        SalaireMoyen = g.Average(e => e.Salaire),
        NbEmployes = g.Count(),
        Employes = g.OrderBy(e => e.Nom).ToList()
    };

Console.WriteLine("=== Départements (salaire moyen > 11000 DH) ===");
foreach (var d in departementsRentables)
{
    Console.WriteLine($"\\n{d.Departement} (Moy: {d.SalaireMoyen:N0} DH, {d.NbEmployes} emp.)");
    foreach (var e in d.Employes)
        Console.WriteLine($"  - {e.Nom} : {e.Salaire} DH");
}

// Équivalent en syntaxe de méthode
var departementsRentablesMethod = employes
    .GroupBy(e => e.Departement)
    .Where(g => g.Average(e => e.Salaire) > 11000m)
    .Select(g => new {
        Departement = g.Key,
        SalaireMoyen = g.Average(e => e.Salaire),
        NbEmployes = g.Count()
    });

// 'into' après select (let-like)
var analyse = 
    from e in employes
    group e by e.Departement into g
    let moyenne = g.Average(e => e.Salaire)
    where moyenne > 10000m
    orderby moyenne descending
    select new { g.Key, Moyenne = moyenne, Max = g.Max(e => e.Salaire) };

Console.WriteLine("\\n=== Analyse (avec let) ===");
foreach (var a in analyse)
    Console.WriteLine($"{a.Key} : Moy={a.Moyenne:N0}, Max={a.Max:N0}");`,
    hints: [
      "'into' crée une nouvelle portée après group/join",
      "Équivalent en méthode : .GroupBy().Where().Select()",
      "'let' permet de définir des variables intermédiaires"
    ],
    concepts: ["into", "let", "query continuation", "portée"]
  },
  {
    id: 18,
    level: 4,
    title: "LINQ avec classes personnalisées",
    objective: "Utiliser LINQ avec des classes et des relations",
    description: `Créez un mini-système de gestion avec des classes et faites des requêtes LINQ dessus.

📌 Concept : LINQ fonctionne parfaitement avec vos propres classes et relations.`,
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

// Définissez les classes suivantes :
// - Etudiant (Id, Nom, Filiere, Liste<Note>)
// - Note (Matiere, Valeur)
// Puis répondez aux questions :
// 1. Étudiants avec moyenne >= 14
// 2. Matière avec la meilleure moyenne générale
// 3. Étudiant avec la meilleure moyenne par filière

// TODO: Implémentez les classes et les requêtes`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

public class Note
{
    public string Matiere { get; set; }
    public double Valeur { get; set; }
}

public class Etudiant
{
    public int Id { get; set; }
    public string Nom { get; set; }
    public string Filiere { get; set; }
    public List<Note> Notes { get; set; }
    
    public double Moyenne => Notes.Count > 0 
        ? Notes.Average(n => n.Valeur) : 0;
}

// Données
var etudiants = new List<Etudiant>
{
    new() { Id=1, Nom="Ahmed", Filiere="Info", Notes = new() {
        new() { Matiere="C#", Valeur=16 }, new() { Matiere="SQL", Valeur=14 },
        new() { Matiere="Web", Valeur=15 }}},
    new() { Id=2, Nom="Sara", Filiere="Math", Notes = new() {
        new() { Matiere="Analyse", Valeur=18 }, new() { Matiere="Algèbre", Valeur=17 },
        new() { Matiere="Proba", Valeur=16 }}},
    new() { Id=3, Nom="Karim", Filiere="Info", Notes = new() {
        new() { Matiere="C#", Valeur=12 }, new() { Matiere="SQL", Valeur=10 },
        new() { Matiere="Web", Valeur=14 }}},
    new() { Id=4, Nom="Leila", Filiere="Math", Notes = new() {
        new() { Matiere="Analyse", Valeur=15 }, new() { Matiere="Algèbre", Valeur=14 },
        new() { Matiere="Proba", Valeur=13 }}},
    new() { Id=5, Nom="Omar", Filiere="Info", Notes = new() {
        new() { Matiere="C#", Valeur=18 }, new() { Matiere="SQL", Valeur=16 },
        new() { Matiere="Web", Valeur=17 }}}
};

// 1. Étudiants avec moyenne >= 14
var mentions = etudiants
    .Where(e => e.Moyenne >= 14)
    .OrderByDescending(e => e.Moyenne);

Console.WriteLine("=== Mentions (>= 14) ===");
foreach (var e in mentions)
    Console.WriteLine($"  {e.Nom} ({e.Filiere}) : {e.Moyenne:F1}/20");

// 2. Matière avec la meilleure moyenne générale
var moyenneParMatiere = etudiants
    .SelectMany(e => e.Notes)
    .GroupBy(n => n.Matiere)
    .Select(g => new { 
        Matiere = g.Key, 
        Moyenne = g.Average(n => n.Valeur) 
    })
    .OrderByDescending(m => m.Moyenne);

Console.WriteLine("\\n=== Moyennes par matière ===");
foreach (var m in moyenneParMatiere)
    Console.WriteLine($"  {m.Matiere} : {m.Moyenne:F1}/20");

// 3. Meilleur étudiant par filière
var meilleurParFiliere = etudiants
    .GroupBy(e => e.Filiere)
    .Select(g => g.OrderByDescending(e => e.Moyenne).First());

Console.WriteLine("\\n=== Meilleur par filière ===");
foreach (var e in meilleurParFiliere)
    Console.WriteLine($"  {e.Filiere} : {e.Nom} ({e.Moyenne:F1}/20)");`,
    hints: [
      "Ajoutez une propriété calculée 'Moyenne' dans la classe",
      "SelectMany pour aplatir les notes de tous les étudiants",
      "GroupBy + OrderByDescending + First pour le meilleur par groupe"
    ],
    concepts: ["classes personnalisées", "propriétés calculées", "SelectMany", "requêtes complexes"]
  },
  {
    id: 19,
    level: 4,
    title: "De ADO.NET à LINQ - Migration",
    objective: "Comparer les requêtes ADO.NET avec leur équivalent LINQ",
    description: `Transformez des requêtes SQL/ADO.NET en requêtes LINQ. 
C'est le pont entre ce que vous connaissez déjà et LINQ !

📌 Concept : LINQ remplace avantageusement les requêtes SQL pour la manipulation en mémoire.`,
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

// Simule des données qui viendraient d'une base de données
var produits = new List<(int Id, string Nom, decimal Prix, int Stock, string Categorie)>
{
    (1, "Laptop HP", 7500m, 15, "Informatique"),
    (2, "Souris Logitech", 250m, 100, "Accessoire"),
    (3, "Écran Dell", 3200m, 25, "Informatique"),
    (4, "Clavier Mecanique", 800m, 50, "Accessoire"),
    (5, "Imprimante Canon", 1500m, 30, "Bureau"),
    (6, "Webcam HD", 450m, 0, "Accessoire"),
    (7, "Disque SSD 1To", 600m, 75, "Informatique"),
    (8, "Cable HDMI", 80m, 200, "Accessoire")
};

// ÉQUIVALENT SQL : SELECT * FROM Produits WHERE Stock > 0 AND Prix < 1000
// ÉQUIVALENT SQL : SELECT Categorie, AVG(Prix) FROM Produits GROUP BY Categorie
// ÉQUIVALENT SQL : SELECT TOP 3 * FROM Produits ORDER BY Prix DESC
// ÉQUIVALENT SQL : SELECT * FROM Produits WHERE Nom LIKE '%HD%'

// TODO: Traduisez chaque requête SQL en LINQ`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

var produits = new List<(int Id, string Nom, decimal Prix, int Stock, string Categorie)>
{
    (1, "Laptop HP", 7500m, 15, "Informatique"),
    (2, "Souris Logitech", 250m, 100, "Accessoire"),
    (3, "Écran Dell", 3200m, 25, "Informatique"),
    (4, "Clavier Mecanique", 800m, 50, "Accessoire"),
    (5, "Imprimante Canon", 1500m, 30, "Bureau"),
    (6, "Webcam HD", 450m, 0, "Accessoire"),
    (7, "Disque SSD 1To", 600m, 75, "Informatique"),
    (8, "Cable HDMI", 80m, 200, "Accessoire")
};

// SQL: SELECT * FROM Produits WHERE Stock > 0 AND Prix < 1000
var disponibles = produits.Where(p => p.Stock > 0 && p.Prix < 1000);
Console.WriteLine("=== Disponibles et < 1000 DH ===");
foreach (var p in disponibles)
    Console.WriteLine($"  {p.Nom} - {p.Prix} DH (Stock: {p.Stock})");

// SQL: SELECT Categorie, AVG(Prix) FROM Produits GROUP BY Categorie
var moyenneParCat = produits
    .GroupBy(p => p.Categorie)
    .Select(g => new {
        Categorie = g.Key,
        PrixMoyen = g.Average(p => p.Prix),
        NbProduits = g.Count()
    });
Console.WriteLine("\\n=== Prix moyen par catégorie ===");
foreach (var c in moyenneParCat)
    Console.WriteLine($"  {c.Categorie} : {c.PrixMoyen:N0} DH ({c.NbProduits} produits)");

// SQL: SELECT TOP 3 * FROM Produits ORDER BY Prix DESC
var top3Chers = produits.OrderByDescending(p => p.Prix).Take(3);
Console.WriteLine("\\n=== Top 3 les plus chers ===");
foreach (var p in top3Chers)
    Console.WriteLine($"  {p.Nom} - {p.Prix:N0} DH");

// SQL: SELECT * FROM Produits WHERE Nom LIKE '%HD%'
var contientHD = produits.Where(p => p.Nom.Contains("HD"));
Console.WriteLine("\\n=== Contient 'HD' ===");
foreach (var p in contientHD)
    Console.WriteLine($"  {p.Nom}");

// BONUS: SQL avec sous-requête
// "Produits dont le prix est supérieur à la moyenne"
decimal prixMoyen = produits.Average(p => p.Prix);
var auDessusMoyenne = produits.Where(p => p.Prix > prixMoyen);
Console.WriteLine($"\\n=== Au-dessus de la moyenne ({prixMoyen:N0} DH) ===");
foreach (var p in auDessusMoyenne)
    Console.WriteLine($"  {p.Nom} - {p.Prix:N0} DH");

// 💡 Avec Entity Framework / LINQ to SQL :
// var query = context.Produits.Where(p => p.Stock > 0);
// C'est la MÊME syntaxe ! LINQ génère le SQL automatiquement.`,
    hints: [
      "WHERE → Where(), GROUP BY → GroupBy(), ORDER BY → OrderBy()",
      "TOP N → Take(N), LIKE '%x%' → Contains(\"x\")",
      "LINQ to Entities/SQL utilise la même syntaxe qu'en mémoire !"
    ],
    concepts: ["migration ADO.NET", "équivalences SQL", "LINQ to Objects", "Contains"]
  },
  {
    id: 20,
    level: 4,
    title: "Exercice récapitulatif : Gestion de bibliothèque",
    objective: "Mettre en pratique tous les concepts LINQ dans un cas complet",
    description: `Gérez une bibliothèque avec LINQ : recherche, statistiques, recommandations.
Cet exercice combine TOUS les concepts vus précédemment.

📌 Concept : LINQ est un outil puissant qui remplace de nombreuses boucles et conditions.`,
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

// Système de gestion de bibliothèque
// Classes : Livre (Titre, Auteur, Genre, AnneePublication, NbExemplaires, NoteMoyenne)
//          Emprunt (IdLivre, IdAdherent, DateEmprunt, DateRetour)
//          Adherent (Id, Nom, Liste<Emprunt>)

// Questions :
// 1. Livres disponibles (NbExemplaires > 0) triés par note
// 2. Top 5 livres les plus empruntés
// 3. Adhérents qui n'ont jamais rendu un livre à temps
// 4. Statistiques par genre (nb livres, nb emprunts, note moyenne)
// 5. Recommandation : pour un adhérent, suggérer des livres 
//    dans le même genre que ses emprunts précédents

// TODO: Implémentez le système complet`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

public class Livre
{
    public int Id { get; set; }
    public string Titre { get; set; }
    public string Auteur { get; set; }
    public string Genre { get; set; }
    public int AnneePublication { get; set; }
    public int NbExemplaires { get; set; }
    public double NoteMoyenne { get; set; }
}

public class Adherent
{
    public int Id { get; set; }
    public string Nom { get; set; }
    public List<Emprunt> Emprunts { get; set; } = new();
}

public class Emprunt
{
    public int IdLivre { get; set; }
    public int IdAdherent { get; set; }
    public DateTime DateEmprunt { get; set; }
    public DateTime? DateRetourPrevue { get; set; }
    public DateTime? DateRetourEffective { get; set; }
    
    public bool EstEnRetard => DateRetourEffective > DateRetourPrevue;
    public bool EstEnCours => DateRetourEffective == null;
}

// Données
var livres = new List<Livre>
{
    new() { Id=1, Titre="Le Petit Prince", Auteur="Saint-Exupéry", 
            Genre="Roman", AnneePublication=1943, NbExemplaires=5, NoteMoyenne=4.8 },
    new() { Id=2, Titre="C# en Action", Auteur="J. Albahari", 
            Genre="Informatique", AnneePublication=2022, NbExemplaires=3, NoteMoyenne=4.5 },
    new() { Id=3, Titre="Les Misérables", Auteur="V. Hugo", 
            Genre="Roman", AnneePublication=1862, NbExemplaires=2, NoteMoyenne=4.7 },
    new() { Id=4, Titre="Clean Code", Auteur="R. Martin", 
            Genre="Informatique", AnneePublication=2008, NbExemplaires=0, NoteMoyenne=4.6 },
    new() { Id=5, Titre="Design Patterns", Auteur="GoF", 
            Genre="Informatique", AnneePublication=1994, NbExemplaires=4, NoteMoyenne=4.3 },
    new() { Id=6, Titre="L'Étranger", Auteur="A. Camus", 
            Genre="Roman", AnneePublication=1942, NbExemplaires=3, NoteMoyenne=4.4 },
    new() { Id=7, Titre="SQL Server 2022", Auteur="Microsoft", 
            Genre="Informatique", AnneePublication=2023, NbExemplaires=2, NoteMoyenne=4.1 }
};

var adherents = new List<Adherent>
{
    new() { Id=1, Nom="Ahmed", Emprunts = new() {
        new() { IdLivre=1, IdAdherent=1, DateEmprunt=new DateTime(2024,1,5), 
                DateRetourPrevue=new DateTime(2024,1,19), DateRetourEffective=new DateTime(2024,1,18) },
        new() { IdLivre=2, IdAdherent=1, DateEmprunt=new DateTime(2024,2,1), 
                DateRetourPrevue=new DateTime(2024,2,15), DateRetourEffective=new DateTime(2024,2,20) }
    }},
    new() { Id=2, Nom="Sara", Emprunts = new() {
        new() { IdLivre=3, IdAdherent=2, DateEmprunt=new DateTime(2024,1,10), 
                DateRetourPrevue=new DateTime(2024,1,24), DateRetourEffective=new DateTime(2024,1,22) },
        new() { IdLivre=1, IdAdherent=2, DateEmprunt=new DateTime(2024,3,1), 
                DateRetourPrevue=new DateTime(2024,3,15), DateRetourEffective=null }
    }},
    new() { Id=3, Nom="Karim", Emprunts = new() {
        new() { IdLivre=2, IdAdherent=3, DateEmprunt=new DateTime(2024,2,10), 
                DateRetourPrevue=new DateTime(2024,2,24), DateRetourEffective=new DateTime(2024,2,23) },
        new() { IdLivre=5, IdAdherent=3, DateEmprunt=new DateTime(2024,3,5), 
                DateRetourPrevue=new DateTime(2024,3,19), DateRetourEffective=new DateTime(2024,3,25) }
    }}
};

// 1. Livres disponibles triés par note
var disponibles = livres
    .Where(l => l.NbExemplaires > 0)
    .OrderByDescending(l => l.NoteMoyenne);
Console.WriteLine("=== 📚 Livres disponibles (triés par note) ===");
foreach (var l in disponibles)
    Console.WriteLine($"  ⭐{l.NoteMoyenne} {l.Titre} par {l.Auteur} ({l.NbExemplaires} ex.)");

// 2. Top 5 livres les plus empruntés
var topEmpruntes = livres
    .Select(l => new {
        Livre = l,
        NbEmprunts = adherents.Sum(a => a.Emprunts.Count(e => e.IdLivre == l.Id))
    })
    .OrderByDescending(x => x.NbEmprunts)
    .Take(5);
Console.WriteLine("\\n=== 🏆 Top livres empruntés ===");
foreach (var t in topEmpruntes)
    Console.WriteLine($"  {t.Livre.Titre} : {t.NbEmprunts} emprunt(s)");

// 3. Adhérents en retard
var enRetard = adherents
    .Where(a => a.Emprunts.Any(e => e.EstEnRetard))
    .Select(a => new {
        a.Nom,
        Retards = a.Emprunts.Where(e => e.EstEnRetard).Count()
    });
Console.WriteLine("\\n=== ⚠️ Adhérents en retard ===");
foreach (var a in enRetard)
    Console.WriteLine($"  {a.Nom} : {a.Retards} retard(s)");

// 4. Statistiques par genre
var statsGenre = livres
    .GroupBy(l => l.Genre)
    .Select(g => new {
        Genre = g.Key,
        NbLivres = g.Count(),
        NoteMoyenne = g.Average(l => l.NoteMoyenne),
        TotalExemplaires = g.Sum(l => l.NbExemplaires)
    })
    .OrderByDescending(g => g.NoteMoyenne);
Console.WriteLine("\\n=== 📊 Statistiques par genre ===");
foreach (var s in statsGenre)
    Console.WriteLine($"  {s.Genre} : {s.NbLivres} livres, " +
                      $"Note moy: {s.NoteMoyenne:F1}, {s.TotalExemplaires} ex. au total");

// 5. Recommandation pour Ahmed
int idAdherent = 1;
var genresPref = adherents
    .Where(a => a.Id == idAdherent)
    .SelectMany(a => a.Emprunts)
    .Join(livres, e => e.IdLivre, l => l.Id, (e, l) => l.Genre)
    .GroupBy(g => g)
    .OrderByDescending(g => g.Count())
    .Select(g => g.Key)
    .ToList();

var recommandations = livres
    .Where(l => genresPref.Contains(l.Genre) 
                && l.NbExemplaires > 0
                && !adherents.Where(a => a.Id == idAdherent)
                    .SelectMany(a => a.Emprunts)
                    .Any(e => e.IdLivre == l.Id))
    .OrderByDescending(l => l.NoteMoyenne);

Console.WriteLine($"\\n=== 💡 Recommandations pour Ahmed ===");
Console.WriteLine($"  Genres préférés : {string.Join(", ", genresPref)}");
foreach (var r in recommandations)
    Console.WriteLine($"  → {r.Titre} par {r.Auteur} ({r.Genre}, ⭐{r.NoteMoyenne})");`,
    hints: [
      "Décomposez le problème en sous-questions",
      "Utilisez Join() pour relier emprunts et livres",
      "SelectMany + GroupBy pour les statistiques complexes",
      "Combinez Where + Any + Contains pour les recommandations"
    ],
    concepts: ["exercice complet", "recommandation", "statistiques", "tous concepts combinés"]
  }
];
