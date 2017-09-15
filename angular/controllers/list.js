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
                img_url:"https://lh3.googleusercontent.com/9jcSEBUpL_eDsPODnx4FOoP4VACPNVq8F4LOtPrnldW844SaZe2IZ572a7ur9_BjDQ-bMrnXK5Bq6IpCIV0E5_vyxr6oFSfXTUXRjZaSIK50hd-PBB-32rlFV3LwAXpjpMPBNdsew5ksR_GMv3l9og46tW4_de7YS3JNe_IC9lSthr0SFWS7uLM4uJooEezI9oKG09tysnwsH_QLaMfWhk0ljAbvEXAHQ2JxrJ-eUOxP1FfDvIFY4hwIGE3ELBT7dDkc_vDKTbB8ivdMo1iWr00r33J6M4hHtjAcKx-5ro9e_HL4PYdqtPF6TgmZcYj8Hys5VkvOkhPAClPS5I4XhFFFh7woDCGeR3xiRg3tpvJuUeKR1AQAnv1z47QlYxdrt4aIU7riIFYmoJF2ngikUT6r592GZIGZWiJDdukxCvN_U53--5OmlmW3Mf8ZBouE7RLhX8xI2EWAaGozt1g3uOly1a89emyJ-wh7PLzhUMU45KkoSkh01Wyt87qS4cGU8HPvGd08JVczQah6NYGxlnFjRWBKp6P-6ksyTirv2kfzzGcuDIqnqyYrQY44aGe0AlEi5yit4zgca4shWfNEz3I6dpgkml1xIr6CtoLTpTxxTRNqCY8jvvrj67qrzo7UiUI3xhbLJ2r5zk-wF0B-gRV5UOF6UPnwbgI=w497-h629-no",
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
                img_url:"https://lh3.googleusercontent.com/6FzNwDBJd-8DZAn2c2isd9PcIesP_6R4CA6iPcOkPbJqEwy_KEErUrCaJloPnqYXK4XkAbzmnNFf6sqOZ9vBDllQPFbLDRviC8FrWQ8lENt5ZIBR8d7anTI-Ma85q1r7xH6MLpT8ykwgo6JRsQs5SXNjEddBQwDzW2fBSuUdgMb5ZkckCK8cDAeJ-NVgEzK7MA7go6sfS5RynJiEni-Hfo-5WR5lopuelhx4Yqopw9Q3nyKMRNzn1cUgElZHu6xd2-NJcxY1GLtkfrF3rpuDuP1flbyFa-sIaVB3lh-wGd2SNpcmnVuwRz-XDiVj9_N1OZYEf1AR4-0tidU3DGh11K7XQPMQFYoXsKFruSSHDGuI6N82r7yyuV8vUlPaUHe8slQJDyqZs9CNQJMR96f_SH4iMJ4Cw0WzG9G1z4q_h8KVFUwIFMVjwrlKHBWGdz2PvQhsylFmnghFIx5WddggNFgXGMMRiydYalkCjhW8gx4XQVztCQWIEqbMCRsw6Q2yTQ71x0yO699NYUI8zhvpZ4VhW-ZY0UtygxJRPi3J4BOQiTQkh31up8BKMtiFV2IYJG1AkQkZchD_BLzUAXaXfttWiKzlnTgAjILLh6XrfVNd-OE20mZeW5QpZYZwSSOFdb_5jAD4acCUR5WJ2Z3Dwq0_UJhcEArReB8=w497-h629-no",
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
                img_url:"https://lh3.googleusercontent.com/-FHSvIqOxmeSq_utjnCsUWGj7z9To8_JDeInYDL9JsevVFQ1tWgwGqoe__4v6RrcR3tDKchAxhH7dCGCZVeU9YuMnBSpjDGqR_2hysKMmlaHyZdjOwDTLsPYxvPOi3zQ-3fpa2_fGokA6JNAmFVodJDGm3GcIsk_Es5CwT15Wve6r6Vxh_LQcTD6PhX2kmdX-ssQn6J8QxZv-fMdksaSWRCmD_HwS8LbFYfL4wM_VyXdHGNt3FObSy-dDxGiPuNbiBsjumxizBHBiGgb04HHiwIdj8Rju6-vqye5Ng6NKaHEneMhFcZTJuXsedPEPvHGQV58zz4Kg-roHWjLLqZwLVJr0rRhtdkZnp1BCV_D3wtb9z8icZWj7iykyTNQ7cXcbE8uiC9Z8KTpp_bkmRaW_agQVo12dLvYOKVUb-BOEMp34bSXncDBvMe_hXrEG-S-2zqLFOG62xX2f46LavgztJrdCZUg1-f11AthEvfl_Huk97OfD35kdZLoiWLDT62r7-Dagx25u4r0pHyX69GQXuyM5iXD7SC1c90rPC8wEPj-rtUFl-5lhp9X18yWLCw2AdENWCrQIB7WGrCHa1EVJDpYe1slT3qsrZgMynYn4sd0H_ypLz0qQMd0IL4NG_hgpQ4QQkqTGZNG8iWAK3uSv9vVACWi1c51--c=w497-h629-no",
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
                img_url:"https://lh3.googleusercontent.com/Ip_geUCR5C73CMpC1G2VFqR9rA0gGiAiF1KtQNw2kqniBAlrMyihLxgomT_V8BObUiqB6_xaTiRAhm4dRf4iGGkNuRA6cwyWTGVWLcJ0tmYngD51ZG4uggk1oh1Ui9d_xVh3xF7ubkBpY5nTohrOYZRMOsfqS_BfPBpqKd5-2bWNdLMhnTXMRZeIrbtbN2tJ9i9pwPbtRLP-5zNk1cDaiw4uKLFAb_GCZGabs72DGmWgrOygFPH_DCHu7EvU5yP1kKZC9BrUmfdb3e3eYBkwxFCkAHQXD0VQcSE_QTE4owmoQ1euMjDNKKelvIZCYIGML_TZ3UFz-UxIzPkiTOAVQCOn3_ZurzX4tc9IV7e40U5ESElv8sBiNSR1veXgJYoOPWZkvLhTv_QY3QkZdkx0a94yvfFrcqJ3kBgB32Gb_RvGMmjCzmoSyTlDBhBKevCj9SFV2USfricIhe0jXuiPaYhnwUB20GYoXhpAHApXFyWNZudDzfUFPBbSUV2fCezmSEVSyZQECIaoVHcLGn-8C5js-YrYKkw_WPTKiL03V9uFV_3gk0Mw2akP5FOQ9tgYVCdMIijE0mIfSbDLwlpo3BY-XdFOFZRCV4J382SUox19dqjCKor5HUk_Qu9n34-QHe81MHB_ITUggGxU09MFm7jtzcyHf6k6zD0=w497-h629-no",
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
                img_url:"https://lh3.googleusercontent.com/RL217l-JY2pJM3uYVyEfdoS7N6IljP3hMcdrrqF6z3xzEHJoKWghMeWyghCCaKumgzxAlqmsXCdcq3x53TciPUGHqTzjHghxlH_YUU7t1yZ3w5anIafPnOlWhypHOw65Pmy027D5lfo1CFHIefO6SL2W56Y2l4yOL8TKRpItqVM7POHLs27TRwcwqXQDp8aZoCRzu4Cst8oftbI4grjroTdLZZfGdGB1F9GpBKaciUFQURQqk0X6i_AMg9guV6fVAHMMlxaiQxBjBJnUcDXJlJDF1eroUwsnz1ZQ2LdhNpLNrTmUZSK5XEWEH9BHQnDlq6QjvRmasat_YmGX-RU3XFaEKjrm0gxtlj03RjY8Ar3eeEIgbV9jANaq848Ae9oDRh6uq69Ruv8ifzoGT9yqF155w2f7yKLC_u4qYBCVBpLGQobaOjWub7dIPKNPw2zx1sz9hws1dvQ7hnj_XdcvZtkv9tS0XrNsuhsfVOPp7DF74i01OaMnaq5ImrTGe9UKkYaggPa_hFXrgnSy9T7rZxWFyBgdqQfte27xihA1NfGiLqSEgIiOlurSpn6vVAXAjGV4mT6gwj30lnwzvcgSaTaY7SOaSTzZcYu4e2uLjsiixZRn1TzC9V4WkBfBt_uV4SHm05FhuMZQvhtvIPBbaIOJnaC42cQq6wE=w497-h629-no",
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
                img_url:"https://lh3.googleusercontent.com/reBiHk-RKlgT0C1E7S8ULd5Y0egx4cS28Z84Na63z7Htq1kct4AYsRuu0aeEMe0VsRX4G46P5QV27asJqNlEfQX9aIi9vlHbMDHXQJk9fNszC6CWvgRi151qfCsKjzr3jiBCpRuOBFVMIXvHbK8Q7a9MIi4kkCVk-JTCi86KBQ6Ocs8u7QKv1uQmLflPgqyM5W7-4nmeZ9F4LSi8HNPYQENM9j7lffDBXRw6J4addb_CYfSsBNzLcy3MW5eJYq3Sci6aVLoVj5zSguFLIZXsP9sp8KVQs5JeKoa0JGWQKXZ3XL2eI1-eILSdhU5gMZNa4-QXOacGLtdV94sxpAphskR1gvfjNcPeZo4BujycXBHr923JBpgdoHCnbzo6Ro4p9RqfLh-HJQH34MD8_fTUO2X0YAgSB5lopfD6tV-6n8DIjF8t8FY9NM4zfT9kItsgXvtP_PdLTF6xjDkdslhvTIZSzTeilqVLIkbicPoUFy-8-jBXB9KhvAalIFtDAtEW8iXq527aryu1pOPaVY3i-5pgh4EXXVT8I9u6yjCIMNVvZpBOH7wChNBhEMDt6yLjZyECowBF8IHHgX_s55_nmoZbTE4PNx2lmqkfl1FOzxotnrfYhgNtZMekV8-_Gj3gdAV_BVn3Q5MlgL4pvsEkIcLCCOIc75Bqd-Q=w497-h629-no",
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
                img_url:"https://lh3.googleusercontent.com/I3oFLBjBQrFFRK66RqEjp8hRcaX63CGptI8yPO-tnxn3dm_vpSqxndKRyadBvkPWGgSdi3cvTuQ7d80YNVhgti5njPhGwSXVGIkmDBMH0BmIggsXnBbrF-cRBPtIq0-K_RGvaEiDm3oGorY_E8Q_kgtxReKOMCkauaTXaKS4rAO4IjGCCdGbwKjRhDvS1A0_mrX5d6evHfHPqHwng8EZXsnAw7V0uFB7a1dDyGRgQLR7wo0YOIwjUbpirL9b8cWpF6E9Hrrzouj14mWjnx4meTxzkn535p-OWsp0pi9GJZIcMZ9UVWyqzBW6-bVxjgF77ozLii60uWehbXDGSN84AJ7ieZaGyDrM3hHoUdtFL9d3u5zBDeyEFxutwCJWvQx30i1V3vykkQ1i7mv3SPOBo3v6yn7k9pwOF3_0rvqicQiSMDpjb-aizi1UX10nrlOoKnIO1geY0DkVIltPm6efeaYX8ud6mX6EQeQeZ2VyvCUZtjhGD4m0cZb0QeZS8KdIVAf1yRKqqvZpdAKXd9Ceds1_972FA1zspZulZHgSro03J0Fflclr2s_Z2fqm_5ex_g81WiCJuuq9lY-6Ho8bteyGFxI6dbQvRTOlQnlRBtKV1zMk_-edQx7kI9x5Re3GkBlpwFjRl7Eno53i85wP7ceXWc5OZ3cg24g=w497-h629-no",
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
                img_url:"https://lh3.googleusercontent.com/sTwguU97YOngUn5h4M400m-lnxcCoFuMbItAmuiqOKMS4GW7h-UbQ8Wk_9TmYeEJ62I7cdF-3d3GjF_-rVwPbEZtfhyxePiqKdJBTmDEK-_amOlbTR5zGu9PHuuRtkA4NubiuwPEK7H13X7gQ2n3YRjy4rQjYLbTlPbfVS_4clDNjTzaPAhh5D8tDbRl3HF_NWYi1tICRx739Xl65uWPun_j_JGob1VVHm4J80LnYHt86tMZaHhxjIiW_ht-op7AIcb_r5kyZMcT33Dj_sEuurlpyHV88ARn7xl0FKuLFd_ocw2NFjv6RVA9GLVtXaJfqqMn29fcHi6EMOVzTKX0cfI17B4GHuWoPjWYn-sMsmf666WI06OBnFDBu7tS9_TmxG1rahhIWqlUKgbH5mpbZPD03O0olW9r1MY3JyJcAjRCKQc7dqjPKiEOVZ0gnOOt2NxqMH0CNSDgFpWOv1iIXCNP0kIULrOUJYn3WnNwZjpHAWcjR9-QgfDwClG3foe2bCvj1NRdIBGZaoq4voot0jcIDjOWTr3ZA5nIcrFx7_nvS6bW-VjNLUcwTKoIjt8dQ_LpBtDcmvTQff7TIJrJ6qJS-aUXulW_4NSpOXzs6Gt1s2XkHV0UouYr55XmM6Fm0ynFRD0-1VKvDi6Bd4pQeQbsT2uaF0Hxu-g=w497-h629-no",
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
                img_url:"https://lh3.googleusercontent.com/sTwguU97YOngUn5h4M400m-lnxcCoFuMbItAmuiqOKMS4GW7h-UbQ8Wk_9TmYeEJ62I7cdF-3d3GjF_-rVwPbEZtfhyxePiqKdJBTmDEK-_amOlbTR5zGu9PHuuRtkA4NubiuwPEK7H13X7gQ2n3YRjy4rQjYLbTlPbfVS_4clDNjTzaPAhh5D8tDbRl3HF_NWYi1tICRx739Xl65uWPun_j_JGob1VVHm4J80LnYHt86tMZaHhxjIiW_ht-op7AIcb_r5kyZMcT33Dj_sEuurlpyHV88ARn7xl0FKuLFd_ocw2NFjv6RVA9GLVtXaJfqqMn29fcHi6EMOVzTKX0cfI17B4GHuWoPjWYn-sMsmf666WI06OBnFDBu7tS9_TmxG1rahhIWqlUKgbH5mpbZPD03O0olW9r1MY3JyJcAjRCKQc7dqjPKiEOVZ0gnOOt2NxqMH0CNSDgFpWOv1iIXCNP0kIULrOUJYn3WnNwZjpHAWcjR9-QgfDwClG3foe2bCvj1NRdIBGZaoq4voot0jcIDjOWTr3ZA5nIcrFx7_nvS6bW-VjNLUcwTKoIjt8dQ_LpBtDcmvTQff7TIJrJ6qJS-aUXulW_4NSpOXzs6Gt1s2XkHV0UouYr55XmM6Fm0ynFRD0-1VKvDi6Bd4pQeQbsT2uaF0Hxu-g=w497-h629-no",
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