const callToApi = () => {
    return fetch('https://rickandmortyapi.com/api/character')
    .then ((response) => response.json())
    .then ((response) =>{
        const dataFromApi = response.results
        .map((character) =>{
            const characterTill7 = character.id <= 7
            if (character){
                return {
                    id: character.id,
                    name: character.name,
                    species: character.species,
                    image: character.image,
                    planet: character.origin.name,
                    status: character.status,
                    gender: character.gender,
                    location: character.location.name
                };
                
            }
            return characterTill7
        });
        return dataFromApi;
    })
}


export default callToApi