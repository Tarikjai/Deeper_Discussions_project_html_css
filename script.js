const rdvAmoureux  = [
    "Quelle est ta destination de rêve pour des vacances et pourquoi ?",
    "Quel est le meilleur livre que tu aies jamais lu ?",
    "Si tu pouvais dîner avec n'importe quelle personne, vivante ou décédée, qui choisirais-tu ?",
    "Quelle est ta passion secrète ou ton hobby préféré ?",
    "Quel est le film qui t'a le plus marqué et pourquoi ?",
    "Si tu pouvais apprendre une nouvelle compétence instantanément, laquelle choisirais-tu ?",
    "Quelle est ta plus belle mémoire d'enfance ?",
    "Quel est le plat que tu pourrais manger tous les jours sans te lasser ?",
    "Si tu pouvais vivre dans n'importe quelle époque, laquelle choisirais-tu et pourquoi ?",
    "Quel est le meilleur conseil que tu aies jamais reçu ?"
  ]

const rdvPro = [
  "Quels sont vos objectifs à court et long terme pour ce projet ?",
  "Comment mesurez-vous le succès dans ce rôle/projet ?",
  "Quelle est la structure de l'équipe et comment se déroule la collaboration entre les départements ?",
  "Quels sont les principaux défis auxquels vous faites face actuellement ?",
  "Quelle est la culture de votre entreprise en termes de flexibilité et d'innovation ?",
  "Comment se déroulent les prises de décision au sein de votre organisation ?",
  "Quels outils ou technologies utilisez-vous pour gérer vos projets ?",
  "Comment abordez-vous la formation et le développement des compétences des employés ?",
  "Quelles sont les opportunités de croissance ou d'avancement dans ce poste ?",
  "Comment gérez-vous les feedbacks et les performances dans votre équipe ?"
];
  


  const selection = document.getElementById('selection')
  const question = document.getElementById('question')


  selection.addEventListener("change", function() {
      
    const randomAmoureux = rdvAmoureux[Math.floor(Math.random() * rdvAmoureux.length)];

    const randomPro = rdvPro[Math.floor(Math.random() * rdvPro.length)];

    const selectedValue =  selection.value ;
    if (selectedValue ===  'amoureux') {
      question.innerText = randomAmoureux;
    } else if  (selectedValue ===  'professionel') {
      question.innerText = randomPro
    }
      
    
  });

