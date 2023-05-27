import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAmazon from '@/images/logos/amazon.svg'
import logoGoogleDocs from '@/images/logos/google-docs.svg'
import logoGoogleSheets from '@/images/logos/google-sheets.svg'
import logoGoogleSlides from '@/images/logos/google-slides.svg'
import logoGoogleDrive from '@/images/logos/google-drive.svg'

const resources = [
  {
    name: 'Books with Empathy / Diversity',
    description:
      'A list of empathy and diversity books schools have been adding to their libraries',
    link: { href: 'https://www.amazon.com/hz/wishlist/ls/O43AJTKMH3LY?ref_=wl_share', label: 'Amazon' },
    logo: logoAmazon,
  },
  {
    name: 'Mini-STEM Challenges',
    description:
      'A collection of mini-STEM challenges. Feel free to email me to add yours!',
    link: { href: 'https://docs.google.com/spreadsheets/d/1KI7OfdUtWhYYy2nAlRWbqdjFHpx9l3vHoeI4oubBV7s/edit?usp=sharing', label: 'Google Sheets' },
    logo: logoGoogleSheets,
  },
  {
    name: 'STEM Engineering Challenge Template (English)',
    description:
      'A template to guide students through the TEA Engineering Design Process. Resources are in English and Spanish.',
    link: { href: 'https://docs.google.com/presentation/d/1YzVxW5bPsDpA47l3DQi5O0mPzTqnMvPxZI5gPXx0jQs/edit?usp=sharing', label: 'Google Slides' },
    logo: logoGoogleSlides,
  },
  {
    name: 'STEM Engineering Challenge Template (Spanish)',
    description:
      'A template to guide students through the TEA Engineering Design Process. Resources are in English and Spanish.',
    link: { href: 'https://docs.google.com/presentation/d/1hQN7b-1ZaBTEH9C3JnSrruXGcFh5cOENnol25heGMRU/edit?usp=sharing', label: 'Google Slides' },
    logo: logoGoogleSlides,
  },
  {
    name: 'TEA STEM Instructional Planning Guide',
    description:
      'A planner for your next STEM challenge. Feel free to create copies of this document and edit it as needed!',
    link: { href: 'https://docs.google.com/document/d/1d8uIqTQKLBzYDnpkPtkfDOYyIIpiQV2__B760OeM9kw/edit?usp=sharing', label: 'Google Docs' },
    logo: logoGoogleDocs,
  },
  {
    name: 'Jenga Game Labels',
    description:
      'These labels can be printed for easy application with minimal cutting. The game works like regular Jenga, but students earn points by correctly identifying label contents based on assigned colors.',
    link: { href: 'https://drive.google.com/file/d/1I7hAIJgTjpxJ3e3S9wZ8vYqkVb3yBARG/view?usp=sharing', label: 'Google Drive' },
    logo: logoGoogleDrive,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Resources() {
  return (
    <>
      <Head>
        <title>Resources - Marina Sprague</title>
        <meta
          name="description"
          content="Classroom Resources"
        />
      </Head>
      <SimpleLayout
        title="Classroom Resources"
        intro="Content I've created for use in classrooms. Feel free to use and adapt as needed!"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {resources.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 bg-white p-1"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} target="_blank">{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
