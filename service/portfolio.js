export default async function() {
  try {
    const portfolioKey = "portfolio"
    const portfolio = localStorage.getItem(portfolioKey)
    if(portfolio) {
      const portfolioJSON = JSON.parse(portfolio)
      return portfolioJSON
    }
    const resp = await fetch("/portfolio.json")
    const json = await resp.json()

    localStorage.setItem(portfolioKey, JSON.stringify(json))
    return json
  } catch (error) {
    console.log(error)
  }
}
