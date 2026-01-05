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
      <div class="min-h-screen bg-gray-100 text-gray-900 px-4 py-8">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
            <h1 class="text-3xl font-bold text-gray-900 text-center mb-2">
              User Profile
            </h1>
            <p class="text-gray-600 text-center">Manage your account and preferences</p>
          </div>

          {user
            ? (
              <div class="space-y-6">
                {/* Profile Header */}
                <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                  <div class="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                    {user.picture && (
                      <img
                        src={user.picture}
                        alt="User profile"
                        class="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
                      />
                    )}
                    <div class="text-center lg:text-left flex-1">
                      <h2 class="text-2xl font-bold text-gray-900 mb-2">
                        {user.given_name} {user.family_name}
                      </h2>
                      <p class="text-lg text-gray-600 mb-1">{user.email}</p>
                      <p class="text-sm text-gray-500 font-mono">ID: {user.id}</p>
                    </div>
                  </div>
                </div>

                {/* Account Information Section */}
                <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                  <h3 class="text-xl font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                    Account Information
                  </h3>
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="space-y-4">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <p class="text-gray-900 font-medium">
                          {user.given_name} {user.family_name}
                        </p>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <p class="text-gray-900">{user.email}</p>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">User ID</label>
                        <p class="text-gray-900 font-mono text-sm">{user.id}</p>
                      </div>
                    </div>
                    <div>
                      <h4 class="text-lg font-semibold text-gray-900 mb-4">
                        Role & Permissions
                      </h4>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Permissions</label>
                        <p class="text-gray-900">
                          {permissions?.permissions ?
                            permissions.permissions.join(', ') :
                            'Standard user access'
                          }
                        </p>
                      </div>
                      <div class="mt-4">
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                          Active User
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
            : (
              <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <div class="animate-pulse">
                  <div class="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
                  <div class="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
                </div>
                <p class="text-gray-600 mt-4">Loading your profile information...</p>
              </div>
            )}
        </div>
      </div>
    </>
  );
});
