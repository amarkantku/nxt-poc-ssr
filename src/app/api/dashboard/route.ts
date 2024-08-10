// import { NextResponse } from "next/server";
// export async function GET(request: Request) {
//   const {results } = await fetch("https://randomuser.me/api/", {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((res) => res.json());
//   return NextResponse.json({ results });
// }

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { results } = await fetch("https://randomuser.me/api/", {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return NextResponse.json({ results });
}
