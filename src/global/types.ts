export interface Film {
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
}

export interface FilmResponse {
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
}
