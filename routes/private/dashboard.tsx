import { define } from "../../utils.ts";
import MainLayout from "../../components/MainLayout.tsx";
import { Head } from "fresh/runtime";

export default define.page(function DashboardPage(ctx) {
  const user = ctx.state.user;
  console.log({user});

  return (
    <>
      <Head>
        <title>Dashboard - Microgamma</title>
        <meta name="description" content="Access your Microgamma dashboard to manage your music collection, view statistics, and control your streaming settings." />
      </Head>
      <MainLayout>
        <div className="container mx-auto py-20 px-4">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl p-8 shadow-lg">
            <h1 className="text-4xl font-bold mb-8 text-pink-400 text-center">Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-2xl font-semibold text-pink-400 mb-2">My Music</h3>
                <p className="text-3xl font-bold text-white">1,248</p>
                <p className="text-gray-400">Songs</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-2xl font-semibold text-pink-400 mb-2">Playlists</h3>
                <p className="text-3xl font-bold text-white">24</p>
                <p className="text-gray-400">Active</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-2xl font-semibold text-pink-400 mb-2">Listening Time</h3>
                <p className="text-3xl font-bold text-white">168</p>
                <p className="text-gray-400">Hours this month</p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold text-pink-400 mb-4">Recent Activity</h2>
              <ul className="space-y-3">
                <li className="flex items-center justify-between border-b border-gray-700 pb-3">
                  <span className="text-white">Played "Bohemian Rhapsody" by Queen</span>
                  <span className="text-gray-400">2 hours ago</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-700 pb-3">
                  <span className="text-white">Added "Blinding Lights" to favorites</span>
                  <span className="text-gray-400">Yesterday</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-white">Created playlist "Chill Vibes"</span>
                  <span className="text-gray-400">Jan 1, 2026</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <button className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
});
