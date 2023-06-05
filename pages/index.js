import Link from "next/link";
import { useRouter } from "next/router";
import { introduction, volumes } from "../resources/lib/data";

function getRandomElement(array) {
  const randomValue = array[Math.floor(Math.random() * array.length)];
  console.log(randomValue);
  return randomValue;
}

export default function IndexPage() {
  const router = useRouter();

  const handleRandomVolume = () => {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  };

  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomVolume}>Random Volume</button>
    </div>
  );
}
