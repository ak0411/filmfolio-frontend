export type UserProfile = {
  name: string | null;
  username: string;
};

export type UserToken = {
  name: string | null;
  username: string;
  token: string;
};

export type Film = {
  title: string;
  genres: string[];
  overview: string;
  reviews: {
    text: string;
    rating: string;
  }[];
  imdb_id: string;
  release_date: string;
  poster_path: string;
  favorites: number;
};

export type FilmsPage = {
  content: Film[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    unpaged: boolean;
    paged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  empty: boolean;
};

export const genres = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'History',
  'Horror',
  'Music',
  'Mystery',
  'Romance',
  'Science Fiction',
  'TV Movie',
  'Thriller',
  'War',
  'Western',
  'Action & Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Kids',
  'Mystery',
  'News',
  'Reality',
  'Sci-Fi & Fantasy',
  'Soap',
  'Talk',
  'War & Politics',
  'Western',
];
