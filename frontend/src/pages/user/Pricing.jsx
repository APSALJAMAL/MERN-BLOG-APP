import React from 'react';

function Pricing() {
  return (
    <div>
      <section>
        {/* Container */}
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Heading Container */}
          <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
            {/* Heading */}
            <h2 className="text-3xl font-bold md:text-5xl">
              Simple &amp; Affordable Pricing for Jamal's Blog
            </h2>
            {/* Subheading */}
            <p className="mt-4 text-sm text-gray-500 sm:text-base">
              Choose a plan that fits your needs. 30-day money-back guarantee included.
            </p>
          </div>
          {/* Prices */}
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
            {/* Free Plan */}
            <div className="mx-auto w-full max-w-md">
              {/* Price 1 Card */}
              <div className="rounded-md bg-gray-100 p-10">
                <div className="mb-4 w-fit rounded-md bg-black px-4 py-1.5">
                  <p className="text-sm font-bold text-white">Free Plan</p>
                </div>
                <h2 className="mb-5 text-3xl font-bold md:text-5xl lg:mb-8">
                  $0<span className="text-sm font-light">/year</span>
                </h2>
                <p className="text-body mb-5 font-light text-gray-500 lg:mb-8">
                  Perfect for personal blogs with limited features. Get started without any cost.
                </p>
                <a
                  href="#"
                  className="inline-block w-full rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
                >
                  Get started
                </a>
              </div>
              {/* Free Plan Descriptions */}
              <div className="mt-10 space-y-4">
                <div className="flex">
                  <div className="mr-3 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="32"
                      viewBox="0 0 24 8"
                    >
                      <path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z" />
                    </svg>
                  </div>
                  <p className="text-gray-500">
                    <span className="font-bold text-black">Basic Features</span> - Limited to 3 posts per month.
                  </p>
                </div>
                <div className="flex">
                  <div className="mr-3 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="32"
                      viewBox="0 0 24 8"
                    >
                      <path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z" />
                    </svg>
                  </div>
                  <p>
                    <span className="font-bold text-black">Customer Support</span> - Email support only.
                  </p>
                </div>
              </div>
            </div>

            {/* Growth Plan */}
            <div className="mx-auto w-full max-w-md">
              {/* Price 2 Card */}
              <div className="overflow-hidden rounded-md bg-black p-10 text-white sm:w-full sm:flex-initial">
                <div className="mb-4 flex flex-row gap-4 flex-wrap">
                  <div className="rounded-md bg-black px-4 py-1.5">
                    <p className="text-sm font-bold text-white">Growth Plan</p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-md bg-white px-4 py-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 22h-18v-4h18v4zm-2.266-12.906c-3.749 2.293-5.296-2.125-6.734-7.094-1.433 4.951-2.984 9.388-6.734 7.094-1.305-.798-5.266-4.094-5.266-4.094 1.796 3.797 2.75 6.292 3 11h18c.25-4.708 1.203-7.203 3-11 0 0-3.961 3.296-5.266 4.094z" />
                    </svg>
                    <p className="text-sm font-bold text-black sm:text-sm">
                      Popular
                    </p>
                  </div>
                </div>
                <h2 className="mb-5 text-3xl font-bold md:text-5xl lg:mb-8">
                  $149<span className="text-sm font-light">/year</span>
                </h2>
                <p className="text-body mb-5 font-light text-white lg:mb-8">
                  Everything you need to grow your blog with advanced features and priority support.
                </p>
                <a
                  href="#"
                  className="inline-block w-full rounded-md bg-white px-6 py-3 text-center font-semibold text-black"
                >
                  Get started
                </a>
              </div>
              {/* Growth Plan Descriptions */}
              <div className="mt-10 space-y-4">
                <div className="flex flex-row">
                  <div className="mr-3 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="32"
                      viewBox="0 0 24 8"
                    >
                      <path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z" />
                    </svg>
                  </div>
                  <p>
                    <span className="font-bold text-black">Priority Support</span> - Get live chat support.
                  </p>
                </div>
                <div className="flex flex-row">
                  <div className="mr-3 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="32"
                      viewBox="0 0 24 8"
                    >
                      <path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z" />
                    </svg>
                  </div>
                  <p>
                    <span className="font-bold text-black">Custom Domain</span> - Use your own domain name.
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="mx-auto w-full max-w-md">
              {/* Price 3 Card */}
              <div className="overflow-hidden rounded-md bg-gray-100 p-10 text-black sm:w-full sm:flex-initial">
                <h2 className="mb-5 text-3xl font-bold md:text-5xl lg:mb-8">
                  $299<span className="text-sm font-light">/year</span>
                </h2>
                <p className="text-body mb-5 font-light text-black lg:mb-8">
                  The ultimate blog platform with all features unlocked. Perfect for professionals.
                </p>
                <a
                  href="#"
                  className="inline-block w-full rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
