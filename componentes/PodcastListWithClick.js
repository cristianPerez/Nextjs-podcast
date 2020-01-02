import React, { Fragment } from 'react'

import slug from '../helpers/slug'

const PodcastListWithClick = ({ audioClips, onClickPodcast }) => (
  <div>
    {
      audioClips && audioClips.length > 0
        ? <h2>Podcast</h2>
        : null
    }
    <div className="podcastContainer">
      {
        audioClips
          ? audioClips.map((podcast) =>
            <a
              key={podcast.id}
              href={`/${slug(podcast.channel.title)}.${podcast.channel.ìd}
            /${slug(podcast.title)}.${podcast.id}`}
              className="podcast"
              onClick={ (event) => onClickPodcast(event, podcast) }>
              <h2>{podcast.title}</h2>
              <div className="playBtn">Play</div>
            </a>)
          : null
      }
    </div>
    <style jsx>{`
    .podcastContainer {
        display: flex;
        flex-direction: column;
      }

      .podcast {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        margin: 0.2em 0em;
        padding: 0 1em;
        min-height: 60px;
        border: solid 1px gray;
        border-radius: 0.5em;
      }
      .podcast > h2 {
        text-align: left;
        font-size: 1em;
        color: black;
      }
      .playBtn {
        color: #8756ca;
        font-size: 1em;
      }
      h2 {
        text-align: center;
      }
    `}</style>
  </div>
);

export default PodcastListWithClick
