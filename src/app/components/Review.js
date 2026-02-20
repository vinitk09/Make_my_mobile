'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 5,
    review: 'Amazing service! I bought my new iPhone 15 Pro from MakeMyMobile and the experience was seamless. Great prices and excellent customer support.',
    avatar: 'PS',
    location: 'Mumbai, India',
    date: 'Feb 2026'
  },
  {
    id: 2,
    name: 'Rahul Verma',
    rating: 5,
    review: 'Best place to buy smartphones! Got an incredible deal on Samsung Galaxy S24. The staff was very helpful and knowledgeable. Highly recommended!',
    avatar: 'RV',
    location: 'Delhi, India',
    date: 'Feb 2026'
  },
  {
    id: 3,
    name: 'Ananya Patel',
    rating: 4,
    review: 'Great collection of phones at competitive prices. The delivery was fast and the phone was exactly as described. Very satisfied with my purchase.',
    avatar: 'AP',
    location: 'Bangalore, India',
    date: 'Jan 2026'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    rating: 5,
    review: 'Exceptional quality and service! Upgraded to the latest Vivo X90 Pro and couldn\'t be happier. The team made the entire process smooth and hassle-free.',
    avatar: 'VS',
    location: 'Pune, India',
    date: 'Jan 2026'
  },
  {
    id: 5,
    name: 'Sneha Reddy',
    rating: 5,
    review: 'Outstanding experience from start to finish! The website is user-friendly and the checkout process was quick. Received my phone in perfect condition.',
    avatar: 'SR',
    location: 'Hyderabad, India',
    date: 'Feb 2026'
  },
  {
    id: 6,
    name: 'Arjun Mehta',
    rating: 4,
    review: 'Very impressed with the quality and authenticity of products. Great deals and offers. Customer service is responsive and helpful. Will buy again!',
    avatar: 'AM',
    location: 'Ahmedabad, India',
    date: 'Jan 2026'
  }
];

export default function Review() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their experience with MakeMyMobile.
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-700 font-semibold">4.8 out of 5</span>
            <span className="text-gray-500">• Based on 1000+ reviews</span>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="py-5 pb-12 [&_.swiper-button-next]:!bg-white [&_.swiper-button-prev]:!bg-white [&_.swiper-button-next]:!text-blue-600 [&_.swiper-button-prev]:!text-blue-600 [&_.swiper-button-next]:!w-10 [&_.swiper-button-prev]:!w-10 [&_.swiper-button-next]:!h-10 [&_.swiper-button-prev]:!h-10 [&_.swiper-button-next]:!rounded-full [&_.swiper-button-prev]:!rounded-full [&_.swiper-button-next]:shadow-lg [&_.swiper-button-prev]:shadow-lg [&_.swiper-button-next::after]:!text-xl [&_.swiper-button-prev::after]:!text-xl [&_.swiper-pagination-bullet]:!bg-blue-600 [&_.swiper-pagination-bullet]:!opacity-50 [&_.swiper-pagination-bullet-active]:!opacity-100"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="px-2 h-auto flex">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 w-full transform hover:-translate-y-2">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <svg
                    className="w-10 h-10 text-blue-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03s-.279.085-.69.325c-.11.057-.251.13-.456.221-.197.09-.422.215-.675.368-.25.15-.529.318-.774.5-.245.18-.472.368-.672.575-.193.207-.399.411-.553.618-.133.197-.26.396-.356.59-.09.198-.17.379-.226.567-.054.188-.085.368-.107.543-.032.175-.043.349-.043.515 0 .557.21 1.104.577 1.473.367.369.864.577 1.397.577.536 0 1.033-.208 1.4-.577.366-.369.576-.916.576-1.473 0-.557-.21-1.104-.576-1.473-.368-.369-.864-.577-1.4-.577zm7 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.113-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L16.758 4.03s-.279.085-.69.325c-.11.057-.251.13-.456.221-.197.09-.422.215-.675.368-.25.15-.529.318-.774.5-.245.18-.472.368-.672.575-.193.207-.399.411-.553.618-.133.197-.26.396-.356.59-.09.198-.17.379-.226.567-.054.188-.085.368-.107.543-.032.175-.043.349-.043.515 0 .557.21 1.104.577 1.473.367.369.864.577 1.397.577.536 0 1.033-.208 1.4-.577.366-.369.576-.916.576-1.473 0-.557-.21-1.104-.576-1.473-.368-.369-.864-.577-1.4-.577z" />
                  </svg>
                  {/* Star Rating */}
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300 fill-current'
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-base leading-relaxed mb-6 italic">
                  "{review.review}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center pt-6 border-t border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold text-lg">
                      {review.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {review.location} • {review.date}
                    </p>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="mt-4 flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-green-600 font-medium">
                    Verified Purchase
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.8/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
