let questions = {
  0: {
    Type: "Ouverte",
    InputNumber: 1,
    Require: true,
    Content: "Nom-Prénom",
    InputContent: "Vos Nom et Prénom ici",
    Section: "Identité",
    Dropdown: 0,
    DropdownValue: 0
  },
  1:{
    Type: "Ouverte",
    InputNumber: 1,
    Require: true,
    Content: "Adresse mail",
    InputContent: "Vos adresse mail ici",
    Section: "Identité",
    Dropdown: 0,
    DropdownValue: 0
  },
  2: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Vous êtes?",
    InputContent: ["Un Homme", "Une Femme"],
    Section: "Identité",
    Dropdown: 0,
    DropdownValue: 0
  },
  3: {
    Type: "Ouverte",
    InputNumber: 1,
    Require: true,
    Content: "Date de naissance",
    InputContent: "Votre date de naissance ici",
    Section: "Identité",
    Dropdown: 0,
    DropdownValue: 0
  },
  4: {
    Type: "Fermée",
    SecondaryType:"Select",
    Require: true,
    InputNumber: 6 ,
    Content: "Niveau de formation",
    InputContent: ["Sortie d’école en fin de 3ème","CAP","BEP","BAC","BAC +2","BAC +3 et plus"],
    Section: "Identité",
    Dropdown: 0,
    DropdownValue: 0
  },
  5: {
    Type: "Fermée",
    SecondaryType:"Select",
    SingleResponse:true,
    Require: true,
    InputNumber: 8,
    Content: "Situation actuelle",
    InputContent: ["En recherche d’emploi","En contrat aidé","En CDD","En CDI","En mission intérimaire","BRSA","En formation/stage","En Service civique"],
    Section: "Identité",
    Dropdown: 0,
    DropdownValue: 0
  },
  6: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Vie maritale?",
    InputContent: ["Oui", "Non"],
    Section: "Identité",
    Dropdown: 0,
    DropdownValue: 0
  },
  7: {
    Type: "Fermée",
    InputNumber: 5,
    SingleResponse:true,
    Require: true,
    Content: "Nombre d'enfants à charge:",
    InputContent: ["0", "1", "2", "3", "+3"],
    Section: "Identité",
    Dropdown: 0,
    DropdownValue: 0
  },
  8: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Avis d'imposition à jour?",
    InputContent: ["Oui", "Non"],
    Section: "Identité",
    Dropdown: 0,
    DropdownValue: 0
  },
  9: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "CNI validé?",
    InputContent: ["Oui", "Non"],
    Section: "Identité",
    Dropdown: 0,
    DropdownValue: 0
  },
  10: {
    Type: "Fermée",
    InputNumber: 6,
    Require: true,
    Content: "Titulaire du permis suivant",
    InputContent: ["A ", "B ", "C ", "D ", "E","Aucun"],
    Section: "Identité",
    Dropdown: 0,
    DropdownValue: 0
  },
  11: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J'ai déjà utilisé un vélo",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 1,
    DropdownValue: 0
  },
  12: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "SI OUI: Etes-vous propriétaire du vélo ?",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 1
  },
  13: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "SI OUI: Est-il en état de fonctionnement ?",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 1
  },
  14: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J'utilise une trotinette électrique",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  15: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J'ai déjà utilisé une trotinette électrique",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  16: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J'utilise un 2 roues motorisé (scooter)",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 2,
    DropdownValue: 0
  },
  17: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "SI OUI: Etes-vous titulaire du permis AM/BSR ?",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 2
  },
  18: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "SI OUI: Etes-vous propriétaire d’un 2 roues ?",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 2
  },
  19: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "SI OUI: Est-il en état ?",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 2
  },
  20: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "SI OUI: Est-il assuré ?",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 2
  },
  21: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J'utilise la voiture",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 3,
    DropdownValue: 0
  },
  22: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "SI OUI: Je suis titulaire du permis B",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 3
  },
  23: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "SI OUI: Je suis propriétaire du véhicule",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 3
  },
  24: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "SI OUI: Véhicule en bon état?",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 3
  },
  25: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "SI OUI: La carte grise est-elle à jour ?",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 3
  },
  26: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "SI OUI: L'assurance est elle valide?",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 3
  },
  27: {
    Type: "Fermée",
    InputNumber: 5,
    Require: true,
    Content: "J'utilise les transports en commun",
    InputContent: ["Bus", "Train", "Métro", "Tramway", "Avion","Aucun"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 4,
    DropdownValue: 0
  },
  28: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "Bus : fréquence:",
    InputContent: ["Régulièrement", "Ponctuellement"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 4
  },
  29: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "Train : fréquence:",
    InputContent: ["Régulièrement", "Ponctuellement"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 4
  },
  30: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "Métro : fréquence:",
    InputContent: ["Régulièrement", "Ponctuellement"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 4
  },
  31: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "Tramway : fréquence:",
    InputContent: ["Régulièrement", "Ponctuellement"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 4
  },
  32: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "Avion : fréquence:",
    InputContent: ["Régulièrement", "Ponctuellement"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 4
  },
  33: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Avez vous une carte de réduction?",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  34: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je me déplace à pieds",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 5,
    DropdownValue: 0
  },
  35: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "SI OUI: Je suis assuré(e) pour mes déplacements à pied ?",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 5
  },
  36: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J'ai déjà fait du covoiturage",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 6,
    DropdownValue: 0
  },
  37: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "SI OUI: Avec des collègues?",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 6
  },
  38: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "SI OUI: Avec ma famille?",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 6
  },
  39: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "SI OUI: Avec des amis?",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 6
  },
  40: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J'ai déjà fait du stop?",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  41: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je peux compter sur mon entourage pour mes déplacements",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 7,
    DropdownValue: 0
  },
  42: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "SI OUI: Pour mes déplacements réguliers?",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 7
  },
  43: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "SI OUI: Pour mes déplacements ponctuels?",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 7
  },
  44: {
    Type: "Fermée",
    InputNumber: 5,
    SingleResponse:true,
    Require: true,
    Content: "Pour vous rendre en emploi, formation, stage vous avez déjà effectué :",
    InputContent: ["5Km", "10Km", "20Km", "30Km", "Et plus"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  45: {
    Type: "Fermée",
    InputNumber: 5,
    SingleResponse:true,
    Require: true,
    Content: "A ce jour vous acceptez vos déplacements pour un emploi , une formation, un stage jusqu’à :",
    InputContent: ["5Km", "10Km", "20Km", "30Km", "+ de 30km"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  46: {
    Type: "Fermée",
    InputNumber: 5,
    SingleResponse:true,
    Require: true,
    Content: "Votre mobilité est :",
    InputContent: ["Locale", "Départementale", "Régionnale", "Nationnale", "Internationnale"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  47: {
    Type: "Fermée",
    InputNumber: 5,
    SingleResponse:true,
    Require: true,
    Content: "Quel est la durée maximale de vos temps de transport pour aller en emploi, en formation, en stage ?",
    InputContent: ["10 Minutes", "20 Minutes", "30 Minutes", "1 Heure", "+ d'heure"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  48: {
    Type: "Fermée",
    InputNumber: 6,
    Require: true,
    Content: "Avez-vous déjà travaillé ?",
    InputContent: ["Nuit", "Matin", "Après-midi", "Soirée", "Jour","Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  49: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je pars en vacances:",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  50: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je peux me déplacer pour mes distractions:",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 8,
    DropdownValue: 0
  },
  51: {
    Type: "Fermée",
    InputNumber: 3,
    Content: "SI OUI: A quel moment?",
    InputContent: ["En journée ", "En soirée ", "La nuit "],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 8
  },
  52: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je peux sortir sans autorisation:",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  53: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J'ai peur de sortir seul(e):",
    InputContent: ["Oui", "Non"],
    Section: "VOS EPERIENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  54: {
    Type: "Fermée",
    InputNumber: 2,
    Require: true,
    Content: "Je sais me repérer sur une carte ou un plan papier:",
    InputContent: ["Oui", "Non"],
    Section: "VOS COMPÉTENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  55: {
    Type: "Fermée",
    InputNumber: 2,
    Require: true,
    Content: "J'ai le sens de l'orientation:",
    InputContent: ["Oui", "Non"],
    Section: "VOS COMPÉTENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  56: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J'utilise internet pour organiser mes déplacements:'",
    InputContent: ["Oui", "Non"],
    Section: "VOS COMPÉTENCES MOBILITÉS",
    Dropdown: 9,
    DropdownValue: 0
  },
  57: {
    Type: "Fermée",
    InputNumber: 5,
    Content: "SI OUI:",
    InputContent: ["Google Maps", "Mappy", "Site de covoiturage", "Appli et aides aux déplacements", "Autre"],
    Section: "VOS COMPÉTENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 9
  },
  58: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J'ai déjà utilisé un billet de transport:",
    InputContent: ["Oui", "Non"],
    Section: "VOS COMPÉTENCES MOBILITÉS",
    Dropdown: 10,
    DropdownValue: 0
  },
  59: {
    Type: "Fermée",
    InputNumber: 3,
    Content: "SI OUI:",
    InputContent: ["Bus", "Train", "Avion"],
    Section: "VOS COMPÉTENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 10
  },
  60: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je maîtrise et comprends les lignes de transports en commun & leurs correspondances:",
    InputContent: ["Oui", "Non"],
    Section: "VOS COMPÉTENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  61: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je sais anticiper & préparer mes déplacements:",
    InputContent: ["Oui", "Non"],
    Section: "VOS COMPÉTENCES MOBILITÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  62: {
    Type: "Fermée",
    InputNumber: 3,
    Require: true,
    Content: "Je maitrise le Français:",
    InputContent: ["Lu", "Ecrit", "Parlé"],
    Section: "VOS COMPÉTENCES CLÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  63: {
    Type: "Fermée",
    InputNumber: 4,
    Require: true,
    Content: "J’ai des difficultés en :",
    InputContent: ["Orthographe", "Conjugaison", "Grammaire","Aucune"],
    Section: "VOS COMPÉTENCES CLÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  64: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J'ai des difficultés avec les chiffres:",
    InputContent: ["Oui", "Non"],
    Section: "VOS COMPÉTENCES CLÉS",
    Dropdown: 11,
    DropdownValue: 0
  },
  65: {
    Type: "Fermée",
    InputNumber: 5,
    Content: "SI OUI, avec:",
    InputContent: ["Les additions", "Les soustractions", "Les multiplications", "Les division", "Les pourcentages"],
    Section: "VOS COMPÉTENCES CLÉS",
    Dropdown: 0,
    DropdownValue: 11
  },
  66: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je maîtrise une autre langue :",
    InputContent: ["Oui", "Non"],
    Section: "VOS COMPÉTENCES CLÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  67: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je sais naviguer sur internet :",
    InputContent: ["Oui", "Non"],
    Section: "VOS COMPÉTENCES CLÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  68: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je sais utiliser le Pack Office :",
    InputContent: ["Oui", "Non"],
    Section: "VOS COMPÉTENCES CLÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  69: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je sais utiliser une messagerie :",
    InputContent: ["Oui", "Non"],
    Section: "VOS COMPÉTENCES CLÉS",
    Dropdown: 0,
    DropdownValue: 0
  },
  70: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J’ai un ordinateur/une tablette chez moi :",
    InputContent: ["Oui", "Non"],
    Section: "MON BUDGET MOBILITÉ",
    Dropdown: 0,
    DropdownValue: 0
  },
  71: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J’ai une connexion internet :",
    InputContent: ["Oui", "Non"],
    Section: "MON BUDGET MOBILITÉ",
    Dropdown: 12,
    DropdownValue: 0
  },
  72: {
    Type: "Fermée",
    InputNumber: 4,
    Content: "SI OUI, je navigue sur:",
    InputContent: ["Ordinateur", "Tablette", "Téléphone", "Autre"],
    Section: "MON BUDGET MOBILITÉ",
    Dropdown: 0,
    DropdownValue: 12
  },
  73: {
    Type: "Fermée",
    InputNumber: 3,
    SingleResponse:true,
    Require: true,
    Content: "Mon forfait téléphonique s’élève de :",
    InputContent: ["0 à 15€", "15 à 30€", "30€ et plus"],
    Section: "MON BUDGET MOBILITÉ",
    Dropdown: 0,
    DropdownValue: 0
  },
  74: {
    Type: "Fermée",
    InputNumber: 3,
    SingleResponse:true,
    Require: true,
    Content: "Coût de mon budget mensuel pour mes déplacements :",
    InputContent: ["- de 30€", "30 à 50€", "50€ et plus"],
    Section: "MON BUDGET MOBILITÉ",
    Dropdown: 0,
    DropdownValue: 0
  },
  75: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J’utilise un comparateur de tarif pour choisir mon mode de transport :",
    InputContent: ["Oui", "Non"],
    Section: "MON BUDGET MOBILITÉ",
    Dropdown: 0,
    DropdownValue: 0
  },
  76: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Avez-vous des crédits en cours ?",
    InputContent: ["Oui", "Non"],
    Section: "MON BUDGET MOBILITÉ",
    Dropdown: 0,
    DropdownValue: 0
  },
  77: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Pouvez vous prétendre à un crédit ?",
    InputContent: ["Oui", "Non"],
    Section: "MON BUDGET MOBILITÉ",
    Dropdown: 0,
    DropdownValue: 0
  },
  78: {
    Type: "Fermée",
    InputNumber: 4,
    Require: true,
    Content: "Quels sont vos modes de paiments :",
    InputContent: ["Espèces", "Chèques", "Carte bancaire", "Autre"],
    Section: "MON BUDGET MOBILITÉ",
    Dropdown: 0,
    DropdownValue: 0
  },
  79: {
    Type: "Fermée",
    InputNumber: 3,
    SingleResponse:true,
    Require: true,
    Content: "J'épargne :",
    InputContent: ["Régulièrement", "Rarement", "Jamais"],
    Section: "MON BUDGET MOBILITÉ",
    Dropdown: 0,
    DropdownValue: 0
  },
  80: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J'ai des contraventions à payer",
    InputContent: ["Oui", "Non"],
    Section: "MON BUDGET MOBILITÉ",
    Dropdown: 0,
    DropdownValue: 0
  },
  81: {
    Type: "Fermée",
    InputNumber: 4,
    Require: true,
    Content: "J’ai des projets à financer :",
    InputContent: ["Mobilité", "Logement", "Loisirs", "Autre"],
    Section: "MON BUDGET MOBILITÉ",
    Dropdown: 0,
    DropdownValue: 0
  },
  82: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Financièrement je peux louer un véhicule :",
    InputContent: ["2 roues", "4 roues"],
    Section: "MON BUDGET MOBILITÉ",
    Dropdown: 0,
    DropdownValue: 0
  },
  83: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J'habite à la campagne",
    InputContent: ["Oui", "Non"],
    Section: "MON CADRE DE VIE",
    Dropdown: 0,
    DropdownValue: 0
  },
  84: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J'habite en ville",
    InputContent: ["Oui", "Non"],
    Section: "MON CADRE DE VIE",
    Dropdown: 0,
    DropdownValue: 0
  },
  85: {
    Type: "Fermée",
    InputNumber: 3,
    SingleResponse:true,
    Require: true,
    Content: "J'ai accès à des moyens de transport à :",
    InputContent: ["- de 5 minutes", "de 5 à 10 minutes", "+ de 10 minutes"],
    Section: "MON CADRE DE VIE",
    Dropdown: 0,
    DropdownValue: 0
  },
  86: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je connais la fréquence des lignes de bus",
    InputContent: ["Oui", "Non"],
    Section: "MON CADRE DE VIE",
    Dropdown: 0,
    DropdownValue: 0
  },
  87: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je connais l’amplitude horaire des moyens de transports mis à disposition :",
    InputContent: ["Oui", "Non"],
    Section: "MON CADRE DE VIE",
    Dropdown: 0,
    DropdownValue: 0
  },
  88: {
    Type: "Fermée",
    InputNumber: 3,
    SingleResponse:true,
    Require: true,
    Content: "La gare SNCF la + proche de chez moi est à :",
    InputContent: ["- de 5 minutes", "de 5 à 10 minutes", "+ de 10 minutes"],
    Section: "MON CADRE DE VIE",
    Dropdown: 0,
    DropdownValue: 0
  },
  89: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je participe à la vie de mon quartier:",
    InputContent: ["Oui", "Non"],
    Section: "MON CADRE DE VIE",
    Dropdown: 0,
    DropdownValue: 0
  },
  90: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je fais partie d'un club(sport,loisir):",
    InputContent: ["Oui", "Non"],
    Section: "MON CADRE DE VIE",
    Dropdown: 0,
    DropdownValue: 0
  },
  91: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J’ai une solution de garde pour mes enfants :",
    InputContent: ["Oui", "Non"],
    Section: "MON CADRE DE VIE",
    Dropdown: 0,
    DropdownValue: 0
  },
  92: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J’ai sous ma responsabilité une personne vulnérable :",
    InputContent: ["Oui", "Non"],
    Section: "MON CADRE DE VIE",
    Dropdown: 0,
    DropdownValue: 0
  },
  93: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je suis titulaire du bail de mon logement :",
    InputContent: ["Oui", "Non"],
    Section: "MON CADRE DE VIE",
    Dropdown: 0,
    DropdownValue: 0
  },
  94: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Mon logement est-il adapté à ma situation personnelle :",
    InputContent: ["Oui", "Non"],
    Section: "MON CADRE DE VIE",
    Dropdown: 0,
    DropdownValue: 0
  },
  95: {
    Type: "Ouverte",
    InputNumber: 1,
    Require: true,
    Content: "Nombre de chambres",
    InputContent: "Le nombre de chambres de votre logement",
    Section: "MON CADRE DE VIE",
    Dropdown: 0,
    DropdownValue: 0
  },
  96: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J’ai un projet de déménagement :",
    InputContent: ["Oui", "Non"],
    Section: "MON CADRE DE VIE",
    Dropdown: 13,
    DropdownValue: 0
  },
  97: {
    Type: "Fermée",
    InputNumber: 3,
    Content: "SI OUI, je souhaite déménager dans :",
    InputContent: ["Ma ville ", "Mon département ", "Ma région "],
    Section: "MON CADRE DE VIE",
    Dropdown: 0,
    DropdownValue: 13
  },
  98: {
    Type: "Ouverte",
    InputNumber: 1,
    Content: "Autre",
    InputContent: ["Ma destination de démanagement"],
    Section: "MON CADRE DE VIE",
    Dropdown: 0,
    DropdownValue: 13
  },
  99: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je dispose d’un garage/ d’une cave dans mon logement :",
    InputContent: ["Oui", "Non"],
    Section: "MON CADRE DE VIE",
    Dropdown: 0,
    DropdownValue: 0
  },
  100: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je suis né(e) dans un pays étranger :",
    InputContent: ["Oui", "Non"],
    Section: "MA SITUATION PERSONNELLE",
    Dropdown: 0,
    DropdownValue: 0
  },
  101: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je dois faire ma journée d'Appel à la Défense (Pour les personnes de Nationnalité Française):",
    InputContent: ["Oui", "Non"],
    Section: "MA SITUATION PERSONNELLE",
    Dropdown: 0,
    DropdownValue: 0
  },
  102: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Mon projet professionnel est identifié :",
    InputContent: ["Oui", "Non"],
    Section: "MA SITUATION PERSONNELLE",
    Dropdown: 0,
    DropdownValue: 0
  },
  103: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je suis acompagné(e) dans mes recherches d’emploi :",
    InputContent: ["Oui", "Non"],
    Section: "MA SITUATION PERSONNELLE",
    Dropdown: 0,
    DropdownValue: 0
  },
  104: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je suis inscrit en agence intérimaire :",
    InputContent: ["Oui", "Non"],
    Section: "MA SITUATION PERSONNELLE",
    Dropdown: 0,
    DropdownValue: 0
  },
  105: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je suis inscrit sur des sites d’offres d’emploi & réseaux :",
    InputContent: ["Oui", "Non"],
    Section: "MA SITUATION PERSONNELLE",
    Dropdown: 0,
    DropdownValue: 0
  },
  106: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Mon projet professionnel est adapté à mon état de santé :",
    InputContent: ["Oui", "Non"],
    Section: "MA SITUATION PERSONNELLE",
    Dropdown: 0,
    DropdownValue: 0
  },
  107: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je fais des candidatures spontannées :",
    InputContent: ["Oui", "Non"],
    Section: "MA SITUATION PERSONNELLE",
    Dropdown: 0,
    DropdownValue: 0
  },
  108: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je suis suivi pour ma santé :",
    InputContent: ["Oui", "Non"],
    Section: "MA SITUATION PERSONNELLE",
    Dropdown: 0,
    DropdownValue: 0
  },
  109: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je souhaite passer le permis B :",
    InputContent: ["Oui", "Non"],
    Section: "MES PROJETS MOBILITE",
    Dropdown: 0,
    DropdownValue: 0
  },
  110: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J’ai le permis B ( voiture) :",
    InputContent: ["Oui", "Non"],
    Section: "MES PROJETS MOBILITE",
    Dropdown: 0,
    DropdownValue: 0
  },
  111: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je suis inscrit en auto-école :",
    InputContent: ["Oui", "Non"],
    Section: "MES PROJETS MOBILITE",
    Dropdown: 14,
    DropdownValue: 0
  },
  112: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "SI OUI, depuis quand?",
    InputContent: ["Depuis un an ", "Depuis deux ans "],
    Section: "MES PROJETS MOBILITE",
    Dropdown: 0,
    DropdownValue: 14
  },
  113: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je suis titulaire du code de la route :",
    InputContent: ["Oui", "Non"],
    Section: "MES PROJETS MOBILITE",
    Dropdown: 0,
    DropdownValue: 0
  },
  114: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J’ai des difficultés dans mon apprentissage :",
    InputContent: ["Oui", "Non"],
    Section: "MES PROJETS MOBILITE",
    Dropdown: 15,
    DropdownValue: 0
  },
  115: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Content: "SI OUI, à quel niveau?",
    InputContent: ["Code ", "Conduite "],
    Section: "MES PROJETS MOBILITE",
    Dropdown: 0,
    DropdownValue: 15
  },
  116: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J’ai peur de conduire:",
    InputContent: ["Oui", "Non"],
    Section: "MES PROJETS MOBILITE",
    Dropdown: 0,
    DropdownValue: 0
  },
  117: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je suis titulaire d’un permis étranger :",
    InputContent: ["Oui", "Non"],
    Section: "MES PROJETS MOBILITE",
    Dropdown: 0,
    DropdownValue: 0
  },
  118: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "Je suis titulaire du permis AM ou né avant 1987 :",
    InputContent: ["Oui", "Non"],
    Section: "MES PROJETS MOBILITE",
    Dropdown: 0,
    DropdownValue: 0
  },
  119: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J’aimerai passer mon permis AM :",
    InputContent: ["Oui", "Non"],
    Section: "MES PROJETS MOBILITE",
    Dropdown: 0,
    DropdownValue: 0
  },
  120: {
    Type: "Fermée",
    InputNumber: 2,
    SingleResponse:true,
    Require: true,
    Content: "J’ai déjà conduit un scooter :",
    InputContent: ["Oui", "Non"],
    Section: "MES PROJETS MOBILITE",
    Dropdown: 0,
    DropdownValue: 0
  }

}



document.getElementById('ko').addEventListener('click', async (e) => {
  async function testEnvoi(options) {
    await fetch('http://localhost:3000/question/createQ', options).then(res => {
      if (res.ok) {
        console.log("Question envoyée")
      } else {
        console.log("Ta mère")
      }
    })
  }
  for (const question in questions) {
    console.log(questions[question]);

    const Json = JSON.stringify(questions[question])
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: Json
    }

    await testEnvoi(options);
  }
})


