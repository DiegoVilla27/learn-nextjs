import Link from 'next/link';
import React from 'react';
import { routes } from '../../../routes';

const PokemonCard = ({ pokemon }) => {
	const { pokemon_species: { name } } = pokemon;

	return (
      <h2>
        <Link href={`${routes.pokemon.to}/${name}`}>{name}</Link>
      </h2>
	);
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object
}

export default PokemonCard;