import Link from "next/link";
import { volumes } from "../../resources/lib/data";

const volume = volumes.find(({ slug }) => slug === "the-two-towers");

export default function TheTwoTowersPage() {
  return (
    <div>
      <Link href="/">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book, index) => (
          <li key={book.title}>{`${index + 1}. ${book.title}`}</li>
        ))}
      </ul>
    </div>
  );
}
