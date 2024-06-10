import {
  ActionIcon,
  Avatar,
  Container,
  Flex,
  Group,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import CompanyLayout from "../layouts/CompanyLayout";

export default function CompanyApplicationsPage() {
  return (
    <CompanyLayout>
      <Container w="100%" size="xl" py="xl">
        <Flex direction="column" gap="lg">
          <Flex w="100%" gap="md" align="start">
            <Stack w="100%">
              <Paper w="100%" withBorder p="md">
                <Flex direction="column" gap="sm">
                  <Flex gap="xs">
                    <Avatar size="lg" />
                    <Flex direction="column" flex={1}>
                      <Text fz="h4" fw="600">
                        Adam Akmal Madani
                      </Text>
                      <Text c="gray" fw={500}>
                        Melamar posisi Backend Engineer
                      </Text>
                      <Group mt="sm" gap="xs">
                        <ActionIcon color="lime" radius="md">
                          <IconCheck />
                        </ActionIcon>
                        <ActionIcon color="red" radius="md">
                          <IconX />
                        </ActionIcon>
                      </Group>
                    </Flex>
                  </Flex>
                </Flex>
              </Paper>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </CompanyLayout>
  );
}
