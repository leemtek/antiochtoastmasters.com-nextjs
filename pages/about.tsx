import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

 const About: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Welcome | Toastmasters Creating Communicators</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <figure className="bg-gray-100 rounded-xl p-8 dark:bg-gray-800">
          <Image className="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width={384} height={512} />
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
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}

export default About;