import { useParams } from "react-router-dom";
import { useGetPokemonByIdQuery} from "../Features/apiSlice";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const PokemonsById = () => {
    const {id} = useParams();
    const { data, isLoading, isError, error } = useGetPokemonByIdQuery(id) 
    const fetchWords = ['abilities', 'forms', 'height']
    if (isLoading) {
       return <div>Loading...</div>;
    }
   
     if (isError) {
       return <div>Error: {error.message}</div>;
     }
   
     return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Card sx={{ width: 300}}>
        <CardMedia
          sx={{ height: 200}}
          image={data.sprites.front_default}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <hr></hr>
         
          <Typography variant="body2" color="text.secondary">
          <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', paddingTop: '20px', lineHeight: '0.6' }}>
            Height:
        </Typography> 
           <p>{data.height}</p>

     <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', paddingTop: '20px', lineHeight: '0.6' }}>
            Abilities:
        </Typography> 
        <ul  >
           {
                data.abilities.map((ability, index) => (
                   <li key={index} >{ability.ability.name}
                   </li>
                ))      
            }
        </ul>

    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', paddingTop: '20px', lineHeight: '0.6' }}>
            Forms:
        </Typography> 
        <ul  >
           {
                data.forms.map((form, index) => (
                   <li key={index} >{form.name}
                   </li>
                ))      
            }
        </ul>


        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', paddingTop: '20px', lineHeight: '0.6' }}>
            Moves:
        </Typography> 
        <ul  >
           {
                data.moves.slice(0, 3).map((move, index) => (
                   <li key={index} >{move.move.name}
                   </li>
                ))      
            }
        </ul>
        </Typography>
        </CardContent>
    </Card>
</div>
     );
   }