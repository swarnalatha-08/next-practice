import { useEffect, useState } from "react";
import { activeAuthor } from "@/atoms/activeAuthor";
import { useRecoilValue } from "recoil";
import { Card, Box, Heading } from "@chakra-ui/react";

export default function Quotes({ data }) {
  console.log("data", data);
  const active_author = useRecoilValue(activeAuthor);

  return (
    <div>
      <Heading>{active_author}</Heading>
      {data &&
        data.results.map((eachQuote) => {
          return (
            <Box>
              <Card
                m={10}
                p={15}
                _hover={{ boxShadow: "dark-lg", backgroundColor: "#a0f0f2" }}
              >
                {eachQuote.content}
              </Card>
            </Box>
          );
        })}
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://api.quotable.io/authors");
  const datas = await res.json();
  console.log("datas", datas.results);
  const paths = datas.results.map((each) => ({
    params: { active_author: each.name },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://api.quotable.io/quotes?author=${params.active_author}`
  );
  const data = await res.json();
  console.log("data", data);
  return {
    props: {
      data,
    },
  };
}



// using useEffect fetch
// import { useEffect, useState } from "react";
// import { activeAuthor } from "@/atoms/activeAuthor";
// import { useRecoilValue } from "recoil";
// import { Card, Box, Heading } from "@chakra-ui/react";

// export default function Quotes({ data }) {
//   console.log("data", data);
//   const active_author = useRecoilValue(activeAuthor);
//   const [quotes, setQuotes] = useState("");
//   console.log("quotes ", quotes);
//   useEffect(() => {
//     fetch(`https://api.quotable.io/quotes?author=${active_author}`)
//       .then((response) => response.json())
//       .then((data) => setQuotes(data));
//   }, []);

//   return (
//     <div>
//       <Heading>{active_author}</Heading>
//       {quotes &&
//         quotes.results.map((eachQuote) => {
//           return (
//             <Box>
//               <Card
//                 m={10}
//                 p={15}
//                 _hover={{ boxShadow: "dark-lg", backgroundColor: "#a0f0f2" }}
//               >
//                 {eachQuote.content}
//               </Card>
//             </Box>
//           );
//         })}
//     </div>
//   );
// }
