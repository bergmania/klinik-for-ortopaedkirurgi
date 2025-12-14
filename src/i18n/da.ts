// Danish translations - Klinik for Ortopædkirurgi

// Type definitions for treatments and guides
export interface Treatment {
  title: string;
  slug: string;
  subtitle?: string;
  description: string;
  content: string;
}

export interface TreatmentCategory {
  title: string;
  slug: string;
  description: string;
  content?: string;
  treatments?: Record<string, Treatment>;
}

export interface PatientGuide {
  title: string;
  slug: string;
  subtitle?: string;
  description: string;
  content: string;
}

export const da = {
  // Site metadata
  site: {
    title: "Klinik for Ortopædkirurgi",
    description: "Speciallægepraksis i ortopædkirurgi ved Sinan Said & Jan Beck Mikkelsen i Odense",
    locale: "da-DK",
  },

  // Navigation
  nav: {
    home: "Forside",
    about: "Om klinikken",
    contact: "Kontakt",
    referral: "Henvisning",
    patientGuides: "Patientvejledninger",
    staff: "Ansatte",
    treatments: "Behandlinger",
  },

  // Contact information
  contact: {
    phone: "66 13 41 42",
    fax: "66 13 69 90",
    email: "info@klinikforortopaedkirurgi.dk",
    address: {
      street: "Skt. Anne Plads 2-4, 4. sal",
      city: "5000 Odense C",
      full: "Skt. Anne Plads 2-4, 4. sal, 5000 Odense C",
    },
    locationNumber: "5790000134205",
    providerNumber: "244333",
  },

  // Opening hours
  hours: {
    title: "Åbningstider",
    phoneHours: {
      title: "Telefontid",
      weekdays: "Mandag - Torsdag",
      morning: "9:00 - 12:00",
      afternoon: "13:00 - 15:00",
    },
    consultationHours: {
      title: "Konsultation",
      weekdays: "Mandag - Torsdag",
      note: "Efter aftale",
    },
  },

  // Holiday closures 2025
  holidays: {
    title: "Ferielukket 2025",
    summer: {
      label: "Sommerferie",
      dates: "14. juli - 10. august",
    },
    autumn: {
      label: "Efterårsferie",
      dates: "13. - 19. oktober",
    },
    winter: {
      label: "Juleferie",
      dates: "22. december - 4. januar",
    },
  },

  // Staff
  staff: {
    title: "Ansatte",
    physicians: "Læger",
    supportStaff: "Personale",
    members: {
      sinanSaid: {
        name: "Sinan Said",
        title: "Overlæge",
        specialty: "Speciallæge i Ortopædkirurgi",
        bio: "Speciallæge siden 2008 med subspecialer i hånd-fod og idrætsskadekirurgi. Tidligere overlæge ved Aalborg Universitetshospital (2012-2025).",
      },
      janMikkelsen: {
        name: "Jan Beck Mikkelsen",
        title: "Overlæge",
        specialty: "Speciallæge i Ortopædkirurgi",
        bio: "Speciallæge i Ortopædkirurgi siden 1997. Tidligere ledende overlæge på Kolding Sygehus' ortopædkirurgiske afdeling (2002-2011). Privat praksis siden 2008.",
      },
      helleHansen: {
        name: "Helle Kaj Hansen",
        title: "Sygeplejerske",
      },
      lenePetersen: {
        name: "Lene Petersen",
        title: "Sekretær",
        bio: "Vil som regel være din første kontakt til klinikken.",
      },
    },
  },

  // Staffing update
  staffingUpdate: {
    title: "Bemanding",
    text: "Klinikken har fra 1.5.2025 2 speciallæger. Sinan Said vil være i klinikken på fuld tid og Jan Mikkelsen vil være der på deltid i de kommende 2 år.",
  },

  // About the clinic
  about: {
    title: "Om klinikken",
    intro: "Klinikken for Ortopædkirurgi ledes af speciallæge Jan Beck Mikkelsen og Sinan Said.",
    location: {
      title: "Beliggenhed",
      text: "Klinikken er beliggende i Lægehuset Sankt Anne, et af Europas største lægehuse med 22 almen praktiserende læger og 12 praktiserende speciallæger. Herudover rummer huset 1 fysioterapeutisk klinik og en fodterapeutisk klinik.",
      accessibility: "Klinikken ligger på 4. sal med elevator og handicapparkering.",
      transport: "Centralt beliggende i Odense med god adgang fra tog, bus og privatbil. Gode parkeringsforhold (inkl. parkeringskælder).",
    },
    insurance: {
      title: "Overenskomst og forsikring",
      public: "Klinikken har overenskomst med sygesikringen.",
      private: "Patienter med privat sundhedsforsikring behandles gennem samarbejde med Privathospitalet Quattro, Bødkervej 3, 1. sal, 7000 Fredericia.",
    },
    accreditation: {
      title: "Akkreditering",
      text: "DDKM Akkrediteret (Den Danske Kvalitetsmodel).",
    },
  },

  // Referral information
  referral: {
    title: "Henvisning",
    intro: "Læger sender henvisninger elektronisk direkte til klinikken. Patienter modtager derefter et skriftligt indkaldelsesbrev til en første undersøgelse.",
    validity: {
      title: "Henvisningens gyldighed",
      text: "En henvisning sendt fra din praktiserende læge til klinikken gælder i max 6 måneder eller for 6 konsultationer. Hvis behandlingen ikke er afsluttet, skal der sendes en ny henvisning.",
    },
    coverage: {
      title: "Dækning og procedurer",
      text: "Sygesikringen dækker behandling, når der er henvist fra en praktiserende læge. Bemærk at operation bookes separat – førstegangsundersøgelse og kirurgisk behandling kan ikke ske samme dag under sygesikringsdækning.",
    },
  },

  // Patient guides - ORIGINAL tekst fra hjemmesiden
  patientGuides: {
    title: "Patientvejledninger",
    intro: "Her finder du vejledninger om de mest almindelige ortopædkirurgiske tilstande og behandlinger.",
    guides: {
      blockade: {
        title: "Blokadeanlæggelse",
        slug: "blokadeanlaeggelse",
        subtitle: "Med binyrebarkhormon og lokalbedøvelse",
        description: "Patientinformation om blokadeanlæggelse med binyrebarkhormon og lokalbedøvelse.",
        content: `Langvarig overbelastning kan føre til kronisk inflammation, hvilket giver smerte, hævelse og indskrænket bevægelighed.

Blokaden anlægges for at dæmpe den inflammatoriske reaktion i og omkring væv. Den består af 1-2ml binyrebarkhormon samt lokalbedøvelse. Lokalbedøvelsen virker hurtigt, mens binyrebarkhormonets effekt kan vare op til 12 uger.

Der kan kun gives maksimalt 4 blokader på samme sted på 1 år.

Mulige bivirkninger inkluderer forværring af symptomer, opstemthed og ansigtsrødmen. Der er ca. 1 ud af 20.000 patienter der får infektion efter blokadeanlæggelse.

Hvis smerterne ikke forsvinder men snarere tiltager, og hvis der opstår hævelse, rødme eller feber forekommer, skal klinikken kontaktes på telefon 66134142.`,
      },
      dupuytren: {
        title: "Dupuytren's kontraktur",
        slug: "dupuytren-s-kontraktur",
        subtitle: "Kuskefingre",
        description: "Patientinformation om Dupuytren's kontraktur.",
        content: `Dupuytren's kontraktur skyldes fortykkelse/knudedannelse i håndfladens bindevævsplade evt. med strengdannelse ud fra fingrene. Dette gør, at fingrene ikke kan strækkes helt ud, men sagtens kan bøjes.

Fingrenes bøjesener ligger dybere og påvirkes ikke af sygdommen. Ring- og lillefinger er hyppigst ramte, men andre fingre kan også være involverede. Der er arvelighed i sygdommen.

Operationen:
Proceduren udføres i lokalbedøvelse. Bindevævsstrengene, som ofte snor sig omkring nerver og blodårer til fingrene skæres over eller fjernes. Hvis fingre har været meget bøjet, kan hudunderskud opstå, hvilket nogle gange efterlader et åbent sår i håndfladen, der heles på 3-4 uger.

Efter operationen:
Håndposition skal være høj de første dage med hyppige fingerbevægelser. Forbindingsskift sker dagen efter operation; sting fjernes efter 2-3 uger. Sygemelding strækker sig fra 2-6 uger. Genoptræning kan blive nødvendig. Fuldstændig fingerstrækking er ikke altid mulig, og tilbagefald kan forekomme.

Risici:
Betændelse, blodansamlinger samt skade på følenerver eller blodkar kan forekomme, men forholdsvis sjældne.`,
      },
      ganglion: {
        title: "Ganglion",
        slug: "ganglion",
        subtitle: "Seneknude",
        description: "Patientinformation om ganglion.",
        content: `Ganglion er en lille géle-fyldt blære udgående fra led eller seneskede. Den er fuldstændig godartet, men kan genere periodevist.

Ganglion varierer ofte i størrelse afhængig af, hvor den sidder.

Behandling vil være operation. Blokader med binyrebarkhormon har ikke nogen varig effekt.

Operation:
Operationen foregår i lokalbedøvelse og varer 15 min. Selvom ganglion fjernes kirurgisk vil 20-30 % komme igen.

Efterbehandling:
Der vil være ømhed de første par uger, derefter aftagende. Hånden skal holdes højt de næste par dage. Efter 2 dage kan forbindingen erstattes af plaster. Det er vigtigt, at der laves bevægeøvelser for fingrene hver time de første uger. Sygemelding 1-3 uger, afhængig af arbejdets hårdhed. Trådene fjernelse efter 2 uger.

Risici:
Der kan forekomme betændelse samt skade på følenerven på hånden, men begge ting er forholdsvis sjældne.`,
      },
      golfElbow: {
        title: "Golfalbue",
        slug: "golfalbue",
        subtitle: "Epicondylitis medialis Humeri",
        description: "Patientinformation om golfalbue.",
        content: `Håndleddets og fingrenes bøjemuskler udspringer fra et lille knoglefremspring fra albuens inderside. Golfalbue er en overbelastningsskade af disse seners udspring, og ses ikke kun hos golfspillere, men frem for alt personer (kvinder hyppigere end mænd), der har et albuebelastede erhverv.

Symptomer og behandling:
Smerterne begynder på indersiden af albuen som gradvist brændende og svidende. Disse forværres når man vrider en klud eller fastholder et objekt. Ofte kan smerterne trække ned i underarmen, og kan derfor forveksles med nerveindklemning. I de fleste tilfælde går symptomerne over af sig selv, men kan vare adskillige måneder. Oftest forsøges såkaldt konservativ behandling med smertestillende, fysioterapi eller injektioner af binyrebarkhormon. Kun såfremt sådanne tiltag ikke afhjælper problemet kan operation komme på tale.

Operationen:
Operationen foregår i lokalbedøvelse. Albuen bliver lokalbedøvet, hvilket kan gøre ondt kortvarigt. Efter et par minutter vil albuen være smertefri, men følesansen bevares. Der foretages en forlængelse eller løsning af senetilhæftningen, hvorved der sker en aflastning af vævet. Efterfølgende bliver der lagt en forbinding på såret. Denne skiftes efter 2 uger.

Smerter:
Der vil sædvanligvis ikke forekomme mange smerter, men er der behov for smertestillende anbefales pamol, pinex eller panodil (= parecetamol).`,
      },
      heelSpur: {
        title: "Hælspore-syndromet",
        slug: "haelspore-syndromet",
        subtitle: "Fasciitis Plantaris",
        description: "Patientinformation om hælspore-syndromet.",
        content: `Hælsporesyndromet er en af de hyppigste årsager til smerter i foden. Smerter i hæltrædepuden kan skyldes en overbelastning af en bindevævshinde under foden (plantar aponeurosen).

Denne bindevævshinde udgør et kraftigt bånd som strækker sig fra hælen og frem til tæerne.

Årsag:
Hælspore-syndromet kan opstå efter en akut overanstrengelse som ved start af ny sportsgren hos en utrænet person.

I næsten alle tilfælde finder man en forkortning af lægmuskulaturen/achillessenen.

Behandling:
Kliniske undersøgelser viser at de bedste resultater fremkommer efter behandling uden operation.

Efter ca. 8 uger korrekt gennemført behandling med indlæg og udspændingsøvelser vil de fleste patienter opleve en reduktion i smerterne.

Videnskabelige undersøgelser viser at 90 % af patienterne med hælsporesyndrom bliver smertefri efter maksimalt 9 måneder.

Forebyggelse:
Daglige udspændingsøvelser kan forbygge hælsporesyndromet.

Udspændingsøvelser for lægmuskulatur er beskrevet på klinikken.`,
      },
      carpalTunnel: {
        title: "Karpaltunnelsyndrom",
        slug: "karpaltunnelsyndrom",
        subtitle: "Sovende fingre",
        description: "Patientinformation om karpaltunnelsyndrom.",
        content: `Karpaltunnelsyndrom er en tilstand hvor en nerve er afklemt ved håndleddet. Tilstanden er forbigående i 30 % af tilfældene. Dette kan medføre føleforstyrrelser i tommel, pegefinger, langfinger og ringfinger. Dette medfører fummelfingrethed og i nogle tilfælde smerter. Generne er ofte natlige.

Hvis langvarige gener både dag og nat optræder, er operation den bedste løsning.

Operationen:
Operationen udføres i lokalbedøvelse. Det er ikke nødvendigt at faste og man må tage sin sædvanlig medicin. Er man i blodfortyndende behandling skal man holde pause 5 dage inden operationen.

Proceduren indebærer at skære det stramme ledbånd gennem for at give nerven plads. Indgrebet varer cirka 15 minutter. Sting eller strips fjernes efter 14 dage.

Efter Operationen:
Hånden skal holdes højt første dag med "pumpe-øvelser". Fingerbevægelser anbefales hver time de første par uger. Efter to uger kan forbinding erstattes med plaster. Sygemelding varierer fra 2-6 uger afhængig af arbejdstype. Natlige symptomer forsvinder typisk, men føleforstyrrelser kan tage måneder at bedres.

Risici:
Betændelse samt skade på mindre nervegrene kan forekomme, men er sjældne.`,
      },
      mortonsNeuroma: {
        title: "Mortons Neurom",
        slug: "mortons-neurom",
        subtitle: "Nerveknude svarende til forfoden",
        description: "Patientinformation om Mortons neurom.",
        content: `Et neurom er en fortykkelse af en nerve. Det mest almidelige neurom i foden er et Mortons neuom, og denne findes hyppigst mellem 2 og 3 tå, men kan også forekomme mellem 3 og 4 tå (regnet fra storetåen).

Årsager:
Årsagen til Mortons neurom er oftest forfods nedfald. Alt hvad der forårsager tryk og irritation kan væremedvirkende til udviklingen af neuromet.

Symptomer:
- Snurrende, brændende og sovende fornemmelse i tæerne
- Smerter
- En følelse af en hævelse inde i fodballen

Ikke-kirurgisk behandling:
- Forfodsindlæg
- Afkøling med is
- Behandling med gigtmedicin som ipren, ibumetin, voltaren o.l.

Efter operationen:
Man må støtte på foden lige efter operationen. 7 dages sygemelding skal påregnes.`,
      },
      ingrownNail: {
        title: "Nedgroet negl",
        slug: "nedgroet-negl",
        subtitle: "Ungvuis incarnatus",
        description: "Patientinformation om nedgroet negl.",
        content: `En nedgroet negl er en negl, der bliver ved med at gro ned i neglevolden på storetåen.

Tilstanden forårsager ofte betændelse og kan være meget smertefuldt. Forebyggelse omfatter korrekt negleklipning og bøjlebehandling hos fodterapeut.

Hygiejne før operationen:
For at mindske risikoen for infektion efter operationen, er det vigtigt at huden omkring operationsstedet er uden rifter eller sår.

Ved kraftig betændelse fjernes neglen, og man afventer cirka 2 måneder før operation.

Operationen:
Proceduren udføres under lokalbedøvelse. En del af neglelejet, negleroden og neglevolden vil blive fjernet ved at skære en kile ned i siden af neglen, derved gøres neglen smallere.

Forberedelse og operation varer 30 minutter.

Efter operationen:
Det er vigtigt foden holdes højt og der bliver gået så lidt på operationsdagen som muligt.

Forbinding skiftes ved behov. Efter 2 dage kan daglige fodbade påbegyndes.

Smerter:
Det anbefales at der tages 1g parecetamol max 4 gange dagligt umiddelbart efter operationen.

Komplikationer:
Kommer der i de første døgn efter operationen stærke smerter eller feber over 38 grader skal du kontakte egen læge eller skadestue.`,
      },
      deQuervain: {
        title: "Seneskedebetændelse ved tommelfingeren",
        slug: "seneskedebetaendelse-ved-tommelfingeren",
        subtitle: "Morbus de Quervain",
        description: "Patientinformation om seneskedebetændelse ved tommelfingeren.",
        content: `De Quervain er en irritationstilstand i seneskederne til de muskler, der henholdsvis strækker og udadfører tommelfingeren. Der er oftest en forsnævring i den tunnel, hvor senerne løber på tommelfingersiden af håndleddet. Årsagen er hyppigst overbelastning og set ofte efter en graviditet.

Behandling:
Følgende metoder benyttes som behandling; operation, gips, binyrebarkhormonindsprøjtning eller gigttabletter. Operation foregår i lokalbedøvelse og varer ca. 15 min. Det ledbånd der gør seneskeden (tunnelen) snæver, overskæres.

Efterbehandling:
Hånden skal holdes højt de næste dage. Efter 2 dage kan forbindingen erstattes af plaster. Det er vigtigt, at du laver bevægelsesøvelser for fingrene hver time de første uger. Sygemelding 1-3 uger, da der vil være ømhed de første par uger, derefter aftagende. Trådfjernelse efter 2 uger.

Risici:
Der kan forekomme betændelse samt skade på følenerve på håndryggen, men begge ting er forholdsvis sjældne.`,
      },
      triggerFinger: {
        title: "Springfinger",
        slug: "springfinger",
        subtitle: "Digitus saltans",
        description: "Patientinformation om springfinger.",
        content: `Fingrenes bøjesener løber i seneskeder, der holdes på plads af ledbånd. Hvis ledbåndet er for snævret, eller senen fortykkede glider den ikke længere frit i seneskeden. Det fortykkede område "springer" under ledbåndet. Dette medfører springfornemmelsen og smerter. I svære tilfælde kan fingeren låses i bøjet stilling. Patienter med diabetes og leddegigt har større risiko end andre for at udvikle springfingerfænomen.

Operationen:
Operationen er én behandlingsmulighed. Man kan også i visse tilfælde behandle med binyrebarkhormonindsprøjtning. Operationen foregår i lokalbedøvelse og varer ca. 15 min. Det ledbånd, der strammer, overskæres.

Efter operationen:
Hånden skal holdes højt de næste par dage. Forbindingen erstattes af plaster efter 2 dage. Det er vigtigt at der laves bevægeøvelser for fingrene hver time de første uger. Sygemelding varierer fra 1-3 uger. Tråde fjernes efter 1-2 uger. Efter de første par uger vil der være ømhed.

Risici:
Betændelse samt skade på følenerve til fingeren kan forekomme. Begge risici er forholdsvis sjældne.`,
      },
      tennisElbow: {
        title: "Tennisalbue",
        slug: "tennisalbue",
        subtitle: "Epicondylitis Lateralis Humeri",
        description: "Patientinformation om tennisalbue.",
        content: `Håndleddets og fingrenes strækkemuskler udspringer fra et lille knoglefremspring fra albuens yderside. Tennisalbue er en overbelastningsskade af disse seners udspring, og ses ikke kun hos tennisspillere, men frem for alt personer (kvinder hyppigere end mænd), der har et albuebelastede erhverv.

Symptomer og behandling:
Smerterne begynder på ydersiden af albuen som gradvist brændende og svidende. Disse forværres når man vrider en klud eller fastholder et objekt. Ofte kan smerterne trække ned i underarmen, og kan derfor forveksles med nerveindklemning. Der er problemer med at udstrække albueleddet og der er nedsat kraft ved håndtryk.

I de fleste tilfælde går symptomerne over af sig selv, men kan vare adskillige måneder. Oftest forsøges såkaldt konservativ behandling med smertestillende, fysioterapi eller injektioner af binyrebarkhormon. Kun såfremt sådanne tiltag ikke afhjælper problemet kan operation komme på tale.

Operationen:
Operationen foregår i lokalbedøvelse. Albuen bliver lokalbedøvet, hvilket kan gøre ondt kortvarigt. Efter et par minutter vil albuen være smertefri, men følesansen bevares. Der foretages en forlængelse eller løsning af senetilhæftningen, hvorved der sker en aflastning af vævet. Efterfølgende bliver der lagt en forbinding på såret. Såret skiftes efter 2 uger.

Smerter:
Der vil sædvanligvis ikke forekomme mange smerter, men er der behov for smertestillende anbefales pamol, pinex eller panodil (= parecetamol).`,
      },
    },
  },

  // Treatments - ORIGINAL tekst fra hjemmesiden
  treatments: {
    title: "Behandlinger",
    intro: "Vi tilbyder et bredt udvalg af ortopædkirurgiske behandlinger.",
    categories: {
      varicoseVeins: {
        title: "Åreknuder",
        slug: "areknuder",
        description: "Forstørrede, snoede og synlige blodkar (vener) i underhuden på benene. Ca. 20% af befolkningen har tilstanden.",
      },
      knee: {
        title: "Knæ",
        slug: "knae",
        description: "Mange knæsmertetilstande kan diagnosticeres og behandles ambulant.",
        treatments: {
          patellarPain: {
            title: "Knæskalssmerter",
            slug: "knaeskalssmerter",
            subtitle: "Patello-femoralt smertesyndrom",
            description: "Smerter lokaliseret ved knæets forside.",
            content: `Patello-femoralt smertesyndrom ( knæskalssmerter )

Dette smertekompleks er et stort sammensurium af årsager til smerter lokaliseret ved knæets forside, under eller omkring knæskallen.

Chondromalasia patellae er en lidelse, der hyppigst rammer personer i puberteten, oftest piger. Smerterne sidder bag knæskallerne, er oftest dobbeltsidige og øges typisk ved trappegang, cykling, brystsvømning, ridning, hugsiddende stilling, eller når man sidder med knæene bøjede.

Årsag:
Grunden til sygdommen kendes ikke, men hormonelle årsager er sandsynlige, idet symptomerne debuterer i puberteten og oftest forsvinder spontant mellem 18 og 25 års alderen.

Behandling:
Behandlingen er ro eller i meget smertende tilfælde aflastning i knæbandage. Stødabsorberende fodindlæg, knæskalsstyrende sportsbandager og isometriske knæøvelser vejledt af fysioterapeut er ligesom ændring af aktivitetsmønstret de væsentligste behandlingstiltag.

Operation skal sjældent anvendes.`,
          },
          jumperKnee: {
            title: "Springerknæ",
            slug: "springerknae",
            subtitle: "Jumper's knee",
            description: "Overbelastningsskade i knæskalssenen.",
            content: `Jumpers knee (springerknæet) er en overbelastningsskade, som forårsages af småudrivninger i knæskalssenens tilhæftning ved knæskallen. Skaden opstår p.g.a. vedvarende nedspringsbelastninger (exentriske muskelkontraktioner) med efterfølgende explosive opspring. Smerten kommer ofte pludselig og kommer igen ved fornyet belastning. Den skadede kommer sjældent til læge før tilstanden er blevet kronisk. Smerterne er lokaliseret til knæskalsspidsen og forøges ved knæstrækning mod modstand. Ultralyd kan ofte påvise hævelse af knæskalssenen.

Behandling:
Behandlingen er primært aflastning i knæbandage og sportspause. Symptomerne kan forsvinde, hvis gigtmedicin eller binyrebarkblokade gives. Hvis aflastning og ro ikke har hjulpet efter ca. 6 uger kan operation være løsningen. Selv om operation foretages må en rekonvalesenstid på 5 - 6 måneder påregnes, hvor kun vejledte øvelser kan tillades til smertegrænsen.`,
          },
          runnerKnee: {
            title: "Runner knee",
            slug: "runner-knee",
            subtitle: "Løberknæ",
            description: "Smertetilstand hos langdistanceløbere.",
            content: `Runners Knee (løberknæ) er en smertetilstand som oftest rammer langdistanceløbere med smerter på knæets yderside.`,
          },
          bakersCyst: {
            title: "Bakers Cyste",
            slug: "bakers-cyste",
            description: "Udbuling fra knæleddet.",
            content: `Bakers cyste i knæet er en udbuling fra knæleddet på grund af irritation ('betændelse') i knæleddet.`,
          },
          osgoodSchlatter: {
            title: "Osgood-Schlatter",
            slug: "osgood-schlatter",
            subtitle: "Vokseværk i knæet",
            description: "Tilstand hos pubertetsbørn.",
            content: `Mb.Osgood-Schlatter (Vokseværk i knæet) ses kun hos pubertetsbørn, oftest drenge, men følgerne ses hos voksne.`,
          },
          looseBodies: {
            title: "Knæledsmus",
            slug: "knaeledsmus",
            description: "Løse fragmenter i knæleddet.",
            content: `Knæmus kan opstå fra flere lokaliteter i knæet. Hyppigst fra lårbensknoglens indvendige kno.`,
          },
          arthroscopy: {
            title: "Artroskopi",
            slug: "artroskopi",
            subtitle: "Kikkertoperation i led",
            description: "Kikkertundersøgelse og -operation i led.",
            content: `Kikkertoperation i led

Ledundersøgelser suppleres ofte med kikkertundersøgelse ligesom ledoperationer i stigende grad foretages som kikkertoperation. Indgrebet kan udføres i alle kroppens led, men knæledet egner sig især. Knæledet er stort og rummeligt. Det er forholdsvis let at overskue og tilstande, der er ledsaget af invaliderende knæsymptomer er hyppige. Knæartroskopi udføres i lokalbedøvelse.

Mistanke om eller påvist mus, menisk-/ bruskskade og korsbåndsskade er hyppige lidelser, som lader sig artroskopisk behandle i knæledet. Ved andre lidelser såsom slidgigt, løs knæskal og følger efter knoglebrud i knæet kan artroskopien også være en hjælp til at vælge den rigtige behandling.

Skulderled, albueled, håndled, fodled, hofteled og kæbeled egner sig også til artroskopi, men her kan indgrebet sjældent udføres uden anvendelse af en mere udbredt bedøvelsesform.

Knækikkertoperation foregår ved, at der i lokalbedøvelse igennem et lille stiksår indsættes et optisk instrument med et tilsluttet videokamera. Via TV kan knæledets indvendige side ses og mærkes efter med en lille sonde. Instrumenter til operation i knæet indsættes igennem andre små stiksår og fjernelse af ødelagte strukturer, eller sammensyning af en ødelagt menisk kan så foregå.

Selve indgrebet er forbundet med en smule ubehag (som at være hos tandlæge), men lokalbedøvelsen gør, at De ikke har smerter. Indgrebet, der tager 30 - 45 minutter, foregår ambulant. De kan støtte på benet umiddelbart efter, men de første dage skal De gå så lidt som muligt. Sygemelding ca. en uge.`,
          },
          bursitis: {
            title: "Slimsæk ved knæskallen",
            slug: "slimsaek-ved-knaeskallen",
            description: "Irritation af slimsækken foran knæskallen.",
            content: `Slimsækken viser sig ved hævelse, varme og rødme foran knæskallen. Ofte efter et slag på knæet.`,
          },
          shinSplints: {
            title: "Skinnebensbetændelse",
            slug: "skinnebensbetaendelse",
            description: "Smerter ved skinnebenskanten hos løbere og fodboldspillere.",
            content: `Skinnebensbetændelse ses hos løbere og fodboldspillere. Lidelsen kommer gradvist ofte i begge skinneben som smerter ved skinnebenskanten.`,
          },
        },
      },
      foot: {
        title: "Fod",
        slug: "fod",
        description: "Behandling af fodlidelser.",
        treatments: {
          bunion: {
            title: "Knyst",
            slug: "knyst",
            subtitle: "Hallux Valgus",
            description: "Knyst ved storetåens grundled.",
            content: `Knyster ved storetåen eller lilletåens grundled kan være smertefuld. Huden over knysten er hævet og øm. Knyst kan være familiær, men kan også opstå uden grund eller p.g.a. fodtøj.

En vigtig del af behandlingen er, at anvende sko, der passer foden og ikke trykker på de ømme steder. Smerten kan forsvinde ved anvendelse af rummeligt fodtøj evt. suppleret med et fodindlæg eller man kan få udblokket sine sko.

I hårdnakkede tilfælde kan knyst være invaliderende og operation kan anvendes som smertelindring og samtidig tilbageføre foden til en mere hensigtsmæssig form.

Operationen foregår i lokalbedøvelse og tager ca. 40 min.

De/du skal ikke være fastende, hvis De/du får fast medicin skal De/du tage medicinen som sædvanligt.

Blodfortyndende medicin (Maravan, markumar, plavix, hjertemagnyl m.m. skal De/du dog holde pause med fra 5 døgn før operationen).

Efter operationen får De/du anlagt en stor forbinding, som forhindrer Dem/dig i at bruge almindelig sko.

For at undgå hævelse er det meget vigtigt, at De/du holder den opererede fod højt de første døgn.

Gå kun når det er mest nødvendigt de første døgn.

De/du kan låne krykker på klinikken, og De/du får udleveret smertestillende medicin til de første døgn.

Ved smerter efter operationen er det vigtigt at holde foden højt.

Hvis dette ikke er tilstrækkeligt, kan De/du anvende håndkøbsmedicin, f.eks. Pamol, Pinex, Panodil eller lignende.

Hvis ikke dette er tilstrækkeligt, skal forbindingen klippes helt igennem og løsnes.

Trådene og forbindingen fjernes efter 2-3 uger.

Yderligere 2 uger skal De/du anvende forbinding og hælsko.

De/du kan herefter anvende gode rummelige sko og må træde med fuld belastning på foden.

Foden har tendens til at hæve de følgende uger.

Det kan trods operationen blive nødvendigt at anvende et fodindlæg i skoen.

Komplikationer:
Som regel vil der i nogle måneder efter operationen være hævelse af foden.

Derfor skal man, når lejlighed byder sig lægge benet op på en skammel.

En mindre skævhed af tåen er acceptabel.

Som ved alle operationer er betændelse en mulig risiko.

OBS! Ved dunkende smerter i foden og feber (eller blot bekymring) skal man henvende Dem/dig til klinikken (tlf:66134142) eller søge sin praktiserende læge.`,
          },
          heelPain: {
            title: "Hælsmerte",
            slug: "haelsmerte",
            subtitle: "Hælspore",
            description: "Smerter under hælen.",
            content: `Hælsmerte (hælspore)

Hælsmerte skyldes ofte en hælspore. Symptomerne er smerte under hælen ved de første trin efter hvile. Herefter aftager smerterne, for så at komme igen med fuld styrke op af dagen.

Irritation, hvor fodsålssenepladen hæfter til hælbenet, udvikler en knoglespore på hælbenet. Knoglesporen kan ses på røntgen.

Behandlingsbasis er trykaflastning med et hælsporeindlæg, Binyrebarkblokade er effektiv i akutte tilfælde. Operation er obsolet.`,
          },
          mortonsNeuroma: {
            title: "Mortons neurom",
            slug: "mortons-neurom",
            description: "Nerveirriteret fodtilstand.",
            content: `Mortons neurom skyldes mekanisk indeklemning af en tånerve. Det uhensigtsmæssige tryk på nerven forårsager en overfølsom nerveknude på tånerven.

Nerveknuden er typisk placeret i svømmehuden mellem 3. og 4. tå. Forfodeplatfod kan udløse tilstanden, ligesom snævre sko kan forårsage pludselig jagende smerte i tæerne. Smerten lindres ved at fjerne skoen og bevæge tåen.

Behandlingen er rummelige sko med et forfodsløft, som støtter foden i sin oprindelige form.

Under operation løsnes væv omkring neuromet, og det kan i nogle tilfælde fjernes. Fjernelse kan resultere i følelsesløshed i pågældende område, men dette påvirker ikke fodens normale funktion.

Sygemelding estimeres til 2-8 uger afhængig af arbejdstype.`,
          },
          corn: {
            title: "Ligtorn",
            slug: "ligtorn",
            description: "Tryk på normal hud fra underliggende knogler og sko.",
            content: `Ligtorne og hård hud skyldes tryk på normal hud. Trykket opstår mellen underliggende knogler og forkerte sko. Lidelsen findes ikke hos folkeslag, der går barfodet. Ligtorne og hård hud forekommer især på storetåen og lilletåen, på hammertæer og under 2. og 3. tås grundled ved forfodsplatfod. Bløde ligtorne findes mellem tæerne og skyldes, at 2 tæer konstant trykkes sammen pga. uhensigtsmæssig fodtøj.

Behandlingen fokuserer på trykaflastning af huden ved fodtøjsvejledning. Ofte må patientens sko kasseres eller gives til "Frelsens hær". Man skal ikke få alle fødder til at passe i "Askepots glassko".

Ligtorne og hård hud er signalet, der fortæller patienten, "at sko skal købes til foden, ikke til hovedet". Sjældent er der behov for kirurgi. Kirurgi omfatter altid fjernelse af fremstående underliggende knogle.

Dette er et alvorligt indgreb, som ofte kræver mange ugers sygemelding selv om operationen udføres ambulant.`,
          },
          hammerToe: {
            title: "Hammertå",
            slug: "hammertaa",
            description: "Deformitet af de små tæer.",
            content: `Hammertå og krogtå opstår af forskellige årsager. Nervelidelse, muskellidelse, hulfod eller små sko kan være årsagen. De små tæer, næsten altid tåen næst efter storetåen er lidende. Smerter i trædepuden under tåen, en øm ligtorn over mellemledet og hård hud med smerter på tåspidsen er symptomerne patienten klager over. Smerterne forstærkes i snævre sko.

Behandlingen er rummelige sko. Afhængig af årsagen kan forfodsindlæg eller forfodspelotter lindre symptomerne. Eventuel operation er ofte en kombination af stivgøring af tåens mellemled og en "ommøblering" af grundledet eller seneforlængelse. Også her skal man ikke tage fejl af rekonvalecenstiden. Efterforløbet er langvarigt.`,
          },
          warts: {
            title: "Fodvorter",
            slug: "fodvorter",
            description: "Virusinfektion i hård hud på fodsålen.",
            content: `Fodvorter findes i fodsålen.`,
          },
          ingrownToenail: {
            title: "Ungvis incarnatus",
            slug: "ungvis-incarnatus",
            subtitle: "Nedgroet tånegl",
            description: "Nedgroet negl på storetåen.",
            content: `Se patientvejledning om Nedgroet negl.`,
          },
          tailorsBunion: {
            title: "Skrædderknyst",
            slug: "skraedderknyst",
            description: "Knyst ved lilletåens grundled.",
            content: `Knyst ved lilletåens grundled.`,
          },
          flatFeet: {
            title: "Pedis plani",
            slug: "pedis-plani",
            subtitle: "Platfod",
            description: "Affladning af fodens svangbue.",
            content: `Platfod er affladning af fodens svangbue.`,
          },
          transverseFlatFeet: {
            title: "Transversoplani",
            slug: "transversoplani",
            subtitle: "Forfodsplatfod",
            description: "Svaghed i fodens tværgående ledbånd.",
            content: `Forfodsplatfod.`,
          },
        },
      },
      hand: {
        title: "Hånd",
        slug: "hand",
        description: "Behandling af håndlidelser.",
        treatments: {
          tennisElbow: {
            title: "Tennisalbue",
            slug: "tennisalbue",
            description: "Overbelastningsskade på albuens yderside.",
            content: `Se patientvejledning om Tennisalbue.`,
          },
          fingerOsteoarthritis: {
            title: "Slidgigt i fingerled",
            slug: "slidgigt-i-fingerled",
            description: "Slidgigt i fingrenes led.",
            content: `Slidgigt er hyppig I tommelfingerens grundled. Smerter i grundledet ved brug og i hvile er det tidligste symptom. Gigtmedicin, blokade med binyrebarkhormon og bandage er gode behandlinger i lidelsens tidlige forløb.

Efterhånden som slitagen og deformiteten skrider frem kan operation komme på tale for at afhjælpe smerter og bedre funktionen.

Heberden´s knuder ses ved fingrenes yderled, som tegn på slidgigt, når leddene langsomt ødelægges af gigten. Gigtknuderne er sjældent smertende og hindre ikke fingrenes brug, men enkelte gange kan fingerleddene "gå af led".

Operation kan afhjælpe dette ved stivgøring. Trods smerte og stivhed er det vigtigt at fingrene stadig bevæges, men ikke belastes unødigt.`,
          },
          rheumatoidSurgery: {
            title: "Leddegigtskirurgi",
            slug: "leddegigtskirurgi",
            description: "Kirurgisk behandling af leddegigt i hænder og fødder.",
            content: `Specialiseret kirurgisk behandling for patienter med leddegigt, der påvirker hænder og fødder.`,
          },
          golfElbow: {
            title: "Golfalbue",
            slug: "golfalbue",
            description: "Overbelastningsskade på albuens inderside.",
            content: `Se patientvejledning om Golfalbue.`,
          },
          dupuytren: {
            title: "Dupuytrens Contractur",
            slug: "dupuytrens-contractur",
            subtitle: "Kuskefingre",
            description: "Arvævsdannelse i håndfladens seneplade.",
            content: `Dupuytren´s kontraktur er en arvelig arvævsdannelse af håndens seneplade, som ligger lige under huden i håndfladen. Ofte ses kun små knuder eller små hudindtrækninger, men hyppigt ses tykke strenge, som trækker fingrene ind i hulhånden.

Dupuytren´s lidelse er familiær og kan også give symptomer i fodsålen samt penis. Lidelsen er ofte forbundet med diabetes, epilepsi og rygning.

Den eneste kendte behandling af symptomerne er kirurgi. Operation anbefales, hvis strækkemangelen i fingrene er >30 grader, eller hvis strækkemangelen tiltager hurtigt. Kun store knuder i håndfladen skal opereres, hvis de generer håndens funktion.

Trods operation kan stramningerne i fingrene komme igen. Kirurgi fjerner ikke den arvelige lidelse, men kun de aktuelle strammende strukturer.`,
          },
          deQuervain: {
            title: "Mb.deQuervain",
            slug: "mbdequervain",
            description: "Seneskedehindebetændelse ved tommelfingeren.",
            content: `Se patientvejledning om Seneskedebetændelse ved tommelfingeren.`,
          },
          tendonNodule: {
            title: "Seneknude",
            slug: "seneknude",
            subtitle: "Ganglion",
            description: "Væskefyldte cyster fra led eller seneskede.",
            content: `Seneknuder (ganglion) er den hyppigste årsag til knuder i hånden. De forekommer oftest på håndryggen, er væskefyldte og kan veksle i størrelse eller helt forsvinde i en periode.

Knuderne opstår fra irriterede ledkapsler, ledbånd eller seneskeder. Behandling er kun nødvendig hvis de forårsager smerter, funktionsforstyrrelser eller kosmetisk ubehag.

Vigtige fakta:
- De forårsager ikke kræft
- Ca. 10% recidiverer efter kirurgisk fjernelse
- Behandling med binyrebarkhormon viser begrænset effektivitet`,
          },
          thumbOsteoarthritis: {
            title: "Slidgigt i tommelfingeren",
            slug: "slidgigt-i-tommelfingeren",
            subtitle: "Slidgigt i tommelfingerens rodled",
            description: "Slidgigt i tommelfingerens rodled.",
            content: `Slidgigt er hyppig I tommelfingerens rodled. Gigten forårsager smerter og bevægeindskrænkning. Smerter i leddet ved brug og i hvile er det tidligste symptom.

Gigtmedicin, blokade med binyrebarkhormon og bandage er gode behandlinger i lidelsens tidlige forløb.

Efterhånden som slitagen og deformiteten skrider frem kan operation komme på tale for at afhjælpe smerter og bedre funktionen.

Gigtknuderne er sjældent smertende. Operation kan afhjælpe dette ved en bevægelsesbevarende operation, hvor en håndledsknogle erstattes med sene- og arvæv.

De får en lidt nedsat styrke ved håndtryk men operationens resultat er smertereduktion.

De skal påregne en sygemelding på 5-8 uger.`,
          },
          triggerFinger: {
            title: "Springfinger",
            slug: "springfinger",
            description: "Seneskedehindebetændelse med springfornemmelse.",
            content: `Springfingre er en irritation (seneskedehindebetændelse) af fingrens seneskede, der omgiver bøjesenerne. Når seneskeden hæver strammer den omkring senerne, som forhindres i at glide frit.

Senen kan sætte sig fast og pludselig frigøre sig med spring til følge (som en foldekniv, der åbnes) Hvile, gigtmedicin eller steroid-blokade kan hjælpe midlertidig, men den ultimative behandling er operation, som kan foretages ambulant i lokalbedøvelse.`,
          },
          carpalTunnel: {
            title: "Carpal Tunnel Syndrom",
            slug: "carpal-tunnel-syndrom",
            subtitle: "Sovende fingre",
            description: "Nerveafklemning i håndleddet.",
            content: `Carpal Tunnel Syndrom (sovende fingre)

Typiske symptomer ved karpaltunnel syndrom er sovende/prikkende fornemmelse i fingrene - især om natten. Smerte og sovende fornemmelse i fingrene, når man holder på rat eller cykelstyr. Fummelfingrethed ved håndtering af småting.

Ofte kan smerterne stråle helt op i skulderen. Disse symptomer er forårsaget af tryk på "den midterste håndnerve" ved dennes forløb igennem håndledstunnelen (carpaltunnelen). Gennem denne tunnel løber også alle fingerbøjesenerne.

Hævelse I carpaltunnelen forårsaget af seneskedehindbetændelse, gigt, graviditet, stofskiftelidelse eller følger efter håndledsbrud er som regel den symptomudløsende faktor. Symptomerne kan være forbigående.

Forbigående bedring ses efter blokade med binyrebarkhormon, men den ultimative behandling er operation, som kan foretages ambulant i lokalbedøvelse.`,
          },
        },
      },
      arthritis: {
        title: "Gigtlidelser",
        slug: "gigtlidelser",
        description: "Behandling af leddegigt i fødder og hænder.",
        content: `Rheumatoid Artritis i foden

Smertende led, stivhed og ledhævelse er de hyppigste symptomer ved artritis.

Forekomst:
Rheumatoid artritis (RA) forekommer hos 2-3% af befolkningen over 55 år, men lidelsen kan angribe i alle aldre. RA er pr. definition en symmetrisk lidelse. Lidelsen angriber fødderne hos 85–90% i sygdomsforløbet.

Hos op mod 20% starter lidelsen i fødderne. Lidelsen angriber hyppigere forfoden end bagfoden, dog med tiltagende tendens til involvering af bagfoden og efterhånden også anklen med lidelsens varighed.

Sygdommen angriber i starten lidt asymetrisk og efterhånden mere symetrisk. På forfoden især svarende til tæernes grundled og tildels også mellemleddene i de små tåstråler.

I sjældne tilfælde ses storetåen ikke at være involveret, evt. kun mellemleddet. Væsentlig er også at fodens trædepude bliver udtyndet og at mellemfodsknoglernes ledhoveder nærmest trædes ned igennem fodbalden.

Årsag:
Lidelsens årsag er ikke kendt, den er ikke en arvelig lidelse i gængs forstand, men man mener, at generne har uden tvivl en indvirkning på forekomsten af RA og har relation til immunapparatet med slimhindebetændelse og ledangreb.

Der er sædvanligvis en 'trigger' som f.eks. infektion eller anden påvirkning fra omgivelserne der igangsætter lidelsens symptomer.

Fordi RA er en systemsygdom er hele kroppen indvolveret, Man føler sig syg, febril, udtrættes hurtigt og mister appetit. Der opstår knuder omkring leddene især ved albuespidsen.`,
      },
      arthrosamid: {
        title: "Arthrosamid",
        slug: "arthrosamid",
        description: "Hydrogel-injektion til behandling af slidgigt i knæet.",
        content: `Artrose, som slidgigt korrekt hedder, er en folkesygdom. Omkring en halv million danskere har artrose, og af dem har 270.000 danskere artrose i knæet.

En behandling med Arthrosamid© kan lindre smerter i længere tid. Arthrosamid© er en videnskabeligt testet gel, som sprøjtes ind i knæet, hvor den lægger sig og lindrer smerter.

Hvad er Arthrosamid©:
Arthrosamid© er en hydrogel, som består af 97,5 % vand og 2,5 % polyacrylamid.

Effekt:
Man kan forvente minimum 3-5 års symptomlindring. Ca. otte ud af ti (80 %) af de behandlede patienter opnår en 60% reduktion af deres smerter.

Efter behandlingen:
Du bør holde dig i ro 1-2 uger efter behandlingen og ikke træne hårdt i den periode.

Bivirkninger:
Der er ikke rapporteret nogen alvorlige bivirkninger ved brug af Arthrosamid©, men ved enhver gennembrydning af huden kan der være en lille risiko for infektion.`,
      },
    },
  },

  // Contact form
  contactForm: {
    title: "Kontakt os",
    name: "Navn",
    email: "E-mail",
    phone: "Telefon",
    message: "Besked",
    submit: "Send besked",
    success: "Tak for din henvendelse. Vi vender tilbage hurtigst muligt.",
    error: "Der opstod en fejl. Prøv venligst igen eller ring til os.",
    validation: {
      name: "Indtast venligst dit navn",
      email: "Indtast venligst en gyldig email-adresse",
      message: "Indtast venligst en besked",
    },
    api: {
      rateLimited: "For mange henvendelser. Prøv igen om lidt.",
      missingFields: "Udfyld venligst alle påkrævede felter",
      invalidEmail: "Ugyldig email-adresse",
      emailNotConfigured: "Email-service ikke konfigureret",
      emailFailed: "Kunne ikke sende email",
      genericError: "Der opstod en fejl",
      messageSent: "Besked sendt",
    },
  },

  // Common
  common: {
    readMore: "Læs mere",
    backToTop: "Tilbage til toppen",
    phone: "Telefon",
    fax: "Fax",
    email: "E-mail",
    address: "Adresse",
    learnMore: "Læs mere",
    contactUs: "Kontakt os",
    call: "Ring",
    sendMessage: "Send besked",
  },

  // UI strings
  ui: {
    // Hero
    heroSubtitle: "ved Sinan Said & Jan Beck Mikkelsen",

    // Location
    buildingName: "Lægehuset Sankt Anne, 4. sal",

    // Badges
    ddkmAccredited: "DDKM Akkrediteret",
    insuranceAgreement: "Overenskomst med sygesikringen",
    newTreatment: "Ny behandling",

    // Treatment counts
    treatmentCount: "{count} behandlinger",

    // Buttons
    seeAllTreatments: "Se alle behandlinger",
    seeAllGuides: "Se alle vejledninger",
    readGuide: "Læs vejledning",

    // CTA section
    needAppointment: "Har du brug for en tid?",
    needAppointmentText: "Kontakt os for at bestille en tid eller få mere information om vores behandlinger.",
    referralReminder: "Husk:",
    referralReminderText: "Du skal have en henvisning fra din praktiserende læge for at blive behandlet under sygesikringen.",
    readMoreReferral: "Læs mere om henvisning",

    // About page
    identification: "Identifikation",
    locationNumber: "Lokalisationsnummer",
    providerNumber: "Ydernummer",
    questionsTitle: "Har du spørgsmål?",
    questionsAboutClinic: "Vi er altid klar til at hjælpe dig med spørgsmål om klinikken eller vores behandlinger.",

    // Referral page
    howItWorks: "Sådan foregår det",
    step1Title: "Få en henvisning",
    step1Text: "Kontakt din praktiserende læge og få en henvisning til klinikken.",
    step2Title: "Vi modtager henvisningen",
    step2Text: "Din læge sender henvisningen elektronisk direkte til os.",
    step3Title: "Du modtager indkaldelse",
    step3Text: "Vi sender dig et skriftligt indkaldelsesbrev med tid til første undersøgelse.",
    step4Title: "Første konsultation",
    step4Text: "Du møder op til undersøgelse, hvor vi vurderer din tilstand og lægger en behandlingsplan.",
    importantToKnow: "Vigtigt at vide",
    importantPoint1: "En henvisning gælder i maksimalt 6 måneder eller for 6 konsultationer",
    importantPoint2: "Hvis behandlingen ikke er afsluttet inden for denne periode, skal din læge sende en ny henvisning",
    importantPoint3: "Førstegangsundersøgelse og kirurgisk behandling kan ikke foregå samme dag under sygesikringsdækning",
    importantPoint4: "Operation bookes separat efter den indledende undersøgelse",
    questionsAboutReferral: "Har du spørgsmål om henvisning eller ventetid?",

    // Contact page
    contactInfo: "Kontaktoplysninger",
    contactPageDescription: "Kontakt Klinik for Ortopædkirurgi i Odense - telefon, adresse og kontaktformular",
    findUs: "Find os",
    mapDescription: "Centralt beliggende i Odense med god adgang fra tog, bus og privatbil. Gode parkeringsforhold (inkl. parkeringskælder).",
    mapFallback: "Se klinikkens placering på OpenStreetMap",
    formIntro: "Udfyld formularen herunder, og vi vender tilbage hurtigst muligt.",
    messageHint: "Beskriv kort hvad din henvendelse handler om.",
    sending: "Sender...",
    required: "påkrævet",

    // Staff page
    staffDescription: "Mød vores team af speciallæger og personale",

    // Treatment pages
    treatments: "Behandlinger",
    otherTreatments: "Andre behandlinger",
    referralRequired: "Henvisning krævet",
    referralRequiredText: "For at blive behandlet under sygesikringen skal du have en henvisning fra din praktiserende læge.",
    bookAppointment: "Bestil en tid",
    bookAppointmentText: "Kontakt os for at høre mere om denne behandling eller bestille en konsultation.",
    questionsAboutTreatment: "Har du spørgsmål?",
    questionsAboutTreatmentText: "Kontakt os for at høre mere om denne behandling eller bestille en tid.",

    // Patient guides
    patientInfo: "Patientinformation",
    aboutBlockade: "Om blokadebehandling",
    aboutBlockadeText: "Blokadebehandling kan sjældent stå alene og kræver opfølgende genoptræning og udstrækning for at forhindre tilbagefald og vævsforringelse. Effekten af binyrebarkhormon begynder typisk inden for 1-2 dage og kan vare op til 12 uger.",
    contactClinic: "Kontakt klinikken",
    contactClinicText: "Har du spørgsmål til denne vejledning, eller oplever du komplikationer efter behandling, kontakt venligst klinikken på telefon",
    otherGuides: "Andre patientvejledninger",

    // Category-specific content
    varicoseVeinsSymptoms: "Symptomer",
    varicoseVeinsSymptomsText: "Patienter oplever ofte tunghed, rastløshed, spænding, træthed og kramper i benene. Kosmetiske bekymringer er også hyppige.",
    varicoseVeinsRiskFactors: "Risikofaktorer",
    varicoseVeinsRiskFactorsText: "Tilstanden kan udvikle sig gennem genetiske faktorer eller fra venebetændelse, der involverer beskadigede dybe vener eller defekte veneklapper. Alvorlige risici inkluderer hudforandringer omkring anklen og kroniske bensår.",
    varicoseVeinsTreatment: "Behandling",
    varicoseVeinsTreatmentText: "Behandlingen fokuserer på lukning af de defekte veneklapper frem for blot at fjerne synlige åreknuder. Operationen udføres under lokalbedøvelse og kræver detaljeret kortlægning af benets venesystem.",
    varicoseVeinsTreatmentText2: "Ikke-kirurgiske muligheder inkluderer kompressionsstrømper eller medicin. Tilbagefald er almindeligt; behandlingen adresserer symptomerne snarere end at helbrede den underliggende tilstand.",
    varicoseVeinsReferral: "Henvisning",
    varicoseVeinsReferralText: "Klinikken følger Sundhedsstyrelsens retningslinjer for at afgøre, hvilke tilfælde der kvalificerer til operation i privat praksis versus hospitalsbaseret behandling.",

    arthritisAbout: "Om leddegigt",
    arthritisAboutText: "Leddegigt (reumatoid artrit) er en systemisk sygdom, der forårsager smertende led, stivhed og ledhævelse. RA påvirker 2-3% af mennesker over 55 år, selvom det kan forekomme i alle aldre.",
    arthritisAffectedAreas: "Påvirkede områder",
    arthritisAffectedAreasText: "Tilstanden påvirker fødderne i 85-90% af sygdomsprogressionstilfældene. Forfoden er mest almindeligt involveret, især ved tæernes grund. Tilstanden påvirker typisk metatarsal-ledhovederne og involverer gradvist mellemfoden, bagfoden og anklen.",
    arthritisPathology: "Patologi",
    arthritisPathologyText: "RA forårsager synovial inflammation, der fører til bruskødelæggelse, knogleerosion og ligamentforringelse. Dette resulterer i tåforskydning, hammertådannelse og potentielt fodbuekollaps (platfod).",
    arthritisSystemicSymptoms: "Systemiske symptomer",
    arthritisSystemicSymptomsText: "Ud over ledsymptomer oplever patienter træthed, feberlignende fornemmelser, appetitløshed og knuder omkring led.",

    arthrosamidWhat: "Hvad er Arthrosamid?",
    arthrosamidWhatText: "Arthrosamid er en hydrogel bestående af 97,5% vand og 2,5% polyacrylamid, der injiceres i knæleddet. Det fik CE-mærkning i 2021 og er FDA-godkendt i USA.",
    arthrosamidPurpose: "Behandlingsformål",
    arthrosamidPurposeText: "Proceduren behandler slidgigt i knæet (artrose), som påvirker ca. 270.000 danskere. Gelen giver smertelindring uden at blive nedbrudt af kroppen, hvilket eliminerer behovet for gentagne behandlinger.",
    arthrosamidResults: "Forventede resultater",
    arthrosamidResultsText: "Kliniske studier viser positive resultater:",
    arthrosamidResult1: "Ca. 80% af patienterne oplever 60% reduktion i smerte",
    arthrosamidResult2: "Smertelindring varer typisk minimum 3 år",
    arthrosamidResult3: "Maksimal effekt ses 6-14 uger efter behandling",
    arthrosamidProcedure: "Proceduren",
    arthrosamidProcedureText: "Behandlingen involverer:",
    arthrosamidProcedure1: "Forundersøgelse og antibiotikarecept",
    arthrosamidProcedure2: "Lokalbedøvelse",
    arthrosamidProcedure3: "Ultralydsvejledt injektion",
    arthrosamidProcedure4: "Ingen væsentlige bivirkninger rapporteret",
    arthrosamidRecovery: "Restitution",
    arthrosamidRecoveryText: "Hvile 1-2 uger uden anstrengende motion, derefter gradvis genoptagelse af aktivitet.",
    arthrosamidImportant: "Vigtig information",
    arthrosamidImportantText: "Fremtidig knæproteseoperation forbliver mulig; Arthrosamid-behandling forhindrer eller komplicerer ikke proteseimplantation.",
  },

  // Documents
  documents: {
    title: "Dokumenter",
    supervisionReport: "Tilsynsrapport",
    personalDataPolicy: "Behandling af personoplysninger",
  },

  // Cookie and Privacy Policy
  cookiePolicy: {
    title: "Cookie og privatlivspolitik",
    intro: "Denne side beskriver hvordan vi bruger cookies og behandler dine personoplysninger.",
    whatAreCookies: "Hvad er en cookie?",
    whatAreCookiesText: "En cookie er en lille datafil, som vi gemmer på din computer for at kunne genkende den. Cookies bruges til at huske dine indstillinger og til statistik.",

    necessaryCookies: "Nødvendige cookies",
    necessaryCookiesText: "Disse cookies er nødvendige for at hjemmesiden kan fungere korrekt.",

    preferenceCookies: "Præference cookies",
    preferenceCookiesText: "Disse cookies bruges til at huske dine valg og indstillinger på hjemmesiden.",

    analyticsCookies: "Statistik cookies",
    analyticsCookiesText: "Vi bruger Google Analytics til at analysere trafikken på hjemmesiden. Disse data bruges til at forbedre brugeroplevelsen. Du kan fravælge Google Analytics ved at installere",
    analyticsOptOut: "Google Analytics Opt-out Browser Add-on",

    marketingCookies: "Marketing cookies",
    marketingCookiesText: "Denne hjemmeside bruger ikke marketing cookies eller målrettet annoncering.",

    manageCookies: "Administrer cookies",
    manageCookiesText: "Du kan til enhver tid slette cookies fra din browser. Bemærk at dette kan påvirke hjemmesidens funktionalitet.",

    dataController: "Dataansvarlig",
    dataControllerText: "Speciallæge i Ortopædkirurgi Sinan Said",
    cvr: "CVR",

    consent: "Ved at bruge denne hjemmeside accepterer du vores brug af cookies som beskrevet ovenfor.",
  },

  // Footer
  footer: {
    copyright: "Klinik for Ortopædkirurgi",
    allRightsReserved: "Alle rettigheder forbeholdes",
    cookiePolicy: "Cookie og privatlivspolitik",
  },

  // Email templates
  email: {
    newInquiryFrom: "Ny henvendelse fra",
    newInquiryTitle: "Ny henvendelse fra kontaktformularen",
    sentFrom: "Sendt fra kontaktformularen på klinikforortopaedkirurgi.dk",
  },

  // 404 Error page
  error404: {
    title: "Side ikke fundet",
    description: "Den ønskede side kunne ikke findes",
    heading: "Side ikke fundet",
    text: "Den side du leder efter findes desværre ikke. Den kan være flyttet eller slettet.",
    goHome: "Gå til forsiden",
    maybeYouLookFor: "Måske du leder efter:",
  },
};

export type Translations = typeof da;
