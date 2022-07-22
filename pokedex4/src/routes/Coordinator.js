export const gotoHomePage = (navigate) => {
    navigate("/")
}

export const gotoPokedexPage = (navigate) => {
    navigate("/Pokedex")
}

export const gotoDetalhesPage = (navigate, pokemonId) => {
    navigate(`/Detalhes/${pokemonId}`)
}

export const goToVoltar = (navigate) => {
    navigate(-1)
}