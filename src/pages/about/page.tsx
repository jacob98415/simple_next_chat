import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>

        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          <div className="md:w-1/2">
            <Image
              src="/images/12.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-xl text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod velit ut vestibulum bibendum. Aliquam nec sapien eget mi lacinia elementum.
            </p>
            <p className="text-xl text-gray-700 mb-4">
              Maecenas imperdiet tellus ac convallis suscipit. Suspendisse quis mauris vel justo pretium aliquam ut in nunc. Pellentesque et risus at tortor elementum iaculis id vitae mauris.
            </p>
            <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;