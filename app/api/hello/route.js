export async function GET(request) {
  const name = request.nextUrl.searchParams.get("name");
  return new Response(`Hello, ${name}!`);
}
