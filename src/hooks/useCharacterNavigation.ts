import { useNavigate } from "react-router-dom";

import { PATH } from "../shared/constants/constants";

export const useCharacterNavigation = () => {
  const navigate = useNavigate();

  return (id: number) => {
    navigate(`${PATH.character}/${id}`);
  };
};
