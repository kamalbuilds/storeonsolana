
// @ts-nocheck
import { NextUnderdog, NetworkEnum } from "@underdog-protocol/js";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  // const { network } = req.query;

  const nextUnderdog = NextUnderdog({
    apiKey: process.env.NEXT_PUBLIC_UNDERDOG_API_KEY!,
    network: "DEVNET" as NetworkEnum,
  });

  await nextUnderdog(req, res);
};

export default handler;