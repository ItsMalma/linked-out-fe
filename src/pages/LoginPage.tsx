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
import { useForm } from "@mantine/form";
import { valibotResolver } from "mantine-form-valibot-resolver";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import * as v from "valibot";
import MainLayout from "../layouts/MainLayout";

const loginFormSchema = v.object({
  email: v.pipe(
    v.string("Format tidak valid"),
    v.minLength(1, "Tidak boleh kosong"),
    v.maxLength(100, "Maksimal 255 karakter"),
    v.email("Format email salah")
  ),
  kataSandi: v.pipe(
    v.string("Format tidak valid"),
    v.minLength(1, "Tidak boleh kosong"),
    v.minLength(8, "Minimal 8 karakter")
  ),
});

type LoginInput = v.InferInput<typeof loginFormSchema>;

export default function LoginPage() {
  const form = useForm<LoginInput>({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      kataSandi: "",
    },
    validate: valibotResolver(loginFormSchema),
  });
  const onSubmit = useCallback(function () {}, []);

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
          <Box
            w="100%"
            bg="white"
            px="xl"
            py="xl"
            component="form"
            onSubmit={form.onSubmit(onSubmit)}
          >
            <Flex direction="column" gap="xs" align="center" justify="center">
              <TextInput
                w="100%"
                type="email"
                placeholder="Email"
                size="md"
                {...form.getInputProps("email")}
              />
              <PasswordInput
                w="100%"
                type="password"
                placeholder="Kata Sandi"
                size="md"
                {...form.getInputProps("kataSandi")}
              />
              <Anchor component={Link} to="/forgot-password">
                Lupa kata sandi?
              </Anchor>
              <Button type="submit" tt="uppercase" size="md" w="360px">
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
