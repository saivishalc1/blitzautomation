import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/20/solid';

const services = [
  {
    name: 'Sales & Lead Acceleration',
    description: 'Transform your lead generation and sales process with our powerful automation bundles.',
    bundles: [
      {
        name: 'Blitzlead Hunter',
        description: 'Perfect for businesses struggling to generate quality leads',
        features: [
          'Apify/SerpAPI Scraping',
          'Enrichment with Hunter.io or Clearbit',
          'CRM Integration',
          'Lead Scoring using GPT',
          'ICP Tagging',
        ],
      },
      {
        name: 'Blitzoutreach Accelerator',
        description: 'Automate your outreach and follow-up process',
        features: [
          'GPT-generated personalized emails',
          'Email sending automation',
          'Smart follow-up sequences',
          'Response tracking',
          'SMS/LinkedIn fallback',
        ],
      },
      {
        name: 'Blitzappointment Closer',
        description: 'Convert more leads into appointments',
        features: [
          'Missed call to SMS automation',
          'CRM status updates',
          'Automated reminders',
          'No-show rescheduling',
          'Post-call summaries',
        ],
      },
    ],
  },
  {
    name: 'Ops & Client Experience',
    description: 'Streamline your operations and enhance client experience with our automation solutions.',
    bundles: [
      {
        name: 'Blitzclient Onboarding Flow',
        description: 'Automate your client onboarding process',
        features: [
          'Intake form automation',
          'CRM integration',
          'Welcome email sequence',
          'Contract & invoice automation',
          'Project/task creation',
        ],
      },
      {
        name: 'Blitzclient Engagement',
        description: 'Keep clients informed and connected',
        features: [
          'Weekly report automation',
          'Feedback collection',
          'Status updates',
          'Reactivation sequences',
        ],
      },
      {
        name: 'Support & FAQ AI Bot',
        description: 'Automate customer support and FAQs',
        features: [
          'Website chatbot',
          'Ticket logging',
          'Human escalation',
          'Weekly insights',
        ],
      },
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Automation Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our automation solutions help you streamline routine tasks, improve customer service, and boost your business efficiency.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <dt className="text-xl font-semibold leading-7 text-gray-900">{service.name}</dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">{service.description}</dd>
                <div className="mt-8 space-y-8">
                  {service.bundles.map((bundle) => (
                    <div key={bundle.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <CheckIcon className="absolute left-1 top-1 h-5 w-5 text-primary" aria-hidden="true" />
                        {bundle.name}
                      </dt>
                      <dd className="mt-2 text-sm text-gray-600">{bundle.description}</dd>
                      <ul className="mt-4 space-y-2">
                        {bundle.features.map((feature) => (
                          <li key={feature} className="text-sm text-gray-600">
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 