import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEO(
   { title,
    description,
    canonical,
    robots,
    image}
) {
  return (
    <Helmet>
        <title>{`Glamkudi | ${title}`}</title>
        <meta  name="description" content={description}/>
        <meta name="robots" content={robots}/>

        <link rel='canonical' href={canonical}/>

        <meta property='og:title' content={title}/>
        <meta property="og:description" content={description}/>
        <meta property='og:type' contnet="website"/>
        <meta property='og:url' content={canonical}/>
        <meta property='og:image' content={image}/>
    </Helmet>
  )
}
