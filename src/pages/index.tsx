import Head from "next/head";
import { api } from "~/utils/api";
import { SignOutButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const user = useUser();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="from-blue-gray-500 to-cool-gray-500 flex min-h-screen items-center justify-center bg-gradient-to-b">
      </main>
    </>
  );
}
