// shadowrun-gear.js
// Données Shadowrun Anarchy — ÉQUIPEMENT, CYBERWARE, BIOWARE, VÉHICULES, DRONES, SORTS, ETC.
// Généré automatiquement depuis Atout.csv
// Sections: Traits, Cyberware, Bioware, Cephaloware, Somatoware, Cyberdecks,
//            Programmes, Constructs, Formes Complexes, Matériel Magique,
//            Pouvoirs d'Adepte, Voies d'Adepte, Idoles,
//            Sorts (Combat, Détection, Santé, Illusion, Manipulation),
//            Véhicules (Deux roues, Voitures, Divers),
//            Drones (Micro, Mini, Petits, Moyens, Grands, Anthropomorphes),
//            CCR (Consoles de Commande de Rigger),
//            Armes, Améliorations d'Armes
// Total: 572 entrées

const SHADOWRUN_GEAR = {
      "8_equipement": {
    "nom": "8. ÉQUIPEMENT GÉNÉRAL",
    "total": 61,
    "donnees": [
{
      "Atout": "Passe maglock",
      "Catégorie": "INFILTRATION",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Permet de tenter de crocheter les maglocks."
    },
{
      "Atout": "Kit d'effraction",
      "Catégorie": "INFILTRATION",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "22 500¥",
      "EFFETS": "RR 2 Furtivité (crochetage)"
    },
{
      "Atout": "Kit de survie en milieu hostile ",
      "Catégorie": "INFILTRATION",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "RR 1 aux tests  de Survie"
    },
{
      "Atout": "Matériel d'escalade",
      "Catégorie": "INFILTRATION",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "22 500¥",
      "EFFETS": "RR 2 Athlétisme (escalade)"
    },
{
      "Atout": "Masque à gaz",
      "Catégorie": "INFILTRATION",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Procure une immunité aux gaz et aux vapeurs toxiques. Permet de respirer dans des environnements toxiques."
    },


{
      "Atout": "Jumelles",
      "Catégorie": "SURVEILLANCE",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Permet de voir à distance."
    },
{
      "Atout": "Jumelles thermiques",
      "Catégorie": "SURVEILLANCE",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "7 500¥",
      "EFFETS": "Zoom. Vision thermographique."
    },
{
      "Atout": "Jumelles Evo Night Hawk",
      "Catégorie": "SURVEILLANCE",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "17 500¥",
      "EFFETS": "Zoom. Vision nocturne. RR1 Perception (physique)."
    },
{
      "Atout": "Lunettes",
      "Catégorie": "SURVEILLANCE",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "7 500¥",
      "EFFETS": "Interface visuelle. Vision thermographique."
    },

{
      "Atout": "Microphone directionnel",
      "Catégorie": "SURVEILLANCE",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Accroît la distance d'audition."
    },
{
      "Atout": "Microphone laser",
      "Catégorie": "SURVEILLANCE",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "Écoute à travers les vitres, RR1 Perception (physique)."
    },
{
      "Atout": "Générateur de bruit blanc",
      "Catégorie": "SURVEILLANCE",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Gène les écoutes électroniques : impose un désavantage sur les tests de Perception (physique) effectués via un microphone ou un marqueur senseur."
    },
{
      "Atout": "Marqueurs furtifs",
      "Catégorie": "SURVEILLANCE",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Rapporte la position du propriétaire."
    },
{
      "Atout": "Marqueurs senseurs",
      "Catégorie": "SURVEILLANCE",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "7 500¥",
      "EFFETS": "Rapporte la position et transmet son et vidéo."
    },
{
      "Atout": "Démarqueur",
      "Catégorie": "SURVEILLANCE",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Permet de griller les marqueurs."
    },
{
      "Atout": "Brouilleur",
      "Catégorie": "SURVEILLANCE",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Brouillage à large spectre ou sélectif. Nécessite un test d'Ingénierie (guerre électronique) contre un seuil de 0 pour générer du Bruit (voir p.219 du livre de base). Les succès nets sont utilisés comme seuil pour contourner les effets du brouillage."
    },
{
      "Atout": "Aisa",
      "Catégorie": "DROGUES CHIMIQUES",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Désavantage à tous les tests. Une fois les effets dissipés, le personnage subit une blessure légère. Nécessite la dépense d'un point d'Anarchy pour en activer les effets. Durée : une scène."
    },
{
      "Atout": "Alcool / synthanol",
      "Catégorie": "DROGUES CHIMIQUES",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Permet d'ignorer les modificateurs de blessure, désavantage aux tests impliquant la Logique. Doit prendre un risque fort ou extrême sur toutes ses actions. Durée : une scène."
    },
{
      "Atout": "Bêtameth",
      "Catégorie": "DROGUES CHIMIQUES",
      "COUT_Atout": "Atout 6",
      "COUT_Yen": "32 500¥",
      "EFFETS": "Coupe l'appétit et accélère le métabolisme. RR 1 Agilité. Désavantage aux tests impliquant la Logique. Doit prendre un risque fort ou extrême sur toutes ses actions. Une fois les effets dissipés, le personnage subit une blessure légère qui ne peut pas être soignée avec des premiers soins. Durée : une scène."
    },
{
      "Atout": "Bétel",
      "Catégorie": "DROGUES CHIMIQUES",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "RR 1 Perception (physique). Durée : une scène."
    },
{
      "Atout": "Bliss",
      "Catégorie": "DROGUES CHIMIQUES",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "7 500¥",
      "EFFETS": "Permet d'ignorer les modificateurs de blessure. Désavantage aux tests impliquant la Volonté. Durée : une scène."
    },
{
      "Atout": "Céréprax",
      "Catégorie": "DROGUES CHIMIQUES",
      "COUT_Atout": "Atout 7",
      "COUT_Yen": "37 500¥",
      "EFFETS": "RR 1 Logique. Une fois les effets dissipés, le personnage subit un désavantage aux tests impliquant la Logique pour une scène ainsi qu'une blessure grave. Durée : une scène."
    },
{
      "Atout": "Cram",
      "Catégorie": "DROGUES CHIMIQUES",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "7 500¥",
      "EFFETS": "+1 point d'Anarchy par scène d'action, pas de limite au nombre d'actions supplémentaires par tour. Une fois les effets dissipés, le personnage subit une blessure grave. Durée : un combat."
    },
{
      "Atout": "Fluocarbones oxygéné",
      "Catégorie": "DROGUES CHIMIQUES",
      "COUT_Atout": "Atout 6",
      "COUT_Yen": "32 500¥",
      "EFFETS": "À injecter dans le sang du personnage. RR 1 Athlétisme. Permet de rester plus longtemps sans respirer en échange d'un point d'Anarchy. Durée : une scène."
    },
{
      "Atout": "Gamma-scopolamine",
      "Catégorie": "DROGUES CHIMIQUES",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Nécessite d'être injecté en intraveineuse. Paralyse la cible pendant (7 - Force de la cible) heures. À son réveil la cible est incapable de mentir pendant une heure, elle subit un désavantage aux tests visant à résister à un interrogatoire sous quelque forme que ce soit. Nécessite la dépense d'un point d'Anarchy pour en activer les effets."
    },
{
      "Atout": "Guts",
      "Catégorie": "DROGUES CHIMIQUES",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "RR 1 Survie (sang-froid). Durée : une scène."
    },
{
      "Atout": "Jazz",
      "Catégorie": "DROGUES CHIMIQUES",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "17 500¥",
      "EFFETS": "+1 point d'Anarchy par scène d'action, +1 action par narration, pas de limite au nombre d'actions supplémentaires par tour. Une fois les effets dissipés, le personnage subit un désavantage pendant la scène suivante. Durée : une scène."
    },
{
      "Atout": "Kamikaze",
      "Catégorie": "DROGUES CHIMIQUES",
      "COUT_Atout": "Atout 14",
      "COUT_Yen": "72 500¥",
      "EFFETS": "RR 1 Agilité. VD +1 en mêlée. +1 point d'Anarchy par scène d'action. +1 action par narration, pas de limite au nombre d'actions supplémentaires par tour. Une fois les effets dissipés, le personnage subit une blessure grave. Durée : un combat."
    },
{
      "Atout": "Long cours",
      "Catégorie": "DROGUES CHIMIQUES",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Permet de rester éveillé 4 jours. Une seconde dose permet de tenir 2 jours supplémentaires avec un désavantage à toutes les actions. Une fois les effets dissipés, le personnage dort pendant 24 h."
    },
{
      "Atout": "Nitro",
      "Catégorie": "DROGUES CHIMIQUES",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "VD +1 en mêlée. +1 point d'Anarchy par scène d'action, pas de limite au nombre d'actions supplémentaires par tour. Ignore les modificateurs de blessure. Une fois les effets dissipés, le personnage subit une blessure grave. Durée : un combat."
    },
{
      "Atout": "Novacoke",
      "Catégorie": "DROGUES CHIMIQUES",
      "COUT_Atout": "Atout 10",
      "COUT_Yen": "52 500¥",
      "EFFETS": "RR 1 Charisme. RR 1 Perception (sociale). Une fois les effets dissipés, le personnage subit un désavantage aux tests impliquant le Charisme ou la Volonté pour une scène. Durée : une scène."
    },
{
      "Atout": "Push",
      "Catégorie": "DROGUES CHIMIQUES",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Permet de se sentir bien rapidement. Une surconsommation engendre des psychoses et/ou pertes d'essence (dû à une mutation génétique). Ces effets sont activés par la dépense d'un point d'Anarchy. Durée : une scène."
    },
{
      "Atout": "Slab",
      "Catégorie": "DROGUES CHIMIQUES",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500  ¥",
      "EFFETS": "Ralentit le rythme respiratoire et cardiaque à des niveaux presque imperceptibles, simulant les symptômes de la mort. Nécessite la dépense d'un point d'Anarchy pour activer ces effets. Durée : une scène."
    },
{
      "Atout": "Veille de nuit",
      "Catégorie": "DROGUES CHIMIQUES",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Octroie la vision nocturne. Durée : une scène."
    },
{
      "Atout": "Zen",
      "Catégorie": "DROGUES CHIMIQUES",
      "COUT_Atout": "Atout 8",
      "COUT_Yen": "42 500¥",
      "EFFETS": "RR 1 Volonté. Désavantage aux tests impliquant la Force ou l'Agilité. Durée : une scène."
    },
{
      "Atout": "Deepweed",
      "Catégorie": "DROGUES ÉVEILLÉES",
      "COUT_Atout": "Atout 7",
      "COUT_Yen": "37 500¥",
      "EFFETS": "RR 1 Volonté. Force la perception astrale des Éveillés. Une fois les effets dissipés, le personnage subit un désavantage pendant la scène suivante. Durée : une scène.",
      "Pré_requis": "Eveille"
    },
{
      "Atout": "Leäl",
      "Catégorie": "DROGUES ÉVEILLÉES",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Efface les souvenirs des deux dernières heures de celui qui la consomme. Nécessite la dépense d'un point d'Anarchy pour activer ses effets.",
      "Pré_requis": "Eveille"
    },
{
      "Atout": "Laés",
      "Catégorie": "DROGUES ÉVEILLÉES",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "Fait perdre conscience à la cible pendant une vingtaine de minutes. Efface les souvenirs des (12 – Force de la cible) dernières heures de celui qui la consomme. Nécessite la dépense d'un point d'Anarchy pour activer ses effets.",
      "Pré_requis": "Eveille"
    },
{
      "Atout": "Poussière de fée",
      "Catégorie": "DROGUES ÉVEILLÉES",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "22 500¥",
      "EFFETS": "Mélange de coke coupé au leäl. Le consommateur oublie les (10 – Force) minutes. RR 1 Perception. Durée : une scène.",
      "Pré_requis": "Eveille"
    },
{
      "Atout": "Psyché",
      "Catégorie": "DROGUES ÉVEILLÉES",
      "COUT_Atout": "Atout 12",
      "COUT_Yen": "62 500¥",
      "EFFETS": "RR 1 Volonté. Permet de maintenir un sort supplémentaire. Durée : une scène. Note : coûte 10 points d'atouts (52 500¥) pour les non éveillés.",
      "Pré_requis": "Eveille"
    },
{
      "Atout": "Shade",
      "Catégorie": "DROGUES ÉVEILLÉES",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Force la projection astrale même des non éveillés et permet aux éveillés de rester plus longtemps dans l'astral. Inflige une blessure grave une fois que la forme astrale retrouve son corps. Nécessite la dépense d'un point d'Anarchy pour en activer les effets.",
      "Pré_requis": "Eveille"
    },
{
      "Atout": "Wudu'aku",
      "Catégorie": "DROGUES ÉVEILLÉES",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "22 500¥",
      "EFFETS": "RR 2 Conjuration (esprits des aînés). RR 2 Conjuration (bannissement des esprits des aînés). Désavantage pour la conjuration ou le bannissement de tous les autres types d'esprits. Durée : une scène.",
      "Pré_requis": "Eveille"
    },
{
      "Atout": "BTL narcopuce",
      "Catégorie": "DROGUES BTL",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500 ¥",
      "EFFETS": "Stock ou approvisionnement régulier en BTL, permet de récupérer un point d'Anarchy en échange d'une blessure légère qui ne peut disparaître qu'avec une guérison naturelle."
    },
{
      "Atout": "Berserker (BTL)",
      "Catégorie": "DROGUES BTL",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "22 500¥",
      "EFFETS": "VD +1 en mêlée. RR 1 Combat rapproché. Doit prendre un risque fort ou extrême sur toutes ses actions. Durée : un combat."
    },
{
      "Atout": "Casanova (BTL)",
      "Catégorie": "DROGUES BTL",
      "COUT_Atout": "Atout 10",
      "COUT_Yen": "52 500¥",
      "EFFETS": "RR 1 Charisme. Durée : au choix."
    },
{
      "Atout": "Nuit noire (BTL)",
      "Catégorie": "DROGUES BTL",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500 ¥",
      "EFFETS": "Fait sombrer le personnage dans l'inconscience au fil de la lecture. Inflige une blessure légère (étourdissante) tous les (Volonté de la cible) tours. Nécessite la dépense d'un point d'Anarchy pour en activer les effets."
    },
{
      "Atout": "Personafix (BTL)",
      "Catégorie": "DROGUES BTL",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500 ¥",
      "EFFETS": "Le personnage se prend pour quelqu'un d'autre tant qu'il est sous l'influence de la personafix. Nécessite la dépense d'un point d'Anarchy pour en activer les effets."
    },
{
      "Atout": "Rêve noir (BTL)",
      "Catégorie": "DROGUES BTL",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500 ¥",
      "EFFETS": "Tue le personnage à petit feu au fil de la lecture. Inflige une blessure légère (physique) tous les (Volonté de la cible) tours. Nécessite la dépense d'un point d'Anarchy pour en activer les effets."
    },
{
      "Atout": "Stim Patch",
      "Catégorie": "MEDTECH",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Permet d'ignorer le désavantage causé par une blessure grave, mais inflige une blessure légère après environ un quart d'heure"
    },
{
      "Atout": "Trauma Patch",
      "Catégorie": "MEDTECH",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Permet de dépenser un point d'Anarchy pour Obtenir un avantage aux tests de Survie (premiers soins) + Logique pour stabiliser un personnage"
    },
{
      "Atout": "Médikit standard",
      "Catégorie": "MEDTECH",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Permet de dépenser un point d'Anarchy pour Obtenir un avantage aux tests de Survie (premiers soins) + Logique pour soigner des cases de dommage"
    },
{
      "Atout": "Médikit autonome CrashCart Essential",
      "Catégorie": "MEDTECH",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Médikit avec autopilote 6"
    },
{
      "Atout": "Médikit autonome DocWagon Pro+",
      "Catégorie": "MEDTECH",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20 000¥",
      "EFFETS": "Médikit avec autopilote 9"
    },
{
      "Atout": "Contrat CrashCart basic",
      "Catégorie": "MEDTECH",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20 000¥",
      "EFFETS": "Biomoniteur géolocalisé Permet l'intervention d'une équipe CrashCart en cas de blessure grave  en échange d'un point d'Anarchy Médikit avec autopilote 6 si intervention  RR 1 Survie (Premiers soins) si intervention"
    },
{
      "Atout": "Contrat Doc Wagon Platine",
      "Catégorie": "MEDTECH",
      "COUT_Atout": "Atout 8",
      "COUT_Yen": "40 000¥",
      "EFFETS": "Biomoniteur géolocalisé Permet l'intervention d'une équipe Doc Wagon IHR en cas de blessure grave en échange d'un point d'Anarchy Médikit avec autopilote 9 si intervention RR 2 Survie (Premiers soins) si intervention"
    },
{
      "Atout": "Loge magique",
      "Catégorie": "MATÉRIEL MAGIQUE",
      "COUT_Atout": "",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Permet d'obtenir un avantage sur un test de magie rituelle en échange d'un point d'Anarchy."
    }
    ]
   
  },
  "10_programmes_illegaux": {
    "nom": "10. PROGRAMMES ILLÉGAUX",
    "total": 15,
    "donnees": [
    {
      "Atout": "Biofeedback",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet d'infliger des dommages de biofeedback au lieu de dommages matriciels"
    },
    {
      "Atout": "Blackout",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet d'infliger des dommages de biofeedback au lieu de dommages matriciels, mais uniquement étourdissants, même face à un decker en Hot-sim"
    },
    {
      "Atout": "Evasion",
      "COUT_Atout": "Atout +3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "RR 2 Piratage (cybercombat), uniquement pour se défendre et seulement si le decker utilise une action pour se défendre"
    },
    {
      "Atout": "Bibliothèque de scripts",
      "COUT_Atout": "Atout +2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "RR 1 Piratage (force brute)"
    },
    {
      "Atout": "Contournement",
      "COUT_Atout": "Atout +2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "RR 1 Piratage (backdoor)"
    },
    {
      "Atout": "Exploitation",
      "COUT_Atout": "Atout +5",
      "COUT_Yen": "25 000¥",
      "EFFETS": "RR 1 Piratage"
    },
    {
      "Atout": "Intruder",
      "COUT_Atout": "Atout +9",
      "COUT_Yen": "45 000¥",
      "EFFETS": "RR 1 Piratage, RR 1 Piratage (force brute), RR 1 Piratage (backdoor)"
    },
    {
      "Atout": "Invisibilité",
      "COUT_Atout": "Atout +2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "RR 1 Furtivité (matricielle)"
    },
    {
      "Atout": "Marteau",
      "COUT_Atout": "Atout +2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "RR 1 Piratage (cybercombat)"
    },
    {
      "Atout": "Debug",
      "COUT_Atout": "Atout +2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Autorise un test de Logique + Électronique (appareil personnel) pour réparer un dommage léger infligé à un appareil par une attaque matricielle. Peut être réalisé en ligne en une action en échange d'un point d'Anarchy."
    },
    {
      "Atout": "Mouchard",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de charger un spyware sur un appareil (droit admin nécessaire) qui rapporte toute activité matricielle au decker qui l'a posé"
    },
    {
      "Atout": "Nettoyeur de signal",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet d'annuler le désavantage dû au bruit contre un point d'Anarchy"
    },
    {
      "Atout": "Pic à glace",
      "COUT_Atout": "Atout +3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "RR 2 Piratage (cybercombat), uniquement pour attaquer des GLACE"
    },
    {
      "Atout": "Scan",
      "COUT_Atout": "Atout +2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "RR 1 Perception (matricielle)"
    },
    {
      "Atout": "Verrouillage de connexion",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Empêche une cible en RV de se déconnecter pendant un tour"
    }
    ]
  },
  "11_constructs": {
    "nom": "11. CONSTRUCTS",
    "total": 14,
    "donnees": [
    {
      "Atout": "Extrait de résonance",
      "COUT_Atout": "",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Permet d'obtenir un avantage sur un test de Technomancie en échange d'un point d'Anarchy.",
      "Pré_requis": "Emerge"
    },
    {
      "Atout": "Admonesteur",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "RR 1 Technomancie (décompilation)",
      "Pré_requis": "Emerge"
    },
    {
      "Atout": "Cape de résonance",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "RR 1 Furtivité (matricielle)",
      "Pré_requis": "Emerge"
    },
    {
      "Atout": "Carapace de code",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "17 500¥",
      "EFFETS": "Armure +1 contre les dommages matriciels et de biofeedback.",
      "Pré_requis": "Emerge"
    },
    {
      "Atout": "Compilateur",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "RR 1 Technomancie (compilation)",
      "Pré_requis": "Emerge"
    },
    {
      "Atout": "Concentrateur de résonance",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "27 500¥",
      "EFFETS": "RR 1 Technomancie",
      "Pré_requis": "Emerge"
    },
    {
      "Atout": "Fléau des drones",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "7 500¥",
      "EFFETS": "RR 1 Piratage (Forme complexe ciblant un drone)",
      "Pré_requis": "Emerge"
    },
    {
      "Atout": "Mémoire tampon",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "Permet de maintenir une forme complexe supplémentaire sans désavantage ainsi qu'une forme complexe supplémentaire avec désavantage.",
      "Pré_requis": "Emerge"
    },
    {
      "Atout": "Construct de sprite",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "17 500¥",
      "EFFETS": "Possibilité de compiler un second sprite alors qu'il reste des tâches à accomplir à un premier sprite.",
      "Pré_requis": "Emerge"
    },
    {
      "Atout": "Lame de données",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "VD +2 lors de l'utilisation de la forme complexe Pic de résonance.",
      "Pré_requis": "Emerge"
    },
    {
      "Atout": "Passe-partout",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "RR 1 Piratage (backdoor)",
      "Pré_requis": "Emerge"
    },
    {
      "Atout": "Oracle",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "22 500¥",
      "EFFETS": "RR 1 Perception (matricielle). RR 1 Électronique (recherche matricielle)",
      "Pré_requis": "Emerge"
    },
    {
      "Atout": "Tisseur",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "RR 1 Technomancie (forme complexe)",
      "Pré_requis": "Emerge"
    },
    {
      "Atout": "Virus logique",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "17 500¥",
      "EFFETS": "RR 1 Technomancie (forme complexe ciblant une CI). RR 1 Piratage (cybercombat ciblant une CI)",
      "Pré_requis": "Emerge"
    }
    ]
  },
  "12_formes_complexes": {
    "nom": "12. FORMES COMPLEXES",
    "total": 31,
    "donnees": [
    {
      "Atout": "Absorbeur de bombe matricielle",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Si le technomancien déclenche une bombe matricielle alors qu'il maintient cette forme complexe, la VD de la bombe est diminuée du nombre de succès nets obtenus lors du tissage. Si la VD tombe à zéro, les effets de la bombe sont absorbés par la résonance, ce qui empêche le fichier protégé d'être endommagé. La forme complexe disparaît après usage.",
      "Pré_requis": "Emerge",
      "Type": "Concentration",
      "Seuil": "0"
    },
    {
      "Atout": "Arc réactif",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Le prochain persona ou glace qui réussira une attaque en cybercombat contre le technomancien subira des dommages matriciels d'une VD égale aux succès nets. Une fois les dommages infligés, la forme complexe disparaîtra.",
      "Pré_requis": "Emerge",
      "Type": "Concentration",
      "Seuil": "0"
    },
    {
      "Atout": "Bombe d'interférences",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Les cibles qui ne parviennent pas à obtenir plus de succès sur leur test de Perception perdent la trace du persona du technomancien. Elles peuvent effectuer un nouveau test de Perception contre la Furtivité du technomancien pour tenter de le repérer à nouveau. Si le technomancien attaque une cible en cybercombat, celle-ci le repère automatiquement.",
      "Pré_requis": "Emerge",
      "Type": "Instantané",
      "Seuil": "0"
    },
    {
      "Atout": "BTL IRL",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "La cible disposant de l'équipement cybernétique adéquat (IND, yeux cybernétiques, oreilles cybernétiques, etc.) voit ses capacités sensorielles augmenter. Avantage aux tests de Perception (physique). Désavantage aux tests d'Influence à cause de la distraction et des contractions involontaires du personnage rappelant celles des puceux. Permet de combler le besoin d'une cible accroc aux BTL.",
      "Pré_requis": "Emerge",
      "Type": "Concentration",
      "Seuil": "4"
    },
    {
      "Atout": "Câbles de résonance",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet au technomancien de cibler un appareil ou un personnage qu'il peut voir pour établir une connexion directe avec celui-ci, même si l'appareil est éteint, hors ligne ou que le sans-fil est désactivé. Si la cible est un personnage, le technomancien obtient un accès direct sur tous ses appareils. La seule chose qui peut être faite sur un appareil éteint est de l'allumer. La connexion dure aussi longtemps qu'elle est maintenue et que le technomancien parvient à garder un contact visuel avec la cible. Pour rappel, lorsqu'un appareil est piraté ou attaqué par une connexion directe, seul son propre firewall est pris en compte, pas celui du réseau auquel il appartient.",
      "Pré_requis": "Emerge",
      "Type": "Concentration",
      "Seuil": "3"
    },
    {
      "Atout": "Canal de résonance",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "En cas de succès, le technomancien ne subit pas de désavantage à cause du bruit matriciel. Cette forme complexe ne permet pas de lutter contre les sources de bruit plus puissantes empêchant complètement les actions matricielles. Fonctionne contre tous types de brouillage, pas uniquement le brouillage sélectif.",
      "Pré_requis": "Emerge",
      "Type": "Concentration",
      "Seuil": "Succès du brouillage (4 par défaut)"
    },
    {
      "Atout": "Cyber-saturation",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Lorsqu'un personnage possédant au moins une augmentation reliée à son système nerveux est pris pour cible, cette forme complexe surcharge ses récepteurs sensoriels provoquant les mêmes douleurs qu'un rejet d'implants. VD = Succès, dommages physiques ignorant l'armure. S'il le souhaite, le technomancien peut également dépenser un point d'Anarchy pour rendre un implant de la cible inopérant pour le prochain tour. Si le technomancien cible un personnage qui ne possède aucun implant vulnérable, aucun dommage ne peut être infligé.",
      "Pré_requis": "Emerge",
      "Type": "Instantané",
      "Seuil": "0"
    },
    {
      "Atout": "Détricoter le cryptage",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de décrypter un fichier. En cas d'échec le serveur est mis en alerte et commence à envoyer ses GLACE, mais doit encore repérer le technomancien pour pouvoir agir contre lui.",
      "Pré_requis": "Emerge",
      "Type": "Instantané",
      "Seuil": "Firewall"
    },
    {
      "Atout": "Dispersion",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Le persona ciblé subit un désavantage sur ses tests de Piratage (cybercombat).",
      "Pré_requis": "Emerge",
      "Type": "Concentration",
      "Seuil": "Firewall"
    },
    {
      "Atout": "Édition",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet d'effectuer des modifications sur un fichier nécessitant un accès Administrateur, tout en n'ayant qu'un accès Utilisateur (par exemple : modifier les horaires du personnel sur un serveur commercial).",
      "Pré_requis": "Emerge",
      "Type": "Instantané",
      "Seuil": "Firewall"
    },
    {
      "Atout": "Émulateur de serveur",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Cible un persona ou une CI. En cas de succès, la cible est amenée à interagir avec une illusion du serveur dans lequel elle se trouve et ses prochaines actions matricielles échoueront alors qu'elle croira le contraire. Si l'une de ces actions obtient plus de succès nets que le technomancien, l'action échoue, mais la cible se rend compte de la supercherie et la forme complexe disparaît.",
      "Pré_requis": "Emerge",
      "Type": "Concentration",
      "Seuil": "Firewall"
    },
    {
      "Atout": "Fusion avec la machine",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Cible un personnage plongé dans un véhicule ou un drone. Tous les deux succès la cible bénéficie d'une RR 1 pour les tests de Pilotage, d'Ingénierie ou de Furtivité (au choix) avec bonus un maximum de RR 2 pour chaque type de test. Ce bonus s'applique uniquement aux tests pour se servir du véhicule ou du drone et de ses systèmes. La forme complexe disparaît dès que la cible n'est plus en plongée.",
      "Pré_requis": "Emerge",
      "Type": "Concentration",
      "Seuil": "2+"
    },
    {
      "Atout": "Historique",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de récupérer l'historique des actions (mais pas les données associées) d'un appareil.",
      "Pré_requis": "Emerge",
      "Type": "Instantané",
      "Seuil": "Firewall"
    },
    {
      "Atout": "Image parasite",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet d'afficher une image parasite dans l'affichage RA d'une personne. Cette image est issue d'un fichier, d'un flux vidéo ou de l'esprit du technomancien. Cela peut être utile pour faire passer un message discrètement. N'affecte qu'un seul sens. Pour en affecter plusieurs (son et image par exemple), le seuil est augmenté de +1. La forme complexe disparaît si la cible sort du champ de vision du technomancien.",
      "Pré_requis": "Emerge",
      "Type": "Concentration",
      "Seuil": "Firewall"
    },
    {
      "Atout": "Indic",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Le persona ciblé subit les effets de la surveillance du DIEU : – 1 succès net : effets d'une complication mineure. – 4 succès nets : effets d'une complication critique. – 7 succès nets : effets d'un désastre",
      "Pré_requis": "Emerge",
      "Type": "Instantané",
      "Seuil": "Firewall"
    },
    {
      "Atout": "Infusion d'autopilote",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "L'Autopilote de l'appareil ciblé agit de façon plus efficace, presque comme s'il était doué de conscience. Débride l'Autopilote du véhicule ou drone ciblé tant que la forme complexe est maintenue.",
      "Pré_requis": "Emerge",
      "Type": "Concentration",
      "Seuil": "5"
    },
    {
      "Atout": "Infusion de Firewall",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Le persona ciblé bénéficie d'une Armure contre les dommages matriciels et de biofeedback d'indice 1 par tranche de 3 succès.",
      "Pré_requis": "Emerge",
      "Type": "Concentration",
      "Seuil": "3+"
    },
    {
      "Atout": "Maquillage de données",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de donner une apparence différente à une icône (persona, appareil, CI, fichier, sprite, IA…), de falsifier les caractéristiques d'un appareil ou encore de simuler le fonctionnement d'un logiciel sur un appareil auprès de tout personnage n'obtenant pas plus de succès que le technomancien sur un test de Perception (matricielle) + Logique.",
      "Pré_requis": "Emerge",
      "Type": "Concentration",
      "Seuil": "0"
    },
    {
      "Atout": "Marionnette",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Lorsqu'il cible un personnage possédant un implant cybernétique relié à son système nerveux, le technomancien peut en prendre le contrôle et lui faire faire une action par succès net. Il utilise pour cela sa propre compétence, mais avec l'attribut de la cible. Cette action subit un désavantage dès lors que la cible tente de s'y opposer. Le technomancien doit dépenser une de ses actions pour chaque action réalisée avec les implants de sa cible. Le technomancien ne contrôle que ce qui peut l'être par le cyberware (les membres cybernétiques par exemple, mais pas les membres naturels, à moins qu'ils soient parcourus par un implant connecté au système nerveux, tel que des réflexes câblés). La cible reste aux commandes de ce qui n'est pas contrôlé par le technomancien et peut donc agir avec. Si le technomancien tente d'infliger des blessures à la cible en se frappant ou en se tirant dessus, aucun test n'est nécessaire et seule la VD de base est appliquée.",
      "Pré_requis": "Emerge",
      "Type": "Concentration",
      "Seuil": "Firewall+Volonté"
    },
    {
      "Atout": "Marionnettiste",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de forcer l'appareil ciblé à exécuter une action nécessitant un accès Utilisateur, sans avoir cet accès. Cela ne procure aucun accès sur l'appareil et ne permet pas de voir les fichiers qui s'y trouvent.",
      "Pré_requis": "Emerge",
      "Type": "Instantané",
      "Seuil": "Firewall"
    },
    {
      "Atout": "Nettoyeuse",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Le persona ciblé voit la surveillance du DIEU s'alléger : – 1 succès permet de réduire de 1 le nombre de dés de risque obligatoires. – 5 succès permettent d'annuler l'augmentation des seuils de 1",
      "Pré_requis": "Emerge",
      "Type": "Instantané",
      "Seuil": "1+"
    },
    {
      "Atout": "Overclock",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Effets identiques aux atouts d'augmentation d'initiative, mais limités à la RV. Seul le bonus le plus important entre les différentes sources d'augmentation de l'initiative est pris en compte. – 3 succès : +1 point d'Anarchy par scène d'action, pas de limite au nombre d'actions supplémentaires par tour. – 5 succès : +1 point d'Anarchy par scène d'action, +1 action par narration, pas de limite au nombre d'actions supplémentaires par tour. – 7 succès : +2 points d'Anarchy par scène d'action, +1 action par narration, pas de limite au nombre d'actions supplémentaires par tour.",
      "Pré_requis": "Emerge",
      "Type": "Concentration",
      "Seuil": "3+"
    },
    {
      "Atout": "Partage d'Environnement RA",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet au technomancien de percevoir l'Environnement de Réalité Augmentée d'une cible (qui doit être visible au moment de lancer la forme complexe). Le technomancien ne fait que percevoir l'ERA de sa cible et ne peut pas agir dessus, mais cet environnement s'adapte au champ de vision du technomancien (un ORA cosmétique s'affichera toujours là où il devrait être affiché si la cible se trouvait là où se trouve le technomancien).",
      "Pré_requis": "Emerge",
      "Type": "Concentration",
      "Seuil": "Firewall+2"
    },
    {
      "Atout": "Persona miroir",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Donne l'illusion d'un double du persona du technomancien. Chaque fois qu'un adversaire souhaite cibler le technomancien, il doit d'abord réussir un test de Perception (matricielle) + Logique contre le nombre de succès obtenu par le technomancien. En cas d'échec, il cible le double, sans effet.",
      "Pré_requis": "Emerge",
      "Type": "Concentration",
      "Seuil": "0"
    },
    {
      "Atout": "Pic à GLACE",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet d'infliger des dégâts d'une VD égale aux succès nets à une CI. Si celle-ci est plantée par cette attaque, le technomancien a la possibilité de maintenir la forme complexe pour empêcher le serveur de relancer cette GLACE au prochain tour.",
      "Pré_requis": "Emerge",
      "Type": "Instantané / Concentration",
      "Seuil": "Firewall"
    },
    {
      "Atout": "Pic de Résonance",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Inflige des dommages matriciels d'une VD égale au nombre de succès obtenus.",
      "Pré_requis": "Emerge",
      "Type": "Instantané",
      "Seuil": "0"
    },
    {
      "Atout": "Réalité perturbée",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Cette forme complexe cible une zone physique comme le ferait un sort. Toutes les personnes qui se trouvent ou entrent dans cette zone voient leur Environnement de Réalité Augmentée perturbé par des signaux et interférences chaotiques provoquant malaise et inconfort. Les cibles dans l'aire d'effet sont affectées si les succès nets sont au moins égaux à leur (Volonté + Firewall), auquel cas elles subissent un désavantage à toutes leurs actions dans le monde physique tant qu'elles restent dans la zone ou ne coupent pas leur RA (avec ce que ça peut impliquer).",
      "Pré_requis": "Emerge",
      "Type": "Concentration",
      "Seuil": "Selon aire d'effet"
    },
    {
      "Atout": "Suture",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Chaque lancement permet de soigner une blessure d'une entité purement matricielle (sprite, glace, agent, IA). – 3 succès : Blessure légère. – 5 succès : Blessure grave. – 6 succès : Blessure incapacitante",
      "Pré_requis": "Emerge",
      "Type": "Instantané",
      "Seuil": "3 à 6"
    },
    {
      "Atout": "Technorégénération",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de soigner les dommages d'un appareil électronique : – 2 succès : Blessure légère. – 4 succès : Blessure grave. – 5 succès : Blessure incapacitante. Une fois réparé de cette façon l'appareil a tendance à fonctionner de façon erratique. Oblige à prendre 6 dés de risques minimum jusqu'à ce qu'il bénéficie d'une réparation plus approfondie. Un appareil ne peut bénéficier que d'une technorégénération jusqu'à ce qu'il soit réparé.",
      "Pré_requis": "Emerge",
      "Type": "Personnel",
      "Seuil": "2 à 5"
    },
    {
      "Atout": "Tempête d'impulsions",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Le persona ciblé subit un désavantage causé par le bruit matriciel (hors cybercombat).",
      "Pré_requis": "Emerge",
      "Type": "Concentration",
      "Seuil": "Firewall"
    },
    {
      "Atout": "Voile de Résonance",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Donne l'illusion d'une activité matricielle définie par le technomancien à toute cible n'obtenant pas plus de succès que le technomancien sur un test de Perception (matricielle) + Logique.",
      "Pré_requis": "Emerge",
      "Type": "Concentration",
      "Seuil": "0"
    }
    ]
  },
  "13_materiel_magique": {
    "nom": "13. MATÉRIEL MAGIQUE",
    "total": 16,
    "donnees": [
    {
      "Atout": "Fétiche",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Permet d’obtenir un avantage sur un test de magie en échange d’un point d’Anarchy."
    },
    {
      "Atout": "Focus sorcier",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "27 500¥",
      "EFFETS": "RR 1 Sorcellerie"
    },
    {
      "Atout": "Focus de détection mineur",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "RR 1 Sorcellerie (sorts de détection)"
    },
    {
      "Atout": "Focus de manipulation",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "22 500¥",
      "EFFETS": "RR 2 Sorcellerie (sorts de manipulation)"
    },
    {
      "Atout": "Focus d'illusion majeur",
      "COUT_Atout": "Atout 6",
      "COUT_Yen": "32 500¥",
      "EFFETS": "RR 3 Sorcellerie (sorts d’illusion)"
    },
    {
      "Atout": "Focus de contresort",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "22 500¥",
      "EFFETS": "RR 2 Sorcellerie (contresort)"
    },
    {
      "Atout": "Focus de maintien",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "Permet de maintenir un sort supplémentaire sans désavantage ainsi qu’un sort supplémentaire avec désavantage."
    },
    {
      "Atout": "Focus de conjuration",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "27 500¥",
      "EFFETS": "RR 1 Conjuration"
    },
    {
      "Atout": "Focus de l'air mineur",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "RR 1 Conjuration (esprits de l’air)"
    },
    {
      "Atout": "Focus des bêtes",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "22 500¥",
      "EFFETS": "RR 2 Conjuration (esprits des bêtes)"
    },
    {
      "Atout": "Focus du feu majeur",
      "COUT_Atout": "Atout 6",
      "COUT_Yen": "32 500¥",
      "EFFETS": "RR 3 Conjuration (esprits du feu)"
    },
    {
      "Atout": "Focus de bannissement",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "22 500¥",
      "EFFETS": "RR 2 Conjuration (bannissement)"
    },
    {
      "Atout": "Focus de contrôle",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "17 500¥",
      "EFFETS": "Permet de contrôler 2 esprits simultanément."
    },
    {
      "Atout": "Focus d'arme (couteau)",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "7 500¥",
      "EFFETS": "Arme courte (VD For+1, OK/-/-/-). Peut être utilisées en projection astrale (VD Cha+1) et ignore l’immunité aux armes normales."
    },
    {
      "Atout": "Focus d'arme (katana)",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "27 500¥",
      "EFFETS": "Arme longue (VD For+2, OK/-/-/-). Peut être utilisées en projection astrale (VD Cha+2) et ignore l’immunité aux armes normales. RR 2 Combat rapproché (lames)."
    },
    {
      "Atout": "Loge magique",
      "COUT_Atout": "",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Permet d’obtenir un avantage sur un test de magie rituelle en échange d’un point d’Anarchy."
    }
    ]
  },
  "14_pouvoirs_adepte": {
    "nom": "14. POUVOIRS D’ADEPTE",
    "total": 54,
    "donnees": [
    {
      "Atout": "Anti-magie",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "Le seuil des sorts ou pouvoirs magiques qui ciblent le personnage est augmenté de 1.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Arme élémentaire",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "VD avec une arme de mêlée +1 Provoque un effet élémentaire (feu, glace, acide, etc. choisi lors de l’acquisition de l’atout) contre un point d’Anarchy.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Arme spirituelle",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "En échange d’un point d’Anarchy, le personnage est capable de créer une arme courte ou longue spirituelle (au choix). Cette arme est considérée comme magique et affecte les cibles immunisées aux armes normales.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Arme spirituelle forte",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20 000¥",
      "EFFETS": "En échange d’un point d’Anarchy, le personnage est capable de créer une arme courte ou longue spirituelle (au choix). +2 à la VD de l’arme invoquée. Cette arme est considérée comme magique et affecte les cibles immunisées aux armes normales.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Armure",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Armure physique +1",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Armure astrale",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Armure contre les sorts et dans l’espace astral +1",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Armure mystique",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "Armure +1 contre toutes les sources de dommages.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Augmentation d'attribut",
      "COUT_Atout": "Atout 11",
      "COUT_Yen": "55 000¥",
      "EFFETS": "RR 1 aux tests d’un attribut (choisi lors de l’acquisition de l’atout).",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Assistance sorcière",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "25 000¥",
      "EFFETS": "Le personnage peut, en étant en contact avec un sorcier, lui faire bénéficier d’une RR 1 Sorcellerie.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Attaque retardée",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Retarde l’application des blessures d’une attaque à mains nues. L’attaque agit et compte comme un sort maintenu, la blessure n’étant appliquée qu’au moment où l’adepte arrêtera de maintenir le pouvoir (max 24h). L’attaque étant attachée à l’aura, un mage en perception astral peut faire un test de contresort pour annuler des succès au test d’attaque et ainsi tenter de rendre le coup inoffensif.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Berserk",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20 000¥",
      "EFFETS": "Le personnage peut entrer dans un état de rage frénétique : VD+2 à mains nues ou arme de mêlée au choix. RR 2 Combat rapproché (spécialité au choix) Doit prendre un risque fort ou extrême. Le pouvoir prend fin si le personnage ne peut plus attaquer au cours d’un tour entier. Le personnage subit une blessure légère une fois que le pouvoir prend fin.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Chute libre",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Ajoute 3 mètres à la hauteur de laquelle le personnage peut sauter sans risquer de blessure (cet atout peut être pris jusqu’au niveau 3 pour 15 000¥ et une hauteur de 9 mètres).",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Combat en aveugle",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Annule tout désavantage en combat lié à la visibilité.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Compétence améliorée",
      "COUT_Atout": "Atout 6",
      "COUT_Yen": "30 000¥",
      "EFFETS": "RR 1 aux tests d’une compétence (choisie lors de l’acquisition de l’atout).",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Contrôle vocal",
      "COUT_Atout": "Atout 8",
      "COUT_Yen": "40 000¥",
      "EFFETS": "RR 1 Influence RR 1 Influence (imposture)",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Contrôle vocal et morphologique",
      "COUT_Atout": "Atout 10",
      "COUT_Yen": "50 000¥",
      "EFFETS": "RR 1 Influence RR 2 Influence (imposture)",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Coup dévastateur",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "VD+4 à mains nues lorsque le personnage frappe une barrière ou une structure statique.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Course sur les murs",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de courts déplacements sur les surfaces verticales.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Déplacement flash",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Le personnage est capable de se déplacer à une vitesse surnaturelle. Il ne lui faut qu’une narration pour passer d’une portée moyenne à courte et seulement deux narrations pour passer d’une portée longue à moyenne (et inversement).",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Dissimulation",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de se fondre dans la masse pendant une scène d’action en échange d’un point d’Anarchy.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Doigts de fée",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "RR 1 Furtivité (escamotage) / RR 1",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Élasticité",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de se libérer de ses liens ou de passer par des passages étroits normalement inaccessibles en échange d’un point d’Anarchy.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Focus vivant",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "Permet de maintenir un sort supplémentaire sans désavantage ainsi qu’un sort supplémentaire avec désavantage.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Frappe à distance",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "Permet d’attaquer à portée courte à mains nues avec un désavantage.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Frappe élémentaire",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "VD à mains nues +1 Provoque un effet élémentaire (feu, glace, acide, etc. choisi lors de l’acquisition de l’atout) contre un point d’Anarchy.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Frappe névralgique",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Au lieu de faire des dégâts à mains nues, le personnage dépense un point d’Anarchy et paralyse son adversaire, l’empêchant d’utiliser sa prochaine action (il peut toutefois toujours dépenser un point d’Anarchy pour obtenir une action supplémentaire).",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Guérison facile",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet d’obtenir un avantage sur les tests de Survie (premiers soins) prodigué sur le personnage en échange d’un point d’Anarchy.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Guérison rapide",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "RR 1 Survie (premiers soins) effectuée sur le personnage (même si le test est effectué par quelqu’un d’autre).",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Grand saut",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "25 000¥",
      "EFFETS": "RR 2 Athlétisme (sauts)",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Lancer puissant",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "VD +1 à toutes les armes de jet.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Linguiste",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet au personnage de s’imprégner d’une langue pour pouvoir la parler au cours du reste de la scène en échange d’un point d’Anarchy.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Mains mortelles",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "VD à mains nues +2",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Maitrise des projectiles",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Dans les mains de l’adepte, l’objet le plus anodin devient une arme de jet (VD : F+0, Portée [OK/OK/-/-].",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Parade de projectiles",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "RR 2 Athlétisme (défense contre les armes de jet) Le personnage peut attraper une arme de jet qui lui est lancée et qu’il est parvenu à esquiver en échange d’un point d’Anarchy",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Passage sans traces",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Lorsque le personnage marche sur de la poussière, de la neige, de l’eau, un capteur de pression ou toute autre surface, il ne laisse aucune trace, comme s’il n’était jamais passé par là.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Perception améliorée",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "RR 1 aux tests de Perception (physique). Chaque niveau supplémentaire (+5 000¥) permet de choisir un effet narratif additionnel (vision nocturne, vision thermographique, spectre auditif élargi, odorat canin, écholocation, etc.).",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Poids plume",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "25 000¥",
      "EFFETS": "RR 2 Furtivité (discrétion physique).",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Précision améliorée",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "Fait passer l’une des portées d’un type d’arme (à choisir) de \"Désavantage\" à \"OK\" ou de \"–\" à \"Désavantage\".",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Réflexes accrus",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "+1 point d’Anarchy par scène d’action, pas de limite au nombre d’actions supplémentaires par tour.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Réflexes améliorés",
      "COUT_Atout": "Atout 6",
      "COUT_Yen": "30 000¥",
      "EFFETS": "+1 point d’Anarchy par scène d’action, pas de limite au nombre d’actions supplémentaires par tour. +1 action par narration.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Résistance à la douleur",
      "COUT_Atout": "Atout 7",
      "COUT_Yen": "35 000¥",
      "EFFETS": "+1 case de dommage grave.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Résistance mentale",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "+1 d’armure mentale.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Sens amélioré",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de choisir un effet narratif (vision nocturne, vision thermographique, spectre auditif élargi, odorat canin, écholocation, etc.).",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Sens de l'orientation",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "25 000¥",
      "EFFETS": "RR 2 Survie (orientation).",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Sens du combat",
      "COUT_Atout": "Atout 8",
      "COUT_Yen": "40 000¥",
      "EFFETS": "RR 1 Combat rapproché . RR 1 Athlétisme (défense à distance).",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Sens du danger",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de ressentir un danger imminent, sans test de Perception, mais sans détail.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Sens empathique",
      "COUT_Atout": "Atout 7",
      "COUT_Yen": "35 000¥",
      "EFFETS": "RR 3 Perception (sociale).",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Sens magique",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Le personnage devient capable de ressentir l’activité magique (focus, sorts actifs, barrières mana, formes astrales) autour de lui, même s’il n’est pas en perception astrale. Traitez ce pouvoir comme un sort de détection de la magie lancé avec Logique + Perception (astrale)",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Soins empathiques",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "En échange d’un point d’Anarchy, le personnage peut transférer la blessure d’un personnage sur son propre moniteur d’état.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Sourire flamboyant",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "RR 1 Influence (bluff).",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Subsistance",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet au personnage de rester plusieurs jours sans boire ni manger sans subir de désavantage.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Vision véritable",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Le seuil pour que le personnage soit affecté par une illusion est augmenté de 1.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Voile",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Impose un désavantage aux personnages qui tenteraient de lire son aura.",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Voix de commandement",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "RR 1 Influence (intimidation).",
      "Pré_requis": "adepte"
    }
    ]
  },
  "15_voies_adepte": {
    "nom": "15. VOIES DE L’ADEPTE",
    "total": 10,
    "donnees": [
    {
      "Atout": "Voie de la Bête",
      "COUT_Atout": "Atout 2*",
      "COUT_Yen": "10 000¥*",
      "EFFETS": "Choisissez un totem animal et appliquer le comportement et les effets de l'une des RR de l'Esprit mentor",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Voie de l'Artisan",
      "COUT_Atout": "Atout 5*",
      "COUT_Yen": "25 000¥*",
      "EFFETS": "RR 1 Ingénierie",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Voie de l'Athlète",
      "COUT_Atout": "Atout 5*",
      "COUT_Yen": "25 000¥*",
      "EFFETS": "RR 1 Athlétisme",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Voie du Chasseur",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Furtivité (discrétion physique) / RR 1 Combat à distance (fusils)",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Voie des Esprits",
      "COUT_Atout": "Atout 5*",
      "COUT_Yen": "25 000¥*",
      "EFFETS": "RR 1 Conjuration",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Voie du Flingueur",
      "COUT_Atout": "Atout 5*",
      "COUT_Yen": "25 000¥*",
      "EFFETS": "RR 1 Combat à distance",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Voie du Guerrier",
      "COUT_Atout": "Atout 5*",
      "COUT_Yen": "25 000¥*",
      "EFFETS": "RR 1 Combat rapproché",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Voie de l'Invisible",
      "COUT_Atout": "Atout 5*",
      "COUT_Yen": "25 000¥*",
      "EFFETS": "RR 1 Furtivité",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Voie du Magicien",
      "COUT_Atout": "Atout 5*",
      "COUT_Yen": "25 000¥*",
      "EFFETS": "RR 1 Sorcellerie",
      "Pré_requis": "adepte"
    },
    {
      "Atout": "Voie de l'Orateur",
      "COUT_Atout": "Atout 5*",
      "COUT_Yen": "25 000¥*",
      "EFFETS": "RR 1 Influence",
      "Pré_requis": "adepte"
    }
    ]
  },
  "16_idoles": {
    "nom": "16. IDOLES (ESPRITS MENTORS)",
    "total": 36,
    "donnees": [
    {
      "Atout": "Aigle (Nature sauvage / Pureté)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Perception (physique) / RR 1 Sorcellerie (sorts de détection) / RR 1 Conjuration (esprits de l'air) Pure : se méfie de la technologie et est intolérant envers ceux qui ne partagent pas ses idées",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Alligator (Férocité / Oisiveté)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Combat au contact (mains nues) / RR 1 Sorcellerie (sorts de combat) / RR 1 Conjuration (esprits de l'eau ou aînés) Inamovible : difficile à convaincre de s'engager dans ce qu'il juge inutile",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Araignée (Tranquillité / Rêves)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Combat au contact (combat astral) / RR 1 Sorcellerie (sorts d'illusion) / RR 1 Conjuration (esprits des aînés) Agoraphobe : déteste les grands espaces ouverts, loin d'un abri",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Bacchus (Satyre / Décadence)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Influence (bluff) / RR 1 Sorcellerie (sorts d'illusion) / RR 1 Conjuration (esprits des aînés) Irresponsable : attiré par les festivités, du mal à garder une ligne de conduite",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Bison (Bonté)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Survie (premiers soins) / RR 1 Sorcellerie (sorts de santé) / RR 1 Conjuration (esprits de la terre) Généreux : ne peut ignorer un appel à l'aide honnête et justifié",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Chat (Mystère / Secret)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Athlétisme (parkour) / RR 1 Furtivité (discrétion physique) / RR 1 Sorcellerie (sorts d'illusion) Cruel : préfère affaiblir ses cibles et jouer avec elles",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Cheval sauvage (Licorne / Liberté)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Athlétisme (course) / RR 1 Sorcellerie (sorts de santé) / RR 1 Sorcellerie (sorts d'illusion) / RR 1 Conjuration (esprits de la bête) Indomptable : évite les engagements et les lieux confinés",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Chien (Amitié / Loyauté)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Perception (physique) / RR 1 Survie (orientation) / RR 1 Sorcellerie (sorts de détection) Loyal : ne trahira pas ses compagnons",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Cobra (Planification)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Survie (sang-froid) / RR 1 Furtivité (discrétion physique) / RR 1 Sorcellerie (sorts d'illusion) Déteste l'imprévu : déstabilisé lorsqu'il est surpris",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Corbeau (Chaos / Opportunisme)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Influence (bluff) / RR 1 Furtivité (escamotage) / RR 1 Sorcellerie (sorts de manipulation) / RR 1 Conjuration (esprits de l'air) Opportuniste : tire profit d'une situation, même préjudiciable à ses compagnons",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Coyote (Tromperie / Espièglerie)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Influence (imposture) / RR 1 Influence (étiquette) / RR 1 Sorcellerie (sorts de manipulation) Malicieux : joue un mauvais tour à quelqu'un, même préjudiciable à son équipe",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Crabe (Vieillesse)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Sorcellerie (sorts de détection) / RR 1 Sorcellerie (sorts de combat) / RR 1 Conjuration (esprits de l'eau) Psychorigide : râle, se plaint et ne change que très rarement d'avis",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Créateur (Artiste)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Ingénierie (spé au choix) / RR 1 Sorcellerie (sorts de manipulation) / RR 1 Sorcellerie (enchantements) Antisocial : plus à l'aise au milieu de ses créations",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Dauphin (Mer)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Athlétisme (natation) / RR 1 Influence (étiquette) / RR 1 Sorcellerie (sorts de détection) / RR 1 Conjuration (esprits de l'eau) Protecteur : lutte contre le mal qui menace les gens et les océans",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Dryade (Druide)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Survie (en milieu naturel) / RR 1 Sorcellerie (sorts de santé) / RR 1 Conjuration (esprits des plantes) Gardien des traditions : protège la terre et les traditions",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Fenrir (Prédateur)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Survie (sang-froid) / RR 1 Sorcellerie (sorts de combat) / RR 1 Conjuration (esprits des bêtes) Sans peur : a du mal à évaluer le danger et fuir un combat",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Gargouille (Roche)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Furtivité (discrétion physique) / RR 1 Sorcellerie (sorts d'illusion) / RR 1 Sorcellerie (contresort) / RR 1 Conjuration (esprits des aînés) Patient : reste immobile et silencieux des heures, perd pied dans la précipitation",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Gecko (Farceur)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Influence (imposture) / RR 1 Sorcellerie (sorts d'illusion) / RR 1 Sorcellerie (sorts de manipulation) Bon enfant : fait des blagues et s'amuse, mais pas pour faire du mal",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Guépard (Vitesse)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Athlétisme (course) / RR 1 Athlétisme (parkour) / RR 1 Sorcellerie (sorts de combat) Impatient : toujours à l'affut, ne tient pas en place",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Guerrière Sage (Athéna) (Honneur / Stratégie)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Influence (étiquette) / RR 1 Sorcellerie (sorts de combat) / RR 1 Sorcellerie (contresort) Tacticien honorable : étudie la tactique de ses ennemis en respectant les convenances",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Hibou (Sagesse / Vierge lunaire)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Survie (sang-froid) / RR 1 Influence (négociation) / RR 1 Sorcellerie (de nuit 00h-7h) / RR 1 Conjuration (de nuit 00h-7h) Nocturne : préfère vivre de nuit et dormir le jour",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Lion (Bravoure / Noblesse)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Furtivité (discrétion physique) / RR 1 Combat rapproché (lames) / RR 1 Sorcellerie (sorts de combat) / RR 1 Conjuration (esprits de la bête) Fier : exige la meilleure part et le respect de son entourage",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Loup (Communauté / Chasse)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Survie (orientation) / RR 1 Combat rapproché (mains nues) / RR 1 Combat rapproché (lames) / RR 1 Sorcellerie (sorts de combat) Acharné : ne fuit pas un combat dans lequel il est engagé",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Oiseau-tonnerre (Colère / Guerre)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Influence (intimidation) / RR 1 Combat rapproché (mains nues) / RR 1 Conjuration (esprits de l'air) Susceptible : ne peut s'empêcher de répondre aux insultes",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Ours (Force / Protection)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Survie (premiers soins) / RR 1 Combat rapproché (mains nues) / RR 1 Sorcellerie (sorts de santé) Rage : en cas de blessure, se jette dans le combat sans se soucier de sa sécurité",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Paon (Amante / Orgueil)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Influence (étiquette) / RR 1 Sorcellerie (sorts d'illusion) / RR 1 Sorcellerie (sorts de manipulation) / RR 1 Conjuration (esprits des aînés) Orgueilleux : obsédé par sa propre apparence",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Perroquet (M'as-tu-vu / Cirque)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Influence (imposture) / RR 1 Influence (bluff) / RR 1 Sorcellerie (sorts d'illusion) M'as-tu-vu : doit toujours être au centre de l'attention",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Porteur du feu (Invention / Générosité)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Furtivité (escamotage) / RR 1 Sorcellerie (sorts de détection) / RR 1 Conjuration (esprits des aînés) Altruiste : se consacre à l'amélioration des conditions de vie d'autrui",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Phénix (Renaissance)",
      "COUT_Atout": "Atout 5*",
      "COUT_Yen": "25 000¥*",
      "EFFETS": "Case blessure légère +1 / RR 1 Sorcellerie (santé ou illusion) ou RR 1 Conjuration (esprits du feu) Ténacité : se relève toujours quand on le pense à terre",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Rat (Égoïsme / Couardise)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Furtivité (crochetage) / RR 1 Sorcellerie (sorts d'illusion) / RR 1 Conjuration (esprits des aînés) Egoïste : ne partage rien et évite les combats",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Raton laveur (Monte-en-l'air)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Furtivité (escamotage) / RR 1 Influence (bluff) / RR 1 Sorcellerie (sorts de manipulation) Curieux : prêt à ignorer le danger pour apprendre de nouveaux secrets",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Requin (Vengeance / Impulsivité)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Athlétisme (natation) / RR 1 Combat rapproché (lames) / RR 1 Sorcellerie (sorts de combat) / RR 1 Conjuration (esprits de l'eau) Sanguinaire : attaque toujours de façon violente, sans pitié",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Sirène (Séductrice / Jalousie)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Influence (bluff) / RR 1 Sorcellerie (sorts d'illusion) / RR 1 Sorcellerie (sorts de manipulation) / RR 1 Conjuration (esprits de l'eau) Tentatrice : vit pour assouvir ses désirs en exploitant les faiblesses des autres",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Serpent (Gardien des secrets)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Survie (premiers soins) / RR 1 Survie (sang-froid) / RR 1 Sorcellerie (sorts de détection) / RR 1 Conjuration (esprits des plantes) Pacifiste : ne combat que pour se protéger ou protéger ses proches",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Serpent à plume",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Sorcellerie (sorts de détection) / RR 1 Sorcellerie (sorts de combat) / RR 1 Conjuration (esprits des airs) Fier de ses origines : donnerait sa vie plutôt que voir son honneur bafoué",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Tueur de dragons (Héroïsme / Aventure)",
      "COUT_Atout": "Atout 4*",
      "COUT_Yen": "20 000¥*",
      "EFFETS": "RR 1 Influence (intimidation) / RR 1 Combat rapproché (spé au choix) / RR 1 Sorcellerie (sorts de combat) Honneur : fera tout pour tenir ses promesses",
      "Pré_requis": "Eveille"
    }
    ]
  },
  "17_sorts_combat": {
    "nom": "17. SORTS DE COMBAT",
    "total": 11,
    "donnees": [
    {
      "Atout": "Dissipation de focus",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Rend temporairement inefficace un focus (nécessite de le voir physiquement ou astralement)",
      "Pré_requis": "Eveille",
      "Type": "direct, Instantané",
      "Seuil": "Coût de l'atout focus"
    },
    {
      "Atout": "Éclair étourdissant",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "VD 0 | Dommages mentaux | Étourdissants",
      "Pré_requis": "Eveille",
      "Type": "direct, Instantané",
      "Seuil": "Selon aire d'effet"
    },
    {
      "Atout": "Éclair mana",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "VD 0 | Dommages mentaux",
      "Pré_requis": "Eveille",
      "Type": "direct, Instantané",
      "Seuil": "Selon aire d'effet"
    },
    {
      "Atout": "Éclair spirituel",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "VD 2 | Dommages mentaux | N'affecte que les esprits",
      "Pré_requis": "Eveille",
      "Type": "direct, Instantané",
      "Seuil": "Selon aire d'effet"
    },
    {
      "Atout": "Touché de la mort",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "VD 2 | Dommages mentaux | Nécessite de toucher la cible",
      "Pré_requis": "Eveille",
      "Type": "direct, Instantané",
      "Seuil": "0"
    },
    {
      "Atout": "Touché étourdissant",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "VD 2 | Dommages mentaux | Étourdissants | Nécessite de toucher la cible",
      "Pré_requis": "Eveille",
      "Type": "direct, Instantané",
      "Seuil": "0"
    },
    {
      "Atout": "Déflagration",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Les succès nets sont utilisés comme le résultat d’un test d’attaque de VD Vol et chaque cible dans l’aire d’effet se défend normalement avec Athlétisme (combat à distance) + Agilité. Dommages physiques. Projette la cible au sol pour 1 point d’Anarchy",
      "Pré_requis": "Eveille",
      "Type": "indirect,  Instantané",
      "Seuil": "Selon aire d'effet"
    },
    {
      "Atout": "Flot acide",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Les succès nets sont utilisés comme le résultat d’un test d’attaque de VD Vol et chaque cible dans l’aire d’effet se défend normalement avec Athlétisme (combat à distance) + Agilité. Dommages physiques. Détruit l’armure de la cible pour 1 point d’Anarchy.",
      "Pré_requis": "Eveille",
      "Type": "indirect,  Instantané",
      "Seuil": "Selon aire d'effet"
    },
    {
      "Atout": "Foudre",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Les succès nets sont utilisés comme le résultat d’un test d’attaque de VD Vol et chaque cible dans l’aire d’effet se défend normalement avec Athlétisme (combat à distance) + Agilité. Dommages physiques. Fait perdre une action à la cible pour 1 point d’Anarchy.",
      "Pré_requis": "Eveille",
      "Type": "indirect,  Instantané",
      "Seuil": "Selon aire d'effet"
    },
    {
      "Atout": "Lance de glace",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Les succès nets sont utilisés comme le résultat d’un test d’attaque de VD Vol et chaque cible dans l’aire d’effet se défend normalement avec Athlétisme (combat à distance) + Agilité. Dommages physiques. Ralentit la cible pour 1 point d’Anarchy.",
      "Pré_requis": "Eveille",
      "Type": "indirect,  Instantané",
      "Seuil": "Selon aire d'effet"
    },
    {
      "Atout": "Trait de feu",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Les succès nets sont utilisés comme le résultat d’un test d’attaque de VD Vol et chaque cible dans l’aire d’effet se défend normalement avec Athlétisme (combat à distance) + Agilité. Dommages physiques. Enflamme la cible pour 1 point d’Anarchy.",
      "Pré_requis": "Eveille",
      "Type": "indirect,  Instantané",
      "Seuil": "Selon aire d'effet"
    }
    ]
  },
  "18_sorts_detection": {
    "nom": "18. SORTS DE DÉTECTION",
    "total": 13,
    "donnees": [
    {
      "Atout": "Analyse de la magie",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Identifie tout phénomène magique",
      "Pré_requis": "Eveille",
      "Type": "analyse, Instantané",
      "Seuil": "4"
    },
    {
      "Atout": "Analyse de la véracité",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de savoir si la cible ment ou pense dire la vérité tant que le sort est maintenu.",
      "Pré_requis": "Eveille",
      "Type": "analyse, Concentration",
      "Seuil": "Vol + Cha"
    },
    {
      "Atout": "Sonde mentale",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de chercher une information dont la cible a connaissance. Doit être lancé une fois par information. Nécessite de toucher la cible.",
      "Pré_requis": "Eveille",
      "Type": "analyse, Concentration",
      "Seuil": "Vol + Cha"
    },
    {
      "Atout": "Clairaudience",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de déplacer son audition jusqu’à la portée du sort. Le personnage ne peut pas utiliser son ouïe naturelle tant que le sort est maintenu. Il ne bénéficie pas d’éventuelles augmentations. Le sens peut être déplacé derrière des obstacles tant qu’il reste dans la portée du sort. Portée selon succès.",
      "Pré_requis": "Eveille",
      "Type": "sens, Concentration",
      "Seuil": "2 à 8"
    },
    {
      "Atout": "Clairvoyance",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de déplacer sa vue jusqu’à la portée du sort. Le personnage ne peut pas utiliser sa vue naturelle tant que le sort est maintenu. Il ne bénéficie pas d’éventuelles augmentations. Le sens peut être déplacé derrière des obstacles tant qu’il reste dans la portée du sort. Portée selon succès. Ne permet pas le lancement de sort au travers de ce sort.",
      "Pré_requis": "Eveille",
      "Type": "sens, Concentration",
      "Seuil": "2 à 8"
    },
    {
      "Atout": "Clairvoyance astrale",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Clairvoyance fonctionnant dans l'espace astral",
      "Pré_requis": "Eveille",
      "Type": "sens, Concentration",
      "Seuil": "2 à 8"
    },
    {
      "Atout": "Détection de la vie",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Détecte toute forme de vie de la taille d’une souris ou plus grosse. Portée selon succès.",
      "Pré_requis": "Eveille",
      "Type": "sens, Concentration",
      "Seuil": "2 à 8"
    },
    {
      "Atout": "Détection de la magie",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Détecte les formes astrales. Portée selon succès.",
      "Pré_requis": "Eveille",
      "Type": "sens, Concentration",
      "Seuil": "2 à 8"
    },
    {
      "Atout": "Détection des ennemies",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Détecte toute forme vivante ayant des intentions néfastes envers la cible. Portée selon succès.",
      "Pré_requis": "Eveille",
      "Type": "sens, Concentration",
      "Seuil": "2 à 8"
    },
    {
      "Atout": "Emprunt de sens",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de percevoir par les sens de la cible (qui doit être visible au moment de lancer le sort) : voir par ses yeux, entendre par ses oreilles, etc.",
      "Pré_requis": "Eveille",
      "Type": "sens, Concentration",
      "Seuil": "5"
    },
    {
      "Atout": "Lien mental",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet à deux personnes d’échanger des pensées tant qu’ils restent à portée. Portée selon succès.",
      "Pré_requis": "Eveille",
      "Type": "sens, Concentration",
      "Seuil": "2 à 8"
    },
    {
      "Atout": "Sens animal",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de percevoir par les sens d’une cible animal non sentiente et non éveillé.",
      "Pré_requis": "Eveille",
      "Type": "sens, Concentration",
      "Seuil": "3"
    },
    {
      "Atout": "Sens du combat",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Fournit un avantage aux tests de Combat rapproché et d’Athlétisme (défense à distance).",
      "Pré_requis": "Eveille",
      "Type": "sens, Concentration",
      "Seuil": "5"
    }
    ]
  },
  "19_sorts_sante": {
    "nom": "19. SORTS DE SANTÉ",
    "total": 12,
    "donnees": [
    {
      "Atout": "Augmentation d'Agilité",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Offre une RR 1 temporaire aux tests d’Agilité.",
      "Pré_requis": "Eveille",
      "Type": "Concentration",
      "Seuil": "5"
    },
    {
      "Atout": "Augmentation de la force",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "VD +1 aux attaques de combat rapproché basé sur la Force.",
      "Pré_requis": "Eveille",
      "Type": "Concentration",
      "Seuil": "2"
    },
    {
      "Atout": "Augmentation de réflexes",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Effets identiques aux atouts d’augmentation d’initiative.",
      "Pré_requis": "Eveille",
      "Type": "Concentration",
      "Seuil": "3 à 7"
    },
    {
      "Atout": "Diminution d'Agilité",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "La cible se voit imposer un Désavantage à tous ses tests impliquant l’Agilité.",
      "Pré_requis": "Eveille",
      "Type": "Concentration",
      "Seuil": "Vol + Cha"
    },
    {
      "Atout": "Diminution de la force",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "VD -1 aux attaques de combat rapproché basé sur la force pour la cible.",
      "Pré_requis": "Eveille",
      "Type": "Concentration",
      "Seuil": "Vol + Cha -2"
    },
    {
      "Atout": "Provoquer allergie",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "La cible subit une réaction allergique déterminée par le lanceur (éternuements, démangeaisons, larmes, éructions cutanées). Cela peut engendrer un désavantage à certains tests, à la discrétion du MJ.",
      "Pré_requis": "Eveille",
      "Type": "Concentration",
      "Seuil": "Vol + Cha"
    },
    {
      "Atout": "Réveil",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de réveiller temporairement une cible endormie ou inconsciente pour un nombre de minutes égale au nombre de succès nets.",
      "Pré_requis": "Eveille",
      "Type": "Instantané",
      "Seuil": "3"
    },
    {
      "Atout": "Lueur apaisante",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Ce sort améliore la circulation sanguine, blanchit les dents, atténue les rides, la mauvaise haleine et les autres imperfections du corps et procure un sentiment de bien être à la cible. Le personnage bénéficie d’une RR 1 à la plupart de ses tests d’Influence. Le sort n’a pas besoin d’être maintenu, mais ses effets s’estompent peu à peu. Il dure le temps d’une scène.",
      "Pré_requis": "Eveille",
      "Type": "Instantané",
      "Seuil": "5"
    },
    {
      "Atout": "Coup de fouet",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Chaque succès excédentaire permet à la cible de bénéficier de l’équivalent d’une heure de sommeil.",
      "Pré_requis": "Eveille",
      "Type": "Instantané",
      "Seuil": "2"
    },
    {
      "Atout": "Purification du corps",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet d’annuler les effets d’une drogue ou toxine préalablement ingérée par la cible sans qu’elle en subisse de contre-coût.",
      "Pré_requis": "Eveille",
      "Type": "Instantané",
      "Seuil": "5"
    },
    {
      "Atout": "Soin",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Chaque sort permet de soigner une blessure de la cible ou de la stabiliser.",
      "Pré_requis": "Eveille",
      "Type": "Instantané",
      "Seuil": "3 à 6"
    },
    {
      "Atout": "Stérilisation",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de détruire les bactéries et autres matières organiques microscopiques. Utilisé aussi bien pour éviter les contagions que de laisser des traces d’ADN derrière soi.",
      "Pré_requis": "Eveille",
      "Type": "Instantané",
      "Seuil": "2 + aire"
    }
    ]
  },
  "1_traits": {
    "nom": "1. TRAITS",
    "total": 65,
    "donnees": [
    {
      "Atout": "Accro à l'adrénaline",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Le personnage aime prendre des risques, il peut dépenser un point d'Anarchy pour Obtenir un avantage lorsqu'il prend un risque fort ou extrême. Note : peut aussi être l'objet d'un comportement plutôt qu'être un trait."
    },
    {
      "Atout": "Acrobate né",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000¥*",
      "EFFETS": "RR 1 Athlétisme (parkour)"
    },
    {
      "Atout": "Activité secondaire",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000¥*",
      "EFFETS": "Le personnage possède une activité secondaire, cela peut être un emploi à mi-temps, des obligations envers le crime organisé, du bénévolat, etc. RR 1 Réseau (spécialisation dépendant du domaine d'activité). Ce trait vient avec son lot de désagrément (indisponibilités, services à rendre, etc.), permettant de récupérer des points d'Anarchy lorsqu'ils génèrent des contraintes fortes sur le scénario."
    },
    {
      "Atout": "Affinité avec les esprits",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000¥*",
      "EFFETS": "RR 1 Conjuration (un type d'esprit au choix)",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Affinité avec les sprites",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000¥*",
      "EFFETS": "RR 1 Technomancie (compilation).",
      "Pré_requis": "Emerge"
    },
    {
      "Atout": "Allergie",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Permet de récupérer un point d'Anarchy en échange d'un désavantage à ses tests lorsque l'allergène choisi est présent."
    },
    {
      "Atout": "Allonge",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Fait passer la portée contact de 2 à 3 mètres"
    },
    {
      "Atout": "Ambidextre akimbo",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5000¥*",
      "EFFETS": "VD+1 en cas d'utilisation de deux armes à distance (pistolet lourd ou plus petit). Note : attention à la compatibilité des autres atouts VD+2 max."
    },
    {
      "Atout": "Ami des esprits",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15000¥*",
      "EFFETS": "Esprit invoqué supplémentaire +1",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Ami des sprites",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15000¥*",
      "EFFETS": "Possibilité de compiler un second sprite alors qu'il reste des tâches à accomplir à un premier sprite.",
      "Pré_requis": "Emerge"
    },
    {
      "Atout": "Apparence humaine",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Le personnage est un ork de petite taille ou un nain de grande taille pouvant passer pour un humain."
    },
    {
      "Atout": "Art de l'épée",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000¥*",
      "EFFETS": "Le personnage a appris à maitriser un art martial basé sur le maniement des lames (Escrime, Kendo/Kenjutsu, Geomdo/Geom beop, Kali, etc.) : RR 1 Combat rapproché (lames). Permet aussi de sortir une lame de son fourreau de façon rapide et fluide sans dépenser d'action."
    },
    {
      "Atout": "Art martial",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000¥*",
      "EFFETS": "Le personnage a appris à maitriser un art martial basé sur le combat à mains nues (Taekwondo, Kickboxing, Krav Maga, Wildcat, Hapkido, MMA, etc.) : RR 1 Combat rapproché (mains nues)"
    },
    {
      "Atout": "As de la gâchette",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000¥*",
      "EFFETS": "RR 1 Armes à distance (pistolets)"
    },
    {
      "Atout": "Asthmatique",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Permet de récupérer un point d'Anarchy en échange d'un désavantage à ses tests lorsque le personnage fait trop d'effort ou se trouve dans un environnement pollué ou poussiéreux, car une crise d'asthme s'est déclenchée."
    },
    {
      "Atout": "Athlète né",
      "COUT_Atout": "Atout 10",
      "COUT_Yen": "50000¥*",
      "EFFETS": "RR 1 Agilité"
    },
    {
      "Atout": "Attribut exceptionnel",
      "COUT_Atout": "Atout 10",
      "COUT_Yen": "50000¥*",
      "EFFETS": "RR 1 sur un attribut au choix."
    },
    {
      "Atout": "Bricoleur",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Permet d'effectuer des tests d'Ingénierie (Construction & Réparation) sans avoir les outils adaptés en échange d'un point d'Anarchy. À la discrétion du MJ, ces réparations peuvent ne durer que le temps d'une scène. Note : peut aussi être l'objet d'un comportement plutôt qu'être un trait."
    },
    {
      "Atout": "Carrure de cogneur",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000¥*",
      "EFFETS": "RR 1 Influence (intimidation)."
    },
    {
      "Atout": "Caméléon astral",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "L'aura du personnage est changeante, la rendant complexe à identifier. La signature astrale du personnage est aussi plus difficile à reconnaitre.",
      "Pré_requis": "Eveille"
    },
    {
      "Atout": "Célèbre",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Bravo, vous êtes célèbre et reconnu dans au moins une communauté. Vous pouvez gagner des points d'Anarchy en étant reconnu au plus mauvais moment, ou obtenir des faveurs en dépensant des points d'Anarchy lorsque vous êtes susceptible d'être reconnu."
    },
    {
      "Atout": "Cicatrices intimidantes",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Permet d'obtenir un avantage sur les tests d'intimidation en échange d'un point d'Anarchy lorsque la ou les cicatrices sont visibles. Permet aussi de récupérer un point d'Anarchy en échange d'un désavantage sur un test lié au charisme."
    },
    {
      "Atout": "Cogneur",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5000¥*",
      "EFFETS": "VD+1 aux attaques à mains nues. Note : attention à la compatibilité des autres atouts VD+2 max."
    },
    {
      "Atout": "Combat à deux armes",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000¥*",
      "EFFETS": "RR 1 Combat rapproché (lames) lorsque deux lames sont utilisées."
    },
    {
      "Atout": "Concentration accrue",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000¥*",
      "EFFETS": "Sort maintenu supplémentaire +1."
    },
    {
      "Atout": "Contorsionniste",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Permet de se libérer de ses liens ou de passer par des passages étroits normalement inaccessibles en échange d'un point d'Anarchy. Note : peut aussi être l'objet d'un comportement plutôt qu'être un trait."
    },
    {
      "Atout": "Corps de rêve",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000¥*",
      "EFFETS": "RR 1 Influence (séduction)"
    },
    {
      "Atout": "Costaud",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15000¥*",
      "EFFETS": "Ajoute une case de blessures légère au moniteur d'état."
    },
    {
      "Atout": "Dur à cuire",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5000¥*",
      "EFFETS": "Armure +1. Note : incompatible avec d'autres atouts augmentant l'armure."
    },
    {
      "Atout": "Esprit d'équipe",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5000¥*",
      "EFFETS": "Permet de dépenser des points d'Anarchy pour un autre joueur lorsque vous l'aidez ou l'encouragez."
    },
    {
      "Atout": "Empathie animale",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000¥*",
      "EFFETS": "RR 1 Influence (animaux)"
    },
    {
      "Atout": "Endurance à la douleur",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5000¥*",
      "EFFETS": "Permet d'ignorer les modificateurs de blessures légères."
    },
    {
      "Atout": "Esprit analytique",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Permet d'obtenir un avantage sur les tests de Logique lorsqu'il s'agit d'analyser des indices, un schéma qui se répète, ou trouver une solution à une énigme. Note : peut aussi être l'objet d'un comportement plutôt qu'être un trait."
    },
    {
      "Atout": "Gremlins",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Les commlink plantent, les armes s'enraillent, les systèmes électriques disjonctent… Que le personnage soit un manche pour utiliser la technologie ou qu'il n'ait jamais de chance, cela lui arrive tout le temps. Peut récupérer un point d'Anarchy lorsque cela arrive au mauvais moment. Peut dépenser un point d'Anarchy pour que cela se produise au bon moment. Note : peut aussi être l'objet d'un comportement ou d'une citation plutôt qu'être un trait."
    },
    {
      "Atout": "Guérison rapide",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Divise le temps de guérison naturel par 2 en échange d'un point d'Anarchy."
    },
    {
      "Atout": "Gun fu",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000¥*",
      "EFFETS": "Le personnage a appris à maitriser un art martial dédié à l'utilisation d'arme à feu lors d'un combat rapproché (Close-Quarters Combat, Firefight, Okichitaw, Gun kata) : RR 1 Combat rapproché (armes à feu). En cas d'attaque à mains nues réussit, peut choisir d'utiliser un point d'Anarchy pour désarmer et récupérer l'arme de l'adversaire plutôt que d'infliger des dégâts."
    },
    {
      "Atout": "Lecture rapide",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Avec cet atout, le personnage est capable de lire une page entière en une poignée de seconde."
    },
    {
      "Atout": "Lecture sur les lèvres",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Permet… de lire sur les lèvres en échange d'un point d'Anarchy."
    },
    {
      "Atout": "Lost in translation",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Le personnage ne parle pas très bien la langue locale et/ou ne comprend pas la culture locale. La plupart du temps il se débrouille, mais parfois il comprend ou fait les choses de travers ou utilise le mot qu'il ne faut pas… Peut récupérer un point d'Anarchy lorsqu'un malentendu est source de problèmes. Note : peut aussi être l'objet d'un comportement ou d'une citation plutôt qu'être un trait."
    },
    {
      "Atout": "Loyauté envers une Corpo",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Permet au personnage d'obtenir un avantage en échange d'un point d'Anarchy lorsqu'il utilise un appareil de sa marque favorite. Note : peut aussi être l'objet d'un comportement plutôt qu'être un trait."
    },
    {
      "Atout": "Monsieur Tout-le-Monde",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Rien ne permet de distinguer le personnage du commun des mortels et il est donc plus difficile de se souvenir de lui ou de l'identifier."
    },
    {
      "Atout": "Mémoire photographique",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Le personnage se souvient de ce qu'il voit dans les moindres détails."
    },
    {
      "Atout": "Négociateur de poids",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "25000¥*",
      "EFFETS": "RR 1 Influence."
    },
    {
      "Atout": "Ninjutsu",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "10000¥*",
      "EFFETS": "Le personnage a appris à maitriser l'art du ninjutsu. RR 1 Furtivité (discrétion physique). RR 1 Armes à distance (armes de jet)"
    },
    {
      "Atout": "Œil de lynx",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000¥*",
      "EFFETS": "RR 1 Perception (physique), incompatible avec des yeux cyber."
    },
    {
      "Atout": "Os de verre",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Permet de récupérer un point d'Anarchy en échange d'une blessure légère lorsque le personnage doit résister à des dégâts (que ceux-ci génèrent ou non une blessure)."
    },
    {
      "Atout": "Pilote de course",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Permet d'obtenir un avantage en échange d'un point d'Anarchy lorsque le personnage tente d'aller plus vite qu'un opposant, pour faire la course ou semer quelqu'un par la vitesse. Note : peut aussi être l'objet d'un comportement plutôt qu'être un trait."
    },
    {
      "Atout": "Pilote de course de rue",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20000¥*",
      "EFFETS": "RR 2 Pilotage (voitures)."
    },
    {
      "Atout": "Pilote d'élite",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "25000¥*",
      "EFFETS": "RR 1 Pilotage."
    },
    {
      "Atout": "Première impression",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20000¥*",
      "EFFETS": "RR 1 Influence lors de la première interaction avec un personnage."
    },
    {
      "Atout": "Proches influents",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20000¥*",
      "EFFETS": "RR 2 Réseau (milieu au choix)"
    },
    {
      "Atout": "Profiler",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Le personnage peut faire un test d'Electronique (recherche matricielle) + Charisme ou d'Influence (psychologie) + Charisme selon le contexte pour établir le profil d'une personne et ainsi apprendre un de ses comportement et/ou pouvoir bénéficier d'un Avantage sur n'importe quel test d'Influence concernant cette personne contre un point d'Anarchy."
    },
    {
      "Atout": "Rage de vivre",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Permet à un personnage Incapacité de faire un test de Survie pour se stabiliser de lui-même en échange d'un point d'Anarchy."
    },
    {
      "Atout": "Réflexes éclairs",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000¥*",
      "EFFETS": "+1 point d'Anarchy par scène d'action, actions supplémentaires illimitées en échange de points d'Anarchy."
    },
    {
      "Atout": "Renfort neuronal",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5000¥*",
      "EFFETS": "Armure matricielle +1 (n'oubliez pas que vous ne pouvez pas la cumuler avec un autre atout offrant de l'armure matricielle)"
    },
    {
      "Atout": "Réputation online",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20000¥*",
      "EFFETS": "Que le personnage soit un célèbre blogueur, un joueur de jeux simsens reconnu ou autre chose, son icône matricielle est connue. RR 1 Influence lorsque le personnage interagit en ligne"
    },
    {
      "Atout": "Résistance à la magie",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000¥*",
      "EFFETS": "Le seuil des sorts ou pouvoirs magiques qui ciblent le personnage est augmenté de 1."
    },
    {
      "Atout": "SINner",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Le personnage possède une SIN officielle. Parfois c'est un avantage qui peut ouvrir des portes (contre la dépense d'un point d'Anarchy), parfois être fiché et connu des systèmes est un handicape (qui permet de récupérer un point d'Anarchy)."
    },
    {
      "Atout": "Swing parfait",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000¥*",
      "EFFETS": "Le personnage est le genre de batteur capable de frapper des home runs sur commande. RR 1 Combat rapproché (armes contondantes)"
    },
    {
      "Atout": "Tête brûlée",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5000¥*",
      "EFFETS": "RR 1 Pilotage (manœuvre risquée), doit prendre au minimum un risque fort sur l'action."
    },
    {
      "Atout": "Tolérance au cyberware",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000¥*",
      "EFFETS": "Le dernier point d'essence du personnage compte double, il peut donc bénéficier d'un implant supplémentaire sans mourir, mais cela ne change rien aux malus liés à la perte d'essence."
    },
    {
      "Atout": "Tripes",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000¥*",
      "EFFETS": "RR 1 Survie (sang-froid)"
    },
    {
      "Atout": "Vertiges RA",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Le personnage supporte mal la RA. Lorsqu'il y a trop d'information affichée dans l'environnement RA du personnage, celui-ci finit par être sujet à des nausées et des vertiges. Il subit alors un désavantage à ses actions tant qu'il ne prend pas le temps de soufflé en coupant son Environnement RA, mais récupère un point d'Anarchy en échange."
    },
    {
      "Atout": "Vision nocturne",
      "COUT_Atout": "Atout 0",
      "COUT_Yen": "0¥*",
      "EFFETS": "Le personnage est capable de voir à la manière d'un elfe dans la pénombre."
    },
    {
      "Atout": "Yeong-mu",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000¥*",
      "EFFETS": "Le personnage maitrise les principes du Yeong-mu, art martial mystique coréen utilisé dans l'espace astral : RR 1 Combat rapproché (combat astral)"
    }
    ]
  },
  "20_sorts_illusion": {
    "nom": "20. SORTS D’ILLUSION",
    "total": 11,
    "donnees": [
    {
      "Atout": "Altération astrale",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Modifie la façon dont l’aura d’un sort maintenu apparait dans l’astral de façon à la camoufler.",
      "Pré_requis": "Eveille",
      "Type": "altération, Concentration",
      "Seuil": "Succès excédentaires du sort à masquer"
    },
    {
      "Atout": "Chimère",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Crée une illusion multisensorielle à un emplacement donné.",
      "Pré_requis": "Eveille",
      "Type": "altération, Concentration",
      "Seuil": "Selon taille"
    },
    {
      "Atout": "Invisibilité",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "La cible devient invisible.",
      "Pré_requis": "Eveille",
      "Type": "altération, Concentration",
      "Seuil": "Selon taille"
    },
    {
      "Atout": "Masque",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "La cible change d’apparence, tout en restant sensiblement de même taille.",
      "Pré_requis": "Eveille",
      "Type": "altération, Concentration",
      "Seuil": "Selon taille"
    },
    {
      "Atout": "Masque astral",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Modifie la façon dont l’aura d’un personnage apparait dans l’astral de façon à masquer une perte d’essence, à le faire passer pour un mundane ou au contraire pour un puissant magicien.",
      "Pré_requis": "Eveille",
      "Type": "altération, Concentration",
      "Seuil": "Selon taille"
    },
    {
      "Atout": "Silence",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "La cible devient inaudible.",
      "Pré_requis": "Eveille",
      "Type": "altération, Concentration",
      "Seuil": "Selon taille"
    },
    {
      "Atout": "Agonie",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Agit exactement de la même façon qu’un éclair mana (VD 0, voir sorts de combat). La cible ressent une profonde douleur et coche des cases de blessures normalement. Si elle est incapacité, elle reste consciente, mais ne peut plus agir sous la douleur. Tous les effets et cases cochées disparaissent dès que le sort n’est plus maintenu. Si la cible se doute que ses douleurs sont illusoires, elle peut tenter d’annuler ses effets par un test de Perception + Logique comme décrit dans les règles sur les sorts d’illusion.",
      "Pré_requis": "Eveille",
      "Type": "psycho, Concentration",
      "Seuil": "Selon aire d'effet"
    },
    {
      "Atout": "Confusion / Cécité / Puanteur",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Les cibles dans l’aire d’effet sont affectées si les succès nets sont au moins égaux à leur (Volonté + Logique), auquel cas elles subissent un désavantage à tous leurs tests.",
      "Pré_requis": "Eveille",
      "Type": "psycho, Concentration",
      "Seuil": "Selon aire d'effet"
    },
    {
      "Atout": "Fantasme",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Les cibles affectées perçoivent une scène multisensorielle réaliste.",
      "Pré_requis": "Eveille",
      "Type": "psycho, Concentration",
      "Seuil": "Selon aire d'effet"
    },
    {
      "Atout": "Patate chaude",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Les cibles dans l’aire d’effet sont affectées si les succès nets sont au moins égaux à leur (Volonté + Logique) Les cibles affectées ont la sensation que ce qu’elles tiennent est soudainement devenu brûlant ce qui les oblige à lâcher prise. Un personnage peut décider de conserver l’objet en main en dépensant un point d’Anarchy. Il subit toutefois un désavantage à ces actions tant qu’il tient l’objet et que le sort est maintenu.",
      "Pré_requis": "Eveille",
      "Type": "psycho, Concentration",
      "Seuil": "Selon aire d'effet"
    },
    {
      "Atout": "Songe",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Manipule le rêve d’une personne endormie. Ce sort est inoffensif, mais peut empêcher quelqu’un de se reposer suffisamment pour guérir d’une blessure si le mage lui envoie des cauchemars. À son réveil, la cible se souvient parfaitement de son rêve",
      "Pré_requis": "Eveille",
      "Type": "psycho, Concentration",
      "Seuil": "Vol + Log -2"
    }
    ]
  },
  "21_sorts_manipulation": {
    "nom": "21. SORTS DE MANIPULATION",
    "total": 25,
    "donnees": [
    {
      "Atout": "Armure",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Augmente l’Armure applicable aux attaques physiques de 1 par tranche entière de 3 succès.",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "3+"
    },
    {
      "Atout": "Armure astrale",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Augmente l’Armure applicable aux attaques magiques de 1 par tranche entière de 3 succès.",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "3+"
    },
    {
      "Atout": "Armure mystique",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Augmente l’Armure applicable aux attaques physiques et magiques de 1 par tranche entière de 4 succès.",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "4+"
    },
    {
      "Atout": "Aura élémentaire",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Inflige des dommages d’une VD égale aux succès à toute cible qui touche le personnage en combat rapproché.",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "0"
    },
    {
      "Atout": "Barrière",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Crée une barrière infranchissable dans le plan physique à moins de la détruire ou de la tromper. Les succès augmentent sa résistance.",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "Aire d'effet"
    },
    {
      "Atout": "Barrière astrale",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Crée une barrière infranchissable dans le plan astral à moins de la détruire ou de la tromper. Les succès augmentent sa résistance.",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "Aire d'effet"
    },
    {
      "Atout": "Barrière duale",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Crée une barrière infranchissable dans les plans physique et astraux à moins de la détruire ou de la tromper. Les succès augmentent sa résistance.",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "Aire +2"
    },
    {
      "Atout": "Brouillage",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Génère des interférences similaires aux effets d’un brouilleur et impose du bruit aux hackers qui se trouvent dans sa zone d’effet.",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "Aire d'effet"
    },
    {
      "Atout": "Brume",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de créer un épais brouillard pouvant générer un désavantage lié à la visibilité. Portée : champs de vision.",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "Aire d'effet"
    },
    {
      "Atout": "Couche de glace",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Créer une fine couche de glace. Les personnages qui la traversent doivent réussir un test d’Athlétisme (course) + Agilité contre un seuil égal au nombre de succès nets du sort pour éviter de perdre l’équilibre et tomber. Portée : champs de vision.",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "Aire d'effet"
    },
    {
      "Atout": "Doigts télékinétiques",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de réaliser des manipulations simples à distance. Portée : champs de vision.",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "3"
    },
    {
      "Atout": "Façonnage",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de changer la forme d’un matériau, par exemple, pour y créer une ouverture ou former un couvert. Le seuil de base dépend du matériau : • 2 : matériau naturel (bois, pierre) • 4 : matériau simple (béton, plastique) • 6 : haute technologie (plastobéton)",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "Aire + matériau"
    },
    {
      "Atout": "Ignition",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de chauffer les matériaux d’une zone jusqu’à les enflammer. Lorsqu’un matériau a pris feu, il continue de brûler naturellement. Le temps que doit être maintenu le sort pour que les matériaux s’enflamment dépend de ceux-ci : • 2 tours : matériaux naturels (bois, pierre) • 4 tours : matériaux simples (béton, plastique) • 6 tours : haute technologie (plastobéton) Portée : champs de vision.",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "Aire +3"
    },
    {
      "Atout": "Lianes",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet d’animer les végétaux d’une zone de façon à ce qu’ils attrapent et d’immobilisent tout ce qui s’y déplace. Un personnage qui se déplace dans la zone doit réussir un test d’Athlétisme + Agilité ou de Combat rapproché + Agilité (suivant la façon de s’y prendre) contre un seuil égal au nombre de succès nets du sort ou être immobilisé. Un personnage immobilisé peut tenter de se libérer une fois par tour en réussissant un test de Combat rapproché + Force contre les succès nets du sort. Ce test subit un désavantage du fait que le personnage est déjà immobilisé. Portée : champs de vision.",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "Aire d'effet"
    },
    {
      "Atout": "Lumière",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de créer un point de lumière mobile capable d’éclairer une petite zone. Il ne peut pas aveugler, mais peut permettre d’éviter un désavantage lié au manque de luminosité. Portée : champs de vision.",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "Aire d'effet"
    },
    {
      "Atout": "Lévitation",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de faire léviter la cible à moins d’un mètre du sol et de la déplacer à vitesse de marche. Portée : champs de vision.",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "Selon taille"
    },
    {
      "Atout": "Mode",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de redonner une seconde vie aux vêtements ciblés sans avoir besoin de les rafistoler ou de passer au pressing. Ce sort permet également d’ajuster la coupe, modifier la couleur ou les motifs des vêtements. Le poids, la protection, le volume ou le type de tissu ne peut pas être modifié de cette façon.",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "3"
    },
    {
      "Atout": "Poltergeist",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Soulève et fait virevolter tous les objets de petite taille se trouvant dans une zone se trouvant dans le champ de vision du magicien. Suivant le nombre d’objets, le MJ peut décider d’imposer un désavantage aux actions réalisé dans ou à travers la zone affectée. Il peut aussi décider que le sort agit comme un sort d’attaque de VD 2 (augmenté normalement par les succès nets du lancement de sort) sur tous les personnages se trouvant dans ou traversant la zone. Ces dégâts sont étourdissants, sauf si les objets présents semblent particulièrement dangereux (couteaux, éclats de verre, etc.). Portée : champs de vision.",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "Aire d'effet"
    },
    {
      "Atout": "Projectile",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Projette avec force un objet contre une cible dans le but de la blesser. Le seuil est basé sur la distance qui sépare l’objet projeté du magicien. Seuil 1 s’il est à portée contact, 2 s’il est à portée courte, 3 à portée longue et 4 à portée extrême. Les succès nets sont utilisés pour augmenter la VD, comme pour une attaque normale. Si la cible est à portée longue par rapport à l’objet projeté, le sort subit un désavantage. Il n’est pas possible d’atteindre une cible qui se trouve à portée extrême de l’objet lancer. Si l’objet lancé est une arme, les dégâts sont ceux de l’arme, la Force étant ici remplacée par la Volonté du magicien. Si l’objet lancé n’est pas une arme, sa VD de base sera de Vol -2. Si l’objet lancé est une grenade et que celle-ci peut être déclenchée sur commande ce sont ses dégâts normaux qui s’appliquent.",
      "Pré_requis": "Eveille",
      "Type": "physique, Instantané",
      "Seuil": "Distance objet"
    },
    {
      "Atout": "Récupération",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Ce sort permet d’attraper rapidement un objet non tenu ou attaché dans sa main. Le seuil de base est de 0 et augmente de +1 tous les 2kg de poids ramené et de +1 pour chaque mètre complet parcourut. Une arme de 2kg à 3m de distance correspond ainsi à un seuil 4.",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "0 +1/2kg +1/m"
    },
    {
      "Atout": "Ténèbres",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Permet de créer une sphère d’obscurité pouvant générer un désavantage lié à la visibilité. Portée : champs de vision.",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "Aire d'effet"
    },
    {
      "Atout": "Tentacules",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Ce sort, aussi appelé hentai dans le milieu, permet de faire sortir des tentacules d’une étendue d’eau. Celles-ci tentent d’attraper et d’immobiliser tous ceux qui se déplacent dans la zone du sort. Un personnage qui se déplacerait dans la zone devrait réussir un test d’Athlétisme + Agilité ou de Combat rapproché + Agilité (suivant la façon de s’y prendre) contre un seuil égal au nombre de succès nets du lancement de sort ou être immobilisé. Un personnage immobilisé peut tenter de se libérer une fois par tour en réussissant un test de Combat rapproché + Force contre les succès nets du sort. Ce test subit un désavantage du fait que le personnage est déjà immobilisé. Portée : champs de vision.",
      "Pré_requis": "Eveille",
      "Type": "physique, Concentration",
      "Seuil": "Aire d'effet"
    },
    {
      "Atout": "Altération mémorielle",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Les cibles dans l’aire d’effet sont affectées si les succès nets sont au moins égaux à leur (Volonté + Logique), auquel cas un de leur souvenir est altéré. Une cible peut tenter un test de Perception + Logique contre un seuil égale au nombre de succès nets obtenus lors du lancement de sorts pour se rendre compte de la fausseté du souvenir chaque fois qu’il y est confronté. En cas de succès elle retrouve ses véritables souvenirs.",
      "Pré_requis": "Eveille",
      "Type": "mentale, Instantané",
      "Seuil": "Aire d'effet"
    },
    {
      "Atout": "Contrôle des actes",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Les cibles dans l’aire d’effet sont affectées si les succès nets sont au moins égaux à leur (Volonté + Logique), auquel cas leurs corps (mais pas leur esprit) répond aux ordres du magicien comme à un marionnettiste. Le magicien peut dès lors agir à la place d’une des cibles (ou faire faire la même action à toutes les cibles), cela consomme l’action du magicien. Toute action physique entreprise par les cibles subit un désavantage en raison de la résistance du sujet. Les cibles sont conscientes de ce qui se passe, mais ne peuvent rien y faire (une fois par tour, le MJ pourrait autoriser la dépense d’un point d’Anarchy pour tenter de se défaire du sort via un test de Survie (sang-froid) + Volonté, chaque succès annulant un succès excédentaire obtenu par le magicien lors du lancement de sort.",
      "Pré_requis": "Eveille",
      "Type": "mentale, Concentration",
      "Seuil": "Aire d'effet"
    },
    {
      "Atout": "Contrôle des pensées",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Les cibles dans l’aire d’effet sont affectées si les succès nets sont au moins égaux à leur (Volonté + Logique), auquel cas elles subissent un désavantage à tous leurs tests sociaux et agissent dans le sens de la suggestion implantée dans leur esprit par le magicien. Les cibles ne sont pas conscientes d’être la cible d’un sort et agissent par elles-mêmes, mais une fois le sort relâché, elles peuvent tenter un test de Survie (sang-froid) + Logique pour se rendre compte d’avoir été manipulé. Le seuil dépend de la différence entre les pensées et émotions normales de la cible et celles qu’elle a eues ou ressenties pendant qu’elle était contrôlée.",
      "Pré_requis": "Eveille",
      "Type": "mentale, Concentration",
      "Seuil": "Aire d'effet"
    }
    ]
  },
  "22_deux_roues": {
    "nom": "22. DEUX ROUES",
    "total": 10,
    "donnees": [
    {
      "Atout": "Ares-Segway Terrier (Segway)",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Autopilote 6, Structure 2, Maniabilité 1, Vitesse 1, Blindage 0"
    },
    {
      "Atout": "Dodge Scoot (Scooter)",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "Autopilote 6, Structure 3, Maniabilité 1, Vitesse 2, Blindage 0"
    },
    {
      "Atout": "Suzuki Mirage / Yamaha Rapier / Evo-Echo Motors Stiletto / Aprilia RST (Moto de course)",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Autopilote 6, Structure 4, Maniabilité 2, Vitesse 6, Blindage 0"
    },
    {
      "Atout": "Horizon-Doble Revolution (Moto de course monoroue)",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Autopilote 6, Structure 5, Maniabilité 2, Vitesse 6, Blindage 0"
    },
    {
      "Atout": "Yamaha Kaburaya (Moto de course)",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20 000¥",
      "EFFETS": "Autopilote 6, Structure 4, Maniabilité 2, Vitesse 8, Blindage 0\nGyrostabilisateur Yamaha"
    },
    {
      "Atout": "Yamaha Growler (Moto tout-terrain)",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Autopilote 6, Structure 4, Maniabilité 3, Vitesse 5, Blindage 0"
    },
    {
      "Atout": "BMW Trollhammer / Harley-Davidson Scorpion (Chopper)",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Autopilote 6, Structure 5, Maniabilité 2, Vitesse 5, Blindage 0"
    },
    {
      "Atout": "Yamaha Nodachi (Chopper)",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "Autopilote 6, Structure 5, Maniabilité 2, Vitesse 6, Blindage 0\nGyrostabilisateur Yamaha"
    },
    {
      "Atout": "BMW Blitzen (Chopper)",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20 000¥",
      "EFFETS": "Autopilote 6, Structure 5, Maniabilité 2, Vitesse 6, Blindage 2"
    },
    {
      "Atout": "Harley-Davidson Centaur (Moto de combat)",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20 000¥",
      "EFFETS": "Autopilote 6, Structure 5, Maniabilité 2, Vitesse 5, Blindage 3"
    }
    ]
  },
  "23_voitures": {
    "nom": "23. VOITURES",
    "total": 11,
    "donnees": [
    {
      "Atout": "Ferrari Diabolus (Voiture de sport)",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Autopilote 6, Structure 5, Maniabilité 2, Vitesse 5, Blindage 0"
    },
    {
      "Atout": "Eurocar Westwind X80 (Voiture de sport)",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Autopilote 6, Structure 5, Maniabilité 2, Vitesse 6, Blindage 0"
    },
    {
      "Atout": "Saab Dynamite 778TI (Voiture de sport)",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "Autopilote 6, Structure 5, Maniabilité 2, Vitesse 7, Blindage 0"
    },
    {
      "Atout": "Ford Americar / Mercury Comet / Honda Citizen (Berline)",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Autopilote 6, Structure 6, Maniabilité 2, Vitesse 4, Blindage 0"
    },
    {
      "Atout": "Hyundai Shin-hyun / Ford Dasher (Berline)",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Autopilote 6, Structure 6, Maniabilité 2, Vitesse 5, Blindage 0"
    },
    {
      "Atout": "Chrysler-Nissan Patrol (Voiture de patrouille)",
      "COUT_Atout": "Atout 8",
      "COUT_Yen": "40 000¥",
      "EFFETS": "Autopilote 6, Structure 6, Maniabilité 2, Vitesse 5, Blindage 4\nRack pour drone\nLanceur de herse"
    },
    {
      "Atout": "Ford Dasher Interceptor (Voiture de patrouille)",
      "COUT_Atout": "Atout 8",
      "COUT_Yen": "40 000¥",
      "EFFETS": "Autopilote 6, Structure 6, Maniabilité 2, Vitesse 6, Blindage 3\nRack pour drone\nBélier"
    },
    {
      "Atout": "Tata Hotspur (Voiture de course tout-terrain)",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "25 000¥",
      "EFFETS": "Autopilote 6, Structure 7, Maniabilité 3, Vitesse 5, Blindage 0\nPneus et réglages tout-terrain."
    },
    {
      "Atout": "Mitsubishi Nightsky (Limousine)",
      "COUT_Atout": "Atout 9",
      "COUT_Yen": "45 000¥",
      "EFFETS": "Autopilote 6, Structure 7, Maniabilité 2, Vitesse 4, Blindage 5\nRR 1 Influence (en présence de la voiture)"
    },
    {
      "Atout": "Range Rover 2080 / Toyota Gopher / Ares Humvee (SUV / Pick-up)",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Autopilote 6, Structure 7, Maniabilité 1, Vitesse 4, Blindage 0"
    },
    {
      "Atout": "Eurocar Northstar 2.0 (SUV)",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Autopilote 6, Structure 7, Maniabilité 1, Vitesse 5, Blindage 0"
    }
    ]
  },
  "24_vehicules_divers": {
    "nom": "24. VÉHICULES DIVERS",
    "total": 10,
    "donnees": [
    {
      "Atout": "GMC-Bulldog Step-van / Renault-Fiat Eurovan (Van)",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Autopilote 6, Structure 8, Maniabilité 1, Vitesse 3, Blindage 0"
    },
    {
      "Atout": "Ford-Canada Bison III (Camping-car)",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Autopilote 6, Structure 8, Maniabilité 1, Vitesse 3, Blindage 0\nAménagements"
    },
    {
      "Atout": "Ares Roadmaster (Fourgon blindé)",
      "COUT_Atout": "Atout 10",
      "COUT_Yen": "50 000¥",
      "EFFETS": "Autopilote 6, Structure 8, Maniabilité 1, Vitesse 3, Blindage 8\nEnviroSeal™"
    },
    {
      "Atout": "Conestoga Vista (Bus)",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Autopilote 6, Structure 10, Maniabilité 0, Vitesse 2, Blindage 0"
    },
    {
      "Atout": "Scania VM 42 (Semi-remorque)",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Autopilote 6, Structure 10, Maniabilité 0, Vitesse 2, Blindage 0\nAménagements"
    },
    {
      "Atout": "Nordkapp Zugmaschine (Semi-remorque autonome)",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "Autopilote 6, Structure 12, Maniabilité 0, Vitesse 2, Blindage 0"
    },
    {
      "Atout": "SeaDoo Bolt (Jet-ski)",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Autopilote 6, Structure 5, Maniabilité 5, Vitesse 2, Blindage 0"
    },
    {
      "Atout": "Bateau pneumatique semi-rigide (Bateau)",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Autopilote 6, Structure 5, Maniabilité 4, Vitesse 3, Blindage 0"
    },
    {
      "Atout": "Aztech Nightrunner (Bateau)",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Autopilote 6, Structure 8, Maniabilité 2, Vitesse 2, Blindage 0"
    },
    {
      "Atout": "Artemis Industries Nightwing (Aile volante personnelle)",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20 000¥",
      "EFFETS": "Autopilote 6, Structure 3, Maniabilité 7, Vitesse 4, Blindage 0\nVolant\nRR 1 Furtivité (discrétion physique)"
    }
    ]
  },
  "25_microdrones": {
    "nom": "25. MICRODRONES",
    "total": 5,
    "donnees": [
    {
      "Atout": "Microdrone",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Autopilote 6, Structure 0, Maniabilité 10, Vitesse 0, Blindage 0\nAvantage en Furtivité (discrétion physique)\nAucune monture d'arme"
    },
    {
      "Atout": "Shiawase Kanmushi (Microdrone-arthropode)",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "Autopilote 8, Structure 0, Maniabilité 10, Vitesse 0, Blindage 0\nAvantage en Furtivité (discrétion physique)\nAucune monture d'arme"
    },
    {
      "Atout": "GMC Micromachine (Microdrone-jouet à roue)",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Autopilote 6, Structure 0, Maniabilité 10, Vitesse 1, Blindage 0\nAvantage en Furtivité (discrétion physique)\nAucune monture d'arme"
    },
    {
      "Atout": "Microdrone volant",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Autopilote 6, Structure 0, Maniabilité 10, Vitesse 1, Blindage 0\nAvantage en Furtivité (discrétion physique)\nAucune monture d'arme\nVolant"
    },
    {
      "Atout": "MCT Gnat / MCT Fly-Spy (Microdrone volant-insectoïde ailé)",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20 000¥",
      "EFFETS": "Autopilote 6, Structure 0, Maniabilité 10, Vitesse 1, Blindage 0\nAvantage en Furtivité (discrétion physique)\nAucune monture d'arme\nVolant\nRR 1 Furtivité (discrétion physique)"
    }
    ]
  },
  "26_minidrones": {
    "nom": "26. MINIDRONES",
    "total": 5,
    "donnees": [
    {
      "Atout": "Minidrone",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Autopilote 6, Structure 1, Maniabilité 10, Vitesse 1, Blindage 0\nMonture d'arme pour pistolet petit calibre (non compris)"
    },
    {
      "Atout": "Minidrone volant",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Autopilote 6, Structure 1, Maniabilité 10, Vitesse 2, Blindage 0\nVolant\nMonture d'arme pour pistolet petit calibre (non compris)"
    },
    {
      "Atout": "Horizon Flying Eye (Minidrone volant-à rotors)",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Autopilote 6, Structure 1, Maniabilité 10, Vitesse 2, Blindage 0\nVolant\nPeut emporter une grenade de n'importe quel type, détruit le drone à l'activation (Coût de la grenade non inclus)"
    },
    {
      "Atout": "MCT Hornet (Minidrone-insectoïde ailé)",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20 000¥",
      "EFFETS": "Autopilote 6, Structure 1, Maniabilité 10, Vitesse 2, Blindage 0\nVolant\nPeut emporter une dose de toxine qu'il peut injecter au contact (Coût de la toxine non inclus)\nRR 1 Furtivité (discrétion physique)"
    },
    {
      "Atout": "Cyberspace Designs Dragonfly-Alpha (Minidrone-insectoïde ailé)",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "17 500¥",
      "EFFETS": "Autopilote 6, Structure 1, Maniabilité 10, Vitesse 2, Blindage 0\nVolant\nBélier (bec à monofilament)\nPistolet lourd intégré (coût inclus)"
    }
    ]
  },
  "27_petits_drones": {
    "nom": "27. PETITS DRONES",
    "total": 7,
    "donnees": [
    {
      "Atout": "Petit drone",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Autopilote 6, Structure 1, Maniabilité 9, Vitesse 2, Blindage 0\nMonture d'arme pour mitraillette ou plus petit (non compris)"
    },
    {
      "Atout": "Chrysler-Nissan Pursuit V (Petit drone-à roues)",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20 000¥",
      "EFFETS": "Autopilote 6, Structure 1, Maniabilité 9, Vitesse 5, Blindage 0\nMonture d'arme pour mitraillette ou plus petit (non compris)"
    },
    {
      "Atout": "Evo Proletarian III (Petit drone-à roue)",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Autopilote 6, Structure 1, Maniabilité 9, Vitesse 2, Blindage 0\nBras robotique"
    },
    {
      "Atout": "Petit drone volant",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Autopilote 6, Structure 1, Maniabilité 9, Vitesse 4, Blindage 0\nVolant\nMonture d'arme pour mitraillette ou plus petit (non compris)"
    },
    {
      "Atout": "Cyberspace Design Halo (Petit drone volant-à rotors)",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20 000¥",
      "EFFETS": "Drone caméra\nAutopilote 6, Structure 1, Maniabilité 9, Vitesse 4, Blindage 0\nVolant\nBatterie de senseurs\nECCM"
    },
    {
      "Atout": "Cyberspace Design Quadrotor (Petit drone volant – à rotors)",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20 000¥",
      "EFFETS": "Autopilote 6, Structure 1, Maniabilité 9, Vitesse 4, Blindage 0\nVolant\nMonture d'arme pour mitraillette (non compris)\nRR 1 Perception (physique)"
    },
    {
      "Atout": "Lockheed Optic-X2 (Petit drone volant - ailé)",
      "COUT_Atout": "Atout 6",
      "COUT_Yen": "30 000¥",
      "EFFETS": "Autopilote 6, Structure 1, Maniabilité 9, Vitesse 4, Blindage 0\nVolant\nMonture d'arme pour mitraillette (non compris)\nRR 1 Furtivité (discrétion physique)\nRR 1 Perception (physique)"
    }
    ]
  },
  "28_drones_moyens": {
    "nom": "28. DRONES MOYENS",
    "total": 7,
    "donnees": [
    {
      "Atout": "Drone moyen",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Autopilote 6, Structure 2, Maniabilité 7, Vitesse 3, Blindage 0\nFusil ou plus petit (non compris)"
    },
    {
      "Atout": "Ares-DocWagon First Responder (Drone moyen - chenillé)",
      "COUT_Atout": "Atout 9",
      "COUT_Yen": "45 000¥",
      "EFFETS": "Autopilote 10, Structure 2, Maniabilité 7, Vitesse 3, Blindage 2\nBras articulé\nModule Valkyrie (médikit autonome)"
    },
    {
      "Atout": "GM-Nissan Doberman (Drone moyen - chenillé)",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20 000¥",
      "EFFETS": "Autopilote 6, Structure 2, Maniabilité 7, Vitesse 3, Blindage 2\nMonture d'arme sur tourelle pour fusil ou plus petit (non compris)"
    },
    {
      "Atout": "Système Sentry (Drone moyen - fixe)",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Autopilote 8\nFixe\nFusil ou plus petit (non compris)"
    },
    {
      "Atout": "Drone moyen volant",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Autopilote 6, Structure 2, Maniabilité 7, Vitesse 6, Blindage 0\nVolant\nFusil ou plus petit (non compris)"
    },
    {
      "Atout": "Federated-Boeing Sky commander (Drone moyen volant – à réaction)",
      "COUT_Atout": "Atout 10",
      "COUT_Yen": "50 000¥",
      "EFFETS": "Autopilote 6, Structure 1, Maniabilité 8, Vitesse 6, Blindage 0\nVolant - ailes à géométrie variable\nFragile, mais maniable : Structure -1, Maniabilité +1\nECM\nECCM\nFurtif : RR 1 Furtivité (discrétion physique)\nSenseur NTech RR 1 Perception (physique) et vision nocturne, thermo et ultrason"
    },
    {
      "Atout": "MCT-Nissan Roto-drone (Drone moyen volant – à rotors)",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "25 000¥",
      "EFFETS": "Autopilote 6, Structure 2, Maniabilité 7, Vitesse 6, Blindage 2\nVolant\n2 montures d'arme pour fusil ou plus petit (non compris)"
    }
    ]
  },
  "29_grands_drones": {
    "nom": "29. GRANDS DRONES",
    "total": 4,
    "donnees": [
    {
      "Atout": "Grand drone",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Autopilote 6, Structure 4, Maniabilité 4, Vitesse 4, Blindage 0\nTout type d'arme (non compris)"
    },
    {
      "Atout": "Steel Lynx (Grand drone – à roues montées sur pattes)",
      "COUT_Atout": "Atout 7",
      "COUT_Yen": "35 000¥",
      "EFFETS": "Autopilote 6, Structure 4, Maniabilité 4, Vitesse 4, Blindage 4\nTourelle accueillant 2 montures d'armes (non compris)"
    },
    {
      "Atout": "Grand drone volant",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Autopilote 6, Structure 4, Maniabilité 4, Vitesse 8, Blindage 0\nVolant\nTout type d'arme (non compris)"
    },
    {
      "Atout": "Hawker-Siddley Thunderbolt (Grand drone volant – hélicoptère)",
      "COUT_Atout": "Atout 20",
      "COUT_Yen": "125 000¥",
      "EFFETS": "Autopilote 8, Structure 4, Maniabilité 4, Vitesse 8, Blindage 4\nVolant\nECCM\nADAV\nBatterie de senseur NTech\nTourelle avec mitrailleuse lourde (coût inclus)\nQuatre lance-roquettes (coût inclus)"
    }
    ]
  },
  "2_cephaloware": {
    "nom": "2. CEPHALOWARE",
    "total": 14,
    "donnees": [
    {
      "Atout": "Datajack",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Interface neurale directe. RV cold-sim",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Datajack débridé",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20 000¥",
      "EFFETS": "Interface neurale directe. RV cold-sim ou hot-sim",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Datajack de contrefaçon",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Interface neurale directe. RV Hot-sim limités aux BTL",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Cyberjack MCT Decker-Pro",
      "COUT_Atout": "Atout 7",
      "COUT_Yen": "35 000¥",
      "EFFETS": "Interface neurale directe. RV cold-sim ou hot-sim. +1 point d'Anarchy par scène en RV. +1 action par narration en RV, pas de limite au nombre d'actions supplémentaires par tour en RV",
      "Perte_essence": "-1"
    },
    {
      "Atout": "CCV Shiawase Neo-Rigger",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20 000¥",
      "EFFETS": "Interface neurale directe. RV cold-sim. Permet de plonger dans les véhicules",
      "Perte_essence": "-1"
    },
    {
      "Atout": "CCV Ares FeelTheRide",
      "COUT_Atout": "Atout 6",
      "COUT_Yen": "30 000¥",
      "EFFETS": "Interface neurale directe. RV cold-sim ou hot-sim. Permet de plonger dans les véhicules",
      "Perte_essence": "-1"
    },
    {
      "Atout": "CCV Dassault MilRig+",
      "COUT_Atout": "Atout 9",
      "COUT_Yen": "45 000¥",
      "EFFETS": "Interface neurale directe. RV cold-sim ou hot-sim. Permet de plonger dans les véhicules. +1 point d'Anarchy par scène en plongée. +1 action par narration en plongée, pas de limite au nombre d'actions supplémentaires par tour en plongée",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Commlink implanté",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "17 500¥",
      "EFFETS": "Interface neurale directe. RV cold-sim. Commlink",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Coprocesseur cortical",
      "COUT_Atout": "Atout 11",
      "COUT_Yen": "55 000¥",
      "EFFETS": "RR 1 Logique",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Mémoire cybernétique Samyung",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Mémoire cybernétique MCT",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Mémoire crypté avec datalock",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Processeur d'analyse empathique",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "RR 1 Perception (sociale)",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Processeur mathématique",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "RR 1 Piratage (force brute)",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Système d'orientation Renraku Navi",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "RR 1 Survie (orientation)",
      "Perte_essence": "-1"
    }
    ]
  },
  "30_drones_anthropomorphes": {
    "nom": "30. DRONES ANTHROPOMORPHES",
    "total": 6,
    "donnees": [
    {
      "Atout": "MCT Bust-a-move (Petit drone anthropomorphe)",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "Autopilote 6, Force 1\nApparence anthropomorphe (taille ours en peluche)\nSeuil de dommages 1/4/7"
    },
    {
      "Atout": "Shiawase Butler / Renraku Manservant (Drone anthropomorphe moyen)",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Autopilote 6, Force 1\nApparence humanoïde (taille humaine)\nAssistant personnel (peut utiliser la compétence Electronique)\nSeuil de dommages 1/4/7"
    },
    {
      "Atout": "Ilshin anyDoll / Shiawase I-doll (Drone anthropomorphe moyen)",
      "COUT_Atout": "Atout 7",
      "COUT_Yen": "35 000¥",
      "EFFETS": "Autopilote 6, Force 2\nApparence humanoïde (taille humaine)\nBiomimétique (apparence réaliste)\nAssistant personnel (peut utiliser la compétence Electronique)\nAMI (peut utiliser la compétence Influence)\nSeuil de dommages 2/5/8"
    },
    {
      "Atout": "Shiawase Man-at-Arms / Vulcan System Centurion (Drone anthropomorphe moyen)",
      "COUT_Atout": "Atout 11",
      "COUT_Yen": "55 000¥",
      "EFFETS": "Autopilote 6, Force 3\nApparence humanoïde (taille humaine)\nPlaque de blindage léger (Armure 2 – incompatible avec les armures standards)\nAMI (peut utiliser la compétence Influence)\nTacSoft (peut utiliser les compétences Combat à distance et Combat rapproché – RR 1 Combat à distance (pistolet))\nSeuil de dommages 5/8/11"
    },
    {
      "Atout": "Nissan Samurai (Drone anthropomorphe moyen)",
      "COUT_Atout": "Atout 15",
      "COUT_Yen": "80 000¥",
      "EFFETS": "Autopilote 8, Force 3\nApparence humanoïde (taille humaine)\nPlaque de blindage lourd (Armure 4 – incompatible avec les armures standards)\nLames rétractables intégrées (coût inclus)\nMitraillette intégrée (coût inclus)\nTacSoft (peut utiliser les compétences Combat à distance et Combat rapproché)\nRR 1 Combat rapproché (lames)\nSeuil de dommages 7/10/13"
    },
    {
      "Atout": "MCT Kenchiku-Kikai / S-K Colossus (Grand drone anthropomorphe moyen)",
      "COUT_Atout": "Atout 18",
      "COUT_Yen": "90 000¥",
      "EFFETS": "Autopilote 6, Force 5\nApparence humanoïde (taille troll)\nConception robuste (permet d'opérer en environnements hostiles, +1 case de blessure grave)\nBras détachables (permet de brancher/débrancher des bras-outils)\nUtilitaire (peut utiliser la compétence Ingénierie)\nSeuil de dommages 5/8/11"
    }
    ]
  },
  "31_ccr": {
    "nom": "31. CCR (CONSOLES DE COMMANDE RIGGERS)",
    "total": 7,
    "donnees": [
    {
      "Atout": "MCT Drone Web",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "Permet de contrôler 2 drones en siège du capitaine\nFirewall 1"
    },
    {
      "Atout": "Easy Motors DroneMaster",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "17 500¥",
      "EFFETS": "Permet de contrôler 3 drones en siège du capitaine\nFirewall 1"
    },
    {
      "Atout": "Dassault Nuée",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "22 500¥",
      "EFFETS": "Permet de contrôler 3 drones en siège du capitaine\nFirewall 2"
    },
    {
      "Atout": "Horizon Overseer",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "27 500¥",
      "EFFETS": "Permet de contrôler 3 drones en siège du capitaine\nRR 1 Pilotage (spécialisation au choix)\nFirewall 1"
    },
    {
      "Atout": "Maersk Spider",
      "COUT_Atout": "Atout 7",
      "COUT_Yen": "37 500¥",
      "EFFETS": "Permet de contrôler 3 drones en siège du capitaine\nRR 1 Pilotage (spécialisation au choix)\nFirewall 3"
    },
    {
      "Atout": "Proteus Poseidon",
      "COUT_Atout": "Atout 8",
      "COUT_Yen": "42 500¥",
      "EFFETS": "Permet de contrôler 5 drones en siège du capitaine\nRR 1 Pilotage (spécialisation au choix)\nFirewall 2"
    },
    {
      "Atout": "Ares Red Dog Series",
      "COUT_Atout": "Atout 12",
      "COUT_Yen": "62 500¥",
      "EFFETS": "Permet de contrôler 5 drones en siège du capitaine\nRR 1 Pilotage\nFirewall 3"
    }
    ]
  },
  "3_cyberyeux": {
    "nom": "3. CYBERYEUX",
    "total": 8,
    "donnees": [
    {
      "Atout": "Cyberyeux standards",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5000",
      "EFFETS": "Interface visuelle avec caméra",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Cyberyeux L'Oréal Fashion Top",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000",
      "EFFETS": "Interface visuelle avec caméra. Iris et couleur personnalisable",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Cyberyeux Universal Omnitech ProView",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20000",
      "EFFETS": "Interface visuelle avec caméra. RR 1 Perception (physique). Vision nocturne",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Cyberyeux Universal Omnitech AbsoluteView",
      "COUT_Atout": "Atout 6",
      "COUT_Yen": "30000",
      "EFFETS": "Interface visuelle avec caméra. RR 2 Perception (physique). Vision thermographique",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Cyberyeux Ares ProShooter",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "25000",
      "EFFETS": "Interface visuelle avec caméra. RR 2 aux tests d'Armes à distance (pistolets)",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Cyberyeux Ares SharpShooter",
      "COUT_Atout": "Atout 9",
      "COUT_Yen": "45000",
      "EFFETS": "Interface visuelle avec caméra. RR 1 Armes à distance. RR 1 Armes à distance (fusils). Zoom",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Cyberyeux Evo EyeDrone",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "25000",
      "EFFETS": "Interface visuelle avec caméra. RR 1 Perception (physique). Microdrone oculaire (Autopilote 6, Structure 0, Maniabilité 10, Vitesse 0, Blindage 0, avantage en Furtivité (discrétion physique), aucune monture d'arme)",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Logiciel Antiflash Monobe",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "5000",
      "EFFETS": "Permet d'éviter d'être aveuglé",
      "Perte_essence": "-1"
    }
    ]
  },
  "4_cyberoreilles": {
    "nom": "4. CYBEROREILLES",
    "total": 5,
    "donnees": [
    {
      "Atout": "Cyberoreilles standards",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5000",
      "EFFETS": "Interface auditive avec micro. Apparence au choix",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Cyber-oreilles Evo Sound Balance",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15000",
      "EFFETS": "Interface auditive avec micro. Apparence au choix. Amélioration de l'oreille interne pour un meilleur équilibre : RR 1 Athlétisme (parkour)",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Cyberoreilles Universal Omnitech ProSound",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15000",
      "EFFETS": "Interface auditive avec micro. Apparence au choix. RR 1 Perception (physique)",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Cyberoreilles Universal Omnitech UltraSound",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20000",
      "EFFETS": "Interface auditive avec micro. Apparence au choix. RR 1 Perception (physique). Spectre auditif élargi",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Armure dermique",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000",
      "EFFETS": "Armure +1",
      "Perte_essence": "-1"
    }
    ]
  },
  "5_somatoware": {
    "nom": "5. SOMATOWARE",
    "total": 28,
    "donnees": [
    {
      "Atout": "Ossature renforcée en plastique",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20000",
      "EFFETS": "+1 case de blessure légère ajoutée au moniteur d'état.",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Ossature renforcée en aluminium",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "25000",
      "EFFETS": "+1 case de blessure légère ajoutée au moniteur d'état. VD à mains nues +1",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Ossature renforcée en titane",
      "COUT_Atout": "Atout 8",
      "COUT_Yen": "40000",
      "EFFETS": "+1 case de blessure grave ajoutée au moniteur d'état. VD à mains nues +1",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Substituts musculaires",
      "COUT_Atout": "Atout 6",
      "COUT_Yen": "30000",
      "EFFETS": "RR 1 Athlétisme",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Auto-injecteur",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5000",
      "EFFETS": "Permet d'injecter la drogue choisie d'une simple commande mentale (coût de la drogue non inclus)",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Auto-injecteur et biomoniteur",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "20000",
      "EFFETS": "Biomoniteur. Injecte automatiquement un stimpatch en cas de blessure grave, et un trauma patch en cas de blessure incapacitante (coût des patchs déjà inclus)",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Branchies cybernétiques",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000",
      "EFFETS": "Combiné à un réservoir d'air interne, permet de rester sous l'eau sans respirer.",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Câblage de compétence et logiciels de compétences",
      "COUT_Atout": "Atout 6",
      "COUT_Yen": "30000",
      "EFFETS": "RR 1 (compétence physique à choisir à l'achat)",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Modulateur vocal",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15000",
      "EFFETS": "Permet de changer de voix. RR 1 Influence (imposture)",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Lames digitales rétractiles",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12500",
      "EFFETS": "Lames de rasoirs de 2.5 cm rétractiles, implantées sous des ongles synthétiques (plus discret que des griffes rétractiles lors des contrôles). (VD F+1, OK/-/-/-)",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Griffes rétractiles",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12500",
      "EFFETS": "Lame implantées le long d'un os ou trois griffes sur le dos de la main. (VD F+2, OK/-/-/-)",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Mains cyber avec système magnétique",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10000",
      "EFFETS": "Permet de s'accrocher à une structure métallique ou obtenir un avantage pour escalader une structure métallique en échange d'un point d'Anarchy.",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Bras cyber avec lame",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "22500",
      "EFFETS": "Lame courte implantée (VD F+1, OK/-/-/-). RR 1 Combat rapproché (lames).",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Bras cyber avec pistolet lourd cyberimplanté",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "22500",
      "EFFETS": "Pistolet lourd implanté dans l'avant-bras (VD 5, OK/OK/Dés/-). RR 1 Armes à distance (pistolets)",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Bras cyber Evo Kali",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15000",
      "EFFETS": "RR 1 Combat rapproché (lame)",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Bras cyber Sony Cybersystem",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15000",
      "EFFETS": "Compensateur de recul intégré. RR 1 Armes à distance (mitraillettes)",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Bras cyber Spinrad Stronger",
      "COUT_Atout": "Atout 11",
      "COUT_Yen": "55000",
      "EFFETS": "RR 1 Force",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Bras cyber Yankee Pitcher",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "25000",
      "EFFETS": "Fait passer la portée des grenades de 'OK/OK/Dés/-' à 'OK/OK/OK/-'. RR 1 Combat à distance (armes de jet)",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Bras d'escalade",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15000",
      "EFFETS": "Griffes d'escalade rétractables. RR 1 Athlétisme (escalade)",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Bras d'escalade avec lance-grappin",
      "COUT_Atout": "Atout 6",
      "COUT_Yen": "30000",
      "EFFETS": "Griffes d'escalade rétractables et lance-grappin. RR 2 Athlétisme (escalade)",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Jambes cyber",
      "COUT_Atout": "Atout 6",
      "COUT_Yen": "30000",
      "EFFETS": "RR 1 Athlétisme",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Jambes cyber digitigrades",
      "COUT_Atout": "Atout 8",
      "COUT_Yen": "40000",
      "EFFETS": "RR 1 Athlétisme. RR 1 Athlétisme (course)",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Queue cybernétique stabilisatrice",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15000",
      "EFFETS": "RR 1 Athlétisme (parkour)",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Amplificateur de réaction",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15000",
      "EFFETS": "+1 point d'Anarchy par scène d'action, pas de limite au nombre d'actions supplémentaires par tour",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Réflexes câblés Ares",
      "COUT_Atout": "Atout 6",
      "COUT_Yen": "30000",
      "EFFETS": "+1 point d'Anarchy par scène d'action. +1 action par narration, pas de limite au nombre d'actions supplémentaires par tour",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Réflexes câblés Evo",
      "COUT_Atout": "Atout 8",
      "COUT_Yen": "40000",
      "EFFETS": "+2 points d'Anarchy par scène d'action. +1 action par narration, pas de limite au nombre d'actions supplémentaires par tour",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Move-by-wire",
      "COUT_Atout": "Atout 15",
      "COUT_Yen": "75000",
      "EFFETS": "+2 points d'Anarchy par scène d'action. +1 action par narration, pas de limite au nombre d'actions supplémentaires par tour. RR 1 Athlétisme (défense à distance). RR 1 Combat rapproché",
      "Perte_essence": "-1"
    },
    {
      "Atout": "Yakashima Dajji-M2",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "25000",
      "EFFETS": "RR 2 Athlétisme (défense à distance)",
      "Perte_essence": "-1"
    }
    ]
  },
  "6_bioware": {
    "nom": "6. BIOWARE",
    "total": 19,
    "donnees": [
    {
      "Atout": "Amortisseur traumatique",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "25 000¥",
      "EFFETS": "+1 case de blessure légère ajoutée au moniteur d'état",
      "Perte_essence": "-0,5"
    },
    {
      "Atout": "Amplification cérébrale",
      "COUT_Atout": "Atout 12",
      "COUT_Yen": "60 000¥",
      "EFFETS": "RR 1 Logique",
      "Perte_essence": "-0,5"
    },
    {
      "Atout": "Amplificateur synaptique",
      "COUT_Atout": "Atout 7",
      "COUT_Yen": "35 000¥",
      "EFFETS": "+1 point d'Anarchy par scène d'action. +1 action par narration, pas de limite au nombre d'actions supplémentaires par tour",
      "Perte_essence": "-0,5"
    },
    {
      "Atout": "Augmentation de la densité osseuse",
      "COUT_Atout": "Atout 6",
      "COUT_Yen": "30 000¥",
      "EFFETS": "+1 case de blessure légère ajoutée au moniteur d'état. VD à mains nues +1",
      "Perte_essence": "-0,5"
    },
    {
      "Atout": "Filtre trachéal et extracteur de toxines",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Immunité aux toxines injectées et respirées",
      "Perte_essence": "-0,5"
    },
    {
      "Atout": "Fixateurs de réflexes",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20 000¥",
      "EFFETS": "RR 1 aux tests d'une spécialisation de compétence physique (à choisir lors de l'achat de l'atout)",
      "Perte_essence": "-0,5"
    },
    {
      "Atout": "Fixateurs de réflexes UO PrimeSkill",
      "COUT_Atout": "Atout 6",
      "COUT_Yen": "30 000¥",
      "EFFETS": "RR 2 aux tests d'une spécialisation de compétence physique (à choisir lors de l'achat de l'atout)",
      "Perte_essence": "-0,5"
    },
    {
      "Atout": "Fixateurs de réflexes Evo ReflexUltra",
      "COUT_Atout": "Atout 8",
      "COUT_Yen": "40 000¥",
      "EFFETS": "RR 3 aux tests d'une spécialisation de compétence physique (à choisir lors de l'achat de l'atout)",
      "Perte_essence": "-0,5"
    },
    {
      "Atout": "Mains et pieds palmés",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20 000¥",
      "EFFETS": "RR 1 Athlétisme (natation)",
      "Perte_essence": "-0,5"
    },
    {
      "Atout": "Monobe Synthécarde",
      "COUT_Atout": "Atout 7",
      "COUT_Yen": "35 000¥",
      "EFFETS": "RR 1 Athlétisme",
      "Perte_essence": "-0,5"
    },
    {
      "Atout": "Orthoderme",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "Armure +1",
      "Perte_essence": "-0,5"
    },
    {
      "Atout": "Phéromones large spectre",
      "COUT_Atout": "Atout 12",
      "COUT_Yen": "60 000¥",
      "EFFETS": "RR 1 Charisme",
      "Perte_essence": "-0,5"
    },
    {
      "Atout": "Phéromones optimisées",
      "COUT_Atout": "Atout 7",
      "COUT_Yen": "35 000¥",
      "EFFETS": "RR 1 Influence",
      "Perte_essence": "-0,5"
    },
    {
      "Atout": "Pompe d'adrénaline",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "+1 point d'Anarchy par scène d'action, pas de limite au nombre d'actions supplémentaires par tour. Une fois les effets dissipés, le personnage subit une blessure grave. Durée : le temps d'une scène d'action.",
      "Perte_essence": "-0,5"
    },
    {
      "Atout": "Producteurs de plaquettes",
      "COUT_Atout": "Atout 8",
      "COUT_Yen": "40 000¥",
      "EFFETS": "+1 case de blessure grave ajoutée au moniteur d'état",
      "Perte_essence": "-0,5"
    },
    {
      "Atout": "Renforcement musculaire",
      "COUT_Atout": "Atout 12",
      "COUT_Yen": "60 000¥",
      "EFFETS": "RR 1 Force",
      "Perte_essence": "-0,5"
    },
    {
      "Atout": "Tonification musculaire",
      "COUT_Atout": "Atout 12",
      "COUT_Yen": "60 000¥",
      "EFFETS": "RR 1 Agilité",
      "Perte_essence": "-0,5"
    },
    {
      "Atout": "Vision de chat",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Vision nocturne",
      "Perte_essence": "-0,5"
    },
    {
      "Atout": "Vision de troll",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "10 000¥",
      "EFFETS": "Vision thermographique",
      "Perte_essence": "-0,5"
    }
    ]
  },
  "7_cyberdek": {
    "nom": "7. CYBERDEKS",
    "total": 11,
    "donnees": [
    {
      "Atout": "Erika MCD-6",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "15 000¥",
      "EFFETS": "Firewall 2 - Attaque 1"
    },
    {
      "Atout": "Spinrad Falcon",
      "COUT_Atout": "Atout 6",
      "COUT_Yen": "30 000¥",
      "EFFETS": "Firewall 2 - Attaque 2. RR 1 Piratage (force brute)"
    },
    {
      "Atout": "Shiawase Cyber-3",
      "COUT_Atout": "Atout 8",
      "COUT_Yen": "40 000¥",
      "EFFETS": "Firewall 3 - Attaque 3. RR 1 Piratage (force brute)"
    },
    {
      "Atout": "Eastern Tiger Gwishin",
      "COUT_Atout": "Atout 10",
      "COUT_Yen": "50 000¥",
      "EFFETS": "Firewall 2 - Attaque 1. RR 1 Piratage (backdoor). RR 1 Piratage (cybercombat), uniquement pour se défendre et seulement si le decker utilise une action pour se défendre. RR 2 Furtivité (matricielle)"
    },
    {
      "Atout": "MCT 360",
      "COUT_Atout": "Atout 11",
      "COUT_Yen": "55 000¥",
      "EFFETS": "Firewall 3 - Attaque 3. RR 1 Piratage"
    },
    {
      "Atout": "Shiawase Cyber-4",
      "COUT_Atout": "Atout 11",
      "COUT_Yen": "55 000¥",
      "EFFETS": "Firewall 3 - Attaque 4. RR 1 Piratage (force brute). RR 1 Piratage (cybercombat)"
    },
    {
      "Atout": "MCT 260",
      "COUT_Atout": "Atout 12",
      "COUT_Yen": "60 000¥",
      "EFFETS": "Firewall 2 - Attaque 3. RR 1 Piratage. RR 1 Piratage (force brute)"
    },
    {
      "Atout": "Renraku Kitsune",
      "COUT_Atout": "Atout 14",
      "COUT_Yen": "70 000¥",
      "EFFETS": "Firewall 4 - Attaque 4. Filtre de biofeedback. RR 1 Piratage"
    },
    {
      "Atout": "Eastern Tiger Kumiho",
      "COUT_Atout": "Atout 18",
      "COUT_Yen": "90 000¥",
      "EFFETS": "Firewall 3 - Attaque 5. Filtre de biofeedback. RR 1 Piratage. RR 1 Piratage (force brute). RR 1 Furtivité (matricielle)"
    },
    {
      "Atout": "Shiawase Cyber-6",
      "COUT_Atout": "Atout 20",
      "COUT_Yen": "100 000¥",
      "EFFETS": "Firewall 5 - Attaque 4. Filtre de biofeedback. Biofeedback. RR 1 Piratage. RR 1 Piratage (force brute). RR 1 Piratage (backdoor)"
    },
    {
      "Atout": "Fairlight Excalibur",
      "COUT_Atout": "Atout 30",
      "COUT_Yen": "150 000¥",
      "EFFETS": "Firewall 5 - Attaque 5. Une case de dommages légers supplémentaire. Filtre de biofeedback. Biofeedback. RR 1 Piratage. RR 2 Piratage (force brute). RR 2 Piratage (backdoor). RR 1 Piratage (cybercombat)"
    }
    ]
  },

  "32_pimpmyride": {
    "nom": "32. ACCESSOIRES ET MODIFICATIONS DE VÉHICULES",
    "total": 46,
    "donnees": [
    {
      "Atout": "Fixe",
      "COUT_Atout": "Atout -1",
      "COUT_Yen": "-5 000¥",
      "EFFETS": "Drone immobile"
    },
    {
      "Atout": "Suppression des commandes manuelles",
      "COUT_Atout": "Atout -1",
      "COUT_Yen": "-5 000¥",
      "EFFETS": "Permet de remplacer les commandes de contrôle standard du véhicule (volant et pédales par exemple) par des contrôles à 100% sans fils. Ne marche évidemment pas pour des drones."
    },
    {
      "Atout": "Aménagements",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Convertit une partie de l'habitacle ou du stockage du véhicule en espace habitable (coin cuisine, espace pour dormir, etc.). Le véhicule doit bien sûr être d'une taille suffisante."
    },
    {
      "Atout": "Appareil volant",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Volant Vitesse x2 (1 si la vitesse était de 0)"
    },
    {
      "Atout": "Apparence réaliste",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Donne une apparence réaliste à un drone anthropomorphe, cela inclus de la peau et des cheveux synthétiques et parfois plus, dans le cas des poupées…"
    },
    {
      "Atout": "Ajout d'une tourelle",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Permet de convertir une monture d'arme en tourelle. Possibilité à la discrétion du MJ."
    },
    {
      "Atout": "Autosofts additionnels / Logique floue",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Améliore l'autopilote, amélioration max +6 ou jusqu'à un indice d'autopilote de 12."
    },
    {
      "Atout": "Amphibie",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Rend le véhicule amphibie."
    },
    {
      "Atout": "Autosoft de visée assistée Ares Lock & Engage",
      "COUT_Atout": "Atout +4",
      "COUT_Yen": "+20 000¥",
      "EFFETS": "Permet à l'autopilote ou au rigger en plongé de bénéficier d'une RR 2 Ingénierie (armes contrôlées à distance)."
    },
    {
      "Atout": "Ares Rigger's Cocoon",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Transforme la place du rigger en un caisson balistique rembourré lui offrant une protection supplémentaire. Armure +1"
    },
    {
      "Atout": "Ares Rigger's Guardian Angel",
      "COUT_Atout": "Atout +5",
      "COUT_Yen": "+30 000¥",
      "EFFETS": "Transforme la place du rigger en un caisson balistique rembourré lui offrant une protection supplémentaire. Armure +1 Biomoniteur. Injecte automatiquement un stimpatch en cas de blessure grave, et un trauma patch en cas de blessure incapacitante (coût des patchs déjà inclus)."
    },
    {
      "Atout": "Batterie de senseurs",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Permet à l'autopilote ou au rigger plongé dans le véhicule de bénéficier de la vision nocturne, thermographique et de l'écholocalisation."
    },
    {
      "Atout": "Batterie de senseurs NTech",
      "COUT_Atout": "Atout +5",
      "COUT_Yen": "+25 000¥",
      "EFFETS": "Permet à l'autopilote ou au rigger plongé dans le véhicule de bénéficier de la vision nocturne, thermographique et de l'écholocalisation. RR 2 Perception (physique)."
    },
    {
      "Atout": "Bélier",
      "COUT_Atout": "Atout +2",
      "COUT_Yen": "+10 000¥",
      "EFFETS": "Permet d'utiliser le véhicule comme une arme. Nécessite un test opposé de Pilotage (type de véhicule). VD : Structure du véhicule + différence de vitesse entre les véhicules au moment de l'impact (les vitesses s'additionnent lors d'un face-à-face) +2 grâce au bélier. Le véhicule attaquant subit également des dommages d'une VD de Structure du véhicule cible (ou force s'il s'agit d'un personnage) + différence de vitesse entre les véhicules. Les succès nets obtenus lors de la manœuvre peuvent être utilisés soit pour augmenter la VD de l'attaque, soit pour réduire les VD subits."
    },
    {
      "Atout": "Blindage réactif",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Augmente le blindage de 2 en échange d'un point d'Anarchy, inutile ensuite jusqu'à réparation."
    },
    {
      "Atout": "Bras robotique",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Permet de manier des objets à distance, peut recevoir des équipements (ou armes) intégrés selon sa taille et la taille du drone."
    },
    {
      "Atout": "Capacité ADAV",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Permet à un grand drone volant de pouvoir décollé et atterrir verticalement, sans, le drone a besoin de place. Les drones volants de taille moyenne et inférieure n'ont pas besoin de cette modification pour pouvoir atterrir ou décoller."
    },
    {
      "Atout": "Compartiment caché",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Populaire auprès des contrebandiers, permet de cacher du matériel. La taille du compartiment dépend de la taille du véhicule et représente entre 10 et 20% de l'espace de stockage initial. Repérer le compartiment nécessite la réussite d'un test de Perception (physique) contre un seuil de 4. Certains senseurs permettent d'obtenir un avantage sur ce test."
    },
    {
      "Atout": "Débridage de l'autopilote",
      "COUT_Atout": "Atout +3",
      "COUT_Yen": "+15 000¥",
      "EFFETS": "Permet à l'autopilote de prendre plus de risque qu'un risque faible."
    },
    {
      "Atout": "Diffuseur de fumigène",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Permet de saturer une zone de fumée (thermique ou non) pouvant imposer un désavantage lié à la visibilité."
    },
    {
      "Atout": "Drone supplémentaire identique",
      "COUT_Atout": "Atout +2",
      "COUT_Yen": "+10 000¥",
      "EFFETS": "Max 3 drones identiques acquis de cette façon."
    },
    {
      "Atout": "ECM",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Le véhicule est équipé de contre-mesure électronique générant un brouillage sélectif affectant aussi bien les tentatives de piratage que de verrouillage par senseurs. Nécessite un test d'Ingénierie (guerre électronique) contre un seuil de 0 pour générer du Bruit (voir p.219 du livre de base). Les succès nets sont utilisés comme seuil pour contourner les effets du brouillage."
    },
    {
      "Atout": "ECCM",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Le véhicule est équipé de contre contre-mesure électronique. Permet d'Obtenir un avantage aux tests visant à contourner un brouillage contre la dépense d'un point d'Anarchy."
    },
    {
      "Atout": "EnviroSeal™",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Le système de survie EnviroSeal™ permet un filtrage de l'air diffusé dans l'habitacle pour maintenir un environnement totalement sain et, dans les cas extrêmes, de l'isolé de façon totalement étanche tout en maintenant une pression constante."
    },
    {
      "Atout": "Falsification du transpondeur",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Permet au véhicule de switcher entre plusieurs identifiants de véhicule sur le réseau XGuide™ ou sur les écrans radars. Inclus une peinture / des matériaux intelligents permettant dans changer le numéro d'immatriculation du véhicule sur simple commande électrique."
    },
    {
      "Atout": "Furtif",
      "COUT_Atout": "Atout +2",
      "COUT_Yen": "+10 000¥",
      "EFFETS": "Le véhicule est recouvert d'un matériau ou d'une peinture absorbante conçue pour réduire la signature visuelle, thermique et radar. RR 1 Furtivité (discrétion physique)"
    },
    {
      "Atout": "Gyrostabilisateurs Yamaha pour moto",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Permet à une moto de tenir debout même sans béquille et assure une compensation d'urgence en cas de chute. Permet d'Obtenir un avantage contre un point d'Anarchy lors de manœuvres pouvant provoquer une chute. Permet également de faire autre chose (tirer par exemple) sans désavantage lorsque l'autopilote se charge de la conduite."
    },
    {
      "Atout": "Lanceur de herse",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Permet d'éjecter une herse. Il existe deux types de herses : • Les herses à clou, destinées à crever les pneus d'un poursuivant contre un point d'Anarchy, imposant alors un désavantage aux tests de pilotage. • Les herses à impulsion, destinées à griller les composants internes du véhicule qui passe dessus contre un point d'Anarchy. Celui-ci subit alors des dommages graves (léger s'il possède une protection électromagnétique)."
    },
    {
      "Atout": "Monture d'arme dissimulée",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Permet de camoufler une monture d'arme existante. Possibilité à la discrétion du MJ."
    },
    {
      "Atout": "Monture d'arme gyrostabilisé",
      "COUT_Atout": "Atout +2",
      "COUT_Yen": "+10 000¥",
      "EFFETS": "Offre des conditions de tir optimal au servant en amortissant les soubresauts et en compensant les changements de direction. RR 1 Combat à distance (armes montées) ou RR 1 Ingénierie (armes contrôlées à distance) dans le cas d'une monture automatisé."
    },
    {
      "Atout": "Monture d'arme supplémentaire",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Permet l'ajout d'une arme supplémentaire, limité par la taille du drone. Possibilité à la discrétion du MJ. Ne prend pas en compte le coût de l'arme."
    },
    {
      "Atout": "Nitro-injection",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Permet d'obtenir un Avantage sur un test de pilotage impliquant la vitesse pour une durée limitée en échange d'un point d'Anarchy."
    },
    {
      "Atout": "Plaques additionnelles / Renforts",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Améliore le blindage, amélioration max +Indice de Structure."
    },
    {
      "Atout": "Pneus lisses et configuration course",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Permet d'Obtenir un avantage lors d'une course poursuite sur une route sèche et entretenue en échange d'un point d'Anarchy. Permet de récupérer un point d'Anarchy contre un désavantage aux tests de pilotage tant que le véhicule ne revient pas sur une route sèche."
    },
    {
      "Atout": "Pneus et réglages tout-terrain",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Permet d'éviter un désavantage pour le pilotage en terrain accidenté."
    },
    {
      "Atout": "Protection électromagnétique",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Blindage +1 pour résister aux dommages d'origine électromagnétique. Permet de réduire les dommages infligés par une herse à impulsion, les faisant passer de grave à léger."
    },
    {
      "Atout": "Rack pour drone",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Permet le transport et le déploiement d'un drone (plus petit que le véhicule porteur)."
    },
    {
      "Atout": "Remplacement du moteur / Mélange riche / meilleure alimentation",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Améliore de la vitesse, amélioration max +3."
    },
    {
      "Atout": "Side-car",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Ajoute un side-car à une moto. +1 Structure -1 Maniabilité Le side-car peut bénéficier d'une modification pour y ajouter une monture d'arme ou un rack pour drone."
    },
    {
      "Atout": "Sièges éjectables",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Le véhicule est équipé de sièges éjectables."
    },
    {
      "Atout": "Spray à huile",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Permet, en échange d'un point d'Anarchy, d'asperger la chaussée d'une couche d'huile et de poudre de téflon la rendant extrêmement glissante et imposant un désavantage aux poursuivants."
    },
    {
      "Atout": "Suspensions intelligentes",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Améliore de la maniabilité, amélioration max +3."
    },
    {
      "Atout": "Système d'évasion",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Permet à l'Autopilote ou aux Riggers en plongé en cold-sim de bénéficier d'un Avantage pour effectuer des manœuvres défensives contre un point d'Anarchy (notez qu'un rigger en hot-sim bénéficie gratuitement d'un avantage sur tous ses tests de défense)."
    },
    {
      "Atout": "Tuning",
      "COUT_Atout": "Atout +4",
      "COUT_Yen": "+20 000¥",
      "EFFETS": "Les modifications esthétiques du véhicule ne passent pas inaperçues. RR 1 Influence lorsque l'apparence du véhicule entre en jeu."
    },
    {
      "Atout": "Vitres-écrans doubles",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Permet d'afficher une fausse image holo réaliste de l'intérieur (ou de l'extérieur) pouvant par exemple masquer un passager. Il faut prendre une action pour observer et réussir un test de Perception (physique) contre un seuil de 3 pour remarquer la supercherie – sans pour autant voir ce qui se trouve réellement derrière."
    },
    {
      "Atout": "Vitres-écrans doubles améliorées",
      "COUT_Atout": "Atout +2",
      "COUT_Yen": "+10 000¥",
      "EFFETS": "Fonctionne comme les vitres-écrans doubles, mais avec un seuil de 4 pour ne pas se faire avoir."
    }
    ]
  },
  "33_arme": {
    "nom": "33. ARMES",
    "total": 68,
    "donnees": [
    {
      "Atout": "Armes courtes (couteau, poing américain, griffes et lame cybernétiques)",
      "Catégorie": "ARME DE CONTACT",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD F+1",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Couteau de combat avec toxine létale",
      "Catégorie": "ARME DE CONTACT",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "VD F+3",
      "amélioraion":"NON"
    },
    {
      "Atout": "Couteau de combat avec toxine débilitante",
      "Catégorie": "ARME DE CONTACT",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "7 500¥",
      "EFFETS": "VD F+1 | Inflige un désavantage à toutes les actions de la cible (1 point d’Anarchy) jusqu’à la fin de la prochaine narration.",
      "amélioraion":"NON"
    },
    {
      "Atout": "Armes longues ((épée, rapière, katana, hache de combat, arme d’hast, matraque, matraque télescopique)",
      "Catégorie": "ARME DE CONTACT",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD F+2",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Katana dikote™",
      "Catégorie": "ARME DE CONTACT",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "VD F+4",
      "amélioraion":"NON"
    },
    {
      "Atout": "Batte de baseball barbelé",
      "Catégorie": "ARME DE CONTACT",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "VD F+2 | RR 1 Influence (intimidation)",
      "amélioraion":"NON"
    },
    {
      "Atout": "Cavalier Arms Walker 2 (Canne fusil)",
      "Catégorie": "ARME DE CONTACT",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "10 000¥",
      "EFFETS": "VD F+1 OU 7 | Portée: OK/-/-/- OU -/Dés/OK/Dés | Discrète. Fusil intégré (prix inclus)",
      "amélioraion":"NON"
    },
    {
      "Atout": "Électro-gants",
      "Catégorie": "ARME DE CONTACT",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD 5",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Électro-matraques",
      "Catégorie": "ARME DE CONTACT",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD 5",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Fouet monofilament",
      "Catégorie": "ARME DE CONTACT",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "7 500¥",
      "EFFETS": "VD 7",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Armes de jet (couteau de lancer, shuriken, chakram, tomahawk.)",
      "Catégorie": "ARME DE JET",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD F+1 | Portée: ok/ok/Désavantage/-",
      "amélioraion":"NON"
    },
    {
      "Atout": "Grenades",
      "Catégorie": "ARME DE JET",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD 7 | Portée: ok/ok/Désavantage/- | Dégâts de zone",
      "amélioraion":"NON"
    },
    {
      "Atout": "Grenades offensive HE",
      "Catégorie": "ARME DE JET",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "VD 9 | Portée: ok/ok/Désavantage/- | Dégâts de zone",
      "amélioraion":"NON"
    },
    {
      "Atout": "Grenades au phosphore blanc",
      "Catégorie": "ARME DE JET",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "VD 8 | Portée: ok/ok/Désavantage/- | Dégâts de zone,  Enflamme la cible pour 1 point d’Anarchy",
      "amélioraion":"NON"
    },
    {
      "Atout": "Grenades Flashbang",
      "Catégorie": "ARME DE JET",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD 7 | Portée: ok/ok/Désavantage/- | Dégâts de zone, Dommages étourdissants",
      "amélioraion":"NON"
    },
    {
      "Atout": "Grenades à gaz",
      "Catégorie": "ARME DE JET",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "5 000¥",
      "EFFETS": "VD selon toxine | Portée: ok/ok/Désavantage/-",
      "amélioraion":"NON"
    },
    {
      "Atout": "Grenades planantes",
      "Catégorie": "ARME DE JET",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD 6 | Portée: -/ok/ok/Désavantage | Dégâts de zone",
      "amélioraion":"NON"
    },
    {
      "Atout": "Grenades lacrymo",
      "Catégorie": "ARME DE JET",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD Spéciale | Portée: ok/ok/Désavantage/- | Impose un désavantage a toutes les actions des cibles dans la zone.",
      "amélioraion":"NON"
    },
    {
      "Atout": "Grenades Neuro-Stun VIII",
      "Catégorie": "ARME DE JET",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD Spéciale | Portée: ok/ok/Désavantage/- | Inflige une blessure légère tous les (Force de la cible) tours. Il s’agit de dommages étourdissants.",
      "amélioraion":"NON"
    },
    {
      "Atout": "Grenades Neuro-Stun X",
      "Catégorie": "ARME DE JET",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD Spéciale | Portée: ok/ok/Désavantage/- | Inflige une blessure grave tous les (Force de la cible) tours. Il s’agit de dommages étourdissants.",
      "amélioraion":"NON"
    },
    {
      "Atout": "Grenades Seven-7",
      "Catégorie": "ARME DE JET",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD Spéciale | Portée: ok/ok/Désavantage/- | Inflige une blessure grave tous les (Force de la cible) tours. Il s’agit de dommages physiques.",
      "amélioraion":"NON"
    },
    {
      "Atout": "Grenades fumigènes",
      "Catégorie": "ARME DE JET",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD Spéciale | Portée: ok/ok/Désavantage/- | Impose un désavantage aux actions nécessitant de voir à travers (perception, armes à distance). La vision thermo permet d’annuler ce désavantage.",
      "amélioraion":"NON"
    },
    {
      "Atout": "Grenades fumigènes IR",
      "Catégorie": "ARME DE JET",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "7 500¥",
      "EFFETS": "VD Spéciale | Portée: ok/ok/Désavantage/- | Impose un désavantage aux actions nécessitant de voir à travers (perception, armes à distance). La vision thermo ne permet pas d’annuler ce désavantage.",
      "amélioraion":"NON"
    },
    {
      "Atout": "Arcs",
      "Catégorie": "ARME DE TRAIT",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD F+1 | Portée: ok/ok/ok/-",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Arc ranger X",
      "Catégorie": "ARME DE TRAIT",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "7 500¥",
      "EFFETS": "VD F+2 | Portée: ok/ok/ok/-",
      "amélioraion":"NON"
    },
    {
      "Atout": "Arbalètes",
      "Catégorie": "ARME DE TRAIT",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD 4 | Portée: ok/ok/ok/-",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Arbalète lourde",
      "Catégorie": "ARME DE TRAIT",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "7 500¥",
      "EFFETS": "VD 5 | Portée: ok/ok/ok/-",
      "amélioraion":"NON"
    },
    {
      "Atout": "Arbalète de poignet",
      "Catégorie": "ARME DE TRAIT",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD 3 | Portée: ok/ok/Désavantage/-",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Defiance super shock (Tasers)",
      "Catégorie": "PISTOLETS",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD 5 | Portée: OK/OK/-/- | Dommages étourdissants",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Yamaha Pulsar (Tasers)",
      "Catégorie": "PISTOLETS",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "VD 5 | Portée: OK/OK/Dés/- | Dommages étourdissants",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Streetline special Walther Palm Pistol (Pistolets de poche)",
      "Catégorie": "PISTOLETS",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD 3 | Portée: OK/OK/Dés/-",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Pistolet léger (Ares Light Fire Beretta 101T Colt America L36 Fichetti Security 500)",
      "Catégorie": "PISTOLETS",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD 4 | Portée: OK/OK/Dés/-",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Shiawase Arms Puzzler (Pistolet léger)",
      "Catégorie": "PISTOLETS",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "22 500¥",
      "EFFETS": "VD 4 | Portée: OK/OK/Dés/- | RR 2 Furtivité (discrétion physique) pour le faire passer discrètement.",
      "amélioraion":"NON"
    },
    {
      "Atout": "Pistolet automatique (Ares Crusader MP Ceska Black Scorpion Ares Super Squirt* )",
      "Catégorie": "PISTOLETS",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD 4 | Portée: OK/OK/Dés/- | Tir automatique",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Pistolet lourd (Ares Predator I Colt manhunter Browning Ultra Power)",
      "Catégorie": "PISTOLETS",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD 5 | Portée: OK/OK/Dés/-",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Ares Predator IV (Pistolet lourd)",
      "Catégorie": "PISTOLETS",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "VD 5 | Portée: OK/OK/Dés/- | Smartgun : RR 1 Armes à dist. (Pistolet)",
      "amélioraion":"NON"
    },
    {
      "Atout": "Ares Predator V (Pistolet lourd)",
      "Catégorie": "PISTOLETS",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "17 500¥",
      "EFFETS": "VD 5 | Portée: OK/OK/Dés/- | Smartgun : RR 1 Armes à dist. (Pistolet) Tir en rafales",
      "amélioraion":"NON"
    },
    {
      "Atout": "Ares Predator VI (Pistolet lourd)",
      "Catégorie": "PISTOLETS",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "27 500¥",
      "EFFETS": "VD 5 ou 6 | Portée: OK/OK/Dés/- | Smartgun : RR 1 Armes à dist. (Pistolet) Tir en rafales Sélecteur de munition : - Gel (VD5 étourdissant) - Explosive (VD6)",
      "amélioraion":"NON"
    },
    {
      "Atout": "Ruger Super Warhawk (Pistolet lourd)",
      "Catégorie": "PISTOLETS",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "7 500¥",
      "EFFETS": "VD 6 | Portée: OK/OK/Dés/-",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Ares Viper Slivergun (Pistolet lourd)",
      "Catégorie": "PISTOLETS",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "12 500¥",
      "EFFETS": "VD 5 | Portée: OK/OK/Dés/- | Tir en rafales Balles fléchettes : VD+2 contre les cibles sans armures",
      "amélioraion":"NON"
    },
    {
      "Atout": "HK P60 Tactical (Pistolet lourd)",
      "Catégorie": "PISTOLETS",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "20 000¥",
      "EFFETS": "VD 5 | Portée: OK/OK/Dés/- | Smartgun : RR 1 Armes à dist. (Pistolet) Démontable : RR 1 Furtivité (discrétion physique)",
      "amélioraion":"NON"
    },
    {
      "Atout": "Savalette Guardian (Pistolet lourd)",
      "Catégorie": "PISTOLETS",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "7 500¥",
      "EFFETS": "VD 5 | Portée: OK/OK/Dés/- | Tir en rafales",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Mitraillettes (Colt Cobra HK 227 FN P93 Praetor Uzi V)",
      "Catégorie": "MITRAILLETTES",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD 5 | Portée: Désavantage/ok/ok/- | Tir automatique",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Ingram Smartgun (Mitraillette)",
      "Catégorie": "MITRAILLETTES",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "17 500¥",
      "EFFETS": "VD 5 | Portée: Désavantage/ok/ok/- | Tir automatique Silencieux Smartgun : RR 1 Armes à dist. (Mitr.)",
      "amélioraion":"NON"
    },
    {
      "Atout": "Fusils d’assaut (AK-97 Colt M23 FN HAR Fusil Parashield DART*)",
      "Catégorie": "FUSILS",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD 7 | Portée: Désavantage/ok/ok/Désavantage | Tir automatique",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Ares Alpha Combatgun (Fusils d’assaut) (+Lance grenade sous canon)",
      "Catégorie": "FUSILS",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "27 500¥",
      "EFFETS": "VD 7 | Portée: Désavantage/ok/ok/Désavantage OU -/Dés/OK/OK | Tir automatique Bullpup : élimine le désavantage à portée contact en échange d’un point d’Anarchy Smartgun : RR 1 Armes à dist. (Fusils) Lance-grenades intégré",
      "amélioraion":"NON"
    },
    {
      "Atout": "Ares Alpha Mk II (Fusils d’assaut) (+Lance grenade sous canon)",
      "Catégorie": "FUSILS",
      "COUT_Atout": "Atout 5",
      "COUT_Yen": "32 500¥",
      "EFFETS": "VD 7 | Portée: Désavantage/ok/ok/Désavantage OU -/Dés/OK/OK | Tir automatique Smartgun : RR 1 Armes à dist. (Fusils) Smartgun : RR 1 Armes à dist. (Lance Grenades) Lance-grenades intégré",
      "amélioraion":"NON"
    },
    {
      "Atout": "Steyr AUG CSL (Mitraillette, fusil d’assaut ou fusil de sport selon config)",
      "Catégorie": "FUSILS",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "17 500¥",
      "EFFETS": "VD 5 ou 7 ou 7 | Portée: Dés/OK/OK/- ou Dés/OK/OK/Dés  ou -/Dés/OK/OK | Tir automatique, Démontable, Plusieurs configurations d’arme.",
      "amélioraion":"NON"
    },
    {
      "Atout": "Shotguns (Defiance T-250 Mossberg CMDT)",
      "Catégorie": "FUSILS",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD 8 | Portée: Dés/OK/Dés/-",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Defiance T-250 à canon scié (Shotgun)",
      "Catégorie": "FUSILS",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "7 500¥",
      "EFFETS": "VD 8 | Portée: OK/OK/-/-",
      "amélioraion":"NON"
    },
    {
      "Atout": "Franchi SPAS-22 (Shotgun)",
      "Catégorie": "FUSILS",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "17 500¥",
      "EFFETS": "VD 8 | Portée: Dés/OK/OK/- | Tir en rafale.",
      "amélioraion":"NON"
    },
    {
      "Atout": "Fusils de sport (Remington 750 Ruger 100)",
      "Catégorie": "FUSILS",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD 7 | Portée: -/Dés/OK/OK",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Fusils de précision ( Ares Desert Strike Walther MA-2100 )",
      "Catégorie": "FUSILS",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "5 000¥",
      "EFFETS": "VD 10 | Portée: -/Dés/Dés/OK",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Barrett model 122 (Fusils de précision)",
      "Catégorie": "FUSILS",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "15 000¥",
      "EFFETS": "VD 12 | Portée: -/Dés/Dés/OK",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Ranger Arms SM-6 (Fusils de précision)",
      "Catégorie": "FUSILS",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "25 000¥",
      "EFFETS": "VD 10 | Portée: -/Dés/Dés/OK | Smartgun : RR 1 Armes à dist. (Fusils) Silencieux. Démontable.",
      "amélioraion":"NON"
    },
    {
      "Atout": "Thunderstruck Gauss Rifle (Fusils de précision)",
      "Catégorie": "FUSILS",
      "COUT_Atout": "Atout 4",
      "COUT_Yen": "25 000¥",
      "EFFETS": "VD 11 | Portée: -/Dés/Dés/OK | Perce-armure : ignore l’armure de la cible en échange d’un point d’Anarchy Smartlink : RR 1 Armes à dis. (Fusils)",
      "amélioraion":"NON"
    },
    {
      "Atout": "Lances-grenades ( Ares Antioch II ArmTech MGL6 & 12 )",
      "Catégorie": "LANCE-GRENADES",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "5 000¥",
      "EFFETS": "VD 7 | Portée: -/Dés/OK/OK | Dégâts de zone.",
      "amélioraion":"OUI"
    },
    {
      "Atout": "Mitrailleuses ( Ingram Valiant Stoner Ares M202 )",
      "Catégorie": "ARMES LOURDES",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "5 000¥",
      "EFFETS": "VD 9 | Portée: -/OK/OK/OK | Tir automatique."
    },
    {
      "Atout": "GE Vindicator minigun (Mitrailleuse)",
      "Catégorie": "ARMES LOURDES",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "20 000¥",
      "EFFETS": "VD 10 | Portée: -/OK/OK/OK | Tir automatique. Gyrostabilisateur : RR 1 Armes à distance (Armes lourdes)",
      "amélioraion":"NON"
    },
    {
      "Atout": "Canon d’assaut Panther (Fusil de précision)",
      "Catégorie": "ARMES LOURDES",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "15 000¥",
      "EFFETS": "VD 10 | Portée: -/Dés/Dés/OK | VD 14 contre les véhicules.",
      "amélioraion":"NON"
    },
    {
      "Atout": "Lance-roquettes ( Aztechnology Striker Onotari interceptor)",
      "Catégorie": "ARMES LOURDES",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "5 000¥",
      "EFFETS": "VD 12 | Portée: -/-/Dés/OK | VD 16 contre les véhicules. Dégâts de zone.",
      "amélioraion":"OUI"
    },
    {
      "Atout": "M79B1 (Lance-roquette)",
      "Catégorie": "ARMES LOURDES",
      "COUT_Atout": "Atout 1",
      "COUT_Yen": "10 000¥",
      "EFFETS": "VD 10 | Portée: -/-/OK/OK | VD 14 contre les véhicules. Dégâts de zone. Compact (facile à transporter). Jetable (usage unique par scène).",
      "amélioraion":"NON"
    },
    {
      "Atout": "Mitsubishi-GM Great Dragon (Lance-missile)",
      "Catégorie": "ARMES LOURDES",
      "COUT_Atout": "Atout 6",
      "COUT_Yen": "35 000¥",
      "EFFETS": "VD 14 | Portée: -/-/Dés/OK | VD 18 contre les véhicules. Dégâts de zone. Tête chercheuse : RR 2 Armes à distance (armes lourdes).",
      "amélioraion":"NON"
    },
    {
      "Atout": "SK Ballista (Lance-missile)",
      "Catégorie": "ARMES LOURDES",
      "COUT_Atout": "Atout 3",
      "COUT_Yen": "20 000¥",
      "EFFETS": "VD 12 | Portée: -/-/Dés/OK | VD 16 contre les véhicules. Dégâts de zone. Transportable (sac à dos). Tête chercheuse : RR 1 Armes à distance (armes lourdes).",
      "amélioraion":"NON"
    },
    {
      "Atout": "Explosifs commerciaux (Explosifs)",
      "Catégorie": "EXPLOSIFS",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD 5 | Portée: Permet de faire sauter des trucs.",
      "amélioraion":"NON"
    },
    {
      "Atout": "Plastic Composé XII (Explosifs)",
      "Catégorie": "EXPLOSIFS",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "5 000¥",
      "EFFETS": "VD 10 | Portée: Permet de faire sauter des trucs avec une quantité moindre.",
      "amélioraion":"NON"
    },
    {
      "Atout": "Mines antipersonnel (Explosifs)",
      "Catégorie": "EXPLOSIFS",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "2 500¥",
      "EFFETS": "VD 7",
      "amélioraion":"NON"
    },
    {
      "Atout": "Mines anti-véhicule (Explosifs)",
      "Catégorie": "EXPLOSIFS",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "5 000¥",
      "EFFETS": "VD 10 | Portée: VD 16 contre les véhicules. Un métahumain ne déclenche normalement pas ce type de mine.",
      "amélioraion":"NON"
    }
    ]
  },
  "34_améliorationarme": {
    "nom": "34. AMÉLIORATIONS D'ARMES",
    "total": 19,
    "donnees": [
    {
      "Atout": "Balles ardentes",
      "Catégorie": "MUNITIONS",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "+2 500¥",
      "EFFETS": "Munitions pour shotgun qui explosent en gerbe d'étincelles incandescentes. VD-2 Peut enflammer une cible contre un point d'Anarchy.",
    "Equipe": "NON"
    },
    {
      "Atout": "Balles fléchettes",
      "Catégorie": "MUNITIONS",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "VD+2 contre les cibles ne portant pas d'armures",
    "Equipe": "NON"
    },
    {
      "Atout": "Balles mouchard",
      "Catégorie": "MUNITIONS",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "+2 500¥",
      "EFFETS": "Balle comportant un marqueur furtif rapportant la position de la cible touchée. VD-2",
    "Equipe": "NON"
    },
    {
      "Atout": "Cartouches Big-D",
      "Catégorie": "MUNITIONS",
      "COUT_Atout": "Équipement",
      "COUT_Yen": "+2 500¥",
      "EFFETS": "Munition pour shotgun tirant des cartouches au phosphore, légèrement instable… Peut enflammer une cible contre un point d'Anarchy. Oblige à prendre un minimum de 6 dés de risque ou toute la réserve du personnage si elle est inférieure.",
    "Equipe": "NON"
    },
    {
      "Atout": "Munitions APDS",
      "Catégorie": "MUNITIONS",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Munition perce-armure qui permettent d'ignorer complètement l'armure en échange de la dépense d'un point d'Anarchy.",
    "Equipe": "NON"
    },
    {
      "Atout": "Munitions Explosives",
      "Catégorie": "MUNITIONS",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "VD+1",
    "Equipe": "NON"
    },
    {
      "Atout": "Munitions EX Explosives",
      "Catégorie": "MUNITIONS",
      "COUT_Atout": "Atout +2",
      "COUT_Yen": "+10 000¥",
      "EFFETS": "VD+1 Permet de réduire définitivement (jusqu'à réparation) le niveau d'une armure de 1 en échange d'un point d'Anarchy. Ce type de munitions devrait être restreint aux armes de gros calibres.",
    "Equipe": "NON"
    },
    {
      "Atout": "Munitions Gel",
      "Catégorie": "MUNITIONS",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Inflige des dégâts étourdissant plutôt que physique",
    "Equipe": "NON"
    },
    {
      "Atout": "Holster dissimulable",
      "Catégorie": "ACCESSOIRES",
      "COUT_Atout": "Atout +2",
      "COUT_Yen": "+12 500¥",
      "EFFETS": "RR 1 Furtivité (physique) pour faire passer une arme discrètement.",
    "Equipe": "NON"
    },
    {
      "Atout": "Baïonnette",
      "Catégorie": "ACCESSOIRES",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+7 500¥",
      "EFFETS": "Ajoute une arme courte intégrée (VD F+1).",
    "Equipe": "NON"
    },
    {
      "Atout": "Bipied",
      "Catégorie": "ACCESSOIRES",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Permet de rester longtemps en position sans finir par subir de désavantage.",
    "Equipe": "NON"
    },
    {
      "Atout": "Compensateur de recul",
      "Catégorie": "ACCESSOIRES",
      "COUT_Atout": "Atout +2",
      "COUT_Yen": "+10 000¥",
      "EFFETS": "RR 1 Armes à distance (catégorie de l'arme)",
    "Equipe": "NON"
    },
    {
      "Atout": "Lunette de précision pour fusils d'assaut",
      "Catégorie": "ACCESSOIRES",
      "COUT_Atout": "Atout +3",
      "COUT_Yen": "+15 000¥",
      "EFFETS": "Fait passer la portée des fusils d'assaut à [Dés/OK/OK/OK]. Zoom.",
    "Equipe": "NON"
    },
    {
      "Atout": "Lunette de précision NightHawk",
      "Catégorie": "ACCESSOIRES",
      "COUT_Atout": "Atout +4",
      "COUT_Yen": "+20 000¥",
      "EFFETS": "Fait passer la portée des fusils d'assaut à [Dés/OK/OK/OK]. Zoom. Vision nocturne.",
    "Equipe": "NON"
    },
    {
      "Atout": "Sécurité biométrique",
      "Catégorie": "ACCESSOIRES",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Dispositif biométrique installé dans la poignée d'une arme et qui verrouille le mécanisme de cette dernière si l'empreinte palmaire du porteur n'est pas autorisée.",
    "Equipe": "NON"
    },
    {
      "Atout": "Silencieux",
      "Catégorie": "ACCESSOIRES",
      "COUT_Atout": "Atout +1",
      "COUT_Yen": "+5 000¥",
      "EFFETS": "Impose un désavantage aux tests de Perception pour repérer un tir.",
    "Equipe": "NON"
    },
    {
      "Atout": "Viseur laser Smartlink",
      "Catégorie": "ACCESSOIRES",
      "COUT_Atout": "Atout +2",
      "COUT_Yen": "+10 000¥",
      "EFFETS": "RR 1 Armes à distance (catégorie de l'arme).",
    "Equipe": "NON"
    },
    {
      "Atout": "Cran de sûreté amélioré",
      "Catégorie": "ACCESSOIRES",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "+10 000¥",
      "EFFETS": "Il peut faire appel à un signal RFID, PAN ou biométrique situé dans l'arme ou dans sa crosse. Ce système évite l'utilisation abusive de l'arme. Une douzaine d'utilisateurs peut être enregistrée.",
    "Equipe": "NON"
    },
    {
      "Atout": "Démontage facile",
      "Catégorie": "ACCESSOIRES",
      "COUT_Atout": "Atout 2",
      "COUT_Yen": "+10 000¥",
      "EFFETS": "Cette modification permet de démonter son arme en de nombreuses petites parties aisément dissimulables.",
    "Equipe": "NON"
    }
    ]
  }
};

// ============================================
// HELPERS D'ACCÈS AUX DONNÉES
// ============================================

function getGearSection(key) {
    return SHADOWRUN_GEAR[key]?.donnees || [];
}

// --- Traits ---
function getTraits() { return getGearSection('1_traits'); }
function getTraitsParCout(maxCout) {
    return getTraits().filter(t => {
        const cout = parseInt(t.COUT_Atout?.replace(/[^0-9]/g, '') || '0');
        return cout <= maxCout;
    });
}
function getTraitsParPrerequis(prerequis) {
    if (!prerequis) return getTraits().filter(t => !t.Pré_requis);
    return getTraits().filter(t => {
        const pre = t.Pré_requis || '';
        return pre.toLowerCase().includes(prerequis.toLowerCase());
    });
}

// --- Cyberware ---
function getCephaloware() { return getGearSection('2_cephaloware'); }
function getCyberyeux() { return getGearSection('3_cyberyeux'); }
function getCyberoreilles() { return getGearSection('4_cyberoreilles'); }
function getSomatoware() { return getGearSection('5_somatoware'); }
function getBioware() { return getGearSection('6_bioware'); }

function getAllCyberware() {
    return [
        ...getCephaloware(),
        ...getCyberyeux(),
        ...getCyberoreilles(),
        ...getSomatoware(),
        ...getBioware()
    ];
}

function getCyberwareParType(type) {
    const mapping = {
        'cephaloware': getCephaloware,
        'cyberyeux': getCyberyeux,
        'cyberoreilles': getCyberoreilles,
        'somatoware': getSomatoware,
        'bioware': getBioware
    };
    const fn = mapping[type.toLowerCase()];
    return fn ? fn() : [];
}

function getCyberwareParPerteEssence(maxPerte) {
    return getAllCyberware().filter(c => {
        const perte = parseFloat(c.Perte_essence?.replace(',', '.') || '0');
        return Math.abs(perte) <= maxPerte;
    });
}

// --- Matrix ---
function getCyberdeks() { return getGearSection('7_cyberdek'); }
function getOptionsDeck() { return getGearSection('8_options_deck'); }
function getProgrammesLegaux() { return getGearSection('9_programmes_legaux'); }
function getProgrammesIllegaux() { return getGearSection('10_programmes_illegaux'); }
function getConstructs() { return getGearSection('11_constructs'); }
function getFormesComplexes() { return getGearSection('12_formes_complexes'); }

function getAllMatrixGear() {
    return [
        ...getCyberdeks(),
        ...getOptionsDeck(),
        ...getProgrammesLegaux(),
        ...getProgrammesIllegaux(),
        ...getConstructs(),
        ...getFormesComplexes()
    ];
}

// --- Magie ---
function getMaterielMagique() { return getGearSection('13_materiel_magique'); }
function getPouvoirsAdepte() { return getGearSection('14_pouvoirs_adepte'); }
function getVoiesAdepte() { return getGearSection('15_voies_adepte'); }
function getIdoles() { return getGearSection('16_idoles'); }
function getSortsCombat() { return getGearSection('17_sorts_combat'); }
function getSortsDetection() { return getGearSection('18_sorts_detection'); }
function getSortsSante() { return getGearSection('19_sorts_sante'); }
function getSortsIllusion() { return getGearSection('20_sorts_illusion'); }
function getSortsManipulation() { return getGearSection('21_sorts_manipulation'); }

function getAllSorts() {
    return [
        ...getSortsCombat(),
        ...getSortsDetection(),
        ...getSortsSante(),
        ...getSortsIllusion(),
        ...getSortsManipulation()
    ];
}

function getSortsParType(type) {
    const mapping = {
        'combat': getSortsCombat,
        'detection': getSortsDetection,
        'sante': getSortsSante,
        'illusion': getSortsIllusion,
        'manipulation': getSortsManipulation
    };
    const fn = mapping[type.toLowerCase()];
    return fn ? fn() : [];
}

function getSortsParPrerequis(prerequis) {
    return getAllSorts().filter(s => {
        const pre = s.Pré_requis || '';
        return pre.toLowerCase().includes(prerequis.toLowerCase());
    });
}

// --- Véhicules ---
function getDeuxRoues() { return getGearSection('22_deux_roues'); }
function getVoitures() { return getGearSection('23_voitures'); }
function getVehiculesDivers() { return getGearSection('24_vehicules_divers'); }

function getAllVehicules() {
    return [
        ...getDeuxRoues(),
        ...getVoitures(),
        ...getVehiculesDivers()
    ];
}

// --- Drones ---
function getMicrodrones() { return getGearSection('25_microdrones'); }
function getMinidrones() { return getGearSection('26_minidrones'); }
function getPetitsDrones() { return getGearSection('27_petits_drones'); }
function getDronesMoyens() { return getGearSection('28_drones_moyens'); }
function getGrandsDrones() { return getGearSection('29_grands_drones'); }
function getDronesAnthropomorphes() { return getGearSection('30_drones_anthropomorphes'); }

function getAllDrones() {
    return [
        ...getMicrodrones(),
        ...getMinidrones(),
        ...getPetitsDrones(),
        ...getDronesMoyens(),
        ...getGrandsDrones(),
        ...getDronesAnthropomorphes()
    ];
}

function getDronesParTaille(taille) {
    const mapping = {
        'micro': getMicrodrones,
        'mini': getMinidrones,
        'petit': getPetitsDrones,
        'moyen': getDronesMoyens,
        'grand': getGrandsDrones,
        'anthropomorphe': getDronesAnthropomorphes
    };
    const fn = mapping[taille.toLowerCase()];
    return fn ? fn() : [];
}

// --- CCR ---
function getCCR() { return getGearSection('31_ccr'); }
// --- Accessoires et Modifications de Véhicules ---
function getPimpMyRide() { return getGearSection('32_pimpmyride'); }
// --- Armes ---
function getArmes() { return getGearSection('33_arme'); }
function getAmeliorationsArme() { return getGearSection('34_améliorationarme'); }
function getAllArmes() {
    return [
        ...getArmes(),
        ...getAmeliorationsArme()
    ];
}


// --- Recherche globale ---
function findGearByName(name) {
    const allSections = Object.values(SHADOWRUN_GEAR);
    for (const section of allSections) {
        const found = section.donnees.find(item => item.Atout === name);
        if (found) return { section: section.nom, item: found };
    }
    return null;
}

function searchGear(term) {
    const results = [];
    const lowerTerm = term.toLowerCase();
    const allSections = Object.values(SHADOWRUN_GEAR);
    for (const section of allSections) {
        for (const item of section.donnees) {
            const match = Object.values(item).some(val =>
                val && val.toString().toLowerCase().includes(lowerTerm)
            );
            if (match) results.push({ section: section.nom, item: item });
        }
    }
    return results;
}

function getGearByCoutAtout(maxCout) {
    const results = [];
    const allSections = Object.values(SHADOWRUN_GEAR);
    for (const section of allSections) {
        for (const item of section.donnees) {
            const coutStr = item.COUT_Atout || '';
            const cout = parseInt(coutStr.replace(/[^0-9]/g, '') || '0');
            if (cout <= maxCout) {
                results.push({ section: section.nom, item: item });
            }
        }
    }
    return results;
}

function getGearByCoutYen(maxYen) {
    const results = [];
    const allSections = Object.values(SHADOWRUN_GEAR);
    for (const section of allSections) {
        for (const item of section.donnees) {
            const yenStr = item.COUT_Yen || '';
            const yen = parseInt(yenStr.replace(/[^0-9]/g, '') || '0');
            if (yen <= maxYen) {
                results.push({ section: section.nom, item: item });
            }
        }
    }
    return results;
}

// --- Catégories disponibles ---
function getGearCategories() {
    return Object.values(SHADOWRUN_GEAR).map(s => ({
        key: Object.keys(SHADOWRUN_GEAR).find(k => SHADOWRUN_GEAR[k] === s),
        nom: s.nom,
        total: s.total
    }));
}

// --- Export pour compatibilité ---
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SHADOWRUN_GEAR, getGearSection, getTraits, getCephaloware,
        getCyberyeux, getCyberoreilles, getSomatoware, getBioware, getAllCyberware,
        getCyberdeks, getOptionsDeck, getProgrammesLegaux, getProgrammesIllegaux,
        getConstructs, getFormesComplexes, getAllMatrixGear, getMaterielMagique,
        getPouvoirsAdepte, getVoiesAdepte, getIdoles, getAllSorts, getSortsCombat,
        getSortsDetection, getSortsSante, getSortsIllusion, getSortsManipulation,
        getAllVehicules, getDeuxRoues, getVoitures, getVehiculesDivers,
        getAllDrones, getMicrodrones, getMinidrones, getPetitsDrones,
        getDronesMoyens, getGrandsDrones, getDronesAnthropomorphes, getCCR, getPimpMyRide,
        findGearByName, searchGear, getGearByCoutAtout, getGearByCoutYen,
        getArmes, getAmeliorationsArme, getAllArmes,
        getGearCategories };
}

// ============================================
// FONCTION GETATOUTS() - Agrège toutes les données d'atouts
// pour la section 6 du créateur de personnage
// ============================================

function getAtouts() {
    const atouts = [];

    // Mapping des sections vers les catégories du HTML
    const sectionMapping = {
        '2_cephaloware': 'CYBERWARE',
        '3_cyberyeux': 'CYBERWARE',
        '4_cyberoreilles': 'CYBERWARE',
        '5_somatoware': 'CYBERWARE',
        '6_bioware': 'BIOWARE',
        '7_cyberdek': 'CYBERDECKS',
        '8_options_deck': 'PROGRAMMES',
        '9_programmes_legaux': 'PROGRAMMES',
        '10_programmes_illegaux': 'PROGRAMMES',
        '11_constructs': 'CONSTRUCTS',
        '12_formes_complexes': 'FORMES COMPLEXES',
        '13_materiel_magique': 'FOCUS',
        '14_pouvoirs_adepte': "POUVOIRS D'ADEPTE",
        '15_voies_adepte': "VOIES D'ADEPTE",
        '16_idoles': 'IDOLES (ESPRITS MENTORS)',
        '17_sorts_combat': 'SORTS DE COMBAT',
        '18_sorts_detection': 'SORTS DE DÉTECTION',
        '19_sorts_sante': 'SORTS DE SANTÉ',
        '20_sorts_illusion': "SORTS D'ILLUSION",
        '21_sorts_manipulation': 'SORTS DE MANIPULATION',
        '22_deux_roues': 'VÉHICULES',
        '23_voitures': 'VÉHICULES',
        '24_vehicules_divers': 'VÉHICULES',
        '25_microdrones': 'DRONES',
        '26_minidrones': 'DRONES',
        '27_petits_drones': 'DRONES',
        '28_drones_moyens': 'DRONES',
        '29_grands_drones': 'DRONES',
        '30_drones_anthropomorphes': 'DRONES',
        '31_ccr': 'HARDWARE',
        '1_traits': 'SPÉCIAUX',
        '32_pimpmyride': 'ACCESSOIRES VÉHICULES',
        '33_arme': 'ARMES',
        '34_améliorationarme': "AMÉLIORATIONS D'ARMES"
    };

    // Parcourir toutes les sections de SHADOWRUN_GEAR
    for (const [sectionKey, sectionData] of Object.entries(SHADOWRUN_GEAR)) {
        const categorie = sectionMapping[sectionKey] || 'AUTRE';

        if (sectionData.donnees) {
            for (const item of sectionData.donnees) {
                // Extraire le coût en points d'atout
                let coutAtout = item.COUT_Atout || '';
                let niveau = '';

                // Parser le coût d'atout (ex: "Atout 3", "Atout +2", "Atout 2*", "Équipement")
                const atoutMatch = coutAtout.match(/Atout\s*\+?(\d+(?:\.\d+)?)/);
                if (atoutMatch) {
                    niveau = atoutMatch[1];
                } else if (coutAtout.includes('Équipement') || coutAtout.includes('Equipement')) {
                    niveau = '0';
                }

                // Extraire la perte d'essence
                let essence = '';
                if (item.Perte_essence) {
                    essence = item.Perte_essence.replace(',', '.');
                }

                // Déterminer le pré-requis
                let prerequis = item.Pré_requis || item['Pré-requis'] || '';

                // Pour les sorts, ajouter le type et seuil dans la description
                let description = item.EFFETS || item.Description || '';
                if (item.Type && item.Seuil) {
                    description = '[' + item.Type + ' | Seuil: ' + item.Seuil + ']\n' + description;
                }

                atouts.push({
                    Nom: item.Atout || item.Nom || '',
                    Catégorie: categorie,
                    Niveau: niveau,
                    'Cout_Atout': coutAtout,
                    'COUT_Yen': item.COUT_Yen || item['COUT_Yen'] || '',
                    Description: description,
                    'Pré-requis': prerequis,
                    'Pré_requis': prerequis,
                    Essence: essence,
                    _section: sectionKey,
                    _sectionNom: sectionData.nom || ''
                });
            }
        }
    }

    return atouts;
}

// ============================================
// FONCTIONS AUXILIAIRES POUR LES ATOUTS
// ============================================

function parseNiveauAtout(niveauStr) {
    if (!niveauStr || niveauStr === '') {
        return { isVariable: false, min: 0, max: 0, niveaux: [] };
    }

    // Vérifier si c'est un niveau variable (ex: "1-3", "2-5")
    const variableMatch = niveauStr.match(/^(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)$/);
    if (variableMatch) {
        const min = parseFloat(variableMatch[1]);
        const max = parseFloat(variableMatch[2]);
        const niveaux = [];
        for (let i = min; i <= max; i += 0.5) {
            niveaux.push(i);
        }
        return { isVariable: true, min: min, max: max, niveaux: niveaux };
    }

    // Vérifier si c'est une liste (ex: "1,2,3" ou "1/2/3")
    const listMatch = niveauStr.match(/^(\d+(?:\.\d+)?)(?:[,\/]\s*(\d+(?:\.\d+)?))+$/);
    if (listMatch) {
        const niveaux = niveauStr.split(/[,\/]/).map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
        return { isVariable: true, min: Math.min(...niveaux), max: Math.max(...niveaux), niveaux: niveaux };
    }

    // Valeur simple
    const simpleVal = parseFloat(niveauStr);
    if (!isNaN(simpleVal)) {
        return { isVariable: false, min: simpleVal, max: simpleVal, niveaux: [simpleVal] };
    }

    return { isVariable: false, min: 0, max: 0, niveaux: [] };
}

function parseDescriptionVariable(description, niveaux) {
    const descriptions = [];

    // Recherche de patterns comme "Niveau 1: ... Niveau 2: ..."
    const niveauPattern = /(?:Niveau|Level|\bniveau|\blevel)\s*(\d+(?:\.\d+)?)[\s:–-]+(.*?)(?=(?:Niveau|Level|\bniveau|\blevel)\s*\d+(?:\.\d+)?[\s:–-]+|$)/gi;
    let match;
    const niveauDescMap = {};

    while ((match = niveauPattern.exec(description)) !== null) {
        niveauDescMap[parseFloat(match[1])] = match[2].trim();
    }

    // Si on a trouvé des descriptions par niveau
    if (Object.keys(niveauDescMap).length > 0) {
        for (const n of niveaux) {
            descriptions.push(niveauDescMap[n] || description);
        }
        return descriptions;
    }

    // Sinon, essayer de splitter par • ou paragraphes numérotés
    const bulletParts = description.split(/•/).map(p => p.trim()).filter(p => p);
    if (bulletParts.length >= niveaux.length) {
        for (let i = 0; i < niveaux.length; i++) {
            descriptions.push(bulletParts[i] || description);
        }
        return descriptions;
    }

    // Fallback: retourner la même description pour tous les niveaux
    for (let i = 0; i < niveaux.length; i++) {
        descriptions.push(description);
    }
    return descriptions;
}
