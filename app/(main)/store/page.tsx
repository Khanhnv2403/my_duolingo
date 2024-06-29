import FeedWrapper from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";
import UserProgress from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import Items from "./items";

type Props = {};

const ShopPage = async (props: Props) => {
  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image src="/icons/store.svg" alt="Shop" height={90} width={90} />
        </div>
        <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
          Store
        </h1>
        <p className="text-muted-foreground text-center text-lg mb-6">
          Spend your point on cool stuff
        </p>
        <Items
          points={userProgress.points}
          hearts={userProgress.hearts}
          hasActiveSubscription={false}
        />
      </FeedWrapper>
    </div>
  );
};

export default ShopPage;
