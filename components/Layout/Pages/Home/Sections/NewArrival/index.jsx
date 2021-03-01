import Link from 'next/link'

const NewArrival = () => {
    return (
			<section className="h-auto py-8">
					<div className="flex flex-col items-center mb-5">
						<h1>Just Arrived</h1>
						<h1>This Summer For You</h1>
					</div>
					<div className="flex flex-row overflow-auto whitespace-nowrap lg:justify-between">
						<div className="flex-shrink-0 flex-shrink-0 inline-block h-auto ml-2">
							<img className="rounded-3xl h-auto" src="/assets/images/cangkir-mauttie.jpg" />
							<p className="font-semibold">Cangkir Mauttie</p>
							<p>IDR 89.300.000</p>
						</div>
						<Link href="/office-room/details">
							<div role="button" className="flex-shrink-0 inline-block h-auto mx-4">
								<img className="rounded-3xl h-auto" src="/assets/images/bankyu-minimax.jpg" />
								<p className="font-semibold">Bankyu Minimax</p>
								<p>IDR 67.100.000</p>
							</div>
						</Link>
						<div className="flex-shrink-0 inline-block h-auto mx-4">
							<img className="rounded-3xl h-auto" src="/assets/images/buku-sidu-edition.jpg" />
							<p className="font-semibold">Buku Sidu Edition</p>
							<p>IDR 17.500.000</p>
						</div>
						<div className="flex-shrink-0 inline-block h-auto mx-4">
							<img className="rounded-3xl h-auto" src="/assets/images/watch-note-x.jpg" />
							<p className="font-semibold">Watch Note X</p>
							<p>IDR 52.170.000</p>
						</div>
						<div className="flex-shrink-0 inline-block h-auto mx-4">
							<img className="rounded-3xl h-auto" src="/assets/images/racking-plants.jpg" />
							<p className="font-semibold">Racking Plants</p>
							<p>IDR 23.100.000</p>
						</div>
					</div>
				</section>
    )
}

export default NewArrival
