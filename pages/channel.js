import React from 'react'

import Layout from '../componentes/Layout'
import PodcastListWithClick from '../componentes/PodcastListWithClick'
import ChannelsGrid from '../componentes/ChannelsGrid'
import PodcastPlayer from '../componentes/PodcastPlayer'
import Error from './_error'

export class Channel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      openPodcast: null,
    }
  }

  static async getInitialProps({ query, res }) {
    try {
      let idChannel = query.id
  
      let [reqChannels, reqSeries, reqAudios] = await Promise.all([
        fetch(`https://api.audioboom.com/channels/${idChannel}`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
      ])
  
      if(reqChannels.status >= 400) {
        res.statusCode = reqChannels.status
        return { channel: null, audioClips: null, series: null, statusCode: reqChannels.status }
      }
    
      let dataChannel = await reqChannels.json()
      let channel = dataChannel.body.channel
    
      let dataAudios = await reqAudios.json()
      let audioClips = dataAudios.body.audio_clips
    
      let dataSeries = await reqSeries.json()
      let series = dataSeries.body.channels
    
      console.log(`Channel data fetched. Count: ${channel.title}`)
      return { channel, audioClips, series, statusCode: 200 }
    } catch (error) {
      return { channel: null, audioClips: null, series: null, statusCode: 503 }
    }
  }

  openPodcast = (event, podcast) => {
    event.preventDefault()
    this.setState({
      openPodcast: podcast,
    })
  }

  closePodcast = (event) => {
    event.preventDefault()
    this.setState({
      openPodcast: null,
    })
  }

  render() {
    const { channel, audioClips, series, statusCode } = this.props
    const { openPodcast } = this.state

    if(statusCode !== 200) {
      return <Error statusCode={statusCode} />
    }
    return (<Layout title={channel.title}>
      <img src={channel.urls.banner_image.original} alt={channel.title} />
      <div className="container">
        { openPodcast && <div className="modal">
          <PodcastPlayer clip={openPodcast} onClose={this.closePodcast} />
          </div> }
        <h1>{channel.title}</h1>
        <ChannelsGrid channels={series} />
        <PodcastListWithClick audioClips={audioClips} onClickPodcast={this.openPodcast} />
      </div>
      <style jsx>{`
        .container {
          margin: 0 2rem;
        }
        img {
          width: 100vw;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 999999999;
        }
      `}</style>
    </Layout>)
  }
}

export default Channel;
