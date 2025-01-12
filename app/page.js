import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <ul>
        <li>
          <Link href="/meals">meals</Link>
        </li>
        <li>
          <Link href="/meals/share">meals/share</Link>
        </li>
        <li>
          <Link href={"/meals/meal1"}>meals one</Link>
        </li>
      </ul>
    </main>
  );
}
