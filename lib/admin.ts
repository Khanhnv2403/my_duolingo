import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_2hGuHwREZHcoYrF7boMnid69cSk"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) return false;

  return adminIds.indexOf(userId) !== -1;
};
