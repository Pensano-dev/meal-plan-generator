const getTest = (req, res) => {
  try {
    res.status(200).json({message: "It's all good in the test api route 😇"})
  } catch (error) {
    res.status(500).json({message: error})
  }
}

module.exports = {
  getTest,
};