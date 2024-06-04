import {
  Alert,
  Autocomplete,
  Avatar,
  Box,
  Button,
  CloseButton,
  Container,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";
import { IconBulb, IconPlus } from "@tabler/icons-react";
import { valibotResolver } from "mantine-form-valibot-resolver";
import { useCallback, useContext, useState } from "react";
import * as v from "valibot";
import { OnboardingContext } from "./OnboardingContext";

const jobInterestsFormSchema = v.object({
  daftarBidangPekerjaan: v.array(
    v.object({
      bidangPekerjaan: v.pipe(
        v.string("Format tidak valid"),
        v.minLength(1, "Tidak boleh kosong"),
        v.maxLength(100, "Maksimal 100 karakter")
      ),
      key: v.string(),
    })
  ),
});

type JobInterestsInput = v.InferInput<typeof jobInterestsFormSchema>;

export default function JobInterestsPage() {
  const [isDisabled, setIsDisabled] = useState(true);
  const form = useForm<JobInterestsInput>({
    mode: "uncontrolled",
    initialValues: {
      daftarBidangPekerjaan: [{ bidangPekerjaan: "", key: randomId() }],
    },
    validate: valibotResolver(jobInterestsFormSchema),
    onValuesChange: ({ daftarBidangPekerjaan }) => {
      setIsDisabled(
        daftarBidangPekerjaan.some(
          (bidangPekerjaan) => bidangPekerjaan.bidangPekerjaan === ""
        )
      );
    },
  });
  const onSubmit = useCallback(function () {}, []);

  const onboardingContext = useContext(OnboardingContext);

  return (
    <Container w="100%" size="xs" py="xl">
      <Flex direction="column" gap="xl" align="center">
        <Avatar size="xl" />
        <Text fz="h3" fw="600">
          Bagus! Apa jenis pekerjaan yang kamu cari?
        </Text>
        <Alert w="100%" variant="light" icon={<IconBulb />}>
          Informasi ini membantu kami untuk merekomendasikan pekerjaan yang pas
          untukmu.
        </Alert>
        <Box w="100%" component="form" onSubmit={form.onSubmit(onSubmit)}>
          <Flex direction="column" gap="xl">
            <Stack>
              {form
                .getValues()
                .daftarBidangPekerjaan.map(
                  (bidangPekerjaan, index, daftarBidangPekerjaan) => (
                    <Group gap="xs" key={bidangPekerjaan.key} w="100%">
                      <Autocomplete
                        placeholder="Pilih atau isi bidang pekerjaan"
                        flex={1}
                        size="md"
                        {...form.getInputProps(
                          `daftarBidangPekerjaan.${index}.bidangPekerjaan`
                        )}
                        error={false}
                      />
                      {daftarBidangPekerjaan.length > 1 && (
                        <CloseButton
                          onClick={() =>
                            form.removeListItem("daftarBidangPekerjaan", index)
                          }
                        />
                      )}
                    </Group>
                  )
                )}
              <Button
                variant="outline"
                w="100%"
                type="submit"
                tt="uppercase"
                size="md"
                style={{
                  borderStyle: "dashed",
                }}
                leftSection={<IconPlus />}
                onClick={() =>
                  form.insertListItem("daftarBidangPekerjaan", {
                    bidangPekerjaan: "",
                    key: randomId(),
                  })
                }
              >
                Tambahkan bidang pekerjaan
              </Button>
            </Stack>
            <Button
              w="100%"
              type="submit"
              tt="uppercase"
              size="md"
              disabled={isDisabled}
              onClick={onboardingContext.next}
            >
              Lanjutkan
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
