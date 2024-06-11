import {
  Box,
  Button,
  Container,
  Flex,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { valibotResolver } from "mantine-form-valibot-resolver";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ForgotPasswordInput,
  forgotPassword,
  forgotPasswordFormSchema,
} from "../apis/forgotPassword";
import MainLayout from "../layouts/MainLayout";

export default function ForgotPasswordPage() {
  const form = useForm<ForgotPasswordInput>({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      kataSandi: "",
    },
    validate: valibotResolver(forgotPasswordFormSchema),
  });
  const onSubmit = useCallback(function (input: ForgotPasswordInput) {
    const id = notifications.show({
      message: "Merubah kata sandi",
      color: "blue",
      autoClose: false,
      loading: true,
    });

    forgotPassword(input, (success) => {
      if (success) {
        notifications.update({
          id,
          title: "Berhasil merubah kata sandi",
          message:
            "Kami telah mengirimkan email konfirmasi kepada Anda, silahkan cek!",
          color: "green",
          autoClose: 3000,
          loading: false,
        });
      } else {
        notifications.update({
          id,
          message: "Gagal merubah kata sandi",
          color: "red",
          autoClose: 3000,
          loading: false,
        });
      }
    });
  }, []);

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
          <Box
            w="100%"
            bg="white"
            px="xl"
            py="xl"
            component="form"
            onSubmit={form.onSubmit(onSubmit)}
          >
            <Flex direction="column" gap="lg" align="center" justify="center">
              <Flex direction="column" gap="xs">
                <TextInput
                  w="100%"
                  type="email"
                  placeholder="Email"
                  size="md"
                  {...form.getInputProps("email")}
                />
                <PasswordInput
                  w="100%"
                  placeholder="Kata Sandi Baru"
                  size="md"
                  {...form.getInputProps("kataSandi")}
                />
                <Text>
                  Masukkan email dan kata sandi barumu dan kami akan mengirim
                  link konfirmasi ke email kamu!
                </Text>
              </Flex>
              <Stack gap="xs" w="100%">
                <Button type="submit" tt="uppercase" size="md" w="100%">
                  Submit
                </Button>
                <Button
                  variant="outline"
                  tt="uppercase"
                  size="md"
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
