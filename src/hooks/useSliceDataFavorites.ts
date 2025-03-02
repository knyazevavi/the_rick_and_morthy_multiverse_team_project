import { useGetCharacterByIdQuery } from "../api/characterApi";
import { useEffect, useState } from "react";
// import { favoriteInitialState } from "../shared/constants/constants";

export const useSliceDataFavorites = (page: number, count: number) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);
  
  // console.log(favoriteInitialState.favorites);
  // const totalCharacters = favorites.length;
  // let checkData = true;
  // if (totalCharacters == 0)
  //   checkData = false;

  const arrId: Array<number> = [...Array(100)].map((_, i) => i);
  const totalCharacters: number = arrId.length;

  const slicedFavorites = arrId.slice(page, page + count - 1);
  // console.log(slicedFavorites);
  // console.log(arrId.length, page, page + count - 1);
  // console.log(arrId.length > page);
  const {
    data: queryData,
    error: queryError,
    isLoading: queryLoading,
  } = useGetCharacterByIdQuery(slicedFavorites.join(","));
  console.log(queryData, queryError, queryLoading);
  useEffect(() => {
    setIsLoading(true);

    if (totalCharacters > page) {
      setData(queryData);
      setError(queryError);
      setIsLoading(queryLoading);
    }
  }, [queryData, queryError, queryLoading]);

  return { data, error, isLoading, totalCharacters };
};
