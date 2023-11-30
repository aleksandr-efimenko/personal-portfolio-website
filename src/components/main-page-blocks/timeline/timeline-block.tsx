import { Icons } from "@/components/icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image, { type StaticImageData } from "next/image";
import wavesPattern from "~/pattern-waves.svg";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { getTechnologyLogo } from "@/data/tags-logo-matcher";

const timelineElements = [
  {
    title: "Freelance Web Developer",
    subtitle: "Fiverr",
    date: "November 2022 – Present",
    icon: <Icons.work />,

    bulletPoints: [
      `Achieved 100% client satisfaction.`,
      `Developed Blute - a full-stack web application designed to enhance communication between clinic staff
    and healthcare students during their clinical placement training. The application serves as a digital journal for students to document their experiences in real-time and
    output visualization of key indicators on the dashboard.`,
      `Developed a web app designed to empower students with knowledge of prompt engineering using the OpenAI platform.`,
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Redux",
      "Prisma ORM",
      "MongoDB",
      "Git",
      "Tailwind CSS",
      "Framer motion",
      "CSS Modules",
      "SurveyJS",
    ],
  },
  {
    title: "C# Software Engineer",
    subtitle: "Self-employed",
    date: "March 2016 – October 2022 (6 years 8 months)",
    icon: <Icons.work />,
    description: "",
    bulletPoints: [
      "Developed from scratch a system that allows to collect and analyze information about all domain names in the .ru zone (about 5,000,000 domain names)",
      "The system includes an MS SQL database (more than 50 relational tables), a .Net core 3.1 Razor pages web application for managing and monitoring, about 10 docker containers for collecting data independently from external APIs and parsing websites by Selenium web driver.",
      "The web application includes forms for CRUD operations processed by Entity Framework, API interface for connecting with the docker containers and transfer data by JSON, dashboard with main metrics and built-in authentication service.",
    ],
    mainDuties: [],
    technologies: [
      "C#",
      ".Net core",
      "Entity Framework",
      "MS SQL Server",
      "T-SQL",
      "Git",
      "Docker",
      "Selenium",
      "Razor Pages",
      "JavaScript",
      "Chart.js",
      "Bootstrap",
    ],
  },
  {
    title: "IT Consultant",
    subtitle:
      "Self-employed, Joint-Stock Company “Project Development Institute No.1”",
    date: "September 2017 - August 2019 (2 years)",
    icon: <Icons.work />,
    description:
      "Successfully provided advice on information systems issues and modified to customer needs digital document management software for an organization with 100 employees.",
    bulletPoints: [],
    mainDuties: [
      "Information support, provision of consultations on the installation and configuration of digital document management “1C Document Management”",
      "Conducting technical studies at the request of the users on modification and improvement of the system",
      "Testing and implementing information systems business solutions, quality control, stability and system availability and updating the information base",
      "Implementing maintenance procedures to maximize the efficiency of the information system",
    ],
    technologies: [
      "1C Enterprise",
      "1C programming language",
      "MS SQL Server",
      "T-SQL",
    ],
  },
  {
    title: "Lead Engineer",
    subtitle: "Joint-Stock Company “Project Development Institute No.1”",
    date: "May 2015 - August 2017 (2 years 4 months)",
    icon: <Icons.work />,
    description: "",
    mainDuties: [
      "Implemented and modified to customer needs digital document management software for 4 organizations with a number of employees from 20 to 150.",
      "This software reduced the average time for approval of documentation within the organization from 7 to 2 days because of role-based routes, made generating new documents more than 3 times faster because of using pre-installed templates, and made searching for a document instantaneous.",
      "Main duties included “1C Document Management” setup, maintenance and development business solutions using 1C programming language embedded in the “1C Enterprise” platform. Managing, monitoring and maintaining MS SQL Server databases, ensuring database security, stability and system availability. Maintaining databases backup and recovery infrastructure",
    ],
    technologies: [
      "1C Enterprise",
      "1C Document Management",
      "1C programming language",
      "MS SQL Server",
      "T-SQL",
      "VBA",
    ],
  },
  {
    title: "Technical Support Engineer",
    subtitle:
      "FGKU North-West territorial administration of the property relations",
    date: "December 2010 - April 2015 (4 years 5 months)",
    icon: <Icons.work />,
    description: "",
    bulletPoints: [
      "Made a significant contribution to increasing the productivity of the organization by proactive monitoring, optimizing and upgrading hardware, software and related computer equipment",
      "Implemented and customized digital document management system “E1 Evfrat”, which helped the company boost cooperation between all departments and optimized the workload of the staff",
    ],
    mainDuties: [
      "Research, diagnosis, troubleshooting, and resolving customer issues with software and hardware",
      "Maintaintanance and co-ordination local and global networks hardware, software and related computer equipment",
      "Installation, maintenance, troubleshooting and upgrading database server hardware and software",
    ],
    technologies: [
      "Linux",
      "Windows Server",
      "Active Directory",
      "Group Policy",
      "E1 Evfrat",
      "1C Enterprise",
      "MS SQL Server",
    ],
  },
  {
    title:
      "Bachelor’s and Master’s degree in Aircraft Control Systems Engineering",
    subtitle: "Baltic State Technical University VOENMEH",
    date: "September 2008 - June 2014 (6 years)",
    icon: <Icons.education />,
    description:
      "The educational program was focused on modeling processes occurring in radio-electronic systems, maintenance of complex computerized radio-electronic systems, a detailed study of microprocessor technology, programmable logic integrated circuits and on-board computers.",
    visible: true,
  },
];

