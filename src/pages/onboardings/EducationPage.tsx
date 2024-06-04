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
  Select,
  Text,
} from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { IconBulb, IconChevronLeft } from "@tabler/icons-react";
import { valibotResolver } from "mantine-form-valibot-resolver";
import { useCallback, useContext, useState } from "react";
import * as v from "valibot";
import { OnboardingContext } from "./OnboardingContext";

const tingkatPendidikan = [
  "SD",
  "SMP",
  "SMA/SMK",
  "Diploma (D1-D4)",
  "Sarjana (S1)",
  "Magister (S2)",
  "Doktor (S3)",
] as const;

const educationFormSchema = v.variant("masihBersekolah", [
  v.object({
    tingkatPendidikan: v.picklist(
      tingkatPendidikan,
      "Pilih salah satu tingkat pendidikan"
    ),
    institusiPendidikan: v.pipe(
      v.string("Format tidak valid"),
      v.minLength(1, "Tidak boleh kosong"),
      v.maxLength(100, "Maksimal 100 karakter")
    ),
    bidangStudi: v.pipe(
      v.string("Format tidak valid"),
      v.minLength(1, "Tidak boleh kosong"),
      v.maxLength(100, "Maksimal 100 karakter")
    ),
    mulai: v.date("Format tanggal salah"),
    masihBersekolah: v.literal(false),
    selesai: v.date("Format tanggal salah"),
  }),
  v.object({
    tingkatPendidikan: v.pipe(
      v.string("Format tidak valid"),
      v.minLength(1, "Tidak boleh kosong"),
      v.maxLength(100, "Maksimal 100 karakter")
    ),
    institusiPendidikan: v.pipe(
      v.string("Format tidak valid"),
      v.minLength(1, "Tidak boleh kosong"),
      v.maxLength(100, "Maksimal 100 karakter")
    ),
    bidangStudi: v.pipe(
      v.string("Format tidak valid"),
      v.minLength(1, "Tidak boleh kosong"),
      v.maxLength(100, "Maksimal 100 karakter")
    ),
    mulai: v.date("Format tanggal salah"),
    masihBersekolah: v.literal(true),
    selesai: v.null_("Format tidak valid"),
  }),
]);

type EducationInput = v.InferInput<typeof educationFormSchema>;

export default function EducationPage() {
  const [isDisabled, setIsDisabled] = useState(true);
  const form = useForm<EducationInput>({
    mode: "uncontrolled",
    validate: valibotResolver(educationFormSchema),
    onValuesChange: ({
      tingkatPendidikan,
      institusiPendidikan,
      bidangStudi,
      mulai,
      masihBersekolah,
      selesai,
    }) => {
      if (
        tingkatPendidikan === "" ||
        institusiPendidikan === "" ||
        bidangStudi === "" ||
        mulai == null
      ) {
        setIsDisabled(true);
      } else if (!masihBersekolah && selesai == null) {
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
    },
  });
  const onSubmit = useCallback(function () {}, []);

  const onboardingContext = useContext(OnboardingContext);

  const [showSelesai, setShowSelesai] = useState(!form.values.masihBersekolah);
  form.watch("masihBersekolah", ({ value }) => {
    setShowSelesai(!value);
  });

  return (
    <Container w="100%" size="xs" py="xl">
      <Flex direction="column" gap="xl" align="center">
        <Avatar size="xl" />
        <Text fz="h3" fw="600">
          Apa background pendidikan terakhirmu?
        </Text>
        <Alert w="100%" variant="light" icon={<IconBulb />}>
          Latar belakangmu dilihat perusahaan. Beritahu latar pendidikanmu untuk
          mendapatkan 23% wawancara lebih banyak.
        </Alert>
        <Box w="100%" component="form" onSubmit={form.onSubmit(onSubmit)}>
          <Flex direction="column" gap="lg">
            <Select
              label="Tingkat Pendidikan"
              required
              data={tingkatPendidikan}
              size="md"
              labelProps={{ mb: "xs" }}
              {...form.getInputProps("tingkatPendidikan")}
            />
            <Autocomplete
              label="Institusi Pendidikan"
              required
              size="md"
              labelProps={{ mb: "xs" }}
              {...form.getInputProps("institusiPendidikan")}
            />
            <Autocomplete
              label="Bidang Studi"
              required
              size="md"
              labelProps={{ mb: "xs" }}
              {...form.getInputProps("bidangStudi")}
            />
            <MonthPickerInput
              label="Tanggal Mulai"
              required
              size="md"
              labelProps={{ mb: "xs" }}
              {...form.getInputProps("mulai")}
            />
            <Checkbox
              label="Saya masih bersekolah disini"
              size="md"
              {...form.getInputProps("masihBersekolah", {
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
                Selesai
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
