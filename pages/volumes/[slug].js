import Link from "next/link";
import { volumes } from "../../resources/lib/data";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volume = volumes.find(({ slug: volumeSlug }) => volumeSlug === slug);
  const currentIndex = volumes.findIndex(
    ({ slug: volumeSlug }) => volumeSlug === slug
  );

  if (!volume) {
    return <div>Volume not found.</div>;
  }

  const previousVolume = volumes[currentIndex - 1];
  const nextVolume = volumes[currentIndex + 1];

  return (
    <div>
      <Link href="/">← All Volumes</Link>
      <Head>
        <title>{volume.title}</title>
      </Head>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.slug}>{book.title}</li>
        ))}
      </ul>
      <Image
        src={volume.cover}
        alt={volume.title}
        width={140}
        height={230}
      ></Image>
      {previousVolume && (
        <Link href={`/volumes/${previousVolume.slug}`}>Previous Volume</Link>
      )}
      {nextVolume && (
        <Link href={`/volumes/${nextVolume.slug}`}>Next Volume</Link>
      )}
    </div>
  );
}
