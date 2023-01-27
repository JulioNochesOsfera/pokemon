import  Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate, useParams, Link} from "react-router-dom"
import {detailPokemon} from "../Api/requestPokemon";
import {useEffect, useState} from "react";

function CardPokemon(props) {
        const history = useNavigate();
        let {url}=props;
        let {id}=useParams();
        const [state, setState] = useState([]);
        if (id){
            url=`https://pokeapi.co/api/v2/pokemon/${id}/`
        }
        const Pokemon=async()=>{
            //inicia loader
            detailPokemon(url)
            .then(res=>{
                setState(res);
                //termina loader
            })
            .catch(err=>alert(err));
        //termina loader

    };
    useEffect(()=>{
        Pokemon();
    },[props]);
    return(<div>
        {Object.keys(state).length>0?
        <Card className={!id?"card-pokemon-list":null}>
            <Card.Img variant="bottom" src={state.sprites.other.dream_world.front_default} className={!id?"img-pokemon-list":null} />
            <Card.Body>
                <Card.Title>{state.name}</Card.Title>
                {id?<div><Card.Text>
                    <br/>
                    <strong>{Object.keys(state.types).length > 1?'Tipos':'Tipo'} </strong>
                    {state.types.map((tipo,i)=><li key={i}>{tipo.type.name}</li>)}
                    <br/>
                    <strong>Peso:</strong> {state.weight}<br/>
                    <strong>Altura:</strong> {state.height}
                    <br/><br/>
                    <strong>Habilidades:</strong>
                    {state.abilities.map((habilidad,i)=><li key={i}>{habilidad.ability.name}</li>)}
                    </Card.Text>
                    <Button variant="danger"  onClick={()=>history(`/`)}>Regresar</Button></div>
                :<div>
                    <Link className="btn btn-success"  to={`/detail-pokemon/${state.id}`}>
                    Detalle Link
                    </Link>
                    <Button variant="primary"  onClick={()=>history(`/detail-pokemon/${state.id}`)}>Detalle</Button>
                        <a className="btn btn-warning" href={`/detail-pokemon/${state.id}`}>Detalle href</a>
                </div>}
            </Card.Body>

        </Card>
        :null}
    </div>)
};
export default CardPokemon;