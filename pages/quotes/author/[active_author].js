import { useEffect, useState } from "react";
import { activeAuthor } from "@/atoms/activeAuthor";
import { useRecoilValue } from "recoil";
import { Card, Box, Heading } from "@chakra-ui/react";
export default function Quotes() {
  const active_author = useRecoilValue(activeAuthor);
  const [quotes, setQuotes] = useState("");
  console.log("quotes ", quotes);
  useEffect(() => {
    fetch(`https://api.quotable.io/quotes?author=${active_author}`)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  }, []);

  return (
    <div>
      <Heading>{active_author}</Heading>
      {quotes &&
        quotes.results.map((eachQuote) => {
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
