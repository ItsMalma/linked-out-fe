import {
  Button,
  Container,
  Flex,
  Paper,
  Pill,
  Stack,
  Text,
} from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import CompanyLayout from "../layouts/CompanyLayout";

export default function CompanyJobsPage() {
  return (
    <CompanyLayout>
      <Container w="100%" size="xl" py="xl">
        <Flex direction="column" gap="lg">
          <Button tt="uppercase" w="8rem">
            Tambah
          </Button>
          <Stack>
            <Paper w="100%" c="black" withBorder p="md">
              <Flex direction="column" gap="sm">
                <Flex justify="space-between">
                  <Text fz="h4" fw="600">
                    Backend Engineer
                  </Text>
                  <Text c="blue" fw="500">
                    Rp3jt-Rp4jt
                  </Text>
                </Flex>
                <Pill.Group>
                  <Pill bg="gray.3">PHP</Pill>
                  <Pill bg="gray.3">Laravel</Pill>
                </Pill.Group>
                <Flex direction="column" gap="2">
                  <Flex gap="4" align="center">
                    <IconMapPin color="var(--mantine-color-gray-7)" size="20" />
                    <Text>Jakarta</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Paper>
          </Stack>
        </Flex>
      </Container>
    </CompanyLayout>
  );
}
