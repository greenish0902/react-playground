import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta />
      </Helmet>
    </HelmetProvider>
  );
};

export default Meta;
