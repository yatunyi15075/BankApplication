// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaHome, FaTasks, FaUser, FaEnvelope, FaDollarSign, FaChartBar } from 'react-icons/fa';

// const Sidebar = ({ userRole }) => {
//   return (
//     <div className="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
//       <div className="flex items-center justify-center h-16 bg-gray-900 shadow-md">
//         <h1 className="text-2xl font-bold">AppName</h1>
//       </div>
//       <nav className="flex-1 mt-6">
//         <ul>
//           {userRole === 'admin' && (
//             <>
//             <li>
//             <Link
//               to="/admin/dashboard"
//               className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//             >
//               <FaHome className="mr-3 text-lg" />
//               Dashboard
//             </Link>
//           </li>

//               <li>
//                 <Link
//                   to="/admin/user-management"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaUser className="mr-3 text-lg" />
//                   Users
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/admin/loan-management"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaTasks className="mr-3 text-lg" />
//                   Loan Management
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/admin/report"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaChartBar className="mr-3 text-lg" />
//                   Reports
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/admin/platform-settings"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaChartBar className="mr-3 text-lg" />
//                   Settings
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/admin/support-management"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaChartBar className="mr-3 text-lg" />
//                   Support
//                 </Link>
//               </li>
//             </>
//           )}
//           {userRole === 'borrower' && (
//             <>
//               <li>
//                 <Link
//                   to="/borrower/dashboard"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaEnvelope className="mr-3 text-lg" />
//                   Dashboard
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="/borrower/loan-request-form"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaEnvelope className="mr-3 text-lg" />
//                   Loan Request
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="/borrower/profile"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaEnvelope className="mr-3 text-lg" />
//                   Profile
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="/borrower/notifications"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaEnvelope className="mr-3 text-lg" />
//                   Notifications
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="/borrower/rgister-user"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaEnvelope className="mr-3 text-lg" />
//                   Register
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="/borrower/repayment"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaEnvelope className="mr-3 text-lg" />
//                   Repayments
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="/borrower/user-management"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaEnvelope className="mr-3 text-lg" />
//                   User Management
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="/borrower/loan-list"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaDollarSign className="mr-3 text-lg" />
//                   My Loans
//                 </Link>
//               </li>
//             </>
//           )}
//           {userRole === 'lender' && (
//             <>
//               <li>
//                 <Link
//                   to="/lender/dashboard"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaDollarSign className="mr-3 text-lg" />
//                   Dashboard
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/lender/investing-loan"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaDollarSign className="mr-3 text-lg" />
//                   My Investments
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/lender/notifications"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaDollarSign className="mr-3 text-lg" />
//                   Notifications
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/lender/profile"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaDollarSign className="mr-3 text-lg" />
//                   Profile
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/lender/loan-list"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaDollarSign className="mr-3 text-lg" />
//                   Loan List
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/investments"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaDollarSign className="mr-3 text-lg" />
//                   My Investments
//                 </Link>
//               </li>
//               <li>

//               <Link
//                   to="/lender/repayment"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaDollarSign className="mr-3 text-lg" />
//                   Repayments
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="/lender/support"
//                   className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <FaEnvelope className="mr-3 text-lg" />
//                   Support Requests
//                 </Link>
//               </li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
