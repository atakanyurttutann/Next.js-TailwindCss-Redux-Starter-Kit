import "@/public/globals.css";
import Router from "next/router";
import ReactDOM from "react-dom";
import { wrapper } from "@/redux/store";

function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", () => {
    ReactDOM.render(<div>Loading</div>, document.getElementById("modal-root"));
  });
  Router.events.on("routeChangeComplete", () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("modal-root"));
  });
  Router.events.on("routeChangeError", () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("modal-root"));
  });

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = wrapper.getInitialPageProps(
  (store) =>
    async ({ Component, ctx }) => {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps({ ...ctx, store })
            : {}),
          pathname: ctx.pathname,
        },
      };
    }
);

export default wrapper.withRedux(MyApp);
