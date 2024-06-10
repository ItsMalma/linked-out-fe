import {
  Anchor,
  Autocomplete,
  Box,
  Button,
  Container,
  Flex,
  PasswordInput,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { valibotResolver } from "mantine-form-valibot-resolver";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  lokasi: v.pipe(
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

type RegisterInput = v.InferInput<typeof registerFormSchema>;

export default function RegisterPage() {
  const navigate = useNavigate();

  const form = useForm<RegisterInput>({
    mode: "uncontrolled",
    initialValues: {
      namaDepan: "",
      namaBelakang: "",
      email: "",
      kataSandi: "",
      lokasi: "",
      nomorWhatsapp: "",
    },
    validate: valibotResolver(registerFormSchema),
  });
  const onSubmit = useCallback(
    function () {
      navigate("/onboarding");
    },
    [navigate]
  );

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
                  size="md"
                  {...form.getInputProps("namaDepan")}
                />
                <TextInput
                  placeholder="Nama belakang"
                  size="md"
                  {...form.getInputProps("namaBelakang")}
                />
                <TextInput
                  type="email"
                  placeholder="Email"
                  size="md"
                  {...form.getInputProps("email")}
                />
                <PasswordInput
                  type="password"
                  placeholder="Kata Sandi"
                  size="md"
                  {...form.getInputProps("kataSandi")}
                />
                <Autocomplete
                  placeholder="Lokasi"
                  size="md"
                  {...form.getInputProps("lokasi")}
                />
                <TextInput
                  placeholder="Nomor WhatsApp"
                  inputMode="numeric"
                  size="md"
                  leftSection={<IconBrandWhatsapp />}
                  {...form.getInputProps("nomorWhatsapp")}
                />
              </SimpleGrid>
              <Button type="submit" tt="uppercase" size="md" w="360px">
                Daftar
              </Button>
              <Stack gap={4} align="center">
                <Flex gap="xs">
                  <Text>Sudah punya akun?</Text>
                  <Anchor component={Link} to="/login">
                    Masuk
                  </Anchor>
                </Flex>
                <Flex gap="xs">
                  <Anchor component={Link} to="/company/register">
                    Buat akun perusahaan
                  </Anchor>
                </Flex>
              </Stack>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </MainLayout>
  );
}
