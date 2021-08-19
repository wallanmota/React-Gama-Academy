import React, { useEffect, useState } from "react";
import * as S from "./styled"

export default function Repositories(){
    const [ repositories, setRepositories ] = useState([]); 
    useEffect(() =>{
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        // localStorage.clear();
    }, []);

    return(
        <S.container>
        <S.Title>Repositorios</S.Title>
        <S.List>
            {repositories.map(repository =>{
                return(
                    <S.ListItem>Repositório: { repository }</S.ListItem>
                )
            })}
        </S.List>
        <S.linkHome to="/">Voltar</S.linkHome>
        </S.container>
    ) 
};

// export default Repositories;