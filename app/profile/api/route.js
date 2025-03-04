//  Basic GET Handler
/* export async function GET() {
    return new Response("Hello ProfilePage")
} */

// Fetching Data from an External API
/* export const revalidate = 60;
export async function GET() {
  const data = await fetch('https://api.vercel.app/blog');
  const posts = await data.json();
  return Response.json(posts);
} */

// Basic POST Handler
/* export async function POST(request) {
    const res = await request.json();
    return Response.json({ res });
} */

// Handling Form Data
export async function POST(request) {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    return Response.json({ name, email });
}

// Caching Configurations for GET requests
/* export const dynamic = 'force-static';
export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: { 'Content-Type': 'application/json', 'API-Key': process.env.DATA_API_KEY },
  });
  const data = await res.json();
  return Response.json({ data });
} */

// Handling Query Parameters
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const res = await fetch(`https://api.example.com/items?category=${category}`);
    const items = await res.json();
    return new Response(JSON.stringify(items), {
      headers: { 'Content-Type': 'application/json' },
    });
  }