import Head from 'next/head';
import React from 'react';
import PokemonCard from '../components/general/card-pokemon';
import { useAsync } from '../hooks/async-fetch';
import { useHttpClient } from '../hooks/http-client';
import Layout from '../layouts';
import { getPokemonsSvc } from '../services/pokemon.service';

export default function HomeScreen({ pokemons }) {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <section>
        {pokemons.map(pokemon => (<PokemonCard key={pokemon.entry_number} pokemon={pokemon} />))}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  let pokemons = [];
  const { callEndpoint } = useHttpClient();
  const { asyncFetch } = useAsync();

  await asyncFetch(
    async () => await callEndpoint(getPokemonsSvc()),
    (res) => pokemons = res?.pokemon_entries
  );

  return {
    props: {
      pokemons
    }
  }
}