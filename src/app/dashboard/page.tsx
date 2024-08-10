// app/dashboard/page.tsx

import Image from "next/image";

// Define types for the API response
interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    medium: string;
  };
}

interface UserData {
  results: User[];
}

export default async function DashboardPage() {
  let userData: UserData | null = null;
  let error: string | null = null;

  try {
    const response = await fetch("https://randomuser.me/api/", {
      // Disable caching to ensure fresh data on every request
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    userData = await response.json();
  } catch (err: any) {
    error = err.message;
  }

  return (
    <main>
      <h1>Welcome to the Dashboard page</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : userData && userData.results && userData.results.length > 0 ? (
        <div>
          <h2>User Information:</h2>
          <p>
            Name: {userData.results[0].name.first} {userData.results[0].name.last}
          </p>
          <p>Email: {userData.results[0].email}</p>
          <Image
            src={userData.results[0].picture.medium}
            alt="User profile"
            width={100}
            height={100}
          />
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </main>
  );
}

// app/dashboard/page.tsx

// import Image from "next/image";

// // Define types for the API response
// interface User {
//   name: {
//     first: string;
//     last: string;
//   };
//   email: string;
//   picture: {
//     medium: string;
//   };
// }

// interface UserData {
//   results: User[];
// }

// export default async function DashboardPage() {
//   let userData: UserData | null = null;
//   let error: string | null = null;

//   try {
//     // Fetching data from your API route
//     const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dashboard`, {
//       cache: "no-store", // Ensure the data is fetched fresh on every request
//     });
//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     userData = await response.json();
//   } catch (err: any) {
//     error = err.message;
//   }

//   return (
//     <main>
//       <h1>Welcome to the Dashboard page</h1>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : userData && userData.results && userData.results.length > 0 ? (
//         <div>
//           <h2>User Information:</h2>
//           <p>
//             Name: {userData.results[0].name.first} {userData.results[0].name.last}
//           </p>
//           <p>Email: {userData.results[0].email}</p>
//           <Image
//             src={userData.results[0].picture.medium}
//             alt="User profile"
//             width={100}
//             height={100}
//             priority
//           />
//         </div>
//       ) : (
//         <p>No user data available.</p>
//       )}
//     </main>
//   );
// }
