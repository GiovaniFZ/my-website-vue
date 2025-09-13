interface Image {
  '#text': string;
  size: 'small' | 'medium' | 'large' | 'extralarge';
}

export interface Track {
  album: {
    '#text': string;
    mbid: string;
  };
  artist: {
    '#text': string;
    mbid: string;
  };
  date: {
    '#text': string;
    uts: string;
  };
  image: Image[];
  mbid: string;
  name: string;
  streamable: string;
  url: string;
}