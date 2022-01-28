var floue=false;

function swap(){ //A refaire avec des style.blur();
    if (floue){
        floue = false;
        document.getElementById("hide").innerHTML="<input type='button' value='Flouter le bestiaire' onclick='swap(),test()'>";
    } else {
        floue =true;
        document.getElementById("hide").innerHTML="<input type='button' value='Flouter le bestiaire' onclick='swap(),test()' style='background-color : #18b009'>";
    }
}
function cleanAll(){
    for(var i=1;i<6;i++){ //q1
            document.getElementById("date"+i).style.backgroundColor="white";
            document.getElementById("accueil-comment").style.color="black";
            document.getElementById("note1").style.backgroundColor="white";
            document.getElementById("q5").style.color="black";
            document.getElementById("num").style.backgroundColor="white";
    }
}
function check(){
    var doCheck=document.getElementById("dontCheck").checked;
    var num=document.getElementById("num").value;
    var clean=true;
    if(!doCheck){
        for(var i=1;i<6;i++){ //q1
            if(document.getElementById("date"+i).value==""){
                document.getElementById("date"+i).style.backgroundColor="red";
                clean=false;
            } else {
                document.getElementById("date"+i).style.backgroundColor="white";
            }
        }
        if(document.getElementById("accueil-comment").value==""){ //q2
            document.getElementById("accueil-comment").value="Rien a dire ?";
            document.getElementById("accueil-comment").style.color="red";
            clean=false;
        } else {
            document.getElementById("accueil-comment").style.color="black";
        }
        if(document.getElementById("note1").value<1||document.getElementById("note1").value>10 ||document.getElementById("note1").value=="none"){ //q3
            document.getElementById("note1").style.backgroundColor="red";
            clean=false;
        } else {
            document.getElementById("note1").style.backgroundColor="white";
        }
        if(document.getElementById("quizz").checked==false){ //q5
            document.getElementById("q5").style.color="red";
            clean=false;
        } else {
            document.getElementById("q5").style.color="black";
        }
        if(isNaN(num) || num<100000000 || num>1000000000){
            document.getElementById("num").style.backgroundColor="red";
            clean=false;
        } else {
            document.getElementById("num").style.backgroundColor="white";
        }
    }
    if(!clean){alert("Il y a une ou plusieurs erreurs dans le formulaire")}
}
function story(a){
    var mes = "";
    switch (a){ //Mettre les bonnes images et en rajouter pour l'illustration
        case 0:
            mes = "<div class='text-Story'>";
            mes+= "<h2 class='Story-title-1'>JAMES NIAKATE (MERLIN)</h2>";
            mes+= "<img src='../images/story/Merlin.jpg' alt='Error Merlin.jpg' class='img-Story-1' />"; // img id="img-Merlin-1" /"
            mes+="<span class='alinea'>Ce<span> sont le Docteur James Niakat&eacute; et son &eacute;quipe de Johannesburg qui, en premier, ont mis au point les nanomachines m&eacute;dicales, aussi nomm&eacute;es nanoM. Par un proc&eacute;d&eacute; simple de destruction et de remplacement des organes et des tissus infect&eacute;s, les nanoM avaient pour but de remplacer les th&eacute;rapies et les op&eacute;rations tr&egrave;s lourdes que devaient subir les patients. Inject&eacute;es en quantit&eacute; consid&eacute;rable dans le corps, elles devaient agir de mani&egrave;re automatis&eacute;e pour ex&eacute;cuter une tâche bien pr&eacute;cise sur un type de cancer donn&eacute;, et s’autod&eacute;truire doucement dans les organes digestifs pour &ecirc;tre expuls&eacute;es par la suite";
            mes+= "<br/><br/><span class='alinea'>On<span> raconte que, suite &agrave; une « erreur » de programmation, le Docteur James Niakat&eacute; a chang&eacute; l’objectif des nanoM. Plutôt que de simplement soigner les tissus et les organes d&eacute;tect&eacute;s comme atteints d’une forme de cancer, les nanoM allaient simplement &eacute;liminer, remplacer ou modifier tout ce qu’elles jugeraient dangereux, nocif pour le corps, et avec succ&egrave;s. C’est ainsi que cette « petite erreur » a modifi&eacute; la face de toute la m&eacute;decine.";
            mes+="<br/><br/><span class='alinea'>En<span> somme, en lieu et place des centres de soin, en remplacement des m&eacute;dicaments, les nanoM pouvaient gu&eacute;rir une personne de tout, en tr&egrave;s peu de temps.";
            mes+="<br/><br/><span class='alinea'>Maladies<span>, blessures, fractures, empoisonnement... C’est seulement quelques semaines apr&egrave;s cette fantastique d&eacute;couverte que l’&eacute;quipe de Niakat&eacute; s’est rendu compte, toujours par hasard selon les dires, que les nanoM soignaient aussi la vieillesse des cellules. Pouvant modifier &agrave; peu pr&egrave;s n’importe quoi au niveau mol&eacute;culaire, elles r&eacute;ussissaient &agrave; rajeunir les cellules d’un &ecirc;tre pour le maintenir &agrave; l’âge où elles avaient &eacute;t&eacute; inject&eacute;es. Pour r&eacute;sumer, une injection de nanoM signifiait l’arr&ecirc;t du vieillissement. On aurait pu l&eacute;gitimement imaginer que cette nouvelle technologie offrirait son lot d’erreurs, d’effets secondaires et de cobayes morts en phase de test. Il n’en a rien &eacute;t&eacute;. Tout se passait sans encombre, la science avançait implacablement, sans aucune erreur visible.";
            mes+="<br/><br/><span class='alinea'>C’&eacute;tait<span> un pas de g&eacute;ant pour la science, pour la m&eacute;decine, pour l’Humanit&eacute; en fait. Et James Niakat&eacute; a tent&eacute; de tout saccager.";
            mes+="<br/><br/><span class='alinea'>Contre<span> l’avis de ses pairs, Niakat&eacute; a d&eacute;cid&eacute; de garder sa d&eacute;couverte secr&egrave;te. Selon ses propres affirmations, il la trouvait trop dangereuse, beaucoup trop impr&eacute;visible pour l’avenir de l’Humanit&eacute;. En tant que chef du projet nanoM, il a d&eacute;truit par incin&eacute;ration les cobayes animaux utilis&eacute;s pour les tests et a crypt&eacute; ses donn&eacute;es pour que personne d’autre ne puisse jamais reproduire la technologie nanoM.";
            mes+="<br/><br/><span class='alinea'>C’&eacute;tait<span> sans compter sur un de ses coll&egrave;gues moins scrupuleux, le professeur Bryan Montgomery qui, lors de cette tentative de destruction, a tout r&eacute;v&eacute;l&eacute; &agrave; un ami travaillant &agrave; l’ambassade des &eacute;tats-Unis de Johannesburg, Ethan Henry, aujourd’hui devenu un immortel c&eacute;l&egrave;bre.";
            mes+="<br/><br/><span class='alinea'>Beaucoup<span> pensent que c’est cet acte qui a amen&eacute; l’Anath&egrave;me sur le monde.";
            mes+= "</div>";
            break;
        case 1: 
            mes = "<div class='text-Story'>";
            mes+= "<h2 class='Story-title-1'>EUROCORP</h2>";
            //img a changer
            mes+= "<img src='../images/story/Eurocorps.jpg' alt='Error Eurocorps.jpg' width='300' class='img-Story-1'/>";
            mes+= "<span class='alinea'>Si</alinea> joint une image de Ismaël Jh&eacute;lam, fondateur de Eurocorp<br/><br/><span class='alinea'>C’est</span> en 2019 que les choses ont commenc&eacute;, bien avant que les immortels n’existent et que l’Anath&egrave;me ne provoque la fin du monde connu. Cette ann&eacute;e-l&agrave;, pour la premi&egrave;re fois et au grand &eacute;tonnement des acteurs internationaux, les &eacute;tats europ&eacute;ens, suite &agrave; un enchaînement de trait&eacute;s, ont d&eacute;cid&eacute; de se lier durablement et de former une force arm&eacute;e glo-bale destin&eacute;e &agrave; remplacer les arm&eacute;es nationales. Eurocorps, une force interarm&eacute;es europ&eacute;enne cr&eacute;&eacute;e en 1992, est ainsi devenue  une  v&eacute;ritable  arm&eacute;e  europ&eacute;enne  le  1er  octobre  2019  et  d&eacute;pendait  d&eacute;sormais  uniquement  de  l’Union europ&eacute;enne.  Les  arm&eacute;es  nationales  ont  progressivement int&eacute;gr&eacute; Eurocorps pour disparaître seulement cinq ann&eacute;es plus  tard.  Cette  arm&eacute;e  supranationale,  quant  &agrave;  elle,  est pass&eacute;e de 60 000 &agrave; 600 000 hommes durant ce court inter-valle en recrutant activement au sein des lyc&eacute;es europ&eacute;ens, suivant de cette façon le mod&egrave;le am&eacute;ricain.";
            mes+= "<br/><br/><span class='alinea'>Avec</span>  cette  nouvelle  Eurocorps,  le  monde  entrait  dans une forme de mondialisation qui allait faire des adminis-trations, des entreprises et des arm&eacute;es de v&eacute;ritables enti-t&eacute;s aux nationalit&eacute;s multiples, englobant un grand nombre d’&eacute;tats. Jusque-l&agrave;, la mondialisation &eacute;tait rapide, mais pas aussi franche et affirm&eacute;e.";
            mes+= "<br/><br/><span class='alinea'>Avec</span> Eurocorps, l’Europe disposait d’une figure de proue, un  embl&egrave;me  s&eacute;curisant  et  annonçant  aux  autres  conti-nents  :  «  Regardez,  nous  aussi  nous  disposons  d’une  force  de  frappe  avec  laquelle  il  faut  compter  ! » Et c’est ce que l’Europe a d&eacute;montr&eacute;. En 2025, Eurocorps a lanc&eacute; des offen-sives  en  Afrique  subsaharienne,  offensives  destin&eacute;es  &agrave; lib&eacute;rer plusieurs  pays du joug de dictateurs pour instau-rer une d&eacute;mocratie et un « gentil » patronat europ&eacute;en. La m&ecirc;me  ann&eacute;e,  sept  pays  ont  rejoint  l’Union  europ&eacute;enne et, de fait, Eurocorps. On comptait parmi eux la Norv&egrave;ge, l’Islande ou encore la Turquie.";
            mes+= "<br/><br/><span class='alinea'>Apr&egrave;s</span>  deux  ans  de  conflits  larv&eacute;s  et  violents  dans plusieurs  pays  d’Afrique,  la  situation  &eacute;tait  critique  pour Eurocorps.  En  2027,  dix  pays  d’Afrique  australe,  sous l’impulsion  du  Botswana  et  de  l’Afrique  du  Sud,  se  sont ralli&eacute;s sous un m&ecirc;me drapeau, celui de la « NAU », la Nation Africaine Unie. Le pr&eacute;sident Edwar Damb&eacute;, soutenu par la Chine et par les gouvernements int&eacute;gr&eacute;s &agrave; la NAU, a &eacute;t&eacute; &eacute;lu &agrave; la majorit&eacute; des voix pour six ans, sans aucun remous poli-tique.  Coop&eacute;rant  militairement  et  &eacute;conomiquement,  ces dix pays ont form&eacute; une opposition forte, pour ne pas dire in&eacute;branlable,  &agrave;  l’invasion  de  l’Afrique  subsaharienne  par les forces d’Eurocorps. Moins d’un an apr&egrave;s sa cr&eacute;ation, la NAU est devenue un acteur international majeur. Victime de l’action europ&eacute;enne, elle a us&eacute; d’une politique m&eacute;diatique ac&eacute;r&eacute;e  et  implacable  contre  la  pr&eacute;sence  d’Eurocorps  en Afrique et a attir&eacute; par l&agrave; m&ecirc;me l’attention de pays tels que les &eacute;tats-Unis, la Russie ou encore l’Inde qui ont s&eacute;v&egrave;rement condamn&eacute; l’action europ&eacute;enne qu’ils avaient pourtant l&eacute;gi-tim&eacute;e quelques ann&eacute;es auparavant. De son côt&eacute;, la Chine a envoy&eacute; des agents, des ing&eacute;nieurs, des &eacute;conomistes, des chercheurs et de l’armement &agrave; la NAU en gage de son sou-tien et de son respect. Compl&egrave;tement d&eacute;pass&eacute; et d&eacute;bout&eacute;, Eurocorps a d&eacute;sert&eacute; fin 2028 pour ne plus jamais poser le pied en Afrique.";
            mes+= "</div>";
            break;
        case 2: 
            mes = "<div class='text-Story'>";
            mes+= "<h2 class='Story-title-1'>NAU</h2>";
            mes+= "<img src='../images/story/NAU.jpg' alt='Error NAU.jpg' width='230'class='img-Story-1'/>";
            mes+="<span class='alinea'>Tr&egrave;s</span>  rapidement, trop sûrement, une autre dizaine de pays venus d’Afrique centrale et d’Afrique de l’Est est venue gros-sir les rangs de la NAU. Tous frontaliers, ces pays jouissaient d’une harmonie globale et partageaient leurs ressources dans une volont&eacute; d’ind&eacute;pendance &eacute;clatante et enflamm&eacute;e face aux nations ext&eacute;rieures &agrave; la NAU. Ainsi, l’Afrique du Sud et le Botswana faisaient profiter de leur &eacute;conomie aux pays plus au nord pendant que ces derniers offraient des ressources mini&egrave;res cons&eacute;quentes et une main d’œuvre peu on&eacute;reuse aux pays du Sud. Bien qu’il y ait eu quelques d&eacute;bordements envers les repr&eacute;sentants de certains pays d’Europe pr&eacute;sents en Afrique subsaharienne, les choses se sont plutôt bien pass&eacute;es. La NAU s’est m&ecirc;me dot&eacute;e de sa propre force de d&eacute;fense et d’une &eacute;conomie stable &agrave; peine deux ans apr&egrave;s sa cr&eacute;ation.";
            mes+= "<br/><br/><span class='alinea'>Bien</span> qu’in-t&eacute;gr&eacute;s &agrave; la NAU qui &eacute;tait finalement un regroupement &eacute;cono-mique, militaire et politique, les pays restaient souverains... en surface seulement, car le gouvernement Damb&eacute; avait en fait tendance &agrave; prendre les d&eacute;cisions pour les autres. Mais ce qui a le plus surpris la communaut&eacute; internationale a sans doute &eacute;t&eacute; la troublante capacit&eacute; que la NAU avait d’innover sur les terrains techniques comme scientifiques, notamment au niveau de la bioing&eacute;nierie et de la nanoing&eacute;nierie. C’est en effet dans des laboratoires de la NAU &agrave; Johannesburg que les premi&egrave;res nanomachines destin&eacute;es &agrave; soigner l’&ecirc;tre humain du cancer ont &eacute;t&eacute; invent&eacute;es.</div>";
            
            mes+= "<div class='text-Story-2'>";
            mes+= "<h2 class='Story-title-2'>LE MONNA-MOLELO</h2>";
            mes+= "<img src='../images/story/Mela.jpg' alt='Error Mela.jpg' class='img-Story-2'/>";
            mes+= "<span class='alinea'>Depuis</span> la guerre contre Eurocorps, la NAU avait tiss&eacute; en son sein un r&eacute;seau de protection occulte, une police secr&egrave;te tr&egrave;s &eacute;tendue, nomm&eacute;e Monna-Molelo, les « Hommes de Feu   » dans la langue traditionnelle du Botswana. Organis&eacute; en &eacute;quipes de s&eacute;curit&eacute; verrouillant chaque ville et chaque village, &eacute;quip&eacute; d’une technologie de pointe « offerte » par la Chine, le Monna-Molelo s’av&eacute;rait extr&ecirc;mement efficace, en particulier lorsqu’il s’agissait de pr&eacute;venir des actes d’espion-nage, de c&oelig;rcition ou encore de sabotage de la part des pays ext&eacute;rieurs &agrave; la NAU.";
            mes+= "<br/><br/><span class='alinea'>Cette</span> police secr&egrave;te avait depuis longtemps compris les intentions des forces am&eacute;ricaines ainsi que leurs m&eacute;thodes de fonctionnement. Lorsque le commando est arriv&eacute; avec les forces de l’ONU, tous les hommes qui le composaient &eacute;taient, sans le savoir, d&eacute;j&agrave; morts. Une fois pr&eacute;venu, le pr&eacute;-sident Edwar Damb&eacute; a simplement ordonn&eacute; de les &eacute;liminer et de renvoyer leurs corps aux &eacute;tats-Unis. Ce que les agents du Monna-Molelo ont fait dans la journ&eacute;e et avec toute la discr&eacute;tion possible.";
            mes+= "<br/><br/><span class='alinea'>Voyant</span> leurs hommes disparus sur le terrain, les puissants cheveux blancs ont essay&eacute; de mettre l’ensemble de la com-munaut&eacute; internationale de leur côt&eacute;. Ils ont accus&eacute; la NAU d’avoir fait disparaître des agents de l’ONU, ont produit des clich&eacute;s d’usines de bombes, ont cr&eacute;&eacute; de faux t&eacute;moignages d’habitants de la NAU critiquant le r&eacute;gime Damb&eacute; et ont presque r&eacute;ussi &agrave; convaincre le monde. Presque.";
            mes+= "</div>";
            break;
        case 3: 
            mes = "<div class='text-Story'>";
            mes+= "<h2 class='Story-title-1'>LE KNIGHT</h2>";
            mes+= "<img src='../images/story/Knight.jpg' alt='Error Knight.jpg' width='300'  class='img-Story-1'/>"; 
            mes+= "<span class='alinea'>James</span> Niakat&eacute; a toujours &eacute;t&eacute; un pr&eacute;curseur. D&eacute;couvreur de l’immortalit&eacute; croyant avoir d&eacute;truit sa d&eacute;couverte, il est aussi le façonneur du combat moderne et des armes qui servent l’Hu-manit&eacute; dans sa lutte contre les t&eacute;n&egrave;bres. Si le Nodachi utilisait des exosquelettes, des drones avanc&eacute;s ou encore des drogues de combat, rien ne laissait pr&eacute;sager la naissance des m&eacute;ta-armures et, par extension, celle du Knight.";
            mes+= "<br/><br/><span class='alinea'>Le</span> dernier rempart de l’Humanit&eacute; a &eacute;t&eacute; cr&eacute;&eacute; par James Niakat&eacute;, un homme pr&ecirc;t &agrave; tout pour lutter contre l’Anath&egrave;me, m&ecirc;me &agrave; s’en servir. On raconte qu’il a trouv&eacute;, suite &agrave; des visions surnaturelles, une nouvelle &eacute;nergie capable d’alimenter &agrave; peu pr&egrave;s n’importe quel objet en occupant un espace tr&egrave;s r&eacute;duit : l’&eacute;nergie alpha, tir&eacute;e elle-m&ecirc;me de l’&eacute;l&eacute;ment alpha, un mine-rai m&eacute;tallique qui ne peut &ecirc;tre trouv&eacute; que dans les t&eacute;n&egrave;bres. C’est grâce &agrave; cet &eacute;l&eacute;ment et &agrave; cette &eacute;nergie que la premi&egrave;re m&eacute;ta-armure a &eacute;t&eacute; cr&eacute;&eacute;e.";
            mes+= "<br/><br/><span class='alinea'>En</span> 2036, Niakat&eacute; a d&eacute;voil&eacute; au grand jour, face &agrave; une assem-bl&eacute;e d’immortels r&eacute;unie &agrave; l’arche de Londres pour l’occasion, la premi&egrave;re m&eacute;ta-armure, le mod&egrave;le unique « Excalibur », por-t&eacute;e par un v&eacute;t&eacute;ran d’Eurocorps, le c&eacute;l&egrave;bre capitaine Raphaël MacTavish. Selon les dires du professeur Niakat&eacute;, « cette armure de combat d’une nouvelle g&eacute;n&eacute;ration devait assurer l’avenir de l’Humanit&eacute; ». Les immortels, circonspects, n’ont pas soutenu le projet et Niakat&eacute;, comme le capitaine, ont dû faire leurs preuves. La façon dont l’efficacit&eacute; de la m&eacute;ta-armure a &eacute;t&eacute; d&eacute;montr&eacute;e est aujourd’hui une l&eacute;gende au sein du Knight.";
            mes+= "<br/><br/><span class='alinea'>Apr&egrave;s</span> sa victoire &agrave; Dublin, le capitaine a &eacute;t&eacute; port&eacute; en h&eacute;ros par la population locale et bientôt, tous les m&eacute;dias des immortels ont diffus&eacute; ses exploits, son image et, surtout, l’efficacit&eacute; de la m&eacute;ta-armure, la nouvelle arme de l’Humanit&eacute; dans sa guerre contre l’Anath&egrave;me, l’Horreur. On a alors appel&eacute; le capitaine MacTavish « Arthur », d’abord par analogie avec l’acte cheva-leresque d’un guerrier en armure apportant la lumi&egrave;re dans les t&eacute;n&egrave;bres, puis par respect. Les immortels, sans exception, ont d&eacute;cid&eacute; de subventionner les recherches de Niakat&eacute; sur le d&eacute;veloppement de ces armures capables de vaincre les t&eacute;n&egrave;bres. James Niakat&eacute;, qui avait permis &agrave; Arthur de porter Excalibur, a naturellement &eacute;t&eacute; nomm&eacute; « Merlin ».";
            mes+= "<br/><br/><span class='alinea'>Le</span> projet « Knight » s’est enclench&eacute; sous la responsabilit&eacute; des immortels, notamment Ismaël Jh&eacute;lam, et tr&egrave;s tôt, le pro-jet s’est mu&eacute; en une v&eacute;ritable organisation. Arthur, symbole d’une Humanit&eacute; relev&eacute;e et combattante, en a pris la direction militaire et Merlin la direction scientifique. La Byrd Corporation d’Ismaël Jh&eacute;lam leur a fourni des armes dernier cri, Hemera, dirig&eacute;e par Ethan Henry, a offert les modifications g&eacute;n&eacute;tiques, pour que les personnes engag&eacute;es dans le projet aient un meilleur contrôle des m&eacute;ta-armures, et les arches ont fourni des candidats au Knight.";
            mes+= "<br/><br/><span class='alinea'>L’ensemble</span> s’est install&eacute; &agrave; Londres, au cœur de l’arche, et un bâtiment, le palais de Westminster, abandonn&eacute; par le Parlement en d&eacute;clin, a ensuite &eacute;t&eacute; offert au Knight. On l’a nomm&eacute; Camelot et, grâce aux nanoconstructs, le lieu est devenu une vraie forteresse, symbole de la future puissance de l’organisation. Tr&egrave;s vite, des milliers de candidats ont afflu&eacute;, mais tr&egrave;s peu ont pass&eacute; la premi&egrave;re phase de tests qui consis-tait simplement &agrave; faire bouger le bras d’une m&eacute;ta-armure une fois &agrave; l’int&eacute;rieur. Le mod&egrave;le Excalibur est donc rest&eacute; le seul actif durant quelques semaines, Arthur assurant le reflux de 11 taches de t&eacute;n&egrave;bres &agrave; lui seul. Par ailleurs, pour une raison inconnue, aucun autre mod&egrave;le Excalibur n’a &eacute;t&eacute; d&eacute;velopp&eacute;, Arthur conservant ce privil&egrave;ge pour lui seul.";
            break;
        case 4: 
            mes = "<div class='text-Story'>";
            mes+= "<h2 class='Story-title-1'>LE DRAGON ASIATIQUE</h2>";
            mes+= "<img src='../images/story/Dragon.jpg' alt='Error Dragon.jpg' width='600'class='img-Story-1'/>";
            mes+= "<span class='alinea'>Fin</span> 2029, suivant l’exemple de la NAU dont les &eacute;tats membres, tr&egrave;s solidaires entre eux, avaient montr&eacute; qu’ils pouvaient d&eacute;fier tout l’Occident, les pays d’Asie, sous l’impulsion de la Chine, ont d&eacute;cid&eacute; de former une coalition qui est rapidement devenue une organisation supranationale g&eacute;rant, notam-ment, les affaires d’ordres commercial et militaire. Parmi les membres de la coalition, on comptait la Chine, la Cor&eacute;e du Sud, qui, abandonn&eacute;e par les &eacute;tats-Unis, esp&eacute;rait retrouver une certaine force, le Laos, le Vietnam, la Thaïlande, le Cambodge, le Japon et m&ecirc;me l’Inde. G&eacute;n&eacute;reuse en surface, la Chine a m&ecirc;me permis &agrave; ses pays alli&eacute;s de b&eacute;n&eacute;ficier de plusieurs de ses nombreuses comp&eacute;tences, en mati&egrave;re de sciences, d’ing&eacute;nierie ou encore d’industrie. En retour, la Chine deman-dait seulement la pr&eacute;sidence de cette union. Appât&eacute;s par tant de cadeaux, les pays membres ont accept&eacute; le march&eacute;. Seul le Japon a refus&eacute; et d&eacute;cid&eacute; de se s&eacute;parer des autres pays.";
            mes+= "<br/><br/><span class='alinea'>La</span> Chine n’a &eacute;mis aucune protestation. Sous sa pr&eacute;sidence et suite au trait&eacute; de Beijing de juillet 2029, la coalition a pris le nom d’« Union de la grande Asie » et a &eacute;t&eacute; nomm&eacute;e plus famili&egrave;rement et par tout le monde le « Dragon Asiatique ». L’id&eacute;e ayant &eacute;merg&eacute; suite &agrave; la cr&eacute;ation de la NAU, le Dragon Asiatique en a tr&egrave;s simplement copi&eacute; toute l’organisation et tout le syst&egrave;me. Des diplomates et des administrateurs de la NAU ont m&ecirc;me &eacute;t&eacute; envoy&eacute;s en Chine et en Inde pour expliquer la mani&egrave;re dont la NAU fonctionnait. Les &eacute;tats sont rest&eacute;s en surface maîtres sur leurs territoires et les d&eacute;cisions devaient en apparence &ecirc;tre prises par une assembl&eacute;e. Tout fonctionnait bien. Rien ni personne n’a emp&ecirc;ch&eacute; la Chine et son gouver-nement, pr&eacute;sid&eacute; par Chen Hoang, de prendre le contrôle du Dragon Asiatique et de mettre &agrave; sa t&ecirc;te un de ses ministres, le v&eacute;n&eacute;rable Shou-Hsing Tao, âg&eacute; de 74 ans. Tout fonctionnait vraiment bien, jusque-l&agrave;.";
            mes+= "</div>";
            
            mes+= "<div class='text-Story-2'>";//text-Story-2 -> aligne right
            mes+= "<h2 class='Story-title-2'>LE NODACHI</h2>";
            mes+= "<img src='../images/story/Nodachi.jpg' alt='Error Nodachi.jpg' class='img-Story-2'/>"; //changer img -> Aligne right
            mes+= "<span class='alinea'>Lorsque</span> la force de s&eacute;curit&eacute; priv&eacute;e Nodachi s’est cr&eacute;&eacute;e en janvier 2016, personne n’y a pr&ecirc;t&eacute; attention. Pourtant, une soci&eacute;t&eacute; dont le nom vient d’un &eacute;norme katana destin&eacute; &agrave; couper un cavalier et son cheval en deux dans le sens de la longueur aurait pu mettre la puce &agrave; l’oreille de la commu-naut&eacute; internationale. L’ann&eacute;e d’apr&egrave;s, le Nodachi &eacute;tait une soci&eacute;t&eacute; de s&eacute;curit&eacute; connue pour ses &eacute;quipements high-tech et ses agents sortis des meilleures arm&eacute;es du monde. C’&eacute;tait l’entreprise Kaneda Technologies qui finançait le Nodachi par l’interm&eacute;diaire de plusieurs filiales, notamment une grosse banque sino-japonaise nomm&eacute;e Mizaho Bank. Doucement, le Nodachi grandissait, &eacute;voluait et ses membres devenaient les vigiles, les agents de s&eacute;curit&eacute; et parfois les gros bras de nombreuses entreprises, appartenant &agrave; Kaneda ou non, de quantit&eacute; d’hommes politiques ou encore de c&eacute;l&eacute;brit&eacute;s interna-tionales. Dans un monde où la tension &eacute;tait presque palpable, où les crimes et les attentats &eacute;taient de plus en plus nombreux, des &eacute;tats-Unis &agrave; la Chine en passant par l’Australie, les agents du Nodachi se trouvaient partout. Ils &eacute;taient appr&eacute;ci&eacute;s pour leur discr&eacute;tion, leur savoir-faire et pour l’impunit&eacute; avec laquelle ils pouvaient agir.";
            mes+= "<br/><br/><span class='alinea'>En</span> 2025, plus qu’une simple et docile soci&eacute;t&eacute; de s&eacute;curit&eacute;, le Nodachi &eacute;tait devenu une v&eacute;ritable arm&eacute;e. Seuls quelques &eacute;lus connaissent la v&eacute;rit&eacute;, mais on raconte qu’&agrave; ce stade de son existence, le gouvernement japonais participait active-ment au financement de la force Nodachi qui comptait pr&egrave;s de 100 000 agents r&eacute;partis sur tout le globe. D&egrave;s 2032, 12 000 employ&eacute;s de cette force sont m&ecirc;me venus « aider » les &eacute;tats-Unis &agrave; se redresser et &agrave; s&eacute;curiser leur côte Est d&eacute;chir&eacute;e par la peste rouge et d’incessants conflits internes. C’est durant cette p&eacute;riode que le Nodachi a r&eacute;v&eacute;l&eacute; son vrai visage. Les mil-liers d’agents envoy&eacute;s ont utilis&eacute; des m&eacute;thodes extr&ecirc;mement brutales pour contenir la population, n’ont pas h&eacute;sit&eacute; &agrave; tirer sur des civils et &agrave; organiser des proc&egrave;s sauvages, ex&eacute;cutant des criminels en place publique « pour l’exemple ». Certaines rumeurs faisaient &eacute;tat de la pr&eacute;sence d’une technologie tr&egrave;s avanc&eacute;e au sein du Nodachi, de soldats cybern&eacute;tiques, de drogues de combat, d’armures de guerre d&eacute;viant les tirs de gros calibre et de drones intelligents. Vu le peu d’informations filtrant sur la situation aux &eacute;tats-Unis, aucun pays n’a r&eacute;agi malgr&eacute; les mises en garde de plusieurs journaux d’investiga-tion et d’observateurs ind&eacute;pendants, qui ont cri&eacute; leur indigna-tion dans l’indiff&eacute;rence g&eacute;n&eacute;rale.";
            mes+= "<br/><br/><span class='alinea'>Et</span> puis, lorsque les premiers raids du Dragon Asiatique ont frapp&eacute; le Japon en 2033, la r&eacute;ponse du Nodachi a &eacute;t&eacute; particu-li&egrave;rement brutale. Elle a &eacute;t&eacute; si sale et violente que beaucoup de gens tr&egrave;s s&eacute;rieux doutent encore de la v&eacute;racit&eacute; de ces &eacute;v&eacute;ne-ments. Loyal au gouvernement japonais et &agrave; son île, soutenu par l’une des plus grandes entreprises du monde et servi par une technologie en avance d’une g&eacute;n&eacute;ration, le Nodachi a r&eacute;pondu au Dragon Asiatique en seulement une nuit.";
            mes+= "<br/><br/><span class='alinea'>Le</span> 19 d&eacute;cembre 2033, jour du Tennō Tanjōbi (f&ecirc;te natio-nale du Japon et jour d’anniversaire de l’empereur actuel), les capitales des pays membres du Dragon Asiatique, leurs bâti-ments gouvernementaux, leurs infrastructures &eacute;nerg&eacute;tiques et de communication, ont &eacute;t&eacute; frapp&eacute;s par des escouades de combat venues de nulle part, utilisant des proc&eacute;d&eacute;s de camou-flage optique, des armes capables de faire fondre les plus &eacute;pais blindages et des drones de guerre massacrant les soldats sous des pluies de bombes chimiques. Les soldats du Nodachi d&eacute;j&agrave; pr&eacute;sents sur les lieux comme agents de s&eacute;curit&eacute; ou gardes du corps ont grandement aid&eacute; leurs coll&egrave;gues en ouvrant des voies d’acc&egrave;s ou en provoquant des diversions bienvenues.";
            mes+= "<br/><br/><span class='alinea'>Avec</span> une discipline rare et une organisation millim&eacute;tr&eacute;e, tous les membres des gouvernements des pays unis sous la banni&egrave;re du Dragon Asiatique ont &eacute;t&eacute; ex&eacute;cut&eacute;s par d&eacute;capi-tation, conjoints et enfants compris, les chefs d’&eacute;tat et leurs familles ont &eacute;t&eacute; enlev&eacute;s et le pr&eacute;sident de l’Union, Shou-Hsing Tao, a &eacute;t&eacute; amen&eacute; devant le trône de chrysanth&egrave;me, face &agrave; l’empereur Naruhito, fils d’Akihito.";
            mes+= "<br/><br/><span class='alinea'>Au</span> terme d’un entretien qui a dur&eacute; trois jours et trois nuits, Shou-Hsing Tao a &eacute;t&eacute; raccompagn&eacute; au si&egrave;ge administratif du Dragon Asiatique, situ&eacute; en Chine, par pr&egrave;s de 8 000 soldats du Nodachi et dans un calme absolu. Les chefs d’&eacute;tat enlev&eacute;s ont &eacute;t&eacute; retrouv&eacute;s dans leur pays quelques jours plus tard, ligot&eacute;s et souvent assoiff&eacute;s ou affam&eacute;s. Le 1er janvier 2034, le Dragon Asiatique retirait ses troupes des eaux du Japon et Shou-Hsing Tao a d&eacute;clar&eacute; que l’île &eacute;tait d&eacute;sormais sous la protection du Dragon Asiatique.";
            mes+= "<br/><br/><span class='alinea'>Dans</span> le m&ecirc;me temps, le premier ministre du Japon et l’empereur ont d&eacute;clar&eacute; le Nodachi « protecteur du Japon et du peuple japonais ». Les membres de la force de d&eacute;fense japo-naise, mais aussi les services de secours ou encore les agents de police, ont doucement &eacute;t&eacute; int&eacute;gr&eacute;s &agrave; cette nouvelle force nationale. Tout est rentr&eacute; dans l’ordre et la communaut&eacute; inter-nationale est rest&eacute;e comme &agrave; son habitude compl&egrave;tement inactive et stup&eacute;faite.";
            mes+="</div>";
            break;
        default: mes+= "Erreur de chargement de la zone ";
    }
    document.getElementById("text-zone-story").innerHTML=mes;
}
function test(){ 
    var idx=document.forms["choix-aspect"].elements["aspect"].selectedIndex;
    var mes="";
    var mesS="";
    if(floue){
        switch (idx){
            case 0 : 
                mes="<div class='text-bestiaire'><h2>L'ANATHEME</h2><img src='../images/anatheme.JPG' alt='Error anatheme.JPG' class='img-Story-1'/><span class='alinea'>C’est</span> &agrave; la moiti&eacute; de l’ann&eacute;e 2034 que l’Anath&egrave;me a frapp&eacute; le monde, non pas comme une &eacute;pid&eacute;mie, une m&eacute;t&eacute;orite g&eacute;ante ou une temp&ecirc;te de missiles nucl&eacute;aires, mais plutôt comme une v&eacute;ritable invasion, bien orchestr&eacute;e. D’abord, ça a &eacute;t&eacute; des nuits bien plus longues qui ont &eacute;tonn&eacute; les scientifiques et le reste de la population. Peu importe la partie du globe, la nuit tombait en effet beaucoup plus rapidement qu’&agrave; l’accoutum&eacute;e et, bien que le soleil ne se soit pas couch&eacute; plus tôt, le ciel s’as - sombrissait pour d&eacute;verser une obscurit&eacute; nocturne &agrave; des heures pr&eacute;coces. Dans des communaut&eacute;s isol&eacute;es, les m&eacute;dias ont rap - port&eacute; des apparitions &eacute;tranges d’&ecirc;tres irr&eacute;els, des &eacute;v&eacute;nements surnaturels suivis de dizaines de disparitions. Doucement, la peur s’est install&eacute;e dans ces r&eacute;gions recul&eacute;es, parfois laiss&eacute;es &agrave; l’abandon par leur gouvernement.<br/><br/><span class='alinea'>Puis</span>, en l’espace d’un soir, au Proche-Orient, la nuit a d&eacute;cid&eacute; de perdurer, comme si la lumi&egrave;re du soleil n’arrivait plus &agrave; percer l’obscurit&eacute;. De l’&eacute;gypte &agrave; l’Afghanistan, de la G&eacute;orgie au Y&eacute;men, l’obscurit&eacute; s’est install&eacute;e et intensifi&eacute;e. Des rapports des autorit&eacute;s sur place parlaient de t&eacute;n&egrave;bres presque palpables et d’animaux inconnus et dangereux rôdant dans les villes. Et bientôt, plus rien. Toute la population de cette grande r&eacute;gion du globe avait disparu. L’angoisse de la fin du monde a pris l’Humanit&eacute; au ventre. On a tent&eacute; de trouver des parades, on a envoy&eacute; des hommes pour retrouver les disparus, des enqu&ecirc;teurs pour savoir comment et pourquoi les t&eacute;n&egrave;bres avaient pris des dizaines de millions de personnes... Mais rien n’a &eacute;t&eacute; trouv&eacute;, aucun indice. Rien. <br/><br/><span class='alinea'>L’Anath&egrave;me</span> et ses cr&eacute;atures se divisent en cinq Aspects. Chacun de ces Aspect est gouvern&eacute; par un seigneur bien particulier. Le monde de KNIGHT abrite de nombreuses cr&eacute;atures aussi dangereuse que perturbante. Voici un &eacute;chantillon des horreurs existantes &agrave; travers ce monde.</div>"; 
                break;
            case 1 :
                mes+="<table>";
                mes+="<tr><td><img src='../images/bete/bestianF.png' alt='img bestianF.png' width='176' heingth='241'></td>";
                mes+="<td><div class='text-bestiaire'><h2>LES BESTIANS</h2><span class='alinea'>Les</span> bestians sont tous les animaux qui ont subi avec violence l’influence de la B&ecirc;te. Qu’elles soient mammif&egrave;res, reptiles, volatiles ou autres, toutes les cr&eacute;atures qui ont surv&eacute;cu au passage des noctes ont malgr&eacute; tout subi des transformations importantes face aux t&eacute;n&egrave;bres. La plupart de ces modifications sont de deux ordres. D’une part, les caract&eacute;ristiques physiques de ces animaux ont mut&eacute; pour se rapprocher des cr&eacute;atures nocturnes et abyssales. Capables de voir la nuit, comportant &eacute;cailles et branchies par lesquelles ils aspirent l’obscurit&eacute; qui les environne, les bestians ne sont plus que l’ombre de l’esp&egrave;ce &agrave; laquelle ils appartenaient auparavant. D’autre part, leur comportement suit d’&eacute;tranges changements. Tous, quelle que soit leur nature originelle, sont des pr&eacute;dateurs. Patients, souvent plus intelligents qu’ils ne l’&eacute;taient avant, ils sont sp&eacute;cialistes de la traque et des attaques coordonn&eacute;es. Agissant la plupart du temps en meutes, bancs, essaims, ils tourmentent leurs proies jusqu’&agrave; ce que celles-ci finissent par abandonner et se laisser faire.</div></td>";
                mes+="</tr></table>";
                mes+="<table><tr><td><img src='../images/bete/fauneF.png' alt='erreur fauneF.png' ></td>"
                mes+="<td><div class='text-bestiaire'><h2>LES FAUNES</h2><span class='alinea'>Les</span> faunes sont les humains qui ont &eacute;t&eacute; touch&eacute;s par le d&eacute;sespoir dans le domaine de la B&ecirc;te. La plupart subissent des transformations physiques limit&eacute;es, des &eacute;cailles s’&eacute;tendent sur leur peau si ce ne sont des poils, leurs doigts se palment ou deviennent griffus et leurs yeux se noircissent pour adapter leur vue &agrave; l’obscurit&eacute;. Leur personnalit&eacute; est, quant &agrave; elle, g&eacute;n&eacute;ralement plus touch&eacute;e par la pr&eacute;sence du Seigneur. Certains s’isolent de toutes les autres cr&eacute;atures, pr&eacute;f&eacute;rant chasser pour eux-m&ecirc;mes et s’enfermer dans un mutisme haineux. Le reste se d&eacute;place par groupes d’environ dix individus. Leurs mots finissent g&eacute;n&eacute;ralement par se transformer en cris. Ils attaquent de façon organis&eacute;e des communaut&eacute;s de rebuts pour trouver de la nourriture, mais, si celle-ci vient &agrave; v&eacute;ritablement manquer, ils sont capables de se d&eacute;vorer entre eux pour survivre ou de se s&eacute;parer de leur groupe d’origine.</div></td>";
                mes+="</tr>"
                break;
            case 2 :
                mes+="<table>";
                mes+="<tr><td><img src='../images/chair/flore_de_chairF.png' alt='Erreur flore_de_chairF.png' width='176' heingth='241'></td>";
                mes+="<td><div class='text-bestiaire'><h2>LA FLORE DE CHAIR</h2><span class='alinea'>La</span> flore de chair est parmi les deux principaux ph&eacute;nom&egrave;nes qui ont &eacute;t&eacute; d&eacute;couverts lorsque le Nodachi a r&eacute;ussi &agrave; faire reculer les t&eacute;n&egrave;bres tapies en Asie. &agrave; la place des villages habit&eacute;s et de certaines villes s’&eacute;tendaient des jungles enti&egrave;res de flore de chair. Au premier abord, cette v&eacute;g&eacute;tation faite de veines et d’os semble inoffensive quoique monstrueuse. Cependant, la nuit tomb&eacute;e, elle se d&eacute;place, lentement, afin de se d&eacute;ployer sur toujours plus de territoire. Cette force lente est tr&egrave;s dure &agrave; arr&ecirc;ter et m&ecirc;me &agrave; retarder, car elle est r&eacute;sistante et innombrable. Si un arbre de chair est mis &agrave; bas, un autre se forme &agrave; sa suite et continue la lente progression d&eacute;but&eacute;e par le premier<br/></div></td>";
                mes+="</tr></table>";
                mes+="<table><tr><td><img src='../images/chair/aberationF.png' alt='erreur aberationF.png' ></td>"
                mes+="<td><div class='text-bestiaire'><h2>LES ABERATIONS</h2><span class='alinea'>Les</span> embryons sont en quelque sorte les soldats de la Chair. Contrairement &agrave; la flore de chair, ils ne sont pas reli&eacute;s entre eux par des veines, ils peuvent donc se d&eacute;placer librement et assez rapidement. Exp&eacute;riences rat&eacute;es de l’&eacute;clat, les embryons sont des tentatives de cr&eacute;ations humaines qui ont violemment subi le passage dans le cercle de l’Horreur. Hommes et femmes malform&eacute;s, voire mutil&eacute;s, ils disposent souvent d’armes de m&ecirc;l&eacute;e qu’ils brandissent de leurs semblants de bras, mais leur principale arme reste l’effet qu’ils provoquent chez leurs opposants. En effet, aucun humain ne peut rester de marbre devant des corps d&eacute;form&eacute;s, monstrueux, non naturels et l&agrave; où une arm&eacute;e d’embryons passe, le d&eacute;sespoir se fait vite sentir.";
                mes+="<br/><br/><span class='alinea'>On</span> dit au sein des rangs du Nodachi que l’aberration est la plus terrible des monstruosit&eacute; de la Chair. Nombre d’agents de l’organisation du shogun sont tomb&eacute;s sous les coups de bras &agrave; dix articulations, ont &eacute;t&eacute; &eacute;cras&eacute;s par des tentacules capables de broyer l’acier ou d&eacute;vor&eacute;s par de multiples bouches s&eacute;cr&eacute;tant un sang brûlant et toxique. Des villages rebuts entiers auraient m&ecirc;me disparu en seulement quelques heures, noy&eacute;s sous une flore de chair sem&eacute;e par l’aberration. Une flore de chair naissant en seulement quelques secondes est d’ailleurs le symptôme de la pr&eacute;sence d’une aberration et donc le signe qu’il faut fuir rapidement. Personne ne sait, en v&eacute;rit&eacute;, si la flore naît de cette monstruosit&eacute; ou si c’est elle qui la fait croître. </div></td>";
                mes+="</tr>"
                break;
            case 3 :
                mes+="<table>";
                mes+="<tr><td><img src='../images/dame/creature_des_glacesF.png' alt='img creature_des_glacesF.png' width='176' heingth='241'></td>";
                mes+="<td><div class='text-bestiaire'><h2>CREATURES DES GLACES</h2><span class='alinea'>Les</span> cr&eacute;atures de glace sont l&eacute;gions et proviennent toutes de la main de la Matrice. Tous uniques, ces &ecirc;tres peuvent avoir diff&eacute;rentes fonctions et de tr&egrave;s nombreuses formes. Parmi eux, on peut par exemple compter la pr&eacute;sence des nourrices. Souvent de forme animale, ils habitent en g&eacute;n&eacute;ral le labyrinthe qui renferme la Matrice qu’ils entretiennent. En plus de r&eacute;pondre &agrave; tous les d&eacute;sirs de leur cr&eacute;atrice, ces cr&eacute;atures peuvent parfois sortir de sa prison afin de s’occuper des nombreuses statues de glace se trouvant sur le territoire de la Dame. Mais la majorit&eacute; d’entre elles sont des soldats. Pour l’instant inactives, la Matrice augmente chaque jour leur nombre et, lorsque la Dame aura besoin de leur puissance, elles seront des milliers &agrave; pouvoir r&eacute;pondre &agrave; son appel. Ce jour-l&agrave; sera alors bien sombre pour l’Humanit&eacute;. En plus de ces soldats, l’incarnation commence &agrave; cr&eacute;er des champions. Cr&eacute;atures bien plus puissantes et bien plus grandes que les simples soldats, ces g&eacute;ants de glace parcourent le territoire de leur Seigneur dans l’attente d’une rencontre &agrave; leur hauteur. </div></td>";
                mes+="</tr></table>";
                mes+="<table><tr><td><img src='../images/dame/prodigeF.png' alt='erreur prodigeF.png' ></td>"
                mes+="<td><div class='text-bestiaire'><h2>LES PRODIGES</h2><span class='alinea'>Humains</span> ayant en eux une ascendance abyssale, les prodiges sont nombreux &agrave; parcourir encore la Terre. Si certains sont conscients de leur nature, la plupart n’imaginent m&ecirc;me pas &ecirc;tre li&eacute;s d’une façon ou d’une autre &agrave; l’apocalypse qui s’abat sur eux. Sans pouvoir l’expliquer, ils ressentent pourtant une attirance pour l’Anath&egrave;me et peuvent m&ecirc;me parfois d&eacute;velopper des dons en rapport avec l’ombre et le froid. La Dame garde un œil discret mais constant sur sa prog&eacute;niture, consciente qu’un jour, leur utilisation sera d&eacute;cisive pour l’aboutissement de son plan. Elle saura alors les rappeler &agrave; elle et d&eacute;velopper ce qu’ils gardent cach&eacute; au fond d’eux. Mais qui sait quelle facette de ces &ecirc;tres sera la plus puissante, l’humanit&eacute; ou l’obscurit&eacute; ? </div></td>";
                mes+="</tr>"
                break;
            case 4 : 
                mes+="<table>";
                mes+="<tr><td><img src='../images/machine/mechanisteF.png' alt='img mechanisteF.png' width='176' heingth='241'></td>";
                mes+="<td><div class='text-bestiaire'><h2>MECHANISTE</h2><span class='alinea'>Les</span> m&eacute;canistes forment un groupe &agrave; part des d&eacute;sesp&eacute;r&eacute;s. Choisis par la Machine pour leur propension au d&eacute;sespoir, celle-ci a install&eacute; sur leur cerveau ses parasites m&eacute;caniques qui utilisent le d&eacute;sespoir de leur hôte comme carburant. Vivants et g&eacute;n&eacute;ralement conscients de ce qu’ils subissent, les m&eacute;canistes n’ont pourtant aucun contrôle sur leurs mouvements. Leur corps sert &agrave; la fois de batterie et d’outil. </div></td>";
                mes+="</tr></table>";
                mes+="<table><tr><td><img src='../images/machine/monstre_machineF.png' alt='erreur monstre_machineF.png' ></td>"
                mes+="<td><div class='text-bestiaire'><h2>MONSTRO-MACHINE</h2><span class='alinea'>Si</span> les constructs peuvent &eacute;ventuellement se battre pour la Machine, les monstres-machines repr&eacute;sentent son bras arm&eacute;. Form&eacute;s de plusieurs objets, g&eacute;n&eacute;ralement des v&eacute;hicules, des machines-outils et de l’armement, ils peuvent atteindre des proportions impressionnantes et se d&eacute;placer tr&egrave;s rapidement. Particuli&egrave;rement difficiles &agrave; d&eacute;truire, ils ont tendance &agrave; s’adapter aux situations, mais aussi aux ennemis qui s’opposent &agrave; eux. Ils peuvent ainsi renforcer leur blindage ou bien se cr&eacute;er de nombreux bras m&eacute;caniques pr&ecirc;ts &agrave; combattre sur tous les fronts. Certains sont m&ecirc;me capables de voler grâce &agrave; la pr&eacute;sence de r&eacute;acteurs et d’ailes ou de pales.";
                mes+="<br/><br/><span class='alinea'>Les</span> monstres-machines sont plus faciles &agrave; remarquer que les constructs, car plus imposants. En outre, il arrive qu’ils soient observ&eacute;s en dehors des villes mouvantes, parfois m&ecirc;me sous forme de convois. Leur robustesse et leur rapidit&eacute; leur permettent de traverser de longues distances, entre deux villes mouvantes par exemple, et de r&eacute;sister &agrave; d’&eacute;ventuelles attaques. Les chevaliers ont d’ailleurs compris que les convois de monstres-machines prot&eacute;geaient souvent du mat&eacute;riel ou des informations tr&egrave;s importantes pour leur Seigneur et les rares attaques qui ont &eacute;t&eacute; r&eacute;ussies l’ont prouv&eacute;. </div></td>";
                mes+="</tr>"
                break;
            case 5 :
                mes+="<table>";
                mes+="<tr><td><img src='../images/masque/ombreF.png' alt='img ombreF.png' width='176' heingth='241'></td>";
                mes+="<td><div class='text-bestiaire'><h2>L'OMBRE</h2><span class='alinea'>L’Ombre</span> se fond dans l’obscurit&eacute; et peut atteindre n’importe quel lieu sans &ecirc;tre vue. Se cachant dans chaque recoin de t&eacute;n&egrave;bres, elle est cependant forc&eacute;e de suivre le mouvement des ombres, car elle ne peut supporter des lumi&egrave;res trop vives. Cet avatar incarne le bras arm&eacute; du Masque, celui qui se faufile dans la nuit pour tuer rapidement et discr&egrave;tement. Il utilise alors des &eacute;clats effil&eacute;s qu’il semble sortir de l’obscurit&eacute; m&ecirc;me. D’une dext&eacute;rit&eacute; hors norme, personne ne peut se vanter d’avoir surv&eacute;cu &agrave; son toucher mortel.</div></td>";
                mes+="</tr></table>";
                mes+="<table><tr><td><img src='../images/masque/favori_du_masqueF.png' alt='erreur favori_du_masqueF.png' ></td>"
                mes+="<td><div class='text-bestiaire'><h2>FAVORIS DU MASQUE</h2><span class='alinea'>En</span> dehors des incarnations, le favori du Masque est la cr&eacute;ature la plus dangereuse du Seigneur. Un condens&eacute; de puissance et de fourberie alli&eacute; &agrave; une attitude implacable.";
                mes+="<br/><br/><span class='alinea'>Les</span> favoris du Masque apparaissant sans pr&eacute;venir, depuis une ombre ou un coin obscur. Couverts de capes noires masquant &agrave; peine les dizaines de masques blancs et de bras qui les composent, ils demeurent silencieux, attaquent, tuent, puis s’en vont aussi discr&egrave;tement qu’ils sont arriv&eacute;s. Pour vaincre leurs adversaires, ils projettent de puissantes vagues d’&eacute;nergie alpha &agrave; m&ecirc;me de carboniser les adversaires les plus retors et pouvant parasiter les syst&egrave;mes des m&eacute;ta-armures. ";
                mes+="<br/><br/><span class='alinea'>Depuis</span> peu, la section Cyclope du Knight a d&eacute;couvert qu’un favori du masque n’est pas r&eacute;ellement une cr&eacute;ature mais un v&eacute;ritable portail flottant et &eacute;ph&eacute;m&egrave;re, donnant directement sur le royaume du Masque. Depuis un favori, en plus de puissantes d&eacute;flagrations d’&eacute;nergie alpha, peuvent sortir des serviteurs du Masque de tout type. Un par un, ils peuvent s’extraire du corps sombre du favori pour grossir les rangs des t&eacute;n&egrave;bres. Il est presque certain qu’au moins une moiti&eacute; des failles de t&eacute;n&egrave;bres apparaissant sporadiquement partout sur le monde sont les œuvres de favoris du Masque.";
                mes+="</div></td>";
                mes+="</tr>"
                break;
            default: document.getElementById("text-presentation-aspects").innerHTML="Error affichage dans text-presentation-aspects";
        }
    } else {
        switch (idx){
            case 0 : 
                mes="<div class='text-bestiaire'><h2>L'ANATHEME</h2><img src='../images/anatheme.JPG' alt='Error anatheme.JPG' class='img-Story-1'/><span class='alinea'>C’est</span> &agrave; la moiti&eacute; de l’ann&eacute;e 2034 que l’Anath&egrave;me a frapp&eacute; le monde, non pas comme une &eacute;pid&eacute;mie, une m&eacute;t&eacute;orite g&eacute;ante ou une temp&ecirc;te de missiles nucl&eacute;aires, mais plutôt comme une v&eacute;ritable invasion, bien orchestr&eacute;e. D’abord, ça a &eacute;t&eacute; des nuits bien plus longues qui ont &eacute;tonn&eacute; les scientifiques et le reste de la population. Peu importe la partie du globe, la nuit tombait en effet beaucoup plus rapidement qu’&agrave; l’accoutum&eacute;e et, bien que le soleil ne se soit pas couch&eacute; plus tôt, le ciel s’as - sombrissait pour d&eacute;verser une obscurit&eacute; nocturne &agrave; des heures pr&eacute;coces. Dans des communaut&eacute;s isol&eacute;es, les m&eacute;dias ont rap - port&eacute; des apparitions &eacute;tranges d’&ecirc;tres irr&eacute;els, des &eacute;v&eacute;nements surnaturels suivis de dizaines de disparitions. Doucement, la peur s’est install&eacute;e dans ces r&eacute;gions recul&eacute;es, parfois laiss&eacute;es &agrave; l’abandon par leur gouvernement.<br/><br/><span class='alinea'>Puis</span>, en l’espace d’un soir, au Proche-Orient, la nuit a d&eacute;cid&eacute; de perdurer, comme si la lumi&egrave;re du soleil n’arrivait plus &agrave; percer l’obscurit&eacute;. De l’&eacute;gypte &agrave; l’Afghanistan, de la G&eacute;orgie au Y&eacute;men, l’obscurit&eacute; s’est install&eacute;e et intensifi&eacute;e. Des rapports des autorit&eacute;s sur place parlaient de t&eacute;n&egrave;bres presque palpables et d’animaux inconnus et dangereux rôdant dans les villes. Et bientôt, plus rien. Toute la population de cette grande r&eacute;gion du globe avait disparu. L’angoisse de la fin du monde a pris l’Humanit&eacute; au ventre. On a tent&eacute; de trouver des parades, on a envoy&eacute; des hommes pour retrouver les disparus, des enqu&ecirc;teurs pour savoir comment et pourquoi les t&eacute;n&egrave;bres avaient pris des dizaines de millions de personnes... Mais rien n’a &eacute;t&eacute; trouv&eacute;, aucun indice. Rien. <br/><br/><span class='alinea'>L’Anath&egrave;me</span> et ses cr&eacute;atures se divisent en cinq Aspects. Chacun de ces Aspect est gouvern&eacute; par un seigneur bien particulier. Le monde de KNIGHT abrite de nombreuses cr&eacute;atures aussi dangereuse que perturbante. Voici un &eacute;chantillon des horreurs existantes &agrave; travers ce monde.</div>"; 
                break;
            case 1 :
                mes+="<table>";
                mes+="<tr><td><img src='../images/bete/bestian.png' alt='img bestian.png' width='176' heingth='241'/></td>";
                mes+="<td><div class='text-bestiaire'><h2>LES BESTIANS</h2><span class='alinea'>Les</span> bestians sont tous les animaux qui ont subi avec violence l’influence de la B&ecirc;te. Qu’elles soient mammif&egrave;res, reptiles, volatiles ou autres, toutes les cr&eacute;atures qui ont surv&eacute;cu au passage des noctes ont malgr&eacute; tout subi des transformations importantes face aux t&eacute;n&egrave;bres. La plupart de ces modifications sont de deux ordres. D’une part, les caract&eacute;ristiques physiques de ces animaux ont mut&eacute; pour se rapprocher des cr&eacute;atures nocturnes et abyssales. Capables de voir la nuit, comportant &eacute;cailles et branchies par lesquelles ils aspirent l’obscurit&eacute; qui les environne, les bestians ne sont plus que l’ombre de l’esp&egrave;ce &agrave; laquelle ils appartenaient auparavant. D’autre part, leur comportement suit d’&eacute;tranges changements. Tous, quelle que soit leur nature originelle, sont des pr&eacute;dateurs. Patients, souvent plus intelligents qu’ils ne l’&eacute;taient avant, ils sont sp&eacute;cialistes de la traque et des attaques coordonn&eacute;es. Agissant la plupart du temps en meutes, bancs, essaims, ils tourmentent leurs proies jusqu’&agrave; ce que celles-ci finissent par abandonner et se laisser faire.</div></td>";
                mes+="</tr></table>";
                mes+="<table><tr><td><img src='../images/bete/faune.png' alt='erreur faune.png' /></td>"
                mes+="<td><div class='text-bestiaire'><h2>LES FAUNES</h2><span class='alinea'>Les</span> faunes sont les humains qui ont &eacute;t&eacute; touch&eacute;s par le d&eacute;sespoir dans le domaine de la B&ecirc;te. La plupart subissent des transformations physiques limit&eacute;es, des &eacute;cailles s’&eacute;tendent sur leur peau si ce ne sont des poils, leurs doigts se palment ou deviennent griffus et leurs yeux se noircissent pour adapter leur vue &agrave; l’obscurit&eacute;. Leur personnalit&eacute; est, quant &agrave; elle, g&eacute;n&eacute;ralement plus touch&eacute;e par la pr&eacute;sence du Seigneur. Certains s’isolent de toutes les autres cr&eacute;atures, pr&eacute;f&eacute;rant chasser pour eux-m&ecirc;mes et s’enfermer dans un mutisme haineux. Le reste se d&eacute;place par groupes d’environ dix individus. Leurs mots finissent g&eacute;n&eacute;ralement par se transformer en cris. Ils attaquent de façon organis&eacute;e des communaut&eacute;s de rebuts pour trouver de la nourriture, mais, si celle-ci vient &agrave; v&eacute;ritablement manquer, ils sont capables de se d&eacute;vorer entre eux pour survivre ou de se s&eacute;parer de leur groupe d’origine.</div></td>";
                mes+="</tr>"
                break;
            case 2 :
                mes+="<table>";
                mes+="<tr><td><img src='../images/chair/flore_de_chair.png' alt='Erreur flore_de_chair.png' width='176' heingth='241'/></td>";
                mes+="<td><div class='text-bestiaire'><h2>LA FLORE DE CHAIR</h2><span class='alinea'>La</span> flore de chair est parmi les deux principaux ph&eacute;nom&egrave;nes qui ont &eacute;t&eacute; d&eacute;couverts lorsque le Nodachi a r&eacute;ussi &agrave; faire reculer les t&eacute;n&egrave;bres tapies en Asie. &agrave; la place des villages habit&eacute;s et de certaines villes s’&eacute;tendaient des jungles enti&egrave;res de flore de chair. Au premier abord, cette v&eacute;g&eacute;tation faite de veines et d’os semble inoffensive quoique monstrueuse. Cependant, la nuit tomb&eacute;e, elle se d&eacute;place, lentement, afin de se d&eacute;ployer sur toujours plus de territoire. Cette force lente est tr&egrave;s dure &agrave; arr&ecirc;ter et m&ecirc;me &agrave; retarder, car elle est r&eacute;sistante et innombrable. Si un arbre de chair est mis &agrave; bas, un autre se forme &agrave; sa suite et continue la lente progression d&eacute;but&eacute;e par le premier<br/></div></td>";
                mes+="</tr></table>";
                mes+="<table><tr><td><img src='../images/chair/aberation.png' alt='erreur aberation.png' /></td>"
                mes+="<td><div class='text-bestiaire'><h2>LES ABERATIONS</h2><span class='alinea'>Les</span> embryons sont en quelque sorte les soldats de la Chair. Contrairement &agrave; la flore de chair, ils ne sont pas reli&eacute;s entre eux par des veines, ils peuvent donc se d&eacute;placer librement et assez rapidement. Exp&eacute;riences rat&eacute;es de l’&eacute;clat, les embryons sont des tentatives de cr&eacute;ations humaines qui ont violemment subi le passage dans le cercle de l’Horreur. Hommes et femmes malform&eacute;s, voire mutil&eacute;s, ils disposent souvent d’armes de m&ecirc;l&eacute;e qu’ils brandissent de leurs semblants de bras, mais leur principale arme reste l’effet qu’ils provoquent chez leurs opposants. En effet, aucun humain ne peut rester de marbre devant des corps d&eacute;form&eacute;s, monstrueux, non naturels et l&agrave; où une arm&eacute;e d’embryons passe, le d&eacute;sespoir se fait vite sentir.";
                mes+="<br/><br/><span class='alinea'>On</span> dit au sein des rangs du Nodachi que l’aberration est la plus terrible des monstruosit&eacute; de la Chair. Nombre d’agents de l’organisation du shogun sont tomb&eacute;s sous les coups de bras &agrave; dix articulations, ont &eacute;t&eacute; &eacute;cras&eacute;s par des tentacules capables de broyer l’acier ou d&eacute;vor&eacute;s par de multiples bouches s&eacute;cr&eacute;tant un sang brûlant et toxique. Des villages rebuts entiers auraient m&ecirc;me disparu en seulement quelques heures, noy&eacute;s sous une flore de chair sem&eacute;e par l’aberration. Une flore de chair naissant en seulement quelques secondes est d’ailleurs le symptôme de la pr&eacute;sence d’une aberration et donc le signe qu’il faut fuir rapidement. Personne ne sait, en v&eacute;rit&eacute;, si la flore naît de cette monstruosit&eacute; ou si c’est elle qui la fait croître. </div></td>";
                mes+="</tr>"
                break;
            case 3 :
                mes+="<table>";
                mes+="<tr><td><img src='../images/dame/creature_des_glaces.png' alt='img creature_des_glaces.png' width='176' heingth='241'/></td>";
                mes+="<td><div class='text-bestiaire'><h2>CREATURES DES GLACES</h2><span class='alinea'>Les</span> cr&eacute;atures de glace sont l&eacute;gions et proviennent toutes de la main de la Matrice. Tous uniques, ces &ecirc;tres peuvent avoir diff&eacute;rentes fonctions et de tr&egrave;s nombreuses formes. Parmi eux, on peut par exemple compter la pr&eacute;sence des nourrices. Souvent de forme animale, ils habitent en g&eacute;n&eacute;ral le labyrinthe qui renferme la Matrice qu’ils entretiennent. En plus de r&eacute;pondre &agrave; tous les d&eacute;sirs de leur cr&eacute;atrice, ces cr&eacute;atures peuvent parfois sortir de sa prison afin de s’occuper des nombreuses statues de glace se trouvant sur le territoire de la Dame. Mais la majorit&eacute; d’entre elles sont des soldats. Pour l’instant inactives, la Matrice augmente chaque jour leur nombre et, lorsque la Dame aura besoin de leur puissance, elles seront des milliers &agrave; pouvoir r&eacute;pondre &agrave; son appel. Ce jour-l&agrave; sera alors bien sombre pour l’Humanit&eacute;. En plus de ces soldats, l’incarnation commence &agrave; cr&eacute;er des champions. Cr&eacute;atures bien plus puissantes et bien plus grandes que les simples soldats, ces g&eacute;ants de glace parcourent le territoire de leur Seigneur dans l’attente d’une rencontre &agrave; leur hauteur. </div></td>";
                mes+="</tr></table>";
                mes+="<table><tr><td><img src='../images/dame/prodige.png' alt='erreur prodige.png' /></td>"
                mes+="<td><div class='text-bestiaire'><h2>LES PRODIGES</h2><span class='alinea'>Humains</span> ayant en eux une ascendance abyssale, les prodiges sont nombreux &agrave; parcourir encore la Terre. Si certains sont conscients de leur nature, la plupart n’imaginent m&ecirc;me pas &ecirc;tre li&eacute;s d’une façon ou d’une autre &agrave; l’apocalypse qui s’abat sur eux. Sans pouvoir l’expliquer, ils ressentent pourtant une attirance pour l’Anath&egrave;me et peuvent m&ecirc;me parfois d&eacute;velopper des dons en rapport avec l’ombre et le froid. La Dame garde un œil discret mais constant sur sa prog&eacute;niture, consciente qu’un jour, leur utilisation sera d&eacute;cisive pour l’aboutissement de son plan. Elle saura alors les rappeler &agrave; elle et d&eacute;velopper ce qu’ils gardent cach&eacute; au fond d’eux. Mais qui sait quelle facette de ces &ecirc;tres sera la plus puissante, l’humanit&eacute; ou l’obscurit&eacute; ? </div></td>";
                mes+="</tr>"
                break;
            case 4 : 
                mes+="<table>";
                mes+="<tr><td><img src='../images/machine/mechaniste.png' alt='img mechaniste.png' width='176' heingth='241'/></td>";
                mes+="<td><div class='text-bestiaire'><h2>MECHANISTE</h2><span class='alinea'>Les</span> m&eacute;canistes forment un groupe &agrave; part des d&eacute;sesp&eacute;r&eacute;s. Choisis par la Machine pour leur propension au d&eacute;sespoir, celle-ci a install&eacute; sur leur cerveau ses parasites m&eacute;caniques qui utilisent le d&eacute;sespoir de leur hôte comme carburant. Vivants et g&eacute;n&eacute;ralement conscients de ce qu’ils subissent, les m&eacute;canistes n’ont pourtant aucun contrôle sur leurs mouvements. Leur corps sert &agrave; la fois de batterie et d’outil. </div></td>";
                mes+="</tr></table>";
                mes+="<table><tr><td><img src='../images/machine/monstre_machine.png' alt='erreur monstre_machine.png' /></td>"
                mes+="<td><div class='text-bestiaire'><h2>MONSTRO-MACHINE</h2><span class='alinea'>Si</span> les constructs peuvent &eacute;ventuellement se battre pour la Machine, les monstres-machines repr&eacute;sentent son bras arm&eacute;. Form&eacute;s de plusieurs objets, g&eacute;n&eacute;ralement des v&eacute;hicules, des machines-outils et de l’armement, ils peuvent atteindre des proportions impressionnantes et se d&eacute;placer tr&egrave;s rapidement. Particuli&egrave;rement difficiles &agrave; d&eacute;truire, ils ont tendance &agrave; s’adapter aux situations, mais aussi aux ennemis qui s’opposent &agrave; eux. Ils peuvent ainsi renforcer leur blindage ou bien se cr&eacute;er de nombreux bras m&eacute;caniques pr&ecirc;ts &agrave; combattre sur tous les fronts. Certains sont m&ecirc;me capables de voler grâce &agrave; la pr&eacute;sence de r&eacute;acteurs et d’ailes ou de pales.";
                mes+="<br/><br/><span class='alinea'>Les</span> monstres-machines sont plus faciles &agrave; remarquer que les constructs, car plus imposants. En outre, il arrive qu’ils soient observ&eacute;s en dehors des villes mouvantes, parfois m&ecirc;me sous forme de convois. Leur robustesse et leur rapidit&eacute; leur permettent de traverser de longues distances, entre deux villes mouvantes par exemple, et de r&eacute;sister &agrave; d’&eacute;ventuelles attaques. Les chevaliers ont d’ailleurs compris que les convois de monstres-machines prot&eacute;geaient souvent du mat&eacute;riel ou des informations tr&egrave;s importantes pour leur Seigneur et les rares attaques qui ont &eacute;t&eacute; r&eacute;ussies l’ont prouv&eacute;. </div></td>";
                mes+="</tr>"
                break;
            case 5 :
                mes+="<table>";
                mes+="<tr><td><img src='../images/masque/ombre.png' alt='img ombre.png' width='176' heingth='241'></td>";
                mes+="<td><div class='text-bestiaire'><h2>L'OMBRE</h2><span class='alinea'>L’Ombre</span> se fond dans l’obscurit&eacute; et peut atteindre n’importe quel lieu sans &ecirc;tre vue. Se cachant dans chaque recoin de t&eacute;n&egrave;bres, elle est cependant forc&eacute;e de suivre le mouvement des ombres, car elle ne peut supporter des lumi&egrave;res trop vives. Cet avatar incarne le bras arm&eacute; du Masque, celui qui se faufile dans la nuit pour tuer rapidement et discr&egrave;tement. Il utilise alors des &eacute;clats effil&eacute;s qu’il semble sortir de l’obscurit&eacute; m&ecirc;me. D’une dext&eacute;rit&eacute; hors norme, personne ne peut se vanter d’avoir surv&eacute;cu &agrave; son toucher mortel.</div></td>";
                mes+="</tr></table>";
                mes+="<table><tr><td><img src='../images/masque/favori_du_masque.png' alt='erreur favori_du_masque.png' ></td>"
                mes+="<td><div class='text-bestiaire'><h2>FAVORIS DU MASQUE</h2><span class='alinea'>En</span> dehors des incarnations, le favori du Masque est la cr&eacute;ature la plus dangereuse du Seigneur. Un condens&eacute; de puissance et de fourberie alli&eacute; &agrave; une attitude implacable.";
                mes+="<br/><br/><span class='alinea'>Les</span> favoris du Masque apparaissant sans pr&eacute;venir, depuis une ombre ou un coin obscur. Couverts de capes noires masquant &agrave; peine les dizaines de masques blancs et de bras qui les composent, ils demeurent silencieux, attaquent, tuent, puis s’en vont aussi discr&egrave;tement qu’ils sont arriv&eacute;s. Pour vaincre leurs adversaires, ils projettent de puissantes vagues d’&eacute;nergie alpha &agrave; m&ecirc;me de carboniser les adversaires les plus retors et pouvant parasiter les syst&egrave;mes des m&eacute;ta-armures. ";
                mes+="<br/><br/><span class='alinea'>Depuis</span> peu, la section Cyclope du Knight a d&eacute;couvert qu’un favori du masque n’est pas r&eacute;ellement une cr&eacute;ature mais un v&eacute;ritable portail flottant et &eacute;ph&eacute;m&egrave;re, donnant directement sur le royaume du Masque. Depuis un favori, en plus de puissantes d&eacute;flagrations d’&eacute;nergie alpha, peuvent sortir des serviteurs du Masque de tout type. Un par un, ils peuvent s’extraire du corps sombre du favori pour grossir les rangs des t&eacute;n&egrave;bres. Il est presque certain qu’au moins une moiti&eacute; des failles de t&eacute;n&egrave;bres apparaissant sporadiquement partout sur le monde sont les œuvres de favoris du Masque.";
                mes+="</div></td>";
                mes+="</tr>"
                break;
            default: document.getElementById("text-presentation-aspects").innerHTML="Error affichage dans text-presentation-aspects";
        }
    }
    mes+="</table>";
    document.getElementById("text-presentation-aspects").innerHTML=mes;
}
function foundMe(){
    var sch=document.getElementById("search").value;
    var zone=document.getElementById("quest").innerHTML;
    var d=0;
    var mot="";
    var nb=0;
    for(i=0;i<(zone.length-sch.length);i++){
        for(j=i;j<sch.length+i;j++){
            mot+=zone.charAt(j);
        }
        if(mot==sch){
            nb++;
        }
        mot="";
    }
    alert("Utilisé "+nb+" fois");
}
function draw(){
    var color = document.getElementById("color").value;
    var canvas=document.getElementById("canvas1");
    var ctx =canvas.getContext("2d");
    ctx.fillStyle=color;
    ctx.arc(200, 70, 15, 0, 2 * Math.PI, false); //ctx.arc(x, y, rayon, angleD&eacute;part, angleFin, sensAntiHoraire);
    ctx.fill();
    ctx.fillRect(190,80,20,100); //Poigne
    ctx.fillRect(150,180,100,10); //Garde
    ctx.fillRect(175,190,50,300); //Lame
    ctx.moveTo(240,280);
    ctx.bezierCurveTo(290,150,290,200,250,200);
    ctx.moveTo(160,280);
    ctx.bezierCurveTo(110,150,110,200,150,200);
    ctx.fill();
    ctx.beginPath(); //Pointe
    ctx.moveTo(175,490);
    ctx.lineTo(200,550);
    ctx.lineTo(225,490);
    ctx.fill();
    ctx.closePath();
    ctx.fillStyle="white"; //Decoration
    ctx.arc(200, 70, 10, 0, 2 * Math.PI, false);
    ctx.fillRect(195,200,10,250); //Deco interne lame
    ctx.beginPath() //Deco interne pointe
    ctx.moveTo(180,490);
    ctx.lineTo(185,490);
    ctx.lineTo(200,520);
    ctx.lineTo(200,535);
    ctx.lineTo(180,490);
    ctx.fill();
    ctx.closePath();
}
function modField(){
    document.getElementById("fieldNum").value=document.getElementById("note3").value;
}

