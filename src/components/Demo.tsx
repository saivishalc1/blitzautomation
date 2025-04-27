import { motion } from 'framer-motion';
import { PlayIcon } from '@heroicons/react/20/solid';

const demos = [
  {
    title: 'Blitzlead Hunter',
    description: 'Watch how our AI-powered lead generation system works',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-1',
  },
  {
    title: 'Blitzoutreach Accelerator',
    description: 'See our automated outreach system in action',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-2',
  },
  {
    title: 'Blitzappointment Closer',
    description: 'Experience our appointment setting automation',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-3',
  },
  {
    title: 'Blitzclient Onboarding Flow',
    description: 'Watch our seamless client onboarding process',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-4',
  },
  {
    title: 'Blitzclient Engagement',
    description: 'See how we keep clients engaged and informed',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-5',
  },
  {
    title: 'Support & FAQ AI Bot',
    description: 'Experience our AI-powered customer support',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-6',
  },
];

export default function Demo() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Demo</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See Our Automation in Action
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Watch our powerful automation solutions transform your business processes.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {demos.map((demo) => (
            <motion.article
              key={demo.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start"
            >
              <div className="relative w-full">
                <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gray-100">
                  <iframe
                    src={demo.videoUrl}
                    title={demo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-primary p-4 text-white shadow-lg">
                    <PlayIcon className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2020-03-16" className="text-gray-500">
                    Watch Demo
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={demo.videoUrl} target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0" />
                      {demo.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {demo.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
} 