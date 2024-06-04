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
  Text,
} from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { IconBulb, IconChevronLeft } from "@tabler/icons-react";
import { valibotResolver } from "mantine-form-valibot-resolver";
import { useCallback, useContext, useState } from "react";
import * as v from "valibot";
import { OnboardingContext } from "./OnboardingContext";

const workExperienceFormSchema = v.variant("masihBekerja", [
  v.object({
    posisi: v.pipe(
      v.string("Format tidak valid"),
      v.minLength(1, "Tidak boleh kosong"),
      v.maxLength(100, "Maksimal 100 karakter")
    ),
    perusahaan: v.pipe(
      v.string("Format tidak valid"),
      v.minLength(1, "Tidak boleh kosong"),
      v.maxLength(100, "Maksimal 100 karakter")
    ),
    mulai: v.date("Format tanggal salah"),
    masihBekerja: v.literal(false),
    selesai: v.date("Format tanggal salah"),
  }),
  v.object({
    posisi: v.pipe(
      v.string("Format tidak valid"),
      v.minLength(1, "Tidak boleh kosong"),
      v.maxLength(100, "Maksimal 100 karakter")
    ),
    perusahaan: v.pipe(
      v.string("Format tidak valid"),
      v.minLength(1, "Tidak boleh kosong"),
      v.maxLength(100, "Maksimal 100 karakter")
    ),
    mulai: v.date("Format tanggal salah"),
    masihBekerja: v.literal(true),
    selesai: v.null_("Format tidak valid"),
  }),
]);

type JobPreferencesInput = v.InferInput<typeof workExperienceFormSchema>;

export default function WorkExperiencePage() {
  const [isDisabled, setIsDisabled] = useState(true);
  const form = useForm<JobPreferencesInput>({
    mode: "uncontrolled",
    validate: valibotResolver(workExperienceFormSchema),
    onValuesChange: ({ posisi, perusahaan, mulai, masihBekerja, selesai }) => {
      if (posisi === "" || perusahaan === "" || mulai == null) {
        setIsDisabled(true);
      } else if (!masihBekerja && selesai == null) {
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
    },
  });
  const onSubmit = useCallback(function () {}, []);

  const onboardingContext = useContext(OnboardingContext);

  const [showSelesai, setShowSelesai] = useState(!form.values.masihBekerja);
  form.watch("masihBekerja", ({ value }) => {
    setShowSelesai(!value);
  });

  return (
    <Container w="100%" size="xs" py="xl">
      <Flex direction="column" gap="xl" align="center">
        <Avatar size="xl" />
        <Text fz="h3" fw="600">
          Ceritakan pengalaman kerja terakhirmu.
        </Text>
        <Alert w="100%" variant="light" icon={<IconBulb />}>
          77,4% perusahaan menganggap resume sangat penting dalam lamaran
          pekerjaan.
        </Alert>
        <Box w="100%" component="form" onSubmit={form.onSubmit(onSubmit)}>
          <Flex direction="column" gap="lg">
            <Autocomplete
              label="Posisi"
              required
              size="md"
              labelProps={{ mb: "xs" }}
              {...form.getInputProps("posisi")}
            />
            <Autocomplete
              label="Perusahaan"
              required
              size="md"
              labelProps={{ mb: "xs" }}
              {...form.getInputProps("perusahaan")}
            />
            <MonthPickerInput
              label="Tanggal Mulai"
              required
              size="md"
              labelProps={{ mb: "xs" }}
              {...form.getInputProps("mulai")}
            />
            <Checkbox
              label="Saya masih bekerja di perusahaan ini"
              size="md"
              {...form.getInputProps("masihBekerja", {
                type: "checkbox",
              })}
            />
            {showSelesai && (
              <MonthPickerInput
                label="Tanggal Selesai"
                required
                size="md"
                labelProps={{ mb: "xs" }}
                {...form.getInputProps("selesai")}
              />
            )}
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
