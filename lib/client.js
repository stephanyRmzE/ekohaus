import imageUrlBuilder from '@sanity/image-url'
const sanityClient = require('@sanity/client')

export const client = sanityClient({
  projectId: 'wej343gq',
  dataset: 'production',
  apiVersion: '2023-01-26', // use current UTC date - see "specifying API version"!
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
