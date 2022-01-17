import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

 const About: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>About | Toastmasters Creating Communicators</title>
      </Head>

      <figure className="bg-gray-100 rounded-xl p-8 dark:bg-gray-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="/images/sarah-dayan.jpg" alt="" />
          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                Sarah Dayan
              </div>
              <div className="text-gray-700 dark:text-gray-500">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
      </figure>
    </div>
  )
}

export default About;