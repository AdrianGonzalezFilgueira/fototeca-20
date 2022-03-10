import nextConnect from "next-connect";

const handler = nextConnect({
  onError(err, req, res) {
    res.status(500).json({ message: `Error: ${err.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ message: `Método ${req.method} no permitido` });
  },
});

export default handler;
