import {
  Anchor,
  Box,
  Button,
  Container,
  Flex,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function LoginPage() {
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
            Selamat Datang Kembali!
          </Text>
          <Text fz="lg">Masuk ke akun kamu</Text>
          <Box w="100%" bg="white" px="xl" py="xl">
            <Flex direction="column" gap="lg" align="center" justify="center">
              <TextInput w="100%" type="email" placeholder="Email" size="lg" />
              <PasswordInput
                w="100%"
                type="password"
                placeholder="Kata Sandi"
                size="lg"
              />
              <Anchor component={Link} to="/forgot-password">
                Lupa kata sandi?
              </Anchor>
              <Button tt="uppercase" size="lg" w="360px">
                Masuk
              </Button>
              <Flex gap="xs">
                <Text>Belum punya akun?</Text>
                <Anchor component={Link} to="/register">
                  Daftar
                </Anchor>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </MainLayout>
  );
}
