// app/signin/page.js

// import { getSession } from "next-auth/react";

// export async function getServerSideProps(context) {
//   const session = await getSession(context)

//   if(session) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false
//       }
//     }
//   }

//   return {
//     props: {}
//   }
// }
"use client"
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </div>
  );
}
