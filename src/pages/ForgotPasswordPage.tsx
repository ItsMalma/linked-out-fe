import {
  Box,
  Button,
  Container,
  Flex,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { valibotResolver } from "mantine-form-valibot-resolver";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import * as v from "valibot";
import MainLayout from "../layouts/MainLayout";

const forgotPasswordFormSchema = v.object({
  email: v.pipe(
    v.string("Format tidak valid"),
    v.minLength(1, "Tidak boleh kosong"),
    v.maxLength(100, "Maksimal 255 karakter"),
    v.email("Format email salah")
  ),
});

type ForgotPasswordInput = v.InferInput<typeof forgotPasswordFormSchema>;

export default function ForgotPasswordPage() {
  const form = useForm<ForgotPasswordInput>({
    mode: "uncontrolled",
    initialValues: {
      email: "",
    },
    validate: valibotResolver(forgotPasswordFormSchema),
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
                <Text>
                  Masukkan emailmu dan kami akan mengirimkan tautan untuk
                  mereset kata sandi.
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
