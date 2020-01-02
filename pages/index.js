import React from 'react'
import 'isomorphic-fetch'
import Layout from '../componentes/Layout'
import ChannelsGrid from '../componentes/ChannelsGrid'
import Error from 'next/error'

const Home = ({ channels, statusCode }) => {
  if(statusCode !== 200) {
    return <Error statusCode={statusCode} />
  }
  return (<Layout title="Podcasts">
    <ChannelsGrid channels={channels} />
  </Layout>)
}

Home.getInitialProps = async ({res}) => {
  try {
    let req = await fetch('https://api.audioboom.com/channels/recommended')
    let { body: channels } = await req.json()
    console.log(`Channels data fetched. Count: ${channels.length}`);
    return { channels, statusCode: 200 }
  } catch (error) {
    res.statusCode = 503
    return { channels: null, statusCode: 503 }
  }
};

export default Home
