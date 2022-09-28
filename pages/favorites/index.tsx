import { Card, Grid } from '@nextui-org/react';
import { useState, useEffect } from 'react'
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import {FavoritePokemons} from '../../components/ui';
import { localFavorites } from '../../utils';

const Favorites = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons);
  }, [])
  
  return (
    <Layout title='Pokémons - Favoritos'>
      { favoritePokemons.length === 0 
      ? 
      (<NoFavorites />) 
      :
      (<FavoritePokemons favoritePokemons={favoritePokemons} />)
      }
    </Layout>
  )
}

export default Favorites


