// ═══════════════════════════════════════════════════════════
//  DONNÉES — Modifie / complète ce tableau avec les questions
// ═══════════════════════════════════════════════════════════
const QUESTIONS = [
  /*
   * Exemple de question à CHOIX UNIQUE :
   * {
   *   question: "Quelle est la fréquence utilisée par la 4G en France ?",
   *   options: ["700 MHz", "900 MHz", "2100 MHz", "5800 MHz"],
   *   correct: [0],          // indice(s) base-0 de la/les bonne(s) réponse(s)
   *   multiple: false,        // false = choix unique
   *   explanation: "La bande 700 MHz est la principale bande utilisée en France." // optionnel
   * },
   *
   * Exemple de question à CHOIX MULTIPLES :
   * {
   *   question: "Quelles technologies sont utilisées en 4G ? (plusieurs réponses)",
   *   options: ["OFDMA", "CDMA", "MIMO", "TDMA"],
   *   correct: [0, 2],        // deux bonnes réponses : OFDMA et MIMO
   *   multiple: true,         // true = plusieurs réponses possibles
   *   explanation: "La 4G utilise OFDMA pour l'accès multiple et MIMO pour les antennes."
   * },
  */

  // ← Ajoute tes questions ici ↓
  {
    "question": "S1.L1.Q1 : Sur la photo ci-dessus, l'élément A est :",
    "options": ["une station de base", "une cellule", "une antenne", "une base de données"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.L1.Q2 : L'élément B est :",
    "options": ["une station de base", "une cellule", "une antenne", "une base de données"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.L1.Q3 : Sélectionner la ou les affirmations qui vous paraissent correctes",
    "options": ["En 4G la carte SIM n'est plus du tout utilisée", "La carte SIM contient l'identité de l'abonnement, cette identité est unique au monde", "La carte SIM est fournie par l'opérateur auquel on a souscrit un abonnement"],
    "correct": [1, 2],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S1.L2.Q1 : Un réseau cellulaire est constitué",
    "options": ["d'un ensemble de stations radios retransmettant l'information de la source aux destinataires par sauts successifs sur une voie radio", "d'un ensemble de satellites interconnectés entre eux", "d'un ensemble de stations de base déployées sur un large territoire et reliées à un réseau fixe"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.L2.Q2 : Dans une zone à forte densité de population (deux réponses attendues),",
    "options": ["les cellules sont grandes de façon à permettre de couvrir un grand nombre de personnes", "les cellules sont grandes de façon à minimiser le nombre de stations de base à installer et éviter des problèmes avec les riverains", "les cellules sont petites de façon à offrir une forte capacité en Mbit/s/km2", "les cellules sont petites de façon à minimiser le coût du réseau", "les cellules sont petites de façon à minimiser les puissances de transmission"],
    "correct": [2, 4],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S1.L2.Q3 : Dans un réseau radio-mobile, on découpe le territoire en cellules pour (plusieurs réponses possibles)",
    "options": ["permettre à chaque station de base de disposer d'une liaison satellite avec le réseau.", "faire en sorte qu'un terminal soit toujours sous la portée d'une station de base.", "emprisonner les ondes dans un espace limité.", "augmenter la capacité du réseau."],
    "correct": [1, 3],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S1.L2.Q4 : La voie balise est",
    "options": ["émise par le terminal et sert à déclencher les stations de base.", "émise par la station de base et sert à désactiver les terminaux.", "émise par la station de base et sert pour la couverture."],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.L2.Q5 : Un mobile ne capte aucune voie balise. Cela signifie que :",
    "options": ["l'utilisateur ne peut passer que des appels d'urgence", "l'utilisateur n'a pas payé sa facture", "aucun réseau cellulaire ne couvre la zone où se trouve l'utilisateur", "le mobile n'a pas assez de batterie pour joindre la station de base"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.L3.Q1 : SGW signifie",
    "options": ["Servile Gigantic Work", "Standalone Grouped gateWay", "Serving GateWay"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.L3.Q2 : Le SGW",
    "options": ["est un serveur qui permet au terminal de connaitre les paramètres du réseau", "est une passerelle qui permet l'interconnexion du réseau 4G au réseau internet", "est une passerelle correspondant à une zone géographique par laquelle transitent les données échangées entre les terminaux mobiles et les serveurs (ou les autres terminaux)", "est un pare-feu par lequel transitent les données échangées entre les terminaux mobiles et les serveurs (ou les autres terminaux) et qui filtre les paquets correspondant aux attaques"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.L3.Q3 : Le PGW",
    "options": ["est un serveur qui permet au terminal de connaitre les paramètres du réseau", "est une passerelle qui permet l'interconnexion du réseau 4G au réseau internet", "est une passerelle correspondant à une zone géographique par laquelle transitent les données échangées entre les terminaux mobiles et les serveurs (ou les autres terminaux)", "est un pare-feu par lequel transitent les données échangées entre les terminaux mobiles et les serveurs (ou les autres terminaux) et qui filtre les paquets correspondant aux attaques"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.L3.Q4 : Quand j'utilise un réseau 4G (avec une architecture standard), toutes les données qui arrivent et partent de mon terminal",
    "options": ["passent toujours par un SGW et un PGW", "passent toujours par un PGW mais par un SGW seulement si je ne suis pas à mon domicile", "passent toujours par un SGW mais par un PGW seulement si j'ai un abonnement professionnel"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.L4.Q1 : Dans le contexte des réseaux 4G, HSS signifie",
    "options": ["Holistic Serving System", "Home Subscriber Server", "Her Splendor's Ship", "Homo sapiens sapiens"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.L4.Q2 : Quand quelqu'un allume son terminal 4G et qu'il se connecte à un réseau 4G,",
    "options": ["le profil d'abonné stocké dans la carte SIM est transféré vers le HSS", "le profil d'abonné est stocké en permanence dans le MME et il activé localement", "le profil d'abonné stocké en permanence dans le HSS est transféré vers le MME"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.L4.Q3 : Le MME (Mobility Management Entity)",
    "options": ["contrôle un ensemble de stations de base à une échelle régionale voire nationale", "détermine à quelques dizaine de mètres près la localisation de chaque terminal", "filtre les paquets"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.L5.Q1 : Est-ce qu'un HSS échange des messages avec un PGW dans l'architecture standard EPC ?",
    "options": ["Oui", "Non"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.L5.Q2 : Est-ce qu'un MME peut être relié à plusieurs SGW",
    "options": ["Oui", "Non"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.L7.Q1 : Les réseaux 4G sont les premiers réseaux mobiles numériques",
    "options": ["Oui", "Non"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.L7.Q2 : La technologie UMTS (3G) repose sur",
    "options": ["la transmission analogique", "le multiplexage en fréquence (FDMA)", "le multiplexage par les codes (CDMA)"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.L7.Q3 : La technologie LTE (Long Term Evolution) est une légère évolution des technologies 3G",
    "options": ["Oui", "Non"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.L7.Q4 : En LTE, beaucoup plus de services sont spécifiés que pour la 3G",
    "options": ["Oui", "Non"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.DS.Q1 : En 4G la carte SIM",
    "options": ["n'est plus nécessaire", "contient l'ensemble des mécanismes de gestion de la voie radio", "contient l'identité unique au monde de l'abonné"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.DS.Q2 : Dans un réseau cellulaire, plus une cellule est petite",
    "options": ["plus la capacité en Mbit/s par kilomètre carré est faible.", "plus la capacité en Mbit/s par kilomètre carré est grande", "plus la liaison est de mauvaise qualité."],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.DS.Q3 : La couverture d'une station de base est (3 réponses attendues) :",
    "options": ["toujours circulaire.", "est choisie par l'opérateur en fonction du trafic attendu.", "la même pour toutes les stations de base.", "dépend de l'environnement - le terrain, les bâtiments, etc.", "déduite par les mobiles grâce à la voie balise par la station de base."],
    "correct": [1, 3, 4],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S1.DS.Q4 : La voie balise est utilisée pour (2 réponses attendues)",
    "options": ["permettre au mobile d'estimer la puissance du signal en provenance de la station de base", "estimer la puissance du signal du mobile vers la station de base", "diffuser des informations, telles que l'identité de l'opérateur", "dans les zones non couvertes par un opérateur, indiquer la direction vers laquelle il faut aller pour être couvert", "faire peur aux opérateurs concurrents"],
    "correct": [0, 2],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S1.DS.Q5 : Le réseau cœur (mobile) d'un opérateur",
    "options": ["est un réseau de type IP", "est un réseau utilisant un protocole réseau spécifique basé sur le protocole MNP (Mobile Network Protocol)", "est un réseau basé sur la signalisation sémaphore n°7 utilisée par les opérateurs télécom"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.DS.Q6 : On considère un abonné à un réseau 4G. Son terminal est allumé. L'abonné se déplace et il utilise le terminal pour différents services. La vérification des droits d'accès de l'abonné au service demandé",
    "options": ["se fait localement par le terminal par consultation de la carte SIM", "se fait systématiquement en consultant le HSS qui contient le profil d'abonné", "se fait en consultant le MME qui contient la recopie du profil d'abonné présent dans le HSS", "ne se fait jamais"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.DS.Q7 : On considère un abonné 4G qui consulte un serveur web. Indiquez, dans la liste ci-dessous, les équipements par lesquels passent les paquets échangés entre le terminal mobile et le serveur web (plusieurs réponses attendues)",
    "options": ["eNodeB", "HSS", "MME", "PGW", "SGW"],
    "correct": [0, 3, 4],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S1.DS.Q8 : Deux stations de base qui échangent des messages sur l'interface X2 sont-elles nécessairement directement reliées par une liaison ?",
    "options": ["Oui", "Non"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.DS.Q9 : Quand quelqu'un allume son terminal 4G et qu'il se connecte à un réseau 4G,",
    "options": ["le profil d'abonné stocké dans le terminal est transféré vers le HSS", "le profil d'abonné est stocké en permanence dans le MME et il activé localement", "le profil d'abonné stocké en permanence dans le HSS est transféré vers le MME"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S1.DS.Q10 : Le HSS (2 réponses attendues)",
    "options": ["contient la liste des abonnés du réseau", "est consulté par le MME pour que ce dernier dispose du profil des abonnés présents dans la zone que ce MME gère", "est consulté par le MME, le SGW, le PGW pour rapatrier le profil d'abonné et accéler ainsi les mécanismes de contrôle d'accès", "contient l'état précis de chaque terminal (au repos, actif, engagé dans un transfert) à tout instant"],
    "correct": [0, 1],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S2.L1.Q1 : L'IMSI (International Mobile Subscriber Identity)",
    "options": ["indique le numéro de téléphone en 06 de l'abonné", "contient l'adresse IP attribuée au terminal de l'abonné", "est une identité liée à l'abonné et invariante dans le temps liée à la carte USIM (appelée aussi SIM)", "est une identité invariante dans le temps qui est composée à partir des caractéristiques d'abonnement et du numéro de série du terminal"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L1.Q2 : Sélectionnez l'affirmation qui vous parait correcte.",
    "options": ["Chaque abonnement est lié à un IMSI qui est unique au monde", "Chaque abonnement est lié à un IMSI qui est unique dans un réseau donné", "Chaque abonnement est lié à un IMSI qui donne le pays, un autre IMSI qui donne l'opérateur et un IMSI qui donne un numéro de série"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L1.Q3 : En 4G, l'adresse IP d'un UE",
    "options": ["est une adresse figée donnée par l'opérateur à l'ouverture de l'abonnement", "est une adresse allouée dynamiquement par l'eNodeB à la mise sous tension du terminal", "est une adresse allouée dynamiquement par le PGW à la mise sous tension du terminal", "est systématiquement une adresse IPv4 allouée à l'entrée du terminal dans une nouvelle cellule"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L1.Q4 : Parmi les expressions suivantes, qu'est-ce qui peut correspondre à un APN ?",
    "options": ["137.193.211.2", "208 01 314567941", "websfr", "8080", "http://www.imt-atlantique.fr"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L2.Q1 : Un réseau 4G authentifie un abonné",
    "options": ["en vérifiant que l'IMSI qu'il indique a un format correct", "en consultant le HSS pour vérifier que l'IMSI est valide", "en demandant à l'UE de transmettre la clé K et en vérifiant qu'elle est correcte", "en envoyant un nombre aléatoire et en vérifiant que le résultat calculé par l'UE est égal au résultat attendu"],
    "correct": [3],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L2.Q2 : L'opérateur mobile possède le HSS et fournit la carte SIM. Est-ce qu'il est possible pour l'opérateur d'utiliser un algorithme d'authentification propriétaire (fonction f spécifique à l'opérateur) ?",
    "options": ["Non, c'est techniquement impossible", "Non, l'abonné ne sera pas capable d'effectuer des déplacements en itinérance", "Oui, pourvu que les valeurs RAND et RES gardent une taille conforme à la spécification", "Oui, sans limitation pour RAND et RES"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L2.Q3 : Deux mobiles reçoivent une demande d'authentification simultanément. Par hasard, les valeurs RAND choisies par le réseau cellulaire sont les mêmes. Est-ce que les réponses signées RES sont nécessairement identiques ?",
    "options": ["Non, les mobiles vont traiter les défis comme duplication et vont signaler une erreur", "Non, mais uniquement dans le cas où les mobiles utilisent des algorithmes d'authentification différents (fonction f)", "Non, la probabilité que les secrets partagés des abonnés coïncident est très faible ~1/2^128", "Oui, les valeurs aléatoires d'entrée sont les mêmes - les réponses le seront aussi", "Oui mais seulement si les demandes sont parfaitement synchronisées (très peu probable)"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L2.Q4 : Pour l'authentification du réseau par le terminal,",
    "options": ["le terminal considère que le réseau est de confiance car il est tout à fait impossible technologiquement à un attaquant de déployer une station de base pirate", "le terminal produit un nombre aléatoire, le transmet au réseau et vérifie que le résultat fourni par le réseau correspond au résultat calculé par la carte SIM à partir de la clé secrète", "le réseau calcule le jeton d'authentification à partir du nombre aléatoire utilisé pour l'authentification du terminal, il l'envoie au terminal qui vérifie que le jeton correspond au résultat calculé par la carte SIM à partir de la clé secrète et du nombre aléatoire", "le réseau calcule le jeton d'authentification à partir du nombre aléatoire utilisé pour l'authentification du terminal et d'un numéro de séquence, il l'envoie au terminal qui vérifie que le jeton correspond au résultat calculé par la carte SIM à partir de la clé secrète, du nombre aléatoire et du numéro de séquence"],
    "correct": [3],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L3.Q1 : Le chiffrement en 4G est basé",
    "options": ["sur une clé symétrique (autrement dit la même clé est utilisé pour le chiffrement et le déchiffrement)", "sur une clé pulique pour le chiffrement et une clé privée pour le déchiffrement (chiffrement asymétrique)"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L3.Q2 : Dans un réseau mobile, l'opération de chiffrement est",
    "options": ["beaucoup moins complexe que l'opération de déchiffrement", "de complexité égale à l'opération de déchiffrement", "beaucoup plus complexe que l'opération de déchiffrement"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L3.Q3 : La séquence de chiffrement est calculée",
    "options": ["à partir d'un nombre aléatoire tirée à chaque nouvelle transmission et de la clé secrète K de l'abonné", "à partir d'une clé Kenc (enc = encryption) stable, d'un nombre aléatoire et d'indicateurs complémentaires stables (direction, longueur,...)", "à partir d'une clé Kenc stable, d'un compteur régulièrement incrémenté et d'indicateurs complémentaires stables (direction, longueur,...)", "à partir d'une clé Kenc stable et d'indicateurs complémentaires stables (direction, longueur,...)"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L3.Q4 : On suppose qu'un paquet est réduit à un seul caractère ASCII (plus précisément UTF-8). C'est impossible en 4G mais c'est considéré ici pour garder un exercice simple. Le code de A est 0100 0001 en binaire. On suppose que la séquence de chiffrement est 0110 0110. La séquence chiffrée est",
    "options": ["0100 0000", "0010 0111", "0110 0111", "1100 1000", "1010 0111", "0100 0001 0110 0110"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L3.Q5 : Un opérateur peut choisir son propre algorithme de chiffrement",
    "options": ["Non, l'abonné pourrait communiquer dans son réseau avec tout terminal mais ne serait pas capable d'effectuer des déplacements en itinérance", "Non, l'abonné ne pourrait pas utiliser n'importe quel terminal", "Oui, pourvu que les entrées et sorties de l'algorithme propriétaire aient la même longueur que ceux des algorithmes standards", "Oui, sans limitation pour les tailles des entrées et sorties"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L4.Q1 : Dans le contexte de la sécurité, MAC signifie",
    "options": ["Medium Access Control", "Message Authentication Code", "Mobile Assisted Ciphering"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L4.Q2 : Le contrôle d'intégrité repose sur",
    "options": ["le fait que les transmissions sont chiffrées", "l'adjonction d'un code de très grande longueur calculé à partir d'une clé secrète", "l'adjonction d'un code de longueur réduite calculé à partir d'une clé secrète", "la division de chaque message en 2 parties, chaque partie étant envoyée sur un canal spécifique"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L4.Q3 : Un message échangé entre l'UE et l'eNodeB",
    "options": ["est d'abord chiffré puis on lui adjoint le code MAC", "est d'abord complété par le code MAC puis chiffré"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L4.Q4 : Le MAC utilisé pour le contrôle d'intégrité en 4G a une longueur de 32 bits. Si on le porte à 64 bits,",
    "options": ["on accélère le mécanisme de contrôle d'intégrité", "on rend plus facile une attaque car la charge induite sur le processeur des terminaux est augmentée", "on rend plus difficile une modification du message par un attaquant", "on ne change rien au niveau de sécurité"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L5.Q1 : Une clé de chiffrement peut être transmise d'un MME d'un opérateur à un MME d'un autre opérateur afin de minimiser les requêtes au HSS",
    "options": ["vrai", "faux"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L5.Q2 : La clé K_ASME, utilisée pour la sécurité des échanges entre l'UE et le réseau sur lequel l'UE est positionné (i.e. le réseau visité),",
    "options": ["est calculée par le HSS seulement à partir du nombre aléatoire servant à l'authentification et de la clé secrète K", "est calculée par le MME à partir du nombre aléatoire servant à l'authentification, de l'identité du réseau utilisé et de la clé secrète K", "est calculée par le HSS à partir du nombre aléatoire servant à l'authentification, de l'identité du réseau visité et de la clé secrète K", "est calculée par le MME à partir du nombre aléatoire servant à l'authentification, de l'identité du réseau utilisé, de l'identité de l'eNodeB et de la clé secrète K", "est calculée par le HSS à partir du nombre aléatoire servant à l'authentification, de l'identité du réseau utilisé, des identités du SGW et du PGW et de la clé secrète K"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L5.Q3 : La clé K_eNB, qui sert à calculer les clés de chiffrement pour les échanges entre l'UE et l'eNB,",
    "options": ["est une clé commune à tous les eNodeB d'un réseau", "est une clé secrète constante allouée par l'opérateur à chaque eNodeB", "est une clé calculée à partir de la clé K_ASME et qui change à chaque fois que l'UE change d'eNodeB"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L5.Q4 : En plus d'être calculée par l'UE, la clé K_eNB est calculée par",
    "options": ["l'eNodeB", "le HSS", "le MME", "le PGW", "le SGW"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L5.Q5 : En plus d'être calculée par l'UE, la clé K_RRCenc est calculée par",
    "options": ["l'eNodeB", "le HSS", "le MME", "le PGW", "le SGW"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L6.Q1 : Le TMSI (Temporary Mobile Subscriber Identity)",
    "options": ["est attribué temporairement à un abonné lorsqu'il vient de souscrire son abonnement dans l'attente qu'il ait l'IMSI définitif", "est renouvelé systématiquement à chaque changement de cellule", "est renouvelé systématiquement toutes les heures", "est renouvelé suivant la politique propre de l'opérateur"],
    "correct": [3],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L6.Q2 : Le TMSI (Temporary Mobile Subscriber Identity) est choisi par",
    "options": ["l'eNodeB", "le HSS", "le MME", "le PGW", "le SGW"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L6.Q3 : Le GUTI (Globally Unique Temporary Mobile Subscriber Identity)",
    "options": ["est calculé à partir de l'IMSI et d'une fonction cryptographique", "est forgé en concaténant le TMSI et l'identité du MME dans le réseau", "est forgé en concaténant le TMSI, l'identité du MME dans le réseau et l'identité du réseau (code pays et code opérateur)", "est forgé en concaténant le TMSI et l'identité de l'eNodeB, elle-même construite avec l'identité du réseau (code pays et code opérateur)"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L7.Q1 : Soit un abonné allumant son terminal dans un autre pays que celui où il a souscrit un abonnement. On appelle réseau visité le réseau où il se trouve. Le premier message envoyé par le MME au HSS pour demander des vecteurs d'authentification",
    "options": ["contient le code pays et le code opérateur correspondant à l'IMSI", "contient le code pays et le code opérateur où l'abonné se trouve le plus souvent", "contient le code pays et le code opérateur du réseau visité"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L7.Q2 : Le GUTI (contenant le TMSI) est alloué",
    "options": ["avant l'authentification", "après l'authentification mais avant l'activation du chiffrement", "après l'authentification et l'activation du chiffrement"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.L7.Q3 : L'adresse IP du terminal est allouée par",
    "options": ["l'eNodeB", "le HSS", "le MME", "le PGW", "le SGW"],
    "correct": [3],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.DS.Q1 : Un abonné 4G est identifié de manière unique et constante par",
    "options": ["son numéro de téléphone", "son adresse IP", "son GUTI", "son TMSI", "son IMSI"],
    "correct": [4],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.DS.Q2 : La carte SIM (ou USIM) doit contenir son propre microcontrôleur, espace de stockage d'information et mémoire vive pour :",
    "options": ["accélérer le traitement des demandes d'authentification.", "rendre impossible l'utilisation des terminaux volés.", "aider les anciens terminaux dans le traitement des données.", "permettre l'exécution de l'algorithme d'authentification dans un matériel maîtrisé par l'opérateur."],
    "correct": [3],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.DS.Q3 : L'IMSI est stocké en permanence dans (2 réponses attendues)",
    "options": ["la carte USIM", "l'eNodeB", "le HSS", "le MME", "le PGW", "le SGW", "le terminal"],
    "correct": [0, 2],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S2.DS.Q4 : Un réseau 4G fournit les fonctions de sécurité (beaucoup de réponses attendues...)",
    "options": ["authentification du terminal par le réseau", "authentification du réseau par le terminal", "chiffrement des données (utilisateurs)", "chiffrement de la signalisation", "vérification d'intégrité des messages de signalisation", "vérification d'intégrité des données (utilisateurs)", "confidentialité de l'identité"],
    "correct": [0, 1, 2, 3, 4, 6],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S2.DS.Q5 : Le fait d'utiliser des vecteurs d'authentification (2 réponses attendues)",
    "options": ["rend le système vulnérable à l'écoute du canal radio.", "permet à n'importe quel équipement du réseau d'authentifier un mobile sans dévoiler sa clef secrète", "permet à un réseau étranger d'authentifier et ensuite de chiffrer. Par contre, cela nécessite de dévoiler la clef K au HSS du réseau visité.", "réduit la charge du HSS qui, en envoyant plusieurs vecteurs en même temps, limite le nombre de requêtes qui lui seront envoyées."],
    "correct": [1, 3],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S2.DS.Q6 : Par quelles entités est exécuté l'algorithme d'authentification (fonction f dans le cours) ? (deux réponses attendues)",
    "options": ["par la carte SIM", "par le terminal (UE)", "par l'eNodeB", "par le MME", "par le HSS", "un centre de sécurité commun à tous les opérateurs 4G"],
    "correct": [0, 4],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S2.DS.Q7 : Par quelles entités est exécuté l'algorithme de chiffrement des données sur la voie radio ? (deux réponses attendues)",
    "options": ["par la carte SIM", "par le terminal (UE)", "par l'eNodeB", "par le MME", "par le HSS", "un centre de sécurité commun à tous les opérateurs 4G"],
    "correct": [1, 2],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S2.DS.Q8 : On considère le mécanisme d'authentification. Pour minimiser la charge de signalisation, un ingénieur conseille de réduire le nombre de bits du nombre aléatoire (le défi) et de le ramener à 12 bits (au lieu de 128) ainsi que le nombre de bits du résultat signé et de le ramener à 8 bits (au lieu de 32). (2 réponses attendues)",
    "options": ["c'est judicieux car cela va réduire de façon importante la taille des messages d'authentification", "c'est sans intérêt car la taille des messages sera peu réduite à cause de la taille des en-tête et des autres champs", "cela ne réduira pas le niveau de sécurité à condition de conserver un choix aléatoire du défi envoyé", "cela ne réduira pas le niveau de sécurité à condition de conserver une clé de taille importante", "cela réduira le niveau de sécurité car il y a plus de chances d'avoir deux fois la même valeur du défi", "cela réduira le niveau de sécurité car on n'a plus des mots multiples de 32 bits qui sont standards dans les processeurs"],
    "correct": [1, 4],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S2.DS.Q9 : On suppose qu'un paquet est réduit à un seul caractère ASCII (plus précisément UTF-8). C'est impossible en 4G mais c'est considéré ici pour garder un exercice simple. Le code de M est 0100 1101 en binaire. On suppose que la séquence de chiffrement est 1010 0110. La séquence chiffrée est",
    "options": ["1111 0001", "1110 0011", "1110 1011", "1011 0111", "0001 0010", "0100 1101 1010 0110"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.DS.Q10 : Suite de la question précédente. Pour déchiffrer la séquence, le récepteur",
    "options": ["fait un XOR (Ou exclusif) bit à bit entre la séquence reçue et la séquence de chiffrement", "fait un XOR bar (Non Ou exclusif) bit à bit entre la séquence reçue et la séquence de chiffrement", "soustrait la séquence de chiffrement en hexadécimal à la séquence reçue hexadécimal (en complément à 2)", "additionne la séquence de chiffrement à la séquence reçue"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.DS.Q11 : Dans le contexte de cette question et de la suivante, MAC signifie Message Authentication Code. Le contrôle d'intégrité",
    "options": ["permet d'empêcher un tiers de modifier un message seulement si celui-ci est chiffré", "permet d'empêcher un tiers de modifier un message à condition que la clé utilisée pour calculer le code MAC reste secrète", "permet d'empêcher un tiers de modifier un message seulement si le tiers ne modifie pas le code MAC", "permet d'empêcher un tiers de modifier un message seulement si le tiers change la longueur de ce message"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S2.DS.Q12 : Le contrôle d'intégrité est",
    "options": ["d'autant plus rapide que le MAC est long", "d'autant plus sûr que le MAC est long", "d'autant plus sûr que le MAC est court", "également sûr quelle que soit la longueur du MAC"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L1.1: Sélectionnez les affirmations valides.",
    "options": ["La modulation BPSK est plus sensible aux perturbations que la QPSK", "La modulation BPSK est moins sensible aux perturbations que la QPSK", "La modulation BPSK offre un débit supérieur à la QPSK", "La modulation BPSK offre un débit inférieur à la QPSK"],
    "correct": [1, 3],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S3.L1.2: LTE intègre un système de correction d'erreurs.",
    "options": ["Vrai", "Faux"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L1.3: Donnez le nombre de bits par symbole en BPSK.",
    "options": ["1 bit / symbole", "2 bits / symbole", "3 bits / symbole", "4 bits / symbole", "6 bits / symbole", "8 bits / symbole"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L1.4: Combien de bits peut être transmis dans un symbole 16-QAM?",
    "options": ["1 bit / symbole", "2 bits / symbole", "3 bits / symbole", "4 bits / symbole", "6 bits / symbole", "8 bits / symbole"],
    "correct": [3],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L1.5: La transmission OFDM:",
    "options": ["Est conçue pour une bande de fréquence étroite", "Est conçue pour une large bande de fréquence", "Sert à transmettre sur plusieurs antennes simultanément", "N'est utilisée qu'en LTE", "Est adaptée aux environnements urbains"],
    "correct": [1, 4],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S3.L1.6: En LTE, deux utilisateurs peuvent utiliser des modulations différentes.",
    "options": ["Vrai", "Faux"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L2.1: Un élément de ressource (RE) contient (deux réponses attendues) :",
    "options": ["Un symbole", "Un nombre variable de symboles (cela dépend de la modulation choisie)", "Un bit", "Un nombre variable de bits (cela dépend de la modulation choisie)"],
    "correct": [0, 3],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S3.L2.2: Un bloc de ressource ou \"Resource Block\" (RB) contient typiquement:",
    "options": ["7 éléments de ressource (RE)", "12 éléments de ressource (RE)", "84 éléments de ressource (RE)", "Un nombre variable d'éléments de ressource (RE)"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L2.3: La taille des blocs de transport (plusieurs réponses possibles):",
    "options": ["Est fixe", "Peut varier en fonction de la modulation utilisée", "Peut varier en fonction du nombre de blocs de ressource disponible"],
    "correct": [1, 2],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S3.L2.4: En LTE, les ressources sont alloués:",
    "options": ["toutes les 0,5ms", "toutes les 1ms", "pour une durée déterminée lors de la connexion d'un UE"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L2.5: On considère un opérateur qui dispose d'une bande de fréquence de 20MHz, combien de paires de blocs de ressources (RB) sont disponibles chaque ms?",
    "options": ["100"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L2.6: Quel débit brut peut-on atteindre en utilisant le MCS 23 avec 6 paires de blocs de ressources? Exprimez le résultat en Mb/s à +/- 0.1Mb/s",
    "options": ["2.9"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L2.6: Le MCS est réduit à 10. Par rapport à la question précédente, le débit alloué à l'utilisateur",
    "options": ["diminue", "ne varie pas", "augmente"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L2.7: Il y a maintenant 2 utilisateurs notés U1 et U2 qui ont respectivement un MCS de 23 et de 10... Quel est le débit brut pour U1 ?",
    "options": ["1.492"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L3.1: En LTE, l'allocation des ressources radio est gérée par:",
    "options": ["Le réseau coeur", "Les eNodeB", "Les terminaux", "conjointement par les eNodeB et les terminaux"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L3.2: Les équipements qui n'ont rien à transmettre consomment autant de ressources que les autres.",
    "options": ["Vrai", "Faux"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L3.3: Sur la voie descendante, seule l'eNodeB émet.",
    "options": ["Vrai", "Faux"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L3.4: L'eNB peut émettre sur la voie montante (des UE vers l'eNB).",
    "options": ["Vrai", "Faux"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L3.5: Le RNTI:",
    "options": ["Est une adresse courte calculée à partir de l'IMSI", "Est déterminé par l'UE", "Est déterminé par l'eNB", "Permet d'identifier de façon unique un terminal au sein d'une cellule"],
    "correct": [2, 3],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S3.L3.6: La station de base publie:",
    "options": ["La table d'allocation de la voie descendante pour la sous-trame courante", "La table d'allocation de la voie descendante 4 sous-trames à l'avance", "La table d'allocation de la voie montante pour la sous-trame courante", "La table d'allocation de la voie montante 4 sous-trames à l'avance"],
    "correct": [0, 3],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S3.L3.7: S'ils n'ont que peu de données à envoyer, les terminaux peuvent les transmettre sur le canal de contrôle de la voie montante.",
    "options": ["Vrai", "Faux"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L4.1: La couche MAC traite les erreurs au niveau:",
    "options": ["des éléments de ressource (RE)", "des blocs de ressource (RB)", "des blocs de transport", "des paquets IP"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L4.2: En cas d'erreur, la réémission a lieu:",
    "options": ["dans la sous-trame suivant l'émission, grâce au système d'acquittement", "dans les 4ms suivant l'émission car il faut laisser le temps à l'émetteur de se préparer", "8ms plus tard", "au moin 100 ms plus tard pour bénéficier de conditions radios différentes"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L4.3: Le send and wait parallélisé (2 réponses attendues):",
    "options": ["n'est mis en oeuvre que sur la station de base", "peut engendrer des dé-séquencements", "est géré par la couche RLC (qui se trouve au dessus de la couche MAC)", "permet le multiplexage de plusieurs canaux logiques", "permet d'augmenter le débit jusqu'à un facteur 8"],
    "correct": [1, 4],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S3.L4.4: Le MAC-PDU est un:",
    "options": ["RLC-SDU", "RLC-PDU", "bloc de transport", "bloc de ressources"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L4.5: Dans le sens descendant, un MAC-PDU peut (plusieurs réponses attendues):",
    "options": ["contenir des données destinées à différents terminaux", "regrouper des données provenant de différentes sources", "regrouper des données de différentes natures", "regrouper des données issues de protocoles de signalisation et des données utilisateur"],
    "correct": [1, 2, 3],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S3.L5.1: RLC signifie:",
    "options": ["Rolex Learning Center", "Radio Layer Correction", "Radio Link Control", "Random Loss Correction"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L5.2: le mode TM (Transparent Mode) de RLC est utilisé habituellement pour transporter",
    "options": ["des messages de signalisation diffusés", "de la voix sur IP (VoIP)", "du trafic web (tel que le trafic HTTP)"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L5.3: Le mode UM (Unacknowledged Mode) est généralement utilisé pour transporter:",
    "options": ["certains messages de signalisation", "de la voix (VoIP)", "des fichiers de données"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L5.4: Le mode AM (Acknowledged Mode) est généralement utilisé pour transporter:",
    "options": ["certains messages de signalisation", "de la voix (VoIP)", "des fichiers de données"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L5.5: En mode UM (Unacknowledged Mode), le destinataire envoie un acquittement à chaque fois qu'il reçoit un message",
    "options": ["Vrai", "Faux"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L5.6: En mode AM (Acknowledged Mode), le destinataire envoie un acquittement à chaque fois qu'il reçoit un message:",
    "options": ["Vrai", "Faux"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L5.7: Le terminal choisit son mode de fonctionnement (TM, UM ou AM) lorsqu'il se connecte dans une cellule.",
    "options": ["Vrai", "Faux"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L5.8: Dans quel(s) mode RLC a-t-il besoin de numéros de séquence?",
    "options": ["en mode TM (Transparent Mode)", "en mode UM (Unacknowledged Mode)", "en mode AM (Acknowledged Mode)"],
    "correct": [1, 2],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S3.L6.1: Lesquelles de ces assertions sont vraies (2 réponses attendues)?",
    "options": ["Dans un protocole à contention, il peut y avoir des collisions.", "Dans un protocole à contention, il ne peut pas y avoir de collisions.", "Dans un protocole à réservation, il peut y avoir des collisions.", "Dans un protocole à réservation, il ne peut pas y avoir de collisions."],
    "correct": [0, 3],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S3.L6.2: Le partage des ressources sur l'interface radio LTE est principalement régi par un protocole:",
    "options": ["à contention", "à réservation fixe", "à réservation dynamique"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L6.3: L'eNB n'a pas le droit d'émettre sur le canal à accès aléatoire.",
    "options": ["Vrai", "Faux"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L6.4: Pour se faire connaitre de l'eNB, un nouvel arrivant transmet son TMSI sur le canal à accès aléatoire.",
    "options": ["Vrai", "Faux"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L6.5: Considérons deux UE qui se connectent simultanément. Il est possible qu'ils utilisent le même RA-RNTI.",
    "options": ["Vrai", "Faux"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L6.6: En cas de collision des requêtes d'accès provenant de 2 terminaux différents, c'est le MME qui résout le conflit.",
    "options": ["Vrai", "Faux"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L7.1: PDCP offre des services (3 réponsees attendues)",
    "options": ["de sécurité", "de segmentation/assemblage", "de détection d'erreurs", "de compression d'entête", "de correction d'erreurs", "d'allocation de ressources", "de gestion des problèmes liés aux handovers"],
    "correct": [0, 3, 6],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S3.L7.2: A quel niveau de l'interface radio est gérée la sécurité?",
    "options": ["PDCP"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L7.3: A quel niveau de l'interface radio est gérée la correction d'erreur?",
    "options": ["PHY (Couche Physique)"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L7.4: A quel niveau de l'interface radio est gérée l'allocation des ressources?",
    "options": ["MAC"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L7.5: A quel niveau de l'interface radio sont gérés la segmentation et l'assemblage des paquets?",
    "options": ["RLC"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L7.6: Quel niveau de l'interface radio propose des services pour aider la transition d'une cellule à une autre?",
    "options": ["PDCP"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L7.7: Quelle couche construit les blocs de transport?",
    "options": ["MAC"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.L7.8: Quelles couches disposent de fonctions de réémission?",
    "options": ["PDCP", "RLC", "MAC", "PHY"],
    "correct": [1, 2],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S3.D3.Q.1: La modulation la plus rapide en LTE est la 64-QAM... Combien de bits peut-on coder sur un symbole en 64-QAM?",
    "options": ["1 bit / symbole", "2 bits / symbole", "3 bits / symbole", "4 bits / symbole", "6 bits / symbole", "8 bits / symbole"],
    "correct": [4],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.D3.Q.2: LTE permet de diviser le spectre disponible en groupes de sous-fréquences et de les allouer aux différents UE en fonction de leurs besoins",
    "options": ["Vrai", "Faux"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.D3.Q.3: Pour transmettre des données en temps réel (comme de la voix sur IP) on préfèrera utiliser RLC en mode :",
    "options": ["UM", "AM"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.D3.Q.4: Sélectionnez les assertions valides lorsqu'on considère les échanges avec un UE donné (3 réponses attendues)",
    "options": ["Sur un eNB, il n'existe qu'une seule instance de MAC.", "Sur un eNB, il peut exister plusieurs instances de MAC.", "Sur un eNB, il n'existe qu'une seule instance de RLC.", "Sur un eNB, il peut exister plusieurs instances de RLC.", "Sur un eNB, il n'existe qu'une seule instance de PDCP.", "Sur un eNB, il peut exister plusieurs instances de PDCP"],
    "correct": [0, 3, 5],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S3.D3.Q.5: L'interface radio permet de chiffrer les données transmises",
    "options": ["Vrai", "Faux"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.D3.Q.6: De combien de paires de blocs de ressources dispose-t-on à chaque ms ?",
    "options": ["25"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.D3.Q.7: Quel est le débit maximal que l'on peut atteindre dans cette configuration ? Exprimez le résultat en Mb/s à +/- 0.1Mb/s",
    "options": ["18.3"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.D3.Q.8: Cas n°2 : L'utilisateur 2 est à une distance moyenne de l'eNB, il utilise le MCS 16. De quel débit dispose-t-il ? Exprimez le résultat en Mb/s à +/- 0.1Mb/s",
    "options": ["7.7"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.D3.Q.9: Cas n°3 : L'utilisateur 3 est très éloigné de l'eNB, il utilise le MCS 0. De quel débit dispose-t-il ? Exprimez le résultat en Mb/s à +/- 0.1Mb/s",
    "options": ["0.7"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.D3.Q.10: On suppose que la station de base transmet alternativement à chaque utilisateur... De quel débit dispose l'utilisateur 1? Exprimez le résultat en Mb/s à +/- 0.1Mb/s",
    "options": ["6.1"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.D3.Q.11: De quel débit dispose l'utilisateur 2? Exprimez le résultat en Mb/s à +/- 0.1Mb/s",
    "options": ["2.6"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.D3.Q.12: De quel débit dispose l'utilisateur 3? Exprimez le résultat en Mb/s à +/- 0.1Mb/s",
    "options": ["0.2"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.D3.Q.13: Quel est le débit moyen par utilisateur ? Exprimez le résultat en Mb/s à +/- 0.1Mb/s",
    "options": ["3.1"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.D3.Q.14: A votre avis, ce débit moyen est-il représentatif de la perception du débit par les utilisateurs ?",
    "options": ["Oui", "Non"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.D3.Q.15: Combien de millisecondes faut-il consacrer à l'utilisateur 2 ?",
    "options": ["3"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.D3.Q.16: Combien de millisecondes faut-il consacrer à l'utilisateur 3 ?",
    "options": ["27"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.D3.Q.17: Quelle est la durée totale d'un cycle utilisateur1-utilisateur2-utilisateur3 ? Donnez le résultat en ms.",
    "options": ["31"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.D3.Q.18: Calculez le débit effectif pour l'utilisateur 1. Notez que ce débit est (à peu près) identique pour les 2 autres utilisateurs.",
    "options": ["591"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.D3.Q.19: Comparez ce débit à celui affiché dans les publicités (c'est à dire pour un utilisateur seul dans la cellule).",
    "options": ["Supérieur", "Approximativement égal", "Inférieur"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S3.D3.Q.20: Selon vous, quelle est la meilleure stratégie d'ordonnancement (scheduling)?",
    "options": ["Le partage équitable du temps (1ms pour chacun)", "Le partage équitable de la ressource (même débit pour chacun)", "Une autre solution"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L1.Q1 : Quelle est l'adresse destination présente dans le paquet IP qui circule sur l'internet ?",
    "options": ["193.137.99.99", "192.108.117.241", "10.13.20.9", "10.1.3.14", "10.1.3.1", "10.1.1.2", "10.1.1.1"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L1.Q2 : Ce paquet est routé",
    "options": ["directement vers l'UE sans passer par aucun équipement intermédiaire", "vers le PGW", "vers le routeur d'adresse 10.1.3.14"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L1.Q3 : Comment ce paquet est acheminé correctement vers le terminal mobile ?",
    "options": ["les tables de routage de tous les équipements du réseau cœur (eNB, SGW, PGW, routeurs) sont modifiées pour s'assurer que le paquet est correctement routé vers le terminal là où il se trouve", "le paquet est systématiquement transmis vers tous les eNodeB par un processus d'inondation pour s'assurer qu'il atteint l'eNB où le terminal se trouve", "le paquet est placé dans un autre paquet pour être transmis du PGW vers le SGW puis du SGW vers l'eNB où le terminal se trouve", "le paquet est placé dans un autre paquet pour être transmis du PGW vers l'eNB où le terminal se trouve"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L2.Q1 : quelle configuration correspond à ce qu'on observe ?",
    "options": ["A", "B", "C", "D"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L2.Q2 : Que vaut l'adresse destination du premier en-tête IP (dans l'ordre de transmission) ?",
    "options": ["193.137.99.99", "192.108.117.241", "10.13.20.9", "10.1.3.14", "10.1.3.1", "10.1.1.2", "10.1.1.1"],
    "correct": [5],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L2.Q3 : On considère maintenant l'adresse destination du deuxième en-tête IP (dans l'ordre de transmission). Que vaut-il ?",
    "options": ["193.137.99.99", "192.108.117.241", "10.13.20.9", "10.1.3.14", "10.1.3.1", "10.1.1.2", "10.1.1.1"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L2.Q4 : Ce paquet est reçu par le SGW et retransmis. A quoi est égale l'adresse destination du premier en-tête IP (dans l'ordre de transmission) du paquet transmis par le SGW ?",
    "options": ["193.137.99.99", "192.108.117.241", "10.13.20.9", "10.1.3.14", "10.1.3.1", "10.1.1.2", "10.1.1.1"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L2.Q5 : On considère maintenant l'adresse destination du deuxième en-tête IP. Que vaut-elle ?",
    "options": ["193.137.99.99", "192.108.117.241", "10.13.20.9", "10.1.3.14", "10.1.3.1", "10.1.1.2", "10.1.1.1"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L3.Q1 : Chaque tunnel est identifié",
    "options": ["par un numéro qui est unique dans le réseau", "par une paire de numéros alloués d'une part par le terminal et d'autre part par le HSS", "par une paire de numéros alloués chacun par l'équipement à l'extrémité de ce tunnel"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L3.Q2 : Le TEID (Tunnel EndPoint Identifier)",
    "options": ["est codé sur 3 bits", "est codé sur 8 bits", "est codé sur 32 bits", "est codé sur 128 bits"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L3.Q3 : Le TEID (Tunnel EndPoint Identifier)",
    "options": ["est ajouté à l'en-tête IP", "remplace l'adresse IP source dans l'en-tête IP", "est ajouté à l'en-tête UDP", "est placé dans l'en-tête GTP", "est placé à la fin du paquet au niveau applicatif"],
    "correct": [3],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L3.Q4 : Soit un paquet transmis dans un tunnel du SGW vers le PGW, le TEID placé dans l'en-tête GTP",
    "options": ["est celui alloué par une entité centrale qui est, dans ce cas, le MME", "est celui alloué par le SGW", "est celui alloué par le PGW"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L4.Q1 : Quelle affirmation est exacte ?",
    "options": ["il y a un seul TEID et il vaut 101", "il y a un seul TEID et il vaut 3 333", "il y a un seul TEID et il vaut 3 334", "il y a un seul TEID et il vaut 22 222", "il y a deux TEIDs qui valent 101 et 3 333", "il y a deux TEIDs qui valent 22 222 et 3334"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L4.Q2 : Le paquet est reçu par le SGW. On étudie maintenant le paquet émis par le SGW.",
    "options": ["il y a un seul TEID et il vaut 101", "il y a un seul TEID et il vaut 3 333", "il y a un seul TEID et il vaut 3 334", "il y a un seul TEID et il vaut 22 222", "il y a deux TEIDs qui valent 101 et 3333", "il y a deux TEIDs qui valent 22 222 et 3334"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L4.Q3 : Quelle affirmation est exacte au sujet du TEID alloué par le SGW pour le terminal B (représenté par un point d'interrogation rouge dans le dessin) ?",
    "options": ["le TEID est nécessairement différent de toutes les valeurs affichées sur le dessin (101, 3333, 3334, 3339, 22 222, 22 444)", "Le TEID est nécessairement différent de toutes les valeurs déjà utilisées par le SGW (3333, 3334, 3339)", "Le TEID est nécessairement différent de toutes les valeurs utilisées sur l'interface de sortie vers les eNB du SGW (3333)", "Le TEID peut valoir n'importe quelle valeur car il n'y a pas de tunnel déjà établi par l'eNB 2", "La valeur du TEID dépend entièrement de la politique de l'opérateur, on ne peut absolument rien dire dessus."],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L4.Q4 : On considère maintenant le TEID alloué par l'eNodeB 2 (représenté par un point d'interrogation bleu dans le dessin). Quelle affirmation est exacte ?",
    "options": ["Le TEID est nécessairement différent de toutes les valeurs affichées sur le dessin (101, 3333, 3334, 3339, 22 222, 22 444)", "Le TEID est nécessairement différent de toutes les valeurs déjà utilisées par le SGW (3333, 3334, 3339)", "Le TEID est nécessairement différent de toutes les valeurs utilisées sur l'interface de sortie vers les eNB du SGW (3333)", "Le TEID peut valoir n'importe quelle valeur car il n'y a pas de tunnel déjà établi par l'eNB 2", "La valeur du TEID dépend entièrement de la politique de l'opérateur, on ne peut absolument rien dire dessus."],
    "correct": [3],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L5.Q1 : Le protocole S1-AP se déroule entre",
    "options": ["l'UE et l'eNodeB", "l'UE et le MME", "l'eNodeB et le MME", "l'eNodeB et le SGW", "des points d'accès Wi-Fi (AP, Access Point) et un MME"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L5.Q2 : Le protocole S1-AP",
    "options": ["est sans connexion pour permettre un débit très élevé entre un eNodeB et un MME", "est orienté connexion et il y a au plus une connexion entre un eNodeB et un MME", "est orienté connexion et il y a autant de connexions entre un eNodeB et un MME que de terminaux connectés dans la cellule", "est orienté connexion et il y a autant de connexions entre un eNodeB et un MME que de blocs de ressources radio (RB) dans la cellule"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L5.Q3 : Un grand nombre d'eNodeB sont reliés au même MME. De multiples terminaux peuvent faire des demandes à des instants très proches dans la même cellule ou dans des cellules différentes. Pour différencier les messages émis par des terminaux différents",
    "options": ["l'IMSI de l'abonné est placé dans l'en-tête de chaque message", "le GUTI de l'abonné est placé dans l'en-tête de chaque message", "le RNTI de l'abonné est indiqué sur la voie radio et correspond à une paire d'identités de connexion sur l'interface S1", "l'identité de connexion est placée par chaque terminal et il y a une connexion par terminal sur l'interface S1."],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L6.Q1 : Lors d'un attachement d'un UE (i.e. d'un terminal) au réseau",
    "options": ["la connexion S1-AP est établie au début des échanges entre l'UE et le MME", "la connexion S1-AP est établie une fois qu'une association de sécurité est établie", "la connexion S1-AP est établie à la fin des échanges entre l'UE et le MME"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L6.Q2 : Le message S1AP Initial UE Message qui permet, entre autres, d'établir une connexion S1-AP contient",
    "options": ["seulement l'identifiant de connexion (Connection ID) choisi par l'eNodeB", "seulement l'identifiant de connexion choisi par le SGW", "seulement l'identifiant de connexion choisi par le MME", "deux identifiants de connexion (celui choisi par l'eNodeB et celui choisi par le MME)", "deux identifiants de connexion (celui choisi par l'eNodeB et celui choisi par le SGW)"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L6.Q3 : Le message S1AP Downlink NAS Transport émis par le MME permet de transporter un message à destination d'un UE sur une connexion S1-AP établie. Un tel message contient",
    "options": ["seulement l'identifiant de connexion (Connection ID) choisi par l'eNodeB", "seulement l'identifiant de connexion choisi par le SGW", "seulement l'identifiant de connexion choisi par le MME", "deux identifiants de connexion (celui choisi par l'eNodeB et celui choisi par le MME)", "deux identifiants de connexion (celui choisi par l'eNodeB et celui choisi par le SGW)"],
    "correct": [3],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L7.Q1 : Le plan contrôle (appelé aussi plan de commande) ou Control Plane",
    "options": ["désigne le plan stratégique décrivant les phases de déploiement du réseau cœur 4G", "désigne les en-têtes des paquets qui activent des fonctions de contrôle des équipements", "désigne l'ensemble des protocoles, mécanismes et messages nécessaires à la fourniture effective d'un service de communication au sein d'un réseau"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L7.Q2 : Lorsque je consulte un serveur web sur mon smart-phone, le paquet transportant la commande HTTP GET",
    "options": ["fait partie du plan utilisateur du réseau EPC", "fait partie du plan contrôle du réseau EPC"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L7.Q3 : Sur l'interface S1-MME, circulent",
    "options": ["des blocs de transports radio", "des paquets IP contenant des données utilisateurs destinés au MME", "des paquets IP contenant des messages de contrôles"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L7.Q4 : Considérons un message NAS transmis par un terminal. Le destinataire est",
    "options": ["l'eNB", "le MME", "le SGW", "le HSS"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.L7.Q5 : Tout message NAS transite par un eNB.",
    "options": ["Vrai", "Faux"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.DS.Q1 : Quelle est la pile de protocoles au-dessus d'Ethernet pour cette trace ? Le premier protocole cité (i.e. à gauche) est celui en bas de la pile, le dernier (i.e. à droite) est celui tout en haut de la pile.",
    "options": ["GTP / IP / IP(ICMP) / UDP", "IP / IP(ICMP) / UDP / GTP /", "IP / UDP / GTP / IP(ICMP)", "IP / GTP / IP(ICMP)", "IP(ICMP) / GTP / UDP / IP"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.DS.Q2 : A partir du décodage du paquet, indiquez l'adresse IP du SGW",
    "options": ["10.5.1.9", "10.5.1.10", "10.19.2.19", "170.22.0.80"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.DS.Q3 : A partir du décodage du paquet, indiquez l'adresse IP du PGW",
    "options": ["10.5.1.9", "10.5.1.10", "10.19.2.19", "170.22.0.80"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.DS.Q4 : A partir du décodage du paquet, indiquez l'adresse IP de l'UE",
    "options": ["10.5.1.9", "10.5.1.10", "10.19.2.19", "170.22.0.80"],
    "correct": [3],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.DS.Q5 : Quelle est l'adresse du serveur consulté",
    "options": ["10.5.1.9", "10.5.1.10", "10.19.2.19", "170.22.0.80"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.DS.Q6 : Quel est le TEID utilisé pour ce tunnel ?",
    "options": ["0x20912c25", "64514", "0x03d1"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.DS.Q7 : Ce TEID a été choisi préalablement par le",
    "options": ["eNodeB", "MME", "SGW", "PGW", "UE"],
    "correct": [3],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.DS.Q8 : Donner les adresses IP du SGW (2 réponses attendues)",
    "options": ["10.5.1.9", "10.5.1.10", "10.11.1.137", "10.2.11.42", "10.19.2.19", "170.22.0.80"],
    "correct": [1, 2],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S4.DS.Q9 : Donner l'adresse IP de l'eNodeB",
    "options": ["10.5.1.9", "10.5.1.10", "10.11.1.137", "10.2.11.42", "10.19.2.19", "170.22.0.80"],
    "correct": [3],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.DS.Q10 : On s'intéresse dans les questions suivantes à la table d'actions du SGW qui indique le traitement à effectuer pour tout paquet reçu en fonction du TEID (action \"forward\" dans le cas présent). Pour tout paquet arrivant au SGW avec le TEID 0x04b18525, vers quelle adresse IP faut-il envoyer le paquet ?",
    "options": ["10.5.1.9", "10.5.1.10", "10.11.1.137", "10.2.11.42", "10.19.2.19", "170.22.0.80"],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.DS.Q11 : Quel TEID place-t-on dans l'en-tête GTP du paquet renvoyé ?",
    "options": ["0x00000015", "0x20912c25", "0x04b18505", "0x04b18525"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S4.DS.Q12 : Indiquer la ligne qui correspond à une autre entrée dans le SGW.",
    "options": [
      "TEID=0x00000015 : Action=Foward, adresse IP dest=10.2.11.42, TEID=0x04b18505",
      "TEID=0x00000015 : Action=Foward, adresse IP dest=10.5.1.9, TEID=0x20912c25",
      "TEID=0x00000015 : Action=Foward, adresse IP dest=10.5.1.10, TEID=0x04b18525",
      "TEID=0x04b18505 : Action=Foward, adresse IP dest=10.5.1.9, TEID=0x04b18525",
      "TEID=0x04b18505 : Action=Foward, adresse IP dest=10.5.1.10, TEID=0x04b18525",
      "TEID=0x04b18505 : Action=Foward, adresse IP dest=10.2.11.42, TEID=0x00000015"
    ],
    "correct": [5],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S5.L1.Q1 : A la mise sous tension d'un terminal 4G (avec un abonnement valide).",
    "options": [
      "le terminal effectue seulement une procédure d'attachement au réseau pour signaler qu'il est désormais joignable",
      "le terminal effectue une procédure d'attachement au réseau pour signaler qu'il est désormais joignable et envoie un message qui indique son adresse IP",
      "le terminal effectue une procédure d'attachement au réseau pour signaler qu'il est désormais joignable et envoie une demande d'établissement de connectivité pour récupérer une adresse IP.",
      "le terminal envoie seulement une demande d'établissement de connectivité pour récupérer une adresse IP, ce qui est interprété par le réseau comme une demande d'attachement"
    ],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S5.L1.Q2 : L'état EMM-Deregistered correspond",
    "options": [
      "à un terminal non attaché au réseau (par exemple hors tension)",
      "seulement à un terminal dont l'attachement a été explicitement refusé par le réseau",
      "à un terminal attaché correctement au réseau mais non pourvu d'une adresse IP",
      "à un terminal que le réseau a désactivé pour économiser son énergie"
    ],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S5.L1.Q3 : L'état EMM-Registered correspond",
    "options": [
      "à un terminal attaché au réseau qui ne transmet pas de données",
      "à un terminal attaché correctement au réseau mais non pourvu d'une adresse IP",
      "à un terminal attaché correctement au réseau et pourvu d'une adresse IP",
      "à un terminal dont le propriétaire s'est inscrit sur une liste chez l'opérateur pour éviter les spams."
    ],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S5.L2.Q1 : La connexion radio entre un terminal et le réseau est maintenue",
    "options": [
      "tant que des données sont transmises par le terminal",
      "tant que des données sont transmises par ou vers le terminal",
      "tant que l'utilisateur effectue des opérations (appuie sur des touches ou touche un écran tactile)"
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S5.L2.Q2 : La connexion radio entre un terminal et le réseau est libérée",
    "options": [
      "par le terminal, dès qu'il n'a plus rien à transmettre",
      "par le réseau, en cas d'absence d'échanges de données sur la voie radio pendant une durée minimale, qui est un paramètre choisi par l'opérateur",
      "par le réseau, en cas d'échanges de données sur la voie radio à un débit supérieur à un seuil, qui est un paramètre choisi par l'opérateur",
      "par le terminal, en cas de dépassement de la puissance maximale de transmission."
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S5.L2.Q3 : Regarder la figure ci-dessous et choisir la représentation qui vous parait vous approcher le plus de l'état des tunnels et connexions pour un terminal 4G sous tension après une longue période d'inactivité.",
    "options": ["A", "B", "C", "D"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S5.L4.Q1 : Soit un terminal correctement attaché au réseau avec une longue période d'inactivité radio (aucune transmission). Une application, à un instant t, a des données à transmettre.",
    "options": [
      "le terminal effectue une procédure d'attachement au réseau pour acquérir de nouveau une adresse IP",
      "le terminal transmet directement les données dans un paquet IP en réutilisant le dernier RNTI alloué",
      "le terminal effectue une demande de rétablissement de la connexion radio (RRC Connection Request)",
      "le terminal effectue une demande de rétablissement de service (UE-triggered service request procedure) consistant à établir à nouveau la connexion radio, la connexion S1-AP et le tunnel S1"
    ],
    "correct": [3],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S5.L4.Q2 : On considère un PC pourvu d'une clé 4G connectée à un réseau 4G mais n'ayant pas été utilisé depuis plusieurs minutes. On envoie une requête ping vers une machine IP. Choisir la réponse qui vous parait la plus vraisemblable.",
    "options": ["A", "B", "C", "D"],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S5.L4.Q3 : Sur l'exemple de procédure UE-triggered service request procedure représenté ci-dessous, à quel moment précis le tunnel sur l'interface S1 (ou S1 bearer) est-il totalement réétabli (i.e. dans les deux sens de transmission)",
    "options": ["t1", "t2", "t3", "t4"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S5.L5.Q1 : Soit un terminal correctement attaché au réseau avec une longue période d'inactivité radio (aucune transmission). Ce terminal est par conséquent en état EMM-Registered et ECM-Idle. A l'instant t, un serveur a un paquet IP de données à transmettre au terminal. Que se passe-t-il ?",
    "options": [
      "Le serveur « bufferise » le paquet IP le temps que le terminal passe dans l'état ECM-Connected",
      "Le paquet IP est transmis jusqu'au PGW puis le PGW le « bufferise », le temps que le terminal passe dans l'état ECM-Connected",
      "Le paquet IP est transmis jusqu'au SGW puis le SGW le « bufferise », le temps que le terminal passe dans l'état ECM-Connected",
      "Le paquet IP est transmis jusqu'à l'eNodeB puis l'eNodeB le « bufferise », le temps que le terminal passe dans l'état ECM-Connected",
      "le paquet IP est transmis directement au terminal dans le message de paging."
    ],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S5.L5.Q2 : On considère le même scénario que précédemment. Lorsque le paquet arrive au SGW",
    "options": [
      "le SGW envoie un message GTP-C Downlink Data Notification à tous les MME du réseau, donc à celui qui gère le terminal destinataire du paquet",
      "le SGW réétablit un tunnel de contrôle avec le MME qui gère le terminal destinataire puis envoie un message GTP-C Downlink Data Notification",
      "le SGW envoie un message GTP-C Downlink Data Notification sur le tunnel de contrôle courant entre le SGW et le MME."
    ],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S5.L5.Q3 : On montre, dans la figure suivante, les échanges de messages correspondant au scénario de la question 1. A partir de quel moment, le paquet peut-il être transmis vers le terminal ?",
    "options": ["t1", "t2", "t3", "t4"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S5.L6.Q1 : En 4G, le bearer par défaut",
    "options": [
      "est utilisé uniquement pour transmettre de la signalisation et ne peut servir à transmettre des données utilisateurs",
      "convient uniquement pour les services tolérant un fort taux de perte",
      "est utilisé lorsqu'il y a une panne locale dans le réseau et correspond à un mode dégradé",
      "convient pour une large gamme d'applications et de services qui n'ont pas d'exigence forte de qualité de service"
    ],
    "correct": [3],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S5.L6.Q2 : En 4G, l'établissement d'un bearer dédié ou « dedicated bearer » correspond",
    "options": [
      "à l'allocation d'une nouvelle adresse IP pour le terminal, associée à un niveau de qualité de service garanti",
      "à l'établissement de tunnels de données et de contrôles supplémentaires entre eNodeB, SGW, PGW et MME pour, à la fois, disposer d'un niveau de qualité de service garanti et le gérer",
      "à l'établissement de tunnels de données entre eNodeB, SGW et PGW pour disposer d'un niveau de qualité de service garanti"
    ],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S5.L6.Q3 : L'entité qui déclenche l'établissement d'un bearer dédié est",
    "options": ["l'UE", "l'eNodeB", "le PGW", "le MME", "le SGW"],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S6.L1.Q1 : La gestion de la localisation des terminaux dans un réseau 4G est basée",
    "options": [
      "sur le fait que chaque terminal est pourvu d'un récepteur GPS et qu'il transmet en permanence sa localisation au réseau",
      "sur la diffusion par satellite d'un message demandant au terminal d'indiquer dans quelle cellule il se trouve",
      "sur l'envoi par le terminal d'un message de mise à jour de localisation à chaque fois qu'il change de cellule",
      "sur l'envoi par le terminal d'un message de mise à jour de localisation à chaque fois qu'il change de zone de suivi (Tracking Area)",
      "sur l'envoi par le terminal d'un message de mise à jour de localisation à chaque fois qu'il change de SGW"
    ],
    "correct": [3],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S6.L1.Q2 : La taille d'une zone de suivi (Tracking Area)",
    "options": [
      "est fixe et correspond à 7 cellules contiguës",
      "est fixe et correspond à environ 15 cellules contiguës",
      "est déterminée par le réseau à un instant donné (la taille peut évoluer dans le temps)",
      "est déterminée par le terminal de façon autonome en fonction de sa vitesse de déplacement"
    ],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S6.L1.Q3 : Un terminal en état de veille (ECM-IDLE) se déplace. Il change de cellule. La nouvelle cellule appartient à la même zone de suivi (Tracking Area) que l'ancienne cellule.",
    "options": [
      "le terminal signale ce changement de cellule au réseau",
      "le terminal ne signale pas ce changement de cellule au réseau",
      "le terminal signale ce changement de cellule au réseau uniquement si la nouvelle cellule appartient à un autre eNodeB"
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S6.L2.Q1 : La procédure de paging (recherche de mobiles) sert à",
    "options": [
      "retrouver un terminal perdu ou volé",
      "demander à un terminal en état de veille (ECM-IDLE) de passer à l'état connecté pour recevoir des données",
      "demander à un terminal de transmettre ses coordonnées GPS",
      "informer les terminaux d'un changement de la configuration du réseau"
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S6.L2.Q2 : Un message de paging envoyé par un eNodeB sur l'interface radio est destiné",
    "options": [
      "à un seul terminal bien précis",
      "à un groupe de terminaux",
      "à tous les terminaux présents dans la cellule"
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S6.L3.Q1 : La décision de déclencher un handover (transfert intercellulaire) pour un terminal en communication est prise par",
    "options": [
      "le terminal lui-même",
      "l'eNodeB source (celui auquel le terminal est actuellement connecté)",
      "l'eNodeB cible (celui vers lequel le terminal va se connecter)",
      "le MME"
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S6.L3.Q2 : Pour aider à la décision de handover, le terminal",
    "options": [
      "envoie périodiquement ses coordonnées GPS à l'eNodeB",
      "mesure la puissance des signaux reçus des cellules voisines et envoie des rapports de mesure à l'eNodeB",
      "écoute les messages de paging des cellules voisines",
      "mesure son niveau de batterie et l'envoie à l'eNodeB"
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S6.L4.Q1 : Lors d'un handover basé sur l'interface X2 (X2-based handover), la préparation du handover se fait par des échanges de messages entre",
    "options": [
      "l'eNodeB source et l'eNodeB cible directement",
      "l'eNodeB source, le MME et l'eNodeB cible",
      "le terminal et l'eNodeB cible"
    ],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S6.L4.Q2 : Pendant l'exécution d'un handover X2, pour éviter la perte de paquets de données,",
    "options": [
      "le SGW met les paquets en mémoire tampon (buffer) jusqu'à ce que le handover soit terminé",
      "l'eNodeB source transfère les paquets non encore acquittés vers l'eNodeB cible via l'interface X2",
      "le terminal demande la retransmission des paquets perdus au serveur distant (ex: serveur web)"
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S6.L5.Q1 : Un handover S1 (S1-based handover) est utilisé",
    "options": [
      "systématiquement pour tous les terminaux",
      "lorsqu'il n'y a pas de connexion X2 directe entre l'eNodeB source et l'eNodeB cible",
      "uniquement lorsque le terminal change de SGW",
      "uniquement pour les terminaux se déplaçant à très grande vitesse (ex: TGV)"
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S6.DS.Q1 : Que se passe-t-il lorsque l'on modifie la taille d'une Tracking Area (i.e. zone de suivi) dans un réseau ? (deux réponses attendues)",
    "options": [
      "Si la taille de la TA augmente, on augmente le nombre de messages de mise à jour de localisation émis par les mobiles et la charge associée sur la voie radio.",
      "Si la taille de la TA augmente, on diminue le nombre de messages de mise à jour de localisation émis par les mobiles et la charge associée sur la voie radio.",
      "Si la taille de la TA augmente, on diminue la charge de signalisation sur la voie radio causée par la recherche d'un mobile (paging) avant l'établissement d'une connexion",
      "Si la taille de la TA augmente, on augmente la charge de signalisation sur la voie radio causée par la recherche d'un mobile (paging) avant l'établissement d'une connexion"
    ],
    "correct": [1, 3],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "S6.DS.Q2 : Le MME utilise la procédure de paging pour",
    "options": [
      "demander à un terminal de passer de l'état EMM-Deregistered à l'état EMM-Registered",
      "demander à un terminal de passer de l'état ECM-IDLE à l'état ECM-CONNECTED",
      "diffuser des informations de système (System Information) à tous les terminaux",
      "mesurer la qualité du lien radio"
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "S6.DS.Q3 : Lors d'un handover intra-MME et intra-SGW avec interface X2, le message \"Path Switch Request\" est envoyé par",
    "options": [
      "l'eNodeB source vers le MME",
      "l'eNodeB cible vers le MME",
      "le SGW vers le MME",
      "le MME vers le SGW"
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q1 : Quelle est la principale fonction du HSS (Home Subscriber Server) ?",
    "options": [
      "Router les paquets IP vers internet",
      "Stocker les profils des abonnés et les clés secrètes",
      "Gérer l'allocation des ressources radio",
      "Chiffrer les données sur l'interface radio"
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q2 : Dans l'architecture EPC, quelle entité agit comme point d'ancrage pour la mobilité inter-eNodeB ?",
    "options": [
      "Le MME",
      "Le PGW",
      "Le SGW",
      "Le HSS"
    ],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q3 : Indiquez dans la liste ci-dessous la ou les entités qui possèdent à la fois des fonctions de contrôle (control plane) et des fonctions dans le plan usager (user plane)",
    "options": [
      "eNodeB",
      "HSS",
      "MME",
      "PGW",
      "SGW"
    ],
    "correct": [0, 3, 4],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "EF.Q4 : Indiquez dans la liste ci-dessous la ou les entités qui possèdent seulement des fonctions de contrôle (control plane)",
    "options": [
      "eNodeB",
      "HSS",
      "MME",
      "PGW",
      "SGW"
    ],
    "correct": [1, 2],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "EF.Q5 : Le PDN Gateway ou PGW assure les rôles suivants :",
    "options": [
      "point d'ancrage local en cas de mobilité du terminal lors d'un changement de station de base (eNodeB)",
      "passerelle vis-à-vis des réseaux extérieurs à la 4G (réseaux IP ou réseaux opérateurs de téléphonie)",
      "il maintient les tunnels construits avec le MME",
      "il effectue un filtrage des paquets IP de chaque abonné en fonction de la qualité de service souscrite"
    ],
    "correct": [1, 3],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "EF.Q6 : La couche MAC de l'interface radio LTE est responsable de :",
    "options": [
      "La segmentation et l'assemblage des paquets IP",
      "L'ordonnancement (scheduling) et l'allocation des ressources radio",
      "Le chiffrement et le contrôle d'intégrité",
      "Le routage des paquets IP"
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q7 : La couche PDCP de l'interface radio LTE est responsable de :",
    "options": [
      "La segmentation et l'assemblage des paquets IP",
      "L'ordonnancement (scheduling)",
      "Le chiffrement, le contrôle d'intégrité et la compression d'en-tête IP (ROHC)",
      "La correction d'erreurs (HARQ)"
    ],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q8 : Le protocole GTP-U est utilisé sur les interfaces :",
    "options": [
      "S1-MME et S11",
      "S1-U et S5/S8",
      "X2-C et S10",
      "LTE-Uu (interface radio)"
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q9 : Un Resource Block (RB) en LTE est défini par :",
    "options": [
      "12 sous-porteuses dans le domaine fréquentiel et 1 slot (0.5 ms) dans le domaine temporel",
      "1 sous-porteuse dans le domaine fréquentiel et 1 sous-trame (1 ms) dans le domaine temporel",
      "7 sous-porteuses dans le domaine fréquentiel et 1 trame (10 ms) dans le domaine temporel"
    ],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q10 : En LTE, la technique d'accès multiple sur la voie descendante (Downlink) est :",
    "options": [
      "CDMA",
      "TDMA",
      "OFDMA",
      "SC-FDMA"
    ],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q11 : Le paramètre MCS (Modulation and Coding Scheme) détermine :",
    "options": [
      "La fréquence porteuse utilisée par la cellule",
      "Le type de modulation (QPSK, 16QAM, 64QAM) et le taux de codage",
      "La taille de la zone de suivi (Tracking Area)",
      "L'algorithme de chiffrement utilisé"
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q12 : La clé K_ASME est générée par :",
    "options": [
      "Le MME et l'eNodeB",
      "Le HSS et la carte SIM/USIM du terminal",
      "Le SGW et le PGW",
      "Le PGW et le serveur distant"
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q13 : Le GUTI (Globally Unique Temporary UE Identity) est attribué au terminal par :",
    "options": [
      "L'eNodeB",
      "Le SGW",
      "Le MME",
      "Le HSS"
    ],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q14 : Le bearer par défaut (Default Bearer) est établi :",
    "options": [
      "Uniquement lorsque le terminal souhaite émettre des données",
      "Dès la procédure d'attachement initial du terminal au réseau",
      "Uniquement pour la transmission de la voix sur IP (VoLTE)",
      "Uniquement lors d'un handover"
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q15 : Une société propose une application pour des smartphones qui provoque un envoi toutes les 6 minutes de quelques dizaines d'octets vers un serveur et la réponse du serveur sous la forme également de quelques dizaines d'octets. L'application est extrêmement populaire. Cela engendre sur le réseau :",
    "options": [
      "une très légère augmentation du débit et de la signalisation engendrés car seuls quelques dizaines d'octets sont échangés",
      "un surcroit notable de la charge sur l'interface radio car la transmission même réduite à quelques octets consomme énormément de ressources radios",
      "un surcroit notable de la charge de signalisation échangée entre les UE et les eNodeBs",
      "un surcroit notable de la charge de signalisation échangée entre les UE, les eNodeBs et les MME",
      "un surcroit notable de la charge de signalisation échangée entre les tous les équipements du réseau"
    ],
    "correct": [3],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q16 : En mode acquitté (AM), la couche RLC utilise :",
    "options": [
      "Des numéros de séquence et un mécanisme de retransmission (ARQ)",
      "Uniquement des numéros de séquence sans retransmission",
      "Ni numéro de séquence ni retransmission",
      "Un mécanisme de contrôle de congestion basé sur des fenêtres glissantes"
    ],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q17 : La procédure d'accès aléatoire (Random Access) est utilisée par le terminal pour :",
    "options": [
      "Demander une adresse IP au PGW",
      "S'authentifier auprès du MME",
      "Obtenir une synchronisation montante et demander des ressources radio à l'eNodeB",
      "Mettre à jour sa position dans le HSS"
    ],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q18 : Le protocole S1-AP permet l'échange de messages de signalisation entre :",
    "options": [
      "Le terminal (UE) et le MME",
      "L'eNodeB et le MME",
      "L'eNodeB et le SGW",
      "Le SGW et le PGW"
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q19 : Lorsqu'un terminal en état ECM-IDLE reçoit un appel (données entrantes), le réseau utilise la procédure de :",
    "options": [
      "Handover",
      "Tracking Area Update",
      "Paging",
      "Random Access"
    ],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q20 : L'interface X2 relie :",
    "options": [
      "Deux eNodeB adjacents",
      "L'eNodeB au MME",
      "Le MME au HSS",
      "Le SGW au PGW"
    ],
    "correct": [0],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q21 : Quel paramètre permet d'identifier un tunnel GTP-U de manière unique pour une entité réceptrice donnée ?",
    "options": [
      "L'adresse IP source",
      "Le numéro de port UDP (2152)",
      "Le TEID (Tunnel Endpoint Identifier)",
      "L'IMSI de l'abonné"
    ],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q22 : Dans le réseau EPC, l'allocation des adresses IP aux terminaux est gérée par :",
    "options": [
      "Le MME",
      "Le HSS",
      "L'eNodeB",
      "Le PGW"
    ],
    "correct": [3],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q23 : Un bearer dédié (Dedicated Bearer) se distingue du bearer par défaut principalement par :",
    "options": [
      "Le fait qu'il ne transporte que de la signalisation",
      "L'attribution d'une nouvelle adresse IP",
      "L'association à un niveau de Qualité de Service (QoS) spécifique",
      "L'utilisation d'un algorithme de chiffrement différent"
    ],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q24 : Lors de la mise sous tension (Attach Procedure), l'authentification réseau de l'UE repose sur :",
    "options": [
      "Un mot de passe saisi par l'utilisateur",
      "Le défi/réponse cryptographique EPS AKA utilisant l'IMSI et la clé K",
      "L'adresse MAC du terminal",
      "Le RNTI alloué par l'eNodeB"
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q25: Après plusieurs échanges http, l'application de l'UE s'arrête et aucun échange de données usagers n'est fait entre l'UE et le réseau pendant 10 minutes, sélectionner les tunnels et/ou connexions qui sont toujours maintenus (aux deux extrémités) après les 10 minutes d'inactivité :",
    "options": [
      "connexion radio",
      "bearer S1 (entre eNodeB et SGW)",
      "bearer S5/S8 (entre SGW et PGW)",
      "connexion S1-AP (entre eNodeB et MME)",
      "tunnel de contrôle sur interface S5/S8 (entre SGW et PGW)",
      "tunnel de contrôle sur interface S11 (entre SGW et MME)"
    ],
    "correct": [2, 4, 5],
    "multiple": true,
    "explanation": ""
  },
  {
    "question": "EF.Q26 : L'algorithme de contrôle d'intégrité (EIA) en 4G protège :",
    "options": [
      "Les données utilisateurs (IP) et la signalisation RRC/NAS",
      "Uniquement les données utilisateurs (IP)",
      "Uniquement la signalisation RRC et NAS",
      "Les échanges sur l'interface S1 uniquement"
    ],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q27 : Le concept de QCI (QoS Class Identifier) est utilisé pour :",
    "options": [
      "Identifier la cellule d'attachement",
      "Définir les paramètres de Qualité de Service (délai, taux d'erreur, priorité) d'un bearer",
      "Calculer la taille de la Tracking Area",
      "Chiffrer les données"
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q28 : En cas de mobilité intra-LTE (Handover), le message \"Handover Request\" est envoyé par :",
    "options": [
      "Le MME vers le SGW",
      "L'eNodeB source vers l'eNodeB cible (dans le cas d'un X2-Handover)",
      "L'eNodeB cible vers le MME",
      "Le terminal vers l'eNodeB source"
    ],
    "correct": [1],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q29 : La modulation 64-QAM permet de transmettre :",
    "options": [
      "2 bits par symbole",
      "4 bits par symbole",
      "6 bits par symbole",
      "8 bits par symbole"
    ],
    "correct": [2],
    "multiple": false,
    "explanation": ""
  },
  {
    "question": "EF.Q30 : A l'issue de l'opération de Handover (on suppose qu'elle réussit parfaitement), parmi les TEID mentionnés dans l'architecture S1/S5, quels sont ceux qui sont inchangés pour le Default Bearer ?",
    "options": [
      "Le TEID côté PGW sur l'interface S5/S8",
      "Le TEID côté SGW sur l'interface S5/S8",
      "Le TEID côté SGW sur l'interface S1-U",
      "Le TEID côté eNodeB sur l'interface S1-U",
      "Le TEID côté MME sur l'interface S11"
    ],
    "correct": [0, 1, 2, 4],
    "multiple": true,
    "explanation": "Les TEID du segment S5/S8 et côté SGW restent inchangés car le Handover ne change que l'eNodeB d'attachement."
  }
];

// ══════════════════════════════════
//  LOGIQUE (ne pas modifier)
// ══════════════════════════════════
let current = 0;
let score = 0;
let selected = [];
let answered = false;

function init() {
  document.getElementById('total-count').textContent = QUESTIONS.length;
  const multiCount = QUESTIONS.filter(q => q.multiple).length;
  document.getElementById('multi-count').textContent = multiCount;
  document.getElementById('q-total').textContent = QUESTIONS.length;
}

function startQuiz() {
  current = 0; score = 0; selected = []; answered = false;
  document.getElementById('screen-home').style.display = 'none';
  document.getElementById('screen-quiz').style.display = 'flex';
  document.getElementById('screen-results').style.display = 'none';
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  selected = [];
  const q = QUESTIONS[current];
  const total = QUESTIONS.length;

  // Header update
  document.getElementById('q-current').textContent = current + 1;
  document.getElementById('q-score').textContent = score;
  document.getElementById('progress-fill').style.width = ((current / total) * 100) + '%';

  // Question
  document.getElementById('q-num').textContent = `Question ${String(current + 1).padStart(2, '0')}`;
  document.getElementById('q-text').textContent = q.question;

  // Hint
  const hint = document.getElementById('q-hint');
  if (q.multiple) {
    hint.style.display = 'flex';
    hint.textContent = 'Plusieurs réponses correctes possibles';
  } else {
    hint.style.display = 'none';
  }

  // Options
  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn' + (q.multiple ? ' multi' : '');
    btn.dataset.index = i;
    btn.innerHTML = `
      <span class="option-letter">${letters[i]}</span>
      <span class="option-text">${opt}</span>
      <span class="option-icon"></span>
    `;
    btn.addEventListener('click', () => selectOption(i));
    grid.appendChild(btn);
  });

  // Feedback
  const fb = document.getElementById('feedback-box');
  fb.className = 'feedback-box';
  fb.querySelector('#feedback-title').textContent = '';
  fb.querySelector('#feedback-detail').textContent = '';

  // Buttons
  document.getElementById('btn-validate').style.display = 'none';
  document.getElementById('btn-next').style.display = 'none';
}

function selectOption(index) {
  if (answered) return;
  const q = QUESTIONS[current];

  if (q.multiple) {
    const pos = selected.indexOf(index);
    if (pos === -1) {
      selected.push(index);
    } else {
      selected.splice(pos, 1);
    }
  } else {
    selected = [index];
  }

  // Refresh visual
  document.querySelectorAll('.option-btn').forEach(btn => {
    const i = parseInt(btn.dataset.index);
    btn.classList.toggle('selected', selected.includes(i));
  });

  // Show validate button
  document.getElementById('btn-validate').style.display = selected.length > 0 ? 'block' : 'none';
}

function validate() {
  if (answered || selected.length === 0) return;
  answered = true;

  const q = QUESTIONS[current];
  const correct = q.correct;
  const isCorrect = selected.length === correct.length && selected.every(s => correct.includes(s));

  if (isCorrect) score++;

  // Color options
  document.querySelectorAll('.option-btn').forEach(btn => {
    const i = parseInt(btn.dataset.index);
    btn.classList.add('locked');
    const icon = btn.querySelector('.option-icon');
    if (correct.includes(i)) {
      btn.classList.add('correct');
      icon.textContent = '✓';
    } else if (selected.includes(i) && !correct.includes(i)) {
      btn.classList.add('wrong');
      icon.textContent = '✗';
    }
  });

  // Feedback
  const fb = document.getElementById('feedback-box');
  const title = document.getElementById('feedback-title');
  const detail = document.getElementById('feedback-detail');

  if (isCorrect) {
    fb.className = 'feedback-box success show';
    title.textContent = '✓ Bonne réponse !';
    detail.textContent = q.explanation || '';
  } else {
    fb.className = 'feedback-box error show';
    title.textContent = '✗ Mauvaise réponse';
    const correctLabels = correct.map(c => ['A','B','C','D','E','F'][c]).join(', ');
    detail.textContent = (q.explanation || '') + (q.explanation ? ' ' : '') + `La bonne réponse était : ${correctLabels}.`;
    // Shake wrong options
    document.querySelectorAll('.option-btn.wrong').forEach(btn => {
      btn.classList.add('shake');
      setTimeout(() => btn.classList.remove('shake'), 400);
    });
  }

  document.getElementById('btn-validate').style.display = 'none';
  document.getElementById('btn-next').style.display = 'block';
  document.getElementById('btn-next').textContent =
    current < QUESTIONS.length - 1 ? 'Question suivante →' : 'Voir les résultats →';
}

function nextQuestion() {
  current++;
  if (current >= QUESTIONS.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

function showResults() {
  document.getElementById('screen-quiz').style.display = 'none';
  document.getElementById('screen-results').style.display = 'flex';

  const total = QUESTIONS.length;
  const pct = Math.round((score / total) * 100);
  const wrong = total - score;

  document.getElementById('result-score').textContent = `${pct}%`;
  document.getElementById('res-correct').textContent = score;
  document.getElementById('res-wrong').textContent = wrong;
  document.getElementById('res-total').textContent = total;
  document.getElementById('result-sub').textContent = `${score} bonne${score > 1 ? 's' : ''} réponse${score > 1 ? 's' : ''} sur ${total}`;
  document.getElementById('q-score').textContent = score;

  // Emoji + titre selon score
  const emoji = document.getElementById('result-emoji');
  const title = document.getElementById('result-title');
  if (pct >= 80) { emoji.textContent = '🏆'; title.textContent = 'Excellent !'; }
  else if (pct >= 60) { emoji.textContent = '👍'; title.textContent = 'Bien joué !'; }
  else if (pct >= 40) { emoji.textContent = '📚'; title.textContent = 'Peut mieux faire'; }
  else { emoji.textContent = '💡'; title.textContent = 'À retravailler'; }
}

function restartQuiz() {
  document.getElementById('screen-results').style.display = 'none';
  document.getElementById('screen-home').style.display = 'flex';
}

init();
