import {
  Box,
  Button,
  Container,
  Flex,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function ForgotPasswordPage() {
  return (
    <MainLayout bg="gray.0">
      <Container size="xs" w="100%">
        <Flex
          direction="column"
          align="center"
          justify="center"
          gap="lg"
          mih="100vh"
        >
          <Text fz="h1" fw="bold">
            Lupa kata sandi?
          </Text>
          <Box w="100%" bg="white" px="xl" py="xl">
            <Flex direction="column" gap="lg" align="center" justify="center">
              <Flex direction="column" gap="xs">
                <TextInput
                  w="100%"
                  type="email"
                  placeholder="Email"
                  size="lg"
                />
                <Text>
                  Masukkan emailmu dan kami akan mengirimkan tautan untuk
                  mereset kata sandi.
                </Text>
              </Flex>
              <Stack gap="xs" w="100%">
                <Button tt="uppercase" size="lg" w="100%">
                  Submit
                </Button>
                <Button
                  variant="outline"
                  tt="uppercase"
                  size="lg"
                  w="100%"
                  component={Link}
                  to="/login"
                >
                  Kembali
                </Button>
              </Stack>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </MainLayout>
  );
}
