"use client";

import { challengeOptions, challenges } from "@/db/schema";
import { useState } from "react";
import Header from "./header";

type Props = {
  initalLessonId: number;
  initalHearts: number;
  initalPercentage: number;
  initalLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  userSubcription: any;
};

const Quiz = ({
  initalLessonId,
  initalHearts,
  initalPercentage,
  initalLessonChallenges,
  userSubcription,
}: Props) => {
  const [hearts, setHearts] = useState(initalHearts);
  const [percentage, setPercentage] = useState(initalPercentage);
  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubcription?.isActive}
      />
    </>
  );
};

export default Quiz;
