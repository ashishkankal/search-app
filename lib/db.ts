import { MongoClient } from "mongodb";
declare global {
  var client: MongoClient | null;
}

const MONGODB_URI = process.env.MONGODB_URI || "";
if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

export async function connectToDb() {
  if (global.client) {
    return {
      client: global.client,
    };
  }

  const client = (global.client = new MongoClient(MONGODB_URI, {}));

  await global.client.connect();
  console.log("Connected to the Database ");
  return { client };
}

export const createPost = async (data: { [key: string]: any }) => {
  const { client } = await connectToDb();
  const db = client.db("search_app");

  const newData = await db
    .collection("documents")
    .insertOne({ ...data, createdAt: new Date() });

  return newData;
};

export const fetchPosts = async (q: string) => {
  if (q.length <= 0) {
    return [];
  }
  const { client } = await connectToDb();
  const db = client.db("search_app");

  const pipeline = [
    {
      $search: {
        compound: {
          should: [
            {
              autocomplete: {
                query: q,
                path: "title",
                tokenOrder: "any",
              },
            },
            {
              autocomplete: {
                query: q,
                path: "content",
                tokenOrder: "any",
              },
            },
          ],
        },
      },
    },
  ];

  const result = await db
    .collection("documents")
    .aggregate(pipeline)
    .sort({ score: -1 })
    .limit(10);
  const posts = await result.toArray();

  return posts;
};
