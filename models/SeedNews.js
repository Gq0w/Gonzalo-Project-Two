const mongoose = require('./connection')
const News = require('./news')

///////////////////////////////////////
// Seed Code
///////////////////////////////////////
// save my db connection to a variable for easy reference later
const db = mongoose.connection

// this runs the callback function when the db connection is opened from this file
db.on('open', () => {
    // array of starter fruits
    const startNews = [
        {
        "id": "a993a2fc-732e-4b10-b3c3-5ad47bac9a05",
        "title": "Dewan Rakyat passes two bills related to court",
        "description": "Parliament, Dewan Rakyat, Courts of Judicature, bi",
        "link": "http://www.bernama.com/en/news.php?id=2103830",
        "author": "bernama",
        "image": "https://www.bernama.com/storage/photos/4f3ce435704fccf415de7b9a04e9607e62dea2e506e0d-medium",
    
        }
        // {
        // "id": "4cc1c521-da8b-4464-bdac-02fc26b0bfae",
        // "title": "I want to be known as Muhammad Azeem, not 'Usain Bolt of Malaysia'",
        // "description": "Muhammad Azeem Mohd Fahmi, Usain Bolt of Malaysia,",
        // "url": "http://www.bernama.com/en/news.php?id=2103831",
        // "author": "bernama",
        // "image": "https://www.bernama.com/storage/photos/19d2fa3c382f643d17414a85a81f7b6162dea65d22c97-medium",
        // "language": "en",
        // "category": [
        // "regional"
        // ],
        // "published": "2022-07-25 22:16:23 +0000"
        // },
        // {
        // "id": "6382127e-3d21-4e17-8e12-2a1420c3485b",
        // "title": "Maternity leave with full allowance for KAFA teachers, Jakim awaits decision on appeal",
        // "description": "MOF, Idris Ahmad, Zafrul, KAFA, JAKIM, maternity",
        // "url": "http://www.bernama.com/en/news.php?id=2103834",
        // "author": "bernama",
        // "image": "https://www.bernama.com/storage/photos/4c39a3ffd2137df9375a242dcbc2a25962d927af97e09-medium",
        // "language": "en",
        // "category": [
        // "regional"
        // ],
        // "published": "2022-07-25 22:16:23 +0000"
        // },
        // {
        // "id": "6b2093c7-f723-49b7-81fd-f8e8ee72b060",
        // "title": "National sprint athletes train with aid of False Start Detection System",
        // "description": "athletics, sprint, ‘false start’, system, Mohd",
        // "url": "http://www.bernama.com/en/news.php?id=2103840",
        // "author": "bernama",
        // "image": "https://www.bernama.com/storage/photos/5bb11ba2701f49635aaee3b0d9dc439d61c1b5fc3fdd4-medium",
        // "language": "en",
        // "category": [
        // "regional"
        // ],
        // "published": "2022-07-25 22:16:23 +0000"
        // },
        // {
        // "id": "0908a162-f2b7-406f-93ed-4f6551b045d7",
        // "title": "Southeast Asian MPs condemn the executions of four political prisoners in Myanmar",
        // "description": "Myanmar, APHR, execution",
        // "url": "http://www.bernama.com/en/news.php?id=2103842",
        // "author": "bernama",
        // "image": "https://www.bernama.com/storage/photos/75b70a4ea79363d7e358add29576fa7262dead90ab4d4-medium",
        // "language": "en",
        // "category": [
        // "regional"
        // ],
        // "published": "2022-07-25 22:16:23 +0000"
        // },
        // {
        // "id": "44a0b7d2-ab7e-4e27-aa21-93ffbe283f8c",
        // "title": "Management of GLC-owned shopping malls to be reviewed - PM",
        // "description": "Uda, GLC, PM, Ismail Sabri Yaakob, bumiputera",
        // "url": "http://www.bernama.com/en/news.php?id=2103847",
        // "author": "bernama",
        // "image": "https://www.bernama.com/storage/photos/cec2fe615ea6d1860b247b85c599b6f562debca1bcce1-medium",
        // "language": "en",
        // "category": [
        // "regional"
        // ],
        // "published": "2022-07-25 22:16:23 +0000"
        // },
        // {
        // "id": "a6b84f57-9447-4c20-8964-0222f9986187",
        // "title": "UDA Holdings poised for another 50 years of success with 'LIFE'",
        // "description": "Norliza Abdul Rahim, UDA, anniversary, 50th, LIFE,",
        // "url": "http://www.bernama.com/en/news.php?id=2103849",
        // "author": "bernama",
        // "image": "https://www.bernama.com/storage/photos/bb7b1498501d27c6478039b7c9dc607f62debda2a71b8-medium",
        // "language": "en",
        // "category": [
        // "regional"
        // ],
        // "published": "2022-07-25 22:16:23 +0000"
        // },
        // {
        // "id": "86ba1f92-72cf-40bd-8f11-43a933d9c5a4",
        // "title": "KPLB has channelled RM10 mln for rural entrepreneur empowerment activities",
        // "description": "Mahdzir Khalid, AKUP, rural, entrepreneurs, RP2, R",
        // "url": "http://www.bernama.com/en/news.php?id=2103853",
        // "author": "bernama",
        // "image": "https://www.bernama.com/storage/photos/94d492e550930eb40b3d6bea281d64dc62dec6c12b97a-medium",
        // "language": "en",
        // "category": [
        // "regional"
        // ],
        // "published": "2022-07-25 22:16:23 +0000"
        // },
        // {
        // "id": "b2737687-0a42-40e7-b540-b894614f6097",
        // "title": "Sabah Japen to implement programmes promoting unity, nationalism beginning Sunday (July 31)",
        // "description": "Sabah, Nadzerah Abdullah, Sabah, information depar",
        // "url": "http://www.bernama.com/en/news.php?id=2103855",
        // "author": "bernama",
        // "image": "https://www.bernama.com/storage/photos/88bf4b30e631fcc2a2da7d819b30eca86140874d3d160-medium",
        // "language": "en",
        // "category": [
        // "regional"
        // ],
        // "published": "2022-07-25 22:16:23 +0000"
        // },
        // {
        // "id": "22d8eac5-7a02-4267-bbde-b171cf781e53",
        // "title": "Borneo Cultures Museum to charge visitors starting Aug 1",
        // "description": "museum, borneo, ticket, visitor, Abdul Karim, Sara",
        // "url": "http://www.bernama.com/en/news.php?id=2103857",
        // "author": "bernama",
        // "image": "https://www.bernama.com/storage/photos/5b7c5bc051969245360cf5dae57b0cfb62ded0fdd1fa3-medium",
        // "language": "en",
        // "category": [
        // "regional"
        // ],
        // "published": "2022-07-25 22:16:23 +0000"
        // },
        // {
        // "id": "61f39d14-4d68-452c-9a1a-7bf37810cd30",
        // "title": "Australian politics live: parliament returns as Labor pushes for emissions deal; Covid pressures lead to record hospitalisations",
        // "description": "Follow the day’s news, live",
        // "url": "https://www.theguardian.com/australia-news/live/2022/jul/26/australian-politics-live-parliament-returns-election-labor-anthony-albanese-covid-cases-hospitals-aged-care-climate-emissions-deal-teals-environment-industrial-relations",
        // "author": "Amy Remeikis",
        // "image": "https://i.guim.co.uk/img/media/6f5114219ee6f57cd89896697cda3b9a365c3937/0_236_4500_2700/master/4500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=ad05294c086e999ea46e3b8569df5096",
        // "language": "en",
        // "category": [
        // "politics",
        // "regional"
        // ],
        // "published": "2022-07-25 22:15:46 +0000"
        // },
        // {
        // "id": "66eb7513-2771-43eb-b312-0bd158b89a9f",
        // "title": "US Treasury Officials: Overall economic strength belies weak GDP",
        // "description": "\"US Treasury officials said on Monday overall income and jobs figures suggested the economy was in good health and not in a recession, even if data due this week shows gross domestic product falling for a second consecutive quarter,\" reported Reuters. Key quotes Ben Harris, Treasury assistant secret...",
        // "url": "https://www.fxstreet.com/news/us-treasury-officials-overall-economic-strength-belies-weak-gdp-202207252215",
        // "author": "Anil Panchal",
        // "image": "None",
        // "language": "en",
        // "category": [
        // "finance"
        // ],
        // "published": "2022-07-25 22:15:00 +0000"
        // },
        // {
        // "id": "2910e8a4-3acb-4c54-aee1-8d22e25617ef",
        // "title": "Microsoft began selling licensed digital copies of Windows 11 on its website",
        // "description": "Microsoft began selling licensed digital copies of Windows 11 on its website. Microsoft now sells Windows 11 licenses directly.",
        // "url": "https://www.gizchina.com/2022/07/25/microsoft-began-selling-licensed-digital-copies-of-windows-11-on-its-website/",
        // "author": "Abdullah",
        // "image": "https://www.gizchina.com/wp-content/uploads/images/2022/04/imagem_2022-04-30_142813838.png",
        // "language": "en",
        // "category": [
        // "technology"
        // ],
        // "published": "2022-07-25 22:10:52 +0000"
        // },
        // {
        // "id": "6c82d7b6-8d31-4334-ba4c-9eb66fe80fb8",
        // "title": "Watch Live: Mike Pence on America’s future and freedom",
        // "description": "Former Vice President Mike Pence will deliver remarks Monday evening on policy recommendations for America’s future. The event is scheduled to begin at 5 p.m. ET. Watch the video above.",
        // "url": "https://thehill.com/homenews/3573658-watch-live-mike-pence-on-americas-future-and-freedom/",
        // "author": "thehill",
        // "image": "https://thehill.com/wp-content/uploads/sites/2/2022/05/cropped-favicon.png?strip=1",
        // "language": "en",
        // "category": [
        // "politics"
        // ],
        // "published": "2022-07-25 22:10:00 +0000"
        // },
        // {
        // "id": "3febb9b2-59dd-402f-928e-2da7530118bc",
        // "title": "How to create employment stability? The Israeli high-tech locomotive has ideas",
        // "description": "During the past few years, Ukraine has made a name for itself as a leading alternative for Israeli companies and Israeli entrepreneurs, searching for high qualified tech workers outside of Israel, whe...",
        // "url": "https://blogs.timesofisrael.com/how-to-create-employment-stability-the-israeli-high-tech-locomotive-has-ideas/",
        // "author": "Shlomo Amar",
        // "image": "https://static.timesofisrael.com/blogs/uploads/users/solomon_shlomo_amar1657601445-400x400.jpg",
        // "language": "en",
        // "category": [
        // "startup"
        // ],
        // "published": "2022-07-25 22:07:55 +0000"
        // },
        // {
        // "id": "8e461ab3-d675-4158-b802-cd82c8f9bd00",
        // "title": "Typically mild Pacific north-west braces for another blazing heatwave",
        // "description": "Officials urge residents to take precautions as forecasts point to temperatures far above historic averages",
        // "url": "https://www.theguardian.com/us-news/2022/jul/25/pacific-northwest-heat-wave-weather-climate",
        // "author": "Maanvi Singh,agencies",
        // "image": "https://i.guim.co.uk/img/media/02f103a55ffffdbc1db017fb9319e4f657d1832e/110_0_3300_1980/master/3300.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=76bedc1e0e6f2e0de6df89b90c84b574",
        // "language": "en",
        // "category": [
        // "regional"
        // ],
        // "published": "2022-07-25 22:05:36 +0000"
        // },
        // {
        // "id": "26bb56eb-82f7-4522-a14e-55eec3fec72c",
        // "title": "Biden begs Congress to pass $52 billion semiconductor bill",
        // "description": "President Biden on Monday pleaded with Congress to pass a $52 billion payout to semiconductor manufacturers as lawmakers face a make-or-break week to get the bill across the finish line.",
        // "url": "https://www.washingtontimes.com/news/2022/jul/25/biden-begs-congress-pass-52-billion-semiconductor-/",
        // "author": "Joseph Clark,Ramsey Touchberry",
        // "image": "https://twt-thumbs.washtimes.com/media/image/2022/07/25/biden_33366_c0-240-5756-3597_s1200x700.jpg?2bb786973bff9e7f9a56de6efdab4ef74a7e9097",
        // "language": "en",
        // "category": [
        // "politics"
        // ],
        // "published": "2022-07-25 22:05:25 +0000"
        // },
        // {
        // "id": "fc3f28ca-3804-4583-9c39-1b043afde526",
        // "title": "Ravens' Lamar Jackson faces criticism from anonymous NFL coach: 'He is just so inconsistent throwing the ball'",
        // "description": "Baltimore Ravens star Lamar Jackson won an MVP and won 37 games as the team's starting quarterback since he took the reins in 2018 and is next in line to receive a lucrative contract extension. However, he's still receiving criticism from figures in the NFL. One anonymous defensive coordinator wasn'...",
        // "url": "https://www.foxnews.com/sports/ravens-lamar-jackson-faces-criticism-anonymous-nfl-coach-he-just-inconsistent-throwing-ball",
        // "author": "foxnews",
        // "image": "https://static.foxnews.com/foxnews.com/content/uploads/2022/07/Lamar-Jackson4.jpg",
        // "language": "en",
        // "category": [
        // "sports"
        // ],
        // "published": "2022-07-25 22:04:27 +0000"
        // },
        // {
        // "id": "143d6e17-f6e9-402b-8fdb-d1de479b17ba",
        // "title": "Stock futures fall after Walmart cuts forecast, says inflation hit consumer spending",
        // "description": "Walmart's announcement alarmed investors who weighed the implications for other retail stocks.",
        // "url": "https://www.cnbc.com/2022/07/25/stock-market-futures-open-to-close-news.html",
        // "author": "cnbc",
        // "image": "https://image.cnbcfm.com/api/v1/image/107082094-NYSE-Trading-Floor-Photo-220628-CC-PRESS-2.jpg?v=1656444287&w=1920&h=1080",
        // "language": "en",
        // "category": [
        // "general"
        // ],
        // "published": "2022-07-25 22:02:44 +0000"
        // },
        // {
        // "id": "a8f004f5-8671-4ca6-9469-fc9e94c15c4e",
        // "title": "Manly pride jersey sells out despite NRL match boycott by some players",
        // "description": "Sea Eagles face the prospect of being without several players for the Roosters clash, but the strip has sold out online",
        // "url": "https://www.theguardian.com/sport/2022/jul/26/manly-pride-jersey-sells-out-despite-nrl-match-boycott-by-some-players",
        // "author": "Australian Associated Press",
        // "image": "https://i.guim.co.uk/img/media/fcee28794f4ff34c525a3c51b08a5072d85acc5a/0_324_4863_2918/master/4863.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ca4cdb51a7f738f3af9ffe2c913b50e9",
        // "language": "en",
        // "category": [
        // "regional"
        // ],
        // "published": "2022-07-25 22:02:20 +0000"
        // },
        // {
        // "id": "e0842d47-25dd-436d-8b2f-deed4c266c47",
        // "title": "Biden’s virus symptoms nearly gone as Americans no longer live in crisis mode",
        // "description": "President Biden’s virus symptoms were almost completely resolved by Monday in the latest sign the hair-on-fire emergency phase of the COVID-19 pandemic is over.",
        // "url": "https://www.washingtontimes.com/news/2022/jul/25/joe-bidens-covid-19-symptoms-nearly-gone-americans/",
        // "author": "Tom Howell Jr.",
        // "image": "https://twt-thumbs.washtimes.com/media/image/2022/07/25/Biden_25603.jpg-d9600_c0-213-4652-2926_s1200x700.jpg?4640a66a2df49e85c2f6c68bac55c2036d381ad8",
        // "language": "en",
        // "category": [
        // "politics"
        // ],
        // "published": "2022-07-25 22:00:11 +0000"
        // },
        // {
        // "id": "e0235791-f83c-4f38-9bb0-09a8fda18943",
        // "title": "America First think tank’s Washington conference offers 2024 policy platform for GOP",
        // "description": "Conservatives gathered in Washington on Monday to push forward a Trump-inspired platform for the 2024 GOP presidential nominee that stressed law and order, economic prosperity and border security.",
        // "url": "https://www.washingtontimes.com/news/2022/jul/25/america-first-think-tanks-washington-conference-of/",
        // "author": "Kerry Picket",
        // "image": "https://twt-thumbs.washtimes.com/media/image/2018/10/14/AP_16326847136025_c0-558-4432-3143_s1200x700.jpg?416f870ebdd71d2120976846db098d2ebf02a542",
        // "language": "en",
        // "category": [
        // "politics"
        // ],
        // "published": "2022-07-25 22:00:11 +0000"
        // },
        // {
        // "id": "6b2aee08-f7c0-4bc8-8cf6-7d1c651c92fa",
        // "title": "ProFrac Holding Corp. Completes Acquisition of West Texas Sand Operations and Related Upsize of its Term Loan",
        // "description": "/PRNewswire/ -- ProFrac Holding Corp. (NASDAQ: PFHC) (\"ProFrac\" or the \"Company\") announced today that it successfully completed its acquisition of SP Silica...",
        // "url": "https://www.prnewswire.com:443/news-releases/profrac-holding-corp-completes-acquisition-of-west-texas-sand-operations-and-related-upsize-of-its-term-loan-301592798.html",
        // "author": "",
        // "image": "None",
        // "language": "en",
        // "category": [
        // "company"
        // ],
        // "published": "2022-07-25 22:00:00 +0000"
        // },
        // {
        // "id": "87ae1f86-fc1e-456c-b6e7-dbc573eef1a4",
        // "title": "Rising penetration of cloud computing and other advanced technologies have offered absolute dollar opportunity of US $ 273.8 Billion to managed services providers until 2032",
        // "description": "Surge in need for data centre and IT Infrastructure is expected to boost managed services market by 7.4% CAGR by 2032. ...",
        // "url": "https://www.globenewswire.com/news-release/2022/07/25/2485449/0/en/Rising-penetration-of-cloud-computing-and-other-advanced-technologies-have-offered-absolute-dollar-opportunity-of-US-273-8-Billion-to-managed-services-providers-until-2032.html",
        // "author": "NewsDesk",
        // "image": "https://ml.globenewswire.com/Resource/Download/f482b854-04d1-4f4e-9237-f7c7c6823e10?size=1",
        // "language": "en",
        // "category": [
        // "company"
        // ],
        // "published": "2022-07-25 22:00:00 +0000"
        // },
        // {
        // "id": "542124c4-5de9-4aaf-87c6-594ea4c115b8",
        // "title": "SOUTHERN MISSOURI BANCORP REPORTS PRELIMINARY RESULTS FOR FOURTH QUARTER OF FISCAL 2022; DECLARES QUARTERLY DIVIDEND OF $0.21 PER COMMON SHARE; CONFERENCE CALL SCHEDULED FOR TUESDAY, JULY 26, AT 9:30AM CENTRAL TIME",
        // "description": "Poplar Bluff, Missouri, July 25, 2022 (GLOBE NEWSWIRE) -- Southern Missouri Bancorp, Inc. (“Company”) (NASDAQ: SMBC), the parent corporation of Southern...",
        // "url": "https://www.globenewswire.com/news-release/2022/07/25/2485450/19601/en/SOUTHERN-MISSOURI-BANCORP-REPORTS-PRELIMINARY-RESULTS-FOR-FOURTH-QUARTER-OF-FISCAL-2022-DECLARES-QUARTERLY-DIVIDEND-OF-0-21-PER-COMMON-SHARE-CONFERENCE-CALL-SCHEDULED-FOR-TUESDAY-J.html",
        // "author": "NewsDesk",
        // "image": "https://ml.globenewswire.com/Resource/Download/2945d60b-0156-4898-99b1-e604863c003a?size=1",
        // "language": "en",
        // "category": [
        // "company"
        // ],
        // "published": "2022-07-25 22:00:00 +0000"
        // },
        // {
        // "id": "10574f1f-21e9-4c83-b525-f5369fa3dfa4",
        // "title": "First Savings Financial Group, Inc. Reports Financial Results for the Third Fiscal Quarter Ended June 30, 2022",
        // "description": "JEFFERSONVILLE, Ind., July 25, 2022 (GLOBE NEWSWIRE) -- First Savings Financial Group, Inc. (NASDAQ: FSFG - news) (the \"Company\"), the holding company...",
        // "url": "https://www.globenewswire.com/news-release/2022/07/25/2485451/10976/en/First-Savings-Financial-Group-Inc-Reports-Financial-Results-for-the-Third-Fiscal-Quarter-Ended-June-30-2022.html",
        // "author": "NewsDesk",
        // "image": "https://ml.globenewswire.com/Resource/Download/6ede4e8b-5c0b-434c-970f-cfde56a96fa1?size=1",
        // "language": "en",
        // "category": [
        // "company"
        // ],
        // "published": "2022-07-25 22:00:00 +0000"
        // },
        // {
        // "id": "d578438a-3991-4160-8f38-5619710eb1e2",
        // "title": "Ex-Hokies LB cleared of murder joins Iowa JUCO",
        // "description": "Former Virginia Tech linebacker Isi Etute, who entered the transfer portal in June after being found not guilty of murder in May, is heading to Iowa Western Community College.",
        // "url": "https://www.espn.com/college-football/story/_/id/34294436/former-virginia-tech-lb-isi-etute-play-iowa-community-college-being-found-not-guilty-murder",
        // "author": "espn",
        // "image": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0107%2Fr485854_1296x729_16%2D9.jpg",
        // "language": "en",
        // "category": [
        // "sports"
        // ],
        // "published": "2022-07-25 21:59:34 +0000"
        // },
        // {
        //     "id": "7f3dd630-4477-41d1-8566-6e1d1177bf17",
        //     "title": "Chicago mayor proposes dome for Soldier Field",
        //     "description": "LAKE FOREST, Ill. -- Chicago Mayor Lori Lightfoot revealed three proposals on Monday for renovations to Soldier Field to entice the Bears to remain at their home stadium of the past 50 years.\n\nAt the ...",
        //     "url": "https://www.espn.com/nfl/story/_/id/34294467/city-chicago-pitches-dome-soldier-field-entice-bears",
        //     "author": "Courtney Cronin",
        //     "image": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0725%2Fr1040426_1296x729_16%2D9.jpg",
        //     "language": "en",
        //     "category": [
        //     "sports"
        // ],
        // "published": "2022-07-25 21:59:34 +0000"
        // },
        // {
        //     "id": "3123c99b-c245-452a-b9b3-55cfa15b2dd7",
        //     "title": "Source: Packers extend LaFleur, GM Gutekunst",
        //     "description": "Chris Canty explains why Aaron Rodgers' new contract puts him under the biggest spotlight to win a Super Bowl this season. (1:23)\n\nWhy Rodgers is the QB under the most pressure to win a Super Bowl (1:...",
        //     "url": "https://www.espn.com/nfl/story/_/id/34294558/green-bay-packers-extend-contracts-head-coach-matt-lafleur-general-manager-brian-gutekunst-source-says",
        //     "author": "Rob Demovsky",
        //     "image": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0110%2Fr960097_1296x729_16%2D9.jpg",
        //     "language": "en",
        //     "category": [
        //     "sports"
        // ],
        // "published": "2022-07-25 21:59:34 +0000"
        // },
        // {
        //     "id": "ba6155ad-85b8-43f6-8334-4bb24458d2d7",
        //     "title": "Garcia alters course, wants to stay on Euro tour",
        //     "description": "LIV Golf Invitational Series player Sergio Garcia says he has changed his mind on giving up his DP World Tour membership.\n\n\"When I finished the Open Championship [last] Sunday, I said that I was most ...",
        //     "url": "https://www.espn.com/golf/story/_/id/34293614/liv-golfer-sergio-garcia-changes-mind-not-resigning-dp-world-tour-membership",
        //     "author": "Michael Collins",
        //     "image": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0725%2Fr1040368_1296x729_16%2D9.jpg",
        //     "language": "en",
        //     "category": [
        //     "sports"
        // ],
        // "published": "2022-07-25 21:59:34 +0000"
        // }
        ]
        

    // when we seed data, we usually clear out the db first
    News.remove({})
    // then we create that data
        .then(deletedNews => {
            console.log('this is what remove returns', deletedNews)

            // now that our delete was successful, we can create our fruits
            News.create(startNews)
                .then(data => {
                    console.log('the news', data)
                    db.close()
                })
                .catch(error => {
                    console.log('error:', error)
                    db.close()
                })
        })
        .catch(error => {
            console.log('error:', error)
            db.close()
        })
    // whether it's successful or not, we want to close our db connection
})