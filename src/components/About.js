import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import skull from "../skull.jpg";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'about] {
            name,
            'bio': bio[0].children[0].text,
            'authorImage': image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>

  return (
    <main className='relative'>
      <img src={skull} alt='skull pic' className='absolute w-full' />
      <div classNAme='p-10 lg:pt-48 container mx-auto relative'>
        <section className='bg-green-800 rounded-lg shadow-2xl lg:flex p-20'>
          <img
            src={urlFor(author.authorImage).url()}
            className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8'
            alt={author.name}
          />
          <div className='text-lg felx flex-col justify-center'>
            <h1 className='cursive text-6xl text-green-300 mb-4'>
              Hi, I am this guy!!!{" "}
              <span className='text-green-100'>{author.name}</span>
            </h1>
            <div className='prose lg:prose-xl text-white'>
              <BlockContent blocks={author.bio} projectId='08agnvzi' />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
