import { useEffect,useState } from "react";
import PokeCard from "../PokeCard/PokeCard";


export default function PokeList() {

    const [data, setData] = useState([]);
    const pokemons = "https://pokeapi.co/api/v2/pokemon/?limit=20"

    useEffect(() => {
        const fetchData = async (url) => {
            const data = await fetch(url);
            return data.json()
        }
        
        fetchData(pokemons)
        .then(data => data.results.map(e => {return fetchData(e.url)}))
        .then(res => Promise.all(res))
        .then(data => data.forEach((e) => setData(prev => [...prev,e])))
        .catch(console.error);

    }, [])
    
  return (
    <>
    {
        data.map((poke,i) => {
            return (
            <PokeCard id={poke.id} name={poke.name} img={poke.sprites.front_default} key={i}/>
        )})
    }
    </>
  );
}
