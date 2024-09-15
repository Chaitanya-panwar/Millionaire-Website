import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";
import { Sidebar } from "../components/Sidebar";
import { IndianRupee } from "lucide-react";

const DashboardPage = () => {
	const { user, logout } = useAuthStore();

	const handleLogout = () => {
		logout();
	};
	return (
		<>
			<Sidebar />
			<div className="flex flex-row justify-end mt-10 mx-5">
				<div aria-label="add to slack" href="#" class="p-4    border  dark:bg-gray-800  bg-black rounded-full duration-300 border-yellow-600 shadow-xl shadow-yellow-600/30 dark:border-yellow-200">
					<div class="flex justify-evenly align-middle space-x-4">
						<span className="text-xl font-bold text-yellow-500">Total Balance:</span>
						<div className="flex justify-evenly align-middle">
							<IndianRupee className="size-6 text-yellow-500" />
							<span class="text-xl font-bold text-yellow-500">10,000</span>
						</div>

					</div>
				</div>

			</div>

			<div class="md:columns-2 lg:columns-4  gap-8 space-y-8 py-5 mt-10 mx-3">
				<div aria-label="add to slack" href="#" class="p-4 py-7 flex justify-evenly align-middle space-x-4 border  dark:bg-gray-800 rounded-2xl duration-300 border-yellow-600 shadow-xl shadow-yellow-600/30 dark:border-yellow-200">

					<span className="text-xl font-bold ">Daily Fixed Income:</span>
					<div className="flex justify-evenly align-middle">
						<IndianRupee className="size-6 " />
						<span class="text-xl font-bold ">10,000</span>
					</div>

				</div>
				<div aria-label="add to slack" href="#" class="p-4 py-7 flex justify-evenly align-middle space-x-4 border  dark:bg-gray-800 rounded-2xl duration-300 border-yellow-600 shadow-xl shadow-yellow-600/30 dark:border-yellow-200">

					<span className="text-xl font-bold">Referral Income:</span>
					<div className="flex justify-evenly align-middle">
						<IndianRupee className="size-6" />
						<span class="text-xl font-bold">25</span>
					</div>

				</div>
				<div aria-label="add to slack" href="#" class="p-4 py-7 flex justify-evenly align-middle space-x-4 border  dark:bg-gray-800 rounded-2xl duration-300 border-yellow-600 shadow-xl shadow-yellow-600/30 dark:border-yellow-200">

					<span className="text-xl font-bold">No. Of Members:</span>
					
						<span class="text-xl font-bold">100</span>
					

				</div>
				<div aria-label="add to slack" href="#" class="p-4 py-7 flex justify-evenly align-middle space-x-4 border  dark:bg-gray-800 rounded-2xl duration-300 border-yellow-600 shadow-xl shadow-yellow-600/30 dark:border-yellow-200">

					<span className="text-xl font-bold">Daily Fixed Income:</span>
					<div className="flex justify-evenly align-middle">
						<IndianRupee className="size-6" />
						<span class="text-xl font-bold">100</span>
					</div>

				</div>


			</div>

		</>
	);
};
export default DashboardPage;
