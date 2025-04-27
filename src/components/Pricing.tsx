import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, CalendarIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    price: { monthly: '$199', annually: '$1,990' },
    description: 'Perfect for small businesses getting started with automation',
    features: [
      'Choose from 3 powerful bundles:',
      'Blitzlead Hunter',
      'Blitzoutreach Accelerator',
      'Blitzappointment Closer',
      'Blitzclient Onboarding Flow',
      'Blitzclient Engagement',
      'Support & FAQ AI Bot',
    ],
    mostPopular: false,
    paymentLink: 'https://buy.stripe.com/bIYbJOaLHeaI8BG9AJ',
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    price: { monthly: '$299', annually: '$2,990' },
    description: 'For growing businesses that need more automation power',
    features: [
      'Everything in Starter, plus:',
      'Lead to Client Combo Bundle',
      'Full Client Automation Combo',
      'Advanced Analytics Dashboard',
      'Priority Support',
      'Team Collaboration Tools',
    ],
    mostPopular: true,
    paymentLink: 'https://buy.stripe.com/fZe7ty1b7giQcRWeV4',
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    price: { monthly: 'Custom', annually: 'Custom' },
    description: 'For large organizations with complex automation needs',
    features: [
      'Custom AI Solutions',
      'Tailored Workflows',
      'Full Automation Suite',
      'Enterprise Analytics',
      '24/7 Support',
      'Dedicated Account Manager',
      'Automation Audit + Quick Deploy',
    ],
    mostPopular: false,
    paymentLink: 'https://calendly.com/aurassance/blitzautomation?month=2025-04',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  const [hoursSaved, setHoursSaved] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(30);

  const calculateROI = () => {
    const monthlyHours = hoursSaved * 4; // Assuming 4 weeks per month
    const monthlySavings = monthlyHours * hourlyRate;
    const monthlyCost = billingCycle === 'monthly' ? 299 : 2990 / 12;
    return monthlySavings - monthlyCost;
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for&nbsp;you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Start with a free trial and upgrade when you're ready. All plans include a 14-day money-back guarantee.
        </p>

        {/* Calendar Button */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://calendly.com/aurassance/blitzautomation?month=2025-04"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <CalendarIcon className="h-5 w-5" aria-hidden="true" />
            Schedule a Demo
          </a>
        </div>

        {/* ROI Calculator */}
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">ROI Calculator</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              See how much you could save with our automation solutions.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="hours" className="block text-sm font-medium leading-6 text-gray-900">
                  Hours Saved Per Week
                </label>
                <input
                  type="range"
                  id="hours"
                  min="5"
                  max="40"
                  value={hoursSaved}
                  onChange={(e) => setHoursSaved(Number(e.target.value))}
                  className="mt-2 w-full"
                />
                <div className="mt-2 text-sm text-gray-600">{hoursSaved} hours</div>
              </div>
              <div>
                <label htmlFor="rate" className="block text-sm font-medium leading-6 text-gray-900">
                  Average Hourly Rate ($)
                </label>
                <input
                  type="range"
                  id="rate"
                  min="10"
                  max="100"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="mt-2 w-full"
                />
                <div className="mt-2 text-sm text-gray-600">${hourlyRate}/hour</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="text-lg font-semibold text-gray-900">Monthly Savings</div>
              <div className="mt-2 text-3xl font-bold text-primary">
                ${calculateROI().toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="mt-16 flex justify-center">
          <div className="relative rounded-full p-0.5">
            <button
              type="button"
              className="relative rounded-full px-3 py-2 text-sm font-semibold leading-6 text-gray-900"
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly billing
            </button>
            <button
              type="button"
              className="relative rounded-full px-3 py-2 text-sm font-semibold leading-6 text-gray-900"
              onClick={() => setBillingCycle('annually')}
            >
              Annual billing
            </button>
            <span
              className={classNames(
                'absolute inset-0 rounded-full bg-primary transition-transform duration-200 ease-in-out',
                billingCycle === 'monthly' ? 'translate-x-0' : 'translate-x-full'
              )}
            />
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={classNames(
                tier.mostPopular ? 'ring-2 ring-primary' : 'ring-1 ring-gray-200',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-primary' : 'text-gray-900',
                    'text-lg font-semibold leading-8'
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.price[billingCycle]}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  {billingCycle === 'monthly' ? '/month' : '/year'}
                </span>
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <a
                  href={tier.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {tier.name === 'Enterprise' ? 'Get Custom Price' : 'Get started today'}
                </a>
              </div>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 