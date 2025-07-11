import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Hello Rakkucraft!</div>
      <div>
        Please proceed to{" "}
        <Link href="/protected" className="underline">
          the Protected Page.
        </Link>
      </div>
    </>
  );
}
