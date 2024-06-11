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
import { notifications } from "@mantine/notifications";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { valibotResolver } from "mantine-form-valibot-resolver";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterInput, register, registerFormSchema } from "../apis/register";
import useApi from "../hooks/useApi";
import useLocations from "../hooks/useLocations";
import MainLayout from "../layouts/MainLayout";

export default function RegisterPage() {
  const navigate = useNavigate();

  const form = useForm<RegisterInput>({
    mode: "uncontrolled",
    initialValues: {
      nik: "",
      namaDepan: "",
      namaBelakang: "",
      email: "",
      kataSandi: "",
      lokasi: "",
      nomorWhatsApp: "",
    },
    validate: valibotResolver(registerFormSchema),
  });
  const onSubmit = useCallback(
    function (input: RegisterInput) {
      const id = notifications.show({
        message: "Mendaftarkan pengguna",
        autoClose: false,
        loading: true,
        color: "blue",
      });
      register(input, (success) => {
        if (success) {
          notifications.update({
            id,
            message: "Berhasil mendaftarkan pengguna!",
            autoClose: 3000,
            loading: false,
            color: "green",
          });
          navigate("/login");
        } else {
          notifications.update({
            id,
            message: "Gagal mendaftarkan pengguna!",
            autoClose: 3000,
            loading: false,
            color: "red",
          });
        }
      });
    },
    [navigate]
  );

  const [daftarLokasi, setDaftarLokasi] = useState<string[]>([]);
  useApi(useLocations(), (locations, _, err) => {
    if (locations) setDaftarLokasi(locations.map((location) => location.nama));
    if (err) {
      notifications.show({
        message: "Gagal mengambil data lokasi",
        autoClose: 3000,
        color: "red",
      });
    }
  });

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
                  placeholder="NIK"
                  size="md"
                  {...form.getInputProps("nik")}
                />
                <Box></Box>
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
                  data={daftarLokasi}
                  {...form.getInputProps("lokasi")}
                />
                <TextInput
                  placeholder="Nomor WhatsApp"
                  inputMode="numeric"
                  size="md"
                  leftSection={<IconBrandWhatsapp />}
                  {...form.getInputProps("nomorWhatsApp")}
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
