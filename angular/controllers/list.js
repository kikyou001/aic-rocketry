(function(){
        angular
        .module("rocket")
        .controller("listCtrl", ListController);

        function ListController(){
            this.varri ="variable";
            this.teamsData = teams;
            this.articles  = blog;
        }

        var teams = [
            {
                university:"USTO",
                team:"",
                img_url:"http://placehold.it/750x950",
                univ_url:"http://www.univ-usto.dz",
                rocket_name:"",
                prof:[
                    {name:"Bachir Imine", email:"#"}
                ],
                members:[
                    {name:"Mohamed Ilyes Ghomari",email:"ghomari.mohammed.ilyes@gmail.com",gender:"M"},
                    {name:"Bachir Abbas",email:"abass.bachirgm@gmail.com",gender:"M"},
                    {name:"Mohamed Kessal",email:"abass.bachirgm@gmail.com",gender:"M"},
                    {name:"Mahmoud Belmokhtar",email:"abass.bachirgm@gmail.com",gender:"M"},
                    {name:"Nesrine Zahaf",email:"abass.bachirgm@gmail.com",gender:"F"}
                ]
            },
            {
                university:"UDL",
                team:"",
                img_url:"http://placehold.it/750x950",
                univ_url:"https://www.univ-sba.dz",
                rocket_name:"",
                prof:[
                    {name:"Kacem Kaddouri", email:"kacem@gmail.com"}
                ],
                members:[
                    {name:"Mohamed Baghdadi",email:"mohbagh0@gmail.com",gender:"M"}
                ]
            },
            {
                university:"Biskra",
                team:"",
                img_url:"http://placehold.it/750x950",
                univ_url:"http://univ-biskra.dz",
                rocket_name:"",
                prof:[
                    {name:"Miloud Zellouf", email:"#"},
                    {name:"Kamel Aoues", email:"#"}
                ],
                members:[
                    {name:"Mohamed Temim",email:"temim0024@gmail.com",gender:"M"},
                    {name:"Hossam-Eddine Djahara",email:"hs.djahara@gmail.com",gender:"M"},
                    {name:"Abdelhakim Aissaoui",email:"abdelhakimaissaoui007@gmail.com",gender:"M"},
                    {name:"Salah Kherich",email:"kherich.salah@gmail.com",gender:"M"},
                    {name:"Mourad Zidane",email:"zidane.mourad6@gmail.com",gender:"M"}
                ]
            },
            {
                university:"UMC",
                team:"",
                img_url:"http://placehold.it/750x950",
                univ_url:"http://umc.edu.dz",
                rocket_name:"",
                prof:[
                    {name:"Brahim Necib", email:"#"}
                ],
                members:[
                    {name:"Mohamed Aribi",email:"gladia.man747@gmail.com",gender:"M"},
                    {name:"Abdelbasset Khidour",email:"khidouramar@gmail.com",gender:"M"},
                    {name:"Salah Boudaoud",email:"boudaoudsalah.bs@gmail.com",gender:"M"}
                ]
            },
            {
                university:"IAB",
                team:"",
                img_url:"http://placehold.it/750x950",
                univ_url:"http://univ-blida.dz",
                rocket_name:"",
                prof:[
                    {name:"Ahmed Chergrani", email:"#"}
                ],
                members:[
                    {name:"Oussama Brahimi",email:"oussama.br.05213a@gmail.com",gender:"M"},
                    {name:"Mohamed Bousalem",email:"mohamed.bousalem@yahoo.fr",gender:"M"},
                    {name:"Faina Messaoudi",email:"messaoudifaina95@gmail.com",gender:"f"},
                    {name:"Lyes Ousaid Metref",email:"metreflyes@yahoo.com",gender:"M"},
                    {name:"RamzEddine Mokrani",email:"ramzipropulsion@hotmail.com",gender:"M"},
                    {name:"Oussama Bouchedda",email:"oussama.bouchedda@gmail.com",gender:"M"},
                    {name:"Keltoum Boumerdassi",email:"besmaboumerdassi@gmail.com",gender:"F"},
                    {name:"Ahlem Mokhtari",email:"ahlem.propulsion@gmail.com",gender:"F"},
                    {name:"Nardjess Deradj",email:"nardjessdra@gmail.com",gender:"F"},
                    {name:"Moussa Lamamra",email:"moussalamamra@gmail.com",gender:"M"},
                    {name:"Said Nadji",email:"1994tiaret@gmail.com",gender:"M"}
                ]
            },
            {
                university:"El-Oued",
                team:"",
                img_url:"http://placehold.it/750x950",
                univ_url:"http://univ-eloued.dz",
                rocket_name:"",
                prof:[
                    {name:"Sofiane Magdoud", email:"#"},
                    {name:"Ali Boukhari", email:"#"}
                ],
                members:[
                    {name:"Badreddine Behir",email:"behirbadreddine@gmail.com",gender:"M"},
                    {name:"Khaireddine Zahouani",email:"khaireddine093@gmail.com",gender:"M"}
                ]
            },
            {
                university:"USTHB",
                team:"",
                img_url:"http://placehold.it/750x950",
                univ_url:"http://usthb.dz",
                rocket_name:"",
                prof:[
                    {name:"Krimo Azouaoui", email:"#"}
                ],
                members:[
                    {name:"Ramdane Amrouche",email:"ramdan.amrouche@gmail.com",gender:"M"},
                    {name:"Rachid Dehana",email:"rachid.dehana@gmail.com",gender:"M"},
                    {name:"Mehdi Moughdad",email:"mehdiemorix@gmail.com",gender:"M"},
                    {name:"Zineb Aboub",email:"germanyfarah@gmail.com",gender:"F"},
                    {name:"Abdelghafour Badjadi",email:"badjadi.abdelghafour@gmail.com",gender:"M"}
                ]
            },
            {
                university:"ENP-team1",
                team:"",
                img_url:"http://placehold.it/750x950",
                univ_url:"http://enp.edu.dz",
                rocket_name:"",
                prof:[
                    {name:"Said Rechak", email:"#"},
                    {name:"Arezki Smaili", email:"#"}
                ],
                members:[
                    {name:"Aichouche Hichem",email:"hichame.ninou@gmail.com",gender:"M"},
                    {name:"Ayadi Ahmed",email:"ayadi.ahmed17@hotmail.com",gender:"M"},
                    {name:"Badaoui Salah-eddine",email:"salaheddinebadaoui@hotmail.com",gender:"M"},
                    {name:"Bakou Mounir",email:"bakoumounir94@gmail.com",gender:"M"},
                    {name:"Belouahad Seif-eddine",email:"sbelouahad@yahoo.fr",gender:"M"},
                    {name:"Bendali Younes",email:"bendaliyounes@gmail.com",gender:"M"},
                    {name:"Bendimerad Rafid",email:"s.ashitaka@yahoo.fr",gender:"M"},
                    {name:"Boughachiche Kheireddine",email:"bough.kheiereddine@hotmail.com",gender:"M"},
                    {name:"Brahiti Mehdi",email:"brahiti.mehdi@outlook.com",gender:"M"},
                    {name:"El Hafaia Malik",email:"malik_94@live.fr",gender:"M"},
                    {name:"Guediri Aymen",email:"aymenislam86@gmail.com",gender:"M"},
                    {name:"Moussaoui Amar",email:"nel3ab.m3ak@gmail.com",gender:"M"},
                    {name:"Kourta Amine",email:"akourta@gmail.com",gender:"M"},
                    {name:"Khaldi Hakim",email:"chezabdelhakim.khaldi@gmail.com",gender:"M"},
                    {name:"Lakache Yahia",email:"akourta@outlook.com",gender:"M"},
                    {name:"MErmouli Salah-eddine",email:"s.mermouli@gmail.com",gender:"M"},
                    {name:"Safsaf Okba",email:"okba.foufou@hotmail.com",gender:"M"},
                    {name:"Yousri Amrouche",email:"",gender:"M"}
                ]
            },
            {
                university:"ENP-team2",
                team:"",
                img_url:"http://placehold.it/750x950",
                univ_url:"http://enp.edu.dz",
                rocket_name:"",
                prof:[
                    {name:"Said Rechak", email:"#"},
                    {name:"Arezki Smaili", email:"#"}
                ],
                members:[
                    {name:"Bouchra Boudaa",email:"ikrameboudaa@gmail.com",gender:"F"},
                    {name:"Dounia Benbarek",email:"dadou.ben.95@gmail.com",gender:"F"},
                    {name:"Yamina Sahli",email:"sahliamina3112@gmail.com",gender:"F"},
                    {name:"Ramzi Ladaycia",email:"ramziladaycia@outlook.fr",gender:"M"},
                    {name:"Hamza Hebhoub",email:"hamza.hebhoub@g.enp.edu.dz",gender:"M"},
                    {name:"Zohir Slamani",email:"z.slamani@epsta.dz",gender:"M"},
                    {name:"Essaid Alouani",email:"alouaniessaid@gmail.com",gender:"M"},
                    {name:"Ghiles Demri",email:"ghiles.demri@g.enp.edu.dz",gender:"M"},
                    {name:"Youghrta Chelabi",email:"y.chelabi@epsta.dz",gender:"M"},
                    {name:"Khaled Latreche",email:"latreche.khaled.tintin@gmail.com",gender:"M"},
                    {name:"Boughachiche Kheireddine",email:"bough.kheiereddine@hotmail.com",gender:"M"},
                    {name:"Mohamed Amokrane Boumzou",email:"boumzou0@gmail.com",gender:"M"},
                    {name:"Ismail Bouchelagham",email:"bsmailislam@gmail.com",gender:"M"},
                    {name:"Yahia Tegeggaghine",email:"yahia.tizeggaghine@gmail.com",gender:"M"}
                ]
            }

        ];

        var blog = [
            {
            title:"1st inter-university rocketry competition",
            date:"16 April 2017",
            autor:"Abdel-Kader Kherrat - ",
            subject:"general subjects",
            exerpt:"Inter-university competitions are very well-developed and well-established extracurricular activities in Europe and North America. These activities develop the ability of students to carry out a project and put into practice their acquired academic knowledge. They will bring an extraordinary experience to the students and they will come out with a rather impressive background of theoretical and practical knowledge.We would like to bring these same enriching experiences to our students in Algeria. (click to expand)",
            texts:[
                {paragraph:"A competition initiative for designing an amateur rocket with an unloading system has been launched and in a very short time, no fewer than 10 teams have been formed across the Oran, Bel Abbes, Blida, Algiers, Constantine, Biskra and El Oued.They want to measure themselves among themselves and demonstrate their genius acquired through the academic years.The enthusiasm of a hundred students translates into hours and hours even at late hours that more than half of them, this activity does not even fit into their academic activity. It is the motivation that fuels their efforts and the taste to compete with their colleagues in other universities."},
                {paragraph:"My Iphone vibrates incessantly at late hours often after midnight which proves this thirst for success and motivation towards this kind of activity. A mini survey conducted recently with the students summed up this enthusiasm at this scientific event. All students are unanimous about the need to conduct inter-university competitions across the country. They stressed and learned the strength to work as a team and that is the key to success. Here below some comments"},
                {paragraph:"This competition will reinforce 4 themes which are the pillars of a typical activity of engineering and product development: Design, Realization, Test validation and Security"},
                {paragraph:"This competition will be organized at the Institute of Aeronautics and Space Studies of Blida in September 2017. We wish our students an excellent and cordial Competition. Hoping that others"}
            ],
            comments:[
                {text:"This competition is about real engineering emersion work. It is such a talent-development modeler for young students who need to believe they can be world-class Engineers, who can have unlimited fun with leading-edge technologies as long as no compromise is tolerated with ethical questions when it comes to it. I wish I had a chance like them during my time (1987-1992) as a thirsty student at USTHB",
                autor:"Saïd Sadouk, P.Eng., M.A.Sc. Bombardier Aéronautique, Canada", 
                date:"16-04-2017"},
                {text:"Bonjour monsieur , au sujet de ce genre d'activité oui pour ma part je trouve que c'est une excellente initiative elle permet d'enrichir nos connaissances et d'acquérir de nouvelles compétences et j'espère que c'est juste un debut . ",
                autor:"Nabil Moussi, Ecole Polytechnique de Constantine (ENPC)", 
                date:"16-04-2017"},
                {text:"Bonjour Mr KHERRAT , je suis Malik ELHAFAIA membre de la première équipe de l'école nationale polytechnique. D'abord je voudrais vous dire que j'adhère totalement  à ce concept de compétition qui permet de nous initier au domaine de l'aérospatiale et j'aimerai bien qu’aux futurs il y est plus d'activité de ce genre. Ce que j'aime le plus c'est votre disponibilité et la disponibilité de votre équipe qui nous sont d'une grande aide. En ce qui concerne l’amélioration, si je peux me permettre j'ai trouvé qu'il y a des documents dans la documentation que vous avez mise dans le drive  qui sont assez vaste et pas évident à traiter et en plus c'est en anglais. Comme je n’ai pas l'habitude de travailler avec des documents en anglais j'ai trouvé quelques difficultés dans certains documents.",
                autor:"Malik ElHaifaia, ENPC", 
                date:"16-04-2017"},
                {text:"Réalisation et Fabrication d’une Fusée !!! C’est nouveau en Algérie ;  pour moi le Nouveau c’est  l’excitation de l'esprit scientifique. Je suis vraiment heureux d'en faire partie du groupe. Merci pour votre aide précieuse et aussi un grand merci à monsieur Boukehili Hychem",
                autor:"Ahmed Gaid Othmane, ENPC", 
                date:"16-04-2017"},
                {text:"SLM .. Oui j'aime beaucoup ce genre d'activité bien sur ... Et je veux participer l'année prochaine aussi c'est un travail qui nous aide dans Notre cursus en tant qu'ingénieur ... Salutation cheikh et merci pour l ‘encouragement.",
                autor:"El Bachir Belayadi, ENPC,", 
                date:"16-04-2017"},
                {text:"Salam 3laykom...premièrement bonne jour monsieur j'espère que vous allez bien...à mon avis je pense que nous allons apprendre beaucoup d'information de ta part sachant que votre expérience, Deuxième la compétition c'est la meilleure méthode que vous pouvez choisir la bonne qualité et le meilleur travail, finalement c'est un sujet trés trés intéressant et j'ai de l'honneur de travailler sur elle...Salam”",
                autor:"Yakoub Damous, ENPC", 
                date:"16-04-2017"},
                {text:"Bonjour Mr kherat, Oui j'aime bien ce genre d’activités et nchalahh cette étude peuvent nous aider à apprendre du nouveau",
                autor:"Ramzi Laydacia, Ecole Nationale Polytechnique El Harrach", 
                date:"16-04-2017"},
                {text:"Bonsoir monsieur kherrat Je pense que cette compétition est une très bonne expérience pour nous étudiants, car elle nous permet d'apprendre énormément .pas seulement l'aspect technique qui est directement en relation avec le thème du projet, mais elle nous apprend aussi à travailler en groupe, à gérer les différentes taches, communiquer ...... Je pense que cette aussi compétition est une bonne chose pour notre pays car elle permettra certainement de développer l’aéronautique en Algérie",
                autor:"Mehdi Brahiti, Ecole Polytechnique El harrach", 
                date:"16-04-2017"},
                {text:"bonjour monsieur pour moi monsieur qui dit jeunese dit curiosité dit l'amour de l’ambiguïté; l'innovation; la création la volonté de fer. Cette compétition c'est une porte ou bien une opportunité ou on peut exploiter nos compétences ou on peut mettre en oeuvre nos connaissances. C'est ce que je pense merci beaucoup",
                autor:"Moussa Lamara, Institut d’aéronautique et études spatiales de Blida", 
                date:"16-04-2017"},
                {text:"Moi j'aime ce genre de compétition j'aime fréquenter les étudiants et les professeurs pour savoir encore plus des aidés dans le domaine mais malheureusement dans notre universités y a pas  ce genre de motivation",
                autor:"Ramdane Amrouche, USTHB", 
                date:"16-04-2017"},
                {text:"Concernant votre sondage, je vous affirme que je suis heureux d'avoir une telle chance de participé a cette compétition, et pour améliorer la concurrence, à mon avis il suffira de d'augmenté un peu la valeur des prix et si possible d'offrir au gagnant un voyage pour l'une des destinations suivante : pays bas, Norvège, Danemark, ou la Suède. Je pense que par cette dernière vous allez les encourager",
                autor:"Mohammed El Fatih, USTO", 
                date:"16-04-2017"},
                {text:"Chèr monsieur Abdelkader; je suis un membre du club scientifique Abbas ibn firnas a l’université de IGCMO je me pressente bedjaoui lahouari master 1 fabrication mécanique et productique ,en nom du club ce genre d’activité est intéressante et le concours convient à nos ambitions on a aimé l'organisation du concours ,les objectif a réaliser son Accessible à tous et en fera tout notre possible pour réaliser et atteindre notre but,part contre j'ai préféré que la recompose du gagnant sera sois une place en seine d'une entreprise étrangère dans le domaine aéronautique ou bien un stage pour améliorer notre niveau en seine d'un grand entreprise étrangère. en vous remerciant je vous prie d'agrée Monsieur mes salutation distinguées ",
                autor:"Houari Bedjaoui, USTO", 
                date:"16-04-2017"}

            ]
        }
        ];
})();