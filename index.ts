import express, { Application, Request, Response } from "express";
import axios from "axios";
import "dotenv/config";

const app: Application = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/deck", async (_req: Request, res: Response) => {
  const deckCode = _req.query.code;

  const deck = await axios.post(
    `${process.env.POST_URL}${deckCode}`,
    {},
    {
      headers: {
        Referer: process.env.REFERER_URL,
      },
    }
  );

  const list = deck.data.list.map((card: any) => {
    return {
      image: `${process.env.IMAGE_BASE_URL}${card.img}`,
      count: card.num,
      type: "normal",
      selected: false,
    };
  });
  const subList = deck.data.sub_list.map((card: any) => {
    return {
      image: `${process.env.IMAGE_BASE_URL}${card.img}`,
      count: card.num,
      type: "evolve",
      selected: false,
    };
  });

  return res.status(200).send([list, subList]);
});

try {
  app.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
