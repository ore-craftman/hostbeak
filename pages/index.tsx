import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Hostbeak | By Oreoluwa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Hi, I'm <span className="text-blue-700">Oreoluwa</span>
        </h1>

        <p className="mt-3 text-2xl">Ogoluwa's Front-end test for HostGeak</p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="/sign-up"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Sign Up Page &rarr;</h3>
            <p className="mt-4 text-xl">
              Click here to see the{' '}
              <code className="rounded-md bg-gray-200 p-2">Sign Up</code> UI
              implementation.
            </p>
          </a>

          <a
            href="/add-bill"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Add Bill Page &rarr;</h3>
            <p className="mt-4 text-xl">
              Click here to see the{' '}
              <code className="rounded-md bg-gray-200 p-2">Add Bill</code> UI
              implementation.
            </p>
          </a>

          <a
            href="/view-reports"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">View Reports Page &rarr;</h3>
            <p className="mt-4 text-xl">
              Click here to see the{' '}
              <code className="rounded-md bg-gray-200 p-2">Reports</code> UI
              implementation.
            </p>
          </a>

          <a
            href="https://github.com/ore-craftman/hostbeak"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">See My Code &rarr;</h3>
            <p className="mt-4 text-xl">
              Before the talks get too much.. Check see{' '}
              <code className="my-2 rounded-md bg-gray-200 p-2">my code</code>
            </p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="mailto:ore.craftman@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <code className="rounded-md bg-gray-200 p-2">{'<Oreoluwa />'}</code>
        </a>
      </footer>
    </div>
  )
}

export default Home
