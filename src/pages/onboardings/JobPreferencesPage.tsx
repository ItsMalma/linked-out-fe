import {
  Alert,
  Anchor,
  Autocomplete,
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  MultiSelect,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconBulb, IconChevronLeft } from "@tabler/icons-react";
import { valibotResolver } from "mantine-form-valibot-resolver";
import { useCallback, useContext, useState } from "react";
import * as v from "valibot";
import { OnboardingContext } from "./OnboardingContext";

const tipePekerjaan = [
  "Penuh Waktu",
  "Paruh Waktu",
  "Harian",
  "Kontrak",
  "Magang",
] as const;

const jobPreferencesFormSchema = v.object({
  tipePekerjaan: v.array(
    v.picklist(tipePekerjaan, "Pilih salah satu tipe pekerjaan"),
    "Tidak boleh kosong"
  ),
  tempatKerja: v.pipe(
    v.string("Format tidak valid"),
    v.minLength(1, "Tidak boleh kosong"),
    v.maxLength(200, "Maksimal 200 karakter")
  ),
  bersediaBekerjaRemote: v.boolean("Format tidak valid"),
});

type JobPreferencesInput = v.InferInput<typeof jobPreferencesFormSchema>;

export default function JobPreferencesPage() {
  const [isDisabled, setIsDisabled] = useState(true);
  const form = useForm<JobPreferencesInput>({
    mode: "uncontrolled",
    initialValues: {
      tipePekerjaan: [],
      tempatKerja: "",
      bersediaBekerjaRemote: false,
    },
    validate: valibotResolver(jobPreferencesFormSchema),
    onValuesChange: ({ tipePekerjaan, tempatKerja }) => {
      if (tipePekerjaan.length === 0 || tempatKerja === "") {
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
    },
  });
  const onSubmit = useCallback(function () {}, []);

  const onboardingContext = useContext(OnboardingContext);

  return (
    <Container w="100%" size="xs" py="xl">
      <Flex direction="column" gap="xl" align="center">
        <Avatar size="xl" />
        <Text fz="h3" fw="600">
          Seperti apa preferensi pekerjaan yang kamu mau?
        </Text>
        <Alert w="100%" variant="light" icon={<IconBulb />}>
          Informasi ini membantu kami untuk menemukan kesempatan yang pas
          untukmu.
        </Alert>
        <Box w="100%" component="form" onSubmit={form.onSubmit(onSubmit)}>
          <Flex direction="column" gap="lg">
            <MultiSelect
              label="Tipe pekerjaan"
              required
              data={tipePekerjaan}
              size="md"
              labelProps={{ mb: "xs" }}
              {...form.getInputProps("tipePekerjaan")}
            />
            <Autocomplete
              label="Pilih atau isi preferensi tempat kerja"
              required
              size="md"
              labelProps={{ mb: "xs" }}
              {...form.getInputProps("tempatKerja")}
            />
            <Checkbox
              label="Bersedia bekerja remote"
              size="md"
              {...form.getInputProps("bersediaBekerjaRemote", {
                type: "checkbox",
              })}
            />
            <Flex justify="space-between">
              <Anchor onClick={onboardingContext.back}>
                <Flex align="center">
                  <IconChevronLeft />
                  Kembali
                </Flex>
              </Anchor>
              <Button
                w="175px"
                type="submit"
                tt="uppercase"
                size="md"
                disabled={isDisabled}
                onClick={onboardingContext.next}
              >
                Lanjutkan
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
