import React from 'react';

const Footer: React.FC = () => {
  // Generate a random number for the photo URL to get a different image each load
  const randomId = Math.floor(Math.random() * 1000);

  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-semibold mb-2">Random Photo</h3>
        <img
          src={`https://picsum.photos/400/200?random=${randomId}`}
          alt="Random photo"
          className="mx-auto rounded shadow-lg"
        />
        <p className="mt-2 text-sm">© 2026 Personal Background Webpage</p>
      </div>
    </footer>
  );
};

export default Footer;