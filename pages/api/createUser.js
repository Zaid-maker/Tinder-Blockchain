import { client } from "../../lib/sanity";

const createUserOnSanity = async (req, res) => {
  try {
    const userDoc = {
      _type: "users",
      _id: req.body.userWallerAddress,
      name: req.body.name,
      walletAddress: req.body.userWallerAddress,
    };

    await client.createIfNotExists(userDoc);

    res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    res.status(500).send({
      message: "Error occured",
      data: error.message,
    });
  }
};

export default createUserOnSanity;
