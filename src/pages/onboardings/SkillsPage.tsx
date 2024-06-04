import {
  Alert,
  Anchor,
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  TagsInput,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconBulb, IconChevronLeft } from "@tabler/icons-react";
import { valibotResolver } from "mantine-form-valibot-resolver";
import { useCallback, useContext, useState } from "react";
import * as v from "valibot";
import { OnboardingContext } from "./OnboardingContext";

const skillsFormSchema = v.object({
  daftarKeterampilan: v.pipe(
    v.array(
      v.pipe(
        v.string("Format tidak valid"),
        v.minLength(1, "Tidak boleh kosong"),
        v.maxLength(100, "Maksimal 100 karakter")
      ),
      "Tidak boleh kosong"
    ),
    v.minLength(3, "Minimal 3 keterampilan")
  ),
});

type SkillsInput = v.InferInput<typeof skillsFormSchema>;

export default function SkillsPage() {
  const [isDisabled, setIsDisabled] = useState(true);
  const form = useForm<SkillsInput>({
    mode: "uncontrolled",
    initialValues: {
      daftarKeterampilan: [],
    },
    validate: valibotResolver(skillsFormSchema),
    onValuesChange: ({ daftarKeterampilan }) => {
      if (daftarKeterampilan.length < 3) {
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
          Beritahu apa yang kamu kuasai untuk menarik minat perusahaan terbaik.
        </Text>
        <Alert w="100%" variant="light" icon={<IconBulb />}>
          Informasi ini membantu kami untuk menghubungkanmu dengan perusahaan
          yang tepat.
        </Alert>
        <Box w="100%" component="form" onSubmit={form.onSubmit(onSubmit)}>
          <Flex direction="column" gap="lg">
            <TagsInput
              description="Tambahkan 3 - 10 skill yang paling kamu kuasai"
              placeholder="Pilih atau isi keterampilan"
              required
              size="md"
              descriptionProps={{ mb: "md", fz: "md" }}
              labelProps={{ mb: "xs" }}
              {...form.getInputProps("daftarKeterampilan")}
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
