import React from 'react'
import Link from 'next/link'

import Layout from '../componentes/Layout'

const Error = ({ statusCode }) => {
  return (
    <Layout title="Ho no :(">
        {
          statusCode === 404
            ? <div className="message">
              <h1>Esta página no existe :(</h1>
              <p><Link href="/"><a>Volver a la home</a></Link></p>
            </div>
            : <div className="message">
              <h1>Hubo un problem :(</h1>
              <p>Intenta nuevamente</p>
            </div>
        }
        <style jsx>{`
          .message {
            padding: 100px 30px;
            text-align: center;
          }
          h1 {
            margin-bottom: 2em;
          }
          a {
            color: #8756ca;
          }
        `}</style>
    </Layout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error