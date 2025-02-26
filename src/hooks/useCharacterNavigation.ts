import { useNavigate } from "react-router-dom";

export const useCharacterNavigation = () => {
  const navigate = useNavigate();

  return (id: number) => {
    navigate(`/character/${id}`);
  };
};
