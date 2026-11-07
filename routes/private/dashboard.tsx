import { define } from "../../utils.ts";
import { Head } from "fresh/runtime";

export default define.page(function DashboardPage(ctx) {
  const user = ctx.state.user;
  console.log({ user });

  return (
    <>
      <Head>
        <title>Dashboard - Microgamma</title>
        <meta
          name="description"
          content="Your Microgamma account."
        />
      </Head>
      <div class="min-h-screen text-white px-4 py-8 relative overflow-hidden vaporwave-bg">
        {/* Background overlay for better text readability */}
        <div class="absolute inset-0 bg-black/60"></div>
        <div class="relative z-10">
          <div class="max-w-4xl mx-auto">
            <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 p-8">
              <h1 class="text-2xl md:text-3xl font-bold text-primary-400 text-center mb-2">
                Dashboard
              </h1>
              <p class="text-gray-300 text-center">
                You're signed in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
