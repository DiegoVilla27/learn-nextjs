import Head from 'next/head';
import React from 'react';
import PokemonCard from '../components/general/card-pokemon';
import { hookAsync } from '../hooks/async-fetch';
import { hookHttpClient } from '../hooks/http-client';
import Layout from '../layouts';
import { getPokemonsSvc } from '../services/pokemon.service';
import PropTypes from 'prop-types';

const HomeScreen = ({ pokemons }) => {
  return (
    <Layout>
      <Head>
        <title>Home Pokemons</title>
      </Head>
      <section>
        {pokemons.map(pokemon => (<PokemonCard key={pokemon.entry_number} pokemon={pokemon} />))}
      </section>
    </Layout>
  )
}

HomeScreen.propTypes = {
  pokemons: PropTypes.array
}

export default HomeScreen;

export async function getStaticProps() {
  let pokemons = [];
  const { callEndpoint } = hookHttpClient();
  const { asyncFetch } = hookAsync();

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