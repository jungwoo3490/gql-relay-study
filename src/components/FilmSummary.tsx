import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import type { FilmSummary_film$key } from "./__generated__/FilmSummary_film.graphql";

const filmSummaryFragment = graphql`
  fragment FilmSummary_film on Film {
    openingCrawl
  }
`;

export function FilmSummary({ film }: { film: FilmSummary_film$key }) {
  const data = useFragment(filmSummaryFragment, film);
  return <p>{data.openingCrawl}</p>;
}
