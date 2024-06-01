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
import { useForm } from "@mantine/form";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { valibotResolver } from "mantine-form-valibot-resolver";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import * as v from "valibot";
import { isMobilePhone } from "validator";
import MainLayout from "../layouts/MainLayout";

const registerFormSchema = v.object({
  namaDepan: v.pipe(
    v.string("Format tidak valid"),
    v.minLength(1, "Tidak boleh kosong"),
    v.maxLength(100, "Maksimal 100 karakter")
  ),
  namaBelakang: v.nullable(
    v.pipe(
      v.string("Format tidak valid"),
      v.maxLength(100, "Maksimal 100 karakter")
    )
  ),
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
  alamat: v.pipe(
    v.string("Format tidak valid"),
    v.minLength(1, "Tidak boleh kosong"),
    v.maxLength(200, "Maksimal 200 karakter")
  ),
  nomorWhatsapp: v.pipe(
    v.string("Format tidak valid"),
    v.minLength(1, "Tidak boleh kosong"),
    v.check(isMobilePhone, "Format nomor whatsapp salah")
  ),
});

type RegisterFormValues = v.InferOutput<typeof registerFormSchema>;

export default function RegisterPage() {
  const form = useForm<RegisterFormValues>({
    mode: "uncontrolled",
    initialValues: {
      namaDepan: "",
      namaBelakang: "",
      email: "",
      kataSandi: "",
      alamat: "",
      nomorWhatsapp: "",
    },
    validate: valibotResolver(registerFormSchema),
  });
  const onSubmit = useCallback(function () {}, []);

  return (
    <MainLayout bg="gray.0">
      <Container size="sm" w="100%">
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
          <Box
            w="100%"
            bg="white"
            px="xl"
            py="xl"
            component="form"
            onSubmit={form.onSubmit(onSubmit)}
          >
            <Flex
              w="100%"
              direction="column"
              gap="lg"
              align="center"
              justify="center"
            >
              <SimpleGrid w="100%" cols={2}>
                <TextInput
                  placeholder="Nama depan"
                  size="lg"
                  {...form.getInputProps("namaDepan")}
                />
                <TextInput
                  placeholder="Nama belakang"
                  size="lg"
                  {...form.getInputProps("namaBelakang")}
                />
                <TextInput
                  type="email"
                  placeholder="Email"
                  size="lg"
                  {...form.getInputProps("email")}
                />
                <PasswordInput
                  type="password"
                  placeholder="Kata Sandi"
                  size="lg"
                  {...form.getInputProps("kataSandi")}
                />
                <Autocomplete
                  placeholder="Alamat"
                  size="lg"
                  {...form.getInputProps("alamat")}
                />
                <TextInput
                  type="email"
                  placeholder="Nomor WhatsApp"
                  size="lg"
                  leftSection={<IconBrandWhatsapp />}
                  {...form.getInputProps("nomorWhatsapp")}
                />
              </SimpleGrid>
              <Button type="submit" tt="uppercase" size="lg" w="360px">
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
