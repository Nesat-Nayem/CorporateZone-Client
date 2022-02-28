import Head from "next/head";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initialUserData } from "../../redux/slices/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import initializeAuthentication from "../../firebase";
import { useRouter } from "next/router";

const Layout = ({ title, children }) => {

  // const [loading, setLoading] = useState(true)
  
  initializeAuthentication();

  const currentUser = useSelector((state) => state.user.currentUser);
  // const loading = useSelector((state) => state.user.loading);

  const dispatch = useDispatch();
  const auth = getAuth();



  //   // observer function
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(initialUserData({ user }));
      
      } else {
        dispatch(initialUserData(null));
      }
    });
    return () => unsubscribe;
  }, [auth]);

  // if (!loading) {
  //   return (
  //     <div className="flex justify-center items-center mt-48">
  //       <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-cyan-700"></div>
  //   </div>
  //   )
  // }



  return (
    <>
        <div>
        <Head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
        />
      </Head>
      <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
