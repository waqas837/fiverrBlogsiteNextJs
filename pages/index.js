import Head from "next/head";
import Image from "next/image";
import Format from "../layout/format";

// compoenents
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import fetcher from "../lib/useFetcher";

export default function Home() {
  // console.log("data was returned", data1);
  return (
    <Format>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </Format>
  );
}
// This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const [data1, data2, data3, data4] = await Promise.all([
//     fetcher(`api/trending`),
//     fetcher(`api/trending`),
//     fetcher(`api/trending`),
//     fetcher(`api/trending`),
//   ]);
//   // Pass data to the page via props
//   return { props: { data1, data2, data3, data4 } };
// }
