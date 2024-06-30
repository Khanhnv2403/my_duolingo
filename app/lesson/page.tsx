import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries";
import { redirect } from "next/navigation";
import React from "react";
import Quiz from "./quiz";

type Props = {};

const LessonPage = async (props: Props) => {
  const lessonData = getLesson();
  const userProgressData = getUserProgress();
  const userSubcriptionData = getUserSubscription();

  const [lesson, userProgress, userSubcription] = await Promise.all([
    lessonData,
    userProgressData,
    userSubcriptionData,
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
      userSubcription={userSubcription}
    />
  );
};

export default LessonPage;
