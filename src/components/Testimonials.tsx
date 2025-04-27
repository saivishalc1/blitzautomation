import { StarIcon } from '@heroicons/react/20/solid';

const testimonials = [
  {
    content: "BlitzAutomation has transformed how we handle our customer inquiries. The automation has reduced our response time by 80% and increased customer satisfaction significantly.",
    rating: 5,
  },
  {
    content: "The appointment scheduling feature alone has saved us countless hours each week. It's like having an extra team member working 24/7.",
    rating: 5,
  },
  {
    content: "We've seen a 40% increase in qualified leads since implementing BlitzAutomation. The ROI has been incredible.",
    rating: 5,
  },
  {
    content: "The missed-call text back feature has been a game-changer for our business. We're no longer losing potential clients due to missed calls.",
    rating: 5,
  },
  {
    content: "Setting up was incredibly easy, and the support team was there every step of the way. Highly recommend for any service-based business.",
    rating: 5,
  },
  {
    content: "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions that have improved our bottom line.",
    rating: 5,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by businesses worldwide
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial, testimonialIdx) => (
              <div key={testimonialIdx} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`"${testimonial.content}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="flex gap-x-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={classNames(
                            i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 