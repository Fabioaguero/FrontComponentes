import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

const Header () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <heder>
      <S.Wrapper>
        <input 
        type="text"
        placeholder="Pesquisar por username ..."
        onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button 
        type="submit"
        onClick={submitGetUser}
        >
          <span>Buscar</span> 
        </button>
      </S.Wrapper>
    </heder>
  );
};

export default Header;