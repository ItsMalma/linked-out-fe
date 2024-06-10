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
import { valibotResolver } from "mantine-form-valibot-resolver";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as v from "valibot";
import { isURL } from "validator";
import MainLayout from "../layouts/MainLayout";

const companyRegisterFormSchema = v.object({
  nama: v.pipe(
    v.string("Format tidak valid"),
    v.minLength(1, "Tidak boleh kosong"),
    v.maxLength(100, "Maksimal 100 karakter")
  ),
  deskripsi: v.pipe(
    v.string("Format tidak valid"),
    v.minLength(1, "Tidak boleh kosong"),
    v.maxLength(255, "Maksimal 255 karakter")
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
  situs: v.pipe(
    v.string("Format tidak valid"),
    v.minLength(1, "Tidak boleh kosong"),
    v.check(isURL, "Format nomor whatsapp salah")
  ),
});

type CompanyRegisterInput = v.InferInput<typeof companyRegisterFormSchema>;

export default function CompanyRegisterPage() {
  const navigate = useNavigate();

  const form = useForm<CompanyRegisterInput>({
    mode: "uncontrolled",
    initialValues: {
      nama: "",
      deskripsi: "",
      email: "",
      kataSandi: "",
      lokasi: "",
      situs: "",
    },
    validate: valibotResolver(companyRegisterFormSchema),
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
                  placeholder="Nama"
                  size="md"
                  {...form.getInputProps("nama")}
                />
                <TextInput
                  placeholder="Deskripsi"
                  size="md"
                  {...form.getInputProps("deskripsi")}
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
                  placeholder="Situs"
                  size="md"
                  {...form.getInputProps("situs")}
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
                  <Anchor component={Link} to="/register">
                    Buat akun pengguna
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
