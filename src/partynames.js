var partyNames = [
    {"abbreviation" : "BJP", "party": "Bharatiya Janata Party"},
    {"abbreviation" : "BSP", "party": "Bahujan Samaj Party"},
    {"abbreviation" : "CPI", "party": "Communist Party of India"},
    {"abbreviation" : "CPM", "party": "Communist Party of India (Marxist)"},
    {"abbreviation" : "INC", "party": "Indian National Congress"},
    {"abbreviation" : "NCP", "party": "Nationalist Congress Party"},
    {"abbreviation" : "RJD", "party": "Rashtriya Janata Dal"},
    {"abbreviation" : "AC", "party": "Arunachal Congress"},
    {"abbreviation" : "ADMK", "party": "All India Anna Dravida Munnetra Kazhagam"},
    {"abbreviation" : "AGP", "party": "Asom Gana Parishad"},
    {"abbreviation" : "AIFB", "party": "All India Forward Bloc"},
    {"abbreviation" : "AITC", "party": "All India Trinamool Congress"},
    {"abbreviation" : "AUDF", "party": "Assam United Democratic Front"},
    {"abbreviation" : "BJD", "party": "Biju Janata Dal"},
    {"abbreviation" : "DMK", "party": "Dravida Munnetra Kazhagam"},
    {"abbreviation" : "INLD", "party": "Indian National Lok Dal"},
    {"abbreviation" : "JD(S)", "party": "Janata Dal (Secular)"},
    {"abbreviation" : "JD(U)", "party": "Janata Dal (United)"},
    {"abbreviation" : "JKN", "party": "Jammu & Kashmir National Conference"},
    {"abbreviation" : "JKNPP", "party": "Jammu & Kashmir National Panthers Party"},
    {"abbreviation" : "JKPDP", "party": "Jammu & Kashmir Peoples Democratic Party"},
    {"abbreviation" : "JMM", "party": "Jharkhand Mukti Morcha"},
    {"abbreviation" : "KEC", "party": "Kerala Congress"},
    {"abbreviation" : "KEC(M)", "party": "Kerala Congress (M)"},
    {"abbreviation" : "LJP", "party": "Lok Jan Shakti Party"},
    {"abbreviation" : "MAG", "party": "Maharashtrawadi Gomantak"},
    {"abbreviation" : "MDMK", "party": "Marumalarchi Dravida Munnetra Kazhagam"},
    {"abbreviation" : "MPP", "party": "Manipur Peoples Party"},
    {"abbreviation" : "MUL", "party": "Muslim League Kerala State Committee"},
    {"abbreviation" : "NPF", "party": "Nagaland Peoples Front"},
    {"abbreviation" : "PMK", "party": "Pattali Makkal Katchi"},
    {"abbreviation" : "RSP", "party": "Revolutionary Socialist Party"},
    {"abbreviation" : "SAD", "party": "Shiromani Akali Dal"},
    {"abbreviation" : "SDF", "party": "Sikkim Democratic Front"},
    {"abbreviation" : "SGF", "party": "Save Goa Front"},
    {"abbreviation" : "SHS", "party": "Shivsena"},
    {"abbreviation" : "SP", "party": "Samajwadi Party"},
    {"abbreviation" : "TDP", "party": "Telugu Desam"},
    {"abbreviation" : "TRS", "party": "Telangana Rashtra Samithi"},
    {"abbreviation" : "UDP", "party": "United Democratic Party"},
    {"abbreviation" : "UKKD", "party": "Uttarakhand Kranti Dal"},
    {"abbreviation" : "ABAS", "party": "Akhil Bharatiya Ashok Sena"},
    {"abbreviation" : "ABCD(A)", "party": "Akhil Bharatiya Congress Dal (Ambedkar)"},
    {"abbreviation" : "ABDBM", "party": "Akhil Bharatiya Desh Bhakt Morcha"},
    {"abbreviation" : "ABHKP", "party": "Akhil Bharatiya Hind Kranti Party"},
    {"abbreviation" : "ABHM", "party": "Akhil Bharat Hindu Mahasabha"},
    {"abbreviation" : "ABJP", "party": "All India Bharti Jug Party"},
    {"abbreviation" : "ABJS", "party": "Akhil Bharatiya Jan Sangh"},
    {"abbreviation" : "ABKMM", "party": "Akhil Bharatiya Kisan Mazdoor Morcha"},
    {"abbreviation" : "ABLTP", "party": "Akhil Bharatiya Loktantra Party"},
    {"abbreviation" : "ABMP", "party": "Akhil Bhartiya Manavata Paksha"},
    {"abbreviation" : "ABMSD", "party": "Akhil Bharatiya Manav Seva Dal"},
    {"abbreviation" : "ABMSKP", "party": "Akahand Bharat Maha Sangh Sarvahara Krantikari Party"},
    {"abbreviation" : "ABP", "party": "Ambedkarbadi Party"},
    {"abbreviation" : "ABRS", "party": "Akhil Bharatiya Rajarya Sabha"},
    {"abbreviation" : "ABSR", "party": "Akhil Bharatiya Shivsena Rashtrawadi"},
    {"abbreviation" : "ABSSP", "party": "Akhil Bhartiya Sindhu Samajwadi Party"},
    {"abbreviation" : "ACNC", "party": "A-Chik National Congress(Democratic)"},
    {"abbreviation" : "AD", "party": "Apna Dal"},
    {"abbreviation" : "ADSMK", "party": "Anaithindia Dravidar Samudaya Munnetra Kazhagam"},
    {"abbreviation" : "ADSP", "party": "Aadivasi Sena Party"},
    {"abbreviation" : "AIBS", "party": "All India Bahujan Samman Party"},
    {"abbreviation" : "AIC", "party": "Advait Ishwasyam Congress"},
    {"abbreviation" : "AIDWC", "party": "All India Dalit Welfare Congress"},
    {"abbreviation" : "AIFB(S)", "party": "All India Forward Bloc (Subhasist)"},
    {"abbreviation" : "AIJMK", "party": "Akhila India Jananayaka Makkal Katchi (Dr. Issac)"},
    {"abbreviation" : "AIMF", "party": "All India Minorities Front"},
    {"abbreviation" : "AIMIM", "party": "All India Majlis-E-Ittehadul Muslimeen"},
    {"abbreviation" : "AIRP", "party": "All India Raksha Party"},
    {"abbreviation" : "AIVP", "party": "Akila India Vallalar Peravai"},
    {"abbreviation" : "AJBP", "party": "Ajeya Bharat Party"},
    {"abbreviation" : "AJSP", "party": "Alpjan Samaj Party"},
    {"abbreviation" : "AJSUP", "party": "AJSU Party"},
    {"abbreviation" : "AMB", "party": "Amra Bangalee"},
    {"abbreviation" : "ANC", "party": "Ambedkar National Congress"},
    {"abbreviation" : "AP", "party": "Awami Party"},
    {"abbreviation" : "APRD", "party": "Ambedkar Pragatisheel Republican Dal"},
    {"abbreviation" : "ARP", "party": "Ambedkarist Republican Party"},
    {"abbreviation" : "ARWP", "party": "Akhil Rashtrawadi Party"},
    {"abbreviation" : "ASDC", "party": "Autonomous State Demand Committee"},
    {"abbreviation" : "ASP", "party": "Ambedkar Samaj Party"},
    {"abbreviation" : "AWD", "party": "Adarshwadi Dal"},
    {"abbreviation" : "BAP", "party": "Bundelkhand Akikrit Party"},
    {"abbreviation" : "BBM", "party": "Bharipa Bahujan Mahasangha"},
    {"abbreviation" : "BBP", "party": "Bharatiya Backward Party"},
    {"abbreviation" : "BCDP", "party": "Backward Classes Democratic Party, J&K"},
    {"abbreviation" : "BCP", "party": "Bhartiya Chaitanya Party"},
    {"abbreviation" : "BCUF", "party": "B. C. United Front"},
    {"abbreviation" : "BD", "party": "Bharat Dal"},
    {"abbreviation" : "BDBP", "party": "Bhartiya Deshbhakt Party"},
    {"abbreviation" : "BEP", "party": "Bharatiya Eklavya Party"},
    {"abbreviation" : "BGD", "party": "Bharatiya Grameen Dal"},
    {"abbreviation" : "BGTD", "party": "Bharatiya Gaon Taj Dal"},
    {"abbreviation" : "BHBP", "party": "Bharatiya Bahujan Party"},
    {"abbreviation" : "BHC", "party": "Bhartiya Congress (M)"},
    {"abbreviation" : "BHJAP", "party": "Bhartiya Jagran Party"},
    {"abbreviation" : "BHPD", "party": "Bharatiya Pichhra Dal"},
    {"abbreviation" : "BHPP", "party": "Bharatiya Peoples Party"},
    {"abbreviation" : "BHSASP", "party": "Bharatheeya Sadharma Samsthapana Party"},
    {"abbreviation" : "BJBCD", "party": "Bharatiya Jan Berojgar Chhatra Dal"},
    {"abbreviation" : "BJBP", "party": "Bharatiya Jai Bheem Party"},
    {"abbreviation" : "BJJD", "party": "Bharatiya Jantantrik Janta Dal"},
    {"abbreviation" : "BJKD", "party": "Bharatiya Jan Kranti Dal (Democratic)"},
    {"abbreviation" : "BJKVP", "party": "Bajjikanchal Vikas Party"},
    {"abbreviation" : "BJSH", "party": "Bharatiya Jan Shakti"},
    {"abbreviation" : "BJTP", "party": "Bharatiya Jantantrik Parishad"},
    {"abbreviation" : "BKLJP", "party": "Bharat Ki Lok Jimmedar Party"},
    {"abbreviation" : "BLKD", "party": "Bharatiya Lok Kalyan Dal"},
    {"abbreviation" : "BLPGL", "party": "Bharatiya Loktantrik Party(Gandhi-Lohiawadi)"},
    {"abbreviation" : "BMF", "party": "Bharatiya Momin Front"},
    {"abbreviation" : "BMM", "party": "Bundelkhand Mukti Morcha"},
    {"abbreviation" : "BMSM", "party": "Bharatiya Minorities Suraksha Mahasangh"},
    {"abbreviation" : "BNJD", "party": "Bharatiya Natiional Janta Dal"},
    {"abbreviation" : "BNRP", "party": "Bharatiya Nagrik Party"},
    {"abbreviation" : "BOP", "party": "Bira Oriya Party"},
    {"abbreviation" : "BOPF", "party": "Bodaland Peoples Front"},
    {"abbreviation" : "BPC", "party": "Bhartiya Pragatisheel Congress"},
    {"abbreviation" : "BPD", "party": "Bharat Punarnirman Dal"},
    {"abbreviation" : "BPJP", "party": "Bharatiya Praja Paksha"},
    {"abbreviation" : "BREM", "party": "Bahujan Republican Ekta Manch"},
    {"abbreviation" : "BRM", "party": "Bharatiya Rashtriya Morcha"},
    {"abbreviation" : "BRP", "party": "Bharatiya Rashtravadi Paksha"},
    {"abbreviation" : "BRPP", "party": "Bharatiya Republican Paksha"},
    {"abbreviation" : "BSA", "party": "Bahujan Shakty"},
    {"abbreviation" : "BSC", "party": "Bharathiya Sahayog Congress"},
    {"abbreviation" : "BSD", "party": "Bharatiya Samaj Dal"},
    {"abbreviation" : "BSK", "party": "Bharatiya Sarvkalayan Kranti Dal"},
    {"abbreviation" : "BSKP", "party": "Bharatiya Sarvodaya Kranti Party"},
    {"abbreviation" : "BSKPB", "party": "Bharatiya Samaj Kalyan Party Bharat"},
    {"abbreviation" : "BSKRP", "party": "Bharatiya Sampuran Krantikari Party"},
    {"abbreviation" : "BSP(AP)", "party": "Bahujan Samaj Party(Ambedkar-Phule)"},
    {"abbreviation" : "BSP(K)", "party": "Bahujan Sangharsh Party (Kanshiram)"},
    {"abbreviation" : "BSRD", "party": "Bharatiya Subhash Sena"},
    {"abbreviation" : "BSSP", "party": "Bharatiya Sadbhawna Samaj Party"},
    {"abbreviation" : "BSSPA", "party": "Bharatiya Samta Samaj Party"},
    {"abbreviation" : "BUDM", "party": "Bharat Uday Mission"},
    {"abbreviation" : "BUM", "party": "Bahujan Uday Manch"},
    {"abbreviation" : "BVA", "party": "Bahujan Vikas Aaghadi"},
    {"abbreviation" : "BVM", "party": "Bharat Vikas Morcha"},
    {"abbreviation" : "BVP", "party": "Bahujan Vikas Party"},
    {"abbreviation" : "BVVP", "party": "Buddhiviveki Vikas Party"},
    {"abbreviation" : "CDF", "party": "Christian Democratic Front"},
    {"abbreviation" : "CGVP", "party": "Chhattisgarh Vikas Party"},
    {"abbreviation" : "CPI(ML)(L)", "party": "Communist Party of India (Marxist-Leninist) (Liberation)"},
    {"abbreviation" : "CSP", "party": "Chhattisgarhi Samaj Party"},
    {"abbreviation" : "DBP", "party": "Desh Bhakt Party"},
    {"abbreviation" : "DBSP", "party": "Democratic Bharatiya Samaj Party"},
    {"abbreviation" : "DCP", "party": "Democratic Congress Party"},
    {"abbreviation" : "DESEP", "party": "Democratic Secular Party"},
    {"abbreviation" : "DGPP", "party": "Duggar Pradesh Party"},
    {"abbreviation" : "DMDK", "party": "Desiya Murpokku Dravida Kazhagam"},
    {"abbreviation" : "DPI", "party": "Democratic Party of India"},
    {"abbreviation" : "DPK", "party": "Desia Pathukappu Kazhagam"},
    {"abbreviation" : "EKSP", "party": "Eklavya Samaj Party"},
    {"abbreviation" : "FCI", "party": "Federal Congress of India"},
    {"abbreviation" : "GGP", "party": "Gondvana Gantantra Party"},
    {"abbreviation" : "GMS", "party": "Gondwana Mukti Sena"},
    {"abbreviation" : "GRIP", "party": "Great India Party"},
    {"abbreviation" : "HDVP", "party": "Hind Vikas Party"},
    {"abbreviation" : "HJCBL", "party": "Haryana Janhit Congress (BL)"},
    {"abbreviation" : "HJP", "party": "Hindustan Janta Party"},
    {"abbreviation" : "HSPDP", "party": "Hill State People's Democratic Party"},
    {"abbreviation" : "IBSP", "party": "Indian Bahujan Samajwadi Party"},
    {"abbreviation" : "ICSP", "party": "Indian Christian Secular Party"},
    {"abbreviation" : "IJP", "party": "Indian Justice Party"},
    {"abbreviation" : "IPFB", "party": "Indian People's Forward Block"},
    {"abbreviation" : "IPP", "party": "Indian Peace Party"},
    {"abbreviation" : "IUML", "party": "Indian Union Muslim League"},
    {"abbreviation" : "IVD", "party": "Inqalab Vikas Dal"},
    {"abbreviation" : "JANS", "party": "Jaganmay Nari Sangathan"},
    {"abbreviation" : "JBP", "party": "Jai Bharat Party"},
    {"abbreviation" : "JBSP", "party": "Jai Bharat Samanta Party"},
    {"abbreviation" : "JCGP", "party": "Jai Chhattisgarh Party"},
    {"abbreviation" : "JCP", "party": "Jan Chetna Party"},
    {"abbreviation" : "JDP", "party": "Jharkhand Disom Party"},
    {"abbreviation" : "JGP", "party": "Jago Party"},
    {"abbreviation" : "JHJAM", "party": "Jharkhand Janadikhar Manch"},
    {"abbreviation" : "JHJM", "party": "Jharkhand Jan Morcha"},
    {"abbreviation" : "JHKP", "party": "Jana Hitkari Party"},
    {"abbreviation" : "JJ", "party": "Jebamani Janata"},
    {"abbreviation" : "JJJKMC", "party": "Jai Jawan Jai Kisan Mazdoor Congress"},
    {"abbreviation" : "JKANC", "party": "Jammu & Kashmir Awami National Conference"},
    {"abbreviation" : "JKD", "party": "Jan Ekta Dal"},
    {"abbreviation" : "JKM", "party": "Jawan Kisan Morcha"},
    {"abbreviation" : "JKP", "party": "Jharkhand Party"},
    {"abbreviation" : "JKP(N)", "party": "Jharkhand Party (Naren)"},
    {"abbreviation" : "JKPP", "party": "Jharkhand People's Party"},
    {"abbreviation" : "JM", "party": "Jan Morcha"},
    {"abbreviation" : "JP", "party": "Janata Party"},
    {"abbreviation" : "JPC", "party": "Jammu & Kashmir People Conference"},
    {"abbreviation" : "JPS", "party": "Janvadi Party(Socialist)"},
    {"abbreviation" : "JSP", "party": "Jansatta Party"},
    {"abbreviation" : "JSS", "party": "Jan Surajya Shakti"},
    {"abbreviation" : "JUP", "party": "Janata Uday Party"},
    {"abbreviation" : "JVD", "party": "Jharkhand Vikas Dal"},
    {"abbreviation" : "JVM", "party": "Jharkhand Vikas Morcha (Prajatantrik)"},
    {"abbreviation" : "KCVP", "party": "Kannada Chalavali Vatal Paksha"},
    {"abbreviation" : "KDC", "party": "Kamarajar Deseeya Congress"},
    {"abbreviation" : "KKJHS", "party": "Kranti Kari Jai Hind Sena"},
    {"abbreviation" : "KM", "party": "Krantisena Maharashtra"},
    {"abbreviation" : "KNMK", "party": "Kongu Nadu Munnetra Kazhagam"},
    {"abbreviation" : "KOKD", "party": "Kosal Kranti Dal"},
    {"abbreviation" : "KS", "party": "Kalinga Sena"},
    {"abbreviation" : "KSVP", "party": "Krantikari Samyavadi Party"},
    {"abbreviation" : "KTMK", "party": "Karnataka Thamizhar Munnetra Kazhagam"},
    {"abbreviation" : "KVSP", "party": "Kosi Vikas Party"},
    {"abbreviation" : "LB", "party": "Lok Bharati"},
    {"abbreviation" : "LBP", "party": "Lok Bhalai Party"},
    {"abbreviation" : "LD", "party": "Lok Dal"},
    {"abbreviation" : "LJVM", "party": "Lok Jan Vikas Morcha"},
    {"abbreviation" : "LKJP", "party": "Loktanrik Janata Party (Secular)"},
    {"abbreviation" : "LKSGM", "party": "Loksangram"},
    {"abbreviation" : "LKSP", "party": "Loktanrik Sarkar Party"},
    {"abbreviation" : "LM", "party": "Lal Morcha"},
    {"abbreviation" : "LPSP", "party": "Lokpriya Samaj Party"},
    {"abbreviation" : "LSP", "party": "Lok Satta Party"},
    {"abbreviation" : "LSVP", "party": "Laghujan Samaj Vikas Party"},
    {"abbreviation" : "LSWP", "party": "Loktantrik Samajwadi Party"},
    {"abbreviation" : "LTSD", "party": "Loktantrik Samata Dal"},
    {"abbreviation" : "LVKP", "party": "Lok Vikas Party"},
    {"abbreviation" : "MADP", "party": "Moulik Adhikar Party"},
    {"abbreviation" : "MAMAK", "party": "Manithaneya Makkal Katchi"},
    {"abbreviation" : "MANP", "party": "Mana Party"},
    {"abbreviation" : "MAP", "party": "Mahila Adhikar Party"},
    {"abbreviation" : "MB(S)P", "party": "Mool Bharati (S) Party"},
    {"abbreviation" : "MBP", "party": "Matra Bhakta Party"},
    {"abbreviation" : "MC", "party": "Momin Conference"},
    {"abbreviation" : "MCO", "party": "Marxist Co-Ordination"},
    {"abbreviation" : "MCPI(S)", "party": "Marxist Communist Party of India (S.S. Srivastava)"},
    {"abbreviation" : "MD", "party": "Mahan Dal"},
    {"abbreviation" : "MDP", "party": "Meghalaya Democratic Party"},
    {"abbreviation" : "MJP", "party": "Mahagujarat Janta Party"},
    {"abbreviation" : "MKD", "party": "Maidani Kranti Dal"},
    {"abbreviation" : "MKUP", "party": "Majdoor Kisan Union Party"},
    {"abbreviation" : "MMKA", "party": "Makkal Manadu Katchi"},
    {"abbreviation" : "MMM", "party": "Manav Mukti Morcha"},
    {"abbreviation" : "MMUP", "party": "Muslim Majlis Uttar Pradesh"},
    {"abbreviation" : "MNS", "party": "Maharashtra Navnirman Sena"},
    {"abbreviation" : "MOP", "party": "Moderate Party"},
    {"abbreviation" : "NBNP", "party": "Navbharat Nirman Party"},
    {"abbreviation" : "NDEP", "party": "National Development Party"},
    {"abbreviation" : "NDPF", "party": "National Democratic Peoples Front"},
    {"abbreviation" : "NELU", "party": "Nelopa(United)"},
    {"abbreviation" : "NLHP", "party": "National Lokhind Party"},
    {"abbreviation" : "NLP", "party": "National Loktantrik Party"},
    {"abbreviation" : "NMK", "party": "Namadhu Makkal Katchi"},
    {"abbreviation" : "NSCP", "party": "National Secular Party"},
    {"abbreviation" : "NSSP", "party": "Niswarth Sewa Party"},
    {"abbreviation" : "NYP", "party": "National Youth Party"},
    {"abbreviation" : "OMM", "party": "Orissa Mukti Morcha"},
    {"abbreviation" : "PBHP", "party": "Praja Bharath Party"},
    {"abbreviation" : "PDA", "party": "People's Democratic Alliance"},
    {"abbreviation" : "PDF", "party": "People's Democratic Front"},
    {"abbreviation" : "PDFO", "party": "People's Democratic Forum"},
    {"abbreviation" : "PDS", "party": "Party for Democratic Socialism"},
    {"abbreviation" : "PECP", "party": "Peace Party"},
    {"abbreviation" : "PG", "party": "Peoples Guardian"},
    {"abbreviation" : "PKMK", "party": "Pachai Kudi Makkal Katchi"},
    {"abbreviation" : "PLP", "party": "Punjab Labour Party"},
    {"abbreviation" : "PMSP", "party": "Pragatisheel Manav Samaj Party"},
    {"abbreviation" : "PNK", "party": "Puthiya Needhi Katchi"},
    {"abbreviation" : "PPA", "party": "People's Party of Arunachal"},
    {"abbreviation" : "PPIS", "party": "Peoples Party of India(secular)"},
    {"abbreviation" : "PPOI", "party": "Pyramid Party of India"},
    {"abbreviation" : "PRAP", "party": "Praja Rajyam Party"},
    {"abbreviation" : "PRBD", "party": "Purvanchal Rajya Banao Dal"},
    {"abbreviation" : "PRBP", "party": "Peoples Republican Party"},
    {"abbreviation" : "PRCP", "party": "Prabuddha Republican Party"},
    {"abbreviation" : "PRPI", "party": "Professionals Party of India"},
    {"abbreviation" : "PRSP", "party": "Prajatantrik Samadhan Party"},
    {"abbreviation" : "PT", "party": "Puthiya Tamilagam"},
    {"abbreviation" : "PTSS", "party": "Proutist Sarva Samaj"},
    {"abbreviation" : "RAD", "party": "Rashtriya Agraniye Dal"},
    {"abbreviation" : "RAJUP", "party": "Rashtriya Janutthan Party"},
    {"abbreviation" : "RALOP", "party": "Rashtriya Lokwadi Party"},
    {"abbreviation" : "RALP", "party": "Rashtrawadi Labour Party"},
    {"abbreviation" : "RASAP", "party": "Rashtriya Sahara Party"},
    {"abbreviation" : "RASD", "party": "Rashtravadi Aarthik Swatantrata Dal"},
    {"abbreviation" : "RASJP", "party": "Rashtriya Janhit Party"},
    {"abbreviation" : "RBCP", "party": "Rashtriya Bahujan Congress Party"},
    {"abbreviation" : "RBD", "party": "Rashtra Bhakt Dal"},
    {"abbreviation" : "RCP", "party": "Rashtravadi Communist Party"},
    {"abbreviation" : "RCPI(R)", "party": "Revolutionary Communist Party of India (Rasik Bhatt)"},
    {"abbreviation" : "RDHP", "party": "Rajyadhikara Party"},
    {"abbreviation" : "RDMP", "party": "Rashtriya Dehat Morcha Party"},
    {"abbreviation" : "RDSD", "party": "Rajasthan Dev Sena Dal"},
    {"abbreviation" : "RGOP", "party": "Rashtriya Gondvana Party"},
    {"abbreviation" : "RJAP", "party": "Rashtriya Janadhikar Party"},
    {"abbreviation" : "RJJM", "party": "Rashtriya Jan-Jagram Morcha"},
    {"abbreviation" : "RJPK", "party": "Rashtriya Janwadi Party (Krantikari)"},
    {"abbreviation" : "RJSD", "party": "Rashtriya Jan Sahay Dal"},
    {"abbreviation" : "RJVP", "party": "Rajasthan Vikas Party"},
    {"abbreviation" : "RKJP", "party": "Rashtriya Krantikari Janata Party"},
    {"abbreviation" : "RKSP", "party": "Rashtriya Krantikari Samajwadi Party"},
    {"abbreviation" : "RLD", "party": "Rashtriya Lok Dal"},
    {"abbreviation" : "RLP", "party": "Rashtriya Lokhit Party"},
    {"abbreviation" : "RMEP", "party": "Rashtriya Mazdoor Ekta Party"},
    {"abbreviation" : "RMGLMP", "party": "Rashtriya Mangalam Party"},
    {"abbreviation" : "RMSP", "party": "Rashtriya Machhua Samaj Party"},
    {"abbreviation" : "RND", "party": "Rashtriya Naujawan Dal"},
    {"abbreviation" : "RNSP", "party": "Rajya Nojawan Shakti Party"},
    {"abbreviation" : "RP(K)", "party": "Republican Paksha (Khoripa)"},
    {"abbreviation" : "RPC(S)", "party": "Rashtriya Praja Congress (Secular)"},
    {"abbreviation" : "RPI", "party": "Republican Party of India"},
    {"abbreviation" : "RPI(A)", "party": "Republican Party of India (A)"},
    {"abbreviation" : "RPI(D)", "party": "Republican Party of India (Democratic )"},
    {"abbreviation" : "RPI(KH)", "party": "Republican Party of India (Khobragade)"},
    {"abbreviation" : "RPIE", "party": "Republician Party of India Ektawadi"},
    {"abbreviation" : "RPP", "party": "Rashtriya Pragati Party"},
    {"abbreviation" : "RPPI", "party": "Republican Presidium Party of India"},
    {"abbreviation" : "RRD", "party": "Rashtriya Raksha Dal"},
    {"abbreviation" : "RRS", "party": "Rayalaseema Rashtra Samithi"},
    {"abbreviation" : "RSBP", "party": "Rashtriya Swabhimaan Party"},
    {"abbreviation" : "RSMD", "party": "Rashtriya Samanta Dal"},
    {"abbreviation" : "RSP(S)", "party": "Rastriya Samajwadi Party (Secular)"},
    {"abbreviation" : "RSPS", "party": "Rashtriya Samaj Paksha"},
    {"abbreviation" : "RSUPRP", "party": "Rashtriya Surya Prakash Party"},
    {"abbreviation" : "RSWD", "party": "Rashtra Sewa Dal"},
    {"abbreviation" : "RTKP", "party": "Rashtriya Kranti Party"},
    {"abbreviation" : "RVNP", "party": "Rashtravadi Janata Party"},
    {"abbreviation" : "RVP", "party": "Rashtriya Vikas Party"},
    {"abbreviation" : "RWS", "party": "Rashtrawadi Sena"},
    {"abbreviation" : "RWSP", "party": "Rashtrawadi Samaj Party"},
    {"abbreviation" : "RYS", "party": "Rashtriya Yuva Sangh"},
    {"abbreviation" : "SAD(M)", "party": "Shiromani Akali Dal (Amritsar)(Simranjit Singh Mann)"},
    {"abbreviation" : "SAMO", "party": "Samruddha Odisha"},
    {"abbreviation" : "SAP", "party": "Samata Party"},
    {"abbreviation" : "SBSP", "party": "Suheldev Bhartiya Samaj Party"},
    {"abbreviation" : "SGPP", "party": "Sikkim Gorkha Prajatantric Party"},
    {"abbreviation" : "SHRP", "party": "Sikkim Himali Rajya Parishad Party"},
    {"abbreviation" : "SJEP", "party": "Sikkim Jan-Ekta Party"},
    {"abbreviation" : "SJP(R)", "party": "Samajwadi Janata Party (Rashtriya)"},
    {"abbreviation" : "SJTP", "party": "Samajik Jantantrik Party"},
    {"abbreviation" : "SKP", "party": "Sarvodaya Karnataka Paksha"},
    {"abbreviation" : "SLP(L)", "party": "Socialist Party (Lohia)"},
    {"abbreviation" : "SMBHP", "party": "Smast Bhartiya Party"},
    {"abbreviation" : "SSBD", "party": "Shakti Sena (Bharat Desh)"},
    {"abbreviation" : "SSD", "party": "Shoshit Samaj Dal"},
    {"abbreviation" : "STBP", "party": "Swatantra Bharat Paksha"},
    {"abbreviation" : "STPI", "party": "Samajtantric Party of India"},
    {"abbreviation" : "SUSP", "party": "Sunder Samaj Party"},
    {"abbreviation" : "SVPP", "party": "Sardar Vallabhbhai Patel Party"},
    {"abbreviation" : "SVRP", "party": "Shivrajya Party"},
    {"abbreviation" : "SVSP", "party": "Savarn Samaj Party"},
    {"abbreviation" : "SWJP", "party": "Samajwadi Jan Parishad"},
    {"abbreviation" : "SWP", "party": "Swabhimani Paksha"},
    {"abbreviation" : "SWPI", "party": "Swarajya Party Of India"},
    {"abbreviation" : "THPI", "party": "The Humanist Party of India"},
    {"abbreviation" : "TPPP", "party": "Trilinga Praja Pragati Party"},
    {"abbreviation" : "UCPI", "party": "United Communist Party of India"},
    {"abbreviation" : "UGDP", "party": "United Goans Democratic Party"},
    {"abbreviation" : "UMK", "party": "Ulzaipali Makkal Katchy"},
    {"abbreviation" : "UNLP", "party": "United National Loktantrik Party"},
    {"abbreviation" : "UPRP", "party": "Uttar Pradesh Republican Party"},
    {"abbreviation" : "UWF", "party": "United Women Front"},
    {"abbreviation" : "VAJP", "party": "Vanchit Jamat Party"},
    {"abbreviation" : "VCK", "party": "Viduthalai Chiruthaigal Katchi"},
    {"abbreviation" : "VHS", "party": "Vishva Hindustani Sangathan"},
    {"abbreviation" : "VP", "party": "Vikas Party"},
    {"abbreviation" : "VVS", "party": "Vishwa Vikas Sangh"},
    {"abbreviation" : "YFE", "party": "Youth For Equality"},
    {"abbreviation" : "YSP", "party": "Youth And Students Party"},
    {"abbreviation" : "YVP", "party": "Yuva Vikas Party"},
    {"abbreviation" : "IND", "party": "Independent"}
]