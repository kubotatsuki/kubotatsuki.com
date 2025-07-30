import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>
        Kubo Tatsuki
      </h1>
      <p>
        Weaving mirrors and motion, keeps the cursor from sleeping.
      </p>
      <Image
        src="/hero.JPG"
        alt="a picture of sea"
        width={540}
        height={540}
      />
    </main>
  );
}
