"use client";

import { toast } from "sonner";
import { courses, userProgress } from "@/db/schema";
import Card from "./card";
import styles from "@/app/styles.module.css";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

const List = ({ courses, activeCourseId }: Props) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onClick = (id: number) => {
    if (pending) return;

    if (id === activeCourseId) {
      return router.push("/learn");
    }

    startTransition(async () => {
      upsertUserProgress(id).catch(() => toast.error("Sth went wrong"));
    });
  };

  return (
    <div className={`pt-6 grid grid-cols-2 gap-4 ${styles["custom-grid"]}`}>
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={onClick}
          disabled={pending}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};

export default List;
