export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://atcoder.jp/users/WebP/history/json"
    );

    if (!response.ok) {
      return res.status(response.status).json({
        error: "AtCoder API error"
      });
    }

    const history = await response.json();

    const latest = [...history]
      .reverse()
      .find(contest => contest.NewRating >= 0);

    res.setHeader("Cache-Control", "s-maxage=300");
    return res.status(200).json({
      rating: latest ? latest.NewRating : null
    });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch rating"
    });
  }
}