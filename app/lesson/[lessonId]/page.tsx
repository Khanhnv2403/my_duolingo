import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries";
import { redirect } from "next/navigation";
import React from "react";
import Quiz from "../quiz";

type Props = {
  params: {
    lessonId: number;
  };
};

const LessonIdPage = async ({ params }: Props) => {
  const lessonData = getLesson(params.lessonId);
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [lesson, userProgress, userSubscription] = await Promise.all([
    lessonData,
    userProgressData,
    userSubscriptionData,
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
      userSubcription={userSubscription}
    />
  );
};

export default LessonIdPage;
