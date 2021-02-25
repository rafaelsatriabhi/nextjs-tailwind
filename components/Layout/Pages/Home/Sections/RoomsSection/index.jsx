const RoomsSection = () => {
    return (
		<section className="bg-gray-100 z-20 h-auto p-8">
				<p className="text-2xl md:text-3xl">
					Browse the room
				</p>
				<p className="text-2xl md:text-3xl">
					That we designed for you
				</p>
				<div className="grid grid-cols-1 grid-rows-4 md:grid-cols-8 md:grid-rows-2 gap-8 mt-8">
					<div className="relative md:col-span-3 flex justify-end">
						<div className="absolute p-8 flex flex-col h-full items-start justify-center">
							<h1 className="text-xl md:text-2xl">Living Room</h1>
							<p className="text-xs md:text-lg">1.100 items</p>
						</div>
						<img src="/assets/images/living-room-mobile.jpg" className="object-cover h-full w-full md:h-full rounded-3xl md:rounded-xl" />
					</div>
					<div className="relative md:col-span-3 flex justify-end">
						<div className="absolute pr-4 flex flex-col h-full items-start justify-center">
							<h1 className="text-xl md:text-2xl">Decoration</h1>
							<p className="text-xs md:text-lg">1.200 items</p>
						</div>
						<img src="/assets/images/decoration-mobile.jpg" className="md:hidden object-cover h-full w-full md:h-full rounded-3xl md:rounded-xl" />
						<img src="/assets/images/decoration.jpg" className="hidden md:flex object-cover h-full w-full md:h-full rounded-3xl md:rounded-xl" />
					</div>
					<div className="relative md:col-span-3 flex justify-end">
						<div className="absolute pr-10 flex flex-col h-full items-start justify-center">
							<h1 className="text-xl md:text-2xl">Bed Room</h1>
							<p className="text-xs md:text-lg">1.808 items</p>
						</div>
						<img src="/assets/images/bed-room-mobile.jpg" className=" md:hidden object-cover h-full w-full md:h-full rounded-3xl md:rounded-xl" />
						<img src="/assets/images/bed-room.jpg" className="hidden md:flex object-cover h-full w-full md:h-full rounded-3xl md:rounded-xl" />
					</div>
					<div className="relative md:col-span-3 flex justify-end">
						<div className="absolute p-8 flex flex-col h-full items-start justify-center">
							<h1 className="text-xl md:text-2xl">Children Room</h1>
							<p className="text-xs md:text-lg">1.808 items</p>
						</div>
						<img src="/assets/images/children-room-mobile.jpg" className="object-cover h-full w-full md:h-full rounded-3xl md:rounded-xl" />
					</div>
				</div>
			</section>
    )
}

export default RoomsSection
