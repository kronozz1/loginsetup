import Head from "next/head";
import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import { NotificationContextProvider } from "../context/notificationContext";
import { UserContextProvider } from "../context/userContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>

    <link rel="icon" href="https://www.technoloader.com/favicon.ico" type="image/favicon"/>
    <title>TechnoProperty</title>
      </Head>
      <NotificationContextProvider>
        <UserContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserContextProvider>
      </NotificationContextProvider>
    </Fragment>
  );
}

export default MyApp;
