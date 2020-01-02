import React from 'react'

import { Link } from '../routes'
import slug from '../helpers/slug'


const ChannelsGrid = ({ channels }) => (
  <div className="channels">
    {
      channels
        ? channels.map(channel => (
          <Link
            key={channel.id}
            route="channel"
            params={{
              slug: slug(channel.title),
              id: channel.id
            }}
            prefetch>
            <a>
              <div className="channel">
                <img src={channel.urls.logo_image.original} alt={channel.title} />
                <h2>{channel.title}</h2>
              </div>
            </a>
          </Link>
        ))
        : null
    }
    <style jsx>{`
      .channels {
        display: grid;
        grid-gap: 15px;
        padding: 15px;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      }
      .channel {
        background: gray;
        color: #fff;
        text-align: center;
        max-height: 17rem;
        min-height: 17rem;
      }
      .channel img {
        width: 100%;
      }
      .channel h2 {
        font-size: 1rem;
      }
    `}</style>
  </div>
);

export default ChannelsGrid
