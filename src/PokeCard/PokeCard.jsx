
export default function PokeCard({id,name,img}) {

    console.log(id,name,img);
    
    return (
      <div>
        <h2>{id}</h2>
        <img src={img} alt={name} />
        <h3>{name}</h3>
      </div>
    );
  }
  
  