import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { hookAsync } from '../../hooks/async-fetch';
import { hookHttpClient } from '../../hooks/http-client';
import Layout from '../../layouts';
import { getPokemonByNameSvc, getPokemonsSvc } from '../../services/pokemon.service';

const PokemonScreen = ({ pokemon }) => {

  const {
    name,
    sprites
  } = pokemon;

	return (
    <Layout>
      <Head>
        <title>Pokemon {name}</title>
      </Head>
      <Image alt={`Image ${name}`} src={sprites?.front_default} height={200} width={200} />
      <h2>{name.toLocaleUpperCase()}</h2>
		</Layout>
	);
}

PokemonScreen.propTypes = {
  pokemon: PropTypes.object
}

export default PokemonScreen;

export async function getStaticPaths() {
  let pokemons = [];
  const { callEndpoint } = hookHttpClient();
  const { asyncFetch } = hookAsync();

  await asyncFetch(
    async () => await callEndpoint(getPokemonsSvc()),
    (res) => pokemons = res?.pokemon_entries
  );

  const paths = pokemons.map((pokemon) => {
    return {
      params: {
        pokemon: pokemon?.pokemon_species?.name
      }
    }
  });

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  let pokemon = [];
  const { callEndpoint } = hookHttpClient();
  const { asyncFetch } = hookAsync();

  await asyncFetch(
    async () => await callEndpoint(getPokemonByNameSvc(params['pokemon'])),
    (res) => pokemon = res
  );
  
  return {
    props: {
      pokemon
    }
  }
}