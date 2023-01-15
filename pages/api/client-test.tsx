import client from "@libs/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await client.user.create({
        data: {
            name: "재훈",
            email: "유니크한 값",
        },
    });
    res.json({
        ok: true,
    });
}
