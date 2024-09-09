// import React from 'react';
// import { Line, Bar } from 'react-chartjs-2';
// import Navbar from './Navbar';  // Import the Navbar component
// import Sidebar from './Sidebar'; // Import the Sidebar component
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement
// );

// const Dashboard = () => {
//   const lineData = {
//     labels: ['Apr 1', 'Apr 5', 'Apr 10', 'Apr 15', 'Apr 20', 'Apr 25', 'Apr 30'],
//     datasets: [
//       {
//         label: 'Sessions',
//         data: [5000, 8000, 10000, 13000, 15000, 18000, 20000],
//         fill: true,
//         backgroundColor: 'rgba(79, 70, 229, 0.3)',
//         borderColor: 'rgba(79, 70, 229, 0.8)',
//       },
//     ],
//   };

//   const barData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//     datasets: [
//       {
//         label: 'Page Views and Downloads',
//         data: [12000, 15000, 13000, 17000, 18000, 14000, 16000],
//         backgroundColor: 'rgba(16, 185, 129, 0.7)',
//       },
//     ],
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />  {/* Include Sidebar component */}
//       <div className="flex-1 p-6">
//         <Navbar />  {/* Include Navbar component */}
//         <div className="grid grid-cols-2 gap-4 mb-4 mt-6">
//           <div className="p-4 bg-white shadow rounded-lg">
//             <h2 className="text-xl font-semibold text-gray-700">Users</h2>
//             <p className="text-2xl font-bold text-gray-800">14k</p>
//             <p className="text-green-500">+25%</p>
//           </div>
//           <div className="p-4 bg-white shadow rounded-lg">
//             <h2 className="text-xl font-semibold text-gray-700">Conversions</h2>
//             <p className="text-2xl font-bold text-gray-800">325</p>
//             <p className="text-red-500">-25%</p>
//           </div>
//           <div className="p-4 bg-white shadow rounded-lg">
//             <h2 className="text-xl font-semibold text-gray-700">Event Count</h2>
//             <p className="text-2xl font-bold text-gray-800">200k</p>
//           </div>
//           <div className="p-4 bg-white shadow rounded-lg">
//             <h2 className="text-xl font-semibold text-gray-700">Sessions</h2>
//             <Line data={lineData} />
//           </div>
//         </div>
//         <div className="p-4 bg-white shadow rounded-lg">
//           <h2 className="text-xl font-semibold text-gray-700">Page Views and Downloads</h2>
//           <Bar data={barData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
