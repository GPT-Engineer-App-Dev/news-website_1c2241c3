import React from "react";
import { ChakraProvider, Box, Grid, GridItem, Heading, Text, VStack, HStack, Image, Link, Container, Divider, extendTheme } from "@chakra-ui/react";
import { FaRegNewspaper, FaGlobeAmericas, FaRegClock } from "react-icons/fa";

// Chakra-UI theme customization
const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "gray.100",
      },
    },
  },
});

const articles = [
  {
    title: "Breaking News: Market Hits Record Highs",
    summary: "Stocks soar to new heights today as investors are optimistic about the recent economic data.",
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldHxlbnwwfHx8fDE3MDk4MjQzMzJ8MA&ixlib=rb-4.0.3&q=80&w=1080',
    category: "Finance",
    publishedAt: "April 1, 2023",
  },
  // ... other articles
];

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8}>
          <Heading as="h1" size="2xl" textAlign="center">
            <FaRegNewspaper /> The Daily Update
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Your source for the latest news around the world
          </Text>
          <Box as="section" w="full">
            <Heading as="h2" size="xl" mb={4}>
              Top Stories
            </Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              {articles.map((article, index) => (
                <GridItem key={index} p={5} shadow="md" bg="white" borderRadius="md">
                  <VStack spacing={4}>
                    <Image borderRadius="md" src={article.image} alt={article.title} />
                    <VStack spacing={1} align="start">
                      <Heading as="h3" size="md">
                        {article.title}
                      </Heading>
                      <Text fontSize="sm">{article.summary}</Text>
                    </VStack>
                    <HStack justifyContent="space-between" w="full">
                      <HStack spacing={1}>
                        <FaGlobeAmericas />
                        <Text fontSize="sm">{article.category}</Text>
                      </HStack>
                      <HStack spacing={1}>
                        <FaRegClock />
                        <Text fontSize="sm">{article.publishedAt}</Text>
                      </HStack>
                    </HStack>
                  </VStack>
                </GridItem>
              ))}
            </Grid>
          </Box>
          <Divider />
          <VStack spacing={4} align="stretch">
            <Heading as="h2" size="lg">
              More News
            </Heading>
            {/* More news list ... */}
          </VStack>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
