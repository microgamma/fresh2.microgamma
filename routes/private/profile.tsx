import { Head } from "fresh/runtime";
import { define } from "../../utils.ts";

export default define.page(function ProfilePage(ctx) {
  const user = ctx.state.user;

  return (
    <>
      <Head>
        <title>Profile - Microgamma</title>
      </Head>
      <div class="container mx-auto py-20 px-4">
        <div class="max-w-4xl mx-auto bg-gray-900 rounded-xl p-8 shadow-lg">
          <h1 class="text-4xl font-bold mb-8 text-pink-400 text-center">
            User Profile
          </h1>

          {user
            ? (
              <div class="space-y-6">
                <div class="flex flex-col md:flex-row items-center gap-6 mb-8">
                  {user.picture && (
                    <img
                      src={user.picture}
                      alt="User profile"
                      class="w-32 h-32 rounded-full object-cover border-4 border-pink-400"
                    />
                  )}
                  <div class="text-center md:text-left">
                    <h2 class="text-3xl font-bold text-white">
                      {user.given_name} {user.family_name}
                    </h2>
                    <p class="text-xl text-gray-300">{user.email}</p>
                    <p class="text-gray-400">User ID: {user.id}</p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="bg-gray-800 p-6 rounded-lg">
                    <h3 class="text-xl font-semibold text-pink-400 mb-3">
                      Account Information
                    </h3>
                    <div class="space-y-2">
                      <p>
                        <span class="text-gray-400">Name:</span>{" "}
                        <span class="text-white">
                          {user.given_name} {user.family_name}
                        </span>
                      </p>
                      <p>
                        <span class="text-gray-400">Email:</span>{" "}
                        <span class="text-white">{user.email}</span>
                      </p>
                      <p>
                        <span class="text-gray-400">ID:</span>{" "}
                        <span class="text-white">{user.id}</span>
                      </p>
                    </div>
                  </div>

                  <div class="bg-gray-800 p-6 rounded-lg">
                    <h3 class="text-xl font-semibold text-pink-400 mb-3">
                      Preferences
                    </h3>
                    <p class="text-gray-300">
                      Your preferences will be displayed here.
                    </p>
                    <button class="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
                      Edit Preferences
                    </button>
                  </div>
                </div>

                <div class="mt-8 pt-6 border-t border-gray-700">
                  <h3 class="text-xl font-semibold text-pink-400 mb-3">
                    Account Security
                  </h3>
                  <div class="flex flex-wrap gap-4">
                    <button class="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
                      Change Password
                    </button>
                    <button class="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
                      Manage Connected Apps
                    </button>
                    <button
                      class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                      onClick={() => {
                        // Log out by redirecting to Kinde logout
                        window.location.href = "/login";
                      }}
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            )
            : (
              <div class="text-center py-10">
                <p class="text-xl text-gray-300">Loading user information...</p>
              </div>
            )}
        </div>
      </div>
    </>
  );
});
