import { Head } from "fresh/runtime";
import { define } from "../../utils.ts";
import { kindeClient } from "../../utils/auth.ts";
import { sessionManager } from "../../utils/SessionManager.ts";

export default define.page(async function ProfilePage(ctx) {
  const user = ctx.state.user;
  const permissions = await kindeClient.getPermissions(sessionManager);





  return (
    <>
      <Head>
        <title>Profile - Microgamma</title>
      </Head>
      <div class="min-h-screen bg-gray-900 text-white grid-bg px-4 py-8">
        <div class="max-w-7xl mx-auto">
          <h1 class="text-5xl font-bold mb-12 text-primary-400 text-center">
            User Profile
          </h1>

          {user
            ? (
              <div class="space-y-12">
                {/* Profile Header */}
                <div class="flex flex-col lg:flex-row items-center lg:items-start gap-8 py-12">
                  {user.picture && (
                    <img
                      src={user.picture}
                      alt="User profile"
                      class="w-48 h-48 rounded-full object-cover border-4 border-primary-400 shadow-lg"
                    />
                  )}
                  <div class="text-center lg:text-left flex-1">
                    <h2 class="text-4xl font-bold text-white mb-4">
                      {user.given_name} {user.family_name}
                    </h2>
                    <p class="text-2xl text-gray-300 mb-2">{user.email}</p>
                    <p class="text-lg text-gray-400">User ID: {user.id}</p>
                  </div>
                </div>

                {/* Account Information Section */}
                <div class="py-12">
                  <h3 class="text-3xl font-semibold text-primary-400 mb-8">
                    Account Information
                  </h3>
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div class="space-y-4">
                        <p class="text-xl">
                          <span class="text-gray-400">Full Name:</span>{" "}
                          <span class="text-white font-semibold">
                            {user.given_name} {user.family_name}
                          </span>
                        </p>
                        <p class="text-xl">
                          <span class="text-gray-400">Email:</span>{" "}
                          <span class="text-white font-semibold">{user.email}</span>
                        </p>
                        <p class="text-xl">
                          <span class="text-gray-400">User ID:</span>{" "}
                          <span class="text-white font-mono">{user.id}</span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 class="text-2xl font-semibold text-primary-400 mb-4">
                        Role & Permissions
                      </h4>
                      <div class="">
                        <p class="text-xl">
                          <span class="text-gray-400">Roles:</span>{" "}
                          <span class="text-white font-semibold">
                          {

                            permissions?.permissions ? 
                              permissions?.permissions.join(' ')

                              :
                              
                                'None'
                          }
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
            : (
              <div class="text-center py-20">
                <p class="text-2xl text-gray-300">Loading user information...</p>
              </div>
            )}
        </div>
      </div>
    </>
  );
});
