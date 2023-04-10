import { Box,Card, CardBody, CardFooter, CardHeader, SimpleGrid, Heading, Link } from "@chakra-ui/react";
export default function Authors({ author }) {
  return (
    <Box overflow={'scroll'} height='700px' p='24'>
      <SimpleGrid spacing={4} columns={3}>
        {author &&
          author.results &&
          author.results.map((each, index) => {
            return (<Card _hover={{ color: '#0d6163', backgroundColor: '#c5e9eb', boxShadow: 'dark-lg' }} m='6' fontFamily={'serif'}>
              <CardHeader>
                <Heading as='h6' size='sm' fontFamily={'serif'}>{each.name}</Heading>
              </CardHeader>
              <CardBody><b>Info:</b> {each.description}</CardBody>
              <CardFooter><Link href={each.link} _hover={{ fontSize: 'xl', textDecoration: 'underline' }}>Click to know more</Link></CardFooter>
            </Card>)
          })}
      </SimpleGrid>

    </Box>
  )

}