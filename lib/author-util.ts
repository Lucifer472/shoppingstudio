import { db } from "./db";

const getAuthor = async (username: string) => {
  const data = await db.user.findUnique({
    where: {
      username: username,
    },
  });
  return data;
};

export const getAllAuthor = async () => {
  const data = await db.user.findMany();
  return data;
};

export default getAuthor;

// Function and data
export async function getAuthorByNumber(take: number) {
  const data = await db.user.findMany({
    take: take,
    orderBy: {
      id: "desc",
    },
  });
  return data;
}
