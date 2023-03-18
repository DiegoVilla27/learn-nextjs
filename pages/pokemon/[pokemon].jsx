import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { useAsync } from '../../hooks/async-fetch';
import { useHttpClient } from '../../hooks/http-client';
import Layout from '../../layouts';
import { getPokemonByNameSvc, getPokemonsSvc } from '../../services/pokemon.service';

export default function PokemonScreen({ pokemon }) {

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

export async function getStaticPaths() {
  let pokemons = [];
  const { callEndpoint } = useHttpClient();
  const { asyncFetch } = useAsync();

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
  const { callEndpoint } = useHttpClient();
  const { asyncFetch } = useAsync();

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