function printDateAndTime(){
    document.getElementById("Date").innerHTML=date()+"<br/>"
    document.getElementById("Date").innerHTML+=time();
    var dateMaj= setTimeout(printDateAndTime,1000);
}
function date(){
    var orgDate="";
    var fullDate=new Date();
    var day=fullDate.getDay();
    switch (day){
        case 0 : day="Dimanche";break;
        case 1 : day="Lundi";break;
        case 2 : day="Mardi";break;
        case 3 : day="Mercredi";break;
        case 4 : day="Jeudi";break;
        case 5 : day="Vendredi";break;
        case 6 : day="Samedi";
    }
    var numberDay=fullDate.getDate();
    var month=fullDate.getMonth();
    switch(month){
        case 0 : month="Janvier";break;
        case 1 : month="Fevrier";break;
        case 2 : month="Mars";break;
        case 3 : month="Avril";break;
        case 4 : month="Mai";break;
        case 5 : month="Juin";break;
        case 6 : month="Juillet";break;
        case 7 : month="Aout";break;
        case 8 : month="Septembre";break;
        case 9 : month="Octobre";break;
        case 10 : month="Novembre";break;
        case 11 : month="Decembre";
    }
    var year=fullDate.getFullYear();
    orgDate=day+" "+numberDay+" "+month+" "+year;
    return orgDate
}
function time(){
    var orgHours="";
    var fullDate=new Date();
    var heures=fullDate.getHours();
    var minutes=fullDate.getMinutes();
    var secondes=fullDate.getSeconds();
    orgHours=heures+":"+minutes+":"+secondes;
    return orgHours;
}



