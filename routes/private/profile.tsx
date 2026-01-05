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
        <title>User Profile - Microgamma</title>
        <meta name="description" content="Manage your Microgamma account, view your profile information, and access account settings." />
      </Head>
      <div class="min-h-screen text-white px-4 py-8 relative overflow-hidden vaporwave-bg">
        {/* Background overlay for better text readability */}
        <div class="absolute inset-0 bg-black/60"></div>
        <div class="relative z-10">
          <div class="max-w-4xl mx-auto">
          <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 p-8 mb-8">
            <h1 class="text-2xl md:text-3xl font-bold text-primary-400 text-center mb-2">
              User Profile
            </h1>
            <p class="text-gray-300 text-center">Manage your account and preferences</p>
          </div>

          {user
            ? (
              <div class="space-y-6">
                {/* Profile Header */}
                <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 p-8">
                  <div class="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                    {user.picture && (
                      <img
                        src={user.picture}
                        alt="User profile"
                        class="w-32 h-32 rounded-full object-cover border-2 border-primary-400"
                      />
                    )}
                    <div class="text-center lg:text-left flex-1">
                      <h2 class="text-2xl font-bold text-white mb-2">
                        {user.given_name} {user.family_name}
                      </h2>
                      <p class="text-lg text-gray-300 mb-1">{user.email}</p>
                      <p class="text-sm text-gray-400 font-mono">ID: {user.id}</p>
                    </div>
                  </div>
                </div>

                {/* Account Information Section */}
                <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 p-8">
                  <h3 class="text-xl font-semibold text-primary-400 mb-6 pb-4 border-b border-primary-400/20">
                    Account Information
                  </h3>
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="space-y-4">
                      <div>
                        <label class="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                        <p class="text-white font-medium">
                          {user.given_name} {user.family_name}
                        </p>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <p class="text-gray-300">{user.email}</p>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-400 mb-1">User ID</label>
                        <p class="text-gray-300 font-mono text-sm">{user.id}</p>
                      </div>
                    </div>
                    <div>
                      <h4 class="text-lg font-semibold text-primary-400 mb-4">
                        Role & Permissions
                      </h4>
                      <div>
                        <label class="block text-sm font-medium text-gray-400 mb-1">Permissions</label>
                        <p class="text-gray-300">
                          {permissions?.permissions ?
                            permissions.permissions.join(', ') :
                            'Standard user access'
                          }
                        </p>
                      </div>
                       <div class="mt-4">
                         <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-900/50 text-primary-300 border border-primary-400/30">
                           Active User
                         </span>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Account Actions Section */}
                 <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 p-8">
                   <h3 class="text-xl font-semibold text-primary-400 mb-6 pb-4 border-b border-primary-400/20">
                     Account Actions
                   </h3>
                   <div class="flex justify-center">
                     <a
                       href="/logout"
                       class="bg-warn-700 hover:bg-warn-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center space-x-2"
                     >
                       <span>🚪</span>
                       <span>Logout</span>
                     </a>
                   </div>
                 </div>
              </div>
            )
            : (
              <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 p-8 text-center">
                <div class="animate-pulse">
                  <div class="h-8 bg-primary-900/50 rounded w-48 mx-auto mb-4"></div>
                  <div class="h-4 bg-primary-900/30 rounded w-64 mx-auto"></div>
                </div>
                <p class="text-gray-400 mt-4">Loading your profile information...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
});
