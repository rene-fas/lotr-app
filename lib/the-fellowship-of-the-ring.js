import Link from "next/link";
import { volumes } from "../../resources/lib/data";
import image from "../../resources/public/images/the-fellowship-of-the-ring.png";
const volume = volumes.find(
  ({ slug }) => slug === "the-fellowship-of-the-ring"
);
const currentIndex = volumes.findIndex(({ slug }) => slug === volume.slug);

export default function FellowshipOfTheRingPage() {
  const previousVolume = volumes[currentIndex - 1];
  const nextVolume = volumes[currentIndex + 1];

  return (
    <div>
      <Link href="/">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book, index) => (
          <li key={book.slug}>
            {index + 1}. {book.title}
          </li>
        ))}
      </ul>
      <img src={image} alt={volume.title} width={140} height={230} />
      {previousVolume && (
        <Link href={`/volumes/${previousVolume.slug}`}>Previous Volume</Link>
      )}
      {nextVolume && (
        <Link href={`/volumes/${nextVolume.slug}`}>Next Volume</Link>
      )}
    </div>
  );
}
