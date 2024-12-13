interface AudioPLayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPLayer: AudioPLayer = {
  audioVolume: 100,
  songDuration: 7,
  song: "One",
  details: {
    author: "Metallica",
    year: 1991,
  },
};

//const { song, songDuration, details } = audioPLayer;

//const { author: autorCancion, year } = audioPLayer.details;

//const { author } = details;

//console.log(song, songDuration, author);

//console.log(autorCancion, year);


const [p1, p2, trunks] : string[] = ['GOKU', 'VEGETA', 'TRUNKS']


console.log('Char 3:', trunks)


