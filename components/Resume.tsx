import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { ArrowDownToLine, HardDriveDownload } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

interface Content {
  name: string;
  title: string;
  image: string;
  education_list: Education[];
  experience_list: Experience[];
  language_list: Language[];
  social_list: Social[];
}

interface Education {
  course: string;
  institution: string;
  period: string;
  result: string;
  image: string;
}

interface Experience {
  title: string;
  institution: string;
  period: string;
  description: string[];
  image: string;
}

interface Language {
  name: string;
  proficiency: string;
}

interface Social {
  name: string;
  link: string;
  icon: any;
}

const resumeContent: Content = {
  name: "Muhammad Syaamil Faiq",
  title: "Software Engineer",
  image: "/syaamilfaiq-bgwhite.jpg",
  education_list: [
    {
      course: "Bachelor of Computer Science (Software Engineering)",
      institution: "Universiti Malaya",
      period: "Oct 2020 - Feb 2024",
      result: "3.89",
      image: "/um-logo.jpg",
    },
  ],
  experience_list: [
    {
      title: "Software Engineer 1",
      institution: "Dell Technologies",
      period: "Mar 2024 - present",
      description: [],
      image: "/dell-technologies-logo-short.jpg",
    },
    {
      title: "Frontend Developer",
      institution: "Revo Global",
      period: "Feb 2023 - Mar 2024",
      description: [
        "Guided a dynamic team of 3 in designing captivating web, mobile apps, and a compelling landing site, prioritizing user engagement and satisfaction.",
        "Led frontend development, adhering to industry best practices, ensuring a solid foundation for exceptional user experience and performance.",
        "Employed a no-code solution to swiftly deploy the company's landing site, accelerating time to market and staying ahead in the industry.",
        "Facilitated communication with upper management, advocating for operational expenditures to enhance team productivity and efficiency.",
      ],
      image: "/revoglobal_logo.jpg",
    },
    {
      title: "Intern",
      institution: "Dell Technologies",
      period: "Aug 2022 - Jan 2023",
      description: [
        "Responsible for updating the design and developing an internal portal incorporating dynamic data used by 133,000 Dell employees worldwide.",
        "Overhauled the design of existing portal to abide by the latest official design system, providing a better user experience.",
        "Devised a long-term action plan to cater for the growing number of products in the team's catalogue by designing and developing a content management system (CMS) for the portal.",
        "Expedited portal's content maintenance processes by 70% with the deployment of the CMS for the product managers.",
      ],
      image: "/dell-technologies-logo-short.jpg",
    },
  ],
  language_list: [
    {
      name: "Malay",
      proficiency: "Native speaker",
    },
    {
      name: "English",
      proficiency: "Full working proficiency",
    },
    {
      name: "Mandarin",
      proficiency: "Limited working proficiency",
    },
  ],
  social_list: [
    {
      name: "linkedin.com/in/syaamilfaiq/",
      link: "https://www.linkedin.com/in/syaamilfaiq/",
      icon: <LinkedInLogoIcon className="w-5 h-5" />,
    },
    {
      name: "github.com/escornbar",
      link: "https://www.github.com/escornbar/",
      icon: <GitHubLogoIcon className="w-5 h-5" />,
    },
    {
      name: "syaamil1136@gmail.com",
      link: "mailto:syaamil1136@gmail.com",
      icon: <EnvelopeClosedIcon className="w-5 h-5" />,
    },
    {
      name: "syaamilfaiq.com",
      link: "https://www.syaamilfaiq.net",
      icon: <GlobeIcon className="w-5 h-5" />,
    },
  ],
};

export default function Resume() {
  return (
    <Card className={cn("w-full max-w-4xl")}>
      <CardHeader className="bg-primary rounded-t-xl"></CardHeader>
      <CardContent className="p-4">
        <ResumeContent resume={resumeContent} />
      </CardContent>
      <CardFooter className="flex justify-end items-center p-6 bg-primary rounded-b-xl text-base">
        {/* <Button variant={"secondary"} asChild>
          <Link href="/syaamil-resume.pdf" download="syaamil-resume.pdf" target="_blank" rel="noreferrer" className="flex justify-center items-center">
            <HardDriveDownload className="w-4 h-4 mr-2" />
            download
          </Link>
        </Button> */}
      </CardFooter>
    </Card>
  );
}

function ResumeContent({ resume }: { resume: Content }) {
  return (
    <Card className="bg-white h-[80vh] overflow-hidden overflow-y-scroll rounded-none border-none">
      <CardHeader className="flex flex-col justify-center items-center gap-4 bg-[#8ecae6]/20">
        <Avatar className="w-40 h-40 border-4 border-white">
          <AvatarImage src={resume.image} alt={resume.name}></AvatarImage>
          <AvatarFallback>sf</AvatarFallback>
        </Avatar>
        <CardTitle className="flex flex-col gap-2">
          <span className="text-black/50 text-4xl text-center font-black">
            {resume.name}
          </span>
          <span className="text-black/50 text-center font-normal">
            {resume.title}
          </span>
        </CardTitle>
      </CardHeader>
      <div className="space-y-6 py-6">
        <CardContent className="flex flex-col gap-4 py-0">
          {/* Education */}
          <p className="text-[#8ecae6]/70 text-xl font-semibold">Education</p>
          {resume.education_list.map((education, index) => (
            <div className="flex gap-4" key={index}>
              <Avatar className="w-14 h-14 border-2 border-[#8ecae6]/20">
                <AvatarImage
                  src={education.image}
                  alt={education.institution}
                ></AvatarImage>
                <AvatarFallback>sf</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="text-black/60 text-xs">{education.period}</p>
                <p className="text-black text-sm font-semibold">
                  {education.course}
                </p>
                <p className="text-black text-sm">CGPA: {education.result}</p>
              </div>
            </div>
          ))}
        </CardContent>
        <CardContent className="flex flex-col gap-4 py-0">
          {/* Experience */}
          <p className="text-[#8ecae6]/70 text-xl font-semibold">Experience</p>
          {resume.experience_list.map((experience, index) => (
            <div className="flex gap-4" key={index}>
              <Avatar className="w-14 h-14 border-2 border-[#8ecae6]/20">
                <AvatarImage
                  src={experience.image}
                  alt={experience.institution}
                ></AvatarImage>
                <AvatarFallback>sf</AvatarFallback>
              </Avatar>
              <div className="">
                <p className="text-black/60 text-xs">{experience.period}</p>
                <p className="text-black text-sm font-semibold">
                  {experience.title}
                </p>
                <ul className="ml-4 list-disc [&>li]:mt-2">
                  {experience.description.map((desc, index) => (
                    <li key={index} className="text-black text-sm">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
        <CardContent className="flex flex-col gap-4 py-0">
          {/* Languages */}
          <p className="text-[#8ecae6]/70 text-xl font-semibold">
            Languages Spoken
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:justify-between">
            {resume.language_list.map((language, index) => (
              <div key={index} className="">
                <p className=" text-black font-bold text-sm">{language.name}</p>
                <p className=" text-black text-sm">{language.proficiency}</p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardContent className="flex flex-col gap-4 py-0">
          {/* Contact */}
          <p className="text-[#8ecae6]/70 text-xl font-semibold">
            Reach out to me via
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:justify-between">
            {resume.social_list.map((social, index) => (
              <Link
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 hover:text-[#8ecae6]/70 flex items-center gap-2 transition-colors duration-500 ease-in-out"
                key={index}
              >
                {social.icon}
                <span className="text-black/60 hover:text-[#8ecae6]/70 text-sm transition-colors duration-500 ease-in-out">
                  {social.name}
                </span>
              </Link>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
