// import MovieCard from "./MovieCard";
import {useState} from 'react';
import MovieCard from './MovieCard';


const MovieList = () => {
    const [movies, setMovies] = useState([
        {
            "adult": false,
            "backdrop_path": "/4woSOUD0equAYzvwhWBHIJDCM88.jpg",
            "genre_ids": [
                28,
                27,
                53
            ],
            "id": 1096197,
            "original_language": "en",
            "original_title": "No Way Up",
            "overview": "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
            "popularity": 1480.125,
            "poster_path": "/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
            "release_date": "2024-01-18",
            "title": "No Way Up",
            "video": false,
            "vote_average": 5.742,
            "vote_count": 126
        },
        {
            "adult": false,
            "backdrop_path": "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
            "genre_ids": [
                28,
                12,
                878
            ],
            "id": 693134,
            "original_language": "en",
            "original_title": "Dune: Part Two",
            "overview": "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
            "popularity": 1265.804,
            "poster_path": "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
            "release_date": "2024-02-27",
            "title": "Dune: Part Two",
            "video": false,
            "vote_average": 8.453,
            "vote_count": 1025
        },
        {
            "adult": false,
            "backdrop_path": "/o6e8Y0Q7RZIWi4qcJq4s5OYOVJs.jpg",
            "genre_ids": [
                878,
                10749,
                35
            ],
            "id": 792307,
            "original_language": "en",
            "original_title": "Poor Things",
            "overview": "Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
            "popularity": 976.8,
            "poster_path": "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
            "release_date": "2023-12-07",
            "title": "Poor Things",
            "video": false,
            "vote_average": 7.97,
            "vote_count": 1874
        },
        {
            "adult": false,
            "backdrop_path": "/oBIQDKcqNxKckjugtmzpIIOgoc4.jpg",
            "genre_ids": [
                28,
                53,
                10752
            ],
            "id": 969492,
            "original_language": "en",
            "original_title": "Land of Bad",
            "overview": "When a Delta Force special ops mission goes terribly wrong, Air Force drone pilot Reaper has 48 hours to remedy what has devolved into a wild rescue operation. With no weapons and no communication other than the drone above, the ground mission suddenly becomes a full-scale battle when the team is discovered by the enemy.",
            "popularity": 956.514,
            "poster_path": "/h27WHO2czaY5twDmV3Wfx5IdqoE.jpg",
            "release_date": "2024-01-25",
            "title": "Land of Bad",
            "video": false,
            "vote_average": 6.961,
            "vote_count": 298
        },
        {
            "adult": false,
            "backdrop_path": "/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg",
            "genre_ids": [
                35,
                10749
            ],
            "id": 1072790,
            "original_language": "en",
            "original_title": "Anyone But You",
            "overview": "After an amazing first date, Bea and Ben’s fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
            "popularity": 932.844,
            "poster_path": "/yRt7MGBElkLQOYRvLTT1b3B1rcp.jpg",
            "release_date": "2023-12-21",
            "title": "Anyone But You",
            "video": false,
            "vote_average": 7.0,
            "vote_count": 856
        },
        {
            "adult": false,
            "backdrop_path": "/ekRp1sEA8pnuzVHQkUESTgNSKdW.jpg",
            "genre_ids": [
                878,
                28,
                80
            ],
            "id": 932420,
            "original_language": "en",
            "original_title": "Code 8 Part II",
            "overview": "In a world where superpowered people are heavily policed by robots, an ex-con teams up with a drug lord he despises to protect a teen from a corrupt cop.",
            "popularity": 1222.829,
            "poster_path": "/hhvMTxlTZtnCOe7YFhod9uz3m37.jpg",
            "release_date": "2024-02-27",
            "title": "Code 8 Part II",
            "video": false,
            "vote_average": 6.6,
            "vote_count": 171
        },
        {
            "adult": false,
            "backdrop_path": "/meyhnvssZOPPjud4F1CjOb4snET.jpg",
            "genre_ids": [
                16,
                28,
                12,
                35,
                10751
            ],
            "id": 940551,
            "original_language": "en",
            "original_title": "Migration",
            "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
            "popularity": 851.447,
            "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
            "release_date": "2023-12-06",
            "title": "Migration",
            "video": false,
            "vote_average": 7.6,
            "vote_count": 865
        },
        {
            "adult": false,
            "backdrop_path": "/xi2pblvQtCnh26SeOYzx1YX3DLT.jpg",
            "genre_ids": [
                80,
                28,
                53
            ],
            "id": 1227816,
            "original_language": "en",
            "original_title": "Red Right Hand",
            "overview": "Cash is trying to live a quiet, honest life in a small Appalachian town. When a vicious crime boss forces him back into her services, he soon learns he's capable of anything -- even killing -- to protect his family and his home.",
            "popularity": 733.638,
            "poster_path": "/vfEG79SQIg3p6B8rBLVeIo2BBhb.jpg",
            "release_date": "2024-02-22",
            "title": "Red Right Hand",
            "video": false,
            "vote_average": 7.209,
            "vote_count": 43
        },
        {
            "adult": false,
            "backdrop_path": "/fCwwzOziFYs7YRwP4gbrb9qH1xg.jpg",
            "genre_ids": [
                28,
                12,
                16,
                35,
                10751
            ],
            "id": 1011985,
            "original_language": "en",
            "original_title": "Kung Fu Panda 4",
            "overview": "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
            "popularity": 815.015,
            "poster_path": "/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
            "release_date": "2024-03-02",
            "title": "Kung Fu Panda 4",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 14
        },
        {
            "adult": false,
            "backdrop_path": "/lzWHmYdfeFiMIY4JaMmtR7GEli3.jpg",
            "genre_ids": [
                878,
                12
            ],
            "id": 438631,
            "original_language": "en",
            "original_title": "Dune",
            "overview": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
            "popularity": 738.715,
            "poster_path": "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
            "release_date": "2021-09-15",
            "title": "Dune",
            "video": false,
            "vote_average": 7.789,
            "vote_count": 10554
        },
        {
            "adult": false,
            "backdrop_path": "/hIUs8RzKlrzgbWxn2EpWmiTFqCc.jpg",
            "genre_ids": [
                878,
                53
            ],
            "id": 870404,
            "original_language": "en",
            "original_title": "Meteor",
            "overview": "After a meteor collides into Earth, a lonely rancher and a lost young girl are on the run from vicious mercenaries.",
            "popularity": 762.876,
            "poster_path": "/tVMddOS5bi3YPVPgTPlEw0TOWoF.jpg",
            "release_date": "2021-09-01",
            "title": "Meteor",
            "video": false,
            "vote_average": 5.546,
            "vote_count": 76
        },
        {
            "adult": false,
            "backdrop_path": "/td2NcEUn7MPWzpFFjvHLsVQ2pkZ.jpg",
            "genre_ids": [
                28,
                53
            ],
            "id": 984249,
            "original_language": "en",
            "original_title": "Ruthless",
            "overview": "A high school coach, whose teenage daughter was murdered, takes matters into his own hands by going after the men who kidnap his students for their sex trafficking operation.",
            "popularity": 732.307,
            "poster_path": "/3hVt5fEuUxNZ5h6ynczcUbq6lpJ.jpg",
            "release_date": "2023-12-14",
            "title": "Ruthless",
            "video": false,
            "vote_average": 6.85,
            "vote_count": 20
        },
        {
            "adult": false,
            "backdrop_path": "/xiAyufulheAWDWuZPVvV3Q9LIXc.jpg",
            "genre_ids": [
                80,
                28
            ],
            "id": 799710,
            "original_language": "ko",
            "original_title": "더 와일드: 야수들의 전쟁",
            "overview": "Woo-chul used to be a successful boxer, but he had to go to prison because his opponent died in the middle of a match. Now that he’s been released, he intends to become a model citizen. Meanwhile, his friend Do-shik will do whatever it takes to get ahead. After choosing different paths, they will be forced to plot against and betray one another.",
            "popularity": 531.267,
            "poster_path": "/otPBQncqsboG6MyAeGY8Pur7Vac.jpg",
            "release_date": "2023-11-15",
            "title": "The Wild",
            "video": false,
            "vote_average": 5.2,
            "vote_count": 6
        },
        {
            "adult": false,
            "backdrop_path": "/gzlprPDmKCS4bUT4BxQZmJfpMX9.jpg",
            "genre_ids": [
                878,
                18
            ],
            "id": 636706,
            "original_language": "en",
            "original_title": "Spaceman",
            "overview": "During a research mission, an astronaut discovers that his marriage is in trouble. Luckily, he has the help of a mysterious creature hidden in his ship.",
            "popularity": 584.143,
            "poster_path": "/5hnFFOWEchErNVr0wMLWFEob3q1.jpg",
            "release_date": "2024-02-23",
            "title": "Spaceman",
            "video": false,
            "vote_average": 6.722,
            "vote_count": 207
        },
        {
            "adult": false,
            "backdrop_path": "/yyFc8Iclt2jxPmLztbP617xXllT.jpg",
            "genre_ids": [
                35,
                10751,
                14
            ],
            "id": 787699,
            "original_language": "en",
            "original_title": "Wonka",
            "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
            "popularity": 583.612,
            "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
            "release_date": "2023-12-06",
            "title": "Wonka",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 2387
        },
        {
            "adult": false,
            "backdrop_path": "/3Kzc6V4MWs3RXCmE5DhAYnfWL8F.jpg",
            "genre_ids": [
                16,
                35,
                878
            ],
            "id": 1239251,
            "original_language": "en",
            "original_title": "Megamind vs. the Doom Syndicate",
            "overview": "Megamind's former villain team, The Doom Syndicate, has returned. Our newly crowned blue hero must now keep up evil appearances until he can assemble his friends (Roxanne, Ol' Chum and Keiko) to stop his former evil teammates from launching Metro City to the Moon.",
            "popularity": 569.022,
            "poster_path": "/1N7terrMeZPwK5qq31MUD0HQ3IG.jpg",
            "release_date": "2024-03-01",
            "title": "Megamind vs. the Doom Syndicate",
            "video": false,
            "vote_average": 5.8,
            "vote_count": 73
        },
        {
            "adult": false,
            "backdrop_path": "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
            "genre_ids": [
                28,
                53,
                18
            ],
            "id": 866398,
            "original_language": "en",
            "original_title": "The Beekeeper",
            "overview": "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
            "popularity": 556.812,
            "poster_path": "/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
            "release_date": "2024-01-10",
            "title": "The Beekeeper",
            "video": false,
            "vote_average": 7.457,
            "vote_count": 1576
        },
        {
            "adult": false,
            "backdrop_path": "/s9YTxwaByYeoSqugYjJJtZjMRAG.jpg",
            "genre_ids": [
                28,
                27,
                35,
                53
            ],
            "id": 1211483,
            "original_language": "en",
            "original_title": "Skal - Fight for Survival",
            "overview": "My name's Arthur, a huge Internet star who's just hit 3 million subs. While in the midst of throwing an epic party to celebrate, the universe had the balls to bring on the effing apocalypse and cut my night short. What was supposed to be a perfect hangover, has turned into an epic fight for survival.",
            "popularity": 517.058,
            "poster_path": "/1On8iF3AsFIbpyfZg1xiGWMAFBn.jpg",
            "release_date": "2023-11-24",
            "title": "Skal - Fight for Survival",
            "video": false,
            "vote_average": 5.56,
            "vote_count": 50
        },
        {
            "adult": false,
            "backdrop_path": "/mOQV573Tr0WxI2VVOLKwtfaRGZH.jpg",
            "genre_ids": [
                10749,
                35,
                12
            ],
            "id": 949429,
            "original_language": "th",
            "original_title": "ผจญภัยล่าขุมทรัพย์หมื่นลี้",
            "overview": "Joy, a secretary at a large multinational company, has an online shopping problem, likes to read adventure novels and watch travel and adventure shows. She daydreams about living a life of adventure.",
            "popularity": 511.393,
            "poster_path": "/z3SeS4wjKQ3TjHSvRidovGJbHYb.jpg",
            "release_date": "2023-12-22",
            "title": "The Adventures",
            "video": false,
            "vote_average": 6.364,
            "vote_count": 11
        },
        {
            "adult": false,
            "backdrop_path": "/i1Lx1Whonfh8awXkYx3bGinK2V8.jpg",
            "genre_ids": [
                28,
                53
            ],
            "id": 872542,
            "original_language": "en",
            "original_title": "Agent Game",
            "overview": "Harris, a CIA interrogator at an Agency black site, finds himself the target of a rendition operation after being scapegoated for an interrogation gone horribly wrong. As the team tasked to bring Harris in begins to question their orders -- and each other --Olsen, a senior intelligence officer, and his subordinate, Visser, raise the stakes. Now, it's up to Harris and some newfound allies to uncover the truth and turn the tables.",
            "popularity": 501.754,
            "poster_path": "/qXJFjgcV7ESRHUSxZiBA4PzRMIx.jpg",
            "release_date": "2022-04-08",
            "title": "Agent Game",
            "video": false,
            "vote_average": 5.0,
            "vote_count": 74
        }
    ]);

    return (
        <div className='flex flex-row flex-wrap items-center justify-center'>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <MovieCard title={movie.title} image={movie.poster_path} />
                </div>
            ))}
        </div>
    )
}

export default MovieList;