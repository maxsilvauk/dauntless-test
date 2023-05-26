'use client';

import Image from 'next/image';
//import { Container } from '@/components/Container';

const Home: React.FC = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Replace this with your actual data
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* End hero unit */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cards.map((card) => (
              <div key={card} className="flex flex-col">
                <Image
                  src={`https://picsum.photos/200/200`}
                  alt="placeholder"
                  width={200}
                  height={200}
                  className="object-cover object-center"
                />
                <div className="flex-1 p-4">
                  <h2 className="text-xl font-semibold mb-2">Currency Name</h2>
                  <ul className="list-disc pl-5">
                    <li>Current Price: xxx</li>
                    <li>24h High: xxx</li>
                    <li>24h Low: xxx</li>
                  </ul>
                </div>
                <div className="p-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    More
                  </button>
                </div>
              </div>
            ))}
          </div>
      </section>
    </>
  );
};

export default Home;