export function TimelineBlock() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    if (isMobile) {
      setAnimated(false);
    } else {
      setAnimated(true);
    }
  }, [isMobile, animated]);
  return (
    <div className="relative flex flex-col gap-10">
      <h2 className="responsive-heading-xl">Timeline</h2>
      <Image
        src={wavesPattern as StaticImageData}
        alt="abstract pattern dots"
        className="absolute -left-96 top-32 -z-10 w-full  opacity-10"
      />
      <VerticalTimeline
        animate={animated}
        layout="1-column-left"
        lineColor="hsl(var(--light-green))"
      >
        {timelineElements.map((element, index) => (
          <VerticalTimelineElement
            visible={element.visible ?? false}
            key={index}
            contentStyle={{
              background: "hsl(var(--muted))",
              color: "hsl(var(--foreground))",
              boxShadow: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid  hsl(var(--muted))" }}
            date={element.date}
            iconStyle={{
              boxShadow: "hsl(var(--light-green)) 0px 0px 0px 3px ",
              background: "hsl(var(--background))",
            }}
            icon={element.icon}
          >
            <h3 className="mb-1 text-xl">{element.title}</h3>
            <h4 className="mb-5 italic">{element.subtitle}</h4>
            {element.description && <p>{element.description}</p>}
            {element.bulletPoints && (
              <ul>
                {element.bulletPoints.map((bulletPoint, index) => (
                  <li className="list-inside list-disc" key={index}>
                    {bulletPoint}
                  </li>
                ))}
              </ul>
            )}
            {element.mainDuties && element.mainDuties?.length > 0 && (
              <>
                <h4 className="mb-2 mt-5 text-lg font-bold">Main duties:</h4>
                <ul>
                  {element.mainDuties.map((mainDuty, index) => (
                    <li className="list-inside list-disc" key={index}>
                      {mainDuty}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {element.technologies && element.technologies.length > 0 && (
              <>
                <h4 className="mb-2 mt-5 text-lg font-bold">
                  Main technologies:
                </h4>
                <ul className="flex flex-wrap gap-3">
                  {element.technologies.map((technology, index) => (
                    <li
                      className="flex items-center gap-1 whitespace-nowrap rounded-full border border-foreground px-3"
                      key={index}
                    >
                      {getTechnologyLogo(technology)} {technology}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
