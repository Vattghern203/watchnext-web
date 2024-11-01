import Image from "next/image"

export default function Home() {
  return (
    
    <section>
      <h1>Welcome to WatchNext</h1>

      <p>So... Watch Next?</p>

      <div>
        <Image 
          className="rounded-md" 
          src={'/static/inception.jpg'} 
          width={400} 
          height={900}
          alt="Inception Movie Cover" 
        />

        <p>
          WatchNext is a web application that helps you discover and watch new movies, TV shows, and movies from different genres. It uses the OMDb API to fetch movie and TV show data.
        </p>
      </div>
    </section>
  );
}
