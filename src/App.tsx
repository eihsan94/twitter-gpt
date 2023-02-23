import { Button, Container, Heading } from "@hope-ui/solid";
import type { Component } from "solid-js";
const url =
  "https://bxn8mx4wrc.execute-api.ap-northeast-1.amazonaws.com/api/twitter/auth";
const App: Component = () => {
  return (
    <Container
      height={"100vh"}
      display={"flex"}
      flexDirection="column"
      justifyContent={"center"}
      alignItems={"center"}>
      <Heading size={"6xl"}>Twitter Gpt</Heading>
      <Button mt="$10" as="a" href={url}>
        Generate Tweet
      </Button>
    </Container>
  );
};

export default App;
