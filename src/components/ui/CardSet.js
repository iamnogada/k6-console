import React from "react";

const movies = [
  {
    title: "bluebeetle.jpg",
    thumbnailUrl: "/image/bluebeetle.jpg",
  },
  {
    title: "Retribution",
    thumbnailUrl: "/image/Retribution.jpg",
  },
  {
    title: "Gran Turismo",
    thumbnailUrl: "/image/GranTurismo.jpg",
  },
  {
    title: "Meg 2: The Trench",
    thumbnailUrl: "/image/Meg2.jpg",
  },
  {
    title: "Talk to Me",
    thumbnailUrl: "/image/TalkToMe.jpg",
  },
  {
    title: "Fast X",
    thumbnailUrl: "/image/FastX.jpg",
  },
  {
    title: "The Nun II",
    thumbnailUrl: "/image/TheNunII.jpg",
  },
  {
    title: "Sound of Freedom",
    thumbnailUrl: "/image/SoundOfFreedom.jpg",
  },
  // Add more movie objects here
];

function CardSet() {
  return (
    <section className="m-2 p-2">
      <h2 className="text-2xl ">Card Set</h2>
      <div className="flex flex-wrap">
        {movies.map((movie, index) => (
          <div key={index} className="w-1/4 p-4">
            <div className="bg-info-200 rounded-lg shadow-md shadow-info-500 p-4">
              <img
                src={movie.thumbnailUrl}
                alt={movie.title}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardSet;
