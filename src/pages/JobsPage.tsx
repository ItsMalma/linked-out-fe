import {
  Button,
  Container,
  Flex,
  MultiSelect,
  Pagination,
  Paper,
  ScrollArea,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconSearch } from "@tabler/icons-react";
import { valibotResolver } from "mantine-form-valibot-resolver";
import * as v from "valibot";
import JobItem from "../components/JobItem";
import MainLayout from "../layouts/MainLayout";

const tipePekerjaan = [
  "Penuh Waktu",
  "Paruh Waktu",
  "Harian",
  "Kontrak",
  "Magang",
] as const;

const pengalaman = [
  "Kurang dari setahun",
  "1 - 3 tahun",
  "3 - 5 tahun",
  "5 - 10 tahun",
  "Lebih dari 10 tahun",
] as const;

const terakhirDiperbarui = [
  "Sebulan terakhir",
  "Seminggu terakhir",
  "24 jam terakhir",
  "Kapan Pun",
] as const;

const jobsFormSchema = v.object({
  prioritaskan: v.picklist(["Paling Relevan", "Baru Ditambahkan"]),
  tipePekerjaan: v.array(v.picklist(tipePekerjaan)),
  bisaKerjaRemote: v.boolean(),
  lokasi: v.array(v.string()),
  pengalaman: v.array(v.picklist(pengalaman)),
  terakhirDiperbarui: v.picklist(terakhirDiperbarui),
});

type JobsForm = v.InferInput<typeof jobsFormSchema>;

export default function JobsPage() {
  const form = useForm<JobsForm>({
    mode: "uncontrolled",
    initialValues: {
      prioritaskan: "Paling Relevan",
      tipePekerjaan: [],
      bisaKerjaRemote: true,
      lokasi: [],
      pengalaman: [],
      terakhirDiperbarui: "Kapan Pun",
    },
    validate: valibotResolver(jobsFormSchema),
  });

  return (
    <MainLayout>
      <Container w="100%" size="xl" py="xl">
        <Flex direction="column" gap="lg">
          <Flex w="100%" gap="md" pos="sticky">
            <TextInput
              flex="1 1 0"
              leftSection={<IconSearch />}
              placeholder="Cari lowongan"
            />
            <Button tt="uppercase" w="8rem">
              Cari
            </Button>
          </Flex>
          <Flex w="100%" gap="md" align="start">
            <Paper withBorder p="md" w="300" maw="300">
              <Stack>
                <Select
                  label="Prioritaskan"
                  data={["Paling Relevan", "Baru Ditambahkan"]}
                  {...form.getInputProps("prioritaskan")}
                />
                <MultiSelect
                  label="Tipe Pekerjaan"
                  data={tipePekerjaan}
                  {...form.getInputProps("tipePekerjaan")}
                />
                <Switch
                  label="Bisa Kerja Remote"
                  {...form.getInputProps("bisaKerjaRemote")}
                />
                <MultiSelect
                  label="Lokasi"
                  data={[]}
                  {...form.getInputProps("lokasi")}
                />
                <MultiSelect
                  label="Pengalaman"
                  data={pengalaman}
                  {...form.getInputProps("pengalaman")}
                />
                <Select
                  label="Terakhir Diperbarui"
                  data={terakhirDiperbarui}
                  {...form.getInputProps("terakhirDiperbarui")}
                />
              </Stack>
            </Paper>
            <ScrollArea>
              <SimpleGrid cols={2}>
                <JobItem
                  id="1"
                  title="Frontend Engineer"
                  salary="Rp3jt-Rp4jt"
                  tags={[
                    "Kerja di kantor",
                    "Penuh waktu",
                    "1 - 3 tahun",
                    "Minimal Sarjana (S1)",
                  ]}
                  company="Dabu Digital Agency"
                  location="Jakarta Barat, DKI Jakarta"
                />
                <JobItem
                  id="1"
                  title="Backend Engineer"
                  tags={[
                    "Kerja di kantor",
                    "Penuh waktu",
                    "1 - 3 tahun",
                    "Minimal Sarjana (S1)",
                  ]}
                  company="Dabu Digital Agency"
                  location="Jakarta Barat, DKI Jakarta"
                />
                <JobItem
                  id="1"
                  title="Frontend Engineer"
                  salary="Rp3jt-Rp4jt"
                  tags={[
                    "Kerja di kantor",
                    "Penuh waktu",
                    "1 - 3 tahun",
                    "Minimal Sarjana (S1)",
                  ]}
                  company="Dabu Digital Agency"
                  location="Jakarta Barat, DKI Jakarta"
                />
                <JobItem
                  id="1"
                  title="Frontend Engineer"
                  salary="Rp3jt-Rp4jt"
                  tags={[
                    "Kerja di kantor",
                    "Penuh waktu",
                    "1 - 3 tahun",
                    "Minimal Sarjana (S1)",
                  ]}
                  company="Dabu Digital Agency"
                  location="Jakarta Barat, DKI Jakarta"
                />
                <JobItem
                  id="1"
                  title="Frontend Engineer"
                  salary="Rp3jt-Rp4jt"
                  tags={[
                    "Kerja di kantor",
                    "Penuh waktu",
                    "1 - 3 tahun",
                    "Minimal Sarjana (S1)",
                  ]}
                  company="Dabu Digital Agency"
                  location="Jakarta Barat, DKI Jakarta"
                />
              </SimpleGrid>
            </ScrollArea>
          </Flex>
          <Flex align="center" justify="center">
            <Pagination total={10} />
          </Flex>
        </Flex>
      </Container>
    </MainLayout>
  );
}
