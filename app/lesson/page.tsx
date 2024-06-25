import { getLesson, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import React from "react";
import Quiz from "./quiz";

type Props = {};

const LessonPage = async (props: Props) => {
  const lessonData = getLesson();
  const userProgressData = getUserProgress();

  const [lesson, userProgress] = await Promise.all([
    lessonData,
    userProgressData,
  ]);

  if (!lesson || !userProgress) {
    redirect("/learn");
  }

  const initalPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      initalLessonId={lesson.id}
      initalLessonChallenges={lesson.challenges}
      initalHearts={userProgress.hearts}
      initalPercentage={initalPercentage}
      userSubcription={null}
    />
  );
};

export default LessonPage;
