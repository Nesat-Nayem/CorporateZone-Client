import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Preloader from "../components/preloader/Preloader";

// // PublicRoute
// export function withPublic(Component) {
//   return function WithPublic(props) {
//     const user = useSelector((state) => state.user.currentUser);
//       const router = useRouter();
//       useEffect(() => {
//         if (user) {
//           router.push("/");
//           return <h3 className='mt-40 text-2xl text-red-500'>Loading...</h3>;
//         }
//        },[])

//       return <Component user={user} {...props} />
//     };
//   }

//Protect Route
function withProtected(Component) {
  return function WithProtected(props) {
    const user = useSelector((state) => state.user.currentUser);
    const loading = useSelector((state) => state.user.loading);
    const router = useRouter();

    if (loading) {
      return <Preloader />;
    } else {
      if (!user) {
        router.replace("/signin");
        return <Preloader />;
      } else {
        return <Component user={user} {...props} />;
      }
    }
  };
}

export default withProtected;
