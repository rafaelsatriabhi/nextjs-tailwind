import Layout from "../../components/Layout/Layout";
import Link from "next/link";

const checkout = () => {
	return (
		<Layout>
			<div className="flex flex-col w-auto md:flex-row md:px-5 py-10">
				<div className="flex flex-col md:w-3/4 p-3 md:px-36">
					<h1 className="text-lg">Shopping Cart</h1>
					<div className="border-t" />
					<div className="hidden md:flex flex-row justify-between">
						<div>Photo</div>
						<div>Product</div>
						<div>Price</div>
						<div>Action</div>
					</div>
					<div className="flex flex-row items-center justify-evenly md:justify-between mt-4">
						<div className="flex flex-row items-center w-full">
							<img className="w-24 h-24 object-contain rounded-3xl mr-3" src="/assets/images/products/white-blue.jpg" />
							<div className="flex flex-col md:flex-row md:justify-evenly w-full">
								<div>
									<div className="font-extrabold">Saman Kakka</div>
									<div className="text-xs">Office Room</div>
								</div>
								<div className="font-extrabold">IDR 28.000.000</div>
							</div>
						</div>
						<div className="font-extrabold text-red-600">X</div>
					</div>
					<div className="flex flex-row items-center justify-evenly md:justify-between mt-4">
						<div className="flex flex-row items-center w-full">
							<img className="w-24 h-24 object-contain rounded-3xl mr-3" src="/assets/images/products/white-blue.jpg" />
							<div className="flex flex-col md:flex-row md:justify-evenly w-full">
								<div>
									<div className="font-extrabold">Saman Kakka</div>
									<div className="text-xs">Office Room</div>
								</div>
								<div className="font-extrabold">IDR 28.000.000</div>
							</div>
						</div>
						<div className="font-extrabold text-red-600">X</div>
					</div>
					<div className="flex flex-row items-center justify-evenly md:justify-between mt-4">
						<div className="flex flex-row items-center w-full">
							<img className="w-24 h-24 object-contain rounded-3xl mr-3" src="/assets/images/products/white-blue.jpg" />
							<div className="flex flex-col md:flex-row md:justify-evenly w-full">
								<div>
									<div className="font-extrabold">Saman Kakka</div>
									<div className="text-xs">Office Room</div>
								</div>
								<div className="font-extrabold">IDR 28.000.000</div>
							</div>
						</div>
						<div className="font-extrabold text-red-600">X</div>
					</div>
				</div>
				<div className="flex md:w-auto flex-col bg-gray-100 px-4 rounded-xl ml-2">
					<div className="text-xl my-4">Shipping Details</div>
					<form className="flex flex-col">
						<div className="flex flex-col my-2">
							<label className="mb-1 text-sm text-gray-600" htmlFor="name">Complete Name</label>
							<input className="rounded-lg py-2 px-4 text-sm" name="name" type="text" placeholder="Full Name" />
						</div>
						<div className="flex flex-col my-2">
							<label className="mb-1 text-sm text-gray-600" htmlFor="email">Email</label>
							<input className="rounded-lg py-2 px-4 text-sm"name="email"  type="text" placeholder="youremail@gmail.com" />
						</div>
						<div className="flex flex-col my-2">
							<label className="mb-1 text-sm text-gray-600" htmlFor="address">Address</label>
							<input className="rounded-lg py-2 px-4 text-sm" name="address"  type="text" placeholder="Your adress" />
						</div>
						<div className="flex flex-col my-2">
							<label className="mb-1 text-sm text-gray-600" htmlFor="phone-number">Phone Number</label>
							<input className="rounded-lg py-2 px-4 text-sm" name="phone-number"  type="text" placeholder="Phone Number" />
						</div>
					</form>
					<div className="">
						<div>Choose Courier</div>
						<div className="grid grid-cols-2 grid-rows-1 gap-x-4 justify-evenly">
							<div className="px-1 py-1 h-20 w-auto flex justify-center bg-white rounded-xl border border-gray-200">
								<img className="object-none md:object-contain" src="/assets/design/courier-logo/fedex.jpg" />
							</div>
							<div className="px-1 py-1 h-20 w-auto flex justify-center bg-white rounded-xl border border-gray-200">
								<img className="object-none md:object-contain" src="/assets/design/courier-logo/dhl.jpg" />
							</div>
						</div>
					</div>
					<div className="">
						<div>Choose Payment</div>
						<div className="grid grid-cols-2 grid-rows-2 gap-y-2 gap-x-4">
							<div className="px-1 py-1 h-20 w-auto flex justify-center bg-white rounded-xl border border-gray-200">
								<img className="object-none md:object-contain" src="/assets/design/payment-logo/midtrans.jpg" />
							</div>
							<div className="px-1 py-1 h-20 w-auto flex justify-center bg-white rounded-xl border border-gray-200">
								<img className="object-none md:object-contain" src="/assets/design/payment-logo/mastercard.jpg" />
							</div>
							<div className="px-1 py-1 h-20 w-auto flex justify-center bg-white rounded-xl border border-gray-200">
								<img className="object-none md:object-contain" src="/assets/design/payment-logo/bitcoin.jpg" />
							</div>
							<div className="px-1 py-1 h-20 w-auto flex justify-center bg-white rounded-xl border border-gray-200">
								<img className="object-none md:object-contain" src="/assets/design/payment-logo/american-express.jpg" />
							</div>
						</div>
					</div>
					<Link href="/">
						<button className="bg-pink-200 rounded-full py-1 my-4 mx-1">Checkout Now</button>
					</Link>
				</div>
			</div>
		</Layout>
	)
}

export default checkout
