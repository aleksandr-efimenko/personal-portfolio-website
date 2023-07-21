import { Icons } from "@/components/icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelineElements = [
  {
    title: "C# Software Engineer",
    subtitle: "Self-employed, Saint Petersburg, Russia",
    date: "March 2016 – Present",
    icon: <Icons.work />,
    description: "",
    bulletPoints: [
      "Developed from scratch a system that allows to collect and analyze information about all domain names in the .ru zone (about 5,000,000 domain names)",
      "The system includes an MS SQL database (more than 50 relational tables), a .Net core 3.1 Razor pages web application for managing and monitoring, about 10 docker containers for collecting data independently from external APIs and parsing websites by Selenium web driver.",
      "The web application includes forms for CRUD operations processed by Entity Framework, API interface for connecting with the docker containers and transfer data by JSON, dashboard with main metrics and built-in authentication service.",
    ],
    mainDuties: [],
  },
  {
    title: "IT Consultant",
    subtitle:
      "Self-employed, Joint-Stock Company “Project Development Institute No.1”, Saint Petersburg, Russia",
    date: "September 2017 - August 2019",
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
  },
  {
    title: "Lead Engineer",
    subtitle:
      "Joint-Stock Company “Project Development Institute No.1”, Saint Petersburg, Russia",
    date: "May 2015 - August 2017",
    icon: <Icons.work />,
    description: "",
    mainDuties: [
      "Implemented and modified to customer needs digital document management software for 4 organizations with a number of employees from 20 to 150.",
      "This software reduced the average time for approval of documentation within the organization from 7 to 2 days because of role-based routes, made generating new documents more than 3 times faster because of using pre-installed templates, and made searching for a document instantaneous.",
      "Main duties included “1C Document Management” setup, maintenance and development business solutions using 1C programming language embedded in the “1C Enterprise” platform. Managing, monitoring and maintaining MS SQL Server databases, ensuring database security, stability and system availability. Maintaining databases backup and recovery infrastructure",
    ],
  },
  {
    title: "Technical Support Engineer",
    subtitle:
      "FGKU North-West territorial administration of the property relations, Saint Petersburg, Russia",
    date: "December 2010 - April 2015",
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
  },
];

export function TimelineBlock() {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-heading-xl">Timeline</h2>

      <VerticalTimeline layout="1-column-left">
        {timelineElements.map((element, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={element.date}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={element.icon}
          >
            <h3 className="vertical-timeline-element-title">{element.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {element.subtitle}
            </h4>
            {element.description && <p>{element.description}</p>}
            {element.bulletPoints && (
              <ul>
                {element.bulletPoints.map((bulletPoint, index) => (
                  <li key={index}>{bulletPoint}</li>
                ))}
              </ul>
            )}
            {element.mainDuties && (
              <ul>
                {element.mainDuties.map((mainDuty, index) => (
                  <li key={index}>{mainDuty}</li>
                ))}
              </ul>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
