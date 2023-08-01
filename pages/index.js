import axios from "axios";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Blogs from "./blogs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Blogs />
    </div>
  );
}
