// shadowrun-data.js
// Données Shadowrun Anarchy - généré automatiquement depuis CSV_DATA
// Sections: Niveau de jeu, Concept, Traditions, Metatype, Bonus Metatype, 
//            Competences, Atouts, Traits, Armure, Armes, Equipement
// Total: 1014 entrées

const SHADOWRUN_DATA = {
  "1_niveau_de_jeu": {
    "nom": "1. NIVEAU DE JEU",
    "total": 9,
    "donnees": [
      {
        "Niveau": "Ganger",
        "Option": "Équilibré",
        "Attributs": "12",
        "Attributs_max": "1",
        "Compétence": "30",
        "Atouts": "18",

        "Arme": "2",
        "Équipement": "1",
        "Sorts": "0",
        "Réduction_risques": "1",
      },
      {
        "Niveau": "Ganger",
        "Option": "Magicien",
        "Attributs": "12",
        "Attributs_max": "1",
        "Compétence": "30",
        "Atouts": "14",

        "Arme": "1",
        "Équipement": "2",
        "Sorts": "4",
        "Réduction_risques": "1",
      },
      {
        "Niveau": "Ganger",
        "Option": "Combattant",
        "Attributs": "12",
        "Attributs_max": "1",
        "Compétence": "30",
        "Atouts": "17",

        "Arme": "3",
        "Équipement": "2",
        "Sorts": "0",
        "Réduction_risques": "1",
      },
      {
        "Niveau": "Runner",
        "Option": "Équilibré",
        "Attributs": "14",
        "Attributs_max": "1",
        "Compétence": "35",
        "Atouts": "24",

        "Arme": "2",
        "Expertise_arme": "0",
        "Équipement": "2",
        "Sorts": "0",
        "Réduction_risques": "1",
      },
      {
        "Niveau": "Runner",
        "Option": "Magicien",
        "Attributs": "14",
        "Attributs_max": "1",
        "Compétence": "35",
        "Atouts": "18",

        "Arme": "1",
        "Expertise_arme": "0",
        "Équipement": "3",
        "Sorts": "6",
        "Réduction_risques": "1",
      },
      {
        "Niveau": "Runner",
        "Option": "Combattant",
        "Attributs": "14",
        "Attributs_max": "1",
        "Compétence": "35",
        "Atouts": "22",

        "Arme": "4",
        "Expertise_arme": "1",
        "Équipement": "2",
        "Sorts": "0",
        "Réduction_risques": "1",
      },
      {
        "Niveau": "Runner d'élite",
        "Option": "Équilibré",
        "Attributs": "16",
        "Attributs_max": "2",
        "Compétence": "40",
        "Atouts": "28",

        "Arme": "3",
        "Expertise_arme": "0",
        "Équipement": "4",
        "Sorts": "0",
        "Réduction_risques": "2",
      },
      {
        "Niveau": "Runner d'élite",
        "Option": "Magicien",
        "Attributs": "16",
        "Attributs_max": "2",
        "Compétence": "40",
        "Atouts": "22",

        "Arme": "1",
        "Expertise_arme": "0",
        "Équipement": "4",
        "Sorts": "7",
        "Réduction_risques": "2",
      },
      {
        "Niveau": "Runner d'élite",
        "Option": "Combattant",
        "Attributs": "16",
        "Attributs_max": "2",
        "Compétence": "40",
        "Atouts": "26",

        "Arme": "4",
        "Expertise_arme": "2",
        "Équipement": "3",
        "Sorts": "0",
        "Réduction_risques": "2",
      }
    ]
  },
  "2_concept_du_personnage": {
    "nom": "2. CONCEPT DU PERSONNAGE",
    "total": 6,
    "donnees": [
      {
        "Type": "Non éveillé",
        //"Cout_Atout": "0",
        "Description": "Pas de pouvoirs magiques."
      },
      {
        "Type": "Émergé",
        "Cout_Atout": "3",
        "Cout_Nuyen": "15 000",
        "Description": "Seuls les personnages Émergés peuvent accéder à la Matrice par la seule force de leur esprit, y tisser des formes complexes et compiler des sprites."
      },
      {
        "Type": "Magicien",
        "Cout_Atout": "3",
        "Cout_Nuyen": "25 000",
        "competence_autoriser" : "Perception astral;Projection astrale;Sorcellerie;Conjuration",
        "Description": "Sorcellerie, Conjuration, perception et projection astrales."
      },
      {
        "Type": "Sorcier",
        "Cout_Atout": "1",
        "Cout_Nuyen": "10 000",
        "competence_autoriser" : "Perception astral;Sorcellerie",
        "Description": "Sorcellerie, perception astrales."
      },
      {
        "Type": "Conjurateur",
        "Cout_Atout": "1",
        "Cout_Nuyen": "15 000",
        "competence_autoriser" : "Perception astral;Conjuration",
        "Description": "Conjuration, perception astrales."
      },
      {
        "Type": "Clairvoyant",
        "Cout_Atout": "2",
        "Cout_Nuyen": "10 000",
        "competence_autoriser" : "Perception astral;Projection astrale",
        "Description": "perception et projection astrales."
      },
      {
        "Type": "Adepte mystique",
        "Cout_Atout": "2",
        "Cout_Nuyen": "20 000",
        "competence_autoriser" : "Adepte;Sorcellerie;Conjuration",
        "Description": "Sorcellerie, Conjuration, pouvoirs d'adepte."
      },
      {
        "Type": "Adepte",
        "Cout_Atout": "1",
        "Cout_Nuyen": "5 000",
        "competence_autoriser" : "Adepte",
        "Description": "Pouvoirs d'adepte."
      }
    ]
  },
  "21_traditions_magiques": {
    "nom": "2.1. TRADITIONS MAGIQUES",
    "total": 24,
    "donnees": [
      {
        "TRADITION": "Aborigène",
        "ATTRIBUT_DE_CONJURATION": "Charisme",
        "Description": "Cette tradition est probablement la plus ancienne en core en existence. Les koradji, magiciens de cette tradition, parcourent le Temps du rêve, qui se trouve hors de l’espace et du temps, afin d’entrer en lien avec les esprits et la magie de l’outback (le désert australien). Ils trans mettent les histoires des Héros du ciel vieilles de plu sieurs dizaines de milliers d’années. Ils conçoivent une relation à la terre très importante, elle-même empreinte des actions des esprits sur le monde. En entrant en relation avec les esprits et le Temps du rêve, les koradji changent le monde et le destin. La plupart des esprits du Temps du rêve sont des esprits de forme animale, des es prits des bêtes qui ont participé à la création physique du monde. Certains sont des esprits des hommes, image des héros du ciel qui ont aidé à la création de l’univers. La tradition aborigène s’est très peu exportée hors de l’outback australien, seul endroit où le Temps du rêve apparaît par fois physiquement dans de terribles tempêtes de mana. Il est donc très rare qu’un koradji quitte ses terres natales dont il se considère le gardien.",
        "Esprits": "Air, Bêtes, Guides, Plantes et Terre"
      },
      {
        "TRADITION": "Bouddhisme",
        "ATTRIBUT_DE_CONJURATION": "Volonté",
        "Description": "Le concept de cette tradition est simple : la magie provient de l’épanouissement personnel. L’individu progresse sur la voie de l’illumination et s’élève dans la compréhension de ce qu’est la véritable nature de l’existence au travers de la relation qu’il a avec son maître. C’est la branche bouddhiste du vajrayana, connu aussi sous le nom de tantrique, qui est à l’origine de cette tradition. Pour les autres branches, la magie n’est qu’une autre facette de la réalité, que l’on doit surpasser pour atteindre l’illumination. Cette tradition se fonde sur des méthodes tantriques pour faire de la magie et de sa connaissance à la fois la voie et la certitude nécessaire à l’atteinte de cet état final. L’apprentissage se fait au travers de la méditation et de la relation au maître, la magie ne pouvant être apprise par le biais de formules. C’est l’enseignement qui conduit à la compréhension de soi et du monde. La transmission du savoir est donc la base de cette tradition, centrée autour du maître et des disciples qui le suivent. Mantra, méditation, diagrammes, mandalas sont les pierres angulaires de la découverte, de l’apprentissage et de la compréhension des forces magiques qui parcourent notre monde. Les esprits mentors sont souvent des forces abstraites, les yidams, êtres supérieurs, semblables à des Bodhisattva, qui représentent un idéal à atteindre. Son origine est tibétaine, mais on peut la trouver dans de nonbreuses communautés asiatiques de l’Inde au Japon et dans d’autres pays de migrations.",
        "Esprits": "Air, Eau, Feu, Guides et Terre"
      },
      {
        "TRADITION": "Cabalisme",
        "ATTRIBUT_DE_CONJURATION": "Logique",
        "Description": "L’une des plus anciennes traditions mystiques de notre histoire est basée sur les enseignements de la Torah, mais aussi du Zohar, du Sefer Yetzirah et du Bahar pour former la base de la tradition hébraïque ainsi que du savoir hermétique. Elle s’appuie sur les philosophies ésotériques, mais aussi sur l’alphabet hébreu et la puissance des noms véritables pour influencer l’univers et le monde. La magie pratiquée dans cette tradition inclut des formules, des diagrammes complexes, la numérologie et l’astrologie. Bien souvent pratiquée en ancien hébreu, elle demande donc une maîtrise de cette langue porteuse de pouvoir. Les esprits kabbalistes sont souvent appelés des Élohim. Ils ne se matérialisent pas sur le plan physique, mais possèdent plu tôt des réceptacles, vivants ou non, pour influencer le plan physique (de là vient par exemple la légende du Golem de Prague). Les esprits mentors, eux, sont souvent reliés aux dix séphiroth, les incarnations au travers desquelles l’En Sof se manifeste. Deux principales écoles de pensée existent dans cette tradition : les croyances laïques et les sectes hébraïques ultra-orthodoxes. Pour la première, ses membres sont souvent considérés comme proches de la tradition hermétique, comptant de nombreux chercheurs ou universitaires, la seconde se limite en grande partie à des groupements orthodoxes, principalement en Israël ,considérant ceux qui ne pensent pas comme eux de manière rarement pacifique.",
        "Esprits": "Air, Eau, Feu, Ouvriers et Terre"
      },
      {
        "TRADITION": "Chamanisme",
        "ATTRIBUT_DE_CONJURATION": "Charisme",
        "Description": "Basée sur les traditions amérindiennes, mais pas unique ment, elle est celle que vous trouverez le plus en Amérique du Nord. Les chamans cherchent à équilibrer le monde au travers de la relation qu’ils développent avec ses espaces, sauvages comme urbains. Cette tradition est en effet double : le chamanisme dit traditionnel, ou naturel, et le chamanisme urbain auquel j’appartiens. Pour nous, la terre est un être vivant et conscient, ses enfants sont les esprits qui guident et assistent ceux qui agissent en sa faveur. Cette pratique ancienne et millénaire se construit donc dans une recherche d’harmonie entre l’esprit de Gaïa et son vecteur, le chaman, qui entre en relation avec un esprit mentor pour employer sa magie. Celui-ci le guide et lui accorde ses pouvoirs. La relation à la nature est donc pour nous une priorité et une nécessité, car elle nous nourrit et nous offre aussi de nombreux réactifs animaux, organiques, végétaux ou minéraux, nous obligeant à maîtriser des connaissances nombreuses comme la parazoologie ou la botanique. Notre relation aux esprits est basée sur la croyance que ces derniers sont intelligents, anciens, et qu’ils doivent être traités avec respect et déférence. Nous développons régulièrement des relations fortes avec eux, créant des liens personnels qui nous permettent de développer nos connaissances et notre maîtrise de la magie. La vie existant autant dans la nature que dans les villes et les cités, le chaman est donc capable de percevoir et de se mettre en relation avec elle dans tous les milieux. Mais les chamans urbains ont développé une relation extrêmement forte aux villes et, nés de cette vie urbaine, ils en deviennent le vecteur. Ils sont bien souvent aussi décontenancés quand ils quittent leurs métroplexes familiers que nos frères chamans héritiers des espaces sauvages quand ils y entrent. Une des particularités du chamanisme est ce que l’on appelle couramment le masque totem. En faisant appel à la puissance de leur magie, leur visage prend les traits de l’esprit mentor qui les guide. Plus la puissance appelée est grande, plus le visage se transforme, pouvant devenir jusqu’à un visage purement animal. Bien entendu, cette transformation est illusoire et temporaire, mais voir un chaman loup prendre l’apparence du prédateur qui le guide est une expérience qui a marqué nombre d’adversaires. Je peux vous assurer que quand je prends le masque du Chien noir qui m’accompagne, cela touche profondément les esprits de ceux qui s’opposent à moi…",
        "Esprits": "Air, Bêtes, Eau, Hommes et Air"
      },
      {
        "TRADITION": "Druidisme",
        "ATTRIBUT_DE_CONJURATION": "Volonté",
        "Description": "Cette tradition est en fait multiple, allant des druides sauvages très proches des chamans jusqu’aux druides anglais plus proches d’une tradition ésotérique. Mais toutes les variantes partagent des points communs : l’invocation d’esprits liés à des endroits et la volonté du druide de travailler avec ces esprits pour agir et contrôler ces lieux, sans compter bien entendu la forte relation à la culture de l’ancienne civilisation celte. Pour les druides sauvages, les esprits existaient bien avant l’avènement de l’Homme, alors que les druides anglais ont tendance à croire qu’ils ont été formés par les lieux dans lesquels ils vivent. Invoquer l’esprit spécifique d’un lieu demande souvent des recherches approfondies, de connaître son histoire et de trouver des éléments qui peuvent permettre d’identifier l’esprit qui l’habite pour élaborer le rituel qui permettra de se mettre en relation avec lui. De ce fait, les druides sont souvent territoriaux et quittent peu les lieux qu’ils connaissent et maîtrisent, protégeant ces lieux avec fureur contre les dangers qui pourraient les viser. Ayant une très grande connaissance des champs magiques, lignes ley et autres phénomènes astraux, ils orientent le mana de leur territoire afin de le lier davantage à leur tradition, ce qui les avantage grandement. Les druides sont donc très souvent des ritualistes, faisant appel à une magie longue, cérémonieuse, complexe, mais très puissante, car augmentée par la volonté de tous les participants.",
        "Esprits": "Air, Bêtes, Eau, Plantes et Terre"
      },
      {
        "TRADITION": "Hermétisme",
        "ATTRIBUT_DE_CONJURATION": "Volonté",
        "Description": "Ses pratiquants se reposent sur la logique, la pratique et l’exécution de formules écrites, planifiées et maîtrisées. L’intuition et l’improvisation sont leurs ennemies et ils ont du mal à gérer ce qu’ils ne pensent pas contrôler. Pour eux, l’univers suit des schémas d’énergies que l’on peut manipuler via des symboles et des formules complexes. Tradition ancienne, pratiquée de manière inefficace avant l’Éveil, elle s’est rapidement installée de manière durable, en particulier dans les corporations et les gouvernements, désireux d’avoir un sentiment de contrôle sur cette puissance brute qui déferlait sur le monde. La pensée hermétique est basée sur l’imposition de la Volonté du magicien à l’univers, créant de ce fait des gens à l’ego bien souvent démesuré. Les mages hermétiques aiment se rassembler, partageant leurs découvertes, leurs bibliothèques et discutant de manière savante de la magie et de ses applications ou relisant les textes fondateurs de l’hermétisme dont tous possèdent au moins une copie numérique. Sans surprise, ils ont une vision arrogante de l’invocation et sont persuadés que les esprits sont à leur service et obéissent à leurs ordres. Pour eux, ce sont des puissances certes intelligentes, mais inférieures et destinées à la servitude, aveuglées par leurs sentiments de puissance. Vous l’avez probablement compris, mais ils sont l’opposé complet du chamanisme et de sa relation au monde.",
        "Esprits": "Air, Eau, Feu, Hommes et Terre"
      },
      {
        "TRADITION": "Hindouisme",
        "ATTRIBUT_DE_CONJURATION": "Volonté",
        "Description": "Basée sur le système religieux hindou, elle a pour objectif de conduire ses participants vers l’illumination et la transcendance. Sa pratique est construite autour de la dévotion, l’ascétisme et la pureté karmique, et la plupart de ceux qui suivent cette voie acceptent les préceptes des Védas. Pour les pratiquants de la religion hindoue, l’âme fait partie d’un cycle quasi perpétuel de morts et de renaissances, affectées par le karma. Les daśarnas, ceux qui suivent la voie, se ré incarneront dans une caste supérieure, jusqu’à atteindre la transcendance (le moksha). Ceux qui se détournent de la voie seront réincarnés en êtres inférieurs, s’éloignant d’au tant plus de leur transcendance. Il existe deux catégories de membres de cette tradition : les brahmanes qui utilisent la magie comme des prêtres, et les sādhus qui embrassent la voie de l’ascétisme et utilisent le yoga pour avancer sur la voie. Chants mystiques, mantras, yogas et utilisation du sanskrit sont la base de la pratique, l’invocation est liée aux devas (esprits bienfaiteurs) et aux asuras (esprits au com portement plus ambigu).",
        "Esprits": "Air, Bêtes, Eau, Plantes et Terre"
      },
      {
        "TRADITION": "Islam",
        "ATTRIBUT_DE_CONJURATION": "Logique",
        "Description": "L’Islam entretient des rapports compliqués avec la magie. La voie traditionnelle est hostile à la magie, mais les Éveil lés ont été souvent très utiles pour faire avancer la cause de l’Islam dans le monde. La place de la femme dans la manipulation de la magie est ici un problème récurrent, car les factions les plus conservatrices leur interdisent cette pratique, tuant même parfois les bébés de sexe féminin qui seraient de possibles Éveillés. Les progressistes, quant à eux, sont ouverts à cette pratique pour tous et n’y voient aucun inconvénient. Les magiciens musulmans sont extrêmement minutieux et précis dans leur approche de la magie, apportant une rigueur mathématique très importante. Ils font donc régulièrement partie des plus grands théoriciens et leurs incantations sont souvent très précises, élégantes et élaborées. Cependant, l’invocation est une pratique souvent compliquée, voire mise au banc, car nombre d’entre eux préfèrent ne pas pactiser avec des entités qui pourraient s’avérer être des démons. À cela s’ajoute la peur de la manipulation par un esprit mentor, qui est donc une pratique interdite. Pour les pratiquants qui s’essaient néanmoins à l’invocation, ce sera celle de Djinns ou d’Efrits, plus proches de leurs paradigmes mentaux et possédant de terrifiantes capacités, surtout dans la manipulation du feu. De nombreux adeptes rejoignent aussi cette tradition, devenant des moudjahidines (guerriers saints) protecteurs de leur cause et de leur religion.",
        "Esprits": "Air, Feu, Gardiens, Plantes et Terre"
      },
      {
        "TRADITION": "Magie du chaos",
        "ATTRIBUT_DE_CONJURATION": "Volonté",
        "Description": "Les magiciens du chaos ont tendance à considérer que la magie ne doit pas être étudiée de manière universitaire, elle est une énergie brute, une puissance au-delà de la compréhension des métahumains. Elle n’est pas censée être confinée ou mesurée, elle doit être au contraire vécue et ressentie au plus profond de son être. Ce n’est donc pas véritablement une tradition comme on l’en tend, car les règles sont tout ce qu’ils rejettent, considérant qu’ils seront plus puissants en ne s’enfermant pas dans un système régulé et hiérarchisé. Ils apprennent donc la magie de manière instinctive ou au contact de ceux qui ont réussi à la manipuler et à la maîtriser. Par bien des aspects, cette vision de la magie est donc une sorte de fourre-tout, mais en y regardant de plus près, on peut voir des similitudes entre ses pratiquants : re jet des structures et de la rigidité magique, impatience et manque d’anticipation, réponses et réactions bien souvent imprévisibles et un goût très prononcé pour l’improvisation. Ceux qui les entourent sont donc bien souvent déstabilisés et travailler avec un magicien du chaos demande beaucoup de patience et d’acceptation. Mais la puissance brute qu’ils sont capables de démontrer fait souvent oublier tous ces désagréments. La magie du chaos attire donc ceux qui refusent d’être enfermés dans des dogmes, ceux qui refusent les ordres et les obligations, et ils sont souvent nombreux, en particulier dans les strates les plus libres de notre société.",
        "Esprits": "Air, Eau, Feu, Hommes et Terre"
      },
      {
        "TRADITION": "Magie noire",
        "ATTRIBUT_DE_CONJURATION": "Volonté",
        "Description": "Il est tout d’abord important de comprendre que la magie noire ne doit pas être confondue avec la magie du sang. Alors même qu’elle porte une symbolique ténébreuse importante et souffre d’une réputation des plus sulfureuses, nous ne sommes pas face à une magie capable de corrompre l’espace astral et les esprits qu’elle invoque. Mais attention, il n’en reste pas moins que nombre de pratiquants de la magie noire finissent par basculer dans cette utilisation perverse pour devenir de vrais monstres corrupteurs du mana. Plutôt que de se vouer au mal absolu, ce sont des magiciens focalisés sur leurs intérêts propres. Ils se font généralement les défenseurs d’une liberté toute égoïste, s’opposant ainsi à cette société qu’ils considèrent comme « conformiste ». Nourrie de symbolismes chrétiens, païens ou hermétiques, détournant des symboles comme les cercles de Kabbales, les crucifix inversés et les pentacles, c’est une tradition à la fois très rigide, mais aussi cherchant une certaine liberté et extase. Elle n’est rien de moins que l’art d’imposer sa volonté aux énergies qui sous-tendent la Réalité, mais aussi aux esprits (les démons) invoqués pour servir. Les membres de cette tradition ont très souvent des esprits mentors et n’hésitent pas à conclure des pactes avec des esprits supérieurs, ce qui les enchaîne parfois dans une toile de pactes de toutes sortes et les oblige à être très prudents.",
        "Esprits": "Air, Eau, Feu, Homme et Terre"
      },
      {
        "TRADITION": "Nordique",
        "ATTRIBUT_DE_CONJURATION": "Charisme",
        "Description": "Ce système de magie complexe a connu un vaste regain de popularité et reste une tradition importante dans l’Europe septentrionale. Ces magiciens vouent un culte au panthéon nordique dans son ensemble, certains d’entre eux en sont même des prêtres de ces anciens dieux, et conduisent des cérémonies en leur honneur, appelés gode (prêtre) et gydje (prêtresse). Pour les autres, ils deviennent les tisseurs de sort (Ganner), les invocateurs (Seidman) qui entrent en transe pour parler aux esprits, mais aussi les maîtres des runes spécialisés en enchantement et en rituel, ou les Berserkir bien souvent adeptes animaux. Pour ces magiciens, très proches des chamans et des druides, les mondes sont soutenus par l’arbre Yggdrasil, et c’est en entrant en lien avec les autres mondes qu’ils peuvent faire venir sur Midgard leurs habitants sous forme d’esprits. De grandes cérémonies, appelées blots (sacrifices rituels) et Sumbles (rituels d’ivresse), sont réalisées annuellement lors des équinoxes et solstices, pendant lesquelles les sa crifices d’animaux sont courants. Pour les représentants de cette tradition, les esprits sont aussi ancrés dans leurs traditions anciennes et portent ici des noms différents de ceux qu’on leur connaît en général : Feu (Géant de Mus pellheim), Air (Esprits des tempêtes de Trudheim), Eau (Fées de Niflheim), Terre (Nain de Nidavellir) et Gardien (Valkyries)",
        "Esprits": "Feu, Air, Eau, Terre et Gardien"
      },
      {
        "TRADITION": "Shintoïsme",
        "ATTRIBUT_DE_CONJURATION": "Charisme",
        "Description": "Religion officielle du Japon, cette tradition s’est répandue partout dans le monde sous l’effet conjoint des puissances impériales et corporatistes. Cette tradition se base sur l’harmonie avec les kamis et voit l’Éveil comme la résurgence du lien avec les dieux. Elle s’appuie sur un très grand nombre de sanctuaires à travers le monde dédiés aux kamis. C’est une des traditions chamaniques les plus acceptées au sein des corporations, par son influence importante et la forte imprégnation culturelle des cadres de ces dernières. Les kannushi, ainsi que sont nommés les mages qui suivent cette tradition, n’ont en général pas de mentor, car ils vivent en parfaite relation avec tous les kamis et les éléments clefs de cette tradition sont : respect de la nature, pureté physique et spirituelle, respect des traditions et des kamis. Leurs tech niques magiques sont ancrées dans la spiritualité et parfaite ment liées à la religion : par exemple, les charmes de protections (ofuda) pour bénir les lieux ou les amulettes (onamori) qui éloignent la malchance, voire favorisent le succès. Cette religion non dogmatique comprend au travers du monde un très grand nombre d’adeptes et de lieux saints, et rien que sur le sol japonais plus de 25 000 prêtres et 115 000 sanctuaires sont répertoriés.",
        "Esprits": "Air, Bêtes, Eau, Hommes et Plantes"
      },
      {
        "TRADITION": "Sorcellerie traditionnelle",
        "ATTRIBUT_DE_CONJURATION": "Charisme",
        "Description": "Ensorceleuses, diseuses de bonne aventure, sorcières sont les représentantes de cette tradition. Appelées de différentes manières à travers le monde, comme sage-femme en France, streghe en Italie, brujas en Espagne ou hedge witches en Angleterre, elles sont les représentantes d’une tradition ancestrale qu’il ne faut pas confondre avec les adeptes de la Wicca. Chaudron, baguette, herbes, bougies, potions sont parmi les objets traditionnels et rajoutent à l’image d’Épinal des sorcières des livres de contes. Cette tradition est exclusivement féminine, orale et transmise de sorcière à sorcière de génération engéné ration. On peut y trouver de nombreux symboles plutôt affiliés à d’autres traditions païennes, chrétiennes ou hermétiques, mais en fin de compte, elle échappe à toute dé finition religieuse. Ses pratiquantes se méfient aussi beau coup des esprits mentors. Pour les sorcières, le monde des esprits est habité par les âmes désincarnées des morts, les malfaisants Fey et les esprits de la nature (animaux et plantes). Traiter avec eux est un art dangereux, qu’elles préfèrent n’employer que rarement, car elles croient que leur âme est en danger étant donné que les esprits les possèdent pour agir sur le monde.",
        "Esprits": "Air, Eau, Ouvriers, Plantes et Terre"
      },
      {
        "TRADITION": "Théurgie chrétienne",
        "ATTRIBUT_DE_CONJURATION": "Volonté",
        "Description": "L’Éveil a été difficile à accepter pour les chrétiens, et la transition au Sixième Monde fut longue. Mais le surnaturel ayant toujours eu une place importante dans cette religion, la magie fut finalement acceptée comme partie intégrante de la création de Dieu et donc de la Foi. Malheureusement, la chrétienté est une religion très éclatée, et certains ont considéré que la magie ne pouvait être que l’œuvre du Ma lin, mettant en péril l’âme des justes… L’Encyclique de l’Imago Dei a finalement joué un rôle vital dans l’acceptation de la magie et de tout ce qu’elle représente, tout en écartant aussi l’idée qu’elle pouvait être une manifestation divine. La magie est maintenant considérée dans cette religion comme un outil pour accomplir l’œuvre du Seigneur, mais la relation aux esprits pose cependant un véritable problème. Sont-ils l’âme des morts, des démons, des anges ou autre chose ? Cela implique que les mages chrétiens ont tendance à les éviter et à ne pas y faire appel pour ne pas avoir à se poser la question. L’organisation de cette tradition est comme il fallait s’y attendre, très classifiée et stricte, comme dans l’ordre de Saint Sylvestre. Dans l’idéal, cette tradition a pour objectif d’aider les autres et de soulager les souffrances du monde, mais dans la pratique leurs actions donnent régulièrement l’impression qu’ils sont en croisade, que ce soit quand ils s’impliquent dans des œuvres caritatives ou qu’ils mènent des actions répressives ou répréhensibles. Pour finir, ce sont bien souvent de puissants lanceurs de sort, mais leur manque de compréhension et d’acceptation des esprits en font de médiocres invocateurs.",
        "Esprits": "Air, Eau, Feu, Guides et Terre"
      },
      {
        "TRADITION": "Tradition aztèque",
        "ATTRIBUT_DE_CONJURATION": "Charisme",
        "Description": "Contrairement à ce que beaucoup pensent, la tradition aztèque et la religion aztèque ne sont pas directement re liées. Bien entendu, elles sont intimement proches à de nombreux points de vue, mais les nahualli ne sont pas des prêtres, ce sont bien des magiciens dont la pratique magique est influencée par une tradition ancienne. Ils ne cherchent pas à apaiser les anciens dieux ni à entrer en lien avec eux. Les nahualli créent un lien puissant avec un esprit animal, un double qui les guide et les renforce. C’est au travers de cette rencontre avec ce double spirituel que le nahualli découvre sa magie et la pratique au travers d’une puissante relation. Contrairement aux chamans tels que moi, les nahualli ne considèrent pas leur double animal comme un idéal, mais bien comme un esprit individuel et personnel qui est entré en lien avec eux. Au travers de ce lien, ils peuvent invoquer des esprits inférieurs qui peuvent se matérialiser sous la forme d’animaux, de divinités humanoïdes ou de formes élémentaires abstraites. Mais, attention, même si la magie du sang joue parfois un rôle dans la relation aux dieux et donc la religion aztèque, elle n’est nullement nécessaire dans cette tradition et seuls les plus fous ou les plus corrompus se risqueraient à ce type de pratique. Seuls certains ordres mystiques en relation avec la nation d’Aztlan et Aztechnology ont découvert et pratiquent ce type de magie dangereuse et malsaine.",
        "Esprits": "Bêtes, Eau, Feu, Gardien et Plantes"
      },
      {
        "TRADITION": "Tradition démiurge",
        "ATTRIBUT_DE_CONJURATION": "Volonté",
        "Description": "Peut-on véritablement appeler cela une tradition ? Cer tains vous diront que non, car elle ne se base sur aucune origine ancienne et est extrêmement récente, mais d’autres dont je fais partie vous diront que oui. Une tradition est un regroupement de personnes partageant la même vision du fonctionnement de la magie et l’employant en se basant sur des rituels, des rites et des actions similaires. Les démiurges sont une jeune tradition, une tradition du Sixième Monde que l’on retrouve dans la rue et principalement au près des jeunes magiciens. Elle se base sur la pop culture et la nécessité pour ces adeptes de la magie de puiser dans des images et des illustrations pour faire appel à leur pou voir. Pour une raison inconnue, le paradigme de leur magie passe par un besoin visuel. Pour un démiurge, la compréhension du monde spirituel passe donc par la culture de l’imaginaire collectif. Ils ont souvent une vision de la magie basée sur les jeux vidéo, les jeux de rôle, les livres de bestiaires qu’ils ont lus. Ils ont besoin de cet imaginaire pour lui donner corps et la manipuler. Qu’il s’agisse des cartes à collectionner, des bestiaires de jeu ou des artbooks, ils ont besoin de cela pour donner corps à l’image mentale de leur esprit.",
        "Esprits": "Bêtes, Feu, Gardiens, Hommes et Terre"
      },
      {
        "TRADITION": "Tradition sioux",
        "ATTRIBUT_DE_CONJURATION": "Charisme",
        "Description": "Wakan Tanka est le Grand esprit, pouvoir de la vie qui anime chaque chose dans ce monde, du soleil à la terre et tout ce qui y vit. Il est aussi le grand arbre protecteur recouvrant ses enfants de sa frondaison céleste. Wakan Tanka est sur tout le grand mystère, car nul ne doit ni ne peut comprendre les secrets du monde, chacun se doit de les accepter et de ne pas chercher à les expliquer : c’est la base de l’Harmonie. Ce sont les bases de la tradition sioux, bases dans les quelles je me retrouve pleinement, même si ce n’est pas ma voie. Mais attention, ce n’est pas parce que cette tradition est orientée vers un objectif pacifiste qu’elle n’est que douceur et lumière. Nombre d’esprits indiens peuvent être joueurs, vindicatifs ou ténébreux : Coyote, Iktomi l’araignée, Unktehi le serpent ou Oiseau-Tonnerre ne vivent pas toujours en très bons termes avec la métahumanité. Cette tradition n’est pas basée sur les formules et les vieux grimoires, c’est une magie qui se vit, qui se ressent, en lien avec le monde. Ce dernier renferme de nombreux secrets qu’il faut chercher au travers de l’Harmonie et du lien que l’on développe avec elle. C’est seulement au tra vers de ce dernier que ses adeptes avancent et agissent sur l’univers dans sa globalité.",
        "Esprits": "Air, Bêtes, Feu, Gardiens, Plantes"
      },
      {
        "TRADITION": "Tradition urbaine",
        "ATTRIBUT_DE_CONJURATION": "Volonté",
        "Description": "Cette jeune tradition, née dans différents plexes du monde, ne doit pas être confondue avec le chamanisme urbain, dont je suis un représentant. Elle est apparue dans les rangs de magiciens autodidactes qui n’ont accès ni aux ressources et techniques scientifiques des hermétiques ni aux traditions sur lesquelles chamans et consorts peuvent s’appuyer. À partir de la théorie qui veut que l’inconscient collectif influe sur le mana et l’espace astral, de l’existence avé rée d’esprits et de totems et de leur pratique instinctive, les sorciers urbains (comme ils aiment être appelés) ont posé l’idée que les villes, sous l’influence du mana modifié par leurs populations et croyances, ont développé une forme « d’Esprit ». Pas au sens d’esprit libre ou même d’être conscient, mais plutôt comme on parle de l’esprit d’un siècle, d’une époque. Cette tradition insiste particulièrement sur la connaissance de la ville en tant que concept, mais aussi en tant qu’endroit où vivre et pratiquer son art. Les sorciers urbains en connaissent les plans physiques comme astraux, faisant un grand usage de ce dernier pour découvrir la vraie nature de leur environnement. Ils voient les esprits invoqués ou liés comme des émanations locales de l’Esprit de la ville, des fantômes ou la concrétisation magique de croyances et autres légendes urbaines fortement ancrées dans l’inconscient collectif. En entrant en communion avec eux, ils deviennent un pont entre les hommes et la ville. Chaque sorcier développe une relation personnelle avec l’Esprit qui prend la forme d’un esprit mentor. Les totems animaux urbains, comme Araignée, Chien, Chat ou Rat, mais aussi Crocodile, sont monnaie courante. Des totems plus anthropomorphes comme la Sombre Déesse, l’Escroc ou l’Artificier sont aussi très prisés.",
        "Esprits": "Bêtes, Gardiens, Guides, Hommes et Ouvriers"
      },
      {
        "TRADITION": "Vaudou",
        "ATTRIBUT_DE_CONJURATION": "Charisme",
        "Description": "Cette tradition possède, tout comme la magie du sang, une très mauvaise réputation. Si cela est mérité pour cette dernière, ce n’est pas le cas du vaudou. Même s’il existe des adeptes sombres employant des poupées pour faire du mal, cette tradition ne s’arrête fort heureusement pas à cela et comprend sa part de lumière. L’élément central du vaudou est défini par le concept de l’invisible et des invisibles, ces esprits appelés Loas que servent les pratiquants. Il existe différentes catégories de Loas, du plus au moins puissant, de celui qui existe pour faire le bien à celui qui apporte sur le monde des forces plus ténébreuses. Les adeptes du vaudou appelés bokors, houngans ou mambos, ont pour rôle d’être les vecteurs entre le monde et les invisibles et font appel à eux pour qu’ils répondent à leurs demandes et agissent sur notre ré alité. Une des manières de se faire apprécier des Loas est de leur offrir la possibilité d’accéder au monde matériel, au travers de la possession du magicien ou de l’un de ses serviteurs. Car pour les adeptes de cette tradition, les esprits ne sont pas au service de l’invocateur, bien au contraire. Cette religion se base donc sur une relation révérencieuse entre l’invocateur et le Loa qu’il appelle à l’aide. Un esprit ne doit pas de services à son invocateur, il lui offre des cadeaux. Vous l’aurez compris, nous sommes ici face à une tradition religieuse, dans laquelle la pratique magique est bien plus basée sur l’invocation que sur la manipulation du mana pour lancer des sortilèges.",
        "Esprits": "Eau, Gardiens, Guides, Hommes et Ouvriers"
      },
      {
        "TRADITION": "Voie de la roue",
        "ATTRIBUT_DE_CONJURATION": "Charisme",
        "Description": "Cette tradition, originaire de la nation elfe de Tír na nÓg, est intimement liée à la structure géopolitique et sociale du pays. Elle tire son nom du Draesis ti Heron, la roue de la vie qui décrit cinq voies différentes qu’empruntent les âmes au cours de leur chemin vers l’illumination. C'est peut être la tradition la plus rigide, mais aussi la plus étrange du Sixième Monde. Rigide, car elle impose un cheminement dirigiste et maîtrisé pendant lequel les membres suivent un esprit mentor différent en fonction de la voie qu’ils arpentent : celle du Guerrier, de l’Intendant, du Barde, du Druide ou du Righ, qui structurent la politique locale. Étrange, car les elfes disent que cette voie est ancienne et a façonné le monde, qu’elle existait déjà à l’ère du Quatrième Monde, alors que l’on sait que les elfes sont apparus récemment au cours de l’Éveil. La pratique de la magie y est très encadrée et des livres anciens renfermeraient ces règles, information difficile à vérifier car peu de gens extérieurs à cette Voie ont pu les voir de leurs propres yeux. Le but apparent de cette Voie est d’aider les âmes des individus à se développer, mais certains disent que le but ultime serait de protéger Tír na nÓg et défendre ses intérêts. Comme on peut s’y attendre, cette tradition regroupe de nombreux Éveillés différents, de l’adepte au magicien, en passant par les invocateurs et enchanteurs. Et tous ont pour interdiction de révéler les secrets de cette Voie à ceux qui ne la parcourent pas. Quoi qu’il en soit, les adeptes de la tradition de la Voie de la Roue font partie des plus puissants manipulateurs de mana, et beaucoup paieraient très cher pour en découvrir les secrets les plus importants.",
        "Esprits": "Air, Eau, Feu, Guides et Terre"
      },
      {
        "TRADITION": "Wicca (général)",
        "ATTRIBUT_DE_CONJURATION": "Volonté",
        "Description": "Cette tradition est l’un des plus importants mouvements néo-paganistes du Sixième Monde. Elle est constituée de croyances et de principes issus du XIXe siècle, mais aussi du courant New Age et de préceptes préchrétiens, et est basée sur le Rede Wiccan, l’harmonie avec la nature. Les wiccans vénèrent deux entités semblables à des divinités qui sont le Dieu Cornu et la Déesse Mère. Elles sont les deux aspects d’une même divinité, prenant respectivement la forme des esprits mentors du Sage et de la Conciliatrice. Cette tradition est en fait composée de multiples mouvements, dont le plus important est le gardnérianisme ou wicca traditionnelle britannique. Cette dernière est composée d’Éveillés ou non, organisés selon un ordre hiérarchique strict dont les membres évoluent dans des niveaux initiatiques grâce à des rituels obligatoires. Se référant au Livre des Ombres, elle se veut très hermétique dans son approche de la magie. Les wicca éclectiques, ou Déesse Wicca, est le second mouvement majeur, il est nettement moins strict et structuré.",
        "Esprits": "Air, Eau, Feu, Plantes et Terre"
      },
      {
        "TRADITION": "Wicca (Gardnérianisme)",
        "ATTRIBUT_DE_CONJURATION": "Logique",
        "Description": "Cette tradition est l’un des plus importants mouvements néo-paganistes du Sixième Monde. Elle est constituée de croyances et de principes issus du XIXe siècle, mais aussi du courant New Age et de préceptes préchrétiens, et est basée sur le Rede Wiccan, l’harmonie avec la nature. Les wiccans vénèrent deux entités semblables à des divinités qui sont le Dieu Cornu et la Déesse Mère. Elles sont les deux aspects d’une même divinité, prenant respectivement la forme des esprits mentors du Sage et de la Conciliatrice. Cette tradition est en fait composée de multiples mouvements, dont le plus important est le gardnérianisme ou wicca traditionnelle britannique. Cette dernière est composée d’Éveillés ou non, organisés selon un ordre hiérarchique strict dont les membres évoluent dans des niveaux initiatiques grâce à des rituels obligatoires. Se référant au Livre des Ombres, elle se veut très hermétique dans son approche de la magie. Les wicca éclectiques, ou Déesse Wicca, est le second mouvement majeur, il est nettement moins strict et structuré.",
        "Esprits": "Air, Eau, Feu, Plantes et Terre"
      },
      {
        "TRADITION": "Wuxing",
        "ATTRIBUT_DE_CONJURATION": "Logique",
        "Description": "Appelée aussi les cinq phases, cette tradition est basée sur l’idée du Qi, la force qui relie chaque aspect du vivant. Ce dernier est basé sur les éléments traditionnels chinois : Feu, Terre, Eau, Bois et Métal. Il agit également en relation avec les deux pôles que sont le Yin et le Yang, que certains comparent peut-être à tort avec l’Ordre et le Chaos. Les wujens, pratiquants de cette tradition, concentrent leurs efforts sur l’alignement parfait des éléments du qi, en se basant particulièrement sur la magie rituelle afin d’équilibrer les champs magiques et les lignes ley. Cette tradition a tendance à privilégier l’ordre et a donc trouvé sa place dans de nombreuses corporations, à commencer par Wuxing. Ses adeptes se retrouvent pleinement dans l’ordre et la hiérarchie corporatiste, ce qui comble ce besoin que tout soit cadré et organisé. Cela se retrouve aus si dans la manière dont les wujens abordent l’invocation spirituelle, considérant les royaumes spirituels comme une hiérarchie bureaucratique céleste où tout est organisé, hiérarchisé et pétri de règles dont on ne peut s’écarter sans déséquilibrer le monde. Ce besoin de contrôle se retrouve aussi dans la manière dont les adeptes de cette tradition considèrent la magie et manipulent le mana pour lancer leurs sortilèges, même si les wujens sont d’abord et avant tout de puissants conjurateurs et invocateurs.",
        "Esprits": "Eau, Feu, Guides, Plantes et Terre"
      },
      {
        "TRADITION": "Zoroastrisme",
        "ATTRIBUT_DE_CONJURATION": "Logique",
        "Description": "Cette tradition est basée sur le mouvement précurseur de la plupart des religions monothéistes modernes, c’est donc avant tout une religion, une foi qui fait une claire distinction entre le Bien et le Mal et entre l’Ordre et le Chaos, poussant ses fidèles à œuvrer pour le Bien. Ahura Mazdâ est le cœur de cette religion, le créateur qui a engendré un esprit saint, Spenta Mainyu, qui s’oppose à un esprit mauvais, Angra Mainyu la force destructrice du Chaos. Les pratiquants œuvrent ainsi pour le Bien afin de vaincre le chaos du monde. Ils apprennent souvent des rituels de purification à base d’eau, symbole de vie, et de feu purificateur. Prières, méditation et concentration sont les piliers de cette tradition et sont pratiquées aussi tôt que possible. Cette tradition a donc pour habitude de considérer le monde au travers d’un prisme très manichéen : une séparation entre le Bien et le Mal, le Blanc et le Noir, et ne laisse que peu de place aux nuances de gris. Les dualités ne sont pas toujours parfaitement définies et les participants cherchent à trouver un équilibre, une harmonie entre le corps et l’esprit. Peut-être est-ce pour cela que les Éveillés les plus couramment présents dans cette tradition sont les adeptes mystiques, cherchant à travers elle à équilibrer et harmoniser les deux éléments de leurs talents magiques. Directs et francs, les membres de cette tradition se considèrent souvent comme des guerriers participant à un grand conflit céleste et accueillent quiconque veut se joindre à leur combat. Frappant fort et rapidement, ils n’hésitent pas, une fois le combat fini, à soigner leurs ennemis pour les maintenir en vie afin que l’équilibre perdure.",
        "Esprits": "Air, Eau, Feu, Hommes et Plantes"
      }
    ]
  },
  "3_metatype": {
    "nom": "3. METATYPE",
    "total": 41,
    "donnees": [
      {
        "Métatype": "Humain",
        "FOR": "4",
        "AGI": "4",
        "VOL": "4",
        "LOG": "4",
        "CHA": "4",
        "ANA": "4",
        "Description": "Selon des estimations plutôt prudentes, les humains repré sentent environ les deux tiers de la population Homo sapiens actuelle. Ils sont de loin le métatype le plus commun et le plus largement répandu. D’après de nombreuses études sociologiques, ils occupent encore un nombre disproportionné de postes au sein des gouvernements et des acteurs de l’économie des pays industrialisés, même au regard de leur population, un indicateur potentiel des discriminations latentes envers les métahumains dans des pays par ailleurs tolérants."
      },
      {
        "Métatype": "Nartaki (métavariant humain)",
        "FOR": "4",
        "AGI": "4",
        "VOL": "4",
        "LOG": "4",
        "CHA": "4",
        "ANA": "4",
        "Description": "La seule métavariante humaine connue, le nartaki, est apparue en Inde suite au pic de mana ambiant dû au pas sage de la comète de Halley, qui a activé les métagènes dormants d’un petit groupe d’humains, faisant ainsi éclater un épisode de gobelinisation partielle. Leur peau est devenue bleue, rouge ou or, selon les individus, et deux bras supplémentaires leur ont poussé. Leur nom, donné par les autochtones, signifie littéralement « danseurs », en marque de déférence à la divinité Shiva. Ils ont immédiatement été élevés au rang de brahmanes, la plus haute caste, ce qui leur assure un grand respect de la part des In diens. À l’étranger, la situation est moins brillante, la vue d’une personne à quatre bras provoquant en général une gêne palpable."
      },
      {
        "Métatype": "Changelin (métavariant humain)",
        "FOR": "4",
        "AGI": "4",
        "VOL": "4",
        "LOG": "4",
        "CHA": "4",
        "ANA": "4",
        "Description": "Les événements connus comme la gobelinisation au dé but du XXIe siècle avaient déjà modifié les rapports sociaux entre les gens et fait passer l’humanité au stade de méta humanité. Mais en 2061, le passage de la comète de Halley a eu une répercussion encore plus grande sur la civilisation et la société en général. La Comète engendra la GRIME (Gobelinisation Récessive Irrégulière à Manifestation Éruptive) qui allait apporter son lot de changements : les changelins marchaient sur le monde. Il est important de comprendre que les changelins ne sont pas des métatypes au sens propre du terme, ils ne sont pas de nouvelles espèces de la métahumanité. Mais une expression métagénique qui s’est répandue sur toute la planète, avec la montée de la manasphère, déclenchée par le passage de la comète. Dernièrement, les nombreuses recherches nous ont per mis de comprendre que certains événements répondaient  à une logique alors que d’autres restaient mystérieux ou  le fruit du hasard. Par exemple, le Ganesha (homme à tête  d’éléphant) apparu après les événements du Gange, re présente une expression métagénique due aux croyances  locales. Alors que la caissière d’un Stuffer Shack qui a vu  apparaître une fourrure verdâtre, des cornes et des yeux de  mouches, est plutôt la victime d’un brusque changement  arbitraire. Au vu des connaissances actuelles, les chercheurs estiment que ces démonstrations seraient le fruit de traits  métagéniques endommagés par des millénaires de sélec tions naturelles, de croisements d’espèces endormies,  mais aussi des apports transgéniques venant de virus ou  de thérapies géniques tout comme de dysfonctionne ment des systèmes de réparations et la mutation par des"
      },
      {
        "Métatype": "Vampire (Infecté humain)",
        "FOR": "5",
        "AGI": "5",
        "VOL": "5",
        "LOG": "5",
        "CHA": "5",
        "ANA": "5",
        "Description": "Les humains infectés par le VVHMH I deviennent des vampires. Seuls leurs longues canines et leur teint pâle permettent de les différencier des humains normaux, ce qui demande une attention certaine, d’autant plus qu’on les rencontre généralement de nuit. Sources de beaucoup de fantasmes du fait de leur omniprésence dans la culture populaire, les vampires génèrent de la crainte des braves gens, la convoitise des chasseurs qui veulent toucher leur prime et l’envie des fans qui voudraient en être. Les vampires sont dotés d’un odorat et d’une ouïe accrus ainsi que d’une vision thermographique. Ils dégagent une aura de peur, renforcée par les légendes qui les entourent. Enfin, comme les banshees, ils peuvent se changer en nuage de brume à volonté. Comme tous les Infectés au VVHMH I, les vampires doivent drainer l’Essence d’autres métahumains pour maintenir la leur à niveau et ne pas périr. Ils ne peuvent consommer que du sang métahumain et souffrent de nausées et de vomissements s’ils ingèrent toute autre nourri ture ou boisson. Outre leur allergie au soleil, ils sont particulièrement vulnérables au bois."
      },
      {
        "Métatype": "Nosfératu (Infecté humain)",
        "FOR": "5",
        "AGI": "5",
        "VOL": "5",
        "LOG": "3",
        "CHA": "3",
        "ANA": "4",
        "Description": "Les humains infectés par le VVHMH Ia deviennent des  nosfératus. Il s’agit, avec les mutaquas, de la population la  plus rare d’Infectés. Leur transformation est radicale, leurs  tissus graisseux fondent, laissant les muscles apparaître  sous la peau. Leur pilosité disparaît complètement, y com pris les cheveux, et leur peau devient blafarde. Comme les  vampires, leurs canines sont proéminentes. Les nosfératus  ont généralement une personnalité paranoïaque et complotiste et ils sont les instigateurs des plus importantes  cabales vampiriques connues. Leur apparence de vampires  de série B vient encore renforcer les fantasmes entourant  les vampires, en faisant des créatures particulièrement  craintes À la suite de leur infection, les nosfératus s’Éveillent pour devenir des magiciens. Ils dégagent une aura de peur et sont capables d’implanter des suggestions dans l’esprit de leurs interlocuteurs. Enfin, ils sont dotés d’une ouïe ac crue ainsi que d’une vision nocturne et thermographique. Comme tous les Infectés au VVHMH I, les nosfératus doivent drainer l’Essence d’autres métahumains pour maintenir la leur à niveau et ne pas périr. Ils sont cependant capables de stocker beaucoup plus d’Essence dans leur aura et de mieux la retenir. Ils ne peuvent consommer que du sang métahumain et souffrent de nausées et de vomis sements s’ils ingèrent toute autre nourriture ou boisson. Outre leur allergie au soleil, ils sont particulièrement vulnérables au bois."
      },
      {
        "Métatype": "Loup-garou (Infecté humain)",
        "FOR": "5",
        "AGI": "5",
        "VOL": "5",
        "LOG": "3",
        "CHA": "4",
        "ANA": "4",
        "Description": "Les humains infectés par le VVHMH II deviennent des loups-garous, sans qu’ils aient de rapport avec les zoocanthropes. Ils doivent ce nom à leur apparence : leur peau est recouverte de courts poils gris-noir, leurs lèvres sont retroussées et laissent apparaître leurs crocs qui semblent d’autant plus longs et leurs yeux sont injectés de sang. Leurs oreilles s’allongent, leurs narines se dilatent et leurs ongles durcissent en griffes, renforçant leur ressemblance avec les loups. La vitesse de déplacement et d’action des loups-garous s’accroît fortement et leur peau épaisse leur offre une certaine protection, faisant d’eux de redoutables combattants. Leurs sens s’accroissent : leur ouïe et leur odorat sont plus fins et leur vision est plus sensible de nuit et perçoit les informations thermiques. Les loups-garous souffrent d’une vulnérabilité à l’aconit, une plante aussi connue sous le nom de « poison de loup », et doivent manger régulièrement de la chair métahumaine. Ils suivent un cycle de 28 jours, bien que sans rapport avec la lune. Au moment du pic d’activité de ce cycle, pendant environ quatre jours, la puissance des loups-garous est dé multipliée, mais ils deviennent enragés et attaquent qui conque est perçu comme ennemi. Les cycles des différents loups-garous sont indépendants, mais tendent à se synchroniser s’ils cohabitent de façon prolongée."
      },
      {
        "Métatype": "Goule (Infecté humain)",
        "FOR": "6",
        "AGI": "4",
        "VOL": "5",
        "LOG": "3",
        "CHA": "3",
        "ANA": "4",
        "Description": "Les métahumains infectés par le VVHMH III deviennent tous des goules. La transformation débute par la perte des poils et cheveux, puis la peau perd de sa souplesse, durcit, et défraîchit pâlit. Selon le groupe ethnique de la goule, la teinte finale variera d’une pâleur lugubre à un gris cendré. Les yeux blanchissent alors que se développe une cataracte qui finit par rendre les goules aveugles, tandis que l’ouïe et l’odorat se développent pour compenser, aidés par la perception astrale. La mâchoire s’élargit légèrement et les doigts s’allongent et se prolongent de griffes. Les goules sont exclusivement carnivores et doivent consommer régulièrement de la chair métahumaine. Elles sont prises de nausées si elles consomment tout autre type de nourriture"
      },
      {
        "Métatype": "Elfe",
        "FOR": "4",
        "AGI": "4",
        "VOL": "4",
        "LOG": "4",
        "CHA": "5",
        "ANA": "3",
        "Description": "Les elfes représentent le troisième métatype par sa popu lation, derrière les humains et les orks. Le métatype elfe est présent de façon similaire sur tous les continents et dans tous les groupes ethniques. Les elfes sont généralement grands et élancés, et disposent de vision nocturne et d’une longévité exceptionnelle. Les elfes sont attirants, le savent et savent en jouer. Ce n’est pas un hasard s’ils ont deux nations prospères, Tír Tairngire et Tír na nÓg, que beaucoup des postes les plus importants du monde sont occupés par des elfes et qu’ils sont omniprésents dans les médias. Ils sont donc souvent jalousés, voire détestés, sans que cela ne les affecte aucu nement, si ce n’est en les amusant. Les différentes métavariantes restent très rares même dans leur région d’origine et sont peu connues du grand public."
      },
      {
        "Métatype": "Dryade (métavariant Elfe)",
        "FOR": "4",
        "AGI": "4",
        "VOL": "4",
        "LOG": "4",
        "CHA": "5",
        "ANA": "3",
        "Description": "'Contrairement aux autres métavariantes, les dryades n’ont pas d’origine géographique particulière : on en trouve sur tous les continents, mais toujours en très faible nombre. Elles sont légèrement plus petites que les elfes et dégagent une aura particulière qui subjugue leurs interlocuteurs par leur beauté et leur grâce. Aucune recherche n’est parvenue à trouver la cause de ce phénomène, tout au plus ont-elles confirmé qu’il est commun à toutes les dryades, Éveillées ou non. D’autre part, la plupart d’entre elles entretiennent une symbiose avec leur environnement"
      },
      {
        "Métatype": "Nocturna (métavariant Elfe)",
        "FOR": "4",
        "AGI": "5",
        "VOL": "4",
        "LOG": "4",
        "CHA": "4",
        "ANA": "3",
        "Description": "Aussi connus sous le nom d’elfes de la nuit ou, péjorati vement, d’elfes noirs, les nocturnas sont originaires d’Eu rope du Nord. On en trouve dans une moindre mesure dans toute l’Europe et l’Amérique du Nord, probablement du fait des grands mouvements de populations de ces derniers siècles. Ils se différencient des elfes communs par leur fin duvet, le plus souvent noir, mais tirant parfois sur le bleu ou le violet, semblable à la fourrure d’une panthère noire. Leurs yeux et cheveux arborent la même teinte, bien que certains cas de cheveux argentés ou blancs aient été rapportés. Les nocturnas sont de vrais animaux nocturnes, ils sont hypersensibles à la lumière et leur biorythme les pousse en conséquence à dormir en journée pour vivre la nuit. Étant de nature plutôt introvertie, cela leur convient bien, ils ren contrent ainsi moins de monde et de fait souffrent moins de stigmatisation qu’on pourrait le craindre. Ils comptent enfin une proportion d’Éveillés supérieure à la normale, principalement des adeptes"
      },
      {
        "Métatype": "Wakyambi (métavariant Elfe)",
        "FOR": "4",
        "AGI": "5",
        "VOL": "4",
        "LOG": "4",
        "CHA": "4",
        "ANA": "3",
        "Description": "Les wakyambis sont des elfes du sud de l’Afrique de très grande taille, comparable à celle des trolls, mais qui gardent la sveltesse des elfes et se déplacent avec une grâce surprenante. Leur peau est sombre et leurs cheveux crépus confirment leur origine locale. Ils vivent en tribus isolées dans la savane et forment une culture encore lar gement méconnue. Selon le folklore africain, ils seraient les descendants des Êtres des cieux, Habitants des nuages et d’autres noms faisant tous référence au ciel et désignant des envoyés divins. Leurs tribus sont très repliées sur elles-mêmes et li mitent autant que possible leurs contacts avec l’extérieur, les tribus communes alentour participant à leur protection et leur isolation. Cependant, lorsqu’il devient adulte, chaque membre effectue un pèlerinage de plusieurs années au cours duquel il parcourt le monde extérieur. Au terme de ce chemin des rêves, ils rejoignent leur tribu, qui reste ainsi informée de l’état du monde."
      },
      {
        "Métatype": "Xapiri thëpë (métavariant Elfe)",
        "FOR": "4",
        "AGI": "4",
        "VOL": "5",
        "LOG": "4",
        "CHA": "4",
        "ANA": "3",
        "Description": "Les xapiris thëpë sont originaires des forêts tropicales du bassin amazonien, où ils vivent en tribus encore plus re cluses que leurs cousins d’Afrique du Sud. Contrairement à eux, très peu de xapiri thëpës quittent leur tribu et il s’agit principalement de diplomates qui n’effectuent que de courts séjours à l’extérieur. Certains ont été aperçus à Metropòle, Manaus et d’autres villes d’Amérique latine. Il semblerait que des cas d’exil existent, pour des raisons inconnues. Ils sont légèrement plus petits que les elfes communs, mais leur principale caractéristique physique est la présence sur leur peau de taches irrégulières vert foncé, qui gran dissent tout au long de la vie du xapiri thëpë. Elles sont capables de convertir la lumière du soleil en énergie, limitant ainsi leurs besoins en nourriture, sans les supplanter com plètement, en plus de les aider à se camoufler dans la jungle. Ils souffrent par contre d’une allergie marquée à toute forme de pollution, ce qui limite fortement leur présence en ville."
      },
      {
        "Métatype": "Banshee (Infecté Elfe)",
        "FOR": "5",
        "AGI": "5",
        "VOL": "5",
        "LOG": "4",
        "CHA": "6",
        "ANA": "3",
        "Description": "Les elfes infectés par le VVHMH I deviennent des banshees. Leur apparence n’est que peu affectée par la trans formation, tout juste sont-ils encore plus minces et leurs incisives légèrement plus longues. Petit à petit, leur peau perd de sa couleur pour devenir légèrement translucide et laisser apparaître les veines. Les banshees sont dotées d’un odorat et d’une ouïe accrus et infligent la peur dans le cœur de ceux qui leur font face, certains pouvant même pousser un hurlement paralysant, duquel ils tirent leur nom. Enfin, les banshees peuvent se changer en nuage de brume, échappant ainsi à la plupart des menaces et pouvant se faufiler où bon leur semble. Comme tous les Infectés au VVHMH I, les banshees doivent drainer l’Essence d’autres métahumains pour maintenir la leur à niveau et ne pas périr. Elles ne peuvent consommer que du sang métahumain et souffrent de nausées et de vomissements si elles ingèrent toute autre nourriture ou boisson. Outre leur allergie au soleil, elles sont particulièrement vulnérables à l’argent et au bois."
      },
      {
        "Métatype": "Faucheur (Infecté Elfe)",
        "FOR": "5",
        "AGI": "5",
        "VOL": "5",
        "LOG": "3",
        "CHA": "3",
        "ANA": "3",
        "Description": "'Les elfes infectés par le VVHMH II deviennent des faucheurs. Leur apparence change radicalementbien qu’ils restent minces leur musculature augmente significativement. Plus impressionnant : leurs dents semblent affûtées, comme si elles n’étaient que canines. Enfin, leurs orteils durcissent et prennent la forme de serres.La vitesse de déplacement et d’action des faucheurs s’accroît fortement et leur derme renforcé leur offre une protection. Leurs griffes finissent d’en faire des combattants redoutables. Ils gagnent aussi une vision thermographique"
      },
      {
        "Métatype": "Goule (Infecté Elfe)",
        "FOR": "6",
        "AGI": "5",
        "VOL": "5",
        "LOG": "3",
        "CHA": "4",
        "ANA": "3",
        "Description": "Les métahumains infectés par le VVHMH III deviennent tous des goules. La transformation débute par la perte des poils et cheveux, puis la peau perd de sa souplesse, durcit, et défraîchit pâlit. Selon le groupe ethnique de la goule, la teinte finale variera d’une pâleur lugubre à un gris cendré. Les yeux blanchissent alors que se développe une cataracte qui finit par rendre les goules aveugles, tandis que l’ouïe et l’odorat se développent pour compenser, aidés par la perception astrale. La mâchoire s’élargit légèrement et les doigts s’allongent et se prolongent de griffes. Les goules sont exclusivement carnivores et doivent consommer régulièrement de la chair métahumaine. Elles sont prises de nausées si elles consomment tout autre type de nourriture"
      },
      {
        "Métatype": "Nain",
        "FOR": "4",
        "AGI": "4",
        "VOL": "5",
        "LOG": "4",
        "CHA": "4",
        "ANA": "3",
        "Description": "Les nains sont le métatype le mieux intégré à la société humaine. Moins nombreux que les elfes, ils ne sont pas perçus comme hautains et leur petite taille les rend moins me naçants que les orks et les trolls, ce qui fait qu’ils sont plus acceptés. Il arrive même que des nains s’assimilent aux hu mains dans certains conflits raciaux. C’est par contre moins vrai pour leurs métavariantes, car leurs métatraits sont plus visibles et marqués. Être accepté ne signifie pas pour autant être valorisé et ils sont nombreux à se sentir sous-estimés. Toutes les métavariantes partagent la même petite taille et une forte pilosité. Ils bénéficient d’une espérance de vie al longée et d’une certaine robustesse face aux maladies et aux toxines. Le tout assorti, bien sûr, de leur caractère générale ment bien trempé. Mais cela n’empêche pas leur apparence physique de différer fortement d’une métavariante à l’autre."
      },
      {
        "Métatype": "Gnome (métavariant Nain)",
        "FOR": "3",
        "AGI": "5",
        "VOL": "4",
        "LOG": "5",
        "CHA": "4",
        "ANA": "3",
        "Description": "Les gnomes sont la métavariante la plus rare de nains. Ils sont originaires d’Europe centrale et d’Asie Mineure, mais même dans ces régions, ils restent minoritaires parmi les nains. Ils sont les plus petits représentants de leur métatype, dépassant rarement le mètre, et sont aussi bien plus minces. Leur absence de barbe et leur faible pilosité générale finissent de leur donner une apparence parfois enfantine. Ils pèsent une trentaine de kilos, ce qui est beaucoup au vu de leur taille et qui s’explique par une musculature surprenante, sans qu’ils soient pour autant aussi forts que des humains.Ils sont généralement calmes, sociaux et de nature joviale. Ils sont également portés sur la technologie, ce qui les aide à surmonter le handicap d’avoir une si petite sta ture dans un monde conçu pour les humains. Enfin, ils sont particulièrement résistants à la magie, sans que les chercheurs parviennent à comprendre pourquoi."
      },
      {
        "Métatype": "Hanuman (métavariant Nain)",
        "FOR": "4",
        "AGI": "5",
        "VOL": "4",
        "LOG": "4",
        "CHA": "4",
        "ANA": "3",
        "Description": "Natifs du sous-continent indien, les hanumans res semblent fortement à des singes, ce qui leur a valu ce nom en référence à Hanuman, le dieu singe hindou. Ils dis posent d’une queue préhensile parfaitement fonctionnelle et d’une pilosité importante sur les jambes et la queue. Leur nez est aplati et leurs orteils sont allongés, idéaux pour l’escalade. Surtout, ils sont rapides et agiles. Ils restent minoritaires, même dans l’Union indienne, et ont pendant longtemps été pris pour des paracréatures conscientes, à cause du manque d’études faites dans les zones sous-développées où ils sont apparus dès l’Éveil. Si leur asso ciation avec Hanuman leur vaut parfois un certain respect, ils sont aussi considérés comme des fauteurs de troubles, non sans lien avec leur statut de paria vis-à-vis du système de castes rigides, qui en pousse beaucoup à la rébellion et à l’exil. Ils sont souvent dans la ligne de mire d’associations racistes, leur apparence faisant d’eux des cibles faciles."
      },
      {
        "Métatype": "Koborokuru (métavariant Nain)",
        "FOR": "4",
        "AGI": "4",
        "VOL": "5",
        "LOG": "4",
        "CHA": "4",
        "ANA": "3",
        "Description": "Ces nains sont originaires du Japon et doivent leur nom aux ainus, des indigènes de l’île septentrionale. Selon leur mythologie, les koborokurus, littéralement « ceux qui vivent sous les plantes », sont des esprits vivants sous terre. Ils sont légèrement plus petits et agiles que les nains clas siques et ont une pilosité plus développée. Leurs capacités arcaniques sont légèrement plus développées que la nor male, se manifestant le plus souvent par une magie multi forme, faisant d’eux des adeptes mystiques. Les koborokurus représentent la grande majorité des nains au Japon et, s’ils ont été plutôt bien accueillis par les ainus, ils ont souffert dans le reste du pays du racisme extrême qui y a prévalu après l’Éveil. Comme tout métahumain, ils ont été persécutés et beaucoup ont été déportés sur l’île de Yomi. Bien que la situation se soit depuis améliorée, un fort ra cisme subsiste et les koborokurus tendent à vivre en groupes plutôt reclus. Ils sont rares en dehors du Japon, avec néan moins des populations plus importantes en Corée, aux Phi lippines et dans les enclaves japonaises de nombreux pays."
      },
      {
        "Métatype": "Menehune (métavariant Nain)",
        "FOR": "5",
        "AGI": "4",
        "VOL": "4",
        "LOG": "4",
        "CHA": "4",
        "ANA": "3",
        "Description": "tavariante naine dominante dans les îles du Pacifique, en particulier au royaume de Hawai’i. Leur nom qui signifie « Enfants de la Terre » est celui d’un petit peuple des mythologies hawaïennes. Ils sont bien intégrés à la société, le royaume étant très tolérant de nature. Leur carrure est en tous points semblable à celle des nains communs, avec des muscles épais. Leur nez est épaté et leur pilosité corporelle plus développée, leurs sourcils sont broussailleux et leurs cheveux bouclés et générale ment clairs. Ils sont d’excellents nageurs, grâce à leurs doigts de pieds palmés et leurs yeux parfaitement adaptés à la vision sous-marine. Ils sont par contre dépourvus de toute résistance aux toxines."
      },
      {
        "Métatype": "Gobelin (Infecté nain)",
        "FOR": "6",
        "AGI": "4",
        "VOL": "5",
        "LOG": "4",
        "CHA": "3",
        "ANA": "3",
        "Description": "'Les nains infectés par le VVHMH I deviennent des gobelins. La transformation a des effets drastiques sur euxleur graisse est intégralement consommée laissant leur squelette nettement visible sous la peau. Ils perdent aussi l’ensemble de leurs poils, alors que leur peau prend une teinte maladive et dégage une légère odeur écœurante. Leurs oreilles s’allongent et leurs glandes salivaires s’hypertrophient, provoquant une salivation excessive.Les gobelins sont dotés d’un sens du goût et d’une ouïe accrus et sont immunisés au feu.Comme tous les Infectés au VVHMH I, les gobelins doivent drainer l’Essence d’autres métahumains pour maintenir la leur à niveau et ne pas périr. Ils peuvent consommer n’importe quelle nourriture qui ne soit pas trop transformée, mais la chair métahumaine crue doit faire partie du menu. Outre leur allergie au soleil, ils sont particulièrement vulnérables au fer."
      },
      {
        "Métatype": "Rongeur (Infecté nain)",
        "FOR": "6",
        "AGI": "4",
        "VOL": "5",
        "LOG": "4",
        "CHA": "3",
        "ANA": "3",
        "Description": "Les nains infectés par le VVHMH II deviennent des rongeurs. Leur peau se décolore pour devenir grisâtre, épaisse et rugueuse. Leurs molaires grossissent et leur mâchoire se renforce en conséquence. Les rongeurs sont totalement immunisés aux toxines et peuvent produire un souffle toxique qui provoque une forte nausée chez les victimes. De plus, leur toucher est paralysant. Leur régime alimentaire doit impérativement contenir des os métahumains afin d’assurer leur survie."
      },
      {
        "Métatype": "Goule (Infecté nain)",
        "FOR": "7",
        "AGI": "4",
        "VOL": "6",
        "LOG": "3",
        "CHA": "3",
        "ANA": "3",
        "Description": "Les métahumains infectés par le VVHMH III deviennent tous des goules. La transformation débute par la perte des poils et cheveux, puis la peau perd de sa souplesse, durcit, et défraîchit pâlit. Selon le groupe ethnique de la goule, la teinte finale variera d’une pâleur lugubre à un gris cendré. Les yeux blanchissent alors que se développe une cataracte qui finit par rendre les goules aveugles, tandis que l’ouïe et l’odorat se développent pour compenser, aidés par la perception astrale. La mâchoire s’élargit légèrement et les doigts s’allongent et se prolongent de griffes. Les goules sont exclusivement carnivores et doivent consommer régulièrement de la chair métahumaine. Elles sont prises de nausées si elles consomment tout autre type de nourriture"
      },
      {
        "Métatype": "Ork",
        "FOR": "5",
        "AGI": "4",
        "VOL": "4",
        "LOG": "4",
        "CHA": "4",
        "ANA": "3",
        "Description": "Les orks sont le second métatype le plus nombreux, après les humains. Ils sont aussi très discriminés à tous les ni veaux de la société, seulement légèrement moins que les trolls, bien que depuis quelques décennies la culture po pulaire de l’Orxploitation et l’Or’zet permettent un début d’émancipation. Les choses se sont accélérées avec la reconnaissance officielle de plusieurs enclaves, la plus connue étant l’Underground de Seattle, devenu officiellement un des districts de la ville après l’adoption de la Proposition 23. Les orks sont de grande taille, de constitution robuste, avec des crocs saillants et sont de ce fait souvent perçus comme menaçants par les métatypes plus frêles. Leur grossesse rapide et leur propension aux naissances multiples fait que leur nombre augmente rapidement, ce qui est vu comme une me nace supplémentaire par les suprémacistes humains. Les métavariantes orkes sont très diversifiées et dévient beaucoup des orks communs, à tel point qu’elles ne s’identifient que rarement à la culture orke."
      },
      {
        "Métatype": "Hobgobelin (métavariant ork)",
        "FOR": "4",
        "AGI": "4",
        "VOL": "4",
        "LOG": "5",
        "CHA": "4",
        "ANA": "3",
        "Description": "Les hobgobelins sont principalement originaires de la péninsule arabique et de l’Asie centrale. Leur nom, particulièrement péjoratif, leur vient de leur morphologie peu engageante : s’ils sont plus petits et plus minces que les orks communs, leur peau légèrement verdâtre, leurs dents aiguisées et leur mâchoire pointue leur donnent néanmoins une apparence féroce, renforcée par leurs yeux globuleux entièrement noirs. Ils ont été victimes de nombreuses discriminations, même selon les standards orks, en particulier de la part de musulmans extrémistes, ce qui a limité leur intégration sociale et les a conduits à se retrancher dans des ghettos. Ils ont un sens de l’honneur très développé et du mal à se contrôler, au-delà du sang chaud typique de la région. Beaucoup sont cependant engagés dans la lutte contre le fondamentalisme et les courants radicaux, après en avoir tant souffert."
      },
      {
        "Métatype": "Orgre (métavariant ork)",
        "FOR": "5",
        "AGI": "4",
        "VOL": "5",
        "LOG": "4",
        "CHA": "3",
        "ANA": "3",
        "Description": "Nous sommes originaires d’Europe, où nous représentons environ un tiers des orks. Nous sommes généralement plus petits et trapus que les orks communs et notre peau plus douce, associée à notre pilosité moindre, nous donne une apparence moins bestiale. Cela n’a pas empêché cer tains humains de se baser sur notre grande bouche et notre menton marqué pour colporter des rumeurs de cannibalisme à notre sujet. Bien qu’elles aient été prouvées fausses depuis les années 40, les stigmatisations sont encore fortes par endroit et beaucoup d’entre nous cherchent refuge à l’écart des populations humaines, en particulier dans la Ré publique trolle de la Forêt noire. Notre caractéristique la plus notable est notre capacité à digérer une très grande variété d’aliments, bien que par les temps qui courent cela conduise plus à l’embonpoint qu’à autre chose."
      },
      {
        "Métatype": "Oni (métavariant ork)",
        "FOR": "4",
        "AGI": "5",
        "VOL": "4",
        "LOG": "3",
        "CHA": "5",
        "ANA": "3",
        "Description": "'Métavariante orke dominante sur l’archipel japonais où ils représentent les trois quarts des orks, les onis ressemblent aux créatures démoniaques du folklore nippon. Leur peau est de couleur vive, rouge, bleue ou orange, leurs yeux sont légèrement protubérants et ils disposent de longues cornes recourbées. Cette apparence unique les rend très visibles et intimidants, particulièrement pour les Japonais. Comme tous les métahumains de ce pays, et probable ment même davantage, les onis ont subi une discrimina tion féroce et un très grand nombre a été déporté sur l’île prison de Yomi. Là-bas, ils ont ressuscité le Bushido du Japon féodal"
      },
      {
        "Métatype": "Satyre (métavariant ork)",
        "FOR": "5",
        "AGI": "5",
        "VOL": "4",
        "LOG": "4",
        "CHA": "3",
        "ANA": "3",
        "Description": "Les satyres sont originaires de la région méditerranéenne et plus particulièrement de Grèce où ils sont la métava riante orke dominante. Leur physique gracile se distingue surtout par leurs jambes de bouc aux sabots fendus recouvertes de poils qui leur procurent une vitesse de course exceptionnelle et de grandes capacités de saut. Ils ont aussi de petites cornes, généralement recourbées. Les satyres sont sympathiques et joviaux, et générale ment travailleurs, malgré les stéréotypes du satyre épicurien profitant des plaisirs de la vie qui leur colle à la peau. Ils sont la métavariante orke qui s’est le plus répandue sur la planète et ils sont très ouverts aux autres, mais cela ne les empêche pas de régulièrement souffrir de racisme."
      },
      {
        "Métatype": "Wendigo (Infecté ork)",
        "FOR": "6",
        "AGI": "4",
        "VOL": "5",
        "LOG": "5",
        "CHA": "4",
        "ANA": "4",
        "Description": "'Les orks infectés par le VVHMH I deviennent des wendi gos. Leur transformation est particulièrement impressionnante : ils grandissent de plus de 30 cm et développent une longue fourrure blanche sur tout le corps. Leurs ongles et leurs canines s’allongent et se transforment en griffes puissantes et crocs acérés. Fait notable, au moment de leur transformation, tous les wendigos s’Éveillent pour devenir magiciens, ou adeptes mystiques s’ils étaient adeptes avant leur infection. Ils développent aussi leurs sens : leur ouïe et leur odorat s’af finent et leur acuité visuelle est telle qu’ils peuvent distinguer des détails à une distance impressionnante. Leur apparence intimidante provoque la peur chez ceux qui les observent, mais c’est surtout leur capacité d’influence qui est à craindre"
      },
      {
        "Métatype": "Grendel (Infecté ork)",
        "FOR": "6",
        "AGI": "4",
        "VOL": "5",
        "LOG": "3",
        "CHA": "3",
        "ANA": "3",
        "Description": "Les orks infectés par le VVHMH II deviennent des grendels. Leur pilosité s’accroît jusqu’à devenir une fourrure courte et drue et leurs membres supérieurs s’allongent sensiblement. Au niveau du visage, leurs défenses s’aiguisent et leurs yeux s’agrandissent. Les grendels vivent principalement sous terre et sont capables d’exercer un certain contrôle sur les animaux souterrains. Leurs sens s’affinent pour s’adapter à cet environne ment, leur vision devient thermographique et ils peuvent s’appuyer sur un odorat amélioré. Enfin, ils peuvent para lyser leurs proies d’un simple toucher, ce qui est d’autant plus aisé qu’ils disposent d’une capacité de dissimulation surnaturelle. Comme la plupart des Infectés, le régime alimentaire des grendels doit contenir de la chair métahumaine."
      },
      {
        "Métatype": "Goule (Infecté ork)",
        "FOR": "7",
        "AGI": "4",
        "VOL": "5",
        "LOG": "3",
        "CHA": "2",
        "ANA": "3",
        "Description": "Les métahumains infectés par le VVHMH III deviennent tous des goules. La transformation débute par la perte des poils et cheveux, puis la peau perd de sa souplesse, durcit, et défraîchit pâlit. Selon le groupe ethnique de la goule, la teinte finale variera d’une pâleur lugubre à un gris cendré. Les yeux blanchissent alors que se développe une cataracte qui finit par rendre les goules aveugles, tandis que l’ouïe et l’odorat se développent pour compenser, aidés par la perception astrale. La mâchoire s’élargit légèrement et les doigts s’allongent et se prolongent de griffes. Les goules sont exclusivement carnivores et doivent consommer régulièrement de la chair métahumaine. Elles sont prises de nausées si elles consomment tout autre type de nourriture"
      },
      {
        "Métatype": "Troll",
        "FOR": "6",
        "AGI": "4",
        "VOL": "4",
        "LOG": "4",
        "CHA": "4",
        "ANA": "3",
        "Description": "Les trolls sont de loin le métatype le moins courant. Ils sont aussi les plus inégalement répartis : on n’en trouve par exemple aucun parmi les natifs d’Amérique du Sud. Les trolls sont particulièrement massifs, toutes les métava riantes dépassant allègrement les 2 mètres. Leurs canines très développées, leurs cornes asymétriques aux formes irrégulières et leurs dépôts dermiques complètent un ta bleau très intimidant, qui vaut aux trolls d’être le métatype le plus discriminé. Ses métavariantes sont toutes dépourvues de dépôts dermiques, mais n’en demeurent pas moins impressionnantes, à l’exception des fomoris. Beaucoup de trolls essaient de s’en sortir en s’appuyant sur leurs atouts : la force et la violence, ce qui ne fait bien sûr qu’empirer les choses, même si dans la pègre et les Ombres cela peut servir à un petit nombre. D’autres, de plus en plus nombreux, se replient en communauté pour rester le plus possible à l’écart du reste du monde."
      },
      {
        "Métatype": "Cyclope (métavariant Troll)",
        "FOR": "7",
        "AGI": "3",
        "VOL": "4",
        "LOG": "4",
        "CHA": "3",
        "ANA": "3",
        "Description": "Natifs des îles de la mer êgée, les cyclopes sont plus grands et plus forts que les trolls communs. Comme leur nom l’indique, leur caractéristique la plus remarquable est  leur unique œil au centre du front. Si sa taille imposante  leur assure une bonne vue, l’absence de vision binocu laire est néanmoins handicapante et la cybernétique est  impuissante à les aider, car leur cerveau est dépourvu des  capacités cognitives nécessaires à tirer parti d’un éventuel  second œil cybernétique. Leur peau, logiquement bronzée  du fait de leur origine, a une faible pilosité et est dépourvue  de dépôts dermiques. Enfin, ils n’ont généralement pas de  corne, ou, plus rarement, une seule située juste au-dessus  de leur œil. Du fait de leur force hors du commun, les cyclopes sont  souvent embauchés pour assurer la sécurité des navires et  chantiers navals, comme videurs ou simplement en tant  que travailleurs manuels. Leur tempérament colérique et  borné fait qu’ils travaillent aussi régulièrement pour les  mafias grecques."
      },
      {
        "Métatype": "Fomori (métavariant Troll)",
        "FOR": "6",
        "AGI": "3",
        "VOL": "5",
        "LOG": "4",
        "CHA": "4",
        "ANA": "3",
        "Description": "Les fomoris, particulièrement nombreux dans les îles britanniques où ils représentent la moitié de la population trolle, apparaissent dans les populations d’ascendance cel tique. Les migrations des derniers siècles font qu’on en re trouve en faible nombre à beaucoup d’autres endroits. Les fomoris sont plus petits que les trolls communs et dépourvus de dépôts dermiques. Bien qu’ils soient large ment aussi forts que leurs congénères, ils ont un aspect moins menaçant. Ils sont donc nettement mieux intégrés dans la société et souffrent moins de discrimination, au point de parfois provoquer un peu de jalousie de la part des autres métavariantes. Néanmoins, les fomoris agissent fréquemment comme représentants de la communauté trolle. Ils sont plus enclins à l’Éveil et, sans que personne n’explique cette apparente contradiction, plus résistants aux sorts, les leurs compris. Une théorie est que leur résistance aux sorts est une évolution ancienne pour faire face à une menace arcanique spécifique aux îles britanniques."
      },
      {
        "Métatype": "Géant (métavariant Troll)",
        "FOR": "7",
        "AGI": "3",
        "VOL": "4",
        "LOG": "4",
        "CHA": "4",
        "ANA": "3",
        "Description": "La Scandinavie et l’Allemagne ont vu apparaître des trolls encore plus grands que la normale. Logiquement nommés géants, ils mesurent trois mètres de moyenne, avec un record à 3,65 mètres ! Ils n’ont ni cornes ni dépôts dermiques, mais leur peau est coriace et sa texture rappelle celle de l’écorce. Leur pilosité faciale est importante et la plupart des hommes arborent de longues barbes consciencieusement tressées. Sans surprise, ils ont beaucoup de mal à s’ajuster à un monde bien trop petit pour eux qui les rejette encore plus que les trolls communs et beaucoup d’entre eux vivent en marge de la société et se tournent vers le monde du crime. Evo et le gouvernement scandinave avaient tenté une campagne de communication pour donner une meilleure image d’eux, mais les résultats furent mitigés et elle a globalement déplu aux géants. En conséquence, beaucoup en Scandinavie ont émigré vers la République trolle de la Forêt noire, suivis par des géants de toute l’Europe."
      },
      {
        "Métatype": "Minotaure (métavariant Troll)",
        "FOR": "7",
        "AGI": "3",
        "VOL": "4",
        "LOG": "4",
        "CHA": "3",
        "ANA": "3",
        "Description": "Les minotaures sont originaires de Grèce, Turquie et Asie Mineure, mais on en trouve dans une moindre mesure le long de la côte nord de la Méditerranée. Ils sont légèrement plus petits et trapus que les trolls communs, avec des narines prononcées et dilatées, une pilosité importante et surtout, une paire de longues cornes symétriques. Celles ci sont particulièrement denses et prennent racine dans une épaisse plaque osseuse qui leur permet d’endurer des chocs puissants et d’être utilisées en combat. Malgré leur apparence taurine, différentes études génétiques ont écar té tout lien entre les minotaures et les bovins, causant la déception des organisations anti-métahumains. Contrairement aux préjugés communs, les minotaures sont de nature pacifique, à tel point qu’un nombre important d’entre eux se font tronquer les cornes pour manifester leur volonté d’intégration, ce qui ne manque pas de créer quelques controverses. Ils sont généralement volontaires à la tâche, mais peuvent se montrer têtus."
      },
      {
        "Métatype": "Dzoo-noo-qua (Infecté troll)",
        "FOR": "8",
        "AGI": "3",
        "VOL": "5",
        "LOG": "3",
        "CHA": "3",
        "ANA": "3",
        "Description": "Les trolls infectés par le VVHMH I deviennent des dzoonoo-quas. Lors de leur transformation, leurs dépôts dermiques croissent en plaques, nodules, cornes ou épines et sont largement renforcés. Il en résulte une apparence irrégulière et généralement asymétrique. Leur masse musculaire s’accroît significativement, de même que la vascula risation de leurs yeux, qui sont en permanence injectés de sang. Tout cela fait des dzoo-noo-quas des Infectés impressionnants physiquement. Leur ouïe est améliorée et ils sont capables de contrer les sorts qui les ciblent, même sans être magiquement actifs. Comme tous les Infectés au VVHMH I, les dzoo-noo-quas doivent drainer l’Essence d’autres métahumains pour maintenir la leur à niveau et ne pas périr. Ils peuvent consommer n’importe quelle nourriture, mais la chair m tahumaine crue doit faire partie du menu"
      },
      {
        "Métatype": "Mutaqua (Infecté troll)",
        "FOR": "8",
        "AGI": "4",
        "VOL": "4",
        "LOG": "3",
        "CHA": "3",
        "ANA": "3",
        "Description": "Les événements connus comme la gobelinisation au dé but du XXIe siècle avaient déjà modifié les rapports sociaux entre les gens et fait passer l’humanité au stade de méta humanité. Mais en 2061, le passage de la comète de Halley a eu une répercussion encore plus grande sur la civilisation et la société en général. La Comète engendra la GRIME (Gobelinisation Récessive Irrégulière à Manifestation Éruptive) qui allait apporter son lot de changements : les changelins marchaient sur le monde. Il est important de comprendre que les changelins ne sont pas des métatypes au sens propre du terme, ils ne sont pas de nouvelles espèces de la métahumanité. Mais une expression métagénique qui s’est répandue sur toute la planète, avec la montée de la manasphère, déclenchée par le passage de la comète. Dernièrement, les nombreuses recherches nous ont per mis de comprendre que certains événements répondaient  à une logique alors que d’autres restaient mystérieux ou  le fruit du hasard. Par exemple, le Ganesha (homme à tête  d’éléphant) apparu après les événements du Gange, re présente une expression métagénique due aux croyances  locales. Alors que la caissière d’un Stuffer Shack qui a vu  apparaître une fourrure verdâtre, des cornes et des yeux de  mouches, est plutôt la victime d’un brusque changement  arbitraire. Au vu des connaissances actuelles, les chercheurs estiment que ces démonstrations seraient le fruit de traits  métagéniques endommagés par des millénaires de sélec tions naturelles, de croisements d’espèces endormies,  mais aussi des apports transgéniques venant de virus ou  de thérapies géniques tout comme de dysfonctionne ment des systèmes de réparations et la mutation par des"
      },
      {
        "Métatype": "Fomóraig (Infecté troll)",
        "FOR": "9",
        "AGI": "4",
        "VOL": "3",
        "LOG": "3",
        "CHA": "3",
        "ANA": "3",
        "Description": "Les trolls infectés par le VVHMH II deviennent des fomóraigs. Leurs dépôts dermiques s’épaississent, mais pas de façon aussi manifeste que les dzoo-noo-quas et de nombreuses boules osseuses apparaissent juste sous la peau. Elles sécrètent un fluide visqueux particulièrement corrosif. Leurs membres s’élargissent et leurs ongles se trans forment en griffes. La plupart d’entre eux développent une crinière irrégulière et hirsute noire ou marron. Les fomóraigs sont capables de contrer les sorts qui les ciblent, même sans être magiquement actifs. Ils ne peuvent pas manger de viande cuite, celle-ci leur provoquant des nausées, mais doivent manger régulière ment de la chair métahumaine. De plus, ils souffrent d’une légère allergie à la pollution de l’air."
      },
      {
        "Métatype": "Goule (Infecté Troll)",
        "FOR": "9",
        "AGI": "3",
        "VOL": "5",
        "LOG": "3",
        "CHA": "2",
        "ANA": "3",
        "Description": "Les métahumains infectés par le VVHMH III deviennent tous des goules. La transformation débute par la perte des poils et cheveux, puis la peau perd de sa souplesse, durcit, et défraîchit pâlit. Selon le groupe ethnique de la goule, la teinte finale variera d’une pâleur lugubre à un gris cendré. Les yeux blanchissent alors que se développe une cataracte qui finit par rendre les goules aveugles, tandis que l’ouïe et l’odorat se développent pour compenser, aidés par la perception astrale. La mâchoire s’élargit légèrement et les doigts s’allongent et se prolongent de griffes. Les goules sont exclusivement carnivores et doivent consommer régulièrement de la chair métahumaine. Elles sont prises de nausées si elles consomment tout autre type de nourriture"
      },
      {
        "Métatype": "Esprit libre",
        "FOR": "5",
        "AGI": "5",
        "VOL": "5",
        "LOG": "5",
        "CHA": "5",
        "ANA": "3",
        "Description": "Les motivations des esprits libres sont insondables, d’autant plus qu’ils ne sont pas loquaces par nature. Beau coup se désintéressent complètement de la métahumanité et suivent des buts qui nous sont étrangers, ou néfastes. D’autres, que l’on nomme animas, se mêlent au contraire à nous. Ils prennent des traits métahumains lorsqu’ils se matérialisent et adoptent des comportements similaires aux nôtres. Les théories les plus en vogue avancent que ces différents comportements ne visent qu’à expérimenter une palette de sentiments, dont ils se nourrissent. Aucun es prit n’a jamais confirmé ni infirmé cette théorie, ni aucune autre. On trouve ainsi, si on sait où regarder, des esprits libres à tous les échelons de la société, des Ombres aux positions de pouvoir. Buttercup, la principale actionnaire d’Evo, est probablement l’esprit libre la plus influente actuellement, mais elle n’est pas la seule, plusieurs ont des rôles importants en Amazonie, Mandchourie ou en Iakoutie Éveillée. La Société de préservation de l’espace astral estime la population actuelle d’animas à quelques milliers d’individus. La plupart vivent en marge de la société, sans réel statut légal, mais certains font les démarches nécessaires pour obtenir un SIN, auprès d’un des rares pays à leur en octroyer, ou auprès d’Evo et Wuxing, seules corporations à le faire ouvertement. La palette de pouvoirs dont les esprits libres ont fait la démonstration est très large et inclut sans surprise les pouvoirs des esprits invoqués par les mages, y compris ceux sous forme majeure. Elle ne s’y limite cependant pas et de nombreux esprits libres possèdent des pouvoirs inhabituels. Le plus déroutant est leur forme réaliste, qui leur permet de se matérialiser sous une forme qui ne laisse pas perce voir leur nature d’esprit : ils semblent respirer et peuvent se nourrir normalement. Bien sûr, ils restent de nature duale même sous cette forme et peuvent toujours être repérés par observation astrale."
      }
    ]
  },
  "4_bonus_attributs_par_metatype": {
    "nom": "4. BONUS ATTRIBUTS PAR METATYPE",
    "total": 41,
    "donnees": [
      {
        "Métatype": "Humain",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Nartaki (métavariant humain)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Changelin (métavariant humain)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Vampire (Infecté humain)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Nosfératu (Infecté humain)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Loup-garou (Infecté humain)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Goule (Infecté humain)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Elfe",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "1",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Dryade (métavariant Elfe)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "1",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Nocturna (métavariant Elfe)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "1",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Wakyambi (métavariant Elfe)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "1",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Xapiri thëpë (métavariant Elfe)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "1",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Banshee (Infecté Elfe)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "1",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Faucheur (Infecté Elfe)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "1",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Goule (Infecté Elfe)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "1",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Nain",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "1",
        "Armure": ""
      },
      {
        "Métatype": "Gnome (métavariant Nain)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "1",
        "Armure": ""
      },
      {
        "Métatype": "Hanuman (métavariant Nain)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "1",
        "Armure": ""
      },
      {
        "Métatype": "Koborokuru (métavariant Nain)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "1",
        "Armure": ""
      },
      {
        "Métatype": "Menehune (métavariant Nain)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "1",
        "Armure": ""
      },
      {
        "Métatype": "Gobelin (Infecté nain)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "1",
        "Armure": ""
      },
      {
        "Métatype": "Rongeur (Infecté nain)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "1",
        "Armure": ""
      },
      {
        "Métatype": "Goule (Infecté nain)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "1",
        "Armure": ""
      },
      {
        "Métatype": "Ork",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "1",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Hobgobelin (métavariant ork)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "1",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Orgre (métavariant ork)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "1",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Oni (métavariant ork)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "1",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Satyre (métavariant ork)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "1",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Wendigo (Infecté ork)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "1",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Grendel (Infecté ork)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "1",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Goule (Infecté ork)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "1",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Troll",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "-1",
        "vision_nocturne": "",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Cyclope (métavariant Troll)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "-1",
        "vision_nocturne": "",
        "vision_thermographique": "1",
        "Armure": ""
      },
      {
        "Métatype": "Fomori (métavariant Troll)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "1",
        "Armure": ""
      },
      {
        "Métatype": "Géant (métavariant Troll)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "1",
        "Armure": ""
      },
      {
        "Métatype": "Minotaure (métavariant Troll)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "1",
        "Armure": ""
      },
      {
        "Métatype": "Dzoo-noo-qua (Infecté troll)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "1",
        "Armure": ""
      },
      {
        "Métatype": "Mutaqua (Infecté troll)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "1",
        "Armure": ""
      },
      {
        "Métatype": "Fomóraig (Infecté troll)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "1",
        "Armure": ""
      },
      {
        "Métatype": "Goule (Infecté Troll)",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "",
        "Armure": ""
      },
      {
        "Métatype": "Esprit libre",
        "FOR": "",
        "AGI": "",
        "VOL": "",
        "LOG": "",
        "CHA": "",
        "ANA": "",
        "Compétence": "",
        "vision_nocturne": "",
        "vision_thermographique": "",
        "Armure": ""
      }
    ]
  },
      "5_competences": {
    "nom": "5. COMPETENCES - NOUVEL ARBRE v3.0",
    "total": 82,
    "donnees": [
      // === COMPÉTENCES GÉNÉRALES ===
      // Athlétisme
      {"Attribut": "Force", "Nom": "Escalade", "Description": "Escalade de surfaces verticales, cordes, parois.", "Code": "0+F", "Restriction": "Aucun", "Categorie": "Athlétisme", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Agilité", "Nom": "Parcours", "Description": "Sauts, roulades, franchissements d'obstacles.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Athlétisme", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Agilité", "Nom": "Défense à distance", "Description": "Esquiver, se mettre à couvert, réduire les dégâts de projectiles.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Athlétisme", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Force", "Nom": "Course", "Description": "Sprints, courses de fond, endurance physique.", "Code": "0+F", "Restriction": "Aucun", "Categorie": "Athlétisme", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Force", "Nom": "Natation", "Description": "Nage, plongée, survie en milieu aquatique.", "Code": "0+F", "Restriction": "Aucun", "Categorie": "Athlétisme", "Categorie_principale": "Compétences générales"},
      // Perception
      {"Attribut": "Logique", "Nom": "Astral", "Description": "Percevoir les auras, signatures magiques, esprits.", "Code": "0+L", "Restriction": "Eveille", "Categorie": "Perception", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Logique", "Nom": "Matrice", "Description": "Détecter les programmes, icônes, anomalies dans la Matrice.", "Code": "0+L", "Restriction": "Aucun", "Categorie": "Perception", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Logique", "Nom": "Physique", "Description": "Observer l'environnement, détecter les pièges, filatures.", "Code": "0+L", "Restriction": "Aucun", "Categorie": "Perception", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Logique", "Nom": "Sociale", "Description": "Lire les expressions, détecter les mensonges, évaluer les intentions.", "Code": "0+L", "Restriction": "Aucun", "Categorie": "Perception", "Categorie_principale": "Compétences générales"},
      // Pilotage
      {"Attribut": "Agilité", "Nom": "Deux roues", "Description": "Conduite de vélos, motos, monocycles.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Pilotage", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Agilité", "Nom": "Voitures", "Description": "Conduite de voitures, berlines, sportives.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Pilotage", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Agilité", "Nom": "Camions", "Description": "Conduite de poids lourds, transports.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Pilotage", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Agilité", "Nom": "Véhicules aériens", "Description": "Pilotage d'avions, hélicoptères, aéronefs.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Pilotage", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Agilité", "Nom": "Engins terrestres", "Description": "Conduite de tanks, véhicules blindés, chenillés.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Pilotage", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Agilité", "Nom": "Drones aquatiques", "Description": "Contrôle de drones sous-marins, navettes aquatiques.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Pilotage", "Categorie_principale": "Compétences générales"},
    
      {"Attribut": "Agilité", "Nom": "Drones terrestres", "Description": "Contrôle de drones terrestres, roues, menbre articulé.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Pilotage", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Agilité", "Nom": "Drones volants", "Description": "Contrôle de drones aériens, rotors, ailes fixes.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Pilotage", "Categorie_principale": "Compétences générales"},
      // Discrétion
      {"Attribut": "Agilité", "Nom": "Dissimulation astrale", "Description": "Masquer sa signature astrale, passer inaperçu sur le plan astral.", "Code": "0+A", "Restriction": "Eveille", "Categorie": "Discrétion", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Logique", "Nom": "Discrétion matricielle", "Description": "Se cacher dans la Matrice, effacer ses traces numériques.", "Code": "0+L", "Restriction": "Aucun", "Categorie": "Discrétion", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Agilité", "Nom": "Discrétion physique", "Description": "Se fondre dans l'ombre, se déplacer silencieusement.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Discrétion", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Agilité", "Nom": "Escamotage", "Description": "Vol à la tire, dissimulation d'objets, pickpocket.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Discrétion", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Agilité", "Nom": "Crochetage", "Description": "Ouverture de serrures mécaniques et électroniques.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Discrétion", "Categorie_principale": "Compétences générales"},
      // Survie
      {"Attribut": "Charisme", "Nom": "Animaux", "Description": "Dressage, soin, communication avec les animaux.", "Code": "0+C", "Restriction": "Aucun", "Categorie": "Survie", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Volonté", "Nom": "Sang-froid", "Description": "Résistance au stress, contrôle des émotions, panique.", "Code": "0+V", "Restriction": "Aucun", "Categorie": "Survie", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Logique", "Nom": "Premiers secours", "Description": "Soins d'urgence, stabilisation, traumatologie de base.", "Code": "0+L", "Restriction": "Aucun", "Categorie": "Survie", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Logique", "Nom": "Navigation", "Description": "Orientation, lecture de cartes, GPS, astrogation.", "Code": "0+L", "Restriction": "Aucun", "Categorie": "Survie", "Categorie_principale": "Compétences générales"},
      {"Attribut": "Logique", "Nom": "Nature", "Description": "Survie en milieu hostile, botanique, parazoologie.", "Code": "0+L", "Restriction": "Aucun", "Categorie": "Survie", "Categorie_principale": "Compétences générales"},

      // === COMPÉTENCES DE COMBAT ===
      // Combat rapproché
      {"Attribut": "Agilité", "Nom": "À mains nues", "Description": "Combat sans arme, arts martiaux, boxe.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Combat rapproché", "Categorie_principale": "Compétences de combat"},
      {"Attribut": "Agilité", "Nom": "Lames", "Description": "Combat avec épées, couteaux, armes tranchantes.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Combat rapproché", "Categorie_principale": "Compétences de combat"},
      {"Attribut": "Agilité", "Nom": "Armes contondantes", "Description": "Combat avec masses, bâtons, matraques.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Combat rapproché", "Categorie_principale": "Compétences de combat"},
      {"Attribut": "Agilité", "Nom": "Défense", "Description": "Parer, esquiver au corps à corps, riposter.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Combat rapproché", "Categorie_principale": "Compétences de combat"},
      {"Attribut": "Volonté", "Nom": "Combat astral", "Description": "Combattre sur le plan astral, bannir les esprits au contact.", "Code": "0+V", "Restriction": "Eveille", "Categorie": "Combat rapproché", "Categorie_principale": "Compétences de combat"},
      // Armes à distance
      {"Attribut": "Agilité", "Nom": "Armes de lancer", "Description": "Couteaux de lancer, shurikens, javelots.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Armes à distance", "Categorie_principale": "Compétences de combat"},
      {"Attribut": "Agilité", "Nom": "Archerie", "Description": "Arcs, arbalètes, armes à projectiles.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Armes à distance", "Categorie_principale": "Compétences de combat"},
      {"Attribut": "Agilité", "Nom": "Pistolets", "Description": "Armes de poing, revolvers, semi-automatiques.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Armes à distance", "Categorie_principale": "Compétences de combat"},
      {"Attribut": "Agilité", "Nom": "Pistolets-mitrailleurs", "Description": "SMG, mitraillettes compactes.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Armes à distance", "Categorie_principale": "Compétences de combat"},
      {"Attribut": "Agilité", "Nom": "Fusils", "Description": "Fusils d'assaut, snipers, carabines.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Armes à distance", "Categorie_principale": "Compétences de combat"},
      {"Attribut": "Agilité", "Nom": "Lance-grenades", "Description": "Lance-grenades, lance-roquettes légères.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Armes à distance", "Categorie_principale": "Compétences de combat"},
      {"Attribut": "Agilité", "Nom": "Armes lourdes", "Description": "Mitrailleuses, canons d'assaut, lance-missiles.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Armes à distance", "Categorie_principale": "Compétences de combat"},
      {"Attribut": "Agilité", "Nom": "Armes montées", "Description": "Armes sur véhicule, tourelles, mitrailleuses montées.", "Code": "0+A", "Restriction": "Aucun", "Categorie": "Armes à distance", "Categorie_principale": "Compétences de combat"},

      // === COMPÉTENCES TECHNIQUES ===
      // Piratage
      {"Attribut": "Logique", "Nom": "Porte dérobée", "Description": "Créer des accès cachés, contourner les protections (Backdoor).", "Code": "0+L", "Restriction": "Aucun", "Categorie": "Piratage", "Categorie_principale": "Compétences techniques"},
      {"Attribut": "Logique", "Nom": "Force brute", "Description": "Attaques par dictionnaire, exploitation de vulnérabilités.", "Code": "0+L", "Restriction": "Aucun", "Categorie": "Piratage", "Categorie_principale": "Compétences techniques"},
      {"Attribut": "Volonté", "Nom": "Cybercombat", "Description": "Combattre dans la Matrice, attaquer les programmes.", "Code": "0+V", "Restriction": "Aucun", "Categorie": "Piratage", "Categorie_principale": "Compétences techniques"},
      // Électronique
      {"Attribut": "Logique", "Nom": "Protection matricielle", "Description": "Défendre les systèmes, pare-feu, contre-mesures.", "Code": "0+L", "Restriction": "Aucun", "Categorie": "Électronique", "Categorie_principale": "Compétences techniques"},
      {"Attribut": "Logique", "Nom": "Recherche matricielle", "Description": "Trouver des informations, data mining, enquêtes numériques.", "Code": "0+L", "Restriction": "Aucun", "Categorie": "Électronique", "Categorie_principale": "Compétences techniques"},
      {"Attribut": "Logique", "Nom": "Électronique personnelle", "Description": "Réparation, modification, optimisation du matériel.", "Code": "0+L", "Restriction": "Aucun", "Categorie": "Électronique", "Categorie_principale": "Compétences techniques"},
      // Ingénierie
      {"Attribut": "Logique", "Nom": "Cybernétique", "Description": "Installation, réparation, maintenance de cyberware.", "Code": "0+L", "Restriction": "Aucun", "Categorie": "Ingénierie", "Categorie_principale": "Compétences techniques"},
      {"Attribut": "Logique", "Nom": "Drones", "Description": "Programmation, réparation, modification de drones.", "Code": "0+L", "Restriction": "Aucun", "Categorie": "Ingénierie", "Categorie_principale": "Compétences techniques"},
      {"Attribut": "Logique", "Nom": "Électronique", "Description": "Circuits, systèmes embarqués, micro-électronique.", "Code": "0+L", "Restriction": "Aucun", "Categorie": "Ingénierie", "Categorie_principale": "Compétences techniques"},
      {"Attribut": "Logique", "Nom": "Mécanique", "Description": "Réparation de moteurs, systèmes mécaniques, hydraulique.", "Code": "0+L", "Restriction": "Aucun", "Categorie": "Ingénierie", "Categorie_principale": "Compétences techniques"},
      {"Attribut": "Logique", "Nom": "Véhicules", "Description": "Réparation, modification, tuning de véhicules.", "Code": "0+L", "Restriction": "Aucun", "Categorie": "Ingénierie", "Categorie_principale": "Compétences techniques"},
      {"Attribut": "Logique", "Nom": "Guerre électronique", "Description": "Brouillage, contre-mesures électroniques, ECM.", "Code": "0+L", "Restriction": "Aucun", "Categorie": "Ingénierie", "Categorie_principale": "Compétences techniques"},
      {"Attribut": "Logique", "Nom": "Démolitions", "Description": "Pose d'explosifs, minage, désamorçage.", "Code": "0+L", "Restriction": "Aucun", "Categorie": "Ingénierie", "Categorie_principale": "Compétences techniques"},
      {"Attribut": "Logique", "Nom": "Armes télécommandées", "Description": "Contrôle à distance, systèmes de visée, tourelles.", "Code": "0+L", "Restriction": "Aucun", "Categorie": "Ingénierie", "Categorie_principale": "Compétences techniques"},

      // === COMPÉTENCES SOCIALES ===
      // Influence
      {"Attribut": "Charisme", "Nom": "Tromperie", "Description": "Mensonges, escroquerie, bluff.", "Code": "0+C", "Restriction": "Aucun", "Categorie": "Influence", "Categorie_principale": "Compétences sociales"},
      {"Attribut": "Charisme", "Nom": "Étiquette", "Description": "Savoir-vivre, protocoles, codes sociaux.", "Code": "0+C", "Restriction": "Aucun", "Categorie": "Influence", "Categorie_principale": "Compétences sociales"},
      {"Attribut": "Charisme", "Nom": "Usurpation d'identité", "Description": "Faux papiers, SIN falsifiés, couvertures.", "Code": "0+C", "Restriction": "Aucun", "Categorie": "Influence", "Categorie_principale": "Compétences sociales"},
      {"Attribut": "Charisme", "Nom": "Intimidation", "Description": "Menaces, interrogatoire, torture psychologique.", "Code": "0+C", "Restriction": "Aucun", "Categorie": "Influence", "Categorie_principale": "Compétences sociales"},
      {"Attribut": "Charisme", "Nom": "Négociation", "Description": "Marchandage, contrats, corruption.", "Code": "0+C", "Restriction": "Aucun", "Categorie": "Influence", "Categorie_principale": "Compétences sociales"},
      // Réseau
      {"Attribut": "Charisme", "Nom": "Académique", "Description": "Contacts universitaires, chercheurs, laboratoires.", "Code": "0+C", "Restriction": "Aucun", "Categorie": "Réseau", "Categorie_principale": "Compétences sociales"},
      {"Attribut": "Charisme", "Nom": "Corporation", "Description": "Contacts corporatistes, cadres, executives.", "Code": "0+C", "Restriction": "Aucun", "Categorie": "Réseau", "Categorie_principale": "Compétences sociales"},
      {"Attribut": "Charisme", "Nom": "Criminel", "Description": "Contacts dans la pègre, gangs, syndicats.", "Code": "0+C", "Restriction": "Aucun", "Categorie": "Réseau", "Categorie_principale": "Compétences sociales"},
      {"Attribut": "Charisme", "Nom": "Ingénierie", "Description": "Contacts techniques, hackers, ingénieurs.", "Code": "0+C", "Restriction": "Aucun", "Categorie": "Réseau", "Categorie_principale": "Compétences sociales"},
      {"Attribut": "Charisme", "Nom": "Gouvernement", "Description": "Contacts politiques, militaires, policiers.", "Code": "0+C", "Restriction": "Aucun", "Categorie": "Réseau", "Categorie_principale": "Compétences sociales"},
      {"Attribut": "Charisme", "Nom": "Magie", "Description": "Contacts magiques, traditions, cercles occultes.", "Code": "0+C", "Restriction": "Aucun", "Categorie": "Réseau", "Categorie_principale": "Compétences sociales"},
      {"Attribut": "Charisme", "Nom": "Matrice", "Description": "Contacts dans la Matrice, hackers, deckers.", "Code": "0+C", "Restriction": "Aucun", "Categorie": "Réseau", "Categorie_principale": "Compétences sociales"},
      {"Attribut": "Charisme", "Nom": "Médias", "Description": "Contacts journalistes, reporters, influenceurs.", "Code": "0+C", "Restriction": "Aucun", "Categorie": "Réseau", "Categorie_principale": "Compétences sociales"},
      {"Attribut": "Charisme", "Nom": "Médical", "Description": "Contacts soignants, chirurgiens, DocWagon.", "Code": "0+C", "Restriction": "Aucun", "Categorie": "Réseau", "Categorie_principale": "Compétences sociales"},
      {"Attribut": "Charisme", "Nom": "Rue", "Description": "Contacts de la rue, fixers, gangers.", "Code": "0+C", "Restriction": "Aucun", "Categorie": "Réseau", "Categorie_principale": "Compétences sociales"},

      // === COMPÉTENCES MAGIQUES ===
      // Conjuration
      {"Attribut": "Logique ou Charisme", "Nom": "Bannissement", "Description": "Renvoyer les esprits invoqués, briser les liens.", "Code": "0+L", "Restriction": "Eveille", "Categorie": "Conjuration", "Categorie_principale": "Compétences magiques"},
      {"Attribut": "Logique ou Charisme", "Nom": "Esprits de l'air", "Description": "Invoquer et commander les esprits aériens.", "Code": "0+L", "Restriction": "Eveille", "Categorie": "Conjuration", "Categorie_principale": "Compétences magiques"},
      {"Attribut": "Logique ou Charisme", "Nom": "Esprits des bêtes", "Description": "Invoquer et commander les esprits animaux.", "Code": "0+L", "Restriction": "Eveille", "Categorie": "Conjuration", "Categorie_principale": "Compétences magiques"},
      {"Attribut": "Logique ou Charisme", "Nom": "Esprits de la terre", "Description": "Invoquer et commander les esprits terrestres.", "Code": "0+L", "Restriction": "Eveille", "Categorie": "Conjuration", "Categorie_principale": "Compétences magiques"},
      {"Attribut": "Logique ou Charisme", "Nom": "Esprits du feu", "Description": "Invoquer et commander les esprits du feu.", "Code": "0+L", "Restriction": "Eveille", "Categorie": "Conjuration", "Categorie_principale": "Compétences magiques"},
      {"Attribut": "Logique ou Charisme", "Nom": "Esprits des ancêtres", "Description": "Invoquer les esprits des ancêtres, parenté spirituelle.", "Code": "0+L", "Restriction": "Eveille", "Categorie": "Conjuration", "Categorie_principale": "Compétences magiques"},
      {"Attribut": "Logique ou Charisme", "Nom": "Esprits des plantes", "Description": "Invoquer et commander les esprits végétaux.", "Code": "0+L", "Restriction": "Eveille", "Categorie": "Conjuration", "Categorie_principale": "Compétences magiques"},
      {"Attribut": "Logique ou Charisme", "Nom": "Esprits de l'eau", "Description": "Invoquer et commander les esprits aquatiques.", "Code": "0+L", "Restriction": "Eveille", "Categorie": "Conjuration", "Categorie_principale": "Compétences magiques"},
      // Sorcellerie
      {"Attribut": "Volonté", "Nom": "Contresort", "Description": "Annuler les sorts adverses, défense magique.", "Code": "0+V", "Restriction": "Eveille", "Categorie": "Sorcellerie", "Categorie_principale": "Compétences magiques"},
      {"Attribut": "Volonté", "Nom": "Sorts de combat", "Description": "Projectiles de mana, flammes, éclairs magiques.", "Code": "0+V", "Restriction": "Eveille", "Categorie": "Sorcellerie", "Categorie_principale": "Compétences magiques"},
      {"Attribut": "Volonté", "Nom": "Sorts de détection", "Description": "Détection de la magie, auras, signatures.", "Code": "0+V", "Restriction": "Eveille", "Categorie": "Sorcellerie", "Categorie_principale": "Compétences magiques"},
      {"Attribut": "Volonté", "Nom": "Sorts de santé", "Description": "Guérison, soins magiques, détection des maladies.", "Code": "0+V", "Restriction": "Eveille", "Categorie": "Sorcellerie", "Categorie_principale": "Compétences magiques"},
      {"Attribut": "Volonté", "Nom": "Sorts d'illusion", "Description": "Invisibilité, camouflage, images trompeuses.", "Code": "0+V", "Restriction": "Eveille", "Categorie": "Sorcellerie", "Categorie_principale": "Compétences magiques"},
      {"Attribut": "Volonté", "Nom": "Sorts de manipulation", "Description": "Contrôle mental, suggestion, altération de la réalité.", "Code": "0+V", "Restriction": "Eveille", "Categorie": "Sorcellerie", "Categorie_principale": "Compétences magiques"}
    ]
  },

  "11_equipement": {
    "nom": "11. EQUIPEMENT",
    "total": 81,
    "donnees": [
      {
        "Equipement": "Autocrocheteur (Serrure mécanique )",
        "Description": ""
      },
      {
        "Equipement": "Barre de thermite",
        "Description": ""
      },
      {
        "Equipement": "Bâtonnets luminescents x25",
        "Description": ""
      },
      {
        "Equipement": "Brouilleur de zone",
        "Description": ""
      },
      {
        "Equipement": "Cinquante drachmes de réactifs",
        "Description": ""
      },
      {
        "Equipement": "Combinaison NBC (4h)",
        "Description": ""
      },
      {
        "Equipement": "Combinaison protectrice",
        "Description": ""
      },
      {
        "Equipement": "Commlink (Bas de gamme)",
        "Description": "Bas de gamme : Meta Link, Renraku Aguchi, Sony Angel, Transys Arthur, Sony Emporer, Leviathan Technical LT-2100, Microtronica Azteca Raptor, Xiao Technologies XT-2G, Common Denominator Element."
      },
      {
        "Equipement": "Commlink (Haut de gamme )",
        "Description": "Haut de gamme : Tansys Avalon, Pulse Wave, Fairlight Caliban, Fuchi Cyber-X7"
      },
      {
        "Equipement": "Commlink (Moyen de gamme)",
        "Description": "Moyen de gamme : Renraku Senseï, MCT-3500, Matrix Systems Gridgopher, Erika Elite, FTL Quark, Hermès Ikon, Novatech Netninja."
      },
      {
        "Equipement": "Contrat DocWagon (contrat standard )",
        "Description": ""
      },
      {
        "Equipement": "Contrat DocWagon (contrat Or)",
        "Description": "Il comprend une réanimation gratuite par an, une réduction de 50 % sur les primes des services IHR et de 10 % sur les soins intensifs."
      },
      {
        "Equipement": "Contrat DocWagon (contrat Platine )",
        "Description": "Il intègre 4 réanimations gratuites par an et 50 % de réduction sur les soins intensifs. Il n’y a plus de prime pour les services IHR, mais les éventuelles primes de décès d’employé sont toujours dues."
      },
      {
        "Equipement": "Contrat DocWagon (contrat Super-platine))",
        "Description": "Service haut-de-gamme, il ouvre le droit à 5 réanimations par an et les primes des services IHR (primes de décès comprises) sont incluses"
      },
      {
        "Equipement": "Compteur Geiger",
        "Description": ""
      },
      {
        "Equipement": "Copieur de cartes",
        "Description": ""
      },
      {
        "Equipement": "Corde dégradable",
        "Description": ""
      },
      {
        "Equipement": "Corde myomérique (portée 30m)",
        "Description": ""
      },
      {
        "Equipement": "Créditube certifié",
        "Description": ""
      },
      {
        "Equipement": "Démarqueur",
        "Description": ""
      },
      {
        "Equipement": "Détecteur de mouvement (25m) x5",
        "Description": ""
      },
      {
        "Equipement": "Électrodes",
        "Description": ""
      },
      {
        "Equipement": "Endoscope",
        "Description": ""
      },
      {
        "Equipement": "Fausse licence",
        "Description": "(la chasse, la possession d’armes, le port d’armes, le lancement de sort, certaines augmentations, etc.)"
      },
      {
        "Equipement": "Faux SIN",
        "Description": ""
      },
      {
        "Equipement": "Gadget à la mode du moment",
        "Description": ""
      },
      {
        "Equipement": "Gants adhésifs",
        "Description": ""
      },
      {
        "Equipement": "Gants de rappel",
        "Description": ""
      },
      {
        "Equipement": "Gants RA",
        "Description": ""
      },
      {
        "Equipement": "Générateur de bruit blanc",
        "Description": ""
      },
      {
        "Equipement": "Grenades fumigènes",
        "Description": ""
      },
      {
        "Equipement": "Holo-projecteur",
        "Description": ""
      },
      {
        "Equipement": "Imprimante",
        "Description": ""
      },
      {
        "Equipement": "Jumelles avec accroissement de vision",
        "Description": ""
      },
      {
        "Equipement": "Kit d’outillage (préciser pour quels travaux)",
        "Description": ""
      },
      {
        "Equipement": "Kit de survie",
        "Description": ""
      },
      {
        "Equipement": "Lecteur biométrique",
        "Description": ""
      },
      {
        "Equipement": "Liaison satellite (rare)",
        "Description": ""
      },
      {
        "Equipement": "Lunettes / lentilles (avec lien visuel, vision thermographique, zoom)",
        "Description": ""
      },
      {
        "Equipement": "Maglock",
        "Description": ""
      },
      {
        "Equipement": "Mallette blindée",
        "Description": ""
      },
      {
        "Equipement": "Marqueurs de sécurité",
        "Description": ""
      },
      {
        "Equipement": "Marqueurs furtifs",
        "Description": ""
      },
      {
        "Equipement": "Marqueurs RFID",
        "Description": ""
      },
      {
        "Equipement": "Marqueurs senseurs",
        "Description": ""
      },
      {
        "Equipement": "Masque à gaz",
        "Description": ""
      },
      {
        "Equipement": "Matériel d’escalade",
        "Description": ""
      },
      {
        "Equipement": "Matériel de plongée",
        "Description": ""
      },
      {
        "Equipement": "Matériel pour loge magique",
        "Description": ""
      },
      {
        "Equipement": "Médikit",
        "Description": ""
      },
      {
        "Equipement": "Menottes en plastique",
        "Description": ""
      },
      {
        "Equipement": "Menottes métalliques",
        "Description": ""
      },
      {
        "Equipement": "Micro-câble",
        "Description": ""
      },
      {
        "Equipement": "Micro-pistolet de détresse x25",
        "Description": ""
      },
      {
        "Equipement": "Micro-transmetteur",
        "Description": ""
      },
      {
        "Equipement": "Microphone directionnel",
        "Description": ""
      },
      {
        "Equipement": "Microphone laser",
        "Description": ""
      },
      {
        "Equipement": "Mini-poste à soudure",
        "Description": ""
      },
      {
        "Equipement": "Mouleur d’empreintes",
        "Description": ""
      },
      {
        "Equipement": "Papier électronique",
        "Description": ""
      },
      {
        "Equipement": "Passe maglock",
        "Description": ""
      },
      {
        "Equipement": "Pied de biche",
        "Description": ""
      },
      {
        "Equipement": "Respirateur",
        "Description": ""
      },
      {
        "Equipement": "Sac de cailloux lisses",
        "Description": ""
      },
      {
        "Equipement": "Sac de coursier",
        "Description": ""
      },
      {
        "Equipement": "Scanner de cyberware 15m",
        "Description": ""
      },
      {
        "Equipement": "Scanner magnétique 5m",
        "Description": ""
      },
      {
        "Equipement": "Scanner olfactif",
        "Description": ""
      },
      {
        "Equipement": "Senseur à ultrasons",
        "Description": ""
      },
      {
        "Equipement": "Séquenceur",
        "Description": ""
      },
      {
        "Equipement": "Serrure mécanique",
        "Description": ""
      },
      {
        "Equipement": "Simrig",
        "Description": ""
      },
      {
        "Equipement": "Solvant pour colle",
        "Description": ""
      },
      {
        "Equipement": "Souvenir, objet antique",
        "Description": ""
      },
      {
        "Equipement": "Spray à colle",
        "Description": ""
      },
      {
        "Equipement": "Stim patch x5",
        "Description": "(éveiller  24 heures, ignorer un malus de blessures pour une scène en dépensant 1 point d’Anarchy)"
      },
      {
        "Equipement": "Télémètre laser",
        "Description": ""
      },
      {
        "Equipement": "Torche au magnésium",
        "Description": ""
      },
      {
        "Equipement": "Tranq patch x5",
        "Description": "( sédatif 8E Défense : Force + Volonté)"
      },
      {
        "Equipement": "Trauma patch",
        "Description": "(points d’Anarchy pour être automatique ment et immédiatement stabilisé )"
      },
      {
        "Equipement": "Tronçonneuse monofilament",
        "Description": ""
      }
    ]
  }
}

// ============================================
// HELPERS D'ACCÈS AUX DONNÉES
// ============================================

function getSection(key) {
    return SHADOWRUN_DATA[key]?.donnees || [];
}

function getNiveauxJeu() { return getSection('1_niveau_de_jeu'); }
function getConcepts() { return getSection('2_concept_du_personnage'); }
function getTraditions() { return getSection('21_traditions_magiques'); }
function getMetatypes() { return getSection('3_metatype'); }
function getBonusMetatype() { return getSection('4_bonus_attributs_par_metatype'); }
function getCompetences() { return getSection('5_competences'); }
function getAtouts() { return getSection('6_atouts'); }
function getTraits() { return getSection('7_traits'); }
function getArmures() { return getSection('9_armure'); }
function getArmes() { return getSection('10_armes'); }
function getEquipement() { return getSection('11_equipement'); }

// Recherche par nom
function findByName(sectionKey, name) {
    const section = getSection(sectionKey);
    return section.find(item => {
        const nom = item.Nom || item.nom || item.Métatype || item.Metatype || item.Armure || item.Arme || item.Equipement || '';
        return nom === name;
    });
}

// Recherche textuelle
function searchInSection(sectionKey, term) {
    const section = getSection(sectionKey);
    const lowerTerm = term.toLowerCase();
    return section.filter(item => {
        return Object.values(item).some(val => 
            val && val.toString().toLowerCase().includes(lowerTerm)
        );
    });
}

// Filtrer les atouts
function getAtoutsParCategorie(categorie) {
    return getAtouts().filter(a => (a.Catégorie || a.Categorie) === categorie);
}

function getAtoutsParPrerequis(prerequis) {
    if (!prerequis) return getAtouts().filter(a => !(a['Pré-requis'] || a['Pre-requis']));
    return getAtouts().filter(a => {
        const pre = a['Pré-requis'] || a['Pre-requis'] || '';
        return pre.includes(prerequis);
    });
}

function getCategoriesAtouts() {
    const cats = new Set();
    getAtouts().forEach(a => cats.add(a.Catégorie || a.Categorie));
    return Array.from(cats).filter(Boolean);
}

// Filtrer les traits
function getTraitsParType(type) {
    return getTraits().filter(t => t.Type === type);
}

function getTypesTraits() {
    const types = new Set();
    getTraits().forEach(t => types.add(t.Type));
    return Array.from(types).filter(Boolean);
}

// Filtrer les armes
function getArmesParType(type) {
    return getArmes().filter(a => a.Type === type);
}

function getTypesArmes() {
    const types = new Set();
    getArmes().forEach(a => types.add(a.Type));
    return Array.from(types).filter(Boolean);
}

// ============================================
// ADAPTATEUR CSV (compatibilité avec l'ancien code)
// ============================================

const CSV_DATA = new Proxy({}, {
    get: function(target, prop) {
        const mapping = {
            "1. NIVEAU DE JEU": "1_niveau_de_jeu",
            "2. CONCEPT DU PERSONNAGE": "2_concept_du_personnage",
            "2.1. TRADITIONS MAGIQUES": "21_traditions_magiques",
            "3. METATYPE": "3_metatype",
            "4. BONUS ATTRIBUTS PAR METATYPE": "4_bonus_attributs_par_metatype",
            "5. COMPETENCES": "5_competences",
            "6. ATOUTS": "6_atouts",
            "7. TRAITS": "7_traits",
            "9. ARMURE": "9_armure",
            "10. ARMES": "10_armes",
            "11. EQUIPEMENT": "11_equipement"
        };

        const jsonKey = mapping[prop];
        if (!jsonKey || !SHADOWRUN_DATA[jsonKey]) {
            console.warn("Données non trouvées pour:", prop);
            return "";
        }

        // Convertir JSON en CSV-like pour compatibilité
        const section = SHADOWRUN_DATA[jsonKey];
        const donnees = section.donnees;
        if (!donnees || donnees.length === 0) return "";

        const headers = Object.keys(donnees[0]);
        let csv = headers.join(';') + '\n';
        donnees.forEach(row => {
            const values = headers.map(h => {
                const val = row[h] || '';
                return val.toString().replace(/\n/g, ' ').replace(/\r/g, '');
            });
            csv += values.join(';') + '\n';
        });

        return csv;
    }
});
