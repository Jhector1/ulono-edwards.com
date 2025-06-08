// src/components/ShopSection.tsx
import React from "react";
import Link from "next/link";

interface Book {
  id: number;
  title: string;
  author: string;
  price: string;
  image: string;
}

interface VideoPlan {
  id: number;
  name: string;
  description: string;
  pricePerMonth: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "Champion's Mindset",
    author: "Ernest Crim III",
    price: "$19.99",
    image: "/images/book1.jpg",
  },
  {
    id: 2,
    title: "Black History Unveiled",
    author: "Ernest Crim III",
    price: "$24.99",
    image: "/images/book2.jpg",
  },
  {
    id: 3,
    title: "Equity in Action",
    author: "Ernest Crim III",
    price: "$17.99",
    image: "/images/book3.jpg",
  },
];

const videoPlans: VideoPlan[] = [
  {
    id: 1,
    name: "Monthly Pass",
    description: "Access all video content with monthly billing.",
    pricePerMonth: "$14.99/mo",
  },
  {
    id: 2,
    name: "Quarterly Pass",
    description: "Best value: 3 months of unlimited access.",
    pricePerMonth: "$39.99/3 mo",
  },
  {
    id: 3,
    name: "Annual Pass",
    description: "Full year subscription at a discounted rate.",
    pricePerMonth: "$149.99/yr",
  },
];

const ShopSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800">Shop</h2>
          <p className="mt-4 text-gray-600">
            Browse our collection of books or choose a video subscription plan.
          </p>
        </div>

        {/* Books Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Books</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="h-56 w-full bg-gray-200">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between h-60">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      {book.title}
                    </h4>
                    <p className="mt-1 text-gray-600">{book.author}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-medium text-indigo-600">
                      {book.price}
                    </span>
                    <Link href={`/shop/books/${book.id}`}>
                      <span className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                        Buy Now
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Subscription Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Video Subscriptions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition"
              >
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    {plan.name}
                  </h4>
                  <p className="mt-2 text-gray-600">{plan.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-lg font-medium text-indigo-600">
                    {plan.pricePerMonth}
                  </span>
                  <Link href={`/shop/videos/${plan.id}`}>
                    <span className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                      Subscribe
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
