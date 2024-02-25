import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-center items-center gap-4 py-6">
        <span className="text-sm">
          &copy;&nbsp;&nbsp;Syaamil Fa&apos;iq &#x2022; 2024
        </span>
        <SocialLinks />
      </div>
    </>
  );
}

function SocialLinks() {
  return (
    <>
      <div className="flex gap-6">
        <Link
          href="/github.com/escornbar"
          className="hover:text-primary dark:hover:text-primary-foreground transition-colors ease-in-out duration-500"
        >
          <GitHubLogoIcon className="w-5 h-5" />
        </Link>
        <Link
          href="/linked.in/syaamilfaiq"
          className="hover:text-primary dark:hover:text-primary-foreground transition-colors ease-in-out duration-500"
        >
          <LinkedInLogoIcon className="w-5 h-5" />
        </Link>
        <Link
          href="/x.com/syaamilfaiq"
          className="hover:text-primary dark:hover:text-primary-foreground transition-colors ease-in-out duration-500"
        >
          <TwitterLogoIcon className="w-5 h-5" />
        </Link>
        <Link
          href="mailto:syaamil1136@gmail.com"
          className="hover:text-primary dark:hover:text-primary-foreground transition-colors ease-in-out duration-500 "
        >
          <EnvelopeClosedIcon className="w-5 h-5" />
        </Link>
      </div>
    </>
  );
}
