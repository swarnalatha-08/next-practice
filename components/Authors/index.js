import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  SimpleGrid,
  Heading,
  Link,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { activeAuthor } from "@/atoms/activeAuthor";
export default function Authors({ author }) {
  const active_author = useRecoilValue(activeAuthor);
  const setActiveAuthor = useSetRecoilState(activeAuthor);

  console.log("active_author", active_author);
  const router = useRouter();
  const handleCard = (Author) => {
    setActiveAuthor(Author);
    router.push(`/quotes/author/author=${Author}`);
  };
  return (
    <Box overflow={"scroll"} height="700px" p="24">
      <SimpleGrid spacing={4} columns={3}>
        {author &&
          author.results &&
          author.results.map((each, index) => {
            return (
              <Card
              key={each._id}
              // onClick={() => handleCard(each.name)}
                _hover={{
                  color: "#0d6163",
                  backgroundColor: "#c5e9eb",
                  boxShadow: "dark-lg",
                }}
                m="6"
                fontFamily={"serif"}
              >
                <CardHeader>
                  <Heading as="h6" size="sm" fontFamily={"serif"}>
                    {each.name}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <b>Info:</b> {each.description}
                </CardBody>
                <CardFooter onClick={() => handleCard(each.name)}  _hover={{ fontSize: "xl", textDecoration: "underline" }}>click to see quotes
                </CardFooter>
              </Card>
            );
          })}
      </SimpleGrid>
    </Box>
  );
}
