import Head from "next/head";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initialUserData } from "../../redux/slices/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import initializeAuthentication from "../../firebase";
import { ThemeProvider } from "../Shared/Header/themeContext";

const Layout = ({ title, children }) => {
  initializeAuthentication();

  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser);
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

  return (
    <>
      <ThemeProvider>
        <Head>
          <title>{title}</title>
          <link
            rel="icon"
            type="image/x-icon"
            href="https://i.ibb.co/6sPtZFV/Logo-Maker-Ca-1647832483138-removebg-preview.png"></link>
        </Head>
        <main className="bg-[#ebf8fe] dark:bg-slate-700">{children}</main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
