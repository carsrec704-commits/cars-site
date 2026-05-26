export default function CarolinaAutoRecyclingWebsite() {
  const phone = '7049936854';
  const formattedPhone = '(704)993-6854';
  const email = 'carsrec704@gmail.com';
  const companyName = 'Carolina Auto Recycling Services LLC';
  const websiteUrl = 'https://www.carolinaautorecyclingservices.com';

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
<nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-zinc-800">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <a
      href="#home"
      className="text-orange-500 font-black text-2xl tracking-wide"
    >
      C.A.R.S
    </a>

    <div className="flex items-center gap-8 text-sm font-semibold">
      <a href="#home" className="hover:text-orange-500">
        Home
      </a>

      <a href="#services" className="hover:text-orange-500">
        Services
      </a>

      <a href="#areas" className="hover:text-orange-500">
        Areas
      </a>

      <a href="#quote" className="hover:text-orange-500">
        Quote
      </a>
    </div>

  </div>
</nav>
      {/* HERO SECTION */}
      <section id="home" className="relative px-6 pt-24 pb-12 md:px-16 lg:px-24 bg-gradient-to-br from-black via-zinc-900 to-orange-950">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              <span className="text-sm tracking-wide uppercase">
                Charlotte Area Junk Car Buyers
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Sell Your
              <span className="block text-orange-500">
                Junk Car in Charlotte
              </span>
              <span className="block">
               for Cash Today
              </span>
            </h1>
           <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-xl mb-4">
            
Free Towing • Same-Day Pickup • Any Condition Accepted
  C.A.R.S - {companyName} buys junk cars, wrecked vehicles,
  unwanted cars, scrap vehicles, and used cars in any condition.
</p>

<p className="text-zinc-400 text-base md:text-lg mb-8 max-w-xl">
  Serving Charlotte, Mint Hill, Matthews, Monroe, Indian Trail,
  Concord, Kannapolis, Gastonia, Huntersville, Pineville,
  Harrisburg, and surrounding North Carolina communities.
</p>
<p className="text-orange-400 text-xl font-bold mb-8">
  Call or Text: 704-993-6854
</p>
            <div className="flex flex-wrap gap-4 mb-8">

              <a
                href={`tel:${phone}`}
                className="bg-orange-500 hover:bg-orange-400 transition-all duration-300 text-black font-bold px-8 py-4 rounded-2xl shadow-2xl shadow-orange-500/30 text-lg"
              >
                Call Now
              </a>

              <a
                href="#quote"
                className="border border-orange-500 hover:bg-orange-500/10 transition-all duration-300 px-8 py-4 rounded-2xl text-lg"
              >
                Get Instant Quote
              </a>

            </div>

            <div className="grid grid-cols-3 gap-4 max-w-lg">

              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl">
                <h3 className="text-3xl font-black text-orange-500">$</h3>
                <p className="text-sm text-zinc-300 mt-2">
                  Top Cash Offers
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl">
                <h3 className="text-3xl font-black text-orange-500">24H</h3>
                <p className="text-sm text-zinc-300 mt-2">
                  Fast Pickup
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl">
                <h3 className="text-3xl font-black text-orange-500">ANY</h3>
                <p className="text-sm text-zinc-300 mt-2">
                  Condition Accepted
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center">

            <div className="bg-zinc-950 border border-orange-500/30 rounded-[2rem] p-8 shadow-[0_0_50px_rgba(249,115,22,0.25)] max-w-lg w-full">

              <div className="flex justify-center mb-6">

                <img
                  src="/logo.png"
                  alt="CARS Logo"
                  className="w-64 h-auto"
                />

              </div>

              <div className="bg-black rounded-3xl border border-zinc-800 p-6 text-center">

                <h2 className="text-2xl font-black mb-3 text-orange-500">
                  WE BUY:
                </h2>

                <div className="grid grid-cols-2 gap-3 text-zinc-300">

                  <div className="bg-zinc-900 rounded-xl p-3">
                    Junk Cars
                  </div>

                  <div className="bg-zinc-900 rounded-xl p-3">
                    Used Cars
                  </div>

                  <div className="bg-zinc-900 rounded-xl p-3">
                    Salvage Cars
                  </div>

                  <div className="bg-zinc-900 rounded-xl p-3">
                    Wrecked Cars
                  </div>

                  <div className="bg-zinc-900 rounded-xl p-3">
                    Scrap Vehicles
                  </div>

                  <div className="bg-zinc-900 rounded-xl p-3">
                    Non-Running Cars
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 md:px-16 lg:px-24 bg-zinc-950">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
  Junk Car Buying Services in Charlotte NC
</h2>

<p className="text-zinc-400 text-center max-w-3xl mx-auto mb-10">
  Carolina Auto Recycling Services LLC buys junk cars, wrecked vehicles,
  salvage vehicles, scrap vehicles, non-running cars, and unwanted cars
  throughout Charlotte and surrounding communities.
</p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-3xl p-6">

              <h3 className="text-2xl font-bold mb-3">
                Junk Cars
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                We buy junk cars in any condition and pay cash on the spot.
              </p>

            </div>

            <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-3xl p-6">

              <h3 className="text-2xl font-bold mb-3">
                Wrecked Cars
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Accident damaged and totaled vehicles accepted.
              </p>

            </div>

            <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-3xl p-6">

              <h3 className="text-2xl font-bold mb-3">
                Non-Runing Cars
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Dead engine, transmission issues, or won't start. 
              </p>

            </div>

            <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-3xl p-6">

              <h3 className="text-2xl font-bold mb-3">
               Salvage Vehicles
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Salvage title and insurance loss vehicles purchased.
              </p>

            </div>

          </div>

        </div>

      </section>
{/* SERVICE AREAS */}
<section id="areas"className="py-16 px-6 md:px-16 lg:px-24 bg-black">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
      Areas We Serve
    </h2>

    <p className="text-zinc-400 text-center mb-10">
      We buy junk cars, wrecked vehicles, scrap vehicles, and unwanted cars throughout the greater Charlotte area.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

      <div className="bg-zinc-900 rounded-xl p-4 text-center">Charlotte</div>
      <div className="bg-zinc-900 rounded-xl p-4 text-center">Mint Hill</div>
      <div className="bg-zinc-900 rounded-xl p-4 text-center">Matthews</div>
      <div className="bg-zinc-900 rounded-xl p-4 text-center">Monroe</div>
      <div className="bg-zinc-900 rounded-xl p-4 text-center">Indian Trail</div>
      <div className="bg-zinc-900 rounded-xl p-4 text-center">Concord</div>
      <div className="bg-zinc-900 rounded-xl p-4 text-center">Kannapolis</div>
      <div className="bg-zinc-900 rounded-xl p-4 text-center">Harrisburg</div>
      <div className="bg-zinc-900 rounded-xl p-4 text-center">Huntersville</div>
      <div className="bg-zinc-900 rounded-xl p-4 text-center">Cornelius</div>
      <div className="bg-zinc-900 rounded-xl p-4 text-center">Gastonia</div>
      <div className="bg-zinc-900 rounded-xl p-4 text-center">Belmont</div>

    </div>

  </div>
</section>
{/* REVIEWS */}

<section className="py-20 px-6 md:px-16 lg:px-24 bg-zinc-950">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
      What Our Customers Say
    </h2>

    <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
      Local vehicle owners trust C.A.R.S for fair offers, fast pickup,
      and same-day payments.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
        <div className="text-orange-500 text-xl mb-3">
          ★★★★★
        </div>

        <p className="text-zinc-300 mb-4">
          Called in the morning and had cash in hand that afternoon.
          Very easy process.
        </p>

        <p className="font-semibold">
          Charlotte, NC
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
        <div className="text-orange-500 text-xl mb-3">
          ★★★★★
        </div>

        <p className="text-zinc-300 mb-4">
          Best offer I received for my wrecked vehicle.
          Free towing and quick payment.
        </p>

        <p className="font-semibold">
          Matthews, NC
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
        <div className="text-orange-500 text-xl mb-3">
          ★★★★★
        </div>

        <p className="text-zinc-300 mb-4">
          They bought my non-running car the same day I called.
          Highly recommended.
        </p>

        <p className="font-semibold">
          Concord, NC
        </p>
      </div>

    </div>
  </div>
</section>
{/* FAQ */}

<section className="py-20 px-6 md:px-16 lg:px-24 bg-black">

  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
      Frequently Asked Questions
    </h2>

    <p className="text-zinc-400 text-center mb-12">
      Answers to common questions about selling junk cars in Charlotte.
    </p>

    <div className="space-y-6">

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-3">
          How much is my junk car worth?
        </h3>

        <p className="text-zinc-400">
          Offers depend on the vehicle's year, make, model,
          condition, and current scrap metal prices.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-3">
          Do you offer free towing?
        </h3>

        <p className="text-zinc-400">
          Yes. We provide free vehicle pickup throughout
          Charlotte and surrounding communities.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-3">
          Do you buy non-running vehicles?
        </h3>

        <p className="text-zinc-400">
          Absolutely. We purchase cars with bad engines,
          transmission problems, collision damage,
          and vehicles that no longer run.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-3">
          Can I sell a vehicle with a salvage title?
        </h3>

        <p className="text-zinc-400">
          Yes. We buy salvage title vehicles,
          insurance loss vehicles,
          and many damaged vehicles.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-3">
          What areas do you serve?
        </h3>

        <p className="text-zinc-400">
          Charlotte, Mint Hill, Matthews, Monroe,
          Indian Trail, Concord, Kannapolis,
          Harrisburg, Huntersville, Gastonia,
          Belmont, Cornelius, and nearby areas.
        </p>
      </div>

    </div>

  </div>

</section>

      {/* CONTACT */}
      <section
        id="quote"
        className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-orange-950 via-black to-black"
      >

        <div className="max-w-5xl mx-auto bg-zinc-950 border border-orange-500/20 rounded-[2.5rem] p-10">

          <div className="text-center mb-10">

            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Get A
              <span className="text-orange-500"> Fast Quote</span>
            </h2>

            <p className="text-zinc-400 text-lg">
              Call now or email us with your vehicle details.
            </p>

          </div>
<h3 className="text-2xl font-bold mb-6 text-orange-500">
  Areas We Buy Junk Cars
</h3>

<p className="text-zinc-300 mb-8">
  Carolina Auto Recycling Services LLC buys junk cars, wrecked
  vehicles, salvage vehicles, non-running cars, and unwanted
  vehicles throughout Charlotte, Mint Hill, Matthews, Monroe,
  Indian Trail, Concord, Kannapolis, Harrisburg, Huntersville,
  Cornelius, Gastonia, Belmont, and surrounding North Carolina
  communities. Free towing is available.
</p>
          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-black rounded-3xl border border-zinc-800 p-8">

              <h3 className="text-2xl font-bold mb-6 text-orange-500">
                Business Information
              </h3>

              <div className="space-y-6">

                <div>
                  <p className="text-zinc-500 text-sm uppercase tracking-wide mb-1">
                    Company
                  </p>

                  <p className="text-xl font-semibold">
                    {companyName}
                  </p>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm uppercase tracking-wide mb-1">
                    Phone
                  </p>

                  <a
                    href={`tel:${phone}`}
                    className="text-xl font-semibold hover:text-orange-500"
                  >
                    {formattedPhone}
                  </a>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm uppercase tracking-wide mb-1">
                    Email
                  </p>

                  <a
                    href={`mailto:${email}`}
                    className="text-xl font-semibold hover:text-orange-500"
                  >
                    {email}
                  </a>
                </div>

              </div>

            </div>

            <div className="bg-black rounded-3xl border border-zinc-800 p-8 flex flex-col justify-center">

              <h3 className="text-3xl font-black mb-4">
                Ready To Sell Your Car?
              </h3>

              <p className="text-zinc-400 mb-8">
                Call us today for a fast cash offer and same-day pickup.
              </p>

              <a
                href={`tel:${phone}`}
                className="bg-orange-500 hover:bg-orange-400 transition-all duration-300 text-black text-center font-black text-xl px-8 py-5 rounded-2xl"
              >
                CALL NOW
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-zinc-900 py-10 px-6 text-center">

        <div className="flex justify-center mb-6">

          <img
            src="/logo.png"
            alt="CARS Logo"
            className="w-28 opacity-90"
          />

        </div>

        <h3 className="text-2xl font-black tracking-[0.25em] mb-3 text-orange-500">
          C.A.R.S
        </h3>

        <p className="text-zinc-500 mb-3">
          {companyName}
        </p>

        <p className="text-zinc-600 text-sm">
          © 2026 {companyName}
        </p>
<a
  href={`tel:${phone}`}
 className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-400 text-black text-2xl font-bold w-16 h-16 rounded-full shadow-2xl flex items-center justify-center"
>
  📞 
</a>
      </footer>

    </div>
  );
}``