export default async function handler(
  req: { query: { city?: string | string[] } },
  res: {
    setHeader: (name: string, value: string) => void;
    status: (code: number) => { json: (body: unknown) => void };
  }
) {
  const { city } = req.query;
  const cityValue = Array.isArray(city) ? city[0] : city;

  if (!cityValue || !cityValue.trim()) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(400).json({ error: 'Missing city query parameter.' });
  }

  try {
    const target = `https://wttr.in/${encodeURIComponent(cityValue.trim())}?format=j1`;
    const upstream = await fetch(target, { headers: { 'User-Agent': 'Weather-Station/1.0' } });

    const contentType = upstream.headers.get('content-type') || '';
    const text = await upstream.text();

    let body: unknown;
    try {
      body = JSON.parse(text);
    } catch {
      // wttr.in returned non-JSON (e.g. "location not found"), treat as not found
      body = null;
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-store');

    if (upstream.status === 404 || upstream.status === 500 || body === null) {
      return res.status(404).json({ error: `City "${cityValue}" not found.` });
    }

    return res.status(200).json(body);
  } catch (err) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(502).json({ error: 'Weather upstream is unreachable.' });
  }
}
