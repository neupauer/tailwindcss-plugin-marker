import Head from "next/head";

function Index() {
  return (
    <div className="antialiased text-gray-900">
      <Head>
        <title>Tailwind CSS Plugin – Marker</title>
      </Head>
      <main className="max-w-3xl px-4 py-10 mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
        <section>
          <h1 className="text-3xl font-bold">Tailwind CSS Plugin – Marker</h1>

          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="space-y-4">
              <ul className="marker marker:list-disc marker:text-red-500 sm:marker:text-blue-500">
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Index;
