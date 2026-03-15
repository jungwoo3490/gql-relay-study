import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import type { FilmMeta_film$key } from "./__generated__/FilmMeta_film.graphql";

const filmMetaFragment = graphql`
  fragment FilmMeta_film on Film {
    director
    releaseDate
  }
`;

export function FilmMeta({ film }: { film: FilmMeta_film$key }) {
  const data = useFragment(filmMetaFragment, film);
  return (
    <p>
      감독: {data.director} | 개봉일: {data.releaseDate}
    </p>
  );
}
