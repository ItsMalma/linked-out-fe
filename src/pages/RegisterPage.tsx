import {
  Anchor,
  Autocomplete,
  Box,
  Button,
  Container,
  Flex,
  PasswordInput,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function RegisterPage() {
  return (
    <MainLayout bg="gray.0">
      <Container size="md" w="100%">
        <Flex
          direction="column"
          align="center"
          justify="center"
          gap="lg"
          mih="100vh"
        >
          <Text fz="h2" fw="bold">
            Mari buat profil kamu.
          </Text>
          <Box w="100%" bg="white" px="xl" py="xl ">
            <Flex direction="column" gap="lg" align="center" justify="center">
              <SimpleGrid cols={2}>
                <TextInput placeholder="Nama depan" size="lg" />
                <TextInput placeholder="Nama belakang" size="lg" />
                <TextInput type="email" placeholder="Email" size="lg" />
                <PasswordInput
                  type="password"
                  placeholder="Kata Sandi"
                  size="lg"
                />
                <Autocomplete placeholder="Alamat" size="lg" />
                <TextInput
                  type="email"
                  placeholder="Nomor WhatsApp"
                  size="lg"
                  leftSection={<IconBrandWhatsapp />}
                />
              </SimpleGrid>
              <Button tt="uppercase" size="lg" w="360px">
                Daftar
              </Button>
              <Flex gap="xs">
                <Text>Sudah punya akun?</Text>
                <Anchor component={Link} to="/login">
                  Masuk
                </Anchor>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </MainLayout>
  );
}
