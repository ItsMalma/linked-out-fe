import { Button, Container, Flex, Image, Progress } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { ContextType, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import EducationPage from "./onboardings/EducationPage";
import JobInterestsPage from "./onboardings/JobInterestsPage";
import JobPreferencesPage from "./onboardings/JobPreferencesPage";
import { OnboardingContext } from "./onboardings/OnboardingContext";
import SkillsPage from "./onboardings/SkillsPage";
import WorkExperiencePage from "./onboardings/WorkExperiencePage";

const pages = [
  JobInterestsPage,
  JobPreferencesPage,
  SkillsPage,
  WorkExperiencePage,
  EducationPage,
];
const pagesLength = pages.length;

export default function OnboardingPage() {
  const navigate = useNavigate();

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const CurrentPage = useMemo(
    () => pages[currentPageIndex],
    [currentPageIndex]
  );
  const progressValue = useMemo(
    () => ((currentPageIndex + 1) / (pagesLength + 1)) * 100,
    [currentPageIndex]
  );

  const contextValue = useMemo<ContextType<typeof OnboardingContext>>(() => {
    return {
      index: currentPageIndex,
      next: () => {
        if (currentPageIndex === pagesLength - 1) {
          // Submit
          navigate("/jobs");
        } else {
          setCurrentPageIndex((index) => index + 1);
        }
      },
      back: () => {
        setCurrentPageIndex((index) => (index === 0 ? index : index - 1));
      },
    };
  }, [currentPageIndex, navigate]);

  return (
    <Flex direction="column">
      <Flex
        direction="column"
        bg="white"
        pos="sticky"
        top={0}
        style={{
          zIndex: 100,
          borderBottom: "1px solid var(--mantine-color-gray-5)",
        }}
      >
        <Container size="xl" w="100%" h={60}>
          <Flex w="100%" h="100%" align="center" justify="space-between">
            <Image />
            <Button
              variant="transparent"
              c="gray"
              fw="400"
              fz="lg"
              rightSection={<IconChevronRight />}
              onClick={contextValue.next}
            >
              Lewati langkah ini
            </Button>
          </Flex>
        </Container>
        <Progress radius="0" value={progressValue} striped animated />
      </Flex>
      <OnboardingContext.Provider value={contextValue}>
        <CurrentPage />
      </OnboardingContext.Provider>
    </Flex>
  );
}
