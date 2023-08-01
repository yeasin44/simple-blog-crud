import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <Toaster position="top-center" reverseOrder={false} />
      </QueryClientProvider>
    </>
  );
}
