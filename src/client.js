import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'tt10htq2',
  dataset: 'production',
  apiVersion: '2023-05-25',
  useCdn: true,
  token: 'skxN3HEAS9gPRe7kMNFOPJXAyfypfTFFeSbiX57TEwB1irazwhfj3Vhvb3AVIhY0nHPh7FOVQ8uQ90vT4GuglOhk0fAh97Ubbeji3JH4zayCkEtOVh4MIkeL6Hk9bFPeSH18HI2shUb5X5ImrdZJ6omEA8OMZTBtALwBChDKwvaj9SEjIb0O',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
