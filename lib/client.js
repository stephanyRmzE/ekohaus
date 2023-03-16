import imageUrlBuilder from '@sanity/image-url'
const sanityClient = require('@sanity/client')

export const client = sanityClient({
  projectId: 'wej343gq',
  dataset: 'production',
  apiVersion: '2023-01-26', // use current UTC date - see "specifying API version"!
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);


export async function getId(name) {
  const productsQuery = `*[_type == "muros" && name == "${name}"]`
  const products = await client.fetch(productsQuery)
  const producto = products[0]._id
  return producto
}


export async function updateDocumentStock(id, quant) {
  const result = client
                        .patch(id)
                        .dec({stock: quant})
                        .commit()
  return result
}
