import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      {cta && <Card.Cta>{cta}</Card.Cta>}
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Marina Sprague</title>
        <meta
          name="description"
          content="I speak at conferences and at customized training events for schools and districts."
        />
      </Head>
      <SimpleLayout
        title="Conferences & Training"
        intro="I speak at conferences and at customized training events for schools and districts."
      >
        <div className="space-y-20">
          <SpeakingSection title="Conferences">
            <Appearance
              href="https://youtu.be/uVdHCSmvixs"
              title="Esta Fe para las nuevas generaciones"
              description="Gain teaching strategies, trauma-informed insights, and create impactful learning environments for every child by enhance your classroom practices. We also introduced a to a comprehensive manual created specifically to support teachers in effectively teaching children the gospel, fostering spiritual growth and character development among their students. This manual was created and design in Spanish."
              event="Eternal Love Ministries 2023"
              cta="Watch video"
            />
            <Appearance
              title="Where do I start?"
              description="Are you wanting to integrate STEM in your classroom but don't know how? Join us as we share simple ways to get started from our experience. We will share different ideas, projects and resources that we have used in our classrooms that you can utilize in your classroom tomorrow. We will share how we create STEM challenges, and how to integrate STEM celebrations throughout the school year."
              event="STEM4innovation 2022, 2023"
            />
            <Appearance
              title="Using Depth & Complexity to Teach Engineering"
              description="Are you wanting to integrate STEM in your classroom but don’t know how? Join us as we share simple ways to get started from our experience. We will share different ideas, projects, and resources that we have used in our classrooms that you can utilize in your classroom tomorrow. We will share how we create STEM challenges, and how to integrate STEM celebrations throughout the school year."
              event="STEM4innovation 2023"
            />
            <Appearance
              title="STEM Notebooking made simple"
              description="Learn how to implement Engineering Notebooks with your students emphasizing each stage in the design process using precise communication and detailed drawings. We will discuss guiding students to verbalize and develop drawings that are detailed and specific while they analyze and observe the world around them and document their questions and wonders using their field journals. We will provide strategies you can utilize in your classroom tomorrow. "
              event="CAST 2019, STEM4innovation 2020, 2021"
            />
            <Appearance
              title="Cultural Literacy in STEM"
              description="Learn how to integrate literacy and other content areas into design challenges for cross curricular learning that will benefit all learners! We will also discuss how we tie in real world connections to design challenges to make engineering relevant to even the youngest learners!"
              event="Region 11 Virtual Symposium 2021, STEM4innovation 2022"
            />
            <Appearance
              title="Blended Learning in STEM"
              description="Learn how to adapt Engineering Design Challenges for remote learners with limited resources! We will discuss how we modify our constraints to better meet the needs of virtual learners while providing the same rigor. We will provide examples of how we implemented the challenges while being equitable to remote and in person learners."
              event="STEM4innovation 2021"
            />
            <Appearance
              title="Putting the T in STEM"
              description="Wanting to implement meaningful technology in your classroom and in your design challenges? Join us as we share how we use 1:1 iPads and incorporate technology daily in our Kinder and 1st-grade classes! We will show you how we use tech to promote student’s voices, develop digital menus, use Seesaw to dive deeper, and share our favorite elementary friendly apps and tech tools that can be integrated across all content areas, including engineering!"
              event="STEM4innovation 2020"
            />
            <Appearance
              title="Authentic Technology Integration in Early Elementary"
              description="Wanting to implement more technology in your classroom but are not sure how to do it? Join us for some great ideas that you could use in your classroom tomorrow as we share how we use 1:1 iPads and technology daily in our Kinder and 1st-grade classes! Some of the things we will cover are Seesaw, Google Classroom, using digital menus, and how to meaningfully incorporate technology into all subject areas."
              event="MiniCAST 2019, CAST 2019"
            />
          </SpeakingSection>
          <SpeakingSection title="Training">
            <Appearance
              title="Lewisville ISD"
              description="Tailored versions of the STEM Notebooking Made Simple and Cultural Literacy in STEM conference sessions for Lewisville ISD teachers."
              event="June 2022"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
