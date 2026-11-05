module.exports = async (req, res) => {
  try {
    async function getRating(type) {
      const url = `https://atcoder.jp/users/WebP/history/json${
        type === "algorithm" ? "?contestType=algo" : "?contestType=heuristic"
      }`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`AtCoder API error: ${response.status}`);
      }

      const history = await response.json();

      const latest = [...history]
        .reverse()
        .find(x => x.NewRating >= 0);

      return latest ? latest.NewRating : null;
    }

    const [algorithm, heuristic] = await Promise.all([
      getRating("algorithm"),
      getRating("heuristic")
    ]);

    res.setHeader("Cache-Control", "s-maxage=300");

    return res.status(200).json({
      algorithm,
      heuristic
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